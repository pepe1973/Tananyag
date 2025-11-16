let betolt_05_jobb_02 = `
	<h1>A <code>views</code> mappában lévő <code>nav.ejs</code>, <code>index.ejs</code> és <code>404.ejs</code> állományok szerkesztése</h1> 
    <p>
		Ebben a lépésben az <code>ejs</code> állományokat hozzuk létre a <span class="kiemel">nézetmotor</span>nak.
	</p>
	<div class="row-3">
		<div class="kontener">
			<h3>Parancssor:</h3>
			<div class="kod-kontener">
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
					<code class="parancs">$ touch nav.ejs index.ejs 404.ejs</code>
				</p>
			</div>
		</div>
		<div class="kontener">
			<h3>Visual Studio Code:</h3>
			<p>
				<code>nav.ejs</code>
			</p>
			<a href="./alkalmazas_js/05_blokk/megoldasok/nav.ejs" download>
				<img src="./alkalmazas_js/05_blokk/images/kep_02.png" title="A képre kattintva a kód letölthető!" />
			</a>
			<p><code>index.ejs</code></p>
			<a href="./alkalmazas_js/05_blokk/megoldasok/index.ejs" download>
				<img src="./alkalmazas_js/05_blokk/images/kep_03.png" title="A képre kattintva a kód letölthető!" />
			</a>
			<p><code>404.ejs</code></p>
			<a href="./alkalmazas_js/05_blokk/megoldasok/404.ejs" download>
				<img src="./alkalmazas_js/05_blokk/images/kep_04.png" title="A képre kattintva a kód letölthető!" />
			</a>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<p>
				Lépjünk ki a <code>controllers</code> mappából.
			</p>
			<p>
				Ehhez adjuk ki a
				<code>cd ..</code>
				utasítást a parancssorban. 
			</p>
			<p>
				Lépjünk be a <code>views</code> mappába.
			</p>
			<p>
				Ehhez adjuk ki a
				<code>cd views</code>
				utasítást a parancssorban. 
			</p>
			<p>
				A <code>views</code> mappában hozzunk létre egy <code>nav.ejs</code>, egy <code>index.ejs</code> és egy 
				<code>404.ejs</code> nevű állományt.
			</p>
			<p>
				Ehhez adjuk ki a
				<code>touch nav.ejs index.ejs 404.ejs</code>
				utasítást a parancssorban. 
			</p>
			<p>
				Csak a <span class="kiemel">Git Bash</span> felületen működik!
			</p>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<p>
				Az <code>index.ejs</code> és a <code>404.ejs</code> állományok szerkesztése.
			</p>
			<ol>
				<li>
					<code>href="/css/stilus.css"</code> és <code>href="/css/404.css"</code> - speciális
					stílusadás az <code>ejs</code> oldalaknak a <span class="kiemel">statikus mappa</span> beállítása után. Lásd a 
					<span class="kiemel">Statikus mappa beállítása</span> pont!
				</li>
				<li>
					<code><%- include('nav.ejs') %></code> -
					<code>nav.ejs</code> komponens beimportálása a
					kódba. <span class="kiemel">Nézetmotor</span> beállítása a <span class="kiemel">Statikus mappa beállítása</span> pontban!
				</li>
			</ol>
		</div>
	</div>
	`;

export default betolt_05_jobb_02;
