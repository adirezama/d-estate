import Link from "next/link";

export function CTA({
  classname,
  cta_label,
  cta_link,
  title,
  description,
}: {
  classname: string;
  cta_label: string;
  cta_link: string;
  title: string;
  description: string;
}) {
  return (
    <section className={classname}>
      <div className="container px-5 md:px-10 mx-auto">
        <div className="flex justify-center">
          <div className="w-full max-w-2xl items-center mx-auto text-center">
            <h2 className="text-white text-4xl font-medium mb-8 uppercase">
              {title}
            </h2>
            <p className="text-white text-lg opacity-60 leading-relaxed mb-8">
              {description}
            </p>
            <p>
              <Link
                href={cta_link}
                className="transition-all duration-300 ease-in-out inline-block text-xs tracking-[2px] font-bold uppercase bg-blueDark py-4 px-5 text-white hover:bg-white hover:text-blueDark hover:shadow-2xl">
                {cta_label}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
