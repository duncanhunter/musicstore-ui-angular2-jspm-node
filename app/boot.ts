import {bind, provide} from 'angular2/core';
import {bootstrap}    from 'angular2/platform/browser';
import {ROUTER_BINDINGS, ROUTER_PRIMARY_COMPONENT} from 'angular2/router';
import {AppComponent} from './components/app/app';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {AlbumService} from './services/album/album.service';
import {GenreService} from './services/genre/genre.service';
import {CartService} from './services/cart/cart.service';
import {OrderService} from './services/order/order.service';
import {CheckoutService} from './services/checkout/checkout.service';
import {Headers, BaseRequestOptions, RequestOptions} from 'angular2/http';
import 'reflect-metadata';
import 'bootstrap';
import 'bootstrap/css/bootstrap.css!css';
import 'assets/styles/site.css!css';
import 'font-awesome/css/font-awesome.min.css!';
import 'toastr';

class AuthHeaders extends BaseRequestOptions {
    headers = new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'bearer ' + localStorage.getItem('jwt')
    });
}
bootstrap(AppComponent,
    [ROUTER_PROVIDERS,
        HTTP_PROVIDERS,
        GenreService,
        AlbumService,
        CartService,
        OrderService,
        CheckoutService,
        ROUTER_BINDINGS,
        bind(ROUTER_PRIMARY_COMPONENT).toValue(AppComponent),
        provide(RequestOptions, { useClass: AuthHeaders })
    ]);
