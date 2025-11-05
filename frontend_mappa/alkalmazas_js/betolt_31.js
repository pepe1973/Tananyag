let betolt_31 = `
	<h1>A <code>views</code> mappában lévő <code>nav.ejs</code> és <code>new-cake.ejs</code> állományok szerkesztése</h1> 
    <p>Ebben a lépésben az <code>ejs</code> állományokat kezeljük a <span class="kiemel">nézetmotor</span>nak.</p>
	<div class="row-3">
		<div class="kontener">
			<h3>Parancssor:</h3>
			<div class="kod-kontener">
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend/controllers/cakes</span></code></p>
				<p><code class="parancs">$ cd ..</code></p>
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend/controllers</span></code></p>
				<p><code class="parancs">$ cd ..</code></p>
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend</span></code></p>
				<p><code class="parancs">$ cd views</code></p>
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend/views</span></code></p>
				<p><code class="parancs">$ cd cakes</code></p>
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend/views/cakes</span></code></p>
				<p><code class="parancs">$ touch new-cake.ejs</code></p>
			</div>
		</div>
		<div class="kontener">
			<h3>Visual Studio Code:</h3>
			<p><code>nav.ejs</code></p>
			<pre>
&lt;style&gt;
    nav {
        background-color: blue;
        display: flex;
        flex-direction: row;
        gap: 1em;
        justify-content: space-between;
        list-style-type: none;
    }

    nav #server-kontener {
        display: flex;
        flex-direction: row;
    }

    nav li a {
        color: whitesmoke;
        cursor: pointer;
        display: inline-block;
        padding: 1em;
        text-decoration: none;
    }
&lt;/style&gt;
&lt;nav&gt;
    &lt;div id="server-kontener"&gt;
        &lt;li&gt;&lt;a href="/api"&gt;Főoldal&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="/api/cakes-backend"&gt;Torták&lt;/a&gt;&lt;/li&gt;
        <span class="kiemel">&lt;li&gt;&lt;a href="/api/new-cake"&gt;Új torta&lt;/a&gt;&lt;/li&gt;</span>
    &lt;/div&gt;
    &lt;div id="frontend-kontener"&gt;
        &lt;li&gt;&lt;a href="http://localhost:5173"&gt;Kliens&lt;/a&gt;&lt;/li&gt;
    &lt;/div&gt;
&lt;/nav&gt;
			</pre
			>
			<p><code>new-cake.ejs</code></p>
			<pre>
&lt;!DOCTYPE html&gt;
&lt;html lang="hu"&gt;
    &lt;head&gt;
        &lt;meta charset="UTF-8" /&gt;
        &lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;
        &lt;link rel="stylesheet" href="/css/cakes/new-cake.css" /&gt;
        &lt;title&gt;Új torta felvétele&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;%- include('../nav.ejs') %&gt;
        &lt;div id="uj-torta-kontener"&gt;
            &lt;h1&gt;Új torta felvétele&lt;/h1&gt;
            &lt;form&gt;
                &lt;table&gt;
                    &lt;tr&gt;
                        &lt;td&gt;Név:&lt;/td&gt;
                        &lt;td&gt;&lt;input type="text" id="nev" /&gt;&lt;/td&gt;
                    &lt;/tr&gt;
                    &lt;tr&gt;
                        &lt;td&gt;Ár:&lt;/td&gt;
                        &lt;td&gt;&lt;input type="number" id="ar" /&gt;&lt;/td&gt;
                    &lt;/tr&gt;
                    &lt;tr&gt;
                        &lt;td&gt;Leírás:&lt;/td&gt;
                        &lt;td&gt;&lt;textarea id="leiras"&gt;&lt;/textarea&gt;&lt;/td&gt;
                    &lt;/tr&gt;
                    &lt;tr&gt;
                        &lt;td&gt;Kép 1:&lt;/td&gt;
                        &lt;td&gt;&lt;input type="text" id="kep1" /&gt;&lt;/td&gt;
                    &lt;/tr&gt;
                    &lt;tr&gt;
                        &lt;td&gt;Kép 2:&lt;/td&gt;
                        &lt;td&gt;&lt;input type="text" id="kep2" /&gt;&lt;/td&gt;
                    &lt;/tr&gt;
                    &lt;tr&gt;
                        &lt;td&gt;Kép 3:&lt;/td&gt;
                        &lt;td&gt;&lt;input type="text" id="kep3" /&gt;&lt;/td&gt;
                    &lt;/tr&gt;
                    &lt;tr&gt;
                        &lt;td&gt;<span class="kiemel">&lt;button onclick="feltoltes(event)"&gt;Feltöltés&lt;/button&gt;</span>&lt;/td&gt;
                        &lt;td&gt;&lt;/td&gt;
                    &lt;/tr&gt;
                &lt;/table&gt;
            &lt;/form&gt;
        &lt;/div&gt;
        <span class="kiemel">&lt;script src="/js/torta.mjs"&gt;&lt;/script&gt;</span>
    &lt;/body&gt;
&lt;/html&gt;
			</pre>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<p>
				Lépjünk ki a <code>controllers/cakes</code> mappából.
			</p>
			<p>
				Ehhez adjuk ki kétszer a
				<code>cd ..</code>
				utasítást a parancssorban. 
			</p>
			<p>
				Lépjünk be a <code>views</code> mappába.
			</p>
			<p>
				Ehhez adjuk ki a
				<code>cd views</code>
				utasítást a parancssorban. 
			</p>
			<p>
				Lépjünk be a <code>cakes</code> mappába.
			</p>
			<p>
				Ehhez adjuk ki a
				<code>cd cakes</code>
				utasítást a parancssorban. 
			</p>
			<p>
				A <code>views</code> mappában hozzunk létre egy <code>new-cake.ejs</code> nevű állományt.
			</p>
			<p>
				Ehhez adjuk ki a
				<code>touch new-cake.ejs</code>
				utasítást a parancssorban. 
			</p>
			<p>Csak a <span class="kiemel">Git Bash</span> felületen működik!</p>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<p>Módosítások a <code>nav.ejs</code> állományban.</p>
			<ol>
				<li><code>&lt;li&gt;&lt;a href="/api/new-cake"&gt;Új torta&lt;/a&gt;&lt;/li&gt;</code> - <span class="kiemel">Új torta</span>
				hivatkozás beállítása.</li>
			</ol>
			<p>A <code>new-cake.ejs</code> szerkesztése.</p>
			<ol>
				<li>
					<code>&lt;button onclick="feltoltes(event)"&gt;Feltöltés&lt;/button&gt;</code> - egy új torta feltöltése az adatbázisba.
				</li>
				<li>
					<code>&lt;script src="/js/torta.mjs"&gt;&lt;/script&gt;</code>
					- a <code>backend/public/js</code> mappában lévő
					<code>torta.mjs</code> beimportálása. 
				</li>
			</ol>
		</div>
	</div>
	`;
