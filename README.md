# Systems Help Desk — Integrity Rising

Internal IT support portal for Integrity Rising. Built to power customer support for our Whop store + GitHub Pages.

**Live Site:** https://integrityrising101.github.io/systems-help-desk/

### What it is
A lightweight, no-backend help desk that handles:
- Ticket submission & tracking
- Knowledge base / self-serve docs
- System status monitoring
- My tickets dashboard

Built for speed on mobile and desktop.

### Features
- **Dashboard:** Open tickets, avg response time, systems up, KB stats
- **Submit Ticket:** Category, priority, subject, description, screenshot UI
- **Knowledge Base:** Searchable articles - Password Reset, VPN, Printers, Email, Software
- **System Status:** Real-time status for Email, VPN, File Server, Phone, etc.
- **My Tickets:** Filter by status / priority

### Tech Stack
- Single file: `index.html` (HTML / CSS / Vanilla JS)
- No build step, no backend — runs 100% on GitHub Pages
- Deploy: Commit to `main` → GitHub Pages auto-builds from `/ (root)`

### Whop Integration
Use this as your Whop help center:
1. In Whop dashboard → Store → Add custom page / link
2. Paste your Pages URL: `https://integrityrising101.github.io/systems-help-desk/`
3. Set as Support / Help Desk link

Your Drive guides are here: Whop Systems Help Desk - Site Files

### File Structure
### Deploy
Any change to `index.html` on `main` → auto-deploys in ~60 seconds.

---
Built by IntegrityRising101
