import {Component, Input} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {Album} from '../../models';
import template from './album-summary.html!text';
import css from './album-summary.css!text';
@Component({
    directives: [CORE_DIRECTIVES],
    selector: 'album-summary',
    styles: [ css ],
    template: template,
})

export class AlbumSummary  {
    @Input() album: Album;
}
