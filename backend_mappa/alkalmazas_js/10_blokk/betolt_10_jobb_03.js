let betolt_10_jobb_03 = `
	<h1>A <code>views</code> mappában lévő <code>nav.ejs</code> és <code>users.ejs</code> állományok szerkesztése</h1> 
    <p>
		Ebben a lépésben az <code>ejs</code> állományokat kezeljük a <span class="kiemel">nézetmotor</span>nak.
	</p>
	<div class="row-3">
		<div class="kontener">
			<h3>Parancssor:</h3>
			<div class="kod-kontener">
				<p>
					<code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend/controllers/users</span></code>
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
					<code class="parancs">$ mkdir users</code>
				</p>
				<p>
					<code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend/views</span></code>
				</p>
				<p>
					<code class="parancs">$ cd users</code>
				</p>
				<p>
					<code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend/views/users</span></code>
				</p>
				<p>
					<code class="parancs">$ touch users.ejs</code>
				</p>
			</div>
		</div>
		<div class="kontener">
			<h3>Visual Studio Code:</h3>
			<p>
				<code>nav.ejs</code>
			</p>
			<a href="./alkalmazas_js/10_blokk/megoldasok/nav.ejs" download>
				<img src="./alkalmazas_js/10_blokk/images/kep_03.png" title="A képre kattintva a kód letölthető!" />
			</a>
			<p><code>users.ejs</code></p>
			<a href="./alkalmazas_js/10_blokk/megoldasok/users.ejs" download>
				<img src="./alkalmazas_js/10_blokk/images/kep_04.png" title="A képre kattintva a kód letölthető!" />
			</a>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<p>
				Lépjünk ki a <code>controllers/users</code> mappából.
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
				A <code>views</code> mappában hozzunk létre egy <code>users</code> nevű mappát.
			</p>
			<p>
				Ehhez adjuk ki a <code>mkdir users</code> utasítást a parancssorban. 
			</p>
			<p>
				Lépjünk be a <code>users</code> mappába.
			</p>
			<p>
				Ehhez adjuk ki a <code>cd users</code> utasítást a parancssorban. 
			</p>
			<p>
				A <code>views</code> mappában hozzunk létre egy <code>users.ejs</code> nevű állományt.
			</p>
			<p>
				Ehhez adjuk ki a <code>touch users.ejs</code> utasítást a parancssorban. 
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
				<li><code>&lt;li&gt;&lt;a href="/api/users-backend"&gt;Felhasználók&lt;/a&gt;&lt;/li&gt;</code> - <span class="kiemel">Felhasználók</span>
				hivatkozás beállítása.</li>
			</ol>
			<p>
				A <code>users.ejs</code> szerkesztése.
			</p>
			<ol>
				<li>
					<code><% users.forEach(elem => {}); %></code> - a
					<code>controller</code>-től kapott
					<code>users</code> tömbön végigiterálunk.
				</li>
				<li>
					<code>&lt;button onclick="modosit('&lt;%= elem._id %&gt;', '&lt;%= elem.nev %&gt;', '&lt;%= elem.email %&gt;', 'admin_&lt;%= elem.email%&gt;')"&gt;Módosítás&lt;/button&gt;</code> - egy adott felhasználónak a módosítása.
				</li>
				<li>
					<code>&lt;button onclick="torol('&lt;%= elem._id %&gt;')"&gt;Törlés&lt;/button&gt;</code> - egy adott felhasználónak a törlése.
				</li>
				<li>
					<code>&lt;script src="/js/felhasznalok.mjs"&gt;&lt;/script&gt;</code>
					- a <code>backend/public/js</code> mappában lévő
					<code>felhasznalok.mjs</code> beimportálása. 
				</li>
			</ol>
		</div>
	</div>
	`;

export default betolt_10_jobb_03;
