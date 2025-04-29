import { PlusGrid, PlusGridItem, PlusGridRow } from '@/components/plus-grid'
import { Container } from './container'
import { Gradient } from './gradient'
import { Link } from './link'
import { Logo } from './logo'

function SitemapHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="text-sm/6 font-medium text-gray-950/50">{children}</h3>
}

function SitemapLinks({ children }: { children: React.ReactNode }) {
  return <ul className="mt-6 space-y-4 text-sm/6">{children}</ul>
}

function SitemapLink(props: React.ComponentPropsWithoutRef<typeof Link>) {
  return (
    <Link
      {...props}
      className="font-medium text-gray-950 data-[hover]:text-gray-950/75"
    />
  )
}

function Sitemap() {
  return (
    <div className="flex gap-8">
      <SitemapLink href="#logo-cloud">Nodes</SitemapLink>
      <SitemapLink href="https://docs.nodenetworks.org/">FAQ</SitemapLink>
    </div>
  )
}

function SocialIconX(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path d="M12.6 0h2.454l-5.36 6.778L16 16h-4.937l-3.867-5.594L2.771 16H.316l5.733-7.25L0 0h5.063l3.495 5.114L12.6 0zm-.86 14.376h1.36L4.323 1.539H2.865l8.875 12.837z" />
    </svg>
  )
}

function SocialIconEmail(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path d="M14.5 0h-13C.675 0 0 .675 0 1.5v13c0 .825.675 1.5 1.5 1.5h13c.825 0 1.5-.675 1.5-1.5v-13c0-.825-.675-1.5-1.5-1.5zm-.75 4.5L8 9.25 2.25 4.5V3.25L8 8 13.75 3.25V4.5z" />
    </svg>
  )
}

function SocialIconTelegram(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.98 1.26-5.61 3.71-.53.36-1.01.53-1.47.52-.49-.01-1.43-.28-2.13-.51-.86-.29-1.54-.44-1.48-.93.03-.25.38-.51 1.05-.78 4.12-1.79 6.87-2.97 8.26-3.54 3.93-1.63 4.75-1.91 5.26-1.91.12 0 .38.03.55.17.14.12.18.28.2.45-.02.14-.02.3-.04.42z" />
    </svg>
  )
}

function SocialLinks() {
  return (
    <>
      <Link
        href="https://x.com/networks_node"
        target="_blank"
        aria-label="Visit us on X"
        className="text-gray-950 data-[hover]:text-gray-950/75"
      >
        <SocialIconX className="size-4" />
      </Link>
      <Link
        href="https://t.me/NodeNetworksADAPool"
        target="_blank"
        aria-label="Join our Telegram channel"
        className="text-gray-950 data-[hover]:text-gray-950/75"
      >
        <SocialIconTelegram className="size-5" />
      </Link>
      <Link
        href="mailto:info@nodenetworks.org"
        aria-label="Email us"
        className="text-gray-950 data-[hover]:text-gray-950/75"
      >
        <SocialIconEmail className="size-4" />
      </Link>
    </>
  )
}

function Copyright() {
  return (
    <div className="text-sm/6 text-gray-950">
      &copy; {new Date().getFullYear()} Node Networks. All rights reserved.
    </div>
  )
}

export function Footer() {
  return (
    <footer>
      <Gradient className="relative">
        <div className="absolute inset-2 rounded-4xl bg-white/80" />
        <Container>
          <PlusGrid className="pb-16">
            <PlusGridRow>
              <div className="grid grid-cols-2 gap-y-10 pb-6 lg:grid-cols-6 lg:gap-8">
                <div className="col-span-2 flex">
                  <PlusGridItem className="pt-6 lg:pb-6">
                    <Logo className="h-9" />
                  </PlusGridItem>
                </div>
                <div className="col-span-2 flex items-center justify-end lg:col-span-4">
                  <PlusGridItem>
                    <Sitemap />
                  </PlusGridItem>
                </div>
              </div>
            </PlusGridRow>
            <PlusGridRow className="flex justify-between">
              <div>
                <PlusGridItem className="py-3">
                  <Copyright />
                </PlusGridItem>
              </div>
              <div className="flex">
                <PlusGridItem className="flex items-center gap-8 py-3">
                  <SocialLinks />
                </PlusGridItem>
              </div>
            </PlusGridRow>
          </PlusGrid>
        </Container>
      </Gradient>
    </footer>
  )
}
