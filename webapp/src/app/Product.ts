export class Product{
    id : number
    code : String
    name : String
    type : String
    brand : String
    quantityType : String
    ratePerQuantity : number
    stockCount : number
    addDate : Date
    aisle : String
    shelf : String
    dateOfManufacture : Date
    dateOfExpiry ?: Date
    image : String
    rating : number

    setId(id : number){
        this.id = id
    }
}