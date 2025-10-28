import { Injectable } from "@nestjs/common";

@Injectable()
export class SMTPProvider {
    constructor(){

    }

    sendMail(to:string, subject:string, body:string){

    }
}