let betolt_04_jobb_03 = `
	<h1>Az <code>src/pages/Cakes</code> mappában lévő <code>Cakes.jsx</code> állomány szerkesztése</h1> 
    <p>
		Ebben a lépésben módosítjuk a <code>Cakes</code> oldalt, ahol komponensként
		felhasználjuk a <code>Cake</code> komponenst. 
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
			<code>Cakes.jsx</code>
			<a href="./alkalmazas_js/04_blokk/megoldasok/Cakes.jsx" download>
				<img src="./alkalmazas_js/04_blokk/images/kep_04.png" title="A képre kattintva a kód letölthető!" />
			</a>
			<code>Cake.jsx</code>
			<a href="./alkalmazas_js/04_blokk/megoldasok/Cake.jsx" download>
				<img src="./alkalmazas_js/04_blokk/images/kep_05.png" title="A képre kattintva a kód letölthető!" />
			</a>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<p>
				Maradhatunk a <code>frontend</code> mappában. 
			</p>
			<p>
				Nyissuk meg a <code>frontend/src/pages/Cakes/Cakes.jsx</code> állományt szerkesztésre.
			</p>
			<p>
				Nyissuk meg a <code>frontend/src/components/Cake/Cake.jsx</code> állományt szerkesztésre.
			</p>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<p>
				A <code>Cakes.jsx</code> állomány szerkesztése.
			</p>
			<ol>
				<li>
					<code>import { useEffect, useState } from 'react';</code> -
					importáljuk be az <code>useEffect</code>, <code>useState</code> <span class="kiemel">hook</span>-okat.
				</li>
				<li>
					<code>import Cake from '../../components/Cake/Cake';</code> -
					importáljuk be a <code>Cake</code> komponenst a megfelelő állományból.
				</li>
				<li>
					<code>const [cakes, setCakes] = useState([]);</code> -
					a <code>cakes</code> változó állapotának (<span class="kiemel">state</span>) kezelése.
				</li>
				<li>
					<code>useEffect(() => { cakesLeker(); }, []);</code>
					- az oldal töltödésekor mellékhatásként (<span class="kiemel">side effect</span>) kérjen le adatokat
					a szerverről.
				</li>
				<li>
					<code>async function cakesLeker() {}</code>
					- a mellékhatás.
				</li>
				<li>
					<code>const response = await fetch('http://localhost:3500/api/cakes-frontend');</code>
					- az adatok lekérése.
				</li>
				<li>
					<code>const tortak = await response.json();</code>
					- az adatok kicsomagolása <span class="kiemel">JSON</span> formátumból JavaScript-re.
				</li>
				<li>
					<code>setCakes(tortak.cakes);</code>
					- a <code>cakes</code> változó állapotának (<span class="kiemel">state</span>) beállítása.
				</li>
				<li>
					<code>{cakes.map((elem) =&gt; { return (&lt;Cake elem={elem} key={elem._id} /&gt;); })}</code>
					- a <code>cakes</code> változó feldolgozása. Minden elem esetén <code>Cake</code> komponens meghívása
					<code>elem={elem}</code> <span class="kiemel">props</span>-szal.
				</li>
			</ol>
			<p>
				A <code>Cake.jsx</code> állomány szerkesztése.
			</p>
			<ol>
				<li>
					<code>{elem.kepek.map((item) =&gt; { return (&lt;img src={item} key={item} /&gt;); })}</code>
					- az <code>elem.kepek</code> változó feldolgozása. Minden elem esetén létrehozunk egy
					<code>img</code> elemet.
				</li>
			</ol>
		</div>
	</div>
	`;

export default betolt_04_jobb_03;
