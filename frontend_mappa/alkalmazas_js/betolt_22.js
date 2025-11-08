let betolt_22 = `
	<h1>Az <code>src/pages/Cakes</code> mappában lévő <code>Cakes.jsx</code> állomány szerkesztése</h1> 
    <p><span class="kiemel">Statikus mappa</span> (<code>public</code>) beállítása, amely a statikus állományokat (pl. HTML, CSS, képek stb.) tárolja.
	Állítsuk be a <span class="kiemel">nézetmotor</span>-t is.</p>
	<div class="row-3">
		<div class="kontener">
			<h3>Parancssor:</h3>
			<div class="kod-kontener">
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/frontend</span></code></p>
				<p><code class="parancs">$ </code></p>
			</div>
		</div>
		<div class="kontener">
			<h3>Visual Studio Code:</h3>
			<div class="keret">
			<code>Cakes.jsx</code>
			<pre>
<span class="kiemel">import { useEffect, useState } from 'react';</span>
import './Cakes.css';
<span class="kiemel">import Cake from '../../components/Cake/Cake';</span>

const Cakes = () => {
    <span class="kiemel">const [cakes, setCakes] = useState([]);</span>

    <span class="kiemel">useEffect(() => {
        async function cakesLeker() {
            const response = await fetch('http://localhost:3500/api/cakes-frontend');

            const tortak = await response.json();</span>
            if (response.ok) {
                <span class="kiemel">setCakes(tortak.cakes);</span>
            } else {
                window.alert(tortak.msg);
            }
        <span class="kiemel">}

        cakesLeker();
    }, []);</span>

    return (
        &lt;div className="tortak-kontener"&gt;
            &lt;h1&gt;Torták&lt;/h1&gt;
            <span class="kiemel">{cakes.map((elem) =&gt; { return (&lt;Cake elem={elem} key={elem._id} /&gt;); })}</span>
        &lt;/div&gt;
    );
};

export default Cakes;
			</pre>
			</div><div class="keret">
			<code>Cake.jsx</code>
			<pre>
import './Cake.css';

const Cake = ({ elem }) => {
    return (
        &lt;div className="torta-kontener"&gt;
            &lt;h1&gt;{elem.nev}&lt;/h1&gt;
            &lt;p&gt;Ár: {elem.ar} Ft&lt;/p&gt;
            &lt;div className="torta-kepek-kontener"&gt;
                <span class="kiemel">{elem.kepek.map((item) =&gt; { return (&lt;img src={item} key={item} /&gt;); })}</span>
            &lt;/div&gt;
            &lt;p&gt;{elem.leiras}&lt;/p&gt;
        &lt;/div&gt;
    );
};

export default Cake;
			</pre>
			</div>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<p>
				Maradhatunk a <code>frontend</code> mappában. 
			</p>
			<p>
				Nyissuk meg a <code>frontend/src/pages/Cakes/Cakes.jsx</code> állományt
				szerkesztésre.
			</p>
			<p>
				Nyissuk meg a <code>frontend/src/components/Cake/Cake.jsx</code> állományt
				szerkesztésre.
			</p>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<p>
				A <code>Cakes.jsx</code> állomány
				szerkesztése.
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
				A <code>Cake.jsx</code> állomány
				szerkesztése.
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
