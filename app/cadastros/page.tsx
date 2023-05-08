import Link from 'next/link'

export default function Cadastros() {
  return (<div className='py-[6em] flex flex-wrap justify-center sm:w-full lg:w-auto gap-4'>
<div className='bg-slate-200 shadow-md rounded-lg p-6 max-w-md w-80 sm:w-70 md:w-80 mx-auto mb-6'
// 'block rounded-lg bg-slate-200 p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 m-2'
>
<h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
    Cadastro de estagiário
</h5>
<p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
   Para cadastrar um estagiário vc usará os seguintes dados:<br/>
    Identidade,  Data de Nascimento,  Curso, Periodo,  Telefone,  Celular,  Matricula e Universidade,
  </p>
<Link href={'/cadastros/cadEst'}>  <button type='button' className='rounded bg-sky-700 px-6 pb-2 pt-2.5 text-xs font-medium uppercase text-white hover:scale-110 transition hover:opacity-75'>
    Cadastrar
  </button></Link>
</div>
<div className='bg-slate-200 shadow-md rounded-lg p-6 max-w-md w-80 sm:w-70 md:w-80 mx-auto mb-6'
// 'block rounded-lg bg-slate-200 p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 m-2'
>
<h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
Cadastro de Universidade
</h5>
<p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
Para cadastrar uma universidade vc usará os seguintes dados:<br/>
   Nome, cnpj,Endereco, Nº do Seguro, Nome da Seguradora, Data do convênio, Nome curto, Prof. Responsavel,
  </p>
<Link href={'cadastros/cadUni'}>
<button type='button' className='rounded bg-sky-700 px-6 pb-2 pt-2.5 text-xs font-medium uppercase text-white hover:scale-110 transition hover:opacity-75'>
    Cadastrar
  </button></Link>
</div>
<div className='bg-slate-200 shadow-md rounded-lg p-6 max-w-md w-80 sm:w-70 md:w-80 mx-auto mb-6'
// 'block rounded-lg bg-slate-200 p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 m-2'
>
<h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
Cadastro de Resp. Inst. Ens.
</h5>
<p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
Para cadastrar um Responsável pela instituição de ensino  vc usará os seguintes dados:<br/>
Nome, cpf, Identidade, Cargo e Estado Civil
  </p>
<Link href={'cadastros/cadResIE'}>
<button type='button' className='rounded bg-sky-700 px-6 pb-2 pt-2.5 text-xs font-medium uppercase text-white hover:scale-110 transition hover:opacity-75'>
    Cadastrar
  </button></Link>
</div>
<div className='bg-slate-200 shadow-md rounded-lg p-6 max-w-md w-80 sm:w-70 md:w-80 mx-auto mb-6'
// 'block rounded-lg bg-slate-200 p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 m-2'
>
<h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
Cadastro de Resp. CEFET
</h5>
<p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
Para cadastrar um Responsável pelo CEFET  vc usará os seguintes dados:<br/>
Nome, cpf, Disciplina, Nº Portaria, Data Portaria
  </p>

  <Link href={'cadastros/cadResCefet'}>
<button type='button' className='rounded bg-sky-700 px-6 pb-2 pt-2.5 text-xs font-medium uppercase text-white hover:scale-110 transition hover:opacity-75'>
    Cadastrar
  </button></Link>
</div>
</div>
  );
}
