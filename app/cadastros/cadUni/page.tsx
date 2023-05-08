'use client'
import React, { useState } from 'react';
export default function Formulario() {
    const [formData, setFormData] = useState({
      endereco: "",
      telefone: "",
      cnpj: "",
      numSeguro: "",
      nomSeguro: "",
      dataConvenio: "",
      responsavel: "",
      nomecurto: "",
      ie: "",
    });
  
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        const response = await fetch('http://localhost:3000/api/cadastros/ie', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          console.log('universidade cadastrada com sucesso!');
        } else {
          console.error('Erro ao cadastrar universidade');
        }
      } catch (error) {
        console.error('Erro ao cadastrar Universidade', error);
      }
    };
  
    return (
      <div className='py-[6em] bg-slate-100'>
        <form onSubmit={handleSubmit}>
        <div className="mb-4 flex">
          <label htmlFor="endereco" className="block text-gray-700 font-bold mb-2 p-2 w-[150px]">
            Endereço
          </label>
          <input
            type="text"
            id="endereco"
            name="endereco"
            value={formData.endereco}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
  
        <div className="mb-4 flex">
          <label htmlFor="telefone" className="block text-gray-700 font-bold mb-2 p-2 w-[150px]">
            Telefone
          </label>
          <input
            type="text"
            id="telefone"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
  
        <div className="mb-4 flex">
          <label htmlFor="cnpj" className="block text-gray-700 font-bold mb-2 p-2 w-[150px]">
            CNPJ
          </label>
          <input
            type="text"
            id="cnpj"
            name="cnpj"
            value={formData.cnpj}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
  
        <div className="mb-4 flex">
          <label htmlFor="numSeguro" className="block text-gray-700 font-bold mb-2 p-2 w-[150px]">
            Número do Seguro
          </label>
          <input
            type="text"
            id="numSeguro"
            name="numSeguro"
            value={formData.numSeguro}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
  
        <div className="mb-4 flex">
          <label htmlFor="nomSeguro" className="block text-gray-700 font-bold mb-2 p-2 w-[150px]">
            Nome da Seguradora
          </label>
          <input
            type="text"
            id="nomSeguro"
            name="nomSeguro"
            value={formData.nomSeguro}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
  
        <div className="mb-4 flex">
          <label htmlFor="dataConvenio" className="block text-gray-700 font-bold mb-2 p-2 w-[150px]">
            Data do Convênio
</label>
<input
       type="text"
       id="dataConvenio"
       name="dataConvenio"
       value={formData.dataConvenio}
       onChange={handleChange}
       className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
     />
</div>
<div className="mb-4 flex">
    <label htmlFor="responsavel" className="block text-gray-700 font-bold mb-2 p-2 w-[150px]">
      Responsável
    </label>
    <input
      type="text"
      id="responsavel"
      name="responsavel"
      value={formData.responsavel}
      onChange={handleChange}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
  </div>

  <div className="mb-4 flex">
    <label htmlFor="nomecurto" className="block text-gray-700 font-bold mb-2 p-2 w-[150px]">
      Sigla da Universidade
    </label>
    <input
      type="text"
      id="nomecurto"
      name="nomecurto"
      value={formData.nomecurto}
      onChange={handleChange}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
  </div>

  <div className="mb-4 flex">
    <label htmlFor="ie" className="block text-gray-700 font-bold mb-2 p-2 w-[150px]">
      universidade
    </label>
    <input
      type="text"
      id="ie"
      name="ie"
      value={formData.ie}
      onChange={handleChange}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
  </div>

 <center> <button
    type="submit"
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
  >
    Enviar
  </button></center>
</form>
      </div>
    )}