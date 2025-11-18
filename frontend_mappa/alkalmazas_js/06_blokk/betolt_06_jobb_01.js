let betolt_06_jobb_01 = `
	<h1>A <code>controllers/users</code> mappában lévő <code>userLoginControllers.mjs</code> állomány szerkesztése</h1> 
    <p>
		Ebben a lépésben az <span class="kiemel">MVC</span>-vel összefüggésben létrehozzuk a fenti állományt. Ebben dolgozzuk ki
		a <span class="kiemel">CRUD</span> műveleteket.
	</p>
	<div class="row-3">
		<div class="kontener">
			<h3>Parancssor:</h3>
			<div class="kod-kontener">
				<p>
					<code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda</span></code>
				</p>
				<p>
					<code class="parancs">$ cd backend</code>
				</p>
				<p>
					<code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend</span></code>
				</p>
				<p>
					<code class="parancs">$ cd controllers</code>
				</p>
				<p>
					<code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend/controllers</span></code>
				</p>
				<p>
					<code class="parancs">$ cd users</code>
				</p>
				<p>
					<code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend/controllers/users</span></code>
				</p>
				<p>
					<code class="parancs">$ touch userLoginControllers.mjs</code>
				</p>
			</div>
		</div>
		<div class="kontener">
			<h3>Visual Studio Code:</h3>
			<p>
				<code>userLoginControllers.mjs</code>
			</p>
			<a href="./alkalmazas_js/06_blokk/megoldasok/userLoginControllers.mjs" download>
				<img src="./alkalmazas_js/06_blokk/images/kep_01.png" title="A képre kattintva a kód letölthető!" />
			</a>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<p>
				Nyissunk egy új <span class="kiemel">Git Bash</span> felületet.
			</p>
			<p>
				Lépjünk be a <code>backend</code> mappába.
			</p>
			<p>
				Ehhez adjuk ki a <code>cd backend</code> utasítást a parancssorban. 
			</p>
			<p>
				Lépjünk be a <code>controllers</code> mappába.
			</p>
			<p>
				Ehhez adjuk ki a <code>cd controllers</code> utasítást a parancssorban. 
			</p>
			<p>
				Lépjünk be a <code>users</code> mappába.
			</p>
			<p>
				Ehhez adjuk ki a <code>cd users</code> utasítást a parancssorban. 
			</p>
			<p>
				Hozzunk létre egy <code>userLoginControllers.mjs</code> nevű állományt.
			</p>
			<p>
				Ehhez adjuk ki a <code>touch userLoginControllers.mjs</code> utasítást a parancssorban. 
			</p>
			<p>
				Csak a <span class="kiemel">Git Bash</span> felületen működik!
			</p>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<ol>
				<li>
					<code>import User from '../../models/User.mjs';</code> - importáljuk be a <code>User</code> <span class="kiemel">model</span>-t.
				</li>
				<li>
					<code>import bcrypt from 'bcrypt';</code> - importáljuk be a <code>bcrypt</code> <span class="kiemel">mongoose</span> csomagot.
				</li>
				<li>
					<code>const { email, jelszo } = req.body;</code> - szedjük ki az adatokat a <span class="kiemel">req.body</span>-ból.
				</li>
				<li>
					<code>const letezoUser = users.filter(elem => elem.email === email);</code> - nézzük meg van-e felhasználó az adott jelszóval.
				</li>
				<li>
					<code>if (letezoUser.length === 0) { throw new Error('Ezzel az e-mail címmel nem létezik felhasználó!'); }</code> - ha nem, dobjunk egy hibát.
				</li>
				<li>
					<code>const hasonlit = await bcrypt.compare(jelszo, letezoUser[0].jelszo);</code> - nézzük meg, hogy egyeznek-e a jelszók.
				</li>
				<li>
					<code>if (hasonlit) { res.statusCode = 200; return res.json({ msg: 'Üdvözlünk az oldalunkon!', letezoUser }); }</code> - ha egyezik a két jelszó.
				</li>
				<li>
					<code>else { throw new Error('Ezzel a jelszóval nem létezik felhasználó!'); }</code> - és ha nem.
				</li>
			</ol>
		</div>
	</div>
	`;

export default betolt_06_jobb_01;
