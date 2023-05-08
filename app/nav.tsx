"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const className =
  "block py-2 pl-3 pr-4 text-white bg-amber-700 rounded  dark:text-white";
const links = [
  { href: "#", key: "keyHome", nome: "Home" },
  { href: "#", key: "keyAbout", nome: "About" },
  { href: "#", key: "keyServices", nome: "Services" },
  { href: "#", key: "KeyPricing", nome: "Pricing" },
  { href: "#", key: "keyContact", nome: "Contact" },
];
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="shadow-lg fixed w-full bg-sky-800 block print:hidden">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0">
                <Link href="http://cefet-rj.br">
                  <Image
                    className="block lg:hidden h-12 w-auto"
                    src="/horiz_preto.svg"
                    height="80"
                    width="80"
                    alt="logo"
                  />
                </Link>
                <Link href="http://cefet-rj.br">
                  <Image
                    className="hidden lg:block h-20 w-auto"
                    src="/vert_azul.svg"
                    height="80"
                    width="80"
                    alt="logo"
                  />
                </Link>
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4 h-full items-center">
                  <Link
                    href="/cadastros"
                    className="px-3 py-2 rounded-md text-sm font-medium text-white  focus:outline-none hover:text-white focus:text-white hover:bg-sky-800 focus:bg-sky-800"
                  >
                    Cadastros
                  </Link>
                  <Link
                    href="/preparaTermo"
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-sky-800 focus:outline-none focus:text-white focus:bg-sky-800"
                  >
                    Gerar termos de compromisso
                  </Link>
                  <Link
                    href="#"
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-sky-800 focus:outline-none focus:text-white focus:bg-sky-800"
                  >
                    Ajuda
                  </Link>
                </div>
              </div>
            </div>
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-cefet focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Abrir menu principal</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="sm:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="/cadastros"
                className="block px-3 py-2 rounded-md text-base font-medium text-white bg-cefet focus:outline-none focus:text-white focus:bg-cefet/25"
              >
                Cadastro
              </a>
              <a
                href="/preparaTermo"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-sky-800 focus:outline-none focus:text-white focus:bg-gray-700"
              >
                Gerar Termo de Compromisso
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
              >
                Contact
              </a>
            </div>
          </div>
        )}{" "}
      </nav>
    </>
  );
};

export default Nav;
