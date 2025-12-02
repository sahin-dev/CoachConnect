import { Expose, Transform, Type } from "class-transformer"
import { CoachResponseDto } from "./coach-response.dto"
import { ValidateNested } from "class-validator"



export class SessionResponseDto {

    @Expose({
        groups:["public", "short"]
    })
    id:string

    @Expose({
        groups:["public", "short"]
    })
    @Transform(obj => {
            
        if(obj.value){
            let value = obj.value as string
            value =  value.replaceAll("\\", "\/")
                return `${value}`
        }
    })
    banner:string

    @Expose({
        groups:["public", "short"]
    })
    started_at:string

    @Expose({groups:["public", "short"]})
    title:string

    @Expose({groups:["public", "short"]})
    fee:number

    @Expose({groups:["coach", "public", "short"]})
    left:number

    @Expose({groups:["coach"]})
    joined:number

    @Expose({groups:["enrolled", "coach"]})
    address:string

    @Expose({groups:["enrolled", "public"]})
    @ValidateNested()
    @Type(() => CoachResponseDto)
    coach:CoachResponseDto

    @Expose({groups:["public"]})
    max_participants:number

    @Expose({groups:["public"]})
    objectives:string[]

    @Expose({groups:["public"]})
    equipment:string[]

    @Expose({groups:["public", "short"]})
    description:string

    @Expose({groups:["public"]})
    participant_min_age:number
 
}