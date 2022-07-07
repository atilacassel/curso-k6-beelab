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

export const options = {
    scenarios: {
        foco_nas_iteracoes_por_usuario: {
            executor: 'per-vu-iterations', //garante que o mesmo numero de requisções seja executada para cada usuário
            vus: 10,
            iterations: 20,
            maxDuration: '2m',
        }
    },
};

export default function() {
    getHome();
    sleep(1);
    getProduct();
}