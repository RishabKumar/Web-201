import {UIController} from './UIController.js';
import {Route} from './../routes/routes.js';

 
let ui = new UIController(Route.getPage());
ui.init();
