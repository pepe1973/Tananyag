let betolt_14 = `
	<h1>Verziókövetés beállítása</h1> 
    <p>Következő lépésként beállítjuk, hogy mely mappák és állományok ne töltödjenek 
	fel a <span class="kiemel">távoli repository</span>ba (<span class="kiemel">GitHub</span>).</p>
	<div class="row-3">
		<div class="kontener">
			<h3>Parancssor:</h3>
			<div class="kod-kontener">
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend</span></code></p>
				<p><code class="parancs">$ touch .gitignore</code></p>
			</div>
		</div>
		<div class="kontener">
			<h3>Visual Studio Code:</h3>
			<p><code>.gitignore</code></p>
			<pre>
.env
node_modules
package-lock.json
			</pre
			>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<p>
				A <code>backend</code> mappában hozzunk létre egy <code>.gitignore</code> nevű állományt.
			</p>
			<p>
				Ehhez adjuk ki a
				<code>touch .gitignore</code>
				utasítást a parancssorban. 
			</p>
			<p>Csak a <span class="kiemel">Git Bash</span> felületen működik!</p>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<ol>
				<li>
					<code>.env</code> - környezeti változókat tartalmazó
					állomány.
				</li>
				<li>
					<code>node_modules</code> -
					<span class="kiemel">node modulok</span> mappája.
				</li>
				<li>
					<code>package-lock.json</code> - függőségek közötti
					relációk leírását tartalmazó állomány.
					<code>npm install</code> után visszakapjuk.
				</li>
			</ol>
		</div>
	</div>
	`;
