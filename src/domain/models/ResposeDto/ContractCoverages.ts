import { IsDefined, IsNotEmpty, IsString } from "class-validator"
import { Currency } from "./Currency"
import  'reflect-metadata'

export class ContractCoverages {
    @IsNotEmpty()
    @IsString()
    @IsDefined()
    id: string
    @IsNotEmpty()
    @IsString()
    @IsDefined()
    name: string
    @IsNotEmpty()
    @IsString()
    @IsDefined()
    description: string
    // @IsString()
    value: any 
    @IsNotEmpty()
    @IsString()
    @IsDefined()
    descriptionValue: string
}