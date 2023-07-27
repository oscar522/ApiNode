import { MaxLength } from "class-validator"
import { envVars } from "../../../application/utils/env-vars.config/env-vars.config"

export class ContextSmartix {
    @MaxLength(1 , {
        message: 'Title is too short',
    })
    codOrganization :string
    codSistema :string
    codNegocio :string
    codProducto? :any
    usuario :string
    token? :string

    getContext(auth : string = ""){
        const context = new ContextSmartix();
        context.codOrganization = new envVars().get('CODE_ORGANIZATION')
        context.codSistema = new envVars().get('CODE_SISTEMA')
        context.codNegocio = new envVars().get('CODIGO_NEGOCIO')
        context.codProducto = new envVars().get('codProducto')
        context.usuario = new envVars().get('USUARIO')
        context.token = auth;
        return context
    }
}