import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        <div>
          <Link href="/" className="text-xl font-bold text-blue-900">
            Washington Home Buyer Academy
          </Link>
          <p className="text-sm text-gray-600">
            Presented by Michael Ross | NMLS #42104
          </p>
        </div>

        <nav className="hidden md:flex items-center gap-8">

          <Link href="/academy" className="text-gray-700 hover:text-blue-900">
            Academy
          </Link>

          <Link href="/programs" className="text-gray-700 hover:text-blue-900">
            Loan Programs
          </Link>

          <Link href="/calculators" className="text-gray-700 hover:text-blue-900">
            Calculators
          </Link>

          <Link href="/resources" className="text-gray-700 hover:text-blue-900">
            Resources
          </Link>

          <Link
            href="/contact"
            className="rounded-full bg-green-700 px-6 py-3 font-semibold text-white"
          >
            Start My Home Plan
          </Link>

        </nav>

      </div>
    </header>
  );
}