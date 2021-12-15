import { Component, OnInit } from '@angular/core';

import { OrderService } from "../order.service"

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
orders: any
  constructor() { }

  ngOnInit(): void {
  this.getOrders()
  }

  getOrders(): void{
    this.service.getArtists.subscribe(orders => {
      this.orders = orders
    })
  }

}
