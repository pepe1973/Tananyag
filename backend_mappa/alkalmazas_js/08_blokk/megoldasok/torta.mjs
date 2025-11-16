async function feltoltes(event) {
    event.preventDefault();

    try {
        let nev = document.querySelector('#nev').value;
        let ar = document.querySelector('#ar').value;
        let leiras = document.querySelector('#leiras').value;
        let kep1 = document.querySelector('#kep1').value;
        let kep2 = document.querySelector('#kep2').value;
        let kep3 = document.querySelector('#kep3').value;

        const response = await fetch('/api/new-cake', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nev, ar, leiras, kep1, kep2, kep3 }),
        });

        const valasz = await response.json();

        if (response.ok) {
            window.alert(valasz.msg);
            window.location.href = '/api/cakes-backend';
        } else {
            window.alert(valasz.msg);
        }
    } catch (error) {
        console.log(error.message);
    }
}
