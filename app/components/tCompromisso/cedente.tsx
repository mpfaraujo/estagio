import { CedenteProps } from './interfaces'

type PageProps={
  RespCefet:CedenteProps
}



const Cedente = (props:PageProps)=>{
  const {RespCefet}=props
return (
    <>
      <div className='mx-[4em] text-sm pt-6'>
  <p>Concedente: CENTRO FEDERAL DE EDUCAÇÃO TECNOLÓGICA CELSO SUCKOW DA FONSECA </p>
  <p>
   Estabelecida na: Av. Maracanã, 229, Maracanã, Rio de Janeiro/RJ
  </p>
  <p>CNPJ nº: 42441758/0001-05</p>
  <div className='flex justify-between'><span>Representada por: {RespCefet.nome}</span><span>Cargo: Coordenador da Disciplina {RespCefet.disciplina},</span></div>
  <p>designado pela Portaria nº: {RespCefet.numPortaria}, na  data {RespCefet.dataPortaria}, têm justo e acordado celebrar o presente TERMO DE COMPROMISSO, com base na Lei nº: 11.788, de 25/09/2008.</p>             
  </div>
    </>
)
}

export default Cedente