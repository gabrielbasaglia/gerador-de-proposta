import Image from "next/image";
import heroImg from "../assets/hero.svg";

export default function Home() {
  return (
    <main className="flex items-center flex-col justify-center min-h-[calc(100vh-10rem)]">
      <h1 className="font-bold text-xl md:text-4xl mb-8 text-indigo-600">
        Acompanhe e imprima a sua proposta
      </h1>

      <Image
        src={heroImg}
        alt="Imagem de um homem atendendo por telefone uma mulher"
        width={600}
        height={600}
        className="max-w-sm md:max-w-xl"
      />
    </main>
  );
}
