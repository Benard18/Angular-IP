import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private name:string;
    
    private api = "a40e9bfe64b6df151b65ba751d97417eac26f4cd";

    constructor(private http:Http) {
    
    this.name="Benard18";
  }
  getUsername(){
    return this.http.get("https://api.github.com/users/" + this.name + "?access_token=" +
     this.api).pipe(map(res => res.json()))
  }
  getRepos(){
    return this.http.get("https://api.github.com/users/" + this.name + "/repos?access_token=" +
     this.api ).pipe(map(res => res.json()))
  }
  updateUsername(name:string){
    this.name=name;
  }
  }
  
