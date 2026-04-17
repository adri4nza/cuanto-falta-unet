import './App.css'

const partials = [1, 2, 3, 4]
const selectedPartials = 4

const completedGrades = [
  { id: 1, grade: 90, weight: 20 },
  { id: 2, grade: 80, weight: 25 },
  { id: 3, grade: 75, weight: 30 },
]

function App() {
  return (
    <div className="mx-auto flex min-h-dvh max-w-md flex-col bg-[#0b1214] font-sans text-white sm:border-x sm:border-[#1e2a2e]">      {/* ── Header ── */}
      <header className="flex items-center justify-between px-5 pt-4 pb-2">
        <div className="flex items-center gap-2.5">
          {/* Logo placeholder */}
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#2dd4bf]/15">
            <svg
              className="h-5 w-5 text-[#2dd4bf]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </div>
          <span className="text-base font-semibold tracking-wide text-gray-100">
            Cuánto Falta UNET
          </span>
        </div>
        {/* Menu dots */}
        <button className="p-2 text-gray-400">
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
            <circle cx="10" cy="4" r="1.5" />
            <circle cx="10" cy="10" r="1.5" />
            <circle cx="10" cy="16" r="1.5" />
          </svg>
        </button>
      </header>

      {/* ── Scrollable content ── */}
      <main className="flex-1 overflow-y-auto px-5 pb-28">
        {/* ── Select Partials ── */}
        <section className="mt-4">
          <h2 className="mb-3 text-[11px] font-bold tracking-widest text-gray-400 uppercase">
            Select Partials
          </h2>
          <div className="flex gap-2">
            {partials.map((n) => (
              <button
                key={n}
                className={`flex h-11 flex-1 items-center justify-center rounded-full text-sm font-semibold transition-colors ${n === selectedPartials
                    ? 'border-2 border-[#2dd4bf] bg-[#2dd4bf]/10 text-[#2dd4bf]'
                    : 'border border-[#1e2a2e] bg-[#131c20] text-gray-400'
                  }`}
              >
                {n}
              </button>
            ))}
          </div>
        </section>

        {/* ── Completed Partials ── */}
        <section className="mt-7">
          <h2 className="mb-3 text-[11px] font-bold tracking-widest text-gray-400 uppercase">
            Completed Partials
          </h2>
          <div className="flex flex-col gap-3">
            {completedGrades.map((p) => (
              <div
                key={p.id}
                className="flex items-center gap-3 rounded-2xl bg-[#131c20] px-3 py-3"
              >
                {/* Partial number badge */}
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1a2a2e] text-xs font-bold text-[#2dd4bf]">
                  {p.id}
                </span>
                {/* Grade input (static) */}
                <div className="flex flex-1 items-center rounded-xl bg-[#0b1214] px-4 py-2.5">
                  <span className="flex-1 text-base font-semibold text-white">
                    {p.grade}
                  </span>
                  <span className="text-xs font-medium text-gray-500">pts</span>
                </div>
                {/* Weight dropdown (static) */}
                <div className="flex items-center gap-1 rounded-xl bg-[#0b1214] px-3.5 py-2.5">
                  <span className="text-sm font-medium text-gray-300">
                    {p.weight}%
                  </span>
                  <svg
                    className="h-3.5 w-3.5 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Final Partial (Predicted) ── */}
        <section className="mt-8">
          <div className="mb-3 flex items-center gap-3">
            <div className="flex items-center gap-2">
              <svg
                className="h-4 w-4 text-[#2dd4bf]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
                />
              </svg>
              <h2 className="text-[11px] font-bold tracking-widest text-gray-400 uppercase">
                Final Partial ({selectedPartials})
              </h2>
            </div>
            <span className="rounded-md bg-[#1a2a2e] px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-[#2dd4bf] uppercase">
              Predicted
            </span>
          </div>
          <div className="flex items-center gap-3 rounded-2xl bg-[#131c20]/60 px-3 py-3">
            {/* Pending grade input (static) */}
            <div className="flex flex-1 items-center rounded-xl bg-[#0b1214]/60 px-4 py-2.5">
              <span className="text-sm text-gray-500">Pending Grade...</span>
            </div>
            {/* Weight dropdown (static) */}
            <div className="flex items-center gap-1 rounded-xl bg-[#0b1214]/60 px-3.5 py-2.5">
              <span className="text-sm font-medium text-gray-500">25%</span>
              <svg
                className="h-3.5 w-3.5 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </section>

        {/* ── Results Card ── */}
        <section className="mt-8">
          <div className="rounded-3xl border border-[#1e2a2e] bg-linear-to-br from-[#151e21] to-[#111a1c] p-5">
            <h3 className="mb-5 text-base font-bold text-gray-100">
              Required to Achieve
            </h3>

            {/* Minimum Passing */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-300">
                  Minimum Passing (50)
                </p>
                <p className="mt-0.5 text-xs text-gray-500">
                  Status: Attainable
                </p>
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold text-[#2dd4bf]">32</span>
                <span className="ml-1 text-xs font-medium text-[#2dd4bf]/70">
                  pts
                </span>
              </div>
            </div>

            <div className="my-4 border-t border-[#1e2a2e]" />

            {/* Target Grade */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-300">
                  Target Grade (75)
                </p>
                <p className="mt-0.5 text-xs text-gray-500">
                  Requires near perfect score
                </p>
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold text-[#eab308]">98</span>
                <span className="ml-1 text-xs font-medium text-[#eab308]/70">
                  pts
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── Bottom Navigation Bar ── */}
      <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-[#1a2228] bg-[#0b1214]/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-lg items-center justify-around">
          {/* Definitiva */}
          <button className="flex flex-col items-center gap-1">
            <svg
              className="h-5 w-5 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
              />
            </svg>
            <span className="text-[10px] font-semibold tracking-wider text-gray-500 uppercase">
              Definitiva
            </span>
          </button>

          {/* Cuánto Falta (active) */}
          <button className="flex flex-col items-center gap-1">
            <svg
              className="h-5 w-5 text-[#2dd4bf]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
              />
            </svg>
            <span className="text-[10px] font-bold tracking-wider text-[#2dd4bf] uppercase">
              Cuánto Falta
            </span>
          </button>

          {/* Convertir */}
          <button className="flex flex-col items-center gap-1">
            <svg
              className="h-5 w-5 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
              />
            </svg>
            <span className="text-[10px] font-semibold tracking-wider text-gray-500 uppercase">
              Convertir
            </span>
          </button>
        </div>
        {/* Safe area for iOS home indicator */}
        <div className="h-[env(safe-area-inset-bottom)]" />
      </nav>
    </div>
  )
}

export default App
