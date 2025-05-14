import { PrismaClient } from '@prisma/client'

const config = {
	isProduction: process.env.NODE_ENV === 'production',
	dummyDataLength: 10, // prisma seed data length
}

const { isProduction } = config

declare global {
	var prisma: PrismaClient | undefined
}

export const prisma = global.prisma || new PrismaClient()

const connectDatabase = async () => {
	try {
		await prisma.$connect()
		console.log('🚀 ~ database connected.')
	} catch (error: any) {
		console.log(
			'🚀 ~ file: client.ts:14 ~ connectDatabase ~ error:',
			isProduction ? error.message : error.stack
		)
		process.exit(1)
	} finally {
		await prisma.$disconnect()
		console.log('🚀 ~ database disconnected.')
	}
}

export default connectDatabase