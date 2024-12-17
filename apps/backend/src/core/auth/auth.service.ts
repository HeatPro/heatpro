import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  getHelloAuth(){
    return "Hello Auth";
  }

}