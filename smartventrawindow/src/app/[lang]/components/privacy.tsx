"use client";
import { usePathname } from "next/navigation";

export const PrivacyPolicy = ({ translation }: { translation: any }) => {
  const pathname = usePathname();
  const currentLang = pathname.startsWith("/nl") ? "nl" : pathname.startsWith("/en") ? "en" : "fr";

  return (
    <main className="p-8 py-32 max-w-3xl mx-auto text-sm leading-relaxed">
      <h1 className="text-3xl font-bold mb-6">{translation.privacy.title}</h1>
      <p className="mb-4">{translation.privacy.intro}</p>

      {/* Sectie 1: Wie zijn wij */}
      <h2 className="text-xl font-semibold mt-6 mb-2">{translation.privacy.sections.who.title}</h2>
      <p>{translation.privacy.sections.who.text}</p>
      <ul className="mt-2 mb-4 pl-5 list-disc">
        <li><strong>Email:</strong> <a href={`mailto:${translation.privacy.sections.who.contact.email}`} className="underline text-blue-600">{translation.privacy.sections.who.contact.email}</a></li>
        <li><strong>Adres:</strong> {translation.privacy.sections.who.contact.address}</li>
        <li><strong>Telefoon:</strong> {translation.privacy.sections.who.contact.phone}</li>
      </ul>

      {/* Sectie 2: Verzamelde gegevens */}
      <h2 className="text-xl font-semibold mt-6 mb-2">{translation.privacy.sections.data.title}</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm border border-gray-300 mb-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">Categorie</th>
              <th className="p-2 border">Voorbeelden</th>
              <th className="p-2 border">Verzameld via</th>
            </tr>
          </thead>
          <tbody>
            {translation.privacy.sections.data.table.map((row: any, i: number) => (
              <tr key={i}>
                <td className="p-2 border">{row.category}</td>
                <td className="p-2 border">{row.examples}</td>
                <td className="p-2 border">{row.source}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>{translation.privacy.sections.data.note}</p>

      {/* Sectie 3: Doeleinden */}
      <h2 className="text-xl font-semibold mt-6 mb-2">{translation.privacy.sections.purpose.title}</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm border border-gray-300 mb-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">Doel</th>
              <th className="p-2 border">Voorbeeld</th>
              <th className="p-2 border">Wettelijke grondslag</th>
            </tr>
          </thead>
          <tbody>
            {translation.privacy.sections.purpose.table.map((row: any, i: number) => (
              <tr key={i}>
                <td className="p-2 border">{row.purpose}</td>
                <td className="p-2 border">{row.example}</td>
                <td className="p-2 border">{row.legal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Sectie 4-6: Tekstvelden */}
      {["legal", "retention", "sharing"].map((key) => (
        <div key={key}>
          <h2 className="text-xl font-semibold mt-6 mb-2">
            {translation.privacy.sections[key].title}
          </h2>
          <p>{translation.privacy.sections[key].text}</p>
        </div>
      ))}

      {/* Sectie 7: Cookies */}
      <h2 className="text-xl font-semibold mt-6 mb-2">{translation.privacy.sections.cookies.title}</h2>
      <p>
        {translation.privacy.sections.cookies.text}{" "}
        <a href={`/${currentLang}/cookies`} className="underline text-blue-600">
          {translation.privacy.sections.cookies.link}
        </a>
      </p>

      {/* Sectie 8: Jouw rechten */}
      <h2 className="text-xl font-semibold mt-6 mb-2">{translation.privacy.sections.rights.title}</h2>
      <ul className="list-disc pl-5 mb-2">
        {translation.privacy.sections.rights.items.map((item: string, i: number) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <p>
        
        {translation.privacy.sections.rights.contact}{" "}
        <strong>
          <a href="mailto:smartventrawindow@outlook.com" className="underline text-blue-600">
          smartventrawindow@outlook.com
          </a>
        </strong>
      </p>

      {/* Sectie 9: Wijzigingen */}
      <h2 className="text-xl font-semibold mt-6 mb-2">
        {translation.privacy.sections.changes.title}
      </h2>
      <p>
        {translation.privacy.sections.changes.text}{" "}
        <strong>{translation.privacy.sections.changes.lastUpdated}</strong>.
      </p>
    </main>
  );
};
