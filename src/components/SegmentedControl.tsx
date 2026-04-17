interface SegmentedControlProps {
  values: number[]
  selectedValue: number
  onSelect: (value: number) => void
}

function SegmentedControl({
  values,
  selectedValue,
  onSelect,
}: SegmentedControlProps) {
  return (
    <section className="mt-4">
      <h2 className="mb-3 text-[11px] font-bold tracking-widest text-gray-400 uppercase">
        Select Partials
      </h2>

      <div className="flex gap-2">
        {values.map((value) => (
          <button
            key={value}
            type="button"
            onClick={() => onSelect(value)}
            className={`flex h-11 flex-1 items-center justify-center rounded-full text-sm font-semibold transition-colors ${
              value === selectedValue
                ? 'border-2 border-[#2dd4bf] bg-[#2dd4bf]/10 text-[#2dd4bf]'
                : 'border border-[#1e2a2e] bg-[#131c20] text-gray-400'
            }`}
          >
            {value}
          </button>
        ))}
      </div>
    </section>
  )
}

export default SegmentedControl
