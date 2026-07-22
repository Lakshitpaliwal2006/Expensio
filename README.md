# 💳 MERN Finance Tracker

A full-stack personal finance tracking application built using the **MERN Stack** and styled with **Tailwind CSS**. Easily log income/expenses, monitor monthly budgets, and analyze spending habits through interactive visualizations.

---

## 🛠️ Tech Stack

- **Frontend:** React.js, Tailwind CSS, Fontawesome Icons, Axios, Chart.js.
- **Backend:** Express.js
- **Database:** MongoDB Compass (Mongoose ORM)

---

## ✨ Features

- **Visual breakdown of Total Income, Total Expenses and Total Balance.
- **Fully Responsive layout built with Tailwind CSS for all devices.
- **Tag transactions Income & Expenses (e.g., Food, Rent, Salary, Entertainment). Displays spending trends using charts and graphs.
- **Calculates total savings and financial balance automatically.

---

## 📂 Project Structure

```text
  src/
  ├── Components/
  │   ├── Header.jsx          # Top navigation bar
  │   └── Main.jsx            # Main layout wrapper
  ├── Contexts/
  │   └── FinanceContext.jsx  # Global state for financial data & operations
  ├── Database/
  │   └── index.js            # MongoDB connection configuration
  ├── Mail/      # Email services ( empty )
  ├── Models/
  │   ├── Finance.model.js    # Schema for income & expense transactions
  │   └── User.models.js      # Schema for user authentication & accounts
  ├── Pages/
  │   ├── About.jsx           # Information page about the app
  │   ├── Income_Expenses.jsx # Page to view and log income/expenses
  │   ├── Overview.jsx        # Dashboard overview & summary charts
  │   └── Register.jsx        # User registration / onboarding page
  ├── Router/                 # Route configuration setup ( empty )
  ├── utils/       # ( empty )
  ├── App.css                 # Custom global styles
  ├── App.jsx                 # Root component with layout structure
  ├── index.css               # Tailwind CSS imports and directives
  └── main.jsx                # Application entry point.
├── .env          <-- Place your .env file HERE
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
