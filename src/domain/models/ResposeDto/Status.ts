import { IsDefined, IsNotEmpty, IsString } from "class-validator"
import  'reflect-metadata'

export class Status {
    //@IsNotEmpty()
    @IsString()
    @IsDefined()
    id: string
    //@IsNotEmpty()
    @IsString()
    @IsDefined()
    description: string
}