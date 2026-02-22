# 🏔️ AltumFinance: Reach your financial peak.

## 🎯 The Vision

AltumFinance is a high-performance, privacy-first financial command center. Built for the modern age where wealth is fragmented across traditional banks, digital brokers, and diverse asset classes, AltumFinance provides a single source of truth.

We bridge the gap between "Casual Saving" and "Hardcore Investing" through a clean, "Zen-like" interface that transforms raw data into actionable intelligence.

## 🛠️ Tech Stack

- **Architecture:** Scalable monorepo with Nx, and a modular feature organization
- **Frontend:** Angular 21 (utilizing Signals for reactive, real-time data binding).
- **Backend:** Node.js (Express) providing a secure API Gateway.
- **Database & Auth:** Firebase for realtime and scalable data (Firestore for wishlist/settings, Firebase Auth for Google integration).
- **Data Aggregation:** Plaid / TrueLayer (Banking) & Finnhub / NewsAPI / Yahoo Finance / Alpha Vantage (Market Data).

## 💎 Core Principles

- **Read-Only Security:** We never move money. We only illuminate it. By utilizing tokenized bank access, we never touch or store user credentials.
- **Mode-Based Experience:**
  - The Banking Vault: Minimalist focus on liquidity, burn-rates, and financial runway.
  - The Investor Terminal: Data-dense focus on P&L, sector allocation, and market pulse.
- **Actionable Insight:** We don't just show numbers; we show opportunities (e.g., the Wishlist and earnings calendars).

## 🎨 Brand Identity

Name: AltumFinance (Latin Altum: High/Deep).
Logo: The "A-Peak"—a geometric mountain with an integrated teal trend line.
Primary Palette: Deep Navy (#001f3f) — Stability & Trust.
Accent Palette: Electric Teal (#00ced1) — Innovation & Growth.
Typography: Montserrat (Headings) / Inter (Data & UI).

## 🚀 Key Features (MVP)

- **Unified Dashboard:** Aggregated Net Worth across all linked institutions.
- **Burn-Rate Logic:** Automatic calculation of financial "Runway" based on real spending.
- **Assets search:** Search assets information (Stocks, ETFs, Index Funds)
- **The Wishlist:** Real-time stock tracking with "Target Price" alerts.
- **Market Pulse News:** Ticker-specific news feed tailored to the user's interests.

## 🚀 Extra Features

- **Portfolio Suggestions:** Powered by AI

## 📁 Project Structure

```sh
finance-tracker/
├── apps/
│ ├── frontend/ 	# Angular application
│ └── backend/ 		# Express.js application
├── libs/
│ ├── ui/ 			# Shared UI components (cards, modals, etc.)
│ ├── models/ 		# Shared interfaces and types
│ ├── data-access/ 	# Angular services for Firebase integration
│ └── utils/ 		# Shared utilities (date formatting, helpers)
├── nx.json
├── workspace.json
├── package.json
└── tsconfig.base.json
```

## 🏗️ Setup & Run

### Install Nx Console

Nx Console is an editor extension that enriches your developer experience. It lets you run tasks, generate code, and improves code autocompletion in your IDE. It is available for VSCode and IntelliJ.
[Install Nx Console &raquo;](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

```bash
# Install dependencies
npm install

# Run frontend
npx nx serve frontend

# Run backend
npx nx serve backend
```

## 🧪 Testing

```bash
# Unit tests
npx nx test frontend
npx nx test backend

# E2E
npx nx e2e shell-e2e
```

## Useful links

Learn more:

- [Learn more about this Nx workspace setup](https://nx.dev/getting-started/intro#learn-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Angular](https://angular.dev/overview)
- [Firebase](https://firebase.google.com/)
- [ExpressJs](https://expressjs.com/)
