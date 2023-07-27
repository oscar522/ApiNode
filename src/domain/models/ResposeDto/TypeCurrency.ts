import { IsDefined, IsNotEmpty, IsString } from "class-validator"
import  'reflect-metadata'

export class TypeCurrency {
    @IsNotEmpty()
    @IsString()
    @IsDefined()
    code: string
    @IsNotEmpty()
    @IsString()
    @IsDefined()
    description: string
}