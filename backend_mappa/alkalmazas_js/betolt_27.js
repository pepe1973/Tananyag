let betolt_27 = `
	<h1>A <code>public/js</code> mappában lévő <code>tortak.mjs</code> állomány szerkesztése</h1> 
    <p>Ebben a lépésben kidolgozzuk a <code>torol(id)</code> függvényt a <code>public/jd/tortak.mjs</code> állományban.</p>
	<div class="row-3">
		<div class="kontener">
			<h3>Parancssor:</h3>
			<div class="kod-kontener">
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend/views/cakes</span></code></p>
				<p><code class="parancs">$ cd ..</code></p>
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend/views</span></code></p>
				<p><code class="parancs">$ cd ..</code></p>
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend</span></code></p>
				<p><code class="parancs">$ cd public</code></p>
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend/public</span></code></p>
				<p><code class="parancs">$ mkdir js</code></p>
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend/public</span></code></p>
				<p><code class="parancs">$ cd js</code></p>
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend/public/js</span></code></p>				
				<p><code class="parancs">$ touch tortak.mjs</code></p>
			</div>
		</div>
		<div class="kontener">
			<h3>Visual Studio Code:</h3>
			<p><code>tortak.mjs</code></p>
			<pre>
<span class="kiemel">async function torol(id) {</span>
    try {
        <span class="kiemel">const response = await fetch(\`/api/cakes-backend/\${id}\`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const vissza = await response.json();</span>

        if (response.ok) {
            window.alert(vissza.msg);
            <span class="kiemel">window.location.href = '/api/cakes-backend';</span>
        } else {
            window.alert(vissza.msg);
        }
    } catch (error) {
        console.log(error.message);
    }
<span class="kiemel">}</span>
			</pre>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<p>
				Lépjünk ki a <code>views/cakes</code> mappából.
			</p>
			<p>
				Ehhez adjuk ki kétszer a
				<code>cd ..</code>
				utasítást a parancssorban. 
			</p>
			<p>
				Lépjünk be a <code>public</code> mappába.
			</p>
			<p>
				Ehhez adjuk ki a
				<code>cd public</code>
				utasítást a parancssorban. 
			</p>
			<p>
			A <code>public</code> mappában hozzunk létre egy <code>js</code> nevű mappát.
			</p>
			<p>
			Ehhez adjuk ki a
			<code>mkdir js</code>
			utasítást a parancssorban. 
			</p>
			<p>
				Lépjünk be a <code>js</code> mappába.
			</p>
			<p>
				Ehhez adjuk ki a
				<code>cd js</code>
				utasítást a parancssorban. 
			</p>
			<p>
				A <code>js</code> mappában hozzunk létre egy <code>tortak.mjs</code> nevű állományt.
			</p>
			<p>
				Ehhez adjuk ki a
				<code>touch tortak.mjs</code>
				utasítást a parancssorban. 
			</p>
			<p>Csak a <span class="kiemel">Git Bash</span> felületen működik!</p>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<ol>
				<li><code>async function torol(id) {}</code> - hozzunk létre egy aszinkron <code>torol</code> nevű függvényt.
				<li>
					<code>const response = </code> - egy <code>response</code> nevű <span class="kiemel">promise</span> létrehozása.
				</li>
				<li>
					<code>await fetch();</code> - a
					<span class="kiemel">promise</span>.
				</li>
				<li>
					<code>const vissza = await response.json();</code> - csomagoljuk ki a webszerver válaszát.
				</li>
				<li>
					<code>window.location.href = '/api/cakes-backend';</code> - kérjük le újra az összes tortát.
				</li>
			</ol>
		</div>
	</div>
	`;
