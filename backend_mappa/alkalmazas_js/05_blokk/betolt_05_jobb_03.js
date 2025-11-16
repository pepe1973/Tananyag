let betolt_05_jobb_03 = `
	<h1>A <code>routes</code> mappában lévő <code>mainRoutesBackend.mjs</code> állomány szerkesztése</h1> 
    <p>
		Ebben a lépésben az <span class="kiemel">MVC</span>-vel összefüggésben létrehozzuk a
		fenti állományt. Ebben fogjuk össze a <span class="kiemel">CRUD</span> műveleteket.
	</p>
	<div class="row-3">
		<div class="kontener">
			<h3>Parancssor:</h3>
			<div class="kod-kontener">
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
					<code class="parancs">$ cd routes</code>
				</p>
				<p>
					<code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend/routes</span></code>
				</p>
				<p>
					<code class="parancs">$ touch mainRoutesBackend.mjs</code>
				</p>
			</div>
		</div>
		<div class="kontener">
			<h3>Visual Studio Code:</h3>
			<code>mainRoutesBackend.mjs</code>
			<a href="./alkalmazas_js/05_blokk/megoldasok/mainRoutesBackend.mjs" download>
				<img src="./alkalmazas_js/05_blokk/images/kep_05.png" title="A képre kattintva a kód letölthető!" />
			</a>
			<p><code>server.mjs</code></p>
			<a href="./alkalmazas_js/05_blokk/megoldasok/server.mjs" download>
				<img src="./alkalmazas_js/05_blokk/images/kep_06.png" title="A képre kattintva a kód letölthető!" />
			</a>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<p>
				Lépjünk ki a <code>views</code> mappából.
			</p>
			<p>
				Ehhez adjuk ki a
				<code>cd ..</code>
				utasítást a parancssorban. 
			</p>
			<p>
				Lépjünk be a <code>routes</code> mappába.
			</p>
			<p>
				Ehhez adjuk ki a
				<code>cd routes</code>
				utasítást a parancssorban. 
			</p>
			<p>
				A <code>routes</code> mappában hozzunk létre egy <code>mainRoutesBackend.mjs</code> nevű állományt.
			</p>
			<p>
				Ehhez adjuk ki a
				<code>touch mainRoutesBackend.mjs</code>
				utasítást a parancssorban. 
			</p>
			<p>
				Csak a <span class="kiemel">Git Bash</span> felületen működik!
			</p>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<p>
				A <code>mainRoutesBackend.mjs</code> állomány
				szerkesztése.
			</p>
			<ol>
				<li>
					<code
						>import { getMain } from
						'../controllers/mainControllersBackend.mjs';</code
					>
					- hívjuk meg a <code>getMain</code> függvényt a megfelelő állományból.
				</li>
				<li>
					<code>const router = express.Router();</code> -
					vegyük át az <code>app</code>-tól és adjuk a
					<code>router</code> objektumnak az útvonalkezelést.
				</li>
				<li>
					<code>router.get('/', getMain);</code> -
					a <code>HTTP GET</code> metódus (<span class="kiemel">CRUD Read</span>) művelet megvalósítása a
					<code>getMain</code> függvénnyel.
				</li>
			</ol>
			<p>
				Módosítások a <code>server.mjs</code> állományban.
			</p>
			<ol>
				<li>
					<code>import mainRouter from './routes/mainRoutesBackend.mjs';</code>
					- importáljuk be az előbb létrehozott
					<code>router</code>-t a megfelelő állományból.
				</li>
				<li>
					<code>app.use('/api', mainRouter);</code> - a
					<code>use</code>
					<span class="kiemel">middleware</span> segítségével
					dolgozzuk ki a <code>/api</code> -
					<span class="kiemel">route</span>-ot.
				</li>
				<li>
					<code>app.use((req, res) => {});</code> - nem létező
					<code>route</code> kezelése. Látható, hogy hiányzik
					<code>handler</code> függvény elől a
					<code>route</code> jelölése!
				</li>
			</ol>
		</div>
	</div>
	`;

export default betolt_05_jobb_03;
