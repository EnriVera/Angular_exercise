import { Person } from './Person'

export class Task{
    ID: number
    Titulo: string
    Descripcion: string
    FechaCreacion: Date
    Estado: number
    FechaComienzo: Date
    Completado: Boolean
    Imagen: any[]
    IDPerson: Person
}