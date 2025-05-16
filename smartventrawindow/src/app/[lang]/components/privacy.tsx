"use client";
import { usePathname } from "next/navigation";
export const PrivacyPolicy = ({ translation }: { translation: any }) => {
  const pathname = usePathname();
  const currentLang = pathname.startsWith("/nl") ? "nl" : pathname.startsWith("/en") ? "en" : "fr";
  return (
    <main className="p-8 py-32 max-w-3xl mx-auto text-sm leading-relaxed">
      <h1 className="text-3xl font-bold mb-6">{translation.privacy.title}</h1>

      <p>{translation.privacy.intro}</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        {translation.privacy.sections.data.title}
      </h2>
      <ul className="list-disc pl-5">
        {translation.privacy.sections.data.items.map((item: string, i: number) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        {translation.privacy.sections.purpose.title}
      </h2>
      <ul className="list-disc pl-5">
        {translation.privacy.sections.purpose.items.map((item: string, i: number) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        {translation.privacy.sections.legal.title}
      </h2>
      <p>{translation.privacy.sections.legal.text}</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        {translation.privacy.sections.retention.title}
      </h2>
      <p>{translation.privacy.sections.retention.text}</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        {translation.privacy.sections.sharing.title}
      </h2>
      <p>{translation.privacy.sections.sharing.text}</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        {translation.privacy.sections.cookies.title}
      </h2>
      <p>
        {translation.privacy.sections.cookies.text}{" "}
        <a href={`/${currentLang}/cookies`} className="underline text-blue-600">
          {translation.privacy.sections.cookies.link}
        </a>
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        {translation.privacy.sections.rights.title}
      </h2>
      <ul className="list-disc pl-5">
        {translation.privacy.sections.rights.items.map((item: string, i: number) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <p className="mt-2">
        {translation.privacy.sections.rights.contact}:{" "}
        <strong>
          <a href="mailto:privacy@tabeven.app">privacy@tabeven.app</a>
        </strong>
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        {translation.privacy.sections.changes.title}
      </h2>
      <p>
        {translation.privacy.sections.changes.text}{" "}
        <strong>{translation.privacy.lastUpdated}</strong>.
      </p>
    </main>
  );
};
