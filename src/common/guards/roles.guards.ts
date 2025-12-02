import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { ROLES_KEY } from "../decorators/role.decorator";
import { TokenPayload } from "src/modules/auth/types/TokenPayload.type";

@Injectable()
export class RolesGuard implements CanActivate{

    constructor (private readonly reflector:Reflector){}

    canActivate(context: ExecutionContext): boolean {

        const roles = this.reflector.getAllAndOverride<String[]>(ROLES_KEY, [context.getHandler(), context.getClass()])

        if (!roles) {
            return true;
        }

    const { payload }: { payload:TokenPayload  } = context.switchToHttp().getRequest();

    const hasRole = () => roles.includes(payload.role);
    if (payload && payload.role && hasRole()) {
      return true;
    }

    throw new ForbiddenException('Access Denied! Unauthorized User.');
        
    }

}