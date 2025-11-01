let betolt_20 = `
	<h1>A <code>views</code> mappában lévő <code>nav.ejs</code>, <code>index.ejs</code> és 
	<code>404.ejs</code> állományok szerkesztése</h1> 
    <p>Ebben a lépésben az <code>ejs</code> állományokat hozzuk létre a <span class="kiemel">nézetmotor</span>nak.</p>
	<div class="row-3">
		<div class="kontener">
			<h3>Parancssor:</h3>
			<div class="kod-kontener">
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend/controllers</span></code></p>
				<p><code class="parancs">$ cd ..</code></p>
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend</span></code></p>
				<p><code class="parancs">$ cd views</code></p>
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend/views</span></code></p>
				<p><code class="parancs">$ touch nav.ejs index.ejs 404.ejs</code></p>
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
    &lt;/div&gt;
    &lt;div id="frontend-kontener"&gt;
        &lt;li&gt;&lt;a href="http://localhost:5173"&gt;Kliens&lt;/a&gt;&lt;/li&gt;
    &lt;/div&gt;
&lt;/nav&gt;
			</pre
			>
			<p><code>index.ejs</code></p>
			<pre>
&lt;!DOCTYPE html&gt;
&lt;html lang="hu"&gt;
    &lt;head&gt;
        &lt;meta charset="UTF-8" /&gt;
        &lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;
        &lt;link rel="stylesheet" <span class="kiemel">href="/css/stilus.css"</span> /&gt;
        &lt;title&gt;Cukrászda szerveroldal&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
        <span class="kiemel">&lt;%- include('nav.ejs') %&gt;</span>
        &lt;div id="main-kontener"&gt;
            &lt;h1&gt;Cukrászat szerveroldal&lt;/h1&gt;
        &lt;/div&gt;
    &lt;/body&gt;
&lt;/html&gt;
			</pre>
			<p><code>404.ejs</code></p>
			<pre>
&lt;!DOCTYPE html&gt;
&lt;html lang="hu"&gt;
    &lt;head&gt;
        &lt;meta charset="UTF-8" /&gt;
        &lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;
        &lt;link rel="stylesheet" <span class="kiemel">href="/css/404.css"</span> /&gt;
        &lt;title&gt;404-es hiba oldal&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;div id="hiba-kontener"&gt;
            &lt;h1&gt;404-es hiba!&lt;/h1&gt;
            &lt;p&gt;A keresett erőforrás nem található!&lt;/p&gt;
            &lt;a href="/"&gt;Vissza a nyitólapra!&lt;/a&gt;
        &lt;/div&gt;
    &lt;/body&gt;
&lt;/html&gt;
			</pre>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<p>
				Lépjünk ki a <code>controllers</code> mappából.
			</p>
			<p>
				Ehhez adjuk ki a
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
				A <code>views</code> mappában hozzunk létre egy <code>nav.ejs</code>, egy <code>index.ejs</code> és egy 
				<code>404.ejs</code> nevű állományt.
			</p>
			<p>
				Ehhez adjuk ki a
				<code>touch nav.ejs index.ejs 404.ejs</code>
				utasítást a parancssorban. 
			</p>
			<p>Csak a <span class="kiemel">Git Bash</span> felületen működik!</p>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<p>Az <code>index.ejs</code> és a <code>404.ejs</code> állományok szerkesztése.</p>
			<ol>
				<li>
					<code>href="/css/stilus.css"</code> és <code>href="/css/404.css"</code> - speciális
					stílusadás az <code>ejs</code> oldalaknak a <span class="kiemel">statikus mappa</span> beállítása után. Lásd a 
					<span class="kiemel">Statikus mappa beállítása</span> pont!
				</li>
				<li>
					<code><%- include('nav.ejs') %></code> -
					<code>nav.ejs</code> komponens beimportálása a
					kódba. <span class="kiemel">Nézetmotor</span> beállítása a <span class="kiemel">Statikus mappa beállítása</span> pontban!
				</li>
			</ol>
		</div>
	</div>
	`;
