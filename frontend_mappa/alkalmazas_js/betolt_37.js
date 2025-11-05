let betolt_37 = `
	<h1>A <code>public/js</code> mappában lévő <code>torta.mjs</code> állomány szerkesztése.</h1> 
    <p>Ebben a lépésben kidolgozzuk a <code>modositas(event)</code> függvényt a <code>public/jd/torta.mjs</code> állományban.</p>
	<div class="row-3">
		<div class="kontener">
			<h3>Parancssor:</h3>
			<div class="kod-kontener">
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend/views/cakes</span></code></p>
				<p><code class="parancs">$ cd ..</code></p>
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend/views</span></code></p>
				<p><code class="parancs">$ cd ..</code></p>
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend</span></code></p>
				<p><code class="parancs">$ cd public</code></p>
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend/public</span></code></p>
				<p><code class="parancs">$ cd js</code></p>
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend/public/js</span></code></p>
				<p><code class="parancs">$</code></p>
			</div>
		</div>
		<div class="kontener">
			<h3>Visual Studio Code:</h3>
			<p><code>torta.mjs</code></p>
			<pre>
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
            window.alert(vissza.msg);
        }
    } catch (error) {
        console.log(error.message);
    }
}

<span class="kiemel">async function modositas(event) {</span>
    event.preventDefault();

    try {
        let id = document.querySelector('#id').value;
        let nev = document.querySelector('#nev').value;
        let ar = document.querySelector('#ar').value;
        let leiras = document.querySelector('#leiras').value;
        let kep1 = document.querySelector('#kep1').value;
        let kep2 = document.querySelector('#kep2').value;
        let kep3 = document.querySelector('#kep3').value;
        let kepek = [kep1, kep2, kep3];

        const response = await fetch('/api/one-cake-backend', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            <span class="kiemel">body: JSON.stringify({ id, nev, ar, leiras, kepek }),</span>
        });

        const valasz = await response.json();

        if (response.ok) {
            window.alert(valasz.msg);
            window.location.href = '/api/cakes-backend';
        }
    } catch (error) {
        console.log(error.message);
    }
<span class="kiemel">}</span>
			</pre>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<p>
				Lépjünk ki a <code>views/cakes</code> mappából.
			</p>
			<p>
				Ehhez adjuk ki kétszer a
				<code>cd ..</code>
				utasítást a parancssorban. 
			</p>
			<p>
				Lépjünk be a <code>public</code> mappába.
			</p>
			<p>
				Ehhez adjuk ki a
				<code>cd public</code>
				utasítást a parancssorban. 
			</p>
			<p>
				Lépjünk be a <code>js</code> mappába.
			</p>
			<p>
				Ehhez adjuk ki a
				<code>cd js</code>
				utasítást a parancssorban. 
			</p>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<ol>
				<li><code>async function modositas(event) {}</code> - hozzunk létre egy aszinkron <code>modositas</code> nevű függvényt.
				<li>
					<code>body: JSON.stringify({ id, nev, ar, leiras, kepek })</code> - a
					csomagoljuk be a <code>body</code> tartalmát <span class="kiemel">JSON</span> formátumú sztringbe.
				</li>
			</ol>
		</div>
	</div>
	`;
