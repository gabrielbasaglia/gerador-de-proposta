import { Container } from '../../../../components/container'
import { authOptions } from '../../../../lib/auth'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { NewCustomerForm } from '../components/form'

export default async function NewCustomer() {
  const session = await getServerSession(authOptions)

  if (!session || !session.user) {
    redirect('/')
  }
  return (
    <Container>
      <main className="flex flex-col mt-9 mb-2">
        <div className="flex items-center justify-between gap-3">
          <h1 className="text-3xl font-bold">Nova Proposta</h1>
          <Link
            href="/dashboard/customer"
            className="bg-indigo-500 px-4 py-1 rounded text-white"
          >
            Voltar
          </Link>
        </div>
      </main>

      <NewCustomerForm userId={session.user.id} />
    </Container>
  )
}
