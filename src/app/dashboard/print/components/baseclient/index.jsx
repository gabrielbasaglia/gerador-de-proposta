import Image from "next/image";

const BaseClient = () => {
  const imageClients = [
    "/verace.webp",
    "/cupim.png",
    "/Diniz.png",
    "/nicnet-fundo-branco.png",
    "/life-sucos.png",
    "/supercom.png",
    "/oggi.jpg",
    "/quinteiros.svg",
    "/sans brunos.png",
    "/redesol.jpeg",
    "/profitness.jpg",
  ];

  return (
    <section className="mt-9 border border-gray-600 mx-10 ">
      <div>
        <h1 className="text-xl text-center text-green-600 font-bold mt-5">
          Nossos Clientes
        </h1>
      </div>

      <div className="grid grid-cols-5 gap-2 mt-5">
        {imageClients.map((logo, i) => (
          <div key={i} className="w-24 h-24 mx-auto">
            <Image
              src={logo}
              alt={`Logo ${i + 1}`}
              width={300}
              height={300}
              layout="responsive"
            />
          </div>
        ))}
      </div>

      <div className="mx-5">
        <h1 className="text-xl text-center text-green-600 font-bold my-2">
          Condomínios em Destaque
        </h1>
        <p>Condomínio Edifício Galeria Zona Sul</p>
        <p>Associacão Dos Amigos Do Residencial II</p>
        <p>Residencial Robespierre</p>
        <p>Associacão Dos Proprietários Em Jardim Reserva Imperial</p>
        <p>Associacão Villa Romana</p>
        <p>Condomínio Residencial Veneza</p>
      </div>
    </section>
  );
};

export default BaseClient;
