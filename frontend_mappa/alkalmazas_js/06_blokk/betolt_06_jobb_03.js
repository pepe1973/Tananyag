let betolt_06_jobb_03 = `
	<h1>Az <code>src/pages/Login</code> mappában lévő <code>Login.jsx</code> állomány szerkesztése</h1> 
    <p>
		Ebben a lépésben létrehozzuk, és szerkesztjük a <code>Login.jsx</code> állományt. 
	</p>
	<div class="row-3">
		<div class="kontener">
			<h3>Parancssor:</h3>
			<div class="kod-kontener">
				<p>
					<code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/frontend</span></code>
				</p>
				<p>
					<code class="parancs">$ cd src/pages </code>
				</p>
				<p>
					<code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/frontend/src/pages</span></code>
				</p>
				<p>
					<code class="parancs">$ mkdir Login </code>
				</p>
				<p>
					<code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/frontend/src/pages</span></code>
				</p>
				<p>
					<code class="parancs">$ cd Login </code>
				</p>
				<p>
					<code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/frontend/src/pages/Login</span></code>
				</p>
				<p>
					<code class="parancs">$ touch Login.jsx Login.css </code>
				</p>
			</div>
		</div>
		<div class="kontener">
			<h3>Visual Studio Code:</h3>
			<code>Login.jsx</code>
			<a href="./alkalmazas_js/06_blokk/megoldasok/Login.jsx" download>
				<img src="./alkalmazas_js/06_blokk/images/kep_04.png" title="A képre kattintva a kód letölthető!" />
			</a>
			<code>App.jsx</code>
			<a href="./alkalmazas_js/06_blokk/megoldasok/App.jsx" download>
				<img src="./alkalmazas_js/06_blokk/images/kep_05.png" title="A képre kattintva a kód letölthető!" />
			</a>
			<code>Navbar.jsx</code>
			<a href="./alkalmazas_js/06_blokk/megoldasok/Navbar.jsx" download>
				<img src="./alkalmazas_js/06_blokk/images/kep_06.png" title="A képre kattintva a kód letölthető!" />
			</a>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<p>
				Lépjünk be az <code>src/pages</code> mappában. 
			</p>
			<p>
				Ehhez adjuk ki a <code>cd src/pages</code> utasítást a parancssorban. 
			</p>
			<p>
				Hozzunk létre egy <code>Login</code> nevű mappát.
			</p>
			<p>
				Ehhez adjuk ki a <code>mkdir Login</code> utasítást a parancssorban. 
			</p>
			<p>
				Lépjünk be a <code>Login</code> mappában. 
			</p>
			<p>
				Ehhez adjuk ki a <code>cd Login</code> utasítást a parancssorban. 
			</p>
			<p>
				Hozzunk létre egy <code>Login.jsx</code> és egy <code>Login.css</code> nevű állományt.
			</p>
			<p>
				Ehhez adjuk ki a <code>touch Login.jsx Login.css</code> utasítást a parancssorban. 
			</p>
			<p>
				Csak a <span class="kiemel">Git Bash</span> felületen működik!
			</p>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<p>
				A <code>Login.jsx</code> állomány szerkesztése.
			</p>
			<ol>
				<li>
					<code>async function bejelentkezes(event) {}</code>
					- az adatok feldolgozására használt függvényt.
				</li>
				<li>
					<code>event.preventDefault();</code>
					- az elküldő gomb lenyomása után <span class="kiemel">NE FRISSÜLJÖN AZ OLDAL</span>!.
				</li>
				<li>
					<code>const response = await fetch('http://localhost:3500/api/login-frontend', {});</code>
					- az adatok feltöltése.
				</li>
				<li>
					<code>{ method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, jelszo }) }</code>
					- a <span class="kiemel">http request</span> objektum egy része.
				</li>
				<li>
					<code>localStorage.removeItem('isLoggedIn');</code>
					<code>localStorage.setItem('isLoggedIn', 0);</code>
					<code>localStorage.setItem('user', JSON.stringify(valasz.letezoUser[0]));</code>
					- <span class="kiemel">localStorage</span> - kezelése.
				</li>
				<li>
					<code>&lt;input type="email" id="email" onChange={(e) => setEmail(e.target.value)} /&gt;</code>
					- az <code>email</code> <span class="kiemel">property</span> állapotának beállítása.
				</li>
			</ol>
			<p>
				A <code>Navbar.jsx</code> állomány szerkesztése.
			</p>
			<ol>
				<li>
					<code>const ertek = localStorage.getItem('isLoggedIn');</code>
					<code>const user = JSON.parse(localStorage.getItem('user'));</code>
					- szedjük ki az értékeket a <span class="kiemel">localStorage</span>-ból..
				</li>
				<li>
					<code>setIsLoggedIn(ertek === '1');</code>
					- állítsuk be a <code>isLoggedIn</code> értékét <b>belépettre</b>.
				</li>
				<li>
					<code>if (user) setIsAdmin(user.admin);</code> - ha a <code>user</code> <b>admin</b>, akkor ezt is állítsuk be.
				</li>
				<li>
					<code>function kijelentkezes() {}</code>
					- a <span class="kiemel">logout</span> művelethez használt függvényt.
				</li>
				<li>
					<code>localStorage.removeItem('isLoggedIn');</code>
					<code>localStorage.removeItem('user');</code>
					<code>localStorage.setItem('isLoggedIn', 1);</code>
					- <span class="kiemel">localStorage</span> - kezelése.
				</li>
				<li>
					<code>{isLoggedIn ? : }</code>
					<code>{isAdmin ? : }</code>
					- ternáris kifejezések elágazáshoz.
				</li>
			</ol>
		</div>
	</div>
	`;

export default betolt_06_jobb_03;
