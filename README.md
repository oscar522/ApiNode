# smartix-policy-pe-adapter
> https://api-preprod.segurosfalabella.com/smartix-policy-pe-adapter/qa/health
## ¿Qué es este Repositorio?
> Adaptador para consulta de polizas en smartix. 

## Integraciones
> ![alt text](./ImgIntegration.png)

## Tecnología usada
> es una aplicación creada en NodeJs que ocupa la librería de express.

## ¿Cómo se configura?

> - Clonar el proyecto :
    https://gitlab.falabella.com/fif/seguros/cl/smartix-policy-pe-adapter
> - Configurar un archivo .env dentro del equipo con las variables de vault staging :
    https://portal.azure.com/#@falabella.onmicrosoft.com/resource/subscriptions/1bc44c04-3d5c-4bfd-94e6-e162dff30318/resourceGroups/rg-sxpcycladpt-qa-433b/providers/Microsoft.KeyVault/vaults/kv-sxpcycladpt-qa-7bea/overview
> - Ejecutar: `npm i` y luego `npm start`

## Modo desarrollo:
> - Antes que todo es necesario que el puerto configurado en la variable de entorno esten libres
ya que son utilizados por el entorno local. 
> - Construir la imagen ` npm run docker:build`
> - Iniciar el entorno de desarrollo `npm run docker:dev`
> - Para comprobar que el fue inicializado correctamente, el endpoint `/healthcheck`
deberia retornar la siguiente informacion:
```json
{
	"message": "Rector-policy-bf-adapter is up",
	"uptime": 68303.068,
	"version": "1.0.0",
	"country": "CL"
}
```


## Detalles:
>  smartix-policy-pe-adapter consta de 2 componentes principales:
> - login: obtiene el token de autorizacion requerido en la api consulta de cliente
> - customers/hash/proposals: obtiene la informacion de las polizas
> - customers/hash/proposals/idProporsal: obtiene la informacion de la polizas por su id

## Dependencias:

> para la consulta de cliente, se consume un Integration Command (api) de smartix 
>  `https://as-apiwsproxy-dev-r9l2.ase-smartixsecondary-dev-cma8.p.azurewebsites.net/api/IntegrationCommand/invoke`

## Endpoints:


>  **POST** ``{url}/login``
>  Se utiliza para iniciar sesión con usuario y contraseña y obtener JWT de consumo.
>  
>  ``NOTA: El usuario y contraseña debe estar encriptado en base64``

**Ejemplo de json con usuario y contraseña encriptado:**

```json
{
	"auth": "ewogInVzZXJuYW1lIjogInRlc3QiLAogInBhc3N3b3JkIjogIjEyMzQiCn0="
}
```

**Ejemplo de json con usuario y contraseña a encriptar:**
```json
{
    "username": "userValue",
    "password": "passwordValue"
}
```

**Ejemplo de Respuesta:**

```json
{
    "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwcnVlYmEyIn0.LLruvfH3OSe03gtw4-pcs9GWDhyHfAmGWG-534zPa10ZvpdacpfH5GCC3K-FbaKBIivd3SwgvIJOXO7WFDdx4A"
}
```

**HEADERS:**

| Campo              | Requerido    | Descripción  | Ejemplo      |
| ------------       | ------------ | ------------ | ------------ |
|  X-Channel 	     | ✓ |Canal de Rector donde se realiza la petición | Web, BANCO, CMR|
|  X-Customer-Id     | ✓ |Documento de identificación del cliente | 26091661-0|
|  X-Document-Type   | ✓ |Tipo de Documento de identificación del cliente | RUT|
|  X-Commerce        | ✓ |Plataforma por la cuál el cliente o usuario ingresó los datos para realizar la oferta | SEGUROS, WEB_OMNI1, WEB_OMNI2 |
|  X-Trace-Id        | ✓ |Identificador de transacción desde Integración hasta Seguros |  123456|
|  X-Country         | ✓ |Pais |  PE, CL, CO, AR|
|  X-Forwarded-For   | ✓ |Ip de Origen de la solicitud |  192.168.1.1|
|  flow              | ✓ |Journey/flujo/experiencia por el cual se ofreció el seguro.| ONBOARDING_CMR , ONBOARDING_CTA_CTE, SUPER_AVANCE, CREDITO_CONSUMO, MIS_SEGUROS |
|  executiveId       | ✓ |Código de ejecutivo |12345678|
|  executiveDocumentType    | ✓ |Tipo de Documento de identificación de ejecutivo |RUT|
|  branchId          | ✓  |Código de sucursal |79, 78, 65, etc|
|  x-api-key         | ✓  |Identificador de corredor |CORPORATE, BANCO|
|  Authorization     | ✓ | Bearer token (JWT) |  Bearer xxxxxxxxxxxxxx|


>**GET** 
> ``{url}/customers/:customerId/proposals``
> 
>Consulta la informacion de todas las polizas de un cliente, a través de su documento de identidad.

**Ejemplo de Respuesta:**

Status code: 200

```json
[
    {
        "id": null,
        "date": null,
        "sourceSystem": null,
        "hasPersonalHealthDeclaration": null,
        "salesChannel": {
            "code": null,
            "description": null
        },
        "salesExecutive": {
            "id": 0,
            "identificationDocument": {
                "type": "",
                "number": "",
                "validator": ""
            }
        },
        "broker": {
            "identificationDocument": {
                "type": "",
                "number": "",
                "validator": ""
            },
            "id": null,
            "name": null
        },
        "product": {
            "id": null,
            "productType": null,
            "productSubtype": null,
            "description": null,
            "line": null,
            "company": {
                "identificationDocument": {
                    "type": "",
                    "number": "",
                    "validator": ""
                },
                "tradeName": null,
                "businessName": null
            },
            "name": null,
            "isLiabilityCarInsurance": null
        },
        "status": {
            "id": null,
            "description": null
        },
        "validity": {
            "from": null,
            "to": null
        },
        "premium": {
            "amounts": [
                {
                    "amount": "",
                    "currency": {
                        "code": "",
                        "description": ""
                    }
                }
            ],
            "installments": [
                {
                    "amount": "",
                    "currency": {
                        "code": "",
                        "description": ""
                    }
                }
            ]
        },
        "insuredSubject": {
            "id": null
        },
        "insured": {
            "identificationDocument": {
                "type": "",
                "number": "",
                "validator": ""
            }
        },
        "proposalHolder": {
            "identificationDocument": {
                "type": "",
                "number": "",
                "validator": ""
            }
        }
    }
]
```

>**GET** 
> ``{url}/customers/:customerId/proposals/:idProposals``
> 
>Consulta la informacion de una polizas de un cliente, a través de su id poliza.

**Ejemplo de Respuesta:**

Status code: 200

```json
    {
        "id": null,
        "date": null,
        "sourceSystem": null,
        "hasPersonalHealthDeclaration": null,
        "salesChannel": {
            "code": null,
            "description": null
        },
        "salesExecutive": {
            "id": 0,
            "identificationDocument": {
                "type": "",
                "number": "",
                "validator": ""
            }
        },
        "broker": {
            "identificationDocument": {
                "type": "",
                "number": "",
                "validator": ""
            },
            "id": null,
            "name": null
        },
        "product": {
            "id": null,
            "productType": null,
            "productSubtype": null,
            "description": null,
            "line": null,
            "company": {
                "identificationDocument": {
                    "type": "",
                    "number": "",
                    "validator": ""
                },
                "tradeName": null,
                "businessName": null
            },
            "name": null,
            "isLiabilityCarInsurance": null
        },
        "status": {
            "id": null,
            "description": null
        },
        "validity": {
            "from": null,
            "to": null
        },
        "premium": {
            "amounts": [
                {
                    "amount": "",
                    "currency": {
                        "code": "",
                        "description": ""
                    }
                }
            ],
            "installments": [
                {
                    "amount": "",
                    "currency": {
                        "code": "",
                        "description": ""
                    }
                }
            ]
        },
        "insuredSubject": {
            "id": null
        },
        "insured": {
            "identificationDocument": {
                "type": "",
                "number": "",
                "validator": ""
            }
        },
        "proposalHolder": {
            "identificationDocument": {
                "type": "",
                "number": "",
                "validator": ""
            }
        }
    }
```




## Para mas información:

>- rtzambrano@falabella.cl
>- ext_oballesterosb@Falabella.com.co
>- Integraciones_SF@Falabella.cl

