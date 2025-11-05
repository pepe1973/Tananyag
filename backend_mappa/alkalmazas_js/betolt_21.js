let betolt_21 = `
	<h1>A <code>routes</code> mappában lévő <code>mainRoutesBackend.mjs</code> állomány szerkesztése</h1> 
    <p>Ebben a lépésben az <span class="kiemel">MVC</span>-vel összefüggésben létrehozzuk a fenti állományt. Ebben fogjuk össze 
	a <span class="kiemel">CRUD</span> műveleteket.</p>
	<div class="row-3">
		<div class="kontener">
			<h3>Parancssor:</h3>
			<div class="kod-kontener">
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend/views</span></code></p>
				<p><code class="parancs">$ cd ..</code></p>
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend</span></code></p>
				<p><code class="parancs">$ cd routes</code></p>
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend/routes</span></code></p>
				<p><code class="parancs">$ touch mainRoutesBackend.mjs</code></p>
			</div>
		</div>
		<div class="kontener">
			<h3>Visual Studio Code:</h3>
			<div class="keret">
			<code>mainRoutesBackend.mjs</code>
			<pre>
import express from 'express';
<span class="kiemel">import { getMain } from '../controllers/mainControllersBackend.mjs';
const router = express.Router();

router.get('/', getMain);</span>

export default router;
			</pre>
			</div><div class="keret">
			<p><code>server.mjs</code></p>
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

<span class="kiemel">import mainRouter from './routes/mainRoutesBackend.mjs';
app.use('/api', mainRouter);

app.use((req, res) => {
    try {
        res.statusCode = 404;
        return res.render('404.ejs');
    } catch (error) {
        res.statusCode = 500;
        return res.json({ msg: 'Általános szerver hiba! ' + error.message });
    }
});</span>
			</pre>
			</div>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<p>
				Lépjünk ki a <code>views</code> mappából.
			</p>
			<p>
				Ehhez adjuk ki a
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
				A <code>routes</code> mappában hozzunk létre egy <code>mainRoutesBackend.mjs</code> nevű állományt.
			</p>
			<p>
				Ehhez adjuk ki a
				<code>touch mainRoutesBackend.mjs</code>
				utasítást a parancssorban. 
			</p>
			<p>Csak a <span class="kiemel">Git Bash</span> felületen működik!</p>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<p>
				A <code>mainRoutesBackend.mjs</code> állomány
				szerkesztése.
			</p>
			<ol>
				<li>
					<code
						>import { getMain } from
						'../controllers/mainControllersBackend.mjs';</code
					>
					- hívjuk meg a <code>getMain</code> függvényt a megfelelő állományból.
				</li>
				<li>
					<code>const router = express.Router();</code> -
					vegyük át az <code>app</code>-tól és adjuk a
					<code>router</code> objektumnak az útvonalkezelést.
				</li>
				<li>
					<code>router.get('/', getMain);</code> -
					a <code>HTTP GET</code> metódus (<span class="kiemel">CRUD Read</span>) művelet megvalósítása a
					<code>getMain</code> függvénnyel.
				</li>
			</ol>
			<p>Módosítások a <code>server.mjs</code> állományban.</p>
			<ol>
				<li>
					<code>import mainRouter from './routes/mainRoutesBackend.mjs';</code>
					- importáljuk be az előbb létrehozott
					<code>router</code>-t a megfelelő állományból.
				</li>
				<li>
					<code>app.use('/api', mainRouter);</code> - a
					<code>use</code>
					<span class="kiemel">middleware</span> segítségével
					dolgozzuk ki a <code>/api</code> -
					<span class="kiemel">route</span>-ot.
				</li>
				<li>
					<code>app.use((req, res) => {});</code> - nem létező
					<code>route</code> kezelése. Látható, hogy hiányzik
					<code>handler</code> függvény elől a
					<code>route</code> jelölése!
				</li>
			</ol>
		</div>
	</div>
	`;
