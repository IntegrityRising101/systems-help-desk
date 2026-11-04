import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import ticketsRouter from './routes/tickets.js';
import customersRouter from './routes/customers.js';
import kbRouter from './routes/kb.js';
import Database from 'better-sqlite3';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client')));

const dbPath = path.join(__dirname, 'db/helpdesk.db');
const db = new Database(dbPath);
app.locals.db = db;

app.use('/api/tickets', ticketsRouter);
app.use('/api/customers', customersRouter);
app.use('/api/kb', kbRouter);

app.get('/api/stats', (req, res) => {
  const stats = {
    open: db.prepare("SELECT COUNT(*) as c FROM tickets WHERE status = 'Open'").get().c,
    inProgress: db.prepare("SELECT COUNT(*) as c FROM tickets WHERE status = 'In Progress'").get().c,
    waiting: db.prepare("SELECT COUNT(*) as c FROM tickets WHERE status = 'Waiting'").get().c,
    resolved: db.prepare("SELECT COUNT(*) as c FROM tickets WHERE status = 'Resolved'").get().c,
    urgent: db.prepare("SELECT COUNT(*) as c FROM tickets WHERE priority = 'Urgent' AND status != 'Resolved'").get().c,
    total: db.prepare("SELECT COUNT(*) as c FROM tickets").get().c,
  };
  res.json(stats);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.listen(PORT, () => {
  console.log(`✅ Help Desk running on http://localhost:${PORT}`);
});
