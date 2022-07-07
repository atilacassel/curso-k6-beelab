import http from 'k6/http';
import {sleep, check} from 'k6';

//init
export const url = 'http://host.docker.internal:80/product/OLJCESPC7Z';

//removido o controle de carga 'options' pois ele vai ser realizado pelo arquivo principal 'main.js'

//VUs
export default function() {
    const response = http.get(url);
    check(
        response,
        {'is in product?' : (r) => r.request.url = 'http://host.docker.internal:80/product/OLJCESPC7Z'}
    );
}