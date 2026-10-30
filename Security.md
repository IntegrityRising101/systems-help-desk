# Security Policy

## Supported Versions

We actively maintain security updates for the following versions of the Systems Help Desk.

| Version | Supported          |
| ------- | ------------------ |
| main branch (latest) | ✅ Yes |
| < 1.0   | ❌ No              |

The live site at https://integrityrising101.github.io/systems-help-desk/ always runs the latest `main` branch. We recommend always using the latest deployed version.

This project is a static frontend (HTML/CSS/JS) hosted on GitHub Pages with no backend database. There is no user authentication stored in this repo.

## Reporting a Vulnerability

We take security seriously for our Whop customers and small business users.

**If you find a security issue:**

1. **Do NOT open a public GitHub issue.**
2. Email us privately at: **security@integrityrising.com** (or DM via Whop Help Chat if you are a customer)
3. Include:
   - Description of the vulnerability
   - Steps to reproduce
   - Impact (what could an attacker do?)
   - Your environment (browser, OS)
   - Optional: Suggested fix

**What to expect:**

- **Acknowledgment:** Within 24-48 hours
- **Initial assessment:** Within 72 hours
- **Fix & disclosure:** We aim to patch critical issues within 7 days and will credit you in the release notes if you want.

## Scope

**In scope:**
- `index.html` help desk portal
- GitHub Pages deployment workflow (`.【entity-github¦canonical_name=GitHub】/workflows/pages.yml`)
- Client-side ticket handling, knowledge base, system status display

**Out of scope:**
- Whop platform itself (report to Whop security)
- 【entity-GitHub¦canonical_name=GitHub】 Pages infrastructure (report to 【entity-GitHub¦canonical_name=GitHub】)
- Social engineering or physical attacks
- Denial of Service that requires large traffic

## Best Practices for Users

- Do not paste sensitive PII, passwords, or API keys into the demo ticket form (it's frontend-only for now)
- Keep your browser updated
- If you fork this repo for your own business, enable 【entity-GitHub¦canonical_name=GitHub】 Dependabot and Pages security settings

## Disclosure Policy

We follow coordinated disclosure:
- You report privately, we fix
- Once fixed and deployed to `main`, we publish a brief security note
- We will not take legal action against good-faith researchers who follow this policy

Thank you for helping keep small businesses secure.

— Integrity Rising
