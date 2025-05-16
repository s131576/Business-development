import { Locale } from "@/app/utils/i18n-config";
import getTranslation from "../components/translation/getTranslation";

const Page = async ({ params }: { params: Promise<{ lang: Locale }> }) => {
  const resolvedParams = await params;
  const translation = await getTranslation(resolvedParams.lang) as any; // tijdelijke oplossing

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow p-8 mt-32 max-w-3xl mx-auto text-sm leading-relaxed">
        <h1 className="text-3xl font-bold mb-6">{translation.cookiesverklaring.title}</h1>

        <p className="mb-4">{translation.cookiesverklaring.intro}</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">{translation.cookiesverklaring.types_title}</h2>
        <ul className="list-disc pl-5">
          {translation.cookiesverklaring.types.map((type: any, i: number) => (
            <li key={i}>
              <strong>{type.name}:</strong> {type.description}
            </li>
          ))}
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">{translation.cookiesverklaring.manage_title}</h2>
        <p>{translation.cookiesverklaring.manage_text}</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">{translation.cookiesverklaring.changes_title}</h2>
        <p>
          {translation.cookiesverklaring.changes_text}{" "}
          <strong>{translation.cookiesverklaring.lastUpdated}</strong>
        </p>
      </main>
    </div>
  );
};

export default Page;
