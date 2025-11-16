let betolt_03_jobb = `
	<h1>MongoDb csatlakozás</h1> 
    <p>
		Ebben a részben összekötjük a <span class="kiemel">webszerver</span>ünket a korábban létrehozott
		<code>Cukraszda</code> <span class="kiemel">MongoDb</span> projektünkkel.
	</p>
	<div class="row-3">
		<div class="kontener">
			<h3>Parancssor:</h3>
			<div class="kod-kontener">
				<p>
					<code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend</span></code>
				</p>
				<p>
					<code class="parancs">$ cd utils</code>
				</p>
				<p>
					<code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend/utils</span></code>
				</p>
				<p>
					<code class="parancs">$ touch dbConnection.mjs</code>
				</p>
			</div>
		</div>
		<div class="kontener">
			<h3>Visual Studio Code:</h3>
			<p>
				<code>dbConnection.mjs</code>
			</p>
			<a href="./alkalmazas_js/03_blokk/megoldasok/dbConnection.mjs" download>
				<img src="./alkalmazas_js/03_blokk/images/kep_01.png" title="A képre kattintva a kód letölthető!" />
			</a>
			<h5><code>server.mjs</code></h5>
			<a href="./alkalmazas_js/03_blokk/megoldasok/server.mjs" download>
				<img src="./alkalmazas_js/03_blokk/images/kep_02.png" title="A képre kattintva a kód letölthető!" />
			</a>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<p>
				Lépjünk be a <code>utils</code> mappába.
			</p>
			<p>
				Ehhez adjuk ki a
				<code>cd utils</code>
				utasítást a parancssorban. 
			</p>
			<p>
				A <code>utils</code> mappában hozzunk létre egy <code>dbConnection.mjs</code> nevű állományt.
			</p>
			<p>
				Ehhez adjuk ki a
				<code>touch dbConnection.mjs</code>
				utasítást a parancssorban. 
			</p>
			<p>
				Csak a <span class="kiemel">Git Bash</span> felületen működik!
			</p>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<p>
				A <code>dbConnection.mjs</code> állomány szerkesztése.
			</p>
			<ol>
				<li>
					<code>import mongoose from 'mongoose';</code> -
					importáljuk be a <code>mongoose</code> csomagot.
				</li>
				<li>
					<code>const dbConnect = </code> - hozzunk létre egy
					<code>dbConnect</code> nevű függvényt.
				</li>
				<li>
					<code>async () =></code> - a függvény legyen
					aszinkron működésű.
				</li>
				<li>
					<code>const connect = </code>
					- hozzunk létre egy változót
					<span class="kiemel">promise</span> eltárolására.
				</li>
				<li>
					<code>await mongoose.connect(process.env.DBSTRING);</code>
					- a <span class="kiemel">promise</span>.
				</li>
				<li>
					<code>return connect;</code>
					- térjünk vissza a <span class="kiemel">promise</span>-szal.
				</li>
				<li>
					<code>export default dbConnect;</code> - vigyük ki
					alapértelmezett exportként a
					<code>dbConnect</code> függvényt.
				</li>
			</ol>
			<p>
				Módosítások a <code>server.mjs</code> állományban.
			</p>
			<ol>
				<li>
					<code>import dbConnect from './utils/dbConnection.mjs';</code>
					- a <code>dbConnect</code> függvény beimportálása az
					adott állományból.
				</li>
				<li>
					<code>dbConnect()</code> - a
					<span class="kiemel">promise</span> meghívása.
				</li>
				<li>
					<code>.then(() => { console.log('Sikeres adatbázis csatlakozás!');})</code>
					- a <span class="kiemel">promise</span> "teljesült" (<span class="kiemel">fulfilled</span>) ága.
				</li>
				<li>
					<code>.catch((error) => { console. error(\`A hiba oka: \${error.message}\`); });</code>
					- a <span class="kiemel">promise</span> "eldobott" (<span class="kiemel">rejected</span>) ága.
				</li>
			</ol>
		</div>
	</div>
	`;

export default betolt_03_jobb;
