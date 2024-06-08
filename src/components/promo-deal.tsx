import CheersSvg from "../assets/promos/cheers.png";
import Discount50 from "../assets/promos/discount_50.png";

const promoIcons: Record<string, any> = {
  discount_50: Discount50,
  bogo: CheersSvg,
};

interface PromoIconProps {
  icon: string;
}

function PromoIcon({ icon }: PromoIconProps) {
  // Correct! JSX type can be a capitalized variable.
  const Icon = promoIcons[icon];
  return <img src={Icon} alt={icon} className="size-8 m-1 object-contain" />;
}

interface PromoDealProps {
  title: string;
  description: string;
  icon: string;
}

export function PromoDeal({ title, description, icon }: PromoDealProps) {
  return (
    <div className="py-1 rounded-xl shrink-0 pr-7 pl-2 flex items-center gap-2  bg-brand-blue/5 border-brand-blue border">
      <PromoIcon icon={icon} />
      <p className="text-gray-600 text-xs flex-1 font-medium whitespace-pre-wrap">
        {`${title}\n${description}`}
      </p>
    </div>
  );
}
