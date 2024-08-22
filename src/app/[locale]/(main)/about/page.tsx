import { useTranslations } from 'next-intl'

export default function AboutPage() {
  const t = useTranslations()
  return <div>{t('about')}</div>
}
