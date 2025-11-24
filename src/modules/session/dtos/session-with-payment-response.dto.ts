import { Exclude, Expose } from "class-transformer";
import { CreateSessionDto } from "./create-session.dto";


export class SessionWithPaymentDto extends CreateSessionDto{


    coach:{
        
        id:string
       
        fullName:string

        avatar:string


    }

}