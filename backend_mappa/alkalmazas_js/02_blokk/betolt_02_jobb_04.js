let betolt_02_jobb_04 = `
	<h1>Környezeti változók beállítása</h1> 
    <p>
		Következő lépésként beállítjuk az <span class="kiemel">API</span>-nk környezeti változóit.
	</p>
	<div class="row-3">
		<div class="kontener">
			<h3>Parancssor:</h3>
			<div class="kod-kontener">
				<p>
					<code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend</span></code>
				</p>
				<p>
					<code class="parancs">$ touch .env</code>
				</p>
			</div>
		</div>
		<div class="kontener">
			<h3>Visual Studio Code:</h3>
			<p>
				<code>.env</code>
			</p>
			<a href="./alkalmazas_js/02_blokk/megoldasok/env.txt" download>
				<img src="./alkalmazas_js/02_blokk/images/kep_03.png" title="A képre kattintva a kód letölthető!" />
			</a>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<p>
				A <code>backend</code> mappában hozzunk létre egy <code>.env</code> nevű állományt.
			</p>
			<p>
				Ehhez adjuk ki a
				<code>touch .env</code>
				utasítást a parancssorban. 
			</p>
			<p>Csak a <span class="kiemel">Git Bash</span> felületen működik!</p>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<ol>
				<li>
					<code>PORT=3500</code> - ezt a portszámot fogja
					figyelni a szerveralkalmazás (<span class="kiemel">API</span>).
				</li>
				<li>
					<code>DBSTRING=saját adatbázis</code> - adatbázis
					(itt <span class="kiemel">MongoDb</span> csatlakozási sztringje).
				</li>
				<li>
					<code>CLOUDINARY_</code> - <span class="kiemel">Cloudinary</span>
					felhőalkalmazás információk.
				</li>
			</ol>
		</div>
	</div>
	`;

export default betolt_02_jobb_04;
