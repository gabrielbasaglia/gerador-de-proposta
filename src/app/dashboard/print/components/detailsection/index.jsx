import { FaWhatsapp } from "react-icons/fa";
const DetailsSection = ({ selectedCustomer }) => (
  <section className="text-sm flex uppercase my-2 px-2 border-b pb-2 border-gray-600 max-h-60 overflow-y-auto ml-auto flex-col md:flex-row">
    <div className="flex flex-col w-full">
      <h2 className="font-bold">Dados do Cliente</h2>

      <div className="md:grid md:grid-cols-5 md:gap-4 flex ">
        <p className="">Nome:</p>
        <span className="whitespace-nowrap md:col-span-3 col-span-4 pl-2 md:pl-0">
          {selectedCustomer?.name}
        </span>
      </div>

      <div className="md:grid md:grid-cols-5 md:gap-4 flex">
        <p className="">Cpf/Cnpj</p>
        <span className="md:col-span-3 col-span-4 pl-2 md:pl-0">
          {selectedCustomer?.cpf_cnpj}
        </span>
      </div>

      <div className="md:grid md:grid-cols-5 md:gap-4 flex">
        <p className=" ">Endereço:</p>
        <span className="md:col-span-3 col-span-4 pl-2 md:pl-0">
          {selectedCustomer?.address}
        </span>
      </div>

      <div className="md:grid md:grid-cols-5 md:gap-4 flex">
        <p className="">Bairro:</p>
        <span className="md:col-span-3 col-span-4 pl-2 md:pl-0">
          {selectedCustomer?.neighborhood}
        </span>
      </div>

      <div className="md:grid md:grid-cols-5 md:gap-4 flex">
        <p className=" ">Cep:</p>
        <span className="md:col-span-3 col-span-4 pl-2 md:pl-0">
          {selectedCustomer?.cep}
        </span>
      </div>

      <div className="md:grid md:grid-cols-5 md:gap-4 flex">
        <p className=" ">Cidade:</p>
        <span className="md:col-span-3 col-span-4 pl-2 md:pl-0">
          {selectedCustomer?.city}
        </span>
      </div>

      <div className="md:grid md:grid-cols-5 md:gap-4 flex">
        <p className=" ">Código:</p>
        <span className="md:col-span-3 col-span-4 pl-2 md:pl-0">
          {selectedCustomer?.code}
        </span>
      </div>

      <div className="md:grid md:grid-cols-5 md:gap-4 flex">
        <p className=" ">Classif.:</p>
        <span className="col-span-4">{selectedCustomer?.classification}</span>
      </div>

      <div className="md:grid md:grid-cols-5 md:gap-4 flex">
        <p className=" ">Vencimento:</p>
        <span className="md:col-span-3 col-span-4 pl-2 md:pl-0">
          {selectedCustomer?.venc}
        </span>
      </div>
    </div>

    <div className="md:w-1/3 flex flex-col md:items-end md:mx-auto mt-2 md:mt-0 ">
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
);
export default DetailsSection;
