import Image from 'next/image'
import cefet from '../../../public/horiz_preto2.svg'
const Cabecalho =()=>{
    return (<>
        <div >
<Image className='mx-auto my-6' src={cefet}  style={{ width: '250', height: 'auto' }} alt='logo' />
</div>
<div className='font-sans font-medium text-center w-full '>CENTRO FEDERAL DE EDUCAÇÃO TECNOLÓGICA CELSO SOCKOW DA FONSECA<br/>DIREN/DEMET<p className='border-b-[5px] border-black pb-3 w-5/6 mx-[4em]'></p></div>
<h1 className='text-lg font-medium text-center'>TERMO DE COMPROMISSO - PRÁTICA DE ENSINO</h1></>
    )
}

export default Cabecalho