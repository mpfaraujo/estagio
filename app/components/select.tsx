'use client'

import { FormEvent, FormEventHandler, useState } from 'react'

type propsAluno = {
    estagiario:String ,
    nascimento:String,
    endereco:String ,
    telefone:String,
    celular:String ,
    identidade:String,
    cpf:String,
    período:String ,
    matrícula:String,
    curso: "Licenciatura em Matemática"

}

export default function Select({alunos}:propsAluno[]) {
    const [selecionado, setSelecionado]=useState("")

    function handleSubmit(e:FormEvent){
        e.preventDefault()
    }
    function handleChange(e:FormEvent){
        setSelecionado(e.target.value)
    }


    return(
<form onSubmit={handleSubmit}>
<select name="aluno" id="aluno" value={selecionado} onChange={handleChange}>
<option selected defaultValue="">--</option>
{alunos.map((aluno)=>(
<option id="escolhido" name="escolhido" value={aluno.matrícula}>{aluno.estagiario}
</option>))}</select>
</form>
    );
}