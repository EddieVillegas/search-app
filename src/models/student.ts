import { Prisma } from "@prisma/client"
import prisma from "../config/db"
import type { QueryParams } from '../types'

export function findMany( 
    queryParams : QueryParams
) {
    const { l,p,q } = queryParams
    return prisma.student.findMany({
        take: l,
        skip: p,
        where: {
            OR: [
                    {
                        firstName: {
                            contains: q
                        }
                    },
                    {
                        lastName: {
                            contains: q
                        }
                    },
                    {
                        email: {
                            contains: q
                        }
                    }
            ]
        },
    })
}
    
export function createStudent(data){
    return prisma.student.create({
        data
    })
}