import { ReactComponent as CheersSvg } from "../assets/promos/cheers.svg";
import { ReactComponent as Discount50 } from "../assets/promos/discount_50.svg";

const promoIcons: Record<string, React.FunctionComponent> = {
  discount: Discount50,
  bogo: CheersSvg,
};

interface PromoIconProps {
  icon: string;
}

function PromoIcon({ icon }: PromoIconProps) {
  // Correct! JSX type can be a capitalized variable.
  const Icon = promoIcons[icon];
  return <Icon />;
}

interface PromoDealProps {
  description: string;
  icon: string;
}

export function PromoDeal({ description, icon }: PromoDealProps) {
  return (
    <div className="p-1 rounded-xl shrink-0 w-36 flex items-center gap-2 bg-white bg-brand-blue/5 border-brand-blue border">
      <div className="size-7 flex items-center">
        <PromoIcon icon={icon} />
      </div>
      <span className="text-gray-600 text-xs flex-1 font-medium">
        {description}
      </span>
    </div>
  );
}
