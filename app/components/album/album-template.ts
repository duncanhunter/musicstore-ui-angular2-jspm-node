import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {Album} from '../../models';
import template from './album-template.html!text';
import css from './album-template.css!text';

@Component({
    selector: 'album-template',
    template: template,
    styles: [ css ],
    directives: [CORE_DIRECTIVES]
})
export class AlbumTemplate {
    @Input() album: Album;
    @Output('selected') selected = new EventEmitter();

    onSelect(album) {
        this.selected.next(album);
    }
}
