type Tab = 'definitiva' | 'cuanto-falta' | 'convertir'

interface BottomNavProps {
  currentTab: Tab
  onChangeTab: (tab: Tab) => void
}

function BottomNav({ currentTab, onChangeTab }: BottomNavProps) {
  const activeIcon = 'h-5 w-5 text-[#2dd4bf]'
  const inactiveIcon = 'h-5 w-5 text-gray-500'
  const activeLabel = 'text-[10px] font-bold tracking-wider text-[#2dd4bf] uppercase'
  const inactiveLabel = 'text-[10px] font-semibold tracking-wider text-gray-500 uppercase'

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 mx-auto w-full max-w-md border-t border-[#1a2228] bg-[#0b1214]/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-lg items-center justify-around">
        <button type="button" onClick={() => onChangeTab('definitiva')} className="flex flex-col items-center gap-1">
          <svg
            className={currentTab === 'definitiva' ? activeIcon : inactiveIcon}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={currentTab === 'definitiva' ? 2 : 1.8}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
            />
          </svg>
          <span className={currentTab === 'definitiva' ? activeLabel : inactiveLabel}>
            Definitiva
          </span>
        </button>

        <button type="button" onClick={() => onChangeTab('cuanto-falta')} className="flex flex-col items-center gap-1">
          <svg
            className={currentTab === 'cuanto-falta' ? activeIcon : inactiveIcon}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={currentTab === 'cuanto-falta' ? 2 : 1.8}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
            />
          </svg>
          <span className={currentTab === 'cuanto-falta' ? activeLabel : inactiveLabel}>
            Cuánto Falta
          </span>
        </button>

        <button type="button" onClick={() => onChangeTab('convertir')} className="flex flex-col items-center gap-1">
          <svg
            className={currentTab === 'convertir' ? activeIcon : inactiveIcon}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={currentTab === 'convertir' ? 2 : 1.8}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
            />
          </svg>
          <span className={currentTab === 'convertir' ? activeLabel : inactiveLabel}>
            Convertir
          </span>
        </button>
      </div>

      <div className="h-[env(safe-area-inset-bottom)]" />
    </nav>
  )
}

export default BottomNav
