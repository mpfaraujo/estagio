import prisma from "../../../lib/prisma";
import TCompromisso from "../../components/tCompromisso/tCompromisso";

const getEstagiario = async (id: string) => {
  const res = await prisma.estagiario.findUnique({
    where: {
      cpf: id,
    },
  });
  return res;
};

const getIEnsino = async (id: string) => {
  const res = await prisma.iE.findMany({
    where: {
      nomecurto: id,
    },
  });
  return res;
};

const getCendente = async (id: string) => {
  const res = await prisma.responsavelCefet.findMany({
    where: {
      disciplina: id,
    },
  });
  return res;
};

const getResponsavelIe = async (id: string) => {
  const res = await prisma.responsaveliE.findUnique({
    where: {
      cpf: id,
    },
  });
  return res;
};

export default async function Termo({
  params,
}: {
  params: { tc: [id1: string, id2: string] };
}) {
  // console.log(params)
  const { tc } = params;
  const [cpfEst, cpfResp] = tc;
  const estagiario = await getEstagiario(cpfEst);

  const [iEnsino] = await getIEnsino(estagiario.instEnsino);

  const [cedente] = await getCendente(estagiario.curso);

  const responsa = await getResponsavelIe(cpfResp);

  return (
    <div className="p-[6em] print:p-0">
      <TCompromisso
        iEnsino={iEnsino}
        estagiario={estagiario}
        RespCefet={cedente}
        RespIE={responsa}
      />
    </div>
  );
}
