import { Type } from "class-transformer"
import { ArrayMaxSize, ArrayMinSize, IsArray, IsIn, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, Min, MinLength } from "class-validator"

export class CreateSessionDto {

    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    
    start_date:string

    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    
    start_time:string

    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    title:string


    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    description:string


    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    address:string


    @IsArray()
    @ArrayMinSize(2)
    @ArrayMaxSize(2)
    @IsNumber({}, {each:true})
    @Type(() => Number)
    location:Array<number>


    @IsInt()
    @IsNotEmpty()
    @Type(() => Number)
    min_age:number


    @IsInt()
    @IsNotEmpty()
    @Type(() => Number)
    max_participants:number


    @IsNumber()
    @Type(() => Number)
    duration:number


    @IsNumber()
    @Type(() => Number)
    @Min(0)
    fee:number
    

    @IsArray()
    @IsString({each:true})
    @ArrayMinSize(1)
    objectives:Array<string>

    
    @IsArray()
    @IsString({each:true})
    @IsOptional()
    @Type(() => Array<string>)
    equipments:Array<string>

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    additional_notes:string

}