import { Expose } from "class-transformer";
import { SessionResponseDto } from "./session-response.dto";

export class SessionDetailedResponseDto extends SessionResponseDto{

    
    @Expose()
    address:string

    // @Expose()
    // max_participants:number

    @Expose()
    objectives:string[]

    @Expose()
    equipments:string[]

}