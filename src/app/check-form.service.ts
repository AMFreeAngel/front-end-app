import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckFormService {

  constructor() { }

  checkLogin(login){
    if(login == undefined)
      return false;
    else
      return true;
  }

  checkEmail(email){
    if(email == undefined)
      return false;
    else
      return true;
  }

  checkPassword(password){
    if(password == undefined)
      return false;
    else
      return true;
  }

  checkName(name){
    if(name == undefined)
      return false;
    else
      return true;
  }
}