'use client'
import { useState } from 'react'

export default function EstagiarioForm() {
  const [formData, setFormData] = useState({
    estagiario:'', identidade:'',nascimento:'',curso:'',periodo:'',telefone:'', celular:'',matricula:'', instEnsino:'', cpf:'',endereco:''

  });

  const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch('https://estagiocefet.vercel.app/api/cadastros/estagiario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log('Estagiário cadastrado com sucesso!');
      } else {
        console.error('Erro ao cadastrar estagiário');
      }
    } catch (error) {
      console.error('Erro ao cadastrar estagiário', error);
    }
  };

  return (
<div className='py-[4em]'>
<form onSubmit={handleSubmit} className="bg-slate-100 p-8 rounded-lg">
<div className='flex gap-4 mb-2'>
    <label htmlFor="estagiario" className="block text-black font-bold mb-2 w-[150px]">
        Nome:
      </label>
      <input
        type="text"
        id="estagiario"
        name="estagiario"
        onChange={handleInputChange}
        value={formData.estagiario || ''}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      /></div>
<div className='flex gap-4 mb-2'>
<label htmlFor="endereco" className="block text-black font-bold mb-2 w-[150px]">
        Endereço:
      </label>
      <input
        type="text"
        id="endereco"
        name="endereco"
        onChange={handleInputChange}
        value={formData.endereco || ''}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
</div>
<div className='flex gap-4 mb-2'>
<label htmlFor="identidade" className="block text-black font-bold mb-2 w-[150px]">
        Identidade:
      </label>
      <input
        type="text"
        id="identidade"
        name="identidade"
        onChange={handleInputChange}
        value={formData.identidade || ''}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
</div>
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
<label htmlFor="nascimento" className="block text-black font-bold mt-4 mb-2 w-[150px]">
        Data de Nascimento:
      </label>
      <input
        type="text"
        id="nascimento"
        name="nascimento"
        onChange={handleInputChange}
        value={formData.nascimento || ''}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
</div>

<div className='flex gap-4 mb-2'>
<label htmlFor="curso" className="block text-black font-bold mt-4 mb-2 w-[150px]">
        Curso:
      </label>
      <input
        type="text"
        id="curso"
        name="curso"
        onChange={handleInputChange}
        value={formData.curso || ''}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
</div>

<div className='flex gap-4 mb-2'>
<label htmlFor="periodo" className="block text-black font-bold mt-4 mb-2 w-[150px]">
        Período:
      </label>
      <input
        type="text"
        id="periodo"
        name="periodo"
        onChange={handleInputChange}
        value={formData.periodo || ''}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
</div>

<div className='flex gap-4 mb-2'>
<label htmlFor="telefone" className="block text-black font-bold mt-4 mb-2 w-[150px]">
        Telefone:
      </label>
      <input
        type="text"
        id="telefone"
        name="telefone"
        onChange={handleInputChange}
        value={formData.telefone || ''}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
</div>

<div className='flex gap-4 mb-2'>
<label htmlFor="celular" className="block text-black font-bold mt-4 mb-2 w-[150px]">
        Celular:
      </label>
      <input
        type="text"
        id="celular"
        name="celular"
        onChange={handleInputChange}
        value={formData.celular || ''}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
</div>

<div className='flex gap-4 mb-2'>
<label htmlFor="matricula" className="block text-black font-bold mt-4 mb-2 w-[150px]">
        Matrícula:
      </label>
      <input
        type="text"
        id="matricula"
        name="matricula"
        onChange={handleInputChange}
        value={formData.matricula || ''}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
</div>
<div className='flex gap-4 mb-2'>

<label htmlFor="instEnsino" className="block text-whiblackte font-bold mt-4 mb-2 w-[150px]">
        Universidade:
      </label>
      <input
        type="text"
        id="instEnsino"
        name="instEnsino"
        onChange={handleInputChange}
        value={formData.instEnsino || ''}
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
  );
}
