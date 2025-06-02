import Image from "next/image";

export function AudienceSection() {
  return (
    <section>
      <picture>
        {/* mobile first */}
        <source srcSet="/images/people-mobile.svg" media="(max-width: 767px)" />
        {/* desktop fallback */}
        <Image
          src="/images/people.svg"
          width={1440}
          height={816}
          sizes="100vw"
          alt="who is it for"
        />
      </picture>
    </section>
  );
}
