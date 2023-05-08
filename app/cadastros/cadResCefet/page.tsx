"use client"

import { useState } from "react"

export default function RespCefet() {
  const [formData, setFormData] = useState({
    cpf: "",
    nome: "",
    disciplina: "",
    numPortaria: "",
    dataPortaria: "",
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
      const response = await fetch('http://localhost:3000/api/cadastros/respCefet', {
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
  }

return (
<div className='py-[4em]'>
<form onSubmit={handleSubmit} className="bg-slate-100 p-8 rounded-lg">
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
      /></div>
<div className='flex gap-4 mb-2'>
    <label htmlFor="disciplina" className="block text-black font-bold mb-2 w-[150px]">
        Disciplina:
      </label>
      <input
        type="text"
        id="disciplina"
        name="disciplina"
        onChange={handleInputChange}
        value={formData.disciplina || ''}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      /></div>
<div className='flex gap-4 mb-2'>
    <label htmlFor="numPortaria" className="block text-black font-bold mb-2 w-[150px]">
        Nº da Portaria:
      </label>
      <input
        type="text"
        id="numPortaria"
        name="numPortaria"
        onChange={handleInputChange}
        value={formData.numPortaria || ''}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      /></div>
<div className='flex gap-4 mb-2'>
    <label htmlFor="dataPortaria" className="block text-black font-bold mb-2 w-[150px]">
        Data da Portaria:
      </label>
      <input
        type="text"
        id="dataPortaria"
        name="dataPortaria"
        onChange={handleInputChange}
        value={formData.dataPortaria || ''}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      /></div>
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
