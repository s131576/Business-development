import ContactForm from "../components/ContactPage";
import getTranslation from "../components/translation/getTranslation";
import { Locale } from "@/app/utils/i18n-config";

const ContactPage = async ({ params }: { params: Promise<{ lang: Locale }> }) => {
  const resolvedParams = await params;
  const translation = await getTranslation(resolvedParams.lang);
  return (
    <ContactForm translation={translation}  />
  );
}

export default ContactPage
