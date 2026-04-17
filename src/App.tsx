import { useState } from 'react'
import './App.css'
import BottomNav from './components/BottomNav'
import ConvertirScreen from './components/ConvertirScreen'
import CuantoFaltaScreen from './components/CuantoFaltaScreen'
import DefinitivaScreen from './components/DefinitivaScreen'
import Header from './components/Header'

type Tab = 'definitiva' | 'cuanto-falta' | 'convertir'

function App() {
  const [currentTab, setCurrentTab] = useState<Tab>('cuanto-falta')

  return (
    <div className="relative mx-auto flex min-h-dvh w-full max-w-md flex-col overflow-hidden bg-[#0b1214] font-sans text-white">
      <Header />

      {currentTab === 'definitiva' && <DefinitivaScreen />}
      {currentTab === 'cuanto-falta' && <CuantoFaltaScreen />}
      {currentTab === 'convertir' && <ConvertirScreen />}

      <BottomNav currentTab={currentTab} onChangeTab={setCurrentTab} />
    </div>
  )
}

export default App
