import betolt_00_bal from './alkalmazas_js/00_blokk/betolt_00_bal.js';
import betolt_00_jobb from './alkalmazas_js/00_blokk/betolt_00_jobb.js';
import betolt_01_bal from './alkalmazas_js/01_blokk/betolt_01_bal.js';
import betolt_01_jobb from './alkalmazas_js/01_blokk/betolt_01_jobb.js';
import betolt_02_bal from './alkalmazas_js/02_blokk/betolt_02_bal.js';
import betolt_02_jobb from './alkalmazas_js/02_blokk/betolt_02_jobb.js';
import betolt_03_bal from './alkalmazas_js/03_blokk/betolt_03_bal.js';
import betolt_03_jobb from './alkalmazas_js/03_blokk/betolt_03_jobb.js';
import betolt_04_bal from './alkalmazas_js/04_blokk/betolt_04_bal.js';
import betolt_04_jobb from './alkalmazas_js/04_blokk/betolt_04_jobb.js';

let balOldal = betolt_00_bal;
balOldal += betolt_01_bal;
balOldal += betolt_02_bal;
balOldal += betolt_03_bal;
balOldal += betolt_04_bal;

let jobbOldal = [];
jobbOldal.push(betolt_00_jobb);

let jobbOldalLenyit = [];
jobbOldalLenyit.push(betolt_01_jobb);
jobbOldalLenyit.push(betolt_02_jobb);
jobbOldalLenyit.push(betolt_03_jobb);
jobbOldalLenyit.push(betolt_04_jobb);

export { balOldal, jobbOldal, jobbOldalLenyit };
