import Link from "next/link";

export default function HomeBuyingPlanPage() {
  return (
    <main className="bg-slate-50 min-h-screen">

      <section className="mx-auto max-w-5xl px-6 py-20">

        <div className="rounded-3xl bg-white shadow-xl p-10">

          <div className="text-center">

            <span className="inline-block rounded-full bg-green-100 px-4 py-2 text-green-700 font-semibold">
              Personalized Buyer Roadmap
            </span>

            <h1 className="mt-6 text-5xl font-bold text-blue-900">
              Create Your Home Buying Plan
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
              Answer a few simple questions and we'll build a customized
              roadmap designed specifically for your home buying journey in
              Washington State.
            </p>

          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8">

            <div className="rounded-2xl border p-6">

              <h2 className="text-xl font-bold text-blue-900">
                Your Personalized Plan Includes
              </h2>

              <ul className="mt-6 space-y-4 text-gray-700">

                <li>✅ Buying timeline</li>

                <li>✅ Mortgage program recommendations</li>

                <li>✅ Down payment assistance review</li>

                <li>✅ Veteran benefit review</li>

                <li>✅ Credit improvement guidance</li>

                <li>✅ Step-by-step action plan</li>

              </ul>

            </div>

            <div className="rounded-2xl bg-blue-900 text-white p-8 flex flex-col justify-center">

              <h2 className="text-3xl font-bold">
                Takes about 3 minutes
              </h2>

              <p className="mt-6 text-blue-100">
                No complicated forms.
                No obligation.
                Just personalized guidance from Washington Home Buyer Academy.
              </p>

              <Link
                href="/home-buying-plan/start"
                className="mt-10 rounded-full bg-white px-8 py-4 text-center font-bold text-blue-900"
              >
                Start My Plan →
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}