import { Person } from './Person'

export class Task{
    ID: number
    Titulo: String
    Descripcion: String
    FechaCreacion: Date
    Estado: number
    FechaComienzo: Date
    Completado: Boolean
    Imagen: number[]
    IDPerson: Person
}