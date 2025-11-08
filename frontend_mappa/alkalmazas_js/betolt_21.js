let betolt_21 = `
	<h1>A <code>routes/cakes</code> mappában lévő <code>cakesRoutesFrontend.mjs</code> állomány szerkesztése</h1> 
    <p>Ebben a lépésben az <span class="kiemel">MVC</span>-vel összefüggésben létrehozzuk a fenti állományt. Ebben fogjuk össze 
	a <span class="kiemel">CRUD</span> műveleteket.</p>
	<div class="row-3">
		<div class="kontener">
			<h3>Parancssor:</h3>
			<div class="kod-kontener">
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend/controllers/cakes</span></code></p>
				<p><code class="parancs">$ cd ..</code></p>
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend/controllers</span></code></p>
				<p><code class="parancs">$ cd ..</code></p>
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend</span></code></p>
				<p><code class="parancs">$ cd routes</code></p>
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend/routes</span></code></p>
				<p><code class="parancs">$ cd cakes</code></p>
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend/routes/cakes</span></code></p>
				<p><code class="parancs">$ touch mainRoutesFrontend.mjs</code></p>
			</div>
		</div>
		<div class="kontener">
			<h3>Visual Studio Code:</h3>
			<div class="keret">
			<code>mainRoutesFrontend.mjs</code>
			<pre>
import express from 'express';
import { getAllCakesFrontend } from '../../controllers/cakes/cakesControllersFrontend.mjs';
const router = express.Router();

router.get('/', getAllCakesFrontend);

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
<span class="kiemel">import cors from 'cors';</span>

const PORT = process.env.PORT || 3500;
const app = express();

const dir = import.meta.dirname;
app.use(express.static(path.resolve(dir, 'public')));
app.set('view engine', ejs);
app.use(express.json());
<span class="kiemel">app.use(cors());</span>

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

<span class="kiemel">import cakesFrontendRouter from './routes/cakes/cakesRoutesFrontend.mjs';
app.use('/api/cakes-frontend', cakesFrontendRouter);</span>

import newCakeRouter from './routes/cakes/newCakeRoutes.mjs';
app.use('/api/new-cake', newCakeRouter);

import oneCakeRouter from './routes/cakes/oneCakeRoutesBackend.mjs';
app.use('/api/one-cake-backend', oneCakeRouter);

app.use((req, res) => {
    try {
        res.statusCode = 404;
        return res.render('404.ejs');
    } catch (error) {
        res.statusCode = 500;
        return res.json({ msg: 'Általános szerver hiba!' });
    }
});

			</pre></div>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<p>
				Lépjünk ki a <code>controllers/cakes</code> mappából.
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
				Hozzunk létre egy <code>mainRoutesFrontend.mjs</code> nevű állományt.
			</p>
			<p>
				Ehhez adjuk ki a
				<code>touch mainRoutesFrontend.mjs</code>
				utasítást a parancssorban. 
			</p>
			<p>Csak a <span class="kiemel">Git Bash</span> felületen működik!</p>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<p>
				A <code>mainRoutesFrontend.mjs</code> állomány
				szerkesztése.
			</p>
			<p>A folyamat hasonló <code>backend/routes/cakes/cakesRoutesBackend.mjs</code> állományban vázoltakhoz.</p>
			<p>Módosítások a <code>server.mjs</code> állományban.</p>
			<ol>
				<li>
					<code>import cors from 'cors';</code> - importáljuk be a <code>cors</code> csomagot.
				</li>
				<li>
					<code>app.use(cors());</code> - állítsuk be a <code>cors</code> csomag segítségével a <span class="kiemel">frontend</span>
					és a <span class="kiemel">backend</span> közötti kommunikációt.
				</li>
				<li>
					<code>import cakesFrontendRouter from './routes/cakes/cakesRoutesFrontend.mjs'</code>
					- importáljuk be az előbb létrehozott
					<code>router</code>-t a megfelelő állományból.
				</li>
				<li>
					<code>app.use('/api/cakes-frontend', cakesFrontendRouter);</code> - a
					<code>use</code>
					<span class="kiemel">middleware</span> segítségével
					dolgozzuk ki a <code>/api/cakes-frontend</code> -
					<span class="kiemel">route</span>-ot.
				</li>
			</ol>
		</div>
	</div>
	`;
