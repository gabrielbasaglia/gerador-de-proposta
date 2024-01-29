"use client";
import { useContext, useRef } from "react";
import { Container } from "../../../components/container";
import Image from "next/image";
import axsImg from "../../../assets/axs.webp";
import logoCpfl from "../../../assets/logoCpfl.png";
import mplogo from "../../../assets/mplogo.webp";
import { ModalContext } from "../../../providers/modal";
import { useReactToPrint } from "react-to-print";

import DetailsSection from "./components/detailsection";
import SimulatedProposal from "./components/simulatedproposal";
import Offer from "./components/Offer";
import InvoiceDetails from "./components/invoiceDatail";
import BaseClient from "./components/baseclient";

export default function Print() {
  const contentDocument = useRef();
  const { selectedCustomer } = useContext(ModalContext);

  const handlePrint = useReactToPrint({
    content: () => contentDocument.current,
  });

  return (
    <Container>
      <button
        className="bg-blue-500 text-white font-bold px-4 py-1 rounded self-start"
        onClick={handlePrint}
      >
        Gerar PDF
      </button>

      <main
        ref={contentDocument}
        className="mt-9 mb-2 md:max-w-screen-a4 md:m-a4"
      >
        <section className="border border-gray-600 md:m-10">
          <div className="flex justify-between items-center pl-3 h-14 ">
            <Image
              className="scale-105"
              src={mplogo}
              alt="axs"
              width={100}
              height={100}
            />
            <Image
              className="scale-75"
              src={axsImg}
              alt="axsImg"
              width={100}
              height={100}
            />
            <Image
              className="scale-75"
              src={logoCpfl}
              alt="logoCpfl"
              width={90}
              height={90}
            />
          </div>

          <div className="w-full bg-gray-600 rounded items-center justify-center flex ">
            <h1 className="text-md text-white font-bold">Proposta comercial</h1>
          </div>

          <DetailsSection selectedCustomer={selectedCustomer} />

          <section className="px-1 md:mx-10 text-sm">
            <div className="flex justify-center mb-3 w-full ">
              <h1 className="w-2/3 font-md font-bold">
                Valor atual da fatura cpfl
              </h1>
              <p className="font-bold">R$ {selectedCustomer?.billsvalue}</p>
            </div>

            <InvoiceDetails selectedCustomer={selectedCustomer} />
            <SimulatedProposal selectedCustomer={selectedCustomer} />
            <Offer selectedCustomer={selectedCustomer} />
          </section>

          <div className="md:mx-10 text-sm">
            <h1 className="font-bold text-lg">Oferta de Janeiro:</h1>
            <p>* ISENÇÃO DA PRIMEIRA FATURA</p>
            <p>
              * AXS fornecerá 100% do kwh contratado dividido no 1º,2º e 3º
              sendo 33,33% de energia
            </p>
            <p>* Plano sem fidelidade </p>
            <p>
              * Pode fazer alteração quando precisar para mais ou para menos.
            </p>
          </div>
        </section>

        <section className="break-before-page">
          <BaseClient />
        </section>
      </main>
    </Container>
  );
}
