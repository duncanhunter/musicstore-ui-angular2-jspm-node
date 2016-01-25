import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgForm, NgFormControl} from 'angular2/common';
import {Order} from '../../models';
import {CheckoutService} from '../../services/checkout/checkout.service';
import {RouteParams, Router} from 'angular2/router';
import {Routes} from '../../route.config';
import template from './checkout.html!text';
import css from './checkout.css!text';

@Component({
    selector: 'checkout',
    template: template,
    styles: [ css ],
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, NgForm, NgFormControl]
})
export class CheckoutComponent {
    states = ['NSW', 'VIC', 'TAS', 'WA', 'SA', 'NT', 'QLD'];
    public submitted = false;

    constructor(private _checkoutService: CheckoutService,
        private _routeParams: RouteParams, private _router: Router) {
    }

    model = new Order();

    onSubmit() {
        console.log(JSON.stringify(this.model));
        this._checkoutService.postOrder(this.model).
            subscribe((order) => {
                toastr.success(`successfully added order`);
                this._router.navigate([`/${Routes.orders.as}`]);
            });

        this.submitted = true;
    }
}
