import { Button } from '@/shared/ui/button'

export const Header = () => {
  return (
    <div className="flex justify-between bg-cyan-200 w-full p-4">
      <div className="text-2xl">Logo</div>

      <Button>Button</Button>
    </div>
  )
}
