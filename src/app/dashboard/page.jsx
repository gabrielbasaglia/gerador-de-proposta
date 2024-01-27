import { Container } from '../../components/container';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../lib/auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { PropostasItem } from '../../app/dashboard/components/propostas/index';
import Image from 'next/image';
import  desenvol  from '../../assets/desenvol.gif';
export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect('/');
  }

  return (
    <Container>
      <main className="mt-9 mb-2">
        <div className='w-full justify-center flex'>

      <Image
      src={desenvol}
      alt="desenvol"
      width={600}
      height={245}
      />
      </div>
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Propostas</h1>
          <Link
            href={'/dashboard/new'}
            className=" bg-indigo-500 px-4 py-1 rounded text-white"
          >
            Abrir proposta
          </Link>
        </div>
        <table className="min-w-full divide-y divide-gray-200 my-2">
          <thead>
            <tr>
              <th className="font-medium text-left pl-1">CLIENTE</th>
              <th className="font-medium text-left">DATA PROPOSTA</th>
              <th className="font-medium text-left">STATUS</th>
              <th className="font-medium text-left">#</th>
            </tr>
          </thead>
          <tbody>
            <PropostasItem />
            <PropostasItem />
          </tbody>
        </table>
      </main>
    </Container>
  );
}
