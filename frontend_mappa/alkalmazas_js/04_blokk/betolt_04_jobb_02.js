let betolt_04_jobb_02 = `
	<h1>A <code>routes/cakes</code> mappában lévő <code>cakesRoutesFrontend.mjs</code> állomány szerkesztése</h1> 
    <p>
		Ebben a lépésben az <span class="kiemel">MVC</span>-vel összefüggésben létrehozzuk a fenti állományt. Ebben fogjuk össze
		a <span class="kiemel">CRUD</span> műveleteket.
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
					<code class="parancs">$ touch cakesRoutesFrontend.mjs</code>
				</p>
			</div>
		</div>
		<div class="kontener">
			<h3>Visual Studio Code:</h3>
			<code>cakesRoutesFrontend.mjs</code>
			<a href="./alkalmazas_js/04_blokk/megoldasok/cakesRoutesFrontend.mjs" download>
				<img src="./alkalmazas_js/04_blokk/images/kep_02.png" title="A képre kattintva a kód letölthető!" />
			</a>
			<p>
				<code>server.mjs</code>
			</p>
			<a href="./alkalmazas_js/04_blokk/megoldasok/server.mjs" download>
				<img src="./alkalmazas_js/04_blokk/images/kep_03.png" title="A képre kattintva a kód letölthető!" />
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
				Hozzunk létre egy <code>cakesRoutesFrontend.mjs</code> nevű állományt.
			</p>
			<p>
				Ehhez adjuk ki a <code>touch cakesRoutesFrontend.mjs</code> utasítást a parancssorban. 
			</p>
			<p>
				Csak a <span class="kiemel">Git Bash</span> felületen működik!
			</p>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<p>
				A <code>cakesRoutesFrontend.mjs</code> állomány szerkesztése.
			</p>
			<p>
				A folyamat hasonló <code>backend/routes/cakes/cakesRoutesBackend.mjs</code> állományban vázoltakhoz.
			</p>
			<p>
				Módosítások a <code>server.mjs</code> állományban.
			</p>
			<ol>
				<li>
					<code>import cors from 'cors';</code> - importáljuk be a <code>cors</code> csomagot.
				</li>
				<li>
					<code>app.use(cors());</code> - állítsuk be a <code>cors</code> csomag segítségével a <span class="kiemel">frontend</span>
					és a <span class="kiemel">backend</span> közötti kommunikációt.
				</li>
				<li>
					<code>import cakesFrontendRouter from './routes/cakes/cakesRoutesFrontend.mjs'</code>
					- importáljuk be az előbb létrehozott
					<code>router</code>-t a megfelelő állományból.
				</li>
				<li>
					<code>app.use('/api/cakes-frontend', cakesFrontendRouter);</code> - a
					<code>use</code>
					<span class="kiemel">middleware</span> segítségével
					dolgozzuk ki a <code>/api/cakes-frontend</code> -
					<span class="kiemel">route</span>-ot.
				</li>
			</ol>
		</div>
	</div>
	`;

export default betolt_04_jobb_02;
