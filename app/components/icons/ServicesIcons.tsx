import Image from "next/image";

const serviceIconPaths = {
  home: "/services-icons/exact/home.svg",
  scroll: "/services-icons/exact/scroll.svg",
  "heart-crack": "/services-icons/exact/heart-crack.svg",
  heart: "/services-icons/exact/heart.svg",
  gift: "/services-icons/exact/gift.svg",
  building: "/services-icons/exact/building.svg",
  globe: "/services-icons/exact/globe.svg",
  scale: "/services-icons/exact/scale.svg",
  landmark: "/services-icons/exact/landmark.svg",
  calculator: "/services-icons/exact/calculator.svg",
  percent: "/services-icons/exact/percent.svg",
  "trending-up": "/services-icons/exact/trending-up.svg",
  "line-chart": "/services-icons/exact/line-chart.svg",
  "file-text": "/services-icons/exact/file-text.svg",
} as const;

const toolIconPaths = {
  "simulateur-pret": serviceIconPaths.calculator,
  "frais-mainlevee": serviceIconPaths.percent,
  barometre: serviceIconPaths["trending-up"],
  "frais-acte": serviceIconPaths["file-text"],
  "plus-value": serviceIconPaths["line-chart"],
  "droits-succession": serviceIconPaths.scale,
} as const;

type ServiceIconName = keyof typeof serviceIconPaths;
type ToolIconName = keyof typeof toolIconPaths;

type IconProps = {
  size?: number;
  className?: string;
};

function ServiceIcon({
  name,
  size = 160,
  className = "",
}: IconProps & { name: ServiceIconName }) {
  return (
    <Image
      src={serviceIconPaths[name]}
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
      className={className}
      unoptimized
    />
  );
}

function ToolIcon({
  name,
  size = 180,
  className = "",
}: IconProps & { name: ToolIconName }) {
  return (
    <Image
      src={toolIconPaths[name]}
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
      className={className}
      unoptimized
    />
  );
}

export { ServiceIcon, ToolIcon };
export type { ServiceIconName, ToolIconName };
