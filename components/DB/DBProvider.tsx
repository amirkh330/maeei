import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getPersons() {
  const data = await prisma.person.findMany()
  return data
}

export default async function DBProvider({children}:any){
  const data = await getPersons()
  return(
    <>{children(data)}</>
  )
}