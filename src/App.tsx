import { useEffect, useState } from 'react'
import './App.css'
import BottomNav from './components/BottomNav'
import CompletedPartials, {
  type CompletedPartialItem,
} from './components/CompletedPartials'
import Header from './components/Header'
import PredictedPartial from './components/PredictedPartial'
import ResultsCard from './components/ResultsCard'
import SegmentedControl from './components/SegmentedControl'

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

function App() {
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
  const remainingWeight = Math.max(0, 100 - usedWeight)

  return (
    <div className="mx-auto flex min-h-dvh max-w-md flex-col bg-[#0b1214] font-sans text-white sm:border-x sm:border-[#1e2a2e]">
      <Header />

      <main className="flex-1 overflow-y-auto px-5 pb-28">
        <SegmentedControl
          values={partials}
          selectedValue={selectedPartials}
          onSelect={setSelectedPartials}
        />
        <CompletedPartials
          items={gradesData}
          onGradeChange={updateGrade}
          onWeightChange={updateWeight}
        />
        <PredictedPartial
          partialNumber={selectedPartials}
          remainingWeight={remainingWeight}
        />
        <ResultsCard />
      </main>
      <BottomNav />
    </div>
  )
}

export default App
