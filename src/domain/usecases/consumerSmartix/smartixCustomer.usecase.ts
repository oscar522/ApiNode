import { identificationDocument } from "../../models/identificationDocument";

export interface GetSmartixCustomerUseCase {
  processSmartixCustomerRequest(req : identificationDocument, queryParams : any, idProporsal : string): Promise<any>;
}
