export default function Assinaturas() {
    return (
        <>
        <div className="w-5/6 grid grid-cols-3 mt-[5em] mx-[2em]">
        <div className="col-span-3 text-center">Rio de Janeiro,<span contentEditable className='text-indigo-700 print:text-black'>DD/MM/AAAA</span></div>
        <div className='text-center mt-[5em]'>________________________________<br/><b>INSTITUIÇÃO DE ENSINO</b></div>
        <div className="col-start-3 col-end-4 mt-[5em] text-center">________________________________<br/><b>ESTAGIÁRIO</b></div>
        <div className="col-start-2 col-en-3 mt-[5em] text-center">________________________________<br/><b>CONCEDENTE - CEFET</b></div>
        </div>
        </>

    );
}