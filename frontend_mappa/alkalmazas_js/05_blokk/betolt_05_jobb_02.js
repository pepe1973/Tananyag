let betolt_04_jobb_02 = `
	<h1>A <code>routes/users</code> mappában lévő <code>userRegisterRoutes.mjs</code> állomány szerkesztése</h1> 
    <p>
		Ebben a lépésben az <span class="kiemel">MVC</span>-vel összefüggésben létrehozzuk a fenti állományt. Ebben fogjuk össze
		a <span class="kiemel">CRUD</span> műveleteket.
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
					<code class="parancs">$ cd routes</code>
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
					<code class="parancs">$ touch userRegisterRoutes.mjs</code>
				</p>
			</div>
		</div>
		<div class="kontener">
			<h3>Visual Studio Code:</h3>
			<code>userRegisterRoutes.mjs</code>
			<a href="./alkalmazas_js/05_blokk/megoldasok/userRegisterRoutes.mjs" download>
				<img src="./alkalmazas_js/05_blokk/images/kep_02.png" title="A képre kattintva a kód letölthető!" />
			</a>
			<p>
				<code>server.mjs</code>
			</p>
			<a href="./alkalmazas_js/05_blokk/megoldasok/server.mjs" download>
				<img src="./alkalmazas_js/05_blokk/images/kep_03.png" title="A képre kattintva a kód letölthető!" />
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
				Lépjünk be a <code>routes</code> mappába.
			</p>
			<p>
				Ehhez adjuk ki a <code>cd routes</code> utasítást a parancssorban. 
			</p>
			<p>
				Lépjünk be a <code>users</code> mappába.
			</p>
			<p>
				Ehhez adjuk ki a <code>cd users</code> utasítást a parancssorban. 
			</p>
			<p>
				Hozzunk létre egy <code>userRegisterRoutes.mjs</code> nevű állományt.
			</p>
			<p>
				Ehhez adjuk ki a <code>touch userRegisterRoutes.mjs</code> utasítást a parancssorban. 
			</p>
			<p>
				Csak a <span class="kiemel">Git Bash</span> felületen működik!
			</p>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<ol>
				<li>
					<code>import userRegisterRouter from './routes/users/userRegisterRoutes.mjs';</code>
					- importáljuk be az előbb létrehozott
					<code>router</code>-t a megfelelő állományból.
				</li>
				<li>
					<code>app.use('/api/register-frontend', userRegisterRouter);</code> - a
					<code>use</code>
					<span class="kiemel">middleware</span> segítségével
					dolgozzuk ki a <code>/api/register-frontend</code> -
					<span class="kiemel">route</span>-ot.
				</li>
			</ol>
		</div>
	</div>
	`;

export default betolt_04_jobb_02;
