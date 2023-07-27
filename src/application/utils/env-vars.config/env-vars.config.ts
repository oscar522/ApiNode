export class envVars {
    get (variable : any) {
        var value = process.env[variable]
        if (value !== undefined){
            return value
        }else{
            return ""
        }
    }
    getJSONArray (variable : any) {
        let getValue = this.get(variable)
        let getParse = getValue.replace(/\\/g, "")
        try {
            const jsonArray = JSON.parse(getParse);
            return jsonArray
        } catch (error) {
            return null
        }
    }
}


