interface PredictedPartialProps {
  partialNumber: number
}

function PredictedPartial({ partialNumber }: PredictedPartialProps) {
  return (
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
            Final Partial ({partialNumber})
          </h2>
        </div>

        <span className="rounded-md bg-[#1a2a2e] px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-[#2dd4bf] uppercase">
          Predicted
        </span>
      </div>

      <div className="flex items-center gap-3 rounded-2xl bg-[#131c20]/60 px-3 py-3">
        <div className="flex flex-1 items-center rounded-xl bg-[#0b1214]/60 px-4 py-2.5">
          <span className="text-sm text-gray-500">Pending Grade...</span>
        </div>

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
  )
}

export default PredictedPartial
