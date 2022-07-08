import http from 'k6/http';
import {sleep, scenarios} from 'k6';

import getHome from '../cenarios_simples/home.js'; //importando arquivo home
import getProduct from '../cenarios_simples/product.js'; //importando arquivo product

/* export const options = {
    scenarios: {
        foco_no_total_de_iteracoes: {
            executor: 'shared-iterations', //compartilha o numero de iterações entre os usuários, mas não garante a mesma quantidade para todos
            vus: 10,
            iterations: 200,
            maxDuration: '2m',
        }
    },
}; */

/* export const options = {
    scenarios: {
        foco_nas_iteracoes_por_usuario: {
            executor: 'per-vu-iterations', //garante que o mesmo numero de requisções seja executada para cada usuário
            vus: 10,
            iterations: 20,
            maxDuration: '2m',
        }
    },
}; */

/* export const options = {
    scenarios: {
        usuarios_constantes_iteracoes_ilimitadas: {
            executor: 'constant-vus', //garante que o mesmo numero de requisções seja executada para cada usuário
            vus: 10,
            duration: '2m',
        }
    },
}; */

/* export const options = {
    scenarios: {
        carga_em_estagios: {
            executor: 'ramping-vus',
            startVUs: 1,
            stages: [
                { duration: '1m', target: 10 },
                { duration: '1m', target: 10 },
                { duration: '1m', target: 0 },
            ],
            gracefulRampDown: '0s',
        },
    },
}; */

/* export const options = {
    scenarios: {
        requisicoes_constantes_por_segundo: {
            executor: 'constant-arrival-rate',
            rate: 5, //5 RPS, since timeUnit is the default 1s
            //timeUnit: '1m',
            duration: '1m',
            preAllocatedVUs: 2,
            maxVUs: 50,
        },
    },
}; */

/* export const options = {
    scenarios: {
        requisicoes_em_estagios_por_segundo: {
        executor: 'ramping-arrival-rate',
        startRate: 1,
        timeUnit: '1s',
        preAllocatedVUs: 2,
        maxVUs: 50,
            stages: [
            { target: 10, duration: '30s' },
            { target: 20, duration: '30s' },
            { target: 0, duration: '30s' },
        ],
      },
    },
}; */

/* export const options = {
    scenarios: {
      carga_customizavel_via_api: {
        executor: 'externally-controlled',
        vus: 10,
        maxVUs: 50,
        duration: '10m',
      },
    },
  }; */

  
//modelo agrupado de scenarios
  export const options = {
    scenarios: {
        usuarios_constantes: {
            executor: 'constant-vus',
            vus: 10,
            duration: '10m',
        },
        requisicoes_de_bots: {
            executor: 'constant-arrival-rate',
            rate: 5, //200 RPS, since timeUnit is the default 1s //bots cadastrados na nossa aplicação
            //timeUnit: '1m',
            duration: '2m',
            preAllocatedVUs: 2,
            maxVUs: 50,
            startTime: '2m', //tempo de início do cenários após o início do teste
        },
        usuarios_anuncio: {
            executor: 'ramping-vus',
            startTime: '3m', //tempo de início do cenários após o início do teste - 1 minutos após o cenário anterior finalizar
            startVUs: 0,
            stages: [
                { duration: '30s', target: 10 },
                { duration: '30s', target: 10 },
                { duration: '1m', target: 0 },
            ],
            gracefulRampDown: '0s',
        },
    },
  };

export default function() {
    getHome();
    sleep(1);
    getProduct();
};