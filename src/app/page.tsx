import { BentoCard } from '@/components/bento-card'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Keyboard } from '@/components/keyboard'
import { LinkedAvatars } from '@/components/linked-avatars'
import { LogoCloud } from '@/components/logo-cloud'
import { LogoCluster } from '@/components/logo-cluster'
import { LogoTimeline } from '@/components/logo-timeline'
import { Map } from '@/components/map'
import { Navbar } from '@/components/navbar'
import { Screenshot } from '@/components/screenshot'
import { Heading, Subheading } from '@/components/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  description: 'Node Networks - Staking workds for EVERYONE.',
}

function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-inset ring-black/5" />
      <Container className="relative">
        <Navbar />
        <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-48 md:pt-32">
          <h1 className="font-display text-balance text-4xl font-medium tracking-tight text-gray-950 sm:text-7xl md:text-8xl">
            Staking works for EVERYONE.
          </h1>
          <p className="mt-8 max-w-xl text-lg/7 font-medium text-gray-950/75 sm:text-xl/8">
            Node Networks is a community driven hosted staking pools service and
            consultancy group with a global team aimed at helping others
            maximize staking rewards through our global reach.
          </p>
          <div className="mt-8">
            <a
              href="#nodes"
              className="inline-flex items-center gap-2 rounded-full bg-gray-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-950/90"
            >
              View Our Projects
              <svg
                className="size-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </div>
        </div>
      </Container>
    </div>
  )
}

function FeatureSection() {
  return (
    <div className="overflow-hidden">
      <Container className="pb-24">
        <Heading as="h2" className="max-w-3xl">
          A snapshot of your entire sales pipeline.
        </Heading>
        <Screenshot
          width={1216}
          height={768}
          src="/screenshots/app.png"
          className="mt-16 h-[36rem] sm:h-auto sm:w-[76rem]"
        />
      </Container>
    </div>
  )
}

function BentoSection() {
  return (
    <Container>
      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          eyebrow="Insight"
          title="Get perfect clarity"
          description="Radiant uses social engineering to build a detailed financial picture of your leads. Know their budget, compensation package, social security number, and more."
          graphic={
            <div className="h-80 bg-[url(/screenshots/profile.png)] bg-[size:1000px_560px] bg-[left_-109px_top_-112px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
        <BentoCard
          eyebrow="Analysis"
          title="Undercut your competitors"
          description="With our advanced data mining, you'll know which companies your leads are talking to and exactly how much they're being charged."
          graphic={
            <div className="absolute inset-0 bg-[url(/screenshots/competitors.png)] bg-[size:1100px_650px] bg-[left_-38px_top_-73px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />
        <BentoCard
          eyebrow="Speed"
          title="Built for power users"
          description="It's never been faster to cold email your entire contact list using our streamlined keyboard shortcuts."
          graphic={
            <div className="flex size-full pl-10 pt-10">
              <Keyboard highlighted={['LeftCommand', 'LeftShift', 'D']} />
            </div>
          }
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />
        <BentoCard
          eyebrow="Source"
          title="Get the furthest reach"
          description="Bypass those inconvenient privacy laws to source leads from the most unexpected places."
          graphic={<LogoCluster />}
          className="lg:col-span-2"
        />
        <BentoCard
          eyebrow="Limitless"
          title="Sell globally"
          description="Node Networks is a community driven hosted staking pools service and consultancy group."
          graphic={<Map />}
          className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
        />
      </div>
    </Container>
  )
}

function DarkBentoSection() {
  return (
    <div className="mx-2 mt-2 rounded-4xl bg-gray-900 py-32">
      <Container>
        <Subheading dark>Outreach</Subheading>
        <Heading as="h3" dark className="mt-2 max-w-3xl">
          Customer outreach has never been easier.
        </Heading>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <BentoCard
            dark
            eyebrow="Networking"
            title="Sell at the speed of light"
            description="Our RadiantAI chat assistants analyze the sentiment of your conversations in real time, ensuring you're always one step ahead."
            graphic={
              <div className="h-80 bg-[url(/screenshots/networking.png)] bg-[size:851px_344px] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-t-4xl lg:col-span-4 lg:rounded-tl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Integrations"
            title="Meet leads where they are"
            description="With thousands of integrations, no one will be able to escape your cold outreach."
            graphic={<LogoTimeline />}
            // `!overflow-visible` is needed to work around a Chrome bug that disables the mask on the graphic.
            className="z-10 !overflow-visible lg:col-span-2 lg:rounded-tr-4xl"
          />
          <BentoCard
            dark
            eyebrow="Meetings"
            title="Smart call scheduling"
            description="Automatically insert intro calls into your leads' calendars without their consent."
            graphic={<LinkedAvatars />}
            className="lg:col-span-2 lg:rounded-bl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Engagement"
            title="Become a thought leader"
            description="RadiantAI automatically writes LinkedIn posts that relate current events to B2B sales, helping you build a reputation as a thought leader."
            graphic={
              <div className="h-80 bg-[url(/screenshots/engagement.png)] bg-[size:851px_344px] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-b-4xl lg:col-span-4 lg:rounded-br-4xl"
          />
        </div>
      </Container>
    </div>
  )
}

function StakingInfo() {
  return (
    <div className="overflow-hidden py-16">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div className="mx-auto max-w-2xl text-center">
            <Subheading>Staking Details</Subheading>
            <Heading as="h3" className="mt-2">
              Cardano
            </Heading>

            <div className="mt-8 space-y-6">
              <div>
                <p className="text-sm/6 font-medium text-gray-900">
                  Node Ticket Symbol
                </p>
                <p className="mt-1 text-3xl font-semibold text-gray-900">
                  NODE
                </p>
              </div>
              <div>
                <p className="text-sm/6 font-medium text-gray-900">
                  Delegation Address
                </p>
                <p className="mt-1 break-all text-sm/6 text-gray-600">
                  de950fe87de4b25c5a63b5ddf89578adf92e36cdf2035f1da11797d4
                </p>
              </div>
              <div>
                <a
                  href="https://cardanoscan.io/pool/pool1m62sl6rauje9cknrkhwl39tc4hujudkd7gp478dpz7tagmjr8wm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm/6 font-medium text-blue-600 hover:text-blue-500"
                >
                  View Pool on Cardanoscan
                  <svg
                    className="size-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-2xl text-center">
            <Subheading>Private Staking Services</Subheading>
            <Heading as="h3" className="mt-2">
              Beam, 3ull, Myria, and XAI
            </Heading>
            <p className="mt-4 text-2xl font-semibold text-gray-900">
              Private Client Staking
            </p>
            <div className="mt-8 space-y-6">
              <div>
                <p className="text-sm/6 font-medium text-gray-900">
                  Service Type
                </p>
                <p className="mt-1 text-lg text-gray-600">
                  Private staking services for clients
                </p>
              </div>
              <div>
                <p className="text-sm/6 font-medium text-gray-900">
                  Availability
                </p>
                <p className="mt-1 text-lg text-gray-600">By request only</p>
              </div>
              <div>
                <a
                  href="mailto:info@nodenetworks.org"
                  className="inline-flex items-center gap-2 text-sm/6 font-medium text-blue-600 hover:text-blue-500"
                >
                  Contact for Private Staking
                  <svg
                    className="size-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

function Testimonials() {
  return (
    <div className="overflow-hidden py-16">
      <Container>
        <div>
          <Subheading>What our clients say</Subheading>
          <Heading as="h3" className="mt-2">
            Trusted by stakers worldwide.
          </Heading>
        </div>
      </Container>
      <div className="mx-4 mt-16 grid grid-cols-1 gap-8 sm:mx-8 sm:grid-cols-2 lg:mx-16 lg:grid-cols-3">
        <div className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-gray-200">
          <blockquote>
            <p className="text-lg/7 text-gray-600">
              &ldquo;The team at Node Networks was incredibly responsive and
              helpful throughout our entire staking journey. They answered all
              our questions promptly and made the process seamless.&rdquo;
            </p>
          </blockquote>
          <div className="mt-6 border-t border-gray-200 pt-6">
            <p className="text-sm/6 font-medium text-gray-900">
              Former FSN Staker
            </p>
            <p className="text-sm/6 text-gray-600">Staking since 2019</p>
          </div>
        </div>
        <div className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-gray-200">
          <blockquote>
            <p className="text-lg/7 text-gray-600">
              &ldquo;We&apos;ve been staking with Node Networks for over a year
              now, and they&apos;ve consistently delivered on their promises.
              The rewards have been exactly as advertised, and their service is
              top-notch.&rdquo;
            </p>
          </blockquote>
          <div className="mt-6 border-t border-gray-200 pt-6">
            <p className="text-sm/6 font-medium text-gray-900">
              Former FSN Staker
            </p>
            <p className="text-sm/6 text-gray-600">Staking since 2021</p>
          </div>
        </div>
        <div className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-gray-200">
          <blockquote>
            <p className="text-lg/7 text-gray-600">
              &ldquo;What impressed me most was how clearly they explained every
              aspect of the staking process. No question was too basic, and they
              made sure we understood everything before we started.&rdquo;
            </p>
          </blockquote>
          <div className="mt-6 border-t border-gray-200 pt-6">
            <p className="text-sm/6 font-medium text-gray-900">
              Cardano Staker
            </p>
            <p className="text-sm/6 text-gray-600">Staking since 2023</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <Hero />
      <main className="flex-grow">
        <Container className="py-16">
          <div id="nodes">
            <LogoCloud />
          </div>
        </Container>
        <StakingInfo />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
