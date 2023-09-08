import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

// no necessary but a good practice (interface)
interface AuthResponseData {
    kind:string;
    idToken:string;
    email:string;
    refreshToken: string;
    expiresIn:string;
    localId:string;
}

@Injectable({providedIn: 'root'})
export class AuthService {
    constructor(private http: HttpClient){}

    signup(email: string, password: string){
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=[API_KEY]',
            {
                email:email,
                password:password,
                returnSecureToken: true
            }
        );
    }
}
// 