import Image from "next/image";

const valuesIconPaths = {
  document: "/values-icons/document.svg",
  balance: "/values-icons/balance.svg",
  person: "/values-icons/person.svg",
  handshake: "/values-icons/handshake.svg",
} as const;

type ValuesIconName = keyof typeof valuesIconPaths;

type ValuesIconProps = {
  name: ValuesIconName;
  size?: number;
  className?: string;
};

export function ValuesIcon({
  name,
  size = 80,
  className = "",
}: ValuesIconProps) {
  return (
    <Image
      src={valuesIconPaths[name]}
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
      className={className}
      unoptimized
    />
  );
}

export type { ValuesIconName };
