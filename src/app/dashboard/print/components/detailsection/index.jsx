import { FaWhatsapp } from 'react-icons/fa'
const DetailsSection = ({ selectedCustomer }) => (
  <section className="text-sm flex uppercase my-2 px-2 border-b pb-2 border-gray-600 max-h-60 overflow-y-auto ml-auto">
    <div className="flex flex-col">
      <h2 className="font-bold">Dados do Cliente</h2>

      <div className="grid grid-cols-5 gap-4">
        <p className="">Nome:</p>
        <span className=" col-span-3">{selectedCustomer?.name}</span>
      </div>

      <div className="grid grid-cols-5 gap-4">
        <p className="">Cpf/Cnpj</p>
        <span className="  col-span-3">{selectedCustomer?.cpf_cnpj}</span>
      </div>

      <div className="grid grid-cols-5 gap-4">
        <p className=" ">Endereço:</p>
        <span className="  col-span-3">{selectedCustomer?.address}</span>
      </div>

      <div className="grid grid-cols-5 gap-4">
        <p className="">Bairro:</p>
        <span className="  col-span-3">{selectedCustomer?.neighborhood}</span>
      </div>

      <div className="grid grid-cols-5 gap-4">
        <p className=" ">Cep:</p>
        <span className="   col-span-3">{selectedCustomer?.cep}</span>
      </div>

      <div className="grid grid-cols-5 gap-4">
        <p className=" ">Cidade:</p>
        <span className="   col-span-3">{selectedCustomer?.city}</span>
      </div>

      <div className="grid grid-cols-5 gap-4">
        <p className=" ">Código:</p>
        <span className="   col-span-3">{selectedCustomer?.code}</span>
      </div>

      <div className="grid grid-cols-5 gap-4">
        <p className=" ">Classif.:</p>
        <span className="  col-span-4">{selectedCustomer?.classification}</span>
      </div>

      <div className="grid grid-cols-5 gap-4">
        <p className=" ">Vencimento:</p>
        <span className="  col-span-3">{selectedCustomer?.venc}</span>
      </div>
    </div>

    <div className="w-1/3 flex flex-col items-end ">
      <h1 className="font-bold">dados do consultor</h1>
      <p className="">{selectedCustomer?.consultant}</p>
      <div className="flex gap-2">
        <p>
          <FaWhatsapp size={20} />
        </p>
        <span>{selectedCustomer?.phoneContact}</span>
      </div>
    </div>
  </section>
)
export default DetailsSection
