let betolt_10_jobb_01 = `
	<h1>A <code>models</code> mappában lévő <code>User.mjs</code> állomány szerkesztése</h1> 
    <p>
		Első lépésben az <span class="kiemel">MVC</span>-vel összefüggésben létrehozzuk a fenti állományt. Ebben adjuk meg
		a <span class="kiemel">MongoDb</span>-ben használt <code>User</code> modellt.
	</p>
	<div class="row-3">
		<div class="kontener">
			<h3>Parancssor:</h3>
			<div class="kod-kontener">
				<p>
					<code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend/routes/cakes</span></code>
				</p>
				<p>
					<code class="parancs">$ cd ..</code>
				</p>
				<p>
					<code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend/routes</span></code>
				</p>
				<p>
					<code class="parancs">$ cd ..</code>
				</p>
				<p>
					<code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend</span></code>
				</p>
				<p>
					<code class="parancs">$ cd models</code>
				</p>
				<p>
					<code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend/models</span></code>
				</p>
				<p>
					<code class="parancs">$ touch User.mjs</code>
				</p>
			</div>
		</div>
		<div class="kontener">
			<h3>Visual Studio Code:</h3>
			<p>
				<code>User.mjs</code>
			</p>
			<a href="./alkalmazas_js/10_blokk/megoldasok/User.mjs" download>
				<img src="./alkalmazas_js/10_blokk/images/kep_01.png" title="A képre kattintva a kód letölthető!" />
			</a>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<p>
				Lépjünk ki a <code>routes/cakes</code> mappából.
			</p>
			<p>
				Ehhez adjuk ki kétszer a <code>cd ..</code> utasítást a parancssorban. 
			</p>
			<p>
				Lépjünk be a <code>models</code> mappába.
			</p>
			<p>
				Ehhez adjuk ki a <code>cd models</code> utasítást a parancssorban. 
			</p>
			<p>
				A <code>models</code> mappában hozzunk létre egy <code>User.mjs</code> nevű állományt.
			</p>
			<p>
				Ehhez adjuk ki a <code>touch User.mjs</code> utasítást a parancssorban. 
			</p>
			<p>
				Csak a <span class="kiemel">Git Bash</span> felületen működik!
			</p>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<ol>
				<li>
					<code>import mongoose from 'mongoose';</code> -
					importáljuk be a <code>mongoose</code> csomagot.
				</li>
				<li>
					<code>const userSchema = new mongoose.Schema({}, { timestamps: true });</code>
					- hozzuk létre a felhasználok <code>userSchema</code>-ját.
				</li>
				<li>
					<code>const UserModel = mongoose.model('user', userSchema);</code>
					- ebből a <code>userSchema</code>-ból hozzuk létre a
					felhasználók <code>UserModel</code>-jét.
				</li>
				<li>
					<code>export default UserModel;</code> - vigyük ki
					alapértelmezett exportként a
					<code>UserModel</code> modellt.
				</li>
			</ol>
		</div>
	</div>
	`;

export default betolt_10_jobb_01;
