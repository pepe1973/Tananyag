let betolt_10_jobb_02 = `
	<h1>A <code>controllers/users</code> mappában lévő <code>usersControllersBackend.mjs</code> állomány szerkesztése</h1> 
    <p>
		Ebben a lépésben az <span class="kiemel">MVC</span>-vel összefüggésben létrehozzuk a
		fenti állományt. Ebben dolgozzuk ki a <span class="kiemel">CRUD</span> műveleteket.
	</p>
	<div class="row-3">
		<div class="kontener">
			<h3>Parancssor:</h3>
			<div class="kod-kontener">
				<p>
					<code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend/models</span></code>
				</p>
				<p>
					<code class="parancs">$ cd ..</code>
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
					<code class="parancs">$ mkdir users</code>
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
					<code class="parancs">$ touch usersControllersBackend.mjs</code>
				</p>
			</div>
		</div>
		<div class="kontener">
			<h3>Visual Studio Code:</h3>
			<code>usersControllersBackend.mjs</code>
			<a href="./alkalmazas_js/10_blokk/megoldasok/usersControllersBackend.mjs" download>
				<img src="./alkalmazas_js/10_blokk/images/kep_02.png" title="A képre kattintva a kód letölthető!" />
			</a>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<p>
				Lépjünk ki a <code>models</code> mappából.
			</p>
			<p>
				Ehhez adjuk ki a <code>cd ..</code> utasítást a parancssorban. 
			</p>
			<p>
				Lépjünk be a <code>controllers</code> mappába.
			</p>
			<p>
				Ehhez adjuk ki a <code>cd controllers</code> utasítást a parancssorban. 
			</p>
			<p>
				A <code>controllers</code> mappában hozzunk létre egy <code>users</code> nevű mappát.
			</p>
			<p>
				Ehhez adjuk ki a <code>mkdir users</code> utasítást a parancssorban. 
			</p>
			<p>
				Lépjünk be a <code>users</code> mappába.
			</p>
			<p>
				Ehhez adjuk ki a <code>cd users</code> utasítást a parancssorban. 
			</p>
			<p>
				A <code>controllers</code> mappában hozzunk létre egy  
				<code>usersControllersBackend.mjs</code> nevű állományt.
			</p>
			<p>
				Ehhez adjuk ki a <code>touch usersControllersBackend.mjs</code> utasítást a parancssorban. 
			</p>
			<p>
				Csak a <span class="kiemel">Git Bash</span> felületen működik!
			</p>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<ol>
				<li>
					<code>import User from '../../models/User.mjs';</code>
					- importáljuk be a
					<code>User</code> modellt a megfelelő állományból.
				</li>
				<li>
					<code>const users = await User.find({});</code> -
					kérjük le az adatbázisból az összes felhasználót.
				</li>
				<li>
					<code>return res.render('users/users.ejs', { users });</code>
					- küldjük el a nézetmotornak a
					<code>users.ejs</code> állományt a
					<code>users</code> objektummal, amely tartalmazza az összes
					lekért felhasználót.
				</li>
				<li>
					<code>const { id, nev, email, admin } = req.body;</code> -
					<span class="kiemel">dekonstrukció</span>-val szedjük ki az adatokat 
					a <span class="kiemel">req.body</span> objektumból.
				</li>
				<li>
					<code>const user = await User.findByIdAndUpdate({ _id: id }, { nev, email, admin });</code> -
					frissítsük az adatbázisban a meghatározott felhasználót.
				</li>
				<li>
					<code>return res.json({ msg: 'Sikeres módosítás!' });</code>
					- küldjünk vissza egy üzenetet a böngészőnek.
				</li>
				<li>
					<code>const { id } = req.params;</code> -
					<span class="kiemel">dekonstrukció</span>-val kiszedjük az <code>id</code>-t
					a <span class="kiemel">req.params</span> objektumból.
				</li>
				<li>
					<code>const user = await User.findByIdAndDelete({ _id: id});</code> -
					töröljünk az adatbázisból egy meghatározott felhasználót.
				</li>
				<li>
					<code>return res.json({ msg: 'Sikeres törlés!' });</code>
					- küldjünk vissza egy üzenetet a böngészőnek.
				</li>
			</ol>
		</div>
	</div>
	`;

export default betolt_10_jobb_02;
