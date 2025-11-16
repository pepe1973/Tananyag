import { balOldal, jobbOldal, jobbOldalLenyit } from './oldalak.js';

let balLista = document.querySelector('#bal-lista');
let jobbKontener = document.querySelector('#jobb-kontener');

window.addEventListener('load', () => {
    balLista.innerHTML = balOldal;
    jobbKontener.innerHTML = jobbOldal[0];

    const nyit = document.querySelectorAll('.nyit');
    const lenyit = document.querySelectorAll('.lenyit');
    const elrejt = document.querySelectorAll('.elrejt');
    const rejt = document.querySelectorAll('.rejt');
    const marad = document.querySelectorAll('.marad');

    for (let i = 0; i < elrejt.length; i++) {
        elrejt[i].style.display = 'none';
    }

    betolt(nyit, marad, rejt, elrejt, jobbKontener);

    kinyit(lenyit, marad, elrejt, jobbKontener);

    kinyit_listaelem(lenyit, jobbKontener);

    nyit[0].style.backgroundColor = 'var(--piros)';
});

function betolt(lista_nyit, lista_marad, lista_rejt, lista_elrejt, jobb) {
    for (let i = 0; i < lista_nyit.length; i++) {
        lista_nyit[i].addEventListener('click', () => {
            lista_marad.forEach((elem) => {
                elem.style.backgroundColor = 'var(--liZold)';
            });

            lista_elrejt.forEach((elem) => {
                elem.style.display = 'none';
            });

            lista_rejt.forEach((elem) => {
                elem.style.backgroundColor = 'var(--liHalvanyZold)';
            });

            for (let j = 0; j < lista_nyit.length; j++) {
                if (i === j) {
                    lista_nyit[j].style.backgroundColor = 'var(--piros)';
                } else {
                    lista_nyit[j].style.backgroundColor = 'var(--liZold)';
                }
            }
            jobb.innerHTML = jobbOldal[i];
        });
    }
}

function kinyit(lista_lenyit, lista_marad, lista_elrejt, jobb) {
    for (let i = 0; i < lista_lenyit.length; i++) {
        lista_lenyit[i].addEventListener('click', () => {
            lista_marad.forEach((elem) => {
                elem.style.backgroundColor = 'var(--liZold)';
            });

            for (let j = 0; j < lista_lenyit.length; j++) {
                if (i === j) {
                    if (lista_elrejt[j].style.display === 'block')
                        lista_elrejt[j].style.display = 'none';
                    else if (lista_elrejt[j].style.display === 'none')
                        lista_elrejt[j].style.display = 'block';
                } else {
                    lista_elrejt[j].style.display = 'none';
                }
            }

            let rejt = document.querySelectorAll(`.rejt_${i}`);

            jobb.innerHTML = jobbOldalLenyit[i][0];
            rejt[0].style.backgroundColor = 'var(--piros)';
            for (let j = 1; j < rejt.length; j++) {
                rejt[j].style.backgroundColor = 'var(--liHalvanyZold)';
            }
        });
    }
}

function kinyit_listaelem(lista_lenyit, jobb) {
    for (let i = 0; i < lista_lenyit.length; i++) {
        let rejt = document.querySelectorAll(`.rejt_${i}`);

        for (let k = 0; k < rejt.length; k++) {
            rejt[k].addEventListener('click', () => {
                jobb.innerHTML = jobbOldalLenyit[i][k];
                for (let j = 0; j < rejt.length; j++) {
                    if (k === j) rejt[j].style.backgroundColor = 'var(--piros)';
                    else rejt[j].style.backgroundColor = 'var(--liHalvanyZold)';
                }
            });
        }
    }
}
