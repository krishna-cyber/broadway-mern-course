import axios from "axios"
const BASE_URL = 'http://localhost:8080'

import { Todo } from "../types/todo"
const AxiosInstance = axios.create({
    baseURL: BASE_URL
})

export const getTodoIds = async  () => {

   return(await AxiosInstance.get<Todo[]>('/todos')).data.map(todo => todo.id)
  

}


export const fetchTodo = async (id: number) => {
    return (await AxiosInstance.get<Todo>(`/todos/${id}`)).data
}