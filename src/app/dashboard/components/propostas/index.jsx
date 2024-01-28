import { FiCheckSquare, FiFile } from "react-icons/fi";

export function PropostasItem() {
  return (
    <>
      <tr className="hover:bg-gray-200 border-b-2 border-b-slate-200 h-16 last: border-b-0 bg-slate-100 duration-300">
        <td className="text-left pl-1">Mercado Barato</td>
        <td className="text-left sm:hidden">11/04/2023</td>
        <td className="text-left">
          <span className="bg-green-500 px-2 py-1 rounded">ABERTO</span>
        </td>
        <td className="text-left">
          <button className="mr-2">
            <FiCheckSquare size={24} color="#131313" />
          </button>
          <button>
            <FiFile size={24} color="#6C5AF4" />
          </button>
        </td>
      </tr>
    </>
  );
}
