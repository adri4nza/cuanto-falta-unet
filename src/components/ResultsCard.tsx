function ResultsCard() {
  return (
    <section className="mt-8">
      <div className="rounded-3xl border border-[#1e2a2e] bg-linear-to-br from-[#151e21] to-[#111a1c] p-5">
        <h3 className="mb-5 text-base font-bold text-gray-100">Required to Achieve</h3>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-gray-300">Minimum Passing (50)</p>
            <p className="mt-0.5 text-xs text-gray-500">Status: Attainable</p>
          </div>
          <div className="text-right">
            <span className="text-2xl font-bold text-[#2dd4bf]">32</span>
            <span className="ml-1 text-xs font-medium text-[#2dd4bf]/70">pts</span>
          </div>
        </div>

        <div className="my-4 border-t border-[#1e2a2e]" />

        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-gray-300">Target Grade (75)</p>
            <p className="mt-0.5 text-xs text-gray-500">Requires near perfect score</p>
          </div>
          <div className="text-right">
            <span className="text-2xl font-bold text-[#eab308]">98</span>
            <span className="ml-1 text-xs font-medium text-[#eab308]/70">pts</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ResultsCard
