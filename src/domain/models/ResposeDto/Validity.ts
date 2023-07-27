import { IsDefined, IsNotEmpty, IsString } from "class-validator"
import  'reflect-metadata'

export class Validity {
    @IsNotEmpty()
    @IsString()
    @IsDefined()
    from: string
    @IsNotEmpty()
    @IsString()
    @IsDefined()
    to: string
}