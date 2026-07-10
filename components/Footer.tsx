export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">

      <div className="mx-auto max-w-7xl px-6 py-12">

        <h2 className="text-xl font-bold">
          Washington Home Buyer Academy
        </h2>

        <p className="mt-3 text-sm text-gray-300">
          Education and resources to help Washington home buyers make
          confident decisions.
        </p>

        <div className="mt-8 text-sm text-gray-400">

          <p>
            Michael Ross | Area Manager / Loan Officer
          </p>

          <p>
            Mutual of Omaha Mortgage
          </p>

          <p>
            NMLS #42104
          </p>

        </div>

        <p className="mt-8 text-xs text-gray-500">
          © {new Date().getFullYear()} Washington Home Buyer Academy.
          All rights reserved.
        </p>

      </div>

    </footer>
  );
}