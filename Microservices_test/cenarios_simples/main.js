import http from 'k6/http';
import {sleep} from 'k6';

import getHome from './home.js'; //importando arquivo home
import getProduct from './product.js'; //importando arquivo product

export const options = {
    vus: 2,
    duration: '30s',
};

export default function() {
    getHome();
    sleep(1);
    getProduct();
}