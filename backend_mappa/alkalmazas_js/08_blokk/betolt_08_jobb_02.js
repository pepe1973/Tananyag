let betolt_08_jobb_02 = `
	<h1>A <code>views</code> mappában lévő <code>nav.ejs</code> és <code>new-cake.ejs</code> állományok szerkesztése</h1> 
    <p>
		Ebben a lépésben az <code>ejs</code> állományokat kezeljük a <span class="kiemel">nézetmotor</span>nak.
	</p>
	<div class="row-3">
		<div class="kontener">
			<h3>Parancssor:</h3>
			<div class="kod-kontener">
				<p>
					<code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend/controllers/cakes</span></code>
				</p>
				<p>
					<code class="parancs">$ cd ..</code>
				</p>
				<p>
					<code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend/controllers</span></code>
				</p>
				<p>
					<code class="parancs">$ cd ..</code>
				</p>
				<p>
					<code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend</span></code>
				</p>
				<p>
					<code class="parancs">$ cd views</code>
				</p>
				<p>
					<code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend/views</span></code>
				</p>
				<p>
					<code class="parancs">$ cd cakes</code>
				</p>
				<p>
					<code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend/views/cakes</span></code>
				</p>
				<p>
					<code class="parancs">$ touch new-cake.ejs</code>
				</p>
			</div>
		</div>
		<div class="kontener">
			<h3>Visual Studio Code:</h3>
			<p>
				<code>nav.ejs</code>
			</p>
			<a href="./alkalmazas_js/08_blokk/megoldasok/nav.ejs" download>
				<img src="./alkalmazas_js/08_blokk/images/kep_02.png" title="A képre kattintva a kód letölthető!" />
			</a>
			<p><code>new-cake.ejs</code></p>
			<a href="./alkalmazas_js/08_blokk/megoldasok/new-cake.ejs" download>
				<img src="./alkalmazas_js/08_blokk/images/kep_03.png" title="A képre kattintva a kód letölthető!" />
			</a>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<p>
				Lépjünk ki a <code>controllers/cakes</code> mappából.
			</p>
			<p>
				Ehhez adjuk ki kétszer a <code>cd ..</code> utasítást a parancssorban. 
			</p>
			<p>
				Lépjünk be a <code>views</code> mappába.
			</p>
			<p>
				Ehhez adjuk ki a <code>cd views</code> utasítást a parancssorban. 
			</p>
			<p>
				Lépjünk be a <code>cakes</code> mappába.
			</p>
			<p>
				Ehhez adjuk ki a <code>cd cakes</code> utasítást a parancssorban. 
			</p>
			<p>
				A <code>views</code> mappában hozzunk létre egy <code>new-cake.ejs</code> nevű állományt.
			</p>
			<p>
				Ehhez adjuk ki a <code>touch new-cake.ejs</code> utasítást a parancssorban. 
			</p>
			<p>
				Csak a <span class="kiemel">Git Bash</span> felületen működik!
			</p>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<p>
				Módosítások a <code>nav.ejs</code> állományban.
			</p>
			<ol>
				<li><code>&lt;li&gt;&lt;a href="/api/new-cake"&gt;Új torta&lt;/a&gt;&lt;/li&gt;</code> - <span class="kiemel">Új torta</span>
				hivatkozás beállítása.</li>
			</ol>
			<p>
				A <code>new-cake.ejs</code> szerkesztése.
			</p>
			<ol>
				<li>
					<code>&lt;button onclick="feltoltes(event)"&gt;Feltöltés&lt;/button&gt;</code> - egy új torta feltöltése az adatbázisba.
				</li>
				<li>
					<code>&lt;script src="/js/torta.mjs"&gt;&lt;/script&gt;</code>
					- a <code>backend/public/js</code> mappában lévő
					<code>torta.mjs</code> beimportálása. 
				</li>
			</ol>
		</div>
	</div>
	`;

export default betolt_08_jobb_02;
