import { ILoginData } from "../interfaces/ILoginData";
import { IresponseError } from "../interfaces/IresponseError";

export class AuthService {

  login(loginBody: ILoginData): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (loginBody.username === 'admin' && loginBody.password === 'admin') {
          sessionStorage.setItem('authToken', 'authToken');
          resolve('ok');
        } else {
          reject(<IresponseError>{
            status: 400,
            message: 'Username or password mismatch'
          })
        }
      }, 1000)
    })
  }

  isAuthorised(): boolean {
    return !!sessionStorage.getItem('authToken');
  }
}