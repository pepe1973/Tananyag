let betolt_04_jobb_03 = `
	<h1>Az <code>src/pages/Register</code> mappában lévő <code>Register.jsx</code> állomány szerkesztése</h1> 
    <p>
		Ebben a lépésben létrehozzuk, és szerkesztjük a <code>Register.jsx</code> állományt. 
	</p>
	<div class="row-3">
		<div class="kontener">
			<h3>Parancssor:</h3>
			<div class="kod-kontener">
				<p>
					<code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/frontend</span></code>
				</p>
				<p>
					<code class="parancs">$ cd src/pages </code>
				</p>
				<p>
					<code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/frontend/src/pages</span></code>
				</p>
				<p>
					<code class="parancs">$ mkdir Register </code>
				</p>
				<p>
					<code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/frontend/src/pages</span></code>
				</p>
				<p>
					<code class="parancs">$ cd Register </code>
				</p>
				<p>
					<code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/frontend/src/pages/Register</span></code>
				</p>
				<p>
					<code class="parancs">$ touch Register.jsx Register.css </code>
				</p>
			</div>
		</div>
		<div class="kontener">
			<h3>Visual Studio Code:</h3>
			<code>Register.jsx</code>
			<a href="./alkalmazas_js/05_blokk/megoldasok/Register.jsx" download>
				<img src="./alkalmazas_js/05_blokk/images/kep_04.png" title="A képre kattintva a kód letölthető!" />
			</a>
			<code>App.jsx</code>
			<a href="./alkalmazas_js/05_blokk/megoldasok/App.jsx" download>
				<img src="./alkalmazas_js/05_blokk/images/kep_05.png" title="A képre kattintva a kód letölthető!" />
			</a>
			<code>Navbar.jsx</code>
			<a href="./alkalmazas_js/05_blokk/megoldasok/Navbar.jsx" download>
				<img src="./alkalmazas_js/05_blokk/images/kep_06.png" title="A képre kattintva a kód letölthető!" />
			</a>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<p>
				Lépjünk be az <code>src/pages</code> mappában. 
			</p>
			<p>
				Ehhez adjuk ki a <code>cd src/pages</code> utasítást a parancssorban. 
			</p>
			<p>
				Hozzunk létre egy <code>Register</code> nevű mappát.
			</p>
			<p>
				Ehhez adjuk ki a <code>mkdir Register</code> utasítást a parancssorban. 
			</p>
			<p>
				Lépjünk be a <code>Register</code> mappában. 
			</p>
			<p>
				Ehhez adjuk ki a <code>cd register</code> utasítást a parancssorban. 
			</p>
			<p>
				Hozzunk létre egy <code>Register.jsx</code> és egy <code>Register.css</code> nevű állományt.
			</p>
			<p>
				Ehhez adjuk ki a <code>touch Register.jsx Register.css</code> utasítást a parancssorban. 
			</p>
			<p>
				Csak a <span class="kiemel">Git Bash</span> felületen működik!
			</p>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<ol>
				<li>
					<code>async function regisztracio(event) {}</code>
					- az adatok feldolgozására használt függvényt.
				</li>
				<li>
					<code>event.preventDefault();</code>
					- az elküldő gomb lenyomása után <span class="kiemel">NE FRISSÜLJÖN AZ OLDAL</span>!.
				</li>
				<li>
					<code>if (jelszo !== jelszoUjra) { window.alert('A jelszavak nem egyeznek!'); return; }</code>
					- ha nem egyezik a két jelszó, akkor újrakérjük a kitöltést.
				</li>
				<li>
					<code>const response = await fetch('http://localhost:3500/api/register-frontend', {});</code>
					- az adatok feltöltése.
				</li>
				<li>
					<code>{ method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ nev, email, jelszo }) }</code>
					- a <span class="kiemel">http request</span> objektum egy része.
				</li>
				<li>
					<code>&lt;input type="text" id="nev" onChange={(e) => setNev(e.target.value)} /&gt;</code>
					- a <code>nev</code> <span class="kiemel">property</span> állapotának beállítása.
				</li>
			</ol>
		</div>
	</div>
	`;

export default betolt_04_jobb_03;
