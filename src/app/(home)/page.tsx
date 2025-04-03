import { SignUpButton } from "@clerk/nextjs"
import { Check, Cloud, FileText, Lock, Share2, Upload } from "lucide-react"
import { Button } from "~/components/ui/button"

export default async function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Pricing Section */}
      <section id="pricing" className="bg-gray-900 py-24">
        <div className="container mx-auto space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Simple, transparent pricing
            </h2>
            <p className="mx-auto max-w-[700px] text-lg text-gray-400">
              Choose the plan that&apos;s right for you or your team. All plans
              include a 14-day free trial.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col overflow-hidden rounded-lg border border-gray-800 bg-gray-900">
              <div className="p-6">
                <h3 className="text-xl font-bold">Free</h3>
                <p className="text-sm text-gray-400">For individual use</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="ml-1 text-gray-400">/month</span>
                </div>
              </div>
              <div className="grow border-t border-gray-800 p-6">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-gray-300" />
                    <span className="text-gray-300">5 GB storage</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-gray-300" />
                    <span className="text-gray-300">Basic file sharing</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-gray-300" />
                    <span className="text-gray-300">Web access</span>
                  </li>
                </ul>
              </div>
              <div className="border-t border-gray-800 p-6">
                <Button className="w-full border border-gray-700 bg-gray-800 text-gray-200 hover:bg-gray-700">
                  Get Started
                </Button>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg border border-gray-700 bg-gray-900">
              <div className="p-6">
                <div className="mb-2 w-fit rounded-full bg-gray-800 px-4 py-1 text-xs font-bold text-gray-200">
                  POPULAR
                </div>
                <h3 className="text-xl font-bold">Pro</h3>
                <p className="text-sm text-gray-400">For professionals</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$12</span>
                  <span className="ml-1 text-gray-400">/month</span>
                </div>
              </div>
              <div className="border-t border-gray-800 p-6">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-gray-300" />
                    <span className="text-gray-300">2 TB storage</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-gray-300" />
                    <span className="text-gray-300">
                      Advanced sharing options
                    </span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-gray-300" />
                    <span className="text-gray-300">
                      Web, desktop, and mobile access
                    </span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-gray-300" />
                    <span className="text-gray-300">
                      30-day version history
                    </span>
                  </li>
                </ul>
              </div>
              <div className="border-t border-gray-800 p-6">
                <Button className="w-full border border-gray-700 bg-gray-800 text-gray-200 hover:bg-gray-700">
                  Start Free Trial
                </Button>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg border border-gray-800 bg-gray-900">
              <div className="p-6">
                <h3 className="text-xl font-bold">Business</h3>
                <p className="text-sm text-gray-400">
                  For teams and organizations
                </p>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$30</span>
                  <span className="ml-1 text-gray-400">/user/month</span>
                </div>
              </div>
              <div className="border-t border-gray-800 p-6">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-gray-300" />
                    <span className="text-gray-300">Unlimited storage</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-gray-300" />
                    <span className="text-gray-300">
                      Advanced security controls
                    </span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-gray-300" />
                    <span className="text-gray-300">
                      Team collaboration features
                    </span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-gray-300" />
                    <span className="text-gray-300">Admin console</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-gray-300" />
                    <span className="text-gray-300">24/7 priority support</span>
                  </li>
                </ul>
              </div>
              <div className="border-t border-gray-800 p-6">
                <Button className="w-full border border-gray-700 bg-gray-800 text-gray-200 hover:bg-gray-700">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto py-24 md:py-32">
        <div className="flex flex-col items-center space-y-6 rounded-2xl border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 p-8 text-center md:p-12 lg:p-16">
          <h2 className="text-3xl font-bold tracking-tighter text-gray-200 md:text-4xl">
            Ready to get started with Boxcloud?
          </h2>
          <p className="max-w-[600px] text-lg text-gray-400">
            Join thousands of individuals and businesses who trust Boxcloud with
            their files.
          </p>
          <Button
            size="lg"
            className="border border-gray-600 bg-gray-700 text-gray-200 hover:bg-gray-600"
          >
            Start your free trial
          </Button>
        </div>
      </section>
    </>
  )
}

function HeroSection() {
  return (
    <section className="relative space-y-8 py-16 md:py-20">
      <div className="via-gray-850 absolute inset-0 z-0 bg-gradient-to-br from-gray-900 to-gray-950"></div>
      <div className="container relative z-10 mx-auto space-y-8">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h1 className="max-w-[700px] text-balance text-4xl font-bold tracking-tighter md:text-6xl">
            Store and share at the speed of thought with Boxcloud
          </h1>
          <p className="max-w-[700px] text-lg text-gray-400 md:text-xl">
            Secure cloud storage and file sharing for everyone
          </p>
          <div className="flex flex-col gap-4 pt-4 sm:flex-row">
            <SignUpButton>
              <Button
                size="lg"
                className="border border-gray-700 bg-gradient-to-r from-gray-800 to-gray-900 text-gray-200 hover:from-gray-700 hover:to-gray-800"
              >
                Start for free
              </Button>
            </SignUpButton>
          </div>
        </div>
        <div className="relative mx-auto aspect-video overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 md:w-full lg:w-10/12 xl:w-9/12">
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/cc9762151773283.6326ccdf2b778.png"
              alt="Boxcloud dashboard preview"
              className="object-cover"
              width={1280}
              height={720}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function FeaturesSection() {
  return (
    <section id="features" className="container mx-auto space-y-16 py-24">
      <div className="space-y-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
          Everything you need in one place
        </h2>
        <p className="mx-auto max-w-[700px] text-lg text-gray-400">
          Boxcloud provides all the tools you need to store, manage, and share
          your files securely.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="flex flex-col items-center space-y-4 rounded-lg border border-gray-800 bg-gray-900/30 p-6 text-center">
          <div className="rounded-full bg-gray-800 p-3">
            <Upload className="h-8 w-8 text-gray-300" />
          </div>
          <h3 className="text-xl font-bold">Easy File Upload</h3>
          <p className="text-gray-400">
            Drag and drop files directly into Boxcloud or upload from any device
            with just a few clicks.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-4 rounded-lg border border-gray-800 bg-gray-900/30 p-6 text-center">
          <div className="rounded-full bg-gray-800 p-3">
            <Share2 className="h-8 w-8 text-gray-300" />
          </div>
          <h3 className="text-xl font-bold">Seamless Sharing</h3>
          <p className="text-gray-400">
            Share files and folders with anyone, even if they don&apos;t have a
            Boxcloud account.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-4 rounded-lg border border-gray-800 bg-gray-900/30 p-6 text-center">
          <div className="rounded-full bg-gray-800 p-3">
            <Lock className="h-8 w-8 text-gray-300" />
          </div>
          <h3 className="text-xl font-bold">Advanced Security</h3>
          <p className="text-gray-400">
            Your files are protected with enterprise-grade encryption both in
            transit and at rest.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-4 rounded-lg border border-gray-800 bg-gray-900/30 p-6 text-center">
          <div className="rounded-full bg-gray-800 p-3">
            <FileText className="h-8 w-8 text-gray-300" />
          </div>
          <h3 className="text-xl font-bold">Document Preview</h3>
          <p className="text-gray-400">
            Preview documents, images, videos, and more without downloading them
            first.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-4 rounded-lg border border-gray-800 bg-gray-900/30 p-6 text-center">
          <div className="rounded-full bg-gray-800 p-3">
            <Cloud className="h-8 w-8 text-gray-300" />
          </div>
          <h3 className="text-xl font-bold">Access Anywhere</h3>
          <p className="text-gray-400">
            Access your files from any device with our web, desktop, and mobile
            applications.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-4 rounded-lg border border-gray-800 bg-gray-900/30 p-6 text-center">
          <div className="rounded-full bg-gray-800 p-3">
            <Check className="h-8 w-8 text-gray-300" />
          </div>
          <h3 className="text-xl font-bold">Version History</h3>
          <p className="text-gray-400">
            Track changes and restore previous versions of your files with our
            version history feature.
          </p>
        </div>
      </div>
    </section>
  )
}
