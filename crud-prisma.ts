/// @brutalzinn
/// 4, DECEMBER 2023
/// PRISMA SERVICE EXAMPLE TO BE USED WITH NESTJS


import { OnModuleInit } from "@nestjs/common";
import { Prisma, PrismaClient } from "@prisma/client";

/// PRISMA SERVICE TO BE USED WITH NESTJS FRAMEWORK.
///THIS WAY I CAN CONNECT TO MY DATABASE AND CREATE TRANSACTIONS IN MORE READABLE METHOD.

 class PrismaService extends PrismaClient implements OnModuleInit {
    transactions : Array<Prisma.PrismaPromise<any>>  =[]
    $queryRaw: any;
    async onModuleInit() {
      await this.$connect();
    }
  
    add(item: Prisma.PrismaPromise<any>){
      this.transactions.push(item)
    }
    
    async commit(): Promise<boolean>{
      try{
        await this.$transaction(this.transactions)
        this.transactions = []
        return true
      }catch(exception){
        return false
      }
    }
  
     abort(){
      this.transactions = []
    }
  }

  /// A PRISMA SERVICE EXAMPLE
class MinhaTabelaService {
    
    /// CONSTRUCTOR THAT ACCCEPTS PRISMASERVICE AS PARAM. UTILS IF YOU PRETEND TO CREATE UNIT TEST OR INTEGRATION TESTS WITH MAKEFILE AND DOCKER
    constructor(private prisma: PrismaService){}

async findBy<S extends Prisma.MinhaTabelaInclude>(params: { where: Prisma.MinhaTabelaWhereInput, include?: Prisma.Subset<S,Prisma.MinhaTabelaInclude>}) {
    const { where, include } = params;
    return this.prisma.minhatabela.findFirst({
        where: where,
        include: include
    });
  }
  
  async update(params: {
    where: Prisma.MinhaTabelaWhereUniqueInput;
    data: Prisma.MinhaTabelaUpdateInput;
  }){
    const { where, data } = params;
    return this.prisma.minhatabela.update({
      data,
      where,
    });
  }
  
  async create(data: Prisma.MinhaTabelaCreateInput) : Promise<MinhaTabela | undefined> {
    return this.prisma.minhatabela.create({
      data:data
    });
  }
  
  async list<S extends Prisma.MinhaTabelaInclude>(params: {where: Prisma.MinhaTabelaWhereInput, include?: Prisma.Subset<S, Prisma.MinhaTabelaInclude>}) 
  {
    const { where, include } = params;
    return this.prisma.minhatabela.findMany({
      where: where,
      include: include
  });
  }  

    async delete(params: {where: Prisma.MinhaTabelaWhereUniqueInput}): Promise<MinhaTabela> {
    const { where } = params;
    return this.prisma.arquivosUpload.delete({
      where: where
    })
  }
}
