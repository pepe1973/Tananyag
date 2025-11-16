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
import betolt_05_bal from './alkalmazas_js/05_blokk/betolt_05_bal.js';
import betolt_05_jobb from './alkalmazas_js/05_blokk/betolt_05_jobb.js';
import betolt_06_bal from './alkalmazas_js/06_blokk/betolt_06_bal.js';
import betolt_06_jobb from './alkalmazas_js/06_blokk/betolt_06_jobb.js';
import betolt_07_bal from './alkalmazas_js/07_blokk/betolt_07_bal.js';
import betolt_07_jobb from './alkalmazas_js/07_blokk/betolt_07_jobb.js';
import betolt_08_bal from './alkalmazas_js/08_blokk/betolt_08_bal.js';
import betolt_08_jobb from './alkalmazas_js/08_blokk/betolt_08_jobb.js';
import betolt_09_bal from './alkalmazas_js/09_blokk/betolt_09_bal.js';
import betolt_09_jobb from './alkalmazas_js/09_blokk/betolt_09_jobb.js';

let balOldal = betolt_00_bal;
balOldal += betolt_01_bal;
balOldal += betolt_02_bal;
balOldal += betolt_03_bal;
balOldal += betolt_04_bal;
balOldal += betolt_05_bal;
balOldal += betolt_06_bal;
balOldal += betolt_07_bal;
balOldal += betolt_08_bal;
balOldal += betolt_09_bal;

let jobbOldal = [];
jobbOldal.push(betolt_00_jobb);
jobbOldal.push(betolt_03_jobb);
jobbOldal.push(betolt_04_jobb);
jobbOldal.push(betolt_06_jobb);

let jobbOldalLenyit = [];
jobbOldalLenyit.push(betolt_01_jobb);
jobbOldalLenyit.push(betolt_02_jobb);
jobbOldalLenyit.push(betolt_05_jobb);
jobbOldalLenyit.push(betolt_07_jobb);
jobbOldalLenyit.push(betolt_08_jobb);
jobbOldalLenyit.push(betolt_09_jobb);

export { balOldal, jobbOldal, jobbOldalLenyit };
