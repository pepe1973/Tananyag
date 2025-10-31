let betolt_12 = `
	<h1>Függőségek (dependencies) beállítása</h1> 
    <p>Ebben a részben telepíteni fogjuk a szükséges <span class="kiemel">npm</span> csomagokat.</p>
	<div class="row-3">
		<div class="bal-3-kontener">
			<h3>Parancssor:</h3>
			<div class="kod-kontener">
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend</span></code></p>
				<p><code class="parancs">$ npm install bcrypt cloudinary cors dotenv ejs express mongoose</code></p>
			</div>
			</div>
		<div class="kozep-3-kontener">
		<h3>Visual Studio Code:</h3>
		<p><code>package.json</code></p>
		<pre>
{
    "name": "backend",
    "version": "1.0.0",
    "description": "Cukrászda weboldal",
    "main": "server.mjs",
    "scripts": {
        "start": "node server.mjs"
    },
    "keywords": [],
    "author": "SZBI",
    "license": "MIT",
    "type": "module",
    <span class="kiemel">"dependencies": {
        "bcrypt": "^6.0.0",
        "cloudinary": "^2.8.0",
        "cors": "^2.8.5",
        "dotenv": "^17.2.3",
        "ejs": "^3.1.10",
        "express": "^5.1.0",
        "mongoose": "^8.19.2"
    }</span>
}
	</pre>
		</div>
		<div class="jobb-3-kontener">
		<h3>Magyarázat:</h3>
		<p>
				A <code>backend</code> mappában telepítsük
				a függőségeket (dependencies).
			</p>
			<p>
				Ehhez adjuk ki az
				<code
					>npm install bcrypt cloudinary cors dotenv ejs
					express mongoose</code
				>
				utasítást a parancssorban.
			</p>
		</div>
		<div class="jobb-3-kontener">
		<h3>Magyarázat:</h3>
		<ol>
				<li><code>bcrypt</code> - adatok titkosításához.</li>
				<li>
					<code>cloudinary</code> - felhőalkalmazás képek
					megosztásához.
				</li>
				<li><code>cors</code> - CORS problémák kezeléséhez.</li>
				<li>
					<code>dotenv</code> - környezeti változók
					kezeléséhez.
				</li>
				<li>
					<code>ejs</code> - megjelenítő motor beállításához.
				</li>
				<li>
					<code>express</code> - szerverkörnyezet
					kialakításához.
				</li>
				<li>
					<code>mongoose</code> - MongoDb adatbázis
					kezeléséhez.
				</li>
			</ol>
		</div>
	</div>
	`;
