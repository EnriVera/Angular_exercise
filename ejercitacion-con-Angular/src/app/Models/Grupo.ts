import { Task } from './Task'
import { Person } from './Person'

export class Grupo{
    ID: number
    Titulo: String
    Descripcion: String
    Imagen: number[]
    Administrador: Person
    Task: Task[]
}