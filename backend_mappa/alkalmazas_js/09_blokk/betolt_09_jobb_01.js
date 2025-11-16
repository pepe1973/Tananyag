let betolt_09_jobb_01 = `
	<h1>A <code>controllers/cakes</code> mappában lévő <code>oneCakeControllersBackend.mjs</code> állomány szerkesztése</h1> 
    <p>
		Ebben a lépésben az <span class="kiemel">MVC</span>-vel összefüggésben létrehozzuk a
		fenti állományt. Ebben dolgozzuk ki a <span class="kiemel">CRUD</span> műveleteket.
	</p>
	<div class="row-3">
		<div class="kontener">
			<h3>Parancssor:</h3>
			<div class="kod-kontener">
				<p>
					<code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend/routes/cakes</span></code>
				</p>
				<p>
					<code class="parancs">$ cd ..</code>
				</p>
				<p>
					<code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend/routes</span></code>
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
					<code class="parancs">$ cd cakes</code>
				</p>
				<p>
					<code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend/controllers/cakes</span></code>
				</p>
				<p>
					<code class="parancs">$ touch oneCakeControllersBackend.mjs</code>
				</p>
			</div>
		</div>
		<div class="kontener">
			<h3>Visual Studio Code:</h3>
			<code>oneCakeControllersBackend.mjs</code>
			<a href="./alkalmazas_js/09_blokk/megoldasok/oneCakeControllersBackend.mjs" download>
				<img src="./alkalmazas_js/09_blokk/images/kep_01.png" title="A képre kattintva a kód letölthető!" />
			</a>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<p>
				Lépjünk ki a <code>routes/cakes</code> mappából.
			</p>
			<p>
				Ehhez adjuk ki kétszer a <code>cd ..</code> utasítást a parancssorban. 
			</p>
			<p>
				Lépjünk be a <code>controllers</code> mappába.
			</p>
			<p>
				Ehhez adjuk ki a <code>cd controllers</code> utasítást a parancssorban. 
			</p>
			<p>
				Lépjünk be a <code>cakes</code> mappába.
			</p>
			<p>
				Ehhez adjuk ki a <code>cd cakes</code> utasítást a parancssorban. 
			</p>
			<p>
				A <code>controllers</code> mappában hozzunk létre egy  
				<code>oneCakeControllersBackend.mjs</code> nevű állományt.
			</p>
			<p>
				Ehhez adjuk ki a
				<code>touch oneCakeControllersBackend.mjs</code> utasítást a parancssorban. 
			</p>
			<p>
				Csak a <span class="kiemel">Git Bash</span> felületen működik!
			</p>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<ol>
				<li>
					<code>const { id, nev, ar, leiras, kepek } = req.body;</code> -
					<span class="kiemel">dekonstrukció</span>-val kiszedjük az <code>nev</code>-et, <code>ar</code>-at, <code>leiras</code>-t
					és <code>kepek</code>-et
					a <span class="kiemel">req.body</span> objektumból.
				</li>
				<li>
					<code>const cake = await Cake.findByIdAndUpdate({ _id: id }, { nev, ar, leiras, kepek });</code> -
					keressük meg és frissitsük az adott dokumentumot az adatbázisban.
				</li>
				<li>
					<code>res.statusCode = 201;</code> -
					a <span class="kiemel">HTTP 201</span>-es hibakódot küldjük vissza a böngészőnek.
				</li>
				<li>
					<code>return res.json({ msg: 'Sikeres módosítás!' });</code>
					- küldjünk vissza egy üzenetet a böngészőnek.
				</li>
			</ol>
		</div>
	</div>
	`;

export default betolt_09_jobb_01;
