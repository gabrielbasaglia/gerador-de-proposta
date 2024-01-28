import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "../components/header/index.jsx";
import { Footer } from "../components/footer/index.jsx";
import { AuthProvider } from "../providers/auth.jsx";
import { ModalProvider } from "../providers/modal.jsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gerador de propostas",

  description: "Realize orçamentos para seus clientes",
};

// eslint-disable-next-line react/prop-types
export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <AuthProvider>
          <ModalProvider>
            <Header />

            {children}

            <Footer className="mt-auto" />
          </ModalProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
