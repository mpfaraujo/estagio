import { iEnsinoProps } from './interfaces'

type PageProps= {
  iEnsino:iEnsinoProps
}
export default function ClausulaQuatro(props:PageProps) {
  const {numSeguro, nomSeguro}=props.iEnsino
    return (
<>
<div className='mx-[4em]'>
  <h1 className='text-lg mt-6 w-full'><b><u>CLÁUSULA QUARTA - DAS OBRIGAÇÕES DA INSTITUIÇÃO DE ENSINO</u></b></h1>
    <ol className='text-sm mt-[1em]'>
      <li>Acompanhar e supervisionar o estágio, podendo a qualquer tempo, propor a interrupção do estágio pelo não cumprimento, por quaisquer das partes envolvidas, das Cláusulas estabelecidas no Convênio para Concessão de Estágio;</li>
      <li>Designar professor orientador;<br/>
Professor Orientador:</li>
      <li>Comunicar à parte concedente do estágio, as datas de realização das avaliações escolares ou acadêmicas.</li>
      <li>Contratar em favor do estagiário <b>Seguro contra acidentes pessoais</b>, através de Seguro coberto pela <b>Apólice nº</b>{numSeguro}, da <b>Seguradora</b> {nomSeguro} </li>
    </ol>
  </div>
</>
    );
}
