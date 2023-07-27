import { IsDefined, IsString } from "class-validator"
import { IdentificationDocument } from "./IdentificationDocument"
import  'reflect-metadata'

export class ProposalHolder {
    @IsDefined()
    identificationDocument: IdentificationDocument
}