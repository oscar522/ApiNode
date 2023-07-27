import { MaxLength } from "class-validator"
import { envVars } from "../../../application/utils/env-vars.config/env-vars.config";
import { ContextSmartix } from "../ContextSmartix/ContextSmartix";
import { identificationDocument } from "../identificationDocument";

export class BodySmartix {
    context : ContextSmartix
    transactionId? : any
    data : Data
    IntegrationCommand : string

    getBody(req : identificationDocument, auth : string, queryParams : any [], idProporsal : string  ){
        const body = new BodySmartix()
        const contex = new ContextSmartix()
        body.context = contex.getContext(auth)
        body.transactionId = null

        const numberDocument = req.entity.numberDocument
       const integrationCommand : [any] =  new envVars().getJSONArray('INTEGRATION_COMMAND')

        let data : any = {};
        if (idProporsal != "") {
            data.Poliza = {
                "POLIZA": idProporsal,
                "PAIS": new envVars().get('COUNTRY'),
                "CUSTOMER_ID" : numberDocument,
                "TRUE_BY_IDPOLIZA_OR_FALSE_BY_CODIGOREFERIDO": false,
                "CODREFERIDO": idProporsal
            },
            body.IntegrationCommand = integrationCommand.find(x => x.type == "detail").value

        }else{
            data.Client = {
                "CODTIPODOCUMENTOCLIENTE": req.entity.typeDocument,
                "NRODOCUMENTO": numberDocument,
                "PAIS": new envVars().get('COUNTRY'),
            },
            body.IntegrationCommand = integrationCommand.find(x => x.type == "list").value
            if(queryParams.length > 0)
            queryParams.map((x:any) => {
                data.Client[Object.keys(x)[0].toLocaleUpperCase()] = x[Object.keys(x)[0]].replace(" ", "_")
            })

        }
        body.data = data
        return body
    }

}
class Data {
    CODTIPODOCUMENTOCLIENTE :string
    NRODOCUMENTO :string
}



