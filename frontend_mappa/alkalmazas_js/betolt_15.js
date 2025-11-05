let betolt_15 = `
	<h1>Webszerver létrehozása</h1> 
    <p>Következő lépésként létrehozzuk a <span class="kiemel">webszerver</span>ünket.</p>
	<div class="row-3">
		<div class="kontener">
			<h3>Parancssor:</h3>
			<div class="kod-kontener">
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend</span></code></p>
				<p><code class="parancs">$ touch server.mjs</code></p>
			</div>
			<p>A <code>server.mjs</code> szerkesztése után.</p>
			<div class="kod-kontener">
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend</span></code></p>
				<p><code class="parancs">$ node --watch server.mjs</code></p>
			</div>
		</div>
		<div class="kontener">
			<h3>Visual Studio Code:</h3>
			<p><code>server.mjs</code></p>
			<pre>
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';

const PORT = process.env.PORT || 3500;
const app = express();

app.listen(PORT, () => {
    console.log(\`http://localhost:\${PORT}/api\`);
});
			</pre
			>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<p>
				A <code>backend</code> mappában hozzunk létre egy <code>server.mjs</code> nevű állományt.
			</p>
			<p>
				Ehhez adjuk ki a
				<code>touch server.mjs</code>
				utasítást a parancssorban. 
			</p>
			<p>Csak a <span class="kiemel">Git Bash</span> felületen működik!</p>
			<p>Szerkesszük a <code>server.mjs</code> állományt.</p>
			<p>
				Indítsuk el a <span class="kiemel">webszerver</span>t a parancssorból a
				<code>node --watch server.mjs</code> utasítással figyelő
				üzemmódban.
			</p>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<ol>
				<li>
					<code>import dotenv from 'dotenv';</code> -
					importáljuk be a <code>dotenv</code> csomagot.
				</li>
				<li>
					<code>dotenv.config();</code> - állítsuk be, hogy a
					környezeti változokat a
					<code>.env</code> állományban keresse.
				</li>
				<li>
					<code>import express from 'express';</code> -
					importáljuk be az <code>express</code> csomagot.
				</li>
				<li>
					<code>const PORT = process.env.PORT || 3500;</code>
					- a szerver által figyelt
					<code>PORT</code> beállítása.
				</li>
				<li>
					<code>const app = express();</code> - hozzuk létre a
					webszervert.
				</li>
				<li>
					<code>app.listen(PORT, () => { console.log(\`http://localhost:\${PORT}/api\`); });</code>
					- a webszerver "figyelő" (<span class="kiemel">watch</span>) módba állítása.
				</li>
			</ol>
		</div>
	</div>
	`;
