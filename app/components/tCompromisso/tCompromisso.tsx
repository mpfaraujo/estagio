import React from 'react'
import Assinaturas from "./assinaturas";
import Cabecalho from "./cabecalho";
import Cedente from "./cedente";
import ClausulaCinco from "./clausulaCinco";
import ClausulaDois from "./clausulaDois";
import ClausulaQuatro from "./clausulaQuatro";
import ClausulaSeis from "./clausulaSeis"
import ClausulaTres from "./clausulaTres"
import ClausulaUm from "./clausulaUm"
import Estagiario from "./estagiario"
import InstEnsino from "./instEnsino"
import {
  CedenteProps,
  EstagiarioProps,
  RespIEProps,
  iEnsinoProps,
} from "./interfaces"

type PageProps= {
  iEnsino: iEnsinoProps
  estagiario: EstagiarioProps
  RespCefet: CedenteProps
  RespIE: RespIEProps
}

export function formatCpf(text:string) {
  const badchars = /[^\d]/g
  const mask = /(\d{3})(\d{3})(\d{3})(\d{2})/
  const cpf = new String(text).replace(badchars, "")
  return cpf.replace(mask, "$1.$2.$3-$4");
}

export function formatCnpjCpf(value:string)
{
  const cnpjCpf = value.replace(/\D/g, '')
  
  if (cnpjCpf.length === 11) {
    return cnpjCpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "\$1.\$2.\$3-\$4")
  } 
  
  return cnpjCpf.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, "\$1.\$2.\$3/\$4-\$5")
}

const TCompromisso:React.FC<PageProps>= (props)=> {

  return (
    <>
      <div className="A4 print:block">
        <Cabecalho />
        <InstEnsino iEnsino={props.iEnsino} RespIE={props.RespIE} />
        <Estagiario
          cpf={props.estagiario.cpf}
          estagiario={props.estagiario.estagiario}
          endereco={props.estagiario.endereco}
          identidade={props.estagiario.identidade}
          nascimento={props.estagiario.nascimento}
          curso={props.estagiario.curso}
          periodo={props.estagiario.periodo}
          telefone={props.estagiario.telefone}
          celular={props.estagiario.celular}
          matricula={props.estagiario.matricula}
          instEnsino={props.estagiario.instEnsino}
        />
        <Cedente RespCefet={props.RespCefet}/>
      </div>
      <div className="A4 print:block">
        <ClausulaUm iEnsino={props.iEnsino}/>
        <ClausulaDois />
        <ClausulaTres />
        <ClausulaQuatro iEnsino={props.iEnsino}/>
      </div>
      <div className="A4 print:block">
        <ClausulaCinco />
        <ClausulaSeis />
        <Assinaturas />
      </div>
    </>
  );
};

export default TCompromisso;
