let betolt_28 = `
	<h1>A <code>routes/cakes</code> mappában lévő <code>cakesRoutesBackend.mjs</code> állomány szerkesztése</h1> 
    <p>Ebben a lépésben az <span class="kiemel">MVC</span>-vel összefüggésben létrehozzuk a fenti állományt. Ebben fogjuk össze 
	a <span class="kiemel">CRUD</span> műveleteket.</p>
	<div class="row-3">
		<div class="kontener">
			<h3>Parancssor:</h3>
			<div class="kod-kontener">
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend/public/js</span></code></p>
				<p><code class="parancs">$ cd ..</code></p>
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend/public</span></code></p>
				<p><code class="parancs">$ cd ..</code></p>
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend</span></code></p>
				<p><code class="parancs">$ cd routes</code></p>
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend/routes</span></code></p>
				<p><code class="parancs">$ mkdir cakes</code></p>
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend/routes</span></code></p>
				<p><code class="parancs">$ cd cakes</code></p>
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend/routes/cakes</span></code></p>
				<p><code class="parancs">$ touch cakesRoutesBackend.mjs</code></p>
			</div>
		</div>
		<div class="kontener">
			<h3>Visual Studio Code:</h3>
			<code>cakesRoutesBackend.mjs</code>
			<pre>
import express from 'express';
<span class="kiemel">import pictureDeleter from '../../middlewares/pictureDeleteFromCloudinary.mjs';
import { deleteOneCakeBackend, getAllCakesBackend, getOneCakeBackend } from '../../controllers/cakes/cakesControllersBackend.mjs';</span>
const router = express.Router();

<span class="kiemel">router.get('/', getAllCakesBackend);
router.get('/:id', getOneCakeBackend);
router.delete('/:id', pictureDeleter, deleteOneCakeBackend);</span>

export default router;
			</pre>
			<code>server.mjs</code>
			<pre>
import dotenv from 'dotenv';
dotenv.config();

import path from 'node:path';
import express from 'express';
import ejs from 'ejs';

const PORT = process.env.PORT || 3500;
const app = express();

const dir = import.meta.dirname;
app.use(express.static(path.resolve(dir, 'public')));
app.set('view engine', ejs);
<span class="kiemel">app.use(express.json());</span>

import dbConnect from './utils/dbConnection.mjs';

dbConnect()
    .then(() => {
        console.log('Sikeres adatbázis csatlakozás!');
        app.listen(PORT, () => {
            console.log(\`http://localhost:\${PORT}/api\`);
        });
    })
    .catch((error) => {
        console.error(\`A hiba oka: \${error.message}\`);
    });

import mainRouter from './routes/mainRoutesBackend.mjs';
app.use('/api', mainRouter);

<span class="kiemel">import cakesRouter from './routes/cakes/cakesRoutesBackend.mjs';
app.use('/api/cakes-backend', cakesRouter);</span>

app.use((req, res) => {
    try {
        res.statusCode = 404;
        return res.render('404.ejs');
    } catch (error) {
        res.statusCode = 500;
        return res.json({ msg: 'Általános szerver hiba!' });
    }
});

			</pre>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<p>
				Lépjünk ki a <code>public/js</code> mappából.
			</p>
			<p>
				Ehhez adjuk ki kétszer a
				<code>cd ..</code>
				utasítást a parancssorban. 
			</p>
			<p>
				Lépjünk be a <code>routes</code> mappába.
			</p>
			<p>
				Ehhez adjuk ki a
				<code>cd routes</code>
				utasítást a parancssorban. 
			</p>
			<p>
			A <code>routes</code> mappában hozzunk létre egy <code>cakes</code> nevű mappát.
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
				A <code>cakes</code> mappában hozzunk létre egy <code>cakesRoutesBackend.mjs</code> nevű állományt.
			</p>
			<p>
				Ehhez adjuk ki a
				<code>touch cakesRoutesBackend.mjs</code>
				utasítást a parancssorban. 
			</p>
			<p>Csak a <span class="kiemel">Git Bash</span> felületen működik!</p>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<p>
				A <code>cakesRoutesBackend.mjs</code> állomány
				szerkesztése.
			</p>
			<ol>
				<li><code>import pictureDeleter from '../../middlewares/pictureDeleteFromCloudinary.mjs';</code> - 
				a <code>pictureDeleter</code> <span class="kiemel">middleware</span> meghívása az adott állományból</li>
				<li>
					<code>import { deleteOneCakeBackend, getAllCakesBackend, getOneCakeBackend } from '../../controllers/cakes/cakesControllersBackend.mjs';</code>
					- hívjuk meg a <code>deleteOneCakeBackend</code>, <code>getAllCakesBackend</code> és <code>getOneCakeBackend</code> 
					függvényeket a megfelelő állományból.
				</li>
				<li>
					<code>router.get('/', getAllCakesBackend);</code> -
					a <code>HTTP GET</code> metódus (<span class="kiemel">CRUD Read</span>) művelet megvalósítása a
					<code>getAllCakesBackend</code> függvénnyel.
				</li>
				<li>
					<code>router.get('/:id', getOneCakeBackend);</code> -
					a <code>HTTP GET ONE</code> metódus (<span class="kiemel">CRUD Read</span>) művelet megvalósítása a
					<code>getOneCakeBackend</code> függvénnyel.
				</li>
				<li>
					<code>router.delete('/:id', pictureDeleter, deleteOneCakeBackend);</code> -
					a <code>HTTP DELETE</code> metódus (<span class="kiemel">CRUD Delete</span>) művelet megvalósítása a
					<code>deleteOneCakeBackend</code> függvénnyel.
				</li>
			</ol>
			<p>Módosítások a <code>server.mjs</code> állományban.</p>
			<ol>
				<li>
					<code>app.use(express.json());</code>
					- használjuk az
					<code>express.json()</code> <span class="kiemel">middleware</span>-t a böngészőtől kapott <code>HTTP req.body</code> kicsomagolására.
				</li>
				<li>
					<code>import cakesRouter from './routes/cakes/cakesRoutesBackend.mjs';</code>
					- importáljuk be az előbb létrehozott
					<code>router</code>-t a megfelelő állományból.
				</li>
				<li>
					<code>app.use('/api/cakes-backend', cakesRouter);</code> - a
					<code>use</code>
					<span class="kiemel">middleware</span> segítségével
					dolgozzuk ki a <code>/api/cakes-backend</code> -
					<span class="kiemel">route</span>-ot.
				</li>
			</ol>
		</div>
	</div>
	`;
