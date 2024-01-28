import { Container } from "../../../components/container"
import Link from "next/link"
import { getServerSession } from "next-auth"
import { authOptions } from "../../../lib/auth"
import { redirect } from "next/navigation"
import prismaClient from "../../../lib/prisma"

export default async function NewCote() {
  const session = await getServerSession(authOptions)

  if (!session || !session.user) {
    redirect("/")
  }

  const customers = await prismaClient.customer.findMany({
    where: {
      userId: session.user.id,
    },
  })

  async function handleRegisterCote(formData) {
    "use server"
  }

  return (
    <Container>
      <main className="mt-9 mb-2">
        <div className="flex items-center gap-3">
          <Link
            href={"/dashboard"}
            className="bg-indigo-600 text-white px-4 py-1 rounded"
          >
            Voltar
          </Link>
          <h1 className="text-3xl font-bold">Nova Proposta</h1>
        </div>

        <form className="flex flex-col mt-6" action={handleRegisterCote}>
          <label className="mb-1 font-medium text-lg">Nome da proposta</label>
          <input
            className="w-full border-2 rounded-md h-11 mb-2 px-2"
            type="text"
            placeholder="Digite o nome do chamado"
            required
            name="name"
          />
          <label className="mb-1 font-medium text-lg">Observação</label>
          <textarea
            className="w-full border-2 rounded-md h-24 mb-2 px-2 resize-none"
            placeholder="Descreva"
            required
            name="description"
          ></textarea>

          {customers.legth !== 0 && (
            <>
              <label className="mb-1 font-medium text-lg">
                Selecione o cliente
              </label>
              <select
                name="customer"
                className="w-full border-2 rounded-md h-11 mb-2 px-2 resize-none"
              >
                {customers.map((customer) => (
                  <option key={customer.id} value={customer.id}>
                    {customer.name}
                  </option>
                ))}
              </select>
            </>
          )}

          {customers.length === 0 && (
            <Link href="/dashboard/customer/new">
              Você ainda não tem nenhum cliente,{" "}
              <span className="text-blue-500 font-medium">
                Cadastrar cliente
              </span>
            </Link>
          )}

          <button
            type="submit"
            className="bg-blue-500 text-white font-bold px-2 h-11 rounded-md my-4 disabled:bg-gray-400 disabled:cursor-not-allowed"
            disabled={customers.length === 0}
          >
            Cadastrar
          </button>
        </form>
      </main>
    </Container>
  )
}
