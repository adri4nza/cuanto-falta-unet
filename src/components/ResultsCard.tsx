type RequiredGradeValue = number | 'Imposible'

interface ResultsCardProps {
  isReadyToCalculate: boolean
  requiredFor5: RequiredGradeValue
  requiredFor6: RequiredGradeValue
  requiredFor7: RequiredGradeValue
  requiredFor8: RequiredGradeValue
  requiredFor9: RequiredGradeValue
}

const isNumericRequirement = (value: RequiredGradeValue): value is number =>
  typeof value === 'number'

function ResultsCard({
  isReadyToCalculate,
  requiredFor5,
  requiredFor6,
  requiredFor7,
  requiredFor8,
  requiredFor9,
}: ResultsCardProps) {
  return (
    <section className="mt-8">
      <div className="rounded-3xl border border-[#1e2a2e] bg-linear-to-br from-[#151e21] to-[#111a1c] p-5">
        <h3 className="mb-5 text-base font-bold text-gray-100">Necesitas Sacar</h3>

        {!isReadyToCalculate ? (
          <p className="py-8 text-center text-sm text-gray-400">
            Ingresa las notas de tus parciales anteriores para ver la proyección.
          </p>
        ) : (
          <>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-300">Para Aprobar (5)</p>
                <p className="mt-0.5 text-xs text-gray-500">Alcanzable</p>
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold text-[#2dd4bf]">{requiredFor5}</span>
                {isNumericRequirement(requiredFor5) && (
                  <span className="ml-1 text-xs font-medium text-[#2dd4bf]/70">pts</span>
                )}
              </div>
            </div>

            <div className="my-4 border-t border-[#1e2a2e]" />



            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-300">Para llegar a 6</p>
                <p className="mt-0.5 text-xs text-gray-500">Requiere nota alta</p>
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold text-[#93c5fd]">{requiredFor6}</span>
                {isNumericRequirement(requiredFor6) && (
                  <span className="ml-1 text-xs font-medium text-[#93c5fd]/70">pts</span>
                )}
              </div>
            </div>

            <div className="my-4 border-t border-[#1e2a2e]" />

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-300">Para llegar a 7</p>
                <p className="mt-0.5 text-xs text-gray-500">Requiere nota alta</p>
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold text-[#93c5fd]">{requiredFor7}</span>
                {isNumericRequirement(requiredFor7) && (
                  <span className="ml-1 text-xs font-medium text-[#93c5fd]/70">pts</span>
                )}
              </div>
            </div>

            <div className="my-4 border-t border-[#1e2a2e]" />

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-300">Para llegar a 8</p>
                <p className="mt-0.5 text-xs text-gray-500">Requiere nota alta</p>
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold text-orange-400">{requiredFor8}</span>
                {isNumericRequirement(requiredFor8) && (
                  <span className="ml-1 text-xs font-medium text-orange-300/70">pts</span>
                )}
              </div>
            </div>

            <div className="my-4 border-t border-[#1e2a2e]" />

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-300">Nota Máxima (9)</p>
                <p className="mt-0.5 text-xs text-gray-500">Requiere nota alta</p>
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold text-[#eab308]">{requiredFor9}</span>
                {isNumericRequirement(requiredFor9) && (
                  <span className="ml-1 text-xs font-medium text-[#eab308]/70">pts</span>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default ResultsCard
