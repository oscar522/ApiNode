import { IsDefined, IsNotEmpty, IsString } from "class-validator"
import { TypeCurrency } from "./TypeCurrency"
import  'reflect-metadata'

export class Currency {
    @IsNotEmpty()
    @IsString()
    @IsDefined()
    amount: string
    @IsDefined()
    currency: TypeCurrency

    public getDto()  {

        return {
            amount : this.limitDecimals(this.amount),
            currency : this.currency
        }

    }

   
    private limitDecimals(value:any){
        try {
            if(value > 0){
                const toStr = value.toString();
                const aux = toStr.split(".");
                if(aux[1].length > 3){ 
                    return parseFloat(`${aux[0]}.${aux[1].slice(0, 3)}`);
                }else{
                    return value;
                }
            }
            return value;
        } catch (error) {
            return value;
        }
    }
}