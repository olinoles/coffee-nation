import { PromoDeal } from "./promo-deal";

const promos = [
  {
    description: "Buy one,\nGet one free",
    icon: "bogo",
  },
  {
    description: "50% OFF\nAny coffee",
    icon: "discount",
  },
  {
    description: "50% OFF",
    icon: "bogo",
  },
  {
    description: "50% OFF",
    icon: "discount",
  },
];

export function PromoDeals() {
  return (
    <div className="flex gap-2 no-scrollbar overflow-x-scroll">
      {promos.map((promo, index) => (
        <PromoDeal key={index} {...promo} />
      ))}
    </div>
  );
}
