let betolt_10 = `
	<h1>Szerverkörnyezet kialakítása</h1> 
    <p>Ebben a részben kialakítjuk a szerverkörnyezetet. De előtte a <span class="kiemel">MongoDb</span> felületen hozzunk
			létre egy projektet <code>Cukraszda</code> névvel.</p>
	<div class="row-3">
		<div class="bal-3-kontener">
			<h3>Parancssor:</h3>
			<div class="kod-kontener">
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop</span></code></p>
				<p><code class="parancs">$ mkdir Cukraszda</code></p>
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop</span></code></p>
				<p><code class="parancs">$ cd Cukraszda</code></p>
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda</span></code></p>
				<p><code class="parancs">$ mkdir backend</code></p>
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda</span></code></p>
				<p><code class="parancs">$ cd backend</code></p>
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend</span></code></p>
				<p><code class="parancs">$ npm init -y</code></p>
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
    <span class="kiemel">"main": "server.mjs",
    "scripts": {
        "start": "node server.mjs"
    },</span>
    "keywords": [],
    "author": "SZBI",
    "license": "MIT",
    <span class="kiemel">"type": "module",</span>
}
	</pre>
		</div>
		<div class="jobb-3-kontener">
		<h3>Magyarázat:</h3>
		<p>
			Hozzunk létre valahol a számítógépünkön, akár az asztalon (Desktop), egy
			<code>Cukraszda</code> nevű mappát.
		</p>
		<p>
			Lépjünk bele és hozzunk létre egy
			<code>backend</code> nevű mappát.
		</p>
		<p>
			A <code>backend</code> mappába lépve adjuk ki az <code>npm init -y</code> utasítást.
		</p>
		<p>
			Ekkor létrejön egy <code>package.json</code> nevű állomány. Szerkesszük.
		</p>
		</div>
		<div class="jobb-3-kontener">
		<h3>Magyarázat:</h3>
		<ol>
				<li>
					<code>"main": "server.mjs"</code> - mivel
					<span class="kiemel">ES6 modulokat</span> fogunk
					használni, ezért az
					<span class="kiemel">mjs</span> kiterjesztés.
				</li>
				<li>
					<code
						>"scripts": { "start": "node server.mjs" }</code
					>
					- a kód futtatása "termelői" (production) módban.
				</li>
				<li>
					<code>"type": "module"</code> - mivel
					<span class="kiemel">ES6 modulokat</span> fogunk
					használni, ezért a környzet típusát beállítjuk
					<span class="kiemel">module</span>-ra. 
					Ez a <span class="kiemel">JavaScript</span> állományokat önálló modullként fogja kezelni.
				</li>
			</ol>
		</div>
	</div>
	`;
