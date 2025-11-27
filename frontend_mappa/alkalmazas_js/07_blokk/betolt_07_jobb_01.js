let betolt_07_jobb_01 = `
	<h1>A <code>src/components/Cake</code> mappában lévő <code>Cake.jsx</code> állomány szerkesztése</h1> 
    <p>
		Ebben a lépésben módosítjuk a <code>Cake</code> oldalt, ahonnan meghívjuk az <code>EgyediCake</code> oldalt.
	</p>
	<div class="row-3">
		<div class="kontener">
			<h3>Parancssor:</h3>
			<div class="kod-kontener">
				<p>
					<code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/frontend</span></code>
				</p>
				<p>
					<code class="parancs">$ </code>
				</p>
			</div>
		</div>
		<div class="kontener">
			<h3>Visual Studio Code:</h3>
			<p>
				<code>Cake.jsx</code>
			</p>
			<a href="./alkalmazas_js/07_blokk/megoldasok/Cake.jsx" download>
				<img src="./alkalmazas_js/07_blokk/images/kep_01.png" title="A képre kattintva a kód letölthető!" />
			</a>
			<p>
				<code>App.jsx</code>
			</p>
			<a href="./alkalmazas_js/07_blokk/megoldasok/App.jsx" download>
				<img src="./alkalmazas_js/07_blokk/images/kep_02.png" title="A képre kattintva a kód letölthető!" />
			</a>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<p>
				Maradhatunk a <code>frontend</code> mappában. 
			</p>
			<p>
				Nyissuk meg a <code>frontend/src/components/Cake/Cake.jsx</code> állományt szerkesztésre.
			</p>
			<p>
				Nyissuk meg a <code>frontend/src/App.jsx</code> állományt szerkesztésre.
			</p>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<p>
				A <code>Cake.jsx</code> állomány szerkesztése.
			</p>
			<ol>
				<li>
					<code>function megnezes(id) { window.location.href = \`/egyedicake/\${id}\`; }</code> - menjünk át
					az <code>/egyedicake/:id</code> <span class="kiemel">route</span>-hoz tartozó oldalra.
				</li>
				<li>
					<code>&lt;button onClick={() => megnezes(elem._id)}&gt;Nézzük meg közelebről&lt;/button&gt;</code> - hozzunk
					létre egy <code>megnezes</code> nevű függvényt, amely átvisz minket az <code>/egyedicake/:id</code>
					<span class="kiemel">route</span>-hoz tartozó oldalra.
				</li>
			</ol>
			<p>
				Az <code>App.jsx</code> állomány szerkesztése.
			</p>
			<ol>
				<li>
					<code>import EgyediCake from './pages/EgyediCake/EgyediCake';</code> - importáljuk be az <code>EgyediCake</code> oldalt.
				</li>
				<li>
					<code>&lt;Route path="/egyedicake/:id" element={&lt;EgyediCake /&gt;} /&gt;</code> - az <code>/egyedicake/:id</code> <span class="kiemel">route</span>.
				</li>
				
			</ol>
		</div>
	</div>
	`;

export default betolt_07_jobb_01;
