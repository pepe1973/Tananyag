let betolt_07_jobb_03 = `
	<h1>A <code>views</code> mappában lévő <code>nav.ejs</code> és <code>cakes.ejs</code> állományok szerkesztése</h1> 
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
					<code class="parancs">$ mkdir cakes</code>
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
					<code class="parancs">$ touch cakes.ejs</code>
				</p>
			</div>
		</div>
		<div class="kontener">
			<h3>Visual Studio Code:</h3>
			<p>
				<code>nav.ejs</code>
			</p>
			<a href="./alkalmazas_js/07_blokk/megoldasok/nav.ejs" download>
				<img src="./alkalmazas_js/07_blokk/images/kep_03.png" title="A képre kattintva a kód letölthető!" />
			</a>
			<p><code>cakes.ejs</code></p>
			<a href="./alkalmazas_js/07_blokk/megoldasok/cakes.ejs" download>
				<img src="./alkalmazas_js/07_blokk/images/kep_04.png" title="A képre kattintva a kód letölthető!" />
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
				A <code>views</code> mappában hozzunk létre egy <code>cakes</code> nevű mappát.
			</p>
			<p>
				Ehhez adjuk ki a <code>mkdir cakes</code> utasítást a parancssorban. 
			</p>
			<p>
				Lépjünk be a <code>cakes</code> mappába.
			</p>
			<p>
				Ehhez adjuk ki a <code>cd cakes</code> utasítást a parancssorban. 
			</p>
			<p>
				A <code>views</code> mappában hozzunk létre egy <code>cakes.ejs</code> nevű állományt.
			</p>
			<p>
				Ehhez adjuk ki a <code>touch cakes.ejs</code> utasítást a parancssorban. 
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
				<li><code>&lt;li&gt;&lt;a href="/api/cakes-backend"&gt;Torták&lt;/a&gt;&lt;/li&gt;</code> - <span class="kiemel">Torták</span>
				hivatkozás beállítása.</li>
			</ol>
			<p>
				A <code>cakes.ejs</code> szerkesztése.
			</p>
			<ol>
				<li>
					<code>&lt;a href="/api/new-cake"&gt;Új torta felvétele&lt;/a&gt;</code> - új torta 
					felvételének a kidolgozásáért felelős <span class="kiemel">route</span>-ra mutató hivatkozás.
				</li>
				<li>
					<code><% cakes.forEach(elem => {}); %></code> - a
					<code>controller</code>-től kapott
					<code>cakes</code> tömbön végigiterálunk.
				</li>
				<li>
					<code> &lt;a href="/api/cakes-backend/&lt;%= elem._id %&gt;"&gt;Lekérés&lt;/a&gt;</code> - egy adott tortának a lekérése.
				</li>
				<li>
					<code> &lt;button onclick="torol('&lt;%= elem._id %&gt;')"&gt;Törlés&lt;/button&gt;</code> - egy adott tortának a törlése.
				</li>
				<li>
					<code>&lt;script src="/js/tortak.mjs"&gt;&lt;/script&gt;</code>
					- a <code>backend/public/js</code> mappában lévő
					<code>tortak.mjs</code> beimportálása. 
				</li>
			</ol>
		</div>
	</div>
	`;

export default betolt_07_jobb_03;
