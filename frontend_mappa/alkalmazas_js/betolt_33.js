let betolt_33 = `
	<h1>A <code>routes/cakes</code> mappában lévő <code>newCakeRoutes.mjs</code> állomány szerkesztése</h1> 
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
				<p><code class="parancs">$ cd cakes</code></p>
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend/routes/cakes</span></code></p>
				<p><code class="parancs">$ touch newCakeRoutes.mjs</code></p>
			</div>
		</div>
		<div class="kontener">
			<h3>Visual Studio Code:</h3>
			<code>newCakeRoutes.mjs</code>
			<pre>
import express from 'express';
<span class="kiemel">import pictureUploader from '../../middlewares/pictureToCloudinary.mjs';
import { getNewCake, postNewCake } from '../../controllers/cakes/newCakeControllers.mjs';</span>
const router = express.Router();

<span class="kiemel">router.get('/', getNewCake);
router.post('/', pictureUploader, postNewCake);</span>

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
app.use(express.json());

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

import cakesRouter from './routes/cakes/cakesRoutesBackend.mjs';
app.use('/api/cakes-backend', cakesRouter);

<span class="kiemel">import newCakeRouter from './routes/cakes/newCakeRoutes.mjs';
app.use('/api/new-cake', newCakeRouter);</span>

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
				Lépjünk be a <code>cakes</code> mappába.
			</p>
			<p>
				Ehhez adjuk ki a
				<code>cd cakes</code>
				utasítást a parancssorban. 
			</p>
			<p>
				A <code>cakes</code> mappában hozzunk létre egy <code>newCakeRoutes.mjs</code> nevű állományt.
			</p>
			<p>
				Ehhez adjuk ki a
				<code>touch newCakeRoutes.mjs</code>
				utasítást a parancssorban. 
			</p>
			<p>Csak a <span class="kiemel">Git Bash</span> felületen működik!</p>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<p>
				A <code>newCakeRoutes.mjs</code> állomány
				szerkesztése.
			</p>
			<ol>
				<li><code>import pictureUploader from '../../middlewares/pictureToCloudinary.mjs';</code> - 
				a <code>pictureUploader</code> <span class="kiemel">middleware</span> meghívása az adott állományból</li>
				<li>
					<code>import { getNewCake, postNewCake } from '../../controllers/cakes/newCakeControllers.mjs';</code>
					- hívjuk meg a <code>getNewCake</code> és <code>postNewCake</code> 
					függvényeket a megfelelő állományból.
				</li>
				<li>
					<code>router.get('/', getNewCake);</code> -
					a <code>HTTP GET</code> metódus (<span class="kiemel">CRUD Read</span>) művelet megvalósítása a
					<code>getNewCake</code> függvénnyel.
				</li>
				<li>
					<code>router.post('/', pictureUploader, postNewCake);</code> -
					a <code>HTTP POST</code> metódus (<span class="kiemel">CRUD Create</span>) művelet megvalósítása a
					<code>postNewCake</code> függvénnyel.
				</li>
			</ol>
			<p>Módosítások a <code>server.mjs</code> állományban.</p>
			<ol>
				<li>
					<code>import newCakeRouter from './routes/cakes/newCakeRoutes.mjs';</code>
					- importáljuk be az előbb létrehozott
					<code>router</code>-t a megfelelő állományból.
				</li>
				<li>
					<code>app.use('/api/new-cake', newCakeRouter);</code> - a
					<code>use</code>
					<span class="kiemel">middleware</span> segítségével
					dolgozzuk ki a <code>/api/new-cake</code> -
					<span class="kiemel">route</span>-ot.
				</li>
			</ol>
		</div>
	</div>
	`;
