import {HttpClient} from "@angular/common/http"
import {Injectable} from "@angular/core"

@Injectable()

export class UserServices{
    constructor(private http:HttpClient){

    }
    getusersdata(){
        return this.http.get("https://reqres.in/api/users?page=2")
    }
}