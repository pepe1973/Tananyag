let betolt_16 = `
	<h1><code>App.jsx</code> szerkesztése</h1> 
    <p>Ebben a részben létrehozzuk a <span class="kiemel">route</span>-okhoz tartozó logikát.</p>
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
			<p><code>App.jsx</code></p>
			<pre>
<span class="kiemel">import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';</span>
import Cakes from './pages/Cakes/Cakes';

<span class="kiemel">function App() {
    return (
        &lt;BrowserRouter&gt;
            &lt;Navbar /&gt;
            &lt;Routes&gt;
                &lt;Route path='/' element={&lt;Home /&gt;} /&gt;</span>
                &lt;Route path='/cakes' element={&lt;Cakes /&gt;} /&gt;
            <span class="kiemel">&lt;/Routes&gt;
        &lt;/BrowserRouter&gt;
    );
}</span>

export default App;
			</pre>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<p>
				Maradjunk a <code>frontend</code> mappában.
			</p>
			<p>
				Nyissuk meg a <code>frontend/src/App.jsx</code> állományt
				szerkesztésre.
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
					a <span class="kiemel">&lt;home /&gt;</span> komponens beimportálása a <code>/</code>
					<span class="kiemel">route</span>-hoz kapcsolódóan.
				</li>
			</ol>
		</div>
	</div>
	`;
