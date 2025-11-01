let betolt_25 = `
	<h1>A <code>controllers/cakes</code> mappában lévő <code>cakesControllersBackend.mjs</code> állomány szerkesztése</h1> 
    <p>Ebben a lépésben az <span class="kiemel">MVC</span>-vel összefüggésben létrehozzuk a fenti állományt. Ebben dolgozzuk ki 
	a <span class="kiemel">CRUD</span> műveleteket.</p>
	<div class="row-3">
		<div class="kontener">
			<h3>Parancssor:</h3>
			<div class="kod-kontener">
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend/models</span></code></p>
				<p><code class="parancs">$ cd ..</code></p>
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend</span></code></p>
				<p><code class="parancs">$ cd controllers</code></p>
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend/controllers</span></code></p>
				<p><code class="parancs">$ mkdir cakes</code></p>
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend/controllers</span></code></p>
				<p><code class="parancs">$ cd cakes</code></p>
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend/controllers/cakes</span></code></p>
				<p><code class="parancs">$ touch cakesControllersBackend.mjs</code></p>
			</div>
		</div>
		<div class="kontener">
			<h3>Visual Studio Code:</h3>
			<code>cakesControllersBackend.mjs</code>
			<pre>
<span class="kiemel">import Cake from '../../models/Cake.mjs';</span>

export const getAllCakesBackend = async (req, res) => {
    try {
        <span class="kiemel">const cakes = await Cake.find({});</span>
        res.statusCode = 200;
        <span class="kiemel">return res.render('cakes/cakes.ejs', { cakes });</span>
    } catch (error) {
        res.statusCode = 404;
        return res.render('404.ejs');
    }
};

export const getOneCakeBackend = async (req, res) => {
    try {
        <span class="kiemel">const { id } = req.params;
        const cake = await Cake.findById({ _id: id });</span>
        res.statusCode = 200;
        <span class="kiemel">return res.render('cakes/cake.ejs', { cake });</span>
    } catch (error) {
        res.statusCode = 404;
        return res.render('404.ejs');
    }
};

export const deleteOneCakeBackend = async (req, res) => {
    try {
        <span class="kiemel">const { id } = req.params;
        const cake = await Cake.findByIdAndDelete({ _id: id });</span>
        res.statusCode = 200;
        <span class="kiemel">return res.json({ msg: 'Sikeres törlés!' });</span>
    } catch (error) {
        res.statusCode = 500;
        return res.json({ msg: 'Valami hiba történt!' + error.message });
    }
};
			</pre>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<p>
				Lépjünk ki a <code>models</code> mappából.
			</p>
			<p>
				Ehhez adjuk ki a
				<code>cd ..</code>
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
				A <code>controllers</code> mappában hozzunk létre egy  
				<code>cakes</code> nevű mappát.
			</p>
			<p>
				Ehhez adjuk ki a
				<code>mkdir cakes</code>
				utasítást a parancssorban. 
			</p>
			<p>
				Lépjünk be a <code>cakes</code> mappába.
			</p>
			<p>
				Ehhez adjuk ki a
				<code>cd cakes</code>
				utasítást a parancssorban. 
			</p>
			<p>
				A <code>controllers</code> mappában hozzunk létre egy  
				<code>cakesControllersBackend.mjs</code> nevű állományt.
			</p>
			<p>
				Ehhez adjuk ki a
				<code>touch cakesControllersBackend.mjs</code>
				utasítást a parancssorban. 
			</p>
			<p>Csak a <span class="kiemel">Git Bash</span> felületen működik!</p>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<ol>
				<li>
					<code>import Cake from '../../models/Cake.mjs';</code>
					- importáljuk be a
					<code>Cake</code> modellt a megfelelő állományból.
				</li>
				<li>
					<code>const cakes = await Cake.find({});</code> -
					kérjük le az adatbázisból az összes tortát.
				</li>
				<li>
					<code>return res.render('cakes/cakes.ejs', { cakes });</code>
					- küldjük el a nézetmotornak a
					<code>cakes.ejs</code> állományt a
					<code>cakes</code> objektummal, amely tartalmazza az összes
					lekért tortát.
				</li>
				<li>
					<code>const { id } = req.params;</code> -
					<span class="kiemel">dekonstrukció</span>-val kiszedjük az <code>id</code>-t
					a <span class="kiemel">req.params</span> objektumból.
				</li>
				<li>
					<code>const cake = await Cake.findById({ _id: id});</code> -
					kérjünk le az adatbázisból egy meghatározott tortát.
				</li>
				<li>
					<code>return res.render('cakes/cake.ejs', { cake });</code>
					- küldjük el a nézetmotornak a
					<code>cake.ejs</code> állományt a
					<code>cake</code> objektummal, amely tartalmazza tortát.
				</li>
				<li>
					<code>const cake = await Cake.findByIdAndDelete({ _id: id});</code> -
					töröljünk az adatbázisból egy meghatározott tortát.
				</li>
				<li>
					<code>return res.json({ msg: 'Sikeres törlés!' });</code>
					- küldjünk vissza egy üzenetet a böngészőnek.
				</li>
			</ol>
		</div>
	</div>
	`;
