import { Injectable } from '@angular/core';

@Injectable()
export class GlobalvarService {
  private Datanama : String = "usercoba";
  constructor() { }

  public getnama(){
    return this.Datanama;
  }

  public setnama(nama){
    this.Datanama = nama;
  }
}