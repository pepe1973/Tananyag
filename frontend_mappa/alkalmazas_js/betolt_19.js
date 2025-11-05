let betolt_19 = `
	<h1>A <code>controllers</code> mappában lévő <code>mainControllersBackend.mjs</code> állomány szerkesztése</h1> 
    <p>Első lépésként az <span class="kiemel">MVC</span>-vel összefüggésben létrehozzuk a fenti állományt. Ebben dolgozzuk ki 
	a <span class="kiemel">CRUD</span> műveleteket.</p>
	<div class="row-3">
		<div class="kontener">
			<h3>Parancssor:</h3>
			<div class="kod-kontener">
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend/middlewares</span></code></p>
				<p><code class="parancs">$ cd ..</code></p>
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend</span></code></p>
				<p><code class="parancs">$ cd controllers</code></p>
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend/controllers</span></code></p>
				<p><code class="parancs">$ touch mainControllersBackend.mjs</code></p>
			</div>
		</div>
		<div class="kontener">
			<h3>Visual Studio Code:</h3>
			<code>mainControllersBackend.mjs</code>
			<pre>
export const getMain = (req, res) => {
    try {
        res.statusCode = 200;
        return res.render('index.ejs');
    } catch (error) {
        res.statusCode = 404;
        return res.render('404.ejs');
    }
};
			</pre>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<p>
				Lépjünk ki a <code>middlewares</code> mappából.
			</p>
			<p>
				Ehhez adjuk ki a
				<code>cd ..</code>
				utasítást a parancssorban. 
			</p>
			<p>
				Lépjünk be a <code>controllers</code> mappába.
			</p>
			<p>
				Ehhez adjuk ki a
				<code>cd controllers</code>
				utasítást a parancssorban. 
			</p>
			<p>
				A <code>controllers</code> mappában hozzunk létre egy  
				<code>mainControllersBackend.mjs</code> nevű állományt.
			</p>
			<p>
				Ehhez adjuk ki a
				<code>touch mainControllersBackend.mjs</code>
				utasítást a parancssorban. 
			</p>
			<p>Csak a <span class="kiemel">Git Bash</span> felületen működik!</p>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<ol>
				<li>
					<code>export const getMain =</code> - hozzunk létre
					egy <code>handler</code> függvényt és vigyük ki
					nevesített exporttal.
				</li>
				<li>
					<code>(req, res) => {};</code> - a függvénynek két
					paramétere van a <code>req</code> és a
					<code>res</code> objektumok, melyek megegyeznek a
					<code>HTTP Request</code> és
					<code>HTTP Response</code>
					objektumokkal.
				</li>
				<li>
					<code>res.statusCode = 200;</code> - állítsuk be
					sikeres lekérés esetén a <code>200</code>-es
					hibakódot.
				</li>
				<li>
					<code>return res.render('index.ejs');</code> -
					küldjük el a nézetmotornak az
					<code>index.ejs</code> állományt.
				</li>
				<li>
					<code>res.statusCode = 404;</code> - állítsuk be
					sikertelen lekérés esetén a <code>404</code>-es
					hibakódot.
				</li>
				<li>
					<code>return res.render('404.ejs');</code> -
					küldjük el a nézetmotornak az
					<code>404.ejs</code> állományt.
				</li>
			</ol>
		</div>
	</div>
	`;
