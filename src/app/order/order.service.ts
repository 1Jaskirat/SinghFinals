import { Injectable } from '@angular/core'


import{HttpClient} from "@angular/common/http";

import {enviroment} from "../enviroments/enviroment";

@Injectable({
  providedIn: 'root'

})

export class OrderService {
  provideIn:'root'
}


export class OrderServer {
  constructor(private http: HttpClient) {}

  //get
  getOrders(){
    return this.http.get('http://localhost:3000/api/orders')
  }

}
