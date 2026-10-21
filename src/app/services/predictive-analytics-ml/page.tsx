'use client'

import { AlertTriangle, Database, LayoutDashboard, LineChart, Target, TrendingUp, Users } from 'lucide-react'
import { ServiceDetailPage, type ServiceDetailContent } from '@/components/templates/ServiceDetailPage'

const content: ServiceDetailContent = {
  eyebrow: "PREDICTIVE ANALYTICS & ML MODELS",
  titleLead: "Predictive Analytics",
  titleAccent: "& ML Models",
  tagline: "Turn Historical Data into Accurate Revenue & Churn Forecasts.",
  intro: [
    "Your historical data holds patterns that can predict what happens next — which customers are likely to churn, which leads will convert, how much stock you will need, or what revenue to expect next quarter.",
    "Impetic builds custom machine learning models trained on your data, validated against real outcomes and delivered where your team can use them: in dashboards, CRMs or your own applications.",
  ],
  capabilitiesTitle: "Machine Learning Capabilities",
  capabilities: [
    { icon: TrendingUp, title: "Demand & revenue forecasting" },
    { icon: Users, title: "Churn prediction & retention scoring" },
    { icon: Target, title: "Lead scoring & propensity models" },
    { icon: AlertTriangle, title: "Anomaly & fraud detection" },
    { icon: Database, title: "Data preparation & feature engineering" },
    { icon: LayoutDashboard, title: "Predictions in dashboards & apps" },
  ],
  featureBlocks: [
    { icon: Database, title: "Start With the Right Data", description: "Good predictions depend on clean, relevant data. We assess what you have, combine sources, fix quality issues and engineer the features that carry real predictive signal." },
    { icon: LineChart, title: "Models Validated on Real Outcomes", description: "We test models on data they have not seen, compare them with simple baselines, and explain which factors drive predictions so the results are trustworthy and understandable." },
    { icon: LayoutDashboard, title: "Predictions Where Decisions Happen", description: "A model only creates value when people act on it. We deliver scores and forecasts inside your CRM, dashboards or apps, and retrain them as new data arrives." },
  ],
  examples: [
    { title: "Customer churn prediction", description: "A subscription business identifies customers at risk of cancelling so the team can intervene early with offers or support." },
    { title: "Lead scoring", description: "Sales teams prioritize the leads most likely to convert based on past deal data and engagement." },
    { title: "Inventory forecasting", description: "A retailer forecasts product demand by week to reduce stockouts and overstock." },
    { title: "Anomaly detection", description: "A finance or operations team is alerted automatically when transactions or metrics behave unusually." },
  ],
  benefits: [
    "Decisions based on forecasts, not gut feel",
    "Earlier action on risks and opportunities",
    "Better use of sales and retention effort",
    "Models that improve as data grows",
  ],
  processSteps: [
    { step: "01", title: "Problem & Data Review", description: "Define the prediction, success metric and data sources." },
    { step: "02", title: "Modeling", description: "Feature engineering, training and validation." },
    { step: "03", title: "Integration", description: "Deliver predictions into your tools." },
    { step: "04", title: "Monitoring & Retraining", description: "Track accuracy and retrain as data changes." },
  ],
  ctaTitle: "Turn Your Data into Predictions",
  ctaDescription: "Tell us what you want to forecast.",
  faqs: [
    { q: "How much data do we need for machine learning?", a: "It depends on the problem. Some forecasting and scoring models work with a few thousand records; more complex problems need more. We assess your data before recommending an approach." },
    { q: "How accurate will the predictions be?", a: "Accuracy depends on the data and problem. We measure performance on held-out data, compare it with simple baselines and share realistic expectations before deployment." },
    { q: "Can you explain why the model makes a prediction?", a: "Yes. We use interpretable models or explanation techniques to show which factors drive each prediction." },
    { q: "Where will we see the predictions?", a: "In the tools your team already uses — such as your CRM, BI dashboards or internal applications — or through an API." },
    { q: "Do models need maintenance?", a: "Yes. Customer behaviour and markets change, so we monitor accuracy and retrain models on new data regularly." },
  ],
}

export default function PredictiveAnalyticsMLPage() {
  return <ServiceDetailPage content={content} />
}
