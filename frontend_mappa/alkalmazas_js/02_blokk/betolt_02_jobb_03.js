let betolt_02_jobb_03 = `
	<h1>Mappastruktúra kialakítása. <code>components</code> mappa létrehozása</h1> 
    <p>
		Ebben a részben tovább alakítjuk a mappastruktúrát. Létrehozzuk a <code>components</code> mappát.
	</p>
	<div class="row-3">
		<div class="kontener">
			<h3>Parancssor:</h3>
			<div class="kod-kontener">
				<p>
					<code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/frontend/public</span></code>
				</p>
				<p>
					<code class="parancs">$ cd ..</code>
				</p>
				<p>
					<code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/frontend</span></code>
				</p>
				<p>
					<code class="parancs">$ cd src</code>
				</p>
				<p>
					<code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/frontend/src</span></code>
				</p>
				<p>
					<code class="parancs">$ mkdir components pages</code>
				</p>
				<p>
					<code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/frontend/src</span></code>
				</p>
				<p>
					<code class="parancs">$ cd components</code>
				</p>
				<p>
					<code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/frontend/src/components</span></code>
				</p>
				<p>
					<code class="parancs">$ mkdir Navbar Cake</code>
				</p>
				<p>
					<code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/frontend/src/components</span></code>
				</p>
				<p>
					<code class="parancs">$ cd Navbar</code>
				</p>
				<p>
					<code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/frontend/src/components/Navbar</span></code>
				</p>
				<p>
					<code class="parancs">$ touch Navbar.jsx Navbar.css</code>
				</p>
				<p>
					<code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/frontend/src/components/Navbar</span></code>
				</p>
				<p>
					<code class="parancs">$ cd ..</code>
				</p>
				<p>
					<code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/frontend/src/components/</span></code>
				</p>
				<p>
					<code class="parancs">$ cd Cake</code>
				</p>
				<p>
					<code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/frontend/src/components/Cake</span></code>
				</p>
				<p>
					<code class="parancs">$ touch Cake.jsx Cake.css</code>
				</p>
				<p>
					<code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/frontend/src/components/Cake</span></code>
				</p>
				<p>
					<code class="parancs">$ cd ..</code>
				</p>
				<p>
					<code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/frontend/src/components</span></code>
				</p>
				<p>
					<code class="parancs">$ cd ..</code>
				</p>
			</div>
		</div>
		<div class="kontener">
			<h3>Visual Studio Code:</h3>
			<p>
				<code>Navbar.jsx</code>
			</p>
			<a href="./alkalmazas_js/02_blokk/megoldasok/Navbar.jsx" download>
				<img src="./alkalmazas_js/02_blokk/images/kep_01.png" title="A képre kattintva a kód letölthető!" />
			</a>
			<p><code>Cake.jsx</code></p>
			<a href="./alkalmazas_js/02_blokk/megoldasok/Cake.jsx" download>
				<img src="./alkalmazas_js/02_blokk/images/kep_01.png" title="A képre kattintva a kód letölthető!" />
			</a>
			<p>
				A <code>css</code>-állományok stílusadása egyedi.
			</p>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<p>
				Lépjünk ki a <code>public</code> mappából.
			</p>
			<p>
				Ehhez adjuk ki az <code>cd ..</code> utasítást a parancssorban.
			</p>
			<p>
				Lépjünk be az <code>src</code> mappába.
			</p>
			<p>
				Ehhez adjuk ki az <code>cd src</code> utasítást a parancssorban.
			</p>
			<p>
				Hozzuk létre a <code>components</code> és <code>pages</code> mappákat.
			</p>
			<p>
				Ehhez adjuk ki az <code>mkdir components pages</code> utasítást a parancssorban.
			</p>
			<p>
				Lépjünk be a <code>components</code> mappába.
			</p>
			<p>
				Ehhez adjuk ki az <code>cd components</code> utasítást a parancssorban.
			</p>
			<p>
				Hozzuk létre a <code>Navbar</code> és <code>Cake</code> mappákat.
			</p>
			<p>
				Ehhez adjuk ki az <code>mkdir Navbar Cake</code> utasítást a parancssorban.
			</p>
			<p>
				Lépjünk be a <code>Navbar</code> mappába.
			</p>
			<p>
				Ehhez adjuk ki az <code>cd Navbar</code> utasítást a parancssorban.
			</p>
			<p>
				Hozzuk létre a <code>Navbar.jsx</code> és <code>Navbar.css</code> állományokat.
			</p>
			<p>
				Ehhez adjuk ki az <code>touch Navbar.jsx Navbar.css</code> utasítást a parancssorban.
			</p>
			<p>
				Csak a <span class="kiemel">Git Bash</span> felületen működik!
			</p>
			<p>
				Lépjünk ki a <code>Navbar</code> mappából.
			</p>
			<p>
				Ehhez adjuk ki az <code>cd ..</code> utasítást a parancssorban.
			</p>
			<p>
				Lépjünk be a <code>Cake</code> mappába.
			</p>
			<p>
				Ehhez adjuk ki az <code>cd Cake</code> utasítást a parancssorban.
			</p>
			<p>
				Hozzuk létre a <code>Cake.jsx</code> és <code>Cake.css</code> állományokat.
			</p>
			<p>
				Ehhez adjuk ki az <code>touch Cake.jsx Cake.css</code> utasítást a parancssorban.
			</p>
			<p>
				Csak a <span class="kiemel">Git Bash</span> felületen működik!
			</p>
			<p>
				Lépjünk ki a <code>Cake</code> mappából.
			</p>
			<p>
				Ehhez adjuk ki az <code>cd ..</code> utasítást a parancssorban.
			</p>
			<p>
				Lépjünk ki a <code>components</code> mappából.
			</p>
			<p>
				Ehhez adjuk ki az <code>cd ..</code> utasítást a parancssorban.
			</p>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<ol>
				<li>
					<code>import './Navbar.css';</code> - importáljuk be a <code>Navbar.css</code> állományt.
				</li>
				<li>
					<code>const Navbar = () => {}</code> - hozzunk létre egy függvényt.
				</li>
				<li>
					<code>return &lt;div className='cake-kontener'&gt;Cake&lt;/div&gt;</code> - amely visszatér a <code>Navbar</code>
					komponenssel.
				</li>
				<li>
					<code>export default Navbar;</code> - vigyük ki alapértelmezetten ezt a függvényt.
				</li>
			</ol>
		</div>
	</div>
	`;

export default betolt_02_jobb_03;
