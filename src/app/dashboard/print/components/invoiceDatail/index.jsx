import React, { useContext } from "react"
import { ModalContext } from "../../../../../providers/modal"

const InvoiceDetails = () => {
  const { selectedCustomer, calculateAverage } = useContext(ModalContext)

  // Verifica se selectedCustomer está definido
  if (!selectedCustomer) {
    return (
      <div>
        <p>Carregando...</p>
      </div>
    )
  }

  // Calcula a média usando a função do contexto
  const kwhValues = Array.from(
    { length: 12 },
    (_, index) => selectedCustomer?.[`kwh${index + 1}`] || "",
  )
  const average = calculateAverage(kwhValues)

  // Gera as linhas da tabela
  const generateTableRows = () => {
    const rows = []
    for (let i = 0; i < 2; i++) {
      const rowData = Array.from(
        { length: 6 },
        (_, j) => selectedCustomer?.[`kwh${i * 6 + j + 1}`],
      )
      const nonEmptyCells = rowData.filter(Boolean) // Filter out cells with no values
      if (nonEmptyCells.length > 0) {
        rows.push(
          <tr key={i}>
            {nonEmptyCells.map((kwh, index) => (
              <td
                key={index}
                className="text-center py-2 px-1 border border-black"
              >
                {kwh}
              </td>
            ))}
          </tr>,
        )
      }
    }
    return rows
  }

  return (
    <div>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th
              className="border border-black bg-indigo-500 text-white"
              colSpan="6"
            >
              Histórico de consumo
            </th>
          </tr>
        </thead>
        <tbody>{generateTableRows()}</tbody>
      </table>

      <div className="my-2">
        <h2 className="text-center font-bold">Sua Média de Consumo é de:</h2>
        <p className="border border-black mx-10 mt-1 text-center">{average}</p>
      </div>
    </div>
  )
}

export default InvoiceDetails
