import { useEffect, useState } from 'react'
import CompletedPartials, {
  type CompletedPartialItem,
} from './CompletedPartials'
import PredictedPartial from './PredictedPartial'
import ResultsCard from './ResultsCard'
import SegmentedControl from './SegmentedControl'
import { convertirEscalaUnet } from '../utils/unetMath'

const partials = [1, 2, 3, 4]

const buildInitialGrades = (count: number): CompletedPartialItem[] =>
  Array.from({ length: Math.max(0, count - 1) }, (_, index) => ({
    id: index + 1,
    grade: '',
    weight: '',
  }))

const toNumber = (value: string | number): number => {
  if (typeof value === 'number') {
    return Number.isFinite(value) ? value : 0
  }

  const parsedValue = Number(value)
  return Number.isFinite(parsedValue) ? parsedValue : 0
}

function CuantoFaltaScreen() {
  const [selectedPartials, setSelectedPartials] = useState<number>(4)
  const [gradesData, setGradesData] = useState<CompletedPartialItem[]>(() =>
    buildInitialGrades(4),
  )

  useEffect(() => {
    setGradesData((previousData) =>
      buildInitialGrades(selectedPartials).map((item) => {
        const previousItem = previousData.find((entry) => entry.id === item.id)
        return previousItem ?? item
      }),
    )
  }, [selectedPartials])

  const updateGrade = (id: number, value: string) => {
    setGradesData((previousData) =>
      previousData.map((item) =>
        item.id === id ? { ...item, grade: value } : item,
      ),
    )
  }

  const updateWeight = (id: number, value: string) => {
    setGradesData((previousData) =>
      previousData.map((item) =>
        item.id === id ? { ...item, weight: value } : item,
      ),
    )
  }

  const usedWeight = gradesData.reduce(
    (total, item) => total + toNumber(item.weight),
    0,
  )
  const hasWeightOverflow = usedWeight > 100
  const remainingWeight = hasWeightOverflow ? 0 : Math.max(0, 100 - usedWeight)

  const isReadyToCalculate = !hasWeightOverflow

  const maxAllowedWeights = gradesData.map((item) => {
    const othersWeight = gradesData.reduce(
      (total, other) => (other.id === item.id ? total : total + toNumber(other.weight)),
      0,
    )

    return Math.max(0, 99 - othersWeight)
  })

  const currentAccumulated = gradesData.reduce((total, item) => {
    const grade = toNumber(item.grade)
    const weight = toNumber(item.weight)

    return total + convertirEscalaUnet(grade) * (weight / 100)
  }, 0)

  const calculateRequiredGrade = (targetScore: number): number | 'Imposible' => {
    for (let i = 0; i <= 100; i += 1) {
      const projectedScore =
        currentAccumulated + convertirEscalaUnet(i) * (remainingWeight / 100)

      if (projectedScore >= targetScore) {
        return i
      }
    }

    return 'Imposible'
  }

  const requiredFor5 = calculateRequiredGrade(4.5)
  const requiredFor7 = calculateRequiredGrade(6.5)
  const requiredFor8 = calculateRequiredGrade(7.5)
  const requiredFor9 = calculateRequiredGrade(8.5)

  return (
    <main className="flex-1 overflow-y-auto px-5 pb-28">
      <SegmentedControl
        values={partials}
        selectedValue={selectedPartials}
        onSelect={setSelectedPartials}
      />
      <CompletedPartials
        items={gradesData}
        maxAllowedWeights={maxAllowedWeights}
        onGradeChange={updateGrade}
        onWeightChange={updateWeight}
      />
      {hasWeightOverflow && (
        <p className="mt-3 text-center text-xs font-medium text-red-400">
          Error: La suma de los porcentajes supera el 100%
        </p>
      )}
      <PredictedPartial
        partialNumber={selectedPartials}
        remainingWeight={remainingWeight}
      />
      <ResultsCard
        isReadyToCalculate={isReadyToCalculate}
        requiredFor5={requiredFor5}
        requiredFor7={requiredFor7}
        requiredFor8={requiredFor8}
        requiredFor9={requiredFor9}
      />
    </main>
  )
}

export default CuantoFaltaScreen
