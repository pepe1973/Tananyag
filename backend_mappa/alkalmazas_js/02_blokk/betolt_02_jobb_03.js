let betolt_02_jobb_03 = `
	<h1>Függőségek (dependencies) beállítása</h1> 
    <p>
		Ebben a részben telepíteni fogjuk a szükséges <span class="kiemel">npm</span> csomagokat.
	</p>
	<div class="row-3">
		<div class="kontener">
			<h3>Parancssor:</h3>
			<div class="kod-kontener">
				<p>
					<code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend</span></code>
				</p>
				<p>
					<code class="parancs">$ npm install bcrypt cloudinary cors dotenv ejs express mongoose</code>
				</p>
			</div>
		</div>
		<div class="kontener">
			<h3>Visual Studio Code:</h3>
			<p>
				<code>package.json</code>
			</p>
			<a href="./alkalmazas_js/02_blokk/megoldasok/package_02.json" download>
				<img src="./alkalmazas_js/02_blokk/images/kep_02.png" title="A képre kattintva a kód letölthető!" />
			</a>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<p>
				A <code>backend</code> mappában telepítsük
				a függőségeket (dependencies).
			</p>
			<p>
				Ehhez adjuk ki az
				<code>npm install bcrypt cloudinary cors dotenv ejs express mongoose</code>
				utasítást a parancssorban.
			</p>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<ol>
				<li>
					<code>bcrypt</code> - adatok titkosításához.
				</li>
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
					<code>ejs</code> - nézetmotor beállításához.
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

export default betolt_02_jobb_03;
