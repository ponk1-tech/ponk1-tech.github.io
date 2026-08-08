interface PlanFeatureRow {
  label: string;
  value: string;
}

interface PlanCardData {
  name: string;
  features: PlanFeatureRow[];
  highlight?: boolean;
}

interface PlanComparisonProps {
  plans: PlanCardData[];
}

export default function PlanComparison({ plans }: PlanComparisonProps) {
  return (
    <div className="aiken-plan-grid">
      {plans.map((plan) => (
        <article
          key={plan.name}
          className={
            plan.highlight ? "aiken-plan-card aiken-plan-card-highlight" : "aiken-plan-card"
          }
        >
          <h3>{plan.name}</h3>
          <dl className="aiken-plan-card-list">
            {plan.features.map((feature) => (
              <div className="aiken-plan-card-row" key={feature.label}>
                <dt>{feature.label}</dt>
                <dd>{feature.value}</dd>
              </div>
            ))}
          </dl>
        </article>
      ))}
    </div>
  );
}
