let betolt_36 = `
	<h1>A <code>views</code> mappában lévő <code>cake.ejs</code> állomány szerkesztése</h1> 
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
				<p><code class="parancs">$ touch cake.ejs</code></p>
			</div>
		</div>
		<div class="kontener">
			<h3>Visual Studio Code:</h3>
			<p><code>cake.ejs</code></p>
			<pre>
&lt;!DOCTYPE html&gt;
&lt;html lang="hu"&gt;
    &lt;head&gt;
        &lt;meta charset="UTF-8" /&gt;
        &lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;
        &lt;link rel="stylesheet" href="/css/cakes/cakes.css" /&gt;
        &lt;title&gt;Torta&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;%- include('../nav.ejs') %&gt;
        &lt;div id="torta-kontener"&gt;
            &lt;h1&gt;Torta&lt;/h1&gt;
            &lt;div class="torta-kontener"&gt;
                &lt;form&gt;
                    &lt;input type="hidden" id="id" value="&lt;%= cake._id %&gt;" /&gt;
                    &lt;table&gt;
                        &lt;tr&gt;
                            &lt;td&gt;Név:&lt;/td&gt;
                            &lt;td&gt;&lt;input type="text" id="nev" value="&lt;%= cake.nev %&gt;" /&gt;&lt;/td&gt;
                        &lt;/tr&gt;
                        &lt;tr&gt;
                            &lt;td&gt;Ár:&lt;/td&gt;
                            &lt;td&gt;&lt;input type="number" id="ar" value="&lt;%= cake.ar %&gt;" /&gt;&lt;/td&gt;
                        &lt;/tr&gt;
                        &lt;tr&gt;
                            &lt;td&gt;Leírás:&lt;/td&gt;
                            &lt;td&gt;&lt;textarea id="leiras"&gt;&lt;%= cake.leiras %&gt;&lt;/textarea&gt;&lt;/td&gt;
                        &lt;/tr&gt;
                        &lt;tr&gt;
                            &lt;td&gt;Kép 1:&lt;/td&gt;
                            &lt;td&gt;&lt;input type="text" id="kep1" value="&lt;%= cake.kepek[0] %&gt;" /&gt;&lt;/td&gt;
                        &lt;/tr&gt;
                        &lt;tr&gt;
                            &lt;td&gt;Kép 2:&lt;/td&gt;
                            &lt;td&gt;&lt;input type="text" id="kep2" value="&lt;%= cake.kepek[1] %&gt;" /&gt;&lt;/td&gt;
                        &lt;/tr&gt;
                        &lt;tr&gt;
                            &lt;td&gt;Kép 3:&lt;/td&gt;
                            &lt;td&gt;&lt;input type="text" id="kep3" value="&lt;%= cake.kepek[2] %&gt;" /&gt;&lt;/td&gt;
                        &lt;/tr&gt;
                        &lt;tr&gt;
                            &lt;td&gt;<span class="kiemel">&lt;button onclick="modositas(event)"&gt;Módosítás&lt;/button&gt;</span>&lt;/td&gt;
                            &lt;td&gt;&lt;/td&gt;
                        &lt;/tr&gt;
                    &lt;/table&gt;
                &lt;/form&gt;
            &lt;/div&gt;
        &lt;/div&gt;
        &lt;script src="/js/torta.mjs"&gt;&lt;/script&gt;
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
				A <code>views</code> mappában hozzunk létre egy <code>cake.ejs</code> nevű állományt.
			</p>
			<p>
				Ehhez adjuk ki a
				<code>touch cake.ejs</code>
				utasítást a parancssorban. 
			</p>
			<p>Csak a <span class="kiemel">Git Bash</span> felületen működik!</p>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<ol>
				<li>
					<code>&lt;button onclick="modositas(event)"&gt;Módosítás&lt;/button&gt;</code> - egy torta módosítása az adatbázisban.
				</li>
			</ol>
		</div>
	</div>
	`;
