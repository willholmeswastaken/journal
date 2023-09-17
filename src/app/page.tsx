import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='container'>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            The open-source personal daily journal that everyone can use.
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Having access to a quality and easy to use journal is something that
            we believe everyone should have access to.
          </p>
          <div className="space-x-4">
            <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
              Get Started
            </Link>
          </div>
        </div>
      </section>
      <section
        id="features"
        className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Features
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Journal is a fully featured journaling app that is built with
            ease of use in mind. It is built using the latest technologies and
            is open-source.
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[120px] sm:h-[180px] flex-col justify-between rounded-md p-6">
              <div className="space-y-2">
                <h2 className="font-bold">Auto-Save</h2>
                <p className="text-sm text-muted-foreground">
                  Never lose your thoughts again. Journal automatically saves your
                  entries as you type.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[120px] sm:h-[180px] flex-col justify-between rounded-md p-6">
              <div className="space-y-2">
                <h2 className="font-bold">WYSIWYG Editor</h2>
                <p className="text-sm text-muted-foreground">
                  Powered by Novel we have a fully featured WYSIWYG editor that
                  allows you to format your entries.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[120px] sm:h-[180px] flex-col justify-between rounded-md p-6">
              <div className="space-y-2">
                <h2 className="font-bold">Streaks</h2>
                <p className="text-sm text-muted-foreground">
                  Get motivated to write every day with our streaks feature.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[120px] sm:h-[180px] flex-col justify-between rounded-md p-6">
              <div className="space-y-2">
                <h2 className="font-bold">Export your journals</h2>
                <p className="text-sm text-muted-foreground">
                  Tired of us? Export your journals to markdown and take them
                  with you.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[120px] sm:h-[180px] flex-col justify-between rounded-md p-6">
              <div className="space-y-2">
                <h2 className="font-bold">Flashbacks</h2>
                <p className="text-sm text-muted-foreground">
                  Get a flashback of what you wrote on this day last year.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[120px] sm:h-[180px] flex-col justify-between rounded-md p-6">
              <div className="space-y-2">
                <h2 className="font-bold">Much more to come</h2>
                <p className="text-sm text-muted-foreground">
                  We are just getting started. We have a lot more planned for
                  Journal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
