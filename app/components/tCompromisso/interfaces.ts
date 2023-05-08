export interface EstagiarioProps{
    cpf:string,
    estagiario:string,
    endereco:string,
    identidade:string,
    nascimento:string,
    curso:string,
    periodo :string,
    telefone:string,
    celular:string,
    matricula:string,
    instEnsino:string
}

export interface iEnsinoProps {
  ie:string,
  endereco:string,
  telefone:string,
  cnpj:string,
  numSeguro:string,
  nomSeguro:string,
  dataConvenio:string,
  responsavel:string,
  nomecurto:string
}

export interface CedenteProps {
    cpf:string ,
    nome:string,
    disciplina:string,
    numPortaria:string,
    dataPortaria:string
}

export interface RespIEProps{
    cpf:string,
    nome:string ,
    rg:string,
    estadoCivil:string,
    cargo:string
  }