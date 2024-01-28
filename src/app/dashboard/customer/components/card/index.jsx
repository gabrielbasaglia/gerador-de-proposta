'use client'

import { useContext } from 'react'
import { ModalContext } from '../../../../../providers/modal'
import { api } from '../../../../../lib/api'
import { useRouter } from 'next/navigation'

export function CardCustomer({ customer }) {
  const { setDatailCustomer } = useContext(ModalContext)
  const router = useRouter()

  //const [selectedCustomer, setSelectedCustomer] = useState(null);

  async function handleDeleteCustomer() {
    try {
      const response = await api.delete('/api/customer', {
        params: {
          id: customer.id,
        },
      })

      console.log(response.data)
      router.refresh()
    } catch (err) {
      console.log(err)
    }
  }
  function handlePrintCustomer() {
    setDatailCustomer(customer)

    router.push('./print')
  }

  return (
    <article className="flex flex-col overflow-hidden bg-gray-100 border-2 p-2 rounded-lg gap-2 hover:scale-105 duration-300 uppercase">
      <h2 style={{ whiteSpace: 'nowrap' }}>
        <span className="font-bold mr-1 ">Nome:</span>
        {customer.name}
      </h2>
      <p>
        <span className="font-bold">Bairro:</span> {customer.neighborhood}
      </p>
      <p>
        <span className="font-bold">Cidade:</span> {customer.city}
      </p>

      <div className="flex justify-between">
        <button
          className="bg-red-500 text-white font-bold px-4 py-1 rounded self-start"
          onClick={handleDeleteCustomer}
        >
          Deletar
        </button>

        <button
          className="bg-blue-500 text-white font-bold px-4 py-1 rounded self-start"
          onClick={handlePrintCustomer}
        >
          Imprimir
        </button>
      </div>
    </article>
  )
}
