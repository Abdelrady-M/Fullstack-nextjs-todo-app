'use server'
import { ITodo } from "@/interfaces";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";


const prisma = new PrismaClient()


export const getTodoListAction = async () => {
    return await prisma.todo.findMany({orderBy:{
        createdAt:'desc'
    }})
}
export const createTodoAction = async ({user_id, title, body, completed}:{title:string; body?:string | undefined, completed:boolean, user_id: string}) => {
     await prisma.todo.create({
        data: {
            title,
            body,
            completed,
            user_id
        }   
    })
    revalidatePath('/')
}
export const updateTodoAction = async ({id, body, completed, title}: ITodo) => {
    await prisma.todo.update({
        where: {
            id
        },
        data: {
            title,
            body,
            completed
        }
    })
    revalidatePath('/')
}
export const deleteTodoAction = async ({id}:{id:string}) => {
    await prisma.todo.delete({
        where: {
            id
        }
    });
    revalidatePath('/')
}