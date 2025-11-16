let betolt_03_jobb_02 = `
	<h1><code>App.jsx</code> szerkesztése</h1> 
    <p>
		Ebben a részben létrehozzuk a <span class="kiemel">route</span>-okhoz tartozó logikát.
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
				<code>App.jsx</code>
			</p>
			<a href="./alkalmazas_js/03_blokk/megoldasok/App.jsx" download>
				<img src="./alkalmazas_js/03_blokk/images/kep_01.png" title="A képre kattintva a kód letölthető!" />
			</a>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<p>
				Maradjunk a <code>frontend</code> mappában.
			</p>
			<p>
				Nyissuk meg a <code>frontend/src/App.jsx</code> állományt szerkesztésre.
			</p>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<ol>
				<li>
					<code>import { BrowserRouter, Routes, Route } from 'react-router-dom';</code> -
					dekonstruáljuk a <code>BrowserRouter</code>, <code>Routes</code>
					és <code>Route</code> objektumokat a <code>react-router-dom</code> csomagból.
				</li>
				<li>
					<code>import Navbar from './components/Navbar/Navbar';</code> -
					importáljuk be a <code>Navbar</code> komponenst a megfelelő állományból.
				</li>
				<li>
					<code>import Home from './pages/Home/Home';</code> -
					importáljuk be a <code>Home</code> oldalt a megfelelő állományból.
				</li>
				<li>
					<code>function App() { return (); }</code> -
					hozzuk létre az <code>App</code> nevű komponenst.
				</li>
				<li>
					<code>&lt;BrowserRouter&gt;&lt;/BrowserRouter&gt;</code> -
					a <span class="kiemel">route</span>-okat összefogó komponens.
				</li>
				<li>
					<code>&lt;Navbar /&gt;</code> -
					a <span class="kiemel">&lt;Navbar /&gt;</span> komponens beimportálása.
				</li>
				<li>
					<code>&lt;Routes&gt;&lt;/Routes&gt;</code> -
					szorosan összefogó komponensek gyűjtő komponens.
				</li>
				<li>
					<code>&lt;Route path='/' element={&lt;Home /&gt;} /&gt;</code> -
					a <span class="kiemel">&lt;Home /&gt;</span> komponens beimportálása a <code>/</code>
					<span class="kiemel">route</span>-hoz kapcsolódóan.
				</li>
				<li>
					<code>&lt;Route path='/Cakes' element={&lt;Cakes /&gt;} /&gt;</code> -
					a <span class="kiemel">&lt;Cakes /&gt;</span> komponens beimportálása a <code>/Cakes</code>
					<span class="kiemel">route</span>-hoz kapcsolódóan.
				</li>
			</ol>
		</div>
	</div>
	`;

export default betolt_03_jobb_02;
