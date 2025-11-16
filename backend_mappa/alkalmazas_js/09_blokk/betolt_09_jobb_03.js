let betolt_09_jobb_03 = `
	<h1>A <code>public/js</code> mappában lévő <code>torta.mjs</code> állomány szerkesztése.</h1> 
    <p>
		Ebben a lépésben kidolgozzuk a <code>modositas(event)</code> függvényt a <code>public/jd/torta.mjs</code> állományban.
	</p>
	<div class="row-3">
		<div class="kontener">
			<h3>Parancssor:</h3>
			<div class="kod-kontener">
				<p>
					<code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend/views/cakes</span></code>
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
					<code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend/public/js</span></code>
				</p>
				<p>
					<code class="parancs">$</code>
				</p>
			</div>
		</div>
		<div class="kontener">
			<h3>Visual Studio Code:</h3>
			<p>
				<code>torta.mjs</code>
			</p>
			<a href="./alkalmazas_js/09_blokk/megoldasok/torta.mjs" download>
				<img src="./alkalmazas_js/09_blokk/images/kep_03.png" title="A képre kattintva a kód letölthető!" />
			</a>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<p>
				Lépjünk ki a <code>views/cakes</code> mappából.
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
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<ol>
				<li>
					<code>async function modositas(event) {}</code> - hozzunk létre egy aszinkron <code>modositas</code> nevű függvényt.
				</li>
				<li>
					<code>body: JSON.stringify({ id, nev, ar, leiras, kepek })</code> - a
					csomagoljuk be a <code>body</code> tartalmát <span class="kiemel">JSON</span> formátumú sztringbe.
				</li>
			</ol>
		</div>
	</div>
	`;

export default betolt_09_jobb_03;
