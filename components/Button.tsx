import Link from "next/link";

type ButtonProps = {
  classname: string;
  label: string;
  href: string;
};

export function Button({ classname, label, href }: ButtonProps) {
  return (
    <button className={classname}>
      <Link href={href}>{label}</Link>
    </button>
  );
}
