import { clsx } from 'clsx'

export function LogoCloud({
  className,
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={clsx(
        className,
        'flex justify-between pt-10 max-sm:mx-auto max-sm:max-w-md max-sm:flex-wrap max-sm:justify-evenly max-sm:gap-x-4 max-sm:gap-y-4',
      )}
    >
      <img
        alt="Cardano"
        src="/logo-cloud/cardano-transparent.png"
        className="h-18 max-sm:mx-auto sm:h-16 lg:h-24"
      />
      <img
        alt="Bull"
        src="/logo-cloud/bull.webp"
        className="h-22 lg:h-30 scale-150 max-sm:mx-auto sm:h-20"
      />
      <img
        alt="Myria"
        src="/logo-cloud/myria.png"
        className="h-18 max-sm:mx-auto sm:h-16 lg:h-24"
      />
      <img
        alt="XAI"
        src="/logo-cloud/xai.jpg"
        className="h-18 scale-150 max-sm:mx-auto sm:h-16 lg:h-24"
      />
    </div>
  )
}
