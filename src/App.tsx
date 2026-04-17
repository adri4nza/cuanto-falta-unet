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
const selectedPartials = 4

const completedGrades: CompletedPartialItem[] = [
  { id: 1, grade: 90, weight: 20 },
  { id: 2, grade: 80, weight: 25 },
  { id: 3, grade: 75, weight: 30 },
]

function App() {
  return (
    <div className="mx-auto flex min-h-dvh max-w-md flex-col bg-[#0b1214] font-sans text-white sm:border-x sm:border-[#1e2a2e]">
      <Header />

      <main className="flex-1 overflow-y-auto px-5 pb-28">
        <SegmentedControl values={partials} selectedValue={selectedPartials} />
        <CompletedPartials items={completedGrades} />
        <PredictedPartial partialNumber={selectedPartials} />
        <ResultsCard />
      </main>
      <BottomNav />

    </div>
  )
}

export default App
