let betolt_11 = `
	<h1>Mappastruktúra kialakítása. Törlés</h1> 
    <p>Ebben a részben kialakítjuk a mappastruktúrát. Törlünk mappákat és állományokat.</p>
	<div class="row-3">
		<div class="kontener">
			<h3>Parancssor:</h3>
			<div class="kod-kontener">
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/frontend</span></code></p>
				<p><code class="parancs">$ cd src</code></p>
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/frontend/src</span></code></p>
				<p><code class="parancs">$ rm App.css</code></p>
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/frontend/src</span></code></p>
				<p><code class="parancs">$ rm -r assets</code></p>
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/frontend/src</span></code></p>
				<p><code class="parancs">$ cd ..</code></p>
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/frontend</span></code></p>
				<p><code class="parancs">$ cd public</code></p>
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/frontend/public</span></code></p>
				<p><code class="parancs">$ rm vite.svg</code></p>
			</div>
		</div>
		<div class="kontener">
			<h3>Visual Studio Code:</h3>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<p>
				Lépjünk be az <code>src</code> mappába.
			</p>
			<p>
				Ehhez adjuk ki az <code>cd src</code> utasítást a parancssorban.
			</p>
			<p>
			Töröljük az <code>App.css</code> állományt.
			</p>
			<p>
			Ehhez adjuk ki az <code>rm App.css</code> utasítást a parancssorban.
			</p>
			<p>
			Töröljük az <code>assets</code> mappát.
			</p>
			<p>
			Ehhez adjuk ki az <code>rm -r App.assets</code> utasítást a parancssorban.
			</p>
			<p>
				Lépjünk ki az <code>src</code> mappából.
			</p>
			<p>
				Ehhez adjuk ki az <code>cd ..</code> utasítást a parancssorban.
			</p>
			<p>
				Lépjünk be a <code>public</code> mappába.
			</p>
			<p>
				Ehhez adjuk ki az <code>cd public</code> utasítást a parancssorban.
			</p>
			<p>
			Töröljük az <code>vite.svg</code> állományt.
			</p>
			<p>
			Ehhez adjuk ki az <code>rm vite.svg</code> utasítást a parancssorban.
			</p>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<ol>
				<li>
					<code>controllers</code> -
					<span class="kiemel">CRUD</span> műveletek
					kezeléséhez.
				</li>
				<li>
					<code>middlewares</code> - az
					<code>HTTP Request</code> és
					<code>HTTP Response</code> között végzett műveletek
					kezeléséhez.
				</li>
				<li>
					<code>models</code> -
					<span class="kiemel">MongoDb</span> modellek
					kezeléséhez.
				</li>
				<li>
					<code>public</code> - statikus állományok
					kezeléséhez.
				</li>
				<li>
					<code>routes</code> - <code>route</code>-ok
					kezeléséhez.
				</li>
				<li>
					<code>utils</code> - szerver működéséhez szükséges
					dolgok kezeléséhez.
				</li>
				<li>
					<code>views</code> - szerveroldali user interface
					kezeléséhez.
				</li>
			</ol>
		</div>
	</div>
	`;
