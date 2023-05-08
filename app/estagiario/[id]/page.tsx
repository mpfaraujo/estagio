import prisma from '../../../lib/prisma'
import Estagiario from '../../components/tCompromisso/estagiario'
import { EstagiarioProps } from '../../components/tCompromisso/interfaces'

// interface dadosProps{
//     cpf:string,
//     estagiario:string,
//     endereco:string,
//     identidade:string,
//     nascimento:string,
//     curso:string,
//     periodo:string,
//     telefone:string,
//     celular:string,
//     matricula:string
// }

const getEstagiario=async (id:string)=>{

    const res = await prisma.estagiario.findUnique({
        where:{
            cpf: id
        },
    })
    return res

}

export default async function({params}:{params:{id:string}}) {
    const dados:EstagiarioProps  = await getEstagiario(params.id)
    return (
        <div className='p-[6em]'>
           {dados?<Estagiario 
           cpf={dados.cpf} 
           estagiario={dados.estagiario}
           endereco={dados.endereco}
           identidade={dados.identidade}
           nascimento={dados.nascimento}
           curso={dados.curso}
           periodo ={dados.periodo}
           telefone={dados.telefone}
           celular={dados.celular}
           matricula={dados.matricula}
           instEnsino={dados.instEnsino}
           />:(<>
           <div>Usuário não encontrado. Certifique-se que digitou o número de CPF corretamente sem pontos nem traços!</div></>)}
        </div>
    );
}