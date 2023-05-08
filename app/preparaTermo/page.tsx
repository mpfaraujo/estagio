import { isElementAccessChain } from 'typescript'
import prisma from '../../lib/prisma';
import Form from './form'
// async function PegaIEnsino(){
//     const res = await prisma.iE.findMany()
//     return res
// }
async function PegaEstagiario(){
    const res = await prisma.estagiario.findMany()
    return res
}
// async function PegaCedente(){
//     const res = await prisma.responsavelCefet.findMany()
//     return res
// }
async function PegaOrientadorIE(){
    const res = await prisma.responsaveliE.findMany()
    return res
}

export default async function Gerar() {
    // const iEnsinos=await PegaIEnsino()
    const estagiarios=await PegaEstagiario()
    // const cedentes=await PegaCedente()
    const respIEs=await PegaOrientadorIE()
    return (
        <div className='p-[6em]'>
            <Form estagiarios={estagiarios}  responsaveisIE={respIEs} />

        </div>
    );
}