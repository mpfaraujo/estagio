import { iEnsinoProps, RespIEProps } from './interfaces'
import { formatCnpjCpf, formatTel } from './formataNumeros'
interface PageProps {
    iEnsino:iEnsinoProps,
    RespIE:RespIEProps
}

const InstEnsino:React.FC<PageProps> =(props:PageProps)=>{
    const {iEnsino,RespIE} =  props

    const cnpjFormatado = formatCnpjCpf(iEnsino.cnpj)
    const cpfRespFormatado = formatCnpjCpf(RespIE.cpf)
    const telFormatado = formatTel(iEnsino.telefone)
    return (
        <>
    <div className='mx-[4em] text-sm pt-6'>
  <p>Instituição de Ensino:{iEnsino.ie}</p>
  <p>
   Estabelecida na: {iEnsino.endereco} 
  </p>
  <p>Telefone: {telFormatado} </p>
  <p>CNPJ nº: {cnpjFormatado} </p>
  <div className='flex justify-between'><span>Representada por: {RespIE.nome}</span><span>Estado Civil: {RespIE.estadoCivil}</span></div>
  <p>Cargo: {RespIE.cargo}</p>
  <p>Identidade: {RespIE.rg} </p>
  <p>CPF nº: {cpfRespFormatado}</p>                
  </div>
        </>
    )
}

export default InstEnsino