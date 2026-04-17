import { useState } from 'react'

export interface CompletedPartialItem {
  id: number
  grade: string | number
  weight: string | number
}

const weightOptions = [15, 20, 25, 30, 35]

interface CompletedPartialsProps {
  items: CompletedPartialItem[]
  maxAllowedWeights: number[]
  onGradeChange: (id: number, value: string) => void
  onWeightChange: (id: number, value: string) => void
}

function CompletedPartials({
  items,
  maxAllowedWeights,
  onGradeChange,
  onWeightChange,
}: CompletedPartialsProps) {
  const [customWeightIds, setCustomWeightIds] = useState<number[]>([])

  const isPresetWeight = (weight: string | number) =>
    weightOptions.includes(Number(weight))

  const handleGradeChange = (id: number, rawValue: string) => {
    if (rawValue === '') {
      onGradeChange(id, '')
      return
    }

    const parsedValue = Number(rawValue)
    if (!Number.isFinite(parsedValue)) {
      return
    }

    const clampedValue = Math.min(100, Math.max(0, parsedValue))
    onGradeChange(id, String(clampedValue))
  }

  const enableCustomWeight = (id: number) => {
    setCustomWeightIds((previousIds) =>
      previousIds.includes(id) ? previousIds : [...previousIds, id],
    )
    onWeightChange(id, '')
  }

  const disableCustomWeight = (id: number, value: string) => {
    setCustomWeightIds((previousIds) => previousIds.filter((itemId) => itemId !== id))
    onWeightChange(id, value)
  }

  const handleCustomWeightChange = (id: number, rawValue: string) => {
    if (rawValue === '') {
      onWeightChange(id, '')
      return
    }

    const parsedValue = Number(rawValue)
    if (!Number.isFinite(parsedValue)) {
      return
    }

    const clampedValue = Math.min(100, Math.max(0, parsedValue))
    onWeightChange(id, String(clampedValue))
  }

  return (
    <section className="mt-7">
      <h2 className="mb-3 text-[11px] font-bold tracking-widest text-gray-400 uppercase">
        Parciales Evaluados
      </h2>

      <div className="flex flex-col gap-3">
        {items.map((item, index) => {
          const isCustomWeight =
            customWeightIds.includes(item.id) ||
            (item.weight !== '' && !isPresetWeight(item.weight))

          const maxWeight = maxAllowedWeights[index] ?? 99
          const gradeAsNumber = item.grade === '' ? 0 : Number(item.grade) || 0

          return (
            <div
              key={item.id}
              className="rounded-2xl bg-[#131c20] px-3 py-3"
            >
              <div className="flex items-center gap-2 px-2 py-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1a2a2e] text-xs font-bold text-[#2dd4bf]">
                  {item.id}
                </span>

                <div className="flex flex-1 min-w-0 items-center rounded-xl bg-[#0b1214] px-2 py-2.5 sm:px-4">
                  <input
                    type="number"
                    inputMode="decimal"
                    value={item.grade}
                    onChange={(event) => handleGradeChange(item.id, event.target.value)}
                    placeholder="0"
                    className="min-w-0 w-full flex-1 bg-transparent text-base font-semibold text-white outline-none placeholder:text-gray-600 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  />
                  <span className="text-xs font-medium text-gray-500">pts</span>
                </div>

                {isCustomWeight ? (
                  <div className="relative flex w-16 shrink-0 items-center rounded-xl bg-[#0b1214] px-1 py-2.5 sm:w-20">
                    <input
                      type="number"
                      inputMode="decimal"
                      value={item.weight}
                      onChange={(event) =>
                        handleCustomWeightChange(item.id, event.target.value)
                      }
                      placeholder="0"
                      className="w-full bg-transparent pr-5 text-center text-sm font-medium text-gray-300 outline-none placeholder:text-gray-600 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                    />
                    <span className="pointer-events-none absolute right-2 text-xs text-gray-500">
                      %
                    </span>
                  </div>
                ) : (
                  <div className="relative flex w-16 shrink-0 items-center rounded-xl bg-[#0b1214] px-1 py-2.5 sm:w-20">
                    <select
                      value={item.weight}
                      onChange={(event) => {
                        const value = event.target.value
                        if (value === 'custom') {
                          enableCustomWeight(item.id)
                          return
                        }

                        disableCustomWeight(item.id, value)
                      }}
                      className="w-full appearance-none bg-transparent pr-4 text-center text-sm font-medium text-gray-300 outline-none"
                    >
                      <option value="" className="bg-[#0b1214] text-gray-500">
                        --
                      </option>
                      {weightOptions.map((weight) => (
                        <option
                          key={weight}
                          value={weight}
                          disabled={weight > maxWeight}
                          className="bg-[#0b1214] text-gray-200 disabled:text-gray-600"
                        >
                          {weight}%
                        </option>
                      ))}
                      <option value="custom" className="bg-[#0b1214] text-gray-200">
                        Otro...
                      </option>
                    </select>
                    <svg
                      className="pointer-events-none absolute right-2 h-3.5 w-3.5 text-gray-500"
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
                )}
              </div>

              {/* Simulation slider */}
              <div className="mt-2.5 px-1">
                <p className="mb-1 text-[10px] text-gray-500">
                  Desliza para simular nota
                </p>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={gradeAsNumber}
                  onChange={(event) => onGradeChange(item.id, event.target.value)}
                  className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-[#1a2a2e] accent-[#2dd4bf] outline-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#2dd4bf]"
                />
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default CompletedPartials
