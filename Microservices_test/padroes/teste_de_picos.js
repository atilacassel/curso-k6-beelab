import http from 'k6/http';
import {thresholds, check, sleep} from 'k6';

//init
export const url = 'http://host.docker.internal:80';

export const options = {
    stages: [
        {duration: '10s', target: 3}, //Abaixo da carga normal
        {duration: '1m', target: 3},
        {duration: '10s', target: 14}, //pico de carga pelo menos 4x mais
        {duration: '3m', target: 5},
        {duration: '10s', target: 3}, //ramp-down
        {duration: '3m', target: 3},
        {duration: '10s', target: 0}, //Estágio de recuperação
    ],
};

//VU
export default function (){
    http.get(url);
    sleep(1);
}