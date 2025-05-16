import React from 'react'
import { PrivacyPolicy } from '../components/privacy'
import getTranslation from '../components/translation/getTranslation';
import { Locale } from '@/app/utils/i18n-config';

const page = async ({ params }: { params: Promise<{ lang: Locale }> }) => {
  const resolvedParams = await params;
  const translation = await getTranslation(resolvedParams.lang);

  return (
    <PrivacyPolicy translation={translation} />
  )
}

export default page