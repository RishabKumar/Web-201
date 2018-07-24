/*/
import './components/common.js';
import './components/header.js';
import './components/carousel.js';
import './components/category.js';
import './components/home/item-loader.js';
/*/

import './styles/main.scss';
//import './scripts/vendor/jquery.min.js';
import {app} from './scripts/controller/GlobalController.js';

require('babel-polyfill');

app.loadPolyfills();
app.init();