import http from 'k6/http';
import {thresholds, check, sleep} from 'k6';

//init
export const url = 'http://host.docker.internal:80';

export const options = {
    stages: [
        {duration: '2m', target: 3}, //Abaixo da carga normal
        {duration: '5m', target: 3},
        {duration: '2m', target: 5}, //carga normal
        {duration: '5m', target: 5},
        {duration: '2m', target: 7}, //ponto de stress
        {duration: '5m', target: 7},
        {duration: '2m', target: 10}, //ponto de saturação
        {duration: '5m', target: 10},
        {duration: '10m', target: 0}, //Estágio de recuperação
    ],
};

//VU
export default function (){
    http.get(url);
    sleep(1);
}