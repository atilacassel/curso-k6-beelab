import http from 'k6/http';
import {sleep} from 'k6';

export default function() {
    //acontecem as execuções dos VUs
    http.get('http://host.docker.internal:80');
    sleep(1);
}