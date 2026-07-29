import Link from "next/link";

export default function Home() {
  return (
    <main>

      {/* Hero Section */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-24 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-5xl font-bold tracking-tight text-blue-900">
              Your Path to Homeownership Starts Here
            </h1>

            <p className="mt-6 text-lg text-gray-600">
              Washington Home Buyer Academy helps you understand the home
              buying process, explore mortgage options, and make confident
              decisions before purchasing your first home.
            </p>

            <div className="mt-8 flex gap-4">

              <Link
                href="/home-buying-plan"
                className="rounded-full bg-green-700 px-7 py-3 font-semibold text-white"
              >
                Create My Home Buying Plan
              </Link>

              <Link
                href="/academy"
                className="rounded-full border-2 border-blue-900 px-7 py-3 font-semibold text-blue-900"
              >
                Learn How It Works
              </Link>

            </div>
          </div>


          <div className="rounded-2xl bg-white shadow-xl p-8">

            <h2 className="text-2xl font-bold text-blue-900">
              Where are you in your journey?
            </h2>


            <div className="mt-6 space-y-4">

              <div className="rounded-xl border p-5">
                🏠 <strong>I’m Ready to Buy</strong>
                <p className="text-sm text-gray-600 mt-2">
                  I want to understand financing and get started.
                </p>
              </div>


              <div className="rounded-xl border p-5">
                📚 <strong>I’m Preparing</strong>
                <p className="text-sm text-gray-600 mt-2">
                  I want to improve my credit and learn the process.
                </p>
              </div>


              <div className="rounded-xl border p-5">
                💡 <strong>I’m Exploring</strong>
                <p className="text-sm text-gray-600 mt-2">
                  I want to understand my options.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* Roadmap */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <h2 className="text-3xl font-bold text-center text-blue-900">
          Your Home Buying Roadmap
        </h2>


        <div className="grid md:grid-cols-5 gap-5 mt-10">

          {[
            "Check Your Readiness",
            "Understand Financing",
            "Get Pre-Approved",
            "Find Your Home",
            "Close With Confidence",
          ].map((step, index) => (

            <div
              key={step}
              className="rounded-xl border p-6 text-center"
            >

              <div className="text-3xl font-bold text-green-700">
                {index + 1}
              </div>

              <p className="mt-3 font-medium">
                {step}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* CTA */}
      <section className="bg-blue-900 text-white">

        <div className="mx-auto max-w-5xl px-6 py-20 text-center">

          <h2 className="text-4xl font-bold">
            Not sure where to start?
          </h2>

          <p className="mt-4 text-lg">
            Get a personalized roadmap for your home buying journey.
          </p>

          <Link
            href="/home-buying-plan"
  className="rounded-full bg-green-700 px-7 py-3 font-semibold text-white"
>
  Create My Home Buying Plan
          </Link>

        </div>

      </section>

    </main>
  );
}