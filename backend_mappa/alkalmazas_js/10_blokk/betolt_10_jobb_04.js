let betolt_10_jobb_04 = `
	<h1>A <code>public/js</code> mappában lévő <code>felhasznalok.mjs</code> állomány szerkesztése</h1> 
    <p>
		Ebben a lépésben kidolgozzuk a <code>torol(id)</code> függvényt a <code>public/jd/felhasznalok.mjs</code> állományban.
	</p>
	<div class="row-3">
		<div class="kontener">
			<h3>Parancssor:</h3>
			<div class="kod-kontener">
				<p>
					<code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend/views/users</span></code>
				</p>
				<p>
					<code class="parancs">$ cd ..</code>
				</p>
				<p>
					<code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend/views</span></code>
				</p>
				<p>
					<code class="parancs">$ cd ..</code>
				</p>
				<p>
					<code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend</span></code>
				</p>
				<p>
					<code class="parancs">$ cd public</code>
				</p>
				<p>
					<code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend/public</span></code>
				</p>
				<p>
					<code class="parancs">$ cd js</code>
				</p>
				<p>
					<code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend/public/js</span></code></p>
								
				<p>
					<code class="parancs">$ touch felhasznalok.mjs</code>
				</p>
			</div>
		</div>
		<div class="kontener">
			<h3>Visual Studio Code:</h3>
			<p>
				<code>felhasznalok.mjs</code>
			</p>
			<a href="./alkalmazas_js/10_blokk/megoldasok/felhasznalok.mjs" download>
				<img src="./alkalmazas_js/10_blokk/images/kep_05.png" title="A képre kattintva a kód letölthető!" />
			</a>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<p>
				Lépjünk ki a <code>views/users</code> mappából.
			</p>
			<p>
				Ehhez adjuk ki kétszer a <code>cd ..</code> utasítást a parancssorban. 
			</p>
			<p>
				Lépjünk be a <code>public</code> mappába.
			</p>
			<p>
				Ehhez adjuk ki a <code>cd public</code> utasítást a parancssorban. 
			</p>
			<p>
				Lépjünk be a <code>js</code> mappába.
			</p>
			<p>
				Ehhez adjuk ki a <code>cd js</code> utasítást a parancssorban. 
			</p>
			<p>
				A <code>js</code> mappában hozzunk létre egy <code>felhasznalok.mjs</code> nevű állományt.
			</p>
			<p>
				Ehhez adjuk ki a <code>touch felhasznalok.mjs</code> utasítást a parancssorban. 
			</p>
			<p>
				Csak a <span class="kiemel">Git Bash</span> felületen működik!
			</p>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<ol>
				<li>
					<code>async function torol(id) {}</code> - hozzunk létre egy aszinkron <code>torol</code> nevű függvényt.
				</li>
				<li>
					<code>async function modosit(id, nev, email, admi) {}</code> - hozzunk létre egy aszinkron <code>modosit</code> nevű függvényt.
				</li>
				<li>
					<code>const response = </code> - egy <code>response</code> nevű <span class="kiemel">promise</span> létrehozása.
				</li>
				<li>
					<code>await fetch();</code> - a <span class="kiemel">promise</span>.
				</li>
				<li>
					<code>const vissza = await response.json();</code> - csomagoljuk ki a webszerver válaszát.
				</li>
				<li>
					<code>window.location.href = '/api/users-backend';</code> - kérjük le újra az összes tortát.
				</li>
			</ol>
		</div>
	</div>
	`;

export default betolt_10_jobb_04;
