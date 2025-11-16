let betolt_04_jobb_01 = `
	<h1>A <code>controllers/users</code> mappában lévő <code>userRegisterControllers.mjs</code> állomány szerkesztése</h1> 
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
					<code class="parancs">$ touch userRegisterControllers.mjs</code>
				</p>
			</div>
		</div>
		<div class="kontener">
			<h3>Visual Studio Code:</h3>
			<p>
				<code>userRegisterControllers.mjs</code>
			</p>
			<a href="./alkalmazas_js/05_blokk/megoldasok/userRegisterControllers.mjs" download>
				<img src="./alkalmazas_js/05_blokk/images/kep_01.png" title="A képre kattintva a kód letölthető!" />
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
				Hozzunk létre egy <code>userRegisterControllers.mjs</code> nevű állományt.
			</p>
			<p>
				Ehhez adjuk ki a <code>touch userRegisterControllers.mjs</code> utasítást a parancssorban. 
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
					<code>const { nev, email, jelszo } = req.body;</code> - szedjük ki az adatokat a <span class="kiemel">req.body</span>-ból.
				</li>
				<li>
					<code>const letezoUser = users.filter(elem => elem.email === email);</code> - nézzük meg van-e felhasználó az adott jelszóval.
				</li>
				<li>
					<code>if (letezoUser.length !== 0) { throw new Error('Ezzel az e-mail címmel már regisztráltak!'); }</code> - ha igen, dobjunk egy hibát.
				</li>
				<li>
					<code>const salt = await bcrypt.genSalt(10);</code> - hozzuk létre a titkosító kulcsot.
				</li>
				<li>
					<code>const hashedPassword = await bcrypt.hash(jelszo, salt);</code> - titkosítsuk a jelszót.
				</li>
				<li>
					<code>const newUser = new User({ nev, email, jelszo: hashedPassword });</code> - hozzunk létre egy új felhasználót.
				</li>
			</ol>
		</div>
	</div>
	`;

export default betolt_04_jobb_01;
