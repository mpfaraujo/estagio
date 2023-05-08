import { iEnsinoProps } from './interfaces';

type PageProps = {
    iEnsino: iEnsinoProps
}
export default function ClausulaUm(props:PageProps) {
    const {dataConvenio} =props.iEnsino
    return (
<>
<div className='mx-[4em] pt-[2em]'>
    <h1 className='text-lg mt-[1em] w-5/6'><b><u>CLÁUSILA PRIMEIRA - DO OBJETO</u></b></h1>
  <p className='text-sm mt-[1em]'>O presente termo tem por objetivo a concessão de estágio curricular ao estudante devidamente matriculado no âmbito da <b>INSTITUIÇÃO DE ENSINO</b>, de acordo com o que ficou estabelecido no Convênio assinado em {dataConvenio}, entre a <b>CONCEDENTE</b> e a <b>INSTITUIÇÃO DE ENSINO.</b></p>
  </div>
</>
    );
}