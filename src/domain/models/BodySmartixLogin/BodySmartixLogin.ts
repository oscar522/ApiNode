import { MaxLength } from "class-validator"
import { ContextSmartix } from "../ContextSmartix/ContextSmartix";
import { envVars } from '../../../application/utils/env-vars.config/env-vars.config';

export class BodySmartixLogin {
    context : ContextSmartix
    request : Request

    getBody(){
        const body = new BodySmartixLogin();
        
        const bodyContex = new ContextSmartix();
        body.context = bodyContex.getContext();
        
        const bodyRequest = new Request()
        bodyRequest.apiKey =  new envVars().get('APIKEY') ;
        bodyRequest.comando = new envVars().get('COMANDO') ;

        bodyRequest.origenTransaccion = new envVars().get('ORIGEN_TRANSACCION') ;

        let formularioList : [any] =  new envVars().getJSONArray('AVAILABLE_DATA')
        
        bodyRequest.formulario = formularioList;
        body.request = bodyRequest
        return body
    }

}

class Request {
    @MaxLength(1 , {
        message: 'Title is too short',
    })
    apiKey :string
    comando :string
    origenTransaccion :string
    formulario : Formulario[]
}

class Formulario {
    codigo : string
    valor : string
}


