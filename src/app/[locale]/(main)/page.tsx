import { Metadata } from 'next'
import { useTranslations } from 'next-intl'

export const metadata: Metadata = {
  title: 'intl-example Home Page',
  description: 'intl-example home description',
}

export default function MainPage() {
  const t = useTranslations()
  return (
    <div>
      Main Page content: <span className="font-bold">{t('hello')}</span>
    </div>
  )
}
