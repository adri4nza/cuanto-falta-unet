export interface CompletedPartialItem {
  id: number
  grade: string | number
  weight: string | number
}

interface CompletedPartialsProps {
  items: CompletedPartialItem[]
  onGradeChange: (id: number, value: string) => void
  onWeightChange: (id: number, value: string) => void
}

function CompletedPartials({
  items,
  onGradeChange,
  onWeightChange,
}: CompletedPartialsProps) {
  return (
    <section className="mt-7">
      <h2 className="mb-3 text-[11px] font-bold tracking-widest text-gray-400 uppercase">
        Completed Partials
      </h2>

      <div className="flex flex-col gap-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-3 rounded-2xl bg-[#131c20] px-3 py-3"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1a2a2e] text-xs font-bold text-[#2dd4bf]">
              {item.id}
            </span>

            <div className="flex flex-1 items-center rounded-xl bg-[#0b1214] px-4 py-2.5">
              <input
                type="number"
                inputMode="decimal"
                value={item.grade}
                onChange={(event) => onGradeChange(item.id, event.target.value)}
                placeholder="0"
                className="flex-1 bg-transparent text-base font-semibold text-white outline-none placeholder:text-gray-600"
              />
              <span className="text-xs font-medium text-gray-500">pts</span>
            </div>

            <div className="flex items-center gap-1 rounded-xl bg-[#0b1214] px-3.5 py-2.5">
              <input
                type="number"
                inputMode="decimal"
                value={item.weight}
                onChange={(event) => onWeightChange(item.id, event.target.value)}
                placeholder="0"
                className="w-12 bg-transparent text-sm font-medium text-gray-300 outline-none placeholder:text-gray-600"
              />
              <span className="text-sm font-medium text-gray-400">%</span>
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
  )
}

export default CompletedPartials
