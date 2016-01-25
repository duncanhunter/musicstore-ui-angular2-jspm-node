import {Component, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES, DatePipe} from 'angular2/common';
import {OrderService} from '../../services/order/order.service';
import {Order} from '../../models';
import template from './order.component.html!text';
import css from './order.component.css!text';

@Component({
    selector: 'orders',
    template: template,
    styles: [ css ],
    directives: [CORE_DIRECTIVES],
    pipes: [DatePipe]
})
export class OrderComponent implements OnInit {
    public orders: any[] = [];

    constructor(private _orderService: OrderService) {
    }

    ngOnInit() {
        this.getOrders();
    }

    getOrders() {
        this._orderService.getOrders()
            .subscribe(orders =>
                orders.map((order: Order) => {
                    return {
                        orderId: order.orderId,
                        orderDate: new Date(order.orderDate.toString()),
                        total: order.total
                    };
                }).forEach((order) => {
                    this.orders.push(order);
                })
            );
    }

}
