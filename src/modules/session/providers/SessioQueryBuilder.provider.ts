import { Session } from "generated/prisma/client"
import { StringFilter } from "generated/prisma/commonInputTypes"

export class SessionQueryBuilder{

    sessionQuery:Record<keyof Session, StringFilter>

    constructor (){

    }

    searchByTitle(query:string){

        this.sessionQuery.title = {contains:query}

    }

    searchByDescription(query:string){
        this.sessionQuery.description = {contains:query}
    }

    searchByRadius(radius:number){
        
    }

}