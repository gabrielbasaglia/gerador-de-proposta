import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../../lib/auth'
import prismaClient from '../../../lib/prisma'

export async function DELETE(request) {
  const session = await getServerSession(authOptions)

  if (!session || !session.user) {
    return NextResponse.json({ error: 'Not authorized' }, { status: 401 })
  }

  const { searchParams } = new URL(request.url)
  const userId = searchParams.get('id')

  if (!userId) {
    return NextResponse.json(
      { error: 'Failed delete customer' },
      { status: 400 }
    )
  }

  try {
    await prismaClient.customer.delete({
      where: {
        id: userId,
      },
    })

    return NextResponse.json({ message: 'Cliente deletado com sucesso!' })
  } catch (err) {
    console.log(err)
    return NextResponse.json(
      { error: 'Failed delete customer' },
      { status: 400 }
    )
  }
}

export async function POST(request) {
  const session = await getServerSession(authOptions)

  if (!session || !session.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const {
    name,
    cpf_cnpj,
    code,
    classification,
    address,
    neighborhood,
    cep,
    city,
    email,
    phone,
    venc,
    billsvalue,
    consultant,
    phoneContact,
    cpfltusd,
    cpflte,
    kwh1,
    kwh2,
    kwh3,
    kwh4,
    kwh5,
    kwh6,
    kwh7,
    kwh8,
    kwh9,
    kwh10,
    kwh11,
    kwh12,
    kwhValues,
    userId,
  } = await request.json()

  try {
    await prismaClient.customer.create({
      data: {
        name,
        cpf_cnpj: cpf_cnpj ? cpf_cnpj : '',
        code: code ? code : '',
        classification: classification ? classification : '',
        address: address ? address : '',
        neighborhood: neighborhood ? neighborhood : '',
        cep: cep ? cep : '',
        city: city ? city : '',
        email: email ? email : '',
        phone: phone ? phone : '',
        venc: venc ? venc : '',
        billsvalue: billsvalue ? billsvalue : '',
        consultant: consultant ? consultant : '',
        phoneContact: phoneContact ? phoneContact : '',
        cpfltusd: cpfltusd ? cpfltusd : '',
        cpflte: cpflte ? cpflte : '',
        kwh1: kwh1 ? kwh1 : '',
        kwh2: kwh2 ? kwh2 : '',
        kwh3: kwh3 ? kwh3 : '',
        kwh4: kwh4 ? kwh4 : '',
        kwh5: kwh5 ? kwh5 : '',
        kwh6: kwh6 ? kwh6 : '',
        kwh7: kwh7 ? kwh7 : '',
        kwh8: kwh8 ? kwh8 : '',
        kwh9: kwh9 ? kwh9 : '',
        kwh10: kwh10 ? kwh10 : '',
        kwh11: kwh11 ? kwh11 : '',
        kwh12: kwh12 ? kwh12 : '',
        kwhValues: kwhValues ? kwhValues : '',
        userId: userId,
      },
    })

    return NextResponse.json({ message: 'Customer created' })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create customer' },
      { status: 400 }
    )
  }
}
