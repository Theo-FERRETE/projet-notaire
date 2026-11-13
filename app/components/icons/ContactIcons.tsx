import Image from "next/image";

const iconPaths = {
  address: "/contact-icons/address.svg",
  phone: "/contact-icons/phone.svg",
  email: "/contact-icons/email.svg",
  hours: "/contact-icons/clock.svg",
  pin: "/contact-icons/pin.svg",
} as const;

type ContactIconName = keyof typeof iconPaths;

type ContactIconProps = {
  name: ContactIconName;
  size?: number;
  className?: string;
};

export default function ContactIcon({
  name,
  size = 24,
  className = "",
}: ContactIconProps) {
  return (
    <Image
      src={iconPaths[name]}
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
      className={className}
      unoptimized
    />
  );
}

export type { ContactIconName };
