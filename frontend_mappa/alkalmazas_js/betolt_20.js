let betolt_20 = `
	<h1>A <code>controllers/cakes</code> mappában lévő <code>cakesControllersFrontend.mjs</code> állomány szerkesztése</h1> 
    <p>Ebben a lépésben az <span class="kiemel">MVC</span>-vel összefüggésben létrehozzuk a fenti állományt. Ebben dolgozzuk ki 
	a <span class="kiemel">CRUD</span> műveleteket.</p>
	<div class="row-3">
		<div class="kontener">
			<h3>Parancssor:</h3>
			<div class="kod-kontener">
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda</span></code></p>
				<p><code class="parancs">$ cd backend</code></p>
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend</span></code></p>
				<p><code class="parancs">$ cd controllers</code></p>
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend/controllers</span></code></p>
				<p><code class="parancs">$ cd cakes</code></p>
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend/controllers/cakes</span></code></p>
				<p><code class="parancs">$ touch cakesControllersFrontend.mjs</code></p>
			</div>
		</div>
		<div class="kontener">
			<h3>Visual Studio Code:</h3>
			<p><code>cakesControllersFrontend.mjs</code></p>
			<pre>
import Cake from '../../models/Cake.mjs';

export const getAllCakesFrontend = async (req, res) => {
    try {
        const cakes = await Cake.find({});
        res.statusCode = 200;
        return res.json({ cakes });
    } catch (error) {
        res.statusCode = 500;
        return res.json({ msg: 'Valami hiba: ' + error.message });
    }
};
			</pre>
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
				Ehhez adjuk ki a
				<code>cd backend</code>
				utasítást a parancssorban. 
			</p>
			<p>
				Lépjünk be a <code>controllers</code> mappába.
			</p>
			<p>
				Ehhez adjuk ki a
				<code>cd controllers</code>
				utasítást a parancssorban. 
			</p>
			<p>
				Hozzunk létre egy <code>cakesControllersFrontend.mjs</code> nevű állományt.
			</p>
			<p>
				Ehhez adjuk ki a
				<code>touch cakesControllersFrontend.mjs</code>
				utasítást a parancssorban. 
			</p>
			<p>Csak a <span class="kiemel">Git Bash</span> felületen működik!</p>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<p>A folyamat hasonló <code>backend/controllers/cakes/cakesControllersBackend.mjs</code> állományban vázoltakhoz.</p>
		</div>
	</div>
	`;
