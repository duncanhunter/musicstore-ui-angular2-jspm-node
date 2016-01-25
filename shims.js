import 'reflect-metadata';
import Zone from 'zone.js';
// required by twbs bootsrap
import Tether from 'tether/dist/js/tether.js'

// workaround for https://github.com/angular/angular/issues/6007
window.Zone = Zone;
window.Tether = Tether;