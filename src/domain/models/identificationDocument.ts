import { envVars } from "../../application/utils/env-vars.config/env-vars.config";

export class identificationDocument {
    entity :identificationDocumentDto
    constructor(reqType : string, reqNumber : string){
        let envVars_ = new envVars().getJSONArray('DOCUMENT_TYPE_HOMOLOGATION')
        
        const getNameTypeDocument : any = envVars_.find((element : any) => element.name == reqType)
        let nameTypeDocumentValue : string ="";
        if (getNameTypeDocument) nameTypeDocumentValue = getNameTypeDocument.value
       
        this.entity  = {
            typeDocument : nameTypeDocumentValue,
            numberDocument : reqNumber,
        }
    }
}

interface identificationDocumentDto {
    typeDocument :string
    numberDocument :string
}

