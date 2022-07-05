import http from 'k6/http';
import {thresholds, check} from 'k6';

//init
export const url = 'http://host.docker.internal:80';

export const options = {
    stages: [
        {duration: '5m', target: 5}, //ramp-up
        {duration: '5m', target: 5},
        {duration: '5m', target: 0}, //ramp-down
    ],
    thresholds: {
        http_req_duration: ['p(95) < 1000'],
        checks: ['rate>0.99']
    },
};

//VU
export default function (){
    const response = http.get(url);
    check(response, {
        'is status 200' : (r) => r.status === 200,
    });
}