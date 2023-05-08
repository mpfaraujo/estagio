import { NextResponse } from 'next/server'
import prisma from '../../../../lib/prisma'

export async function POST(req:Request) {
    const body = await req.json()

    const res = await prisma.estagiario.create({data:body})
    return NextResponse.json(res)

}