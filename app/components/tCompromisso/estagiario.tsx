import { formatTel } from './formataNumeros'
import { EstagiarioProps } from './interfaces'
import { formatCnpjCpf } from './tCompromisso'


const Estagiario = (props:EstagiarioProps)=>{
    const {cpf, estagiario, endereco, identidade, nascimento, curso, periodo, telefone, celular, matricula}= props
    const cpfFormatado = formatCnpjCpf(cpf)
    const celularFormatado = formatTel(celular)
    const telefoneFormatado = formatTel(telefone)
    return (
    <>
    <div className='mx-[4em] text-sm pt-6'>
        <p>Estudante-Estagiário: {estagiario}</p>
        <p>Data de Nascimento: {nascimento}</p>
        <p>Residente: {endereco}</p>
        <div className='flex justify-between'><span>Telefone: {telefoneFormatado}</span><span>Celular: {celularFormatado}</span></div>
        <p>Identidade nº: {identidade}</p>
        <p>CPF nº: {cpfFormatado}</p>
        <div className='flex justify-between'><span>Regularmente matriculado no período: {periodo} <sup><u>o</u></sup> </span><span>Matrícula: {matricula}</span></div>
        <p>Curso de Licenciatura em {curso} </p>
    </div>
    </>
    )
}

export default Estagiario