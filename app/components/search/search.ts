import {Control, FORM_DIRECTIVES, NgFor, NgIf, AsyncPipe} from 'angular2/common';
import {Component,EventEmitter, ChangeDetectionStrategy, Output, } from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import {AlbumService} from '../../services/album/album.service';
import {Album} from '../../models';
import template from './search.html!text';
import css from './search.css!text';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    directives: [FORM_DIRECTIVES, NgFor, NgIf],
    pipes: [AsyncPipe],
    providers: [AlbumService],
    selector: 'search',
    styles: [ css ],
    template: template,
})

export class Search {
    @Output('selected') selected = new EventEmitter();

    clear = new EventEmitter();

    // forms are observable in Angular2
    searchText = new Control();

    albums: Observable<Album[]>;

    constructor(http: Http, albumService: AlbumService) {
       // get a stream of changes from the searchText input

       this.albums = Observable.from(this.searchText.valueChanges)
           // wait for a pause in typing of 500ms then emit the last value
           .debounceTime(500)
           // only accept values that don't repeat themselves
           .distinctUntilChanged()
           // map that to an observable HTTP request,
           // using the albumService and switch to that observable.
           // That means unsubscribing from any previous HTTP request
           // (cancelling it), and subscribing to the newly returned on here.
           .switchMap((val: string) => albumService.search(val))
           // use async pipe instead of .subscribe(albums => this.albums = albums);
           // send an empty array to albums whenever clear emits by
           // merging in a the stream of clear events mapped to an
           // empty array.
           .merge(this.clear.mapTo([]));
    }

    onSelect(album) {
        this.selected.next(album);
        this.clear.next('');
    }
}

