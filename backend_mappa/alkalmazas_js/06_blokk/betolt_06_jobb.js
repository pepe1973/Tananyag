let betolt_06_jobb = `
	<h1>Statikus mappa beállítása</h1> 
    <p><span class="kiemel">Statikus mappa</span> (<code>public</code>) beállítása, amely a statikus állományokat (pl. HTML, CSS, képek stb.) tárolja.
	Állítsuk be a <span class="kiemel">nézetmotor</span>-t is.</p>
	<div class="row-3">
		<div class="kontener">
			<h3>Parancssor:</h3>
			<div class="kod-kontener">
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend/routes</span></code></p>
				<p><code class="parancs">$</code></p>
			</div>
		</div>
		<div class="kontener">
			<h3>Visual Studio Code:</h3>
			<code>server.mjs</code>
			<a href="./alkalmazas_js/06_blokk/megoldasok/server.mjs" download>
				<img src="./alkalmazas_js/06_blokk/images/kep_01.png" title="A képre kattintva a kód letölthető!" />
			</a>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<p>
				Maradhatunk a <code>routes</code> mappában.
			</p>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<ol>
				<li>
					<code>import path from 'node:path';</code> -
					importáljuk be az alap <code>path</code> csomagot.
				</li>
				<li>
					<code>import ejs from 'ejs';</code> -
					importáljuk be a telepített
					<code>ejs</code> csomagot.
				</li>
				<li>
					<code>const dir = import.meta.dirname;</code> -
					keressük meg annak a mappának a nevét, amelyben a
					<code>server.mjs</code> található.
				</li>
				<li>
					<code>app.use(express.static(path.resolve(dir, 'public')));</code>
					- állítsuk be a <code>public</code> mappát, mint a
					statikus állományok mappáját.
				</li>
				<li>
					<code>app.set('view engine', ejs);</code>
					- állítsuk be az <code>ejs</code>-t nézetmotornak (<span class="kiemel">view engine</span>).
				</li>
			</ol>
		</div>
	</div>
	`;

export default betolt_06_jobb;
