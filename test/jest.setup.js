process.env =Object.assign(process.env, {
  // PORT : 3000,
  CODE_ORGANIZATION :"SMARTIX",
  CODE_SISTEMA :"FALABELLA",
  CODIGO_NEGOCIO :"FALABELLA",
  USUARIO :"ext_keiacovantuono@falabella.cl",
  APIKEY :"d149b9900d94b01cada738d34a7c05016d125d7936ebc1dc923c005de618341e",
  COMANDO :"Login",
  ORIGEN_TRANSACCION :"B2C",
  AVAILABLE_DATA :"[{\"codigo\":\"USR_USERNAME\",\"valor\":\"ext_keiacovantuono@falabella.cl\"}, {\"codigo\":\"USR_PASSWORD\",\"valor\":\"Fiorella*126\"}, {\"codigo\":\"USR_APIKEY\",\"valor\":\"d149b9900d94b01cada738d34a7c05016d125d7936ebc1dc923c005de618341e\"}]",
  URL_LOGIN_SMARTIX :"https://as-apiwsproxy-dev-r9l2.ase-smartixsecondary-dev-cma8.p.azurewebsites.net/api/user/login",
  URL_CUSTOMER_SMARTIX :"https://as-apiwsproxy-dev-r9l2.ase-smartixsecondary-dev-cma8.p.azurewebsites.net/api/IntegrationCommand/invoke",
  INTEGRATION_COMMAND :"[{\"type\":\"list\",\"value\":\"GETPROPOS\"}, {\"type\":\"detail\",\"value\":\"GETPOLIZASDET\"}]",
  COMMERCE :"SEGUROS",
  COUNTRY :"CL",


  DOCUMENT_TYPE_HOMOLOGATION :"[{\"value\":\"6\",\"name\":\"RUT\"}, {\"value\":\"2\",\"name\":\"RUT1\"}]",
  NODE_ENV :"dev",
  PORT :3001,
  TYPE_QUERY_PARAMS :"[{\"value\":\"1\",\"name\":\"statusId\"}, {\"value\":\"2\",\"name\":\"customerRole\"}, {\"value\":\"3\",\"name\":\"inssuredSubjectId\"} , {\"value\":\"4\",\"name\":\"paymentMethod\"}]",

  HEALTH_MESSAGE :"Smartix policy dapater CL is up!",
  APP_TOKEN : "{\"expiresIn\":\"1d\",\"secretKey\":\"px2D57Hj1w\"}",
  APP_AUTH_USERS :"{\"smartix\":\"U2FsdGVkX19mHN86b5hk+aFF6AEJsz+Z01vQGXjpfi5KCzmD4cOqYDiKWZ5b3tAfeYj66WkyTHQ4tDs4ReE8+PR/WTMQcvRiN/1WtF0bL28=\"}",
});
