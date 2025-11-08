let betolt_13 = `
	<h1>Mappastruktúra kialakítása. <code>pages</code> mappa létrehozása</h1> 
    <p>Ebben a részben tovább alakítjuk a mappastruktúrát. Létrehozzuk a <code>components</code> mappát.</p>
	<div class="row-3">
		<div class="kontener">
			<h3>Parancssor:</h3>
			<div class="kod-kontener">
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/frontend/src</span></code></p>
				<p><code class="parancs">$ cd pages</code></p>
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/frontend/src/pages</span></code></p>
				<p><code class="parancs">$ mkdir Home Cakes</code></p>
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/frontend/src/pages</span></code></p>
				<p><code class="parancs">$ cd Home</code></p>
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/frontend/src/pages/Home</span></code></p>
				<p><code class="parancs">$ touch Home.jsx Home.css</code></p>
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/frontend/src/pages/Home</span></code></p>
				<p><code class="parancs">$ cd ..</code></p>
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/frontend/src/pages</span></code></p>
				<p><code class="parancs">$ cd Cakes</code></p>
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/frontend/src/pages/Cakes</span></code></p>
				<p><code class="parancs">$ touch Cakes.jsx Cakes.css</code></p>
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/frontend/src/pages/Cakes</span></code></p>
				<p><code class="parancs">$ cd ..</code></p>
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/frontend/src/pages</span></code></p>
				<p><code class="parancs">$ cd ..</code></p>
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/frontend/src</span></code></p>
				<p><code class="parancs">$ cd ..</code></p>
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/frontend</span></code></p>
				<p><code class="parancs">$ </code></p>
			</div>
		</div>
		<div class="kontener">
			<h3>Visual Studio Code:</h3>
			<div class="keret">
			<p><code>Home.jsx</code></p>
			<pre>
<span class="kiemel">import './Home.css';

const Home = () => {
    return &lt;div className='home-kontener'&gt;Home&lt;/div&gt;
};

export default Home;</span>
			</pre
			>
			</div>
			<div class="keret">
			<p><code>Cakes.jsx</code></p>
			<pre>
import 'Cakes.css';

const Cakes = () => {
    return &lt;div className='cakes-kontener'&gt;Cakes&lt;/div&gt;
};

export default Cakes;
			</pre
			>
			</div>
			<p>A <code>css</code>-állományok stílusadása egyedi.</p>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<p>
			Lépjünk be a <code>pages</code> mappába.
			</p>
			<p>
				Ehhez adjuk ki az <code>cd pages</code> utasítást a parancssorban.
			</p>
			<p>
			Hozzuk létre a <code>Home</code> és <code>Cakes</code> mappákat.
			</p>
			<p>
				Ehhez adjuk ki az <code>mkdir Home Cakes</code> utasítást a parancssorban.
			</p>
			<p>
			Lépjünk be a <code>Home</code> mappába.
			</p>
			<p>
				Ehhez adjuk ki az <code>cd Home</code> utasítást a parancssorban.
			</p>
			<p>
			Hozzuk létre a <code>Home.jsx</code> és <code>Home.css</code> állományokat.
			</p>
			<p>
			Ehhez adjuk ki az <code>touch Home.jsx Home.css</code> utasítást a parancssorban.
			</p>
			<p>Csak a <span class="kiemel">Git Bash</span> felületen működik!</p>
			<p>
				Lépjünk ki a <code>Home</code> mappából.
			</p>
			<p>
				Ehhez adjuk ki az <code>cd ..</code> utasítást a parancssorban.
			</p>
			<p>
			Lépjünk be a <code>Cakes</code> mappába.
			</p>
			<p>
				Ehhez adjuk ki az <code>cd Cakes</code> utasítást a parancssorban.
			</p>
			<p>
			Hozzuk létre a <code>Cakes.jsx</code> és <code>Cakes.css</code> állományokat.
			</p>
			<p>
			Ehhez adjuk ki az <code>touch Cakes.jsx Cakes.css</code> utasítást a parancssorban.
			</p>
			<p>Csak a <span class="kiemel">Git Bash</span> felületen működik!</p>
			<p>
				Lépjünk ki a <code>Cakes</code> mappából.
			</p>
			<p>
				Ehhez adjuk ki az <code>cd ..</code> utasítást a parancssorban.
			</p>
			<p>
				Lépjünk ki a <code>pages</code> mappából.
			</p>
			<p>
				Ehhez adjuk ki az <code>cd ..</code> utasítást a parancssorban.
			</p>
			<p>
				Lépjünk ki az <code>src</code> mappából.
			</p>
			<p>
				Ehhez adjuk ki az <code>cd ..</code> utasítást a parancssorban.
			</p>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<ol>
				<li>
					<code>import './Home.css';</code> - importáljuk be a <code>Home.css</code> állományt.
				</li>
				<li>
					<code>const Home = () => {}</code> - hozzunk létre egy függvényt.
				</li>
				<li>
					<code>return &lt;div className='cake-kontener'&gt;Cake&lt;/div&gt;</code> - amely visszatér a <code>Home</code>
					komponenssel.
				</li>
				<li><code>export default Home;</code> - vigyük ki alapértelmezetten ezt a függvényt.</li>
			</ol>
		</div>
	</div>
	`;
