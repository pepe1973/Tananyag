let betolt_07_jobb_02 = `
	<h1>Az <code>src/pages/EgyediCake</code> mappában lévő <code>EgyediCake.jsx</code> állomány szerkesztése</h1> 
    <p>
		Ebben a lépésben az <span class="kiemel">MVC</span>-vel összefüggésben létrehozzuk a fenti állományt. Ebben fogjuk össze
		a <span class="kiemel">CRUD</span> műveleteket.
	</p>
	<div class="row-3">
		<div class="kontener">
			<h3>Parancssor:</h3>
			<div class="kod-kontener">
				<p>
					<code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/frontend</span></code>
				</p>
				<p>
					<code class="parancs">$ cd src/pages</code>
				</p>
				<p>
					<code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/frontend/src/pages</span></code>
				</p>
				<p>
					<code class="parancs">$ mkdir EgyediCake</code>
				</p>
				<p>
					<code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/frontend/src/pages</span></code>
				</p>
				<p>
					<code class="parancs">$ cd EgyediCake</code>
				</p>
				<p>
					<code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/frontend/src/pages/EgyediCake</span></code>
				</p>
				<p>
					<code class="parancs">$ touch EgyediCake.jsx EgyediCake.css</code>
				</p>
			</div>
		</div>
		<div class="kontener">
			<h3>Visual Studio Code:</h3>
			<code>EgyediCake.jsx</code>
			<a href="./alkalmazas_js/07_blokk/megoldasok/EgyediCake.jsx" download>
				<img src="./alkalmazas_js/07_blokk/images/kep_03.png" title="A képre kattintva a kód letölthető!" />
			</a>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<p>
				Lépjünk be az <code>src/pages</code> mappába.
			</p>
			<p>
				Ehhez adjuk ki a <code>cd src/pages</code> utasítást a parancssorban. 
			</p>
			<p>
				Hozzuk létre a <code>EgyediCake</code> nevű mappát.
			</p>
			<p>
				Ehhez adjuk ki a <code>mkdir EgyediCake</code> utasítást a parancssorban. 
			</p>
			<p>
				Lépjünk be az <code>EgyediCake</code> mappába.
			</p>
			<p>
				Ehhez adjuk ki a <code>cd EgyediCake</code> utasítást a parancssorban. 
			</p>
			<p>
				Hozzunk létre egy <code>EgyediCake.jsx</code> és egy <code>EgyediCake.css</code> nevű állományt.
			</p>
			<p>
				Ehhez adjuk ki a <code>touch EgyediCake.jsx EgyediCake.css</code> utasítást a parancssorban. 
			</p>
			<p>
				Csak a <span class="kiemel">Git Bash</span> felületen működik!
			</p>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<ol>
				<li>
					<code>const { id } = useParams();</code> - szedjük ki az <code>id</code> értéket az <span class="kiemel">URL</span>-ből.
				</li>
				<li>
					<code>const suti = tortak.cakes.filter((elem) => elem._id === id);</code> - válasszuk ki a lekért tortákból az adott
					<code>id</code>-jüt. Ez egy egyelemű tömbbel tér vissza.
				</li>
				<li>
					<code>setEgyediCake(suti[0]);</code> - állítsuk be egyedi tortának az előbb kapott tortát.
				</li>
				<li>
					<code>setKepek(suti[0].kepek);</code> - állítsuk be egyedi torta képeinek az előbb kapott torta képeit.
				</li>
			</ol>
		</div>
	</div>
	`;

export default betolt_07_jobb_02;
