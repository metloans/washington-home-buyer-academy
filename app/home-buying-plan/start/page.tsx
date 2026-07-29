export default function StartPlanPage() {
  return (
    <main className="min-h-screen bg-slate-50">

      <section className="mx-auto max-w-4xl px-6 py-20">

        <div className="rounded-3xl bg-white shadow-xl p-10">

          {/* Progress */}
          <div className="mb-10">

            <div className="flex justify-between text-sm font-medium text-gray-500">
              <span>Step 1 of 8</span>
              <span>12% Complete</span>
            </div>

            <div className="mt-3 h-3 rounded-full bg-gray-200">
              <div className="h-3 w-[12%] rounded-full bg-green-700"></div>
            </div>

          </div>


          {/* Question */}
          <div className="text-center">

            <span className="inline-block rounded-full bg-blue-100 px-4 py-2 font-semibold text-blue-900">
              Let's build your plan
            </span>

            <h1 className="mt-8 text-4xl font-bold text-blue-900">
              When are you hoping to buy a home?
            </h1>

            <p className="mt-4 text-lg text-gray-600">
              This helps us create a timeline and recommend the right next steps.
            </p>

          </div>


          {/* Options */}
          <div className="mt-10 grid gap-4">

            {[
              "I'm ready now",
              "Within 3 months",
              "3–6 months",
              "6–12 months",
              "I'm just researching",
            ].map((option) => (

              <button
                key={option}
                className="rounded-xl border-2 border-gray-200 p-5 text-left text-lg font-semibold text-gray-700 transition hover:border-blue-900 hover:bg-blue-50"
              >
                {option}
              </button>

            ))}

          </div>


        </div>

      </section>

    </main>
  );
}