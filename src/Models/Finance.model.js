import mongoose from "mongoose";

const financeSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      required: true
    },

    user_id: {
      type: Number,
      required: true
    },

    monthly_income: {
      type: Number,
      required: true
    },

    monthly_expense_total: {
      type: Number,
      required: true
    },

    savings_rate: {
      type: Number,
      default: 0
    },

    budget_goal: {
      type: Number,
      default: 0
    },

    financial_scenario: {
      type: String,
      enum: ["inflation", "normal", "recession"],
      default: "normal"
    },

    credit_score: {
      type: Number
    },

    debt_to_income_ratio: {
      type: Number
    },

    loan_payment: {
      type: Number,
      default: 0
    },

    investment_amount: {
      type: Number,
      default: 0
    },

    subscription_services: {
      type: Number,
      default: 0
    },

    emergency_fund: {
      type: Number,
      default: 0
    },

    transaction_count: {
      type: Number,
      default: 0
    },

    fraud_flag: {
      type: Number,
      enum: [0, 1],
      default: 0
    },

    discretionary_spending: {
      type: Number,
      default: 0
    },

    essential_spending: {
      type: Number,
      default: 0
    },

    income_type: {
      type: String,
      default: "Salary"
    },

    rent_or_mortgage: {
      type: Number,
      default: 0
    },

    category: {
      type: String
    },

    cash_flow_status: {
      type: String,
      enum: ["Positive", "Negative"],
      default: "Positive"
    },

    financial_advice_score: {
      type: Number,
      min: 0,
      max: 10
    },

    financial_stress_level: {
      type: String,
      enum: ["Low", "Medium", "High"]
    },

    actual_savings: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true
  }
);

const Finance = mongoose.model("Finance", financeSchema);
export default Finance;
