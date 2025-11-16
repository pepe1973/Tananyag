let betolt_03_jobb_03 = `
	<h1><code>Navbar.jsx</code> szerkesztése</h1> 
    <p>
		Következő lépésként létrehozzuk az oldalon való navigációhoz a <code>Navbar.jsx</code> állományt.
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
			<code>Navbar.jsx</code>
			<a href="./alkalmazas_js/03_blokk/megoldasok/Navbar.jsx" download>
				<img src="./alkalmazas_js/03_blokk/images/kep_02.png" title="A képre kattintva a kód letölthető!" />
			</a>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<p>
				Maradjunk a <code>frontend</code> mappában.
			</p>
			<p>
				Nyissuk meg a <code>frontend/src/components/Navbar/Navbar.jsx</code> állományt
				szerkesztésre.
			</p>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<ol>
				<li>
					<code>import { Link } from 'react-router-dom';</code> -
					dekonstruáljuk a <code>Link</code> objektumot a <code>react-router-dom</code> csomagból.
				</li>
				<li>
					<code>import './Navbar.css';</code> -
					importáljuk be a stílust.
				</li>
				<li>
					<code>&lt;Link to="/"&gt;Home&lt;/Link&gt;</code> - hivatkozás a <code>Home</code> komponensre.
				</li>
				<li>
					<code>&lt;Link to="/cakes"&gt;Cakes&lt;/Link&gt;</code> - hivatkozás a <code>Cakes</code> komponensre.
				</li>
				<li>
					<code>&lt;Link to="http://localhost:3500"&gt;Szerver&lt;/Link&gt;</code> - hivatkozás a szerverre.
				</li>
			</ol>
		</div>
	</div>
	`;

export default betolt_03_jobb_03;
