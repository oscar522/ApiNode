import { IsDefined, IsNotEmpty, IsString } from "class-validator"
import  'reflect-metadata'

export class SalesChannel {
    @IsNotEmpty()
    @IsString()
    @IsDefined()
    code: string
    @IsNotEmpty()
    @IsString()
    @IsDefined()
    description: string
}