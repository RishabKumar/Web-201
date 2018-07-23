import {UIController} from './UIController.js';
import {Route} from './../routes/routes.js';
import {forEachPolyfill} from '../Polyfills/CustomPolyfill.js';

forEachPolyfill();
 
let ui = new UIController(Route.getPage());
ui.init();
