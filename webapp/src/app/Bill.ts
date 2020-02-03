import { User } from './User'
import { Product } from './Product'

export class Bill{
    id : number
    billDate : Date
    user : User
    product : Product
    quantity : number
    ratePerQuantity : number
}