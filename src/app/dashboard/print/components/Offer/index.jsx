import { useContext, useEffect, useState } from "react";
import { ModalContext } from "../../../../../providers/modal";

const Offer = () => {
  const { selectedCustomer, calculateAverage } = useContext(ModalContext);
  const [average, setAverage] = useState(0);

  useEffect(() => {
    const kwhValues = Array.from(
      { length: 12 },
      (_, index) => selectedCustomer?.[`kwh${index + 1}`] || 0,
    );

    // Filter out zero values
    const validKwhValues = kwhValues.filter((value) => value !== 0);

    if (validKwhValues.length > 0) {
      const calculatedAverage = calculateAverage(validKwhValues);
      setAverage(calculatedAverage);
    } else {
      // No valid values, set average to 0
      setAverage(0);
    }
  }, [calculateAverage, selectedCustomer]);

  // Função para atribuir valores com base na classificação
  const atribuirValor = (classification) => {
    switch (classification) {
      case "monofasico":
        return 30;
      case "bifasico":
        return 50;
      case "trifasico":
        return 100;
      default:
        return 0;
    }
  };

  const valorAtualCpfl =
    (Number(selectedCustomer?.cpfltusd.replace("R$", "").replace(",", ".")) ||
      0) +
    (Number(selectedCustomer?.cpflte.replace("R$", "").replace(",", ".")) || 0);

  const valorAtualAxs = 0.71962;

  const tarifaMun = 11.37;

  const tarifaBoleto = 3.17;

  const classification = selectedCustomer?.classification || "monofasico";

  // Obtém o valor atribuído com base na classificação
  const valorAtribuido = atribuirValor(classification);

  // Calcula o valor final usando o valor atribuído
  const valorFinal = average - valorAtribuido;

  // Calcula o minimo da CPFl
  const minCpfl = valorAtribuido * valorAtualCpfl + tarifaMun;

  const valorTotal = valorFinal * valorAtualAxs + minCpfl;

  return (
    <div className=" my-2 ">
      <div className=" border border-black ">
        <h2 className="text-center">
          Proposta simulada pela média do consumo, menos á energia disponível.
        </h2>

        <div className=" text-center p-1 md:my-2 md:w-1/2 mx-auto flex justify-center flex-col border border-black">
          <h1 className="border-b border-black">
            Valor da assinatura AXS + Boleto de R$3,00
          </h1>

          <div className="bg-green-600 grid grid-cols-2 border-b border-black ">
            <h2 className="font-bold mt-1">Kwh Injetado</h2>
            <h2 className="font-bold mt-1">Valor</h2>
            <p className="col-start-1 ">{valorFinal}</p>
            <p>
              {(valorFinal * valorAtualAxs).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </div>

          <div className="flex justify-between md:px-3 border-b border-black p-1 bg-cyan-600">
            <p className="">Fatura minima CPFL</p>
            <span className="pr-8">
              {minCpfl.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </div>

          <div className="flex justify-between p-3 h-10 items-center bg-green-400">
            <h1 className="text-md font-bold">Valor Total</h1>
            <p className="text-md font-bold">
              {(valorTotal + tarifaBoleto).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
            <span className="text-2xl font-bold border border-black w-1/3 pl-1">
              {" "}
              {parseInt(
                ((average * valorAtualCpfl - valorTotal) /
                  (average * valorAtualCpfl)) *
                  100,
              )}
              %
            </span>
          </div>
        </div>
        <p className="scale-90">
          OBS: o desconto homologado é de 10%, devido alguns impostos pode
          chegar até a porcentagem acima..
        </p>
      </div>
    </div>
  );
};

export default Offer;
