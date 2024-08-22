import { Header } from '@/widgets/header/ui'

interface Props {
  children: React.ReactNode
}

export default function MainAppLayout({ children }: Props) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
