"use client";

import { useState } from "react"
import { useRouter } from "next/navigation";

export default function ResIE() {
  const [formData, setFormData] = useState({
    cpf: "",
    nome: "",
    rg: "",
    estadoCivil: "",
    cargo: "",
  })
  const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  const handleSubmit = async (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch('https://estagiocefet.vercel.app/api/cadastros/respIe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log('Estagiário cadastrado com sucesso!')
      } else {
        console.error('Erro ao cadastrar estagiário')
      }
    } catch (error) {
      console.error('Erro ao cadastrar estagiário', error)
    }
    const router = useRouter()
    router.push('/')
  }



return (
<div className="py-[4em]">
<form onSubmit={handleSubmit} className="bg-slate-100 p-8 rounded-lg">
{/* cpf         String @id
  nome        String
  rg          String
  estadoCivil String
  cargo       String */}

<div className='flex gap-4 mb-2'>
    <label htmlFor="nome" className="block text-black font-bold mb-2 w-[150px]">
        Nome:
      </label>
      <input
        type="text"
        id="nome"
        name="nome"
        onChange={handleInputChange}
        value={formData.nome || ''}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      /></div>
<div className='flex gap-4 mb-2'>
    <label htmlFor="cpf" className="block text-black font-bold mb-2 w-[150px]">
        CPF:
      </label>
      <input
        type="text"
        id="cpf"
        name="cpf"
        onChange={handleInputChange}
        value={formData.cpf || ''}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
</div>
<div className='flex gap-4 mb-2'>
    <label htmlFor="rg" className="block text-black font-bold mb-2 w-[150px]">
        Identidade:
      </label>
      <input
        type="text"
        id="rg"
        name="rg"
        onChange={handleInputChange}
        value={formData.rg || ''}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
</div>
<div className='flex gap-4 mb-2'>
    <label htmlFor="cargo" className="block text-black font-bold mb-2 w-[150px]">
        Cargo:
      </label>
      <input
        type="text"
        id="cargo"
        name="cargo"
        onChange={handleInputChange}
        value={formData.cargo || ''}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
</div>
<div className='flex gap-4 mb-2'>
    <label htmlFor="estadoCivil" className="block text-black font-bold mb-2 w-[150px]">
        Estado Civil:
      </label>
      <input
        type="text"
        id="estadoCivil"
        name="estadoCivil"
        onChange={handleInputChange}
        value={formData.estadoCivil || ''}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
</div>
<center>
<button
        type="submit"
        className="bg-sky-800 hover:bg-sky-600 text-white font-bold py-2 px-4 mt-8 rounded focus:outline-none focus:shadow-outline"
      >
        Cadastrar
      </button>
</center>
</form>
</div>

  )}
