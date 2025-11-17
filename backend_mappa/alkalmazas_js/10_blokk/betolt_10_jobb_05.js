let betolt_10_jobb_05 = `
	<h1>A <code>routes/users</code> mappában lévő <code>usersRoutesBackend.mjs</code> állomány szerkesztése</h1> 
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
					<code class="parancs">$ mkdir users</code>
				</p>
				<p>
					<code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend/routes</span></code>
				</p>
				<p>
					<code class="parancs">$ cd users</code>
				</p>
				<p>
					<code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend/routes/users</span></code>
				</p>
				<p>
					<code class="parancs">$ touch usersRoutesBackend.mjs</code>
				</p>
			</div>
		</div>
		<div class="kontener">
			<h3>Visual Studio Code:</h3>
			<code>usersRoutesBackend.mjs</code>
			<a href="./alkalmazas_js/10_blokk/megoldasok/usersRoutesBackend.mjs" download>
				<img src="./alkalmazas_js/10_blokk/images/kep_06.png" title="A képre kattintva a kód letölthető!" />
			</a>
			<code>server.mjs</code>
			<a href="./alkalmazas_js/10_blokk/megoldasok/server.mjs" download>
				<img src="./alkalmazas_js/10_blokk/images/kep_07.png" title="A képre kattintva a kód letölthető!" />
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
				A <code>routes</code> mappában hozzunk létre egy <code>users</code> nevű mappát.
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
				A <code>users</code> mappában hozzunk létre egy <code>usersRoutesBackend.mjs</code> nevű állományt.
			</p>
			<p>
				Ehhez adjuk ki a <code>touch usersRoutesBackend.mjs</code> utasítást a parancssorban. 
			</p>
			<p>
				Csak a <span class="kiemel">Git Bash</span> felületen működik!
			</p>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<p>
				A <code>usersRoutesBackend.mjs</code> állomány
				szerkesztése.
			</p>
			<ol>
				<li>
					<code>import { deleteOneUserBackend, getAllUsersBackend, updateOneUserBackend } from '../../controllers/users/usersControllersBackend.mjs';</code>
					- hívjuk meg a <code>deleteOneUserBackend</code>, <code>getAllusersBackend</code> és <code>updateOneUserBackend</code> 
					függvényeket a megfelelő állományból.
				</li>
				<li>
					<code>router.get('/', getAllusersBackend);</code> -
					a <code>HTTP GET</code> metódus (<span class="kiemel">CRUD Read</span>) művelet megvalósítása a
					<code>getAllusersBackend</code> függvénnyel.
				</li>
				<li>
					<code>router.put('/', updateOneUserBackend);</code> -
					a <code>HTTP PUT</code> metódus (<span class="kiemel">CRUD Update</span>) művelet megvalósítása a
					<code>updateOneUserBackend</code> függvénnyel.
				</li>
				<li>
					<code>router.delete('/:id', deleteOneUserBackend);</code> -
					a <code>HTTP DELETE</code> metódus (<span class="kiemel">CRUD Delete</span>) művelet megvalósítása a
					<code>deleteOneUserBackend</code> függvénnyel.
				</li>
			</ol>
			<p>
				Módosítások a <code>server.mjs</code> állományban.
			</p>
			<ol>
				<li>
					<code>app.use(express.json());</code>
					- használjuk az
					<code>express.json()</code> <span class="kiemel">middleware</span>-t a böngészőtől kapott <code>HTTP req.body</code> kicsomagolására.
				</li>
				<li>
					<code>import usersRouter from './routes/users/usersRoutesBackend.mjs';</code>
					- importáljuk be az előbb létrehozott
					<code>router</code>-t a megfelelő állományból.
				</li>
				<li>
					<code>app.use('/api/users-backend', usersRouter);</code> - a
					<code>use</code>
					<span class="kiemel">middleware</span> segítségével
					dolgozzuk ki a <code>/api/users-backend</code> -
					<span class="kiemel">route</span>-ot.
				</li>
			</ol>
		</div>
	</div>
	`;

export default betolt_10_jobb_05;
