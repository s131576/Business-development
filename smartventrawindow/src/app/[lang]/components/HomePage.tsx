import React from 'react'
import getTranslation from './translation/getTranslation'
import { Locale } from '../../utils/i18n-config'

export const HomePage = ({lang}:{lang:string}) => {

  const translation= getTranslation(lang as Locale)
  return (
    <div>HomePage</div>
  )
}
