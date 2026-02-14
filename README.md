# 📊 FinanceTracker

A web application to track index funds, stocks, and manage personal wishlists — built with Angular, Express, and Firebase in an Nx monorepo.

## 🛠️ Stack

🔧 Scalable monorepo with Nx

⚡️ Fast Angular v19 frontend

🚀 Lightweight Express backend

🔥 Powered by AI

🔐 Firebase for realtime and scalable data

🧩 Modular feature organization

External APIs: NewsAPI, Finnhub, or Yahoo Finance

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

## 🚀 Features

- ✅ **Index funds**
  - List
    - Sort
    - Filter
  - Show live prices
- ✅ **Stocks**
  - List
    - Sort
    - Filter
  - Show live prices
- ✅ **Wishlists**
  - Create
  - Read
  - Update
  - Delete
- ✅ **AI** powered portfolio suggestions
- ✅ Live **finance news** feed
- ✅ Firebase for database and auth

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
npx nx e2e frontend-e2e
```

## Useful links

Learn more:

- [Learn more about this Nx workspace setup](https://nx.dev/getting-started/intro#learn-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Angular](https://angular.dev/overview)
- [Firebase](https://firebase.google.com/)
- [ExpressJs](https://expressjs.com/)

## bolt.new -> genrate UI examples

Can you create a UI prototype for a desktop web app called finance-tracker. It has to be modern, clean and clear from a UX/UI perspective.
It allows the user to:

- Login
- Connect to a list of available banks, to track your current balance, investments, etc.
- Index funds: list, search, filter, add to whishlist, show live prices/data
- Stocks: list, sort, filter, show live prices/data
- Wishlists: create, read, update, delete
- AI powered portfolio suggestions
- Live finance news feed
