
async buscarPor<S extends Prisma.MinhaTabelaInclude>(params: { where: Prisma.MinhaTabelaWhereInput, include?: Prisma.Subset<S,Prisma.MinhaTabelaInclude>}) {
  const { where, include } = params;
  return this.prisma.minhatabela.findFirst({
      where: where,
      include: include
  });
}

async atualizar(params: {
  where: Prisma.MinhaTabelaWhereUniqueInput;
  data: Prisma.MinhaTabelaUpdateInput;
}){
  const { where, data } = params;
  return this.prisma.minhatabela.update({
    data,
    where,
  });
}

async criar(data: Prisma.MinhaTabelaCreateInput) : Promise<MinhaTabela | undefined> {
  return this.prisma.minhatabela.create({
    data:data
  });
}

async listar<S extends Prisma.MinhaTabelaInclude>(params: {where: Prisma.MinhaTabelaWhereInput, include?: Prisma.Subset<S, Prisma.MinhaTabelaInclude>}) 
{
  const { where, include } = params;
  return this.prisma.minhatabela.findMany({
    where: where,
    include: include
});
}  
