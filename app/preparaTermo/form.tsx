"use client"

import { useState } from 'react'
import { RespIEProps } from '../components/tCompromisso/interfaces'
import {  EstagiarioProps } from '../components/tCompromisso/interfaces'
import Link from 'next/link'

type PageProps={
    estagiarios:EstagiarioProps[],
     responsaveisIE:RespIEProps[]
}
type Dados ={
    cpfEst:string,
    cpfRespIE:string,
    iensino:string
}


export default function Form(props:PageProps) {
    const [formValues, setFormValues]=useState({
        
        estagiario:"",
        responsavelIE:"",
    })
    console.log('Dados: ',formValues)
    const { estagiarios, responsaveisIE} = props

function handleChange(e){
    e.preventDefault()
    const {name, value}=e.target
    setFormValues({...formValues, [name]:value})
}

function onSubmit(e){
    e.preventDefault()
    const formData=new FormData(e.target)

}
    return (
        <form className='grid grid-cols-2 gap-6'name='dados'>
        {/* <select name='iEnsino' onChange={handleChange} value={formValues.iEnsino}><option>--</option>
            {iEnsinos.map((iEnsino)=>(<option key={iEnsino.cnpj} value={iEnsino.ie}>{iEnsino.ie}</option>))}
        </select> */}
        <select name='estagiario' onChange={handleChange} value={formValues.estagiario}><option>--</option>
            {estagiarios.map((estagiario)=>(<option key={estagiario.cpf} value={estagiario.cpf}>{estagiario.estagiario}</option>))}
        </select>
        <select name='responsavelIE'onChange={handleChange} value={formValues.responsavelIE}><option>--</option>
            {responsaveisIE.map((responsavelIE)=>(<option key={responsavelIE.cpf} value={responsavelIE.cpf}>{responsavelIE.nome}</option>))}
        </select>
        {/* <select name='cedente' onChange={handleChange} value={formValues.cedente}><option>--</option>
            {responsaveisCefet.map((cedente)=>(<option key={cedente.cpf} value={cedente.cpf}>{cedente.nome}</option>))}
        </select> */}
        <Link href={`/gerar/${formValues.estagiario}/${formValues.responsavelIE}`}>Gerar Termo de Compromisso</Link>
    </form>
    );
}
