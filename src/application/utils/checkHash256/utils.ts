const sha256 = require('sha256');

export class checkHash256 {
 
  private decryptedValue : string
  private encryptedValue : string

  constructor(token : string, customerIdHash : string) {
    this.decryptedValue = token;
    this.encryptedValue = customerIdHash;
  }
  
  checkHash256(){
    const hash = sha256(this.decryptedValue);
    return this.encryptedValue === hash
  }

}
