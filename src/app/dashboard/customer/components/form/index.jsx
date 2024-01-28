"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { api } from "../../../../../lib/api";

export function NewCustomerForm({ userId }) {
  const { register, handleSubmit, setValue } = useForm();
  const router = useRouter();

  const kwhInputs = Array.from({ length: 12 }, (_, index) => `kwh${index + 1}`);

  const handleInputChange = (index, value) => {
    setValue(`kwh${index + 1}`, value);
  };

  async function handleRegisterCustomer(data) {
    await api.post("/api/customer", {
      name: data.name,
      cpf_cnpj: data.cpf_cnpj,
      code: data.code,
      classification: data.classification,
      address: data.address,
      neighborhood: data.neighborhood,
      cep: data.cep,
      city: data.city,
      phone: data.phone,
      email: data.email,
      venc: data.venc,
      billsvalue: data.billsvalue,
      phoneContact: data.phoneContact,
      consultant: data.consultant,
      cpfltusd: data.cpfltusd,
      cpflte: data.cpflte,
      userId: userId,
      kwh1: data.kwh1,
      kwh2: data.kwh2,
      kwh3: data.kwh3,
      kwh4: data.kwh4,
      kwh5: data.kwh5,
      kwh6: data.kwh6,
      kwh7: data.kwh7,
      kwh8: data.kwh8,
      kwh9: data.kwh9,
      kwh10: data.kwh10,
      kwh11: data.kwh11,
      kwh12: data.kwh12,
    });

    router.replace("/dashboard/customer");
    router.refresh();
  }
  return (
    <form
      className="flex flex-col mt-6"
      onSubmit={handleSubmit(handleRegisterCustomer)}
    >
      <section className=" uppercase grid gap-2 my-2 flex-col sm:flex-row grid-cols-2 md:grid-cols-4 ">
        <div className="flex-1">
          <label className="uppercase mb-1 text-lg font-medium">
            Nome completo
          </label>
          <input
            type="text"
            name="name"
            placeholder="Digite o nome completo..."
            className="w-full border-2 rounded-md h-11 px-2"
            {...register("name", { required: true })}
          />
        </div>
        <div className="flex-1">
          <label className="mb-1 text-lg font-medium">Cpf/Cnpj</label>
          <input
            type="tel"
            name="cpf_cnpj"
            placeholder="Digite o CPF ou CNPJ"
            className="w-full border-2 rounded-md h-11 px-2"
            {...register("cpf_cnpj")}
          />
        </div>
        <div className="flex-1 overflow-hidden ">
          <label className="mb-1 text-lg font-medium whitespace-nowrap ">
            Código de instalação
          </label>
          <input
            type="tel"
            name="code"
            placeholder="Digite o Código de instalação"
            className="w-full border-2 rounded-md h-11 px-2"
            {...register("code")}
          />
        </div>

        <div className="flex-1 overflow-hidden">
          <label className="mb-1 text-lg font-medium whitespace-nowrap">
            Classificação tarifária
          </label>
          <select
            name="classification"
            className="w-full border-2 rounded-md h-11 px-2"
            {...register("classification", { required: true })}
          >
            <option value="monofasico">Monofásico</option>
            <option value="bifasico">Bifásico</option>
            <option value="trifasico">Trifásico</option>
          </select>
        </div>

        <div className="flex-1">
          <label className="mb-1 text-lg font-medium">Endereço</label>
          <input
            type="text"
            name="address"
            placeholder="Digite o Endereço"
            className="w-full border-2 rounded-md h-11 px-2"
            {...register("address")}
          />
        </div>
        <div className="flex-1">
          <label className="mb-1 text-lg font-medium">Bairro</label>
          <input
            type="text"
            name="neighborhood"
            placeholder="Digite a Bairro"
            className="w-full border-2 rounded-md h-11 px-2"
            {...register("neighborhood", { required: true })}
          />
        </div>
        <div className="flex-1">
          <label className="mb-1 text-lg font-medium">Cep</label>
          <input
            type="text"
            name="cep"
            placeholder="Digite o Cep"
            className="w-full border-2 rounded-md h-11 px-2"
            {...register("cep")}
          />
        </div>
        <div className="flex-1">
          <label className="mb-1 text-lg font-medium">Cidade</label>
          <input
            type="text"
            name="city"
            placeholder="Digite a Cidade"
            className="w-full border-2 rounded-md h-11 px-2"
            {...register("city", { required: true })}
          />
        </div>
        <div className="flex-1">
          <label className="mb-1 text-lg font-medium">Telefone</label>
          <input
            type="tel"
            name="phone"
            placeholder="Ex: (xx) 99999-9999"
            className="w-full border-2 rounded-md h-11 px-2"
            {...register("phone")}
          />
        </div>
        <div className="flex-1">
          <label className="mb-1 text-lg font-medium ">Email</label>
          <input
            type="text"
            name="email"
            placeholder="Digite o email"
            className="w-full border-2 rounded-md h-11 px-2"
            {...register("email")}
          />
        </div>

        <div className="flex-1">
          <label className="mb-1 text-lg font-medium ">Vencimento</label>
          <input
            type="tel"
            name="venc"
            placeholder="Digite a data de vencimento"
            className="w-full border-2 rounded-md h-11 px-2"
            {...register("venc")}
          />
        </div>

        <div className="flex-1 overflow-hidden">
          <label className="mb-1 text-lg font-medium whitespace-nowrap">
            Valor da Fatura Atual
          </label>
          <input
            type="text"
            name="billsvalue"
            placeholder="Digite o valor da fatura"
            className="w-full border-2 rounded-md h-11 px-2"
            {...register("billsvalue", { required: true })}
          />
        </div>

        <div className="flex-1">
          <label className="mb-1 text-lg font-medium ">TUSD</label>
          <input
            type="tel"
            name="cpfltusd"
            placeholder="Digite o TUSD"
            className="w-full border-2 rounded-md h-11 px-2"
            {...register("cpfltusd", { required: true })}
          />
        </div>

        <div className="flex-1">
          <label className="mb-1 text-lg font-medium ">TE</label>
          <input
            type="tel"
            name="cpflte"
            placeholder="Digite o TE"
            className="w-full border-2 rounded-md h-11 px-2"
            {...register("cpflte", { required: true })}
          />
        </div>

        <div className="flex-1 overflow-hidden">
          <label className="mb-1 text-lg font-medium whitespace-nowrap ">
            Nome do Consultor
          </label>
          <input
            type="text"
            name="consultant"
            placeholder="Digite o nome do consultor"
            className="w-full border-2 rounded-md h-11 px-2"
            {...register("consultant", { required: true })}
          />
        </div>

        <div className="flex-1 overflow-hidden">
          <label className="mb-1 text-lg font-medium whitespace-nowrap">
            Contato do Consultor
          </label>
          <input
            type="text"
            name="phoneContact"
            placeholder="Digite o contato do consultor"
            className="w-full border-2 rounded-md h-11 px-2"
            {...register("phoneContact", { required: true })}
          />
        </div>
      </section>

      <p className="my-1">
        Preencha o histórico de consumo dos últimos meses*:
      </p>

      {/* Campos de entrada para consumo em kWh */}
      <section className="grid gap-2 my-2 grid-cols-6 ">
        {kwhInputs.map((input, index) => (
          <div key={input} className="flex-1">
            <input
              type="tel"
              name={input}
              placeholder="Digite o kWh"
              className="w-full border-2 rounded-md h-11 px-2"
              onChange={(e) => handleInputChange(index, e.target.value)}
            />
          </div>
        ))}
      </section>

      <button
        type="submit"
        className="bg-indigo-500 mx-4 px-2 h-11 rounded text-white font-bold"
      >
        Cadastrar
      </button>
    </form>
  );
}
