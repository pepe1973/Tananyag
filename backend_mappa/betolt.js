const betoltTomb = [];

betoltTomb.push(
    betolt_00, 
    betolt_01, 
    betolt_02, 
    betolt_03,
    betolt_04,
    betolt_05,
    betolt_06,
    betolt_07,
    betolt_08,
    betolt_09,
    betolt_10,
    betolt_11,
    betolt_12,
    betolt_13,
    betolt_14,
    betolt_15,
    betolt_16,
    betolt_17
);

const jobbKontener = document.querySelector('#jobb-kontener');
const gombok = document.querySelectorAll('button');
const marad = document.querySelectorAll('.marad');
const rejt = document.querySelectorAll('.rejt');
const nyit = document.querySelectorAll('.nyit');
const elrejt = document.querySelectorAll('.elrejt');

for (let i = 0; i < elrejt.length; i++) {
    elrejt[i].style.display = 'none';
}

function alap_betolt() {
    jobbKontener.innerHTML = betoltTomb[0];
    nyit[0].style.backgroundColor = 'var(--piros)';
}

function betolt(index, zar) {
    if (zar === 'igen') {
        elrejt.forEach((elem) => {
            elem.style.display = 'none';
        });
    }

    marad.forEach((element) => {
        element.style.backgroundColor = 'var(--liZold)';
    });
    rejt.forEach((element) => {
        element.style.backgroundColor = 'var(--liHalvanyZold)';
    });

    nyit[index].style.backgroundColor = 'var(--piros)';
    jobbKontener.innerHTML = betoltTomb[index];
}

function kinyit(index, ssz, mssz) {
    for (let i = 0; i < elrejt.length; i++) {
        if (i !== index) {
            elrejt[i].style.display = 'none';
        }
    }

    for (let i = 0; i < marad.length; i++) {
        marad[i].style.backgroundColor = 'var(--liZold)';
    }

    if (elrejt[index].style.display === 'none') {
        elrejt[index].style.display = 'block';
        rejt.forEach((element) => {
            element.style.backgroundColor = 'var(--liHalvanyZold)';
        });
        rejt[mssz].style.backgroundColor = 'var(--piros)';
        jobbKontener.innerHTML = betoltTomb[ssz];
    } else elrejt[index].style.display = 'none';
}
