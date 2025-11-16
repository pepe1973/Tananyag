let betolt_09_jobb_04 = `
	<h1>A <code>routes/cakes</code> mappában lévő <code>oneCakeRoutesBackend.mjs</code> állomány szerkesztése</h1> 
    <p>
		Ebben a lépésben az <span class="kiemel">MVC</span>-vel összefüggésben létrehozzuk a fenti állományt.
		Ebben fogjuk össze a <span class="kiemel">CRUD</span> műveleteket.
	</p>
	<div class="row-3">
		<div class="kontener">
			<h3>Parancssor:</h3>
			<div class="kod-kontener">
				<p>
					<code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend/public/js</span></code>
				</p>
				<p>
					<code class="parancs">$ cd ..</code>
				</p>
				<p>
					<code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend/public</span></code>
				</p>
				<p>
					<code class="parancs">$ cd ..</code>
				</p>
				<p>
					<code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend</span></code>
				</p>
				<p>
					<code class="parancs">$ cd routes</code>
				</p>
				<p>
					<code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend/routes</span></code>
				</p>
				<p>
					<code class="parancs">$ cd cakes</code>
				</p>
				<p>
					<code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend/routes/cakes</span></code>
				</p>
				<p>
					<code class="parancs">$ touch oneCakeRoutesBackend.mjs</code>
				</p>
			</div>
		</div>
		<div class="kontener">
			<h3>Visual Studio Code:</h3>
			<code>oneCakeRoutesBackend.mjs</code>
			<a href="./alkalmazas_js/09_blokk/megoldasok/oneCakeRoutesBackend.mjs" download>
				<img src="./alkalmazas_js/09_blokk/images/kep_04.png" title="A képre kattintva a kód letölthető!" />
			</a>
			<code>server.mjs</code>
			<a href="./alkalmazas_js/09_blokk/megoldasok/server.mjs" download>
				<img src="./alkalmazas_js/09_blokk/images/kep_05.png" title="A képre kattintva a kód letölthető!" />
			</a>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<p>
				Lépjünk ki a <code>public/js</code> mappából.
			</p>
			<p>
				Ehhez adjuk ki kétszer a <code>cd ..</code> utasítást a parancssorban. 
			</p>
			<p>
				Lépjünk be a <code>routes</code> mappába.
			</p>
			<p>
				Ehhez adjuk ki a <code>cd routes</code> utasítást a parancssorban. 
			</p>
			<p>
				Lépjünk be a <code>cakes</code> mappába.
			</p>
			<p>
				Ehhez adjuk ki a <code>cd cakes</code> utasítást a parancssorban. 
			</p>
			<p>
				A <code>cakes</code> mappában hozzunk létre egy <code>oneCakeRoutesBackend.mjs</code> nevű állományt.
			</p>
			<p>
				Ehhez adjuk ki a <code>touch oneCakeRoutesBackend.mjs</code> utasítást a parancssorban. 
			</p>
			<p>Csak a <span class="kiemel">Git Bash</span> felületen működik!</p>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<p>
				A <code>oneCakeRoutesBackend.mjs</code> állomány
				szerkesztése.
			</p>
			<ol>
				<li>
					<code>import { updateOneCakeBackend } from '../../controllers/cakes/oneCakeControllersBackend.mjs';</code>
					- hívjuk meg a <code>updateOneCakeBackend</code> függvényt a megfelelő állományból.
				</li>
				<li>
					<code>router.put('/', updateOneCakeBackend);</code> -
					a <code>HTTP PUT</code> metódus (<span class="kiemel">CRUD Update</span>) művelet megvalósítása a
					<code>updateOneCakeBackend</code> függvénnyel.
				</li>
			</ol>
			<p>
				Módosítások a <code>server.mjs</code> állományban.
			</p>
			<ol>
				<li>
					<code>import oneCakeRouter from './routes/cakes/oneCakeRoutesBackend.mjs';</code>
					- importáljuk be az előbb létrehozott
					<code>router</code>-t a megfelelő állományból.
				</li>
				<li>
					<code>app.use('/api/one-cake-backend', oneCakeRouter);</code> - a
					<code>use</code>
					<span class="kiemel">middleware</span> segítségével
					dolgozzuk ki a <code>/api/one-cake-backend</code> -
					<span class="kiemel">route</span>-ot.
				</li>
			</ol>
		</div>
	</div>
	`;

export default betolt_09_jobb_04;
