let betolt_17 = `
	<h1>Cloudinary beállítása</h1> 
    <p>Következő lépésként összekötjük a <span class="kiemel">webszerver</span>ünket 
	a <span class="kiemel">Cloudinary</span> felhőalkalmazással. Ide fogjuk feltölteni a képeinket.</p>
	<div class="row-3">
		<div class="bal-3-kontener">
			<h3>Parancssor:</h3>
			<div class="kod-kontener">
			<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend/utils</span></code></p>
			<p><code class="parancs">$ cd ..</code></p>
			<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend</span></code></p>
			<p><code class="parancs">$ cd middlewares</code></p>
			<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend/middlewares</span></code></p>
			<p><code class="parancs">$ touch pictureToCloudinary.mjs pictureDeleteFromCloudinary.mjs</code></p>
			</div>
			</div>
		<div class="kozep-3-kontener">
		<h3>Visual Studio Code:</h3>
		<code>pictureToCloudinary.mjs</code>
			<pre>
import dotenv from 'dotenv';
dotenv.config();
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_API_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const pictureUploader = async (req, res, next) => {
    const { kep1, kep2, kep3 } = req.body;
    const results1 = await cloudinary.uploader.upload(kep1);
    const url1 = cloudinary.url(results1.public_id);
    const results2 = await cloudinary.uploader.upload(kep2);
    const url2 = cloudinary.url(results2.public_id);
    const results3 = await cloudinary.uploader.upload(kep3);
    const url3 = cloudinary.url(results3.public_id);

    req.body.kep = [url1, url2, url3];

    next();
};

export default pictureUploader;
			</pre
			>
			<code>pictureDeleteFromCloudinary.mjs</code>
			<pre>
import dotenv from 'dotenv';
dotenv.config();
import { v2 as cloudinary } from 'cloudinary';
<span class="kiemel">import Cake from '../models/Cake.mjs';</span>

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_API_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const pictureDeleter = async (req, res, next) => {
    const { id } = req.params;
    <span class="kiemel">const torolKep = await Cake.findById({ _id: id });</span>
    const kep1 = torolKep.kepek[0].split('/')[6].split('?')[0];
    const kep2 = torolKep.kepek[1].split('/')[6].split('?')[0];
    const kep3 = torolKep.kepek[2].split('/')[6].split('?')[0];

    await cloudinary.uploader.destroy(kep1.toString());
    await cloudinary.uploader.destroy(kep2.toString());
    await cloudinary.uploader.destroy(kep3.toString());

    next();
};

export default pictureDeleter;
			</pre>
		</div>
		<div class="jobb-3-kontener">
		<h3>Magyarázat:</h3>
		<p>
				Lépjünk ki a <code>utils</code> mappából.
			</p>
			<p>
				Ehhez adjuk ki a
				<code
					>cd ..</code
				>
				utasítást a parancssorban. 
			</p>
		<p>
				Lépjünk be a <code>middlewares</code> mappába.
			</p>
			<p>
				Ehhez adjuk ki a
				<code
					>cd middlewares</code
				>
				utasítást a parancssorban. 
			</p>
			<p>
				A <code>middlewares</code> mappában hozzunk létre egy <code>pictureToCloudinary.mjs</code> és egy 
				<code>pictureDeleteFromCloudinary.mjs</code> nevű állományt.
			</p>
			<p>
				Ehhez adjuk ki a
				<code
					>touch pictureToCloudinary.mjs pictureDeleteFromCloudinary.mjs</code
				>
				utasítást a parancssorban. 
			</p>
			<p>Csak a <span class="kiemel">Git Bash</span> felületen működik!</p>
			<p>A <code>pictureUploader</code> és <code>pictureDeleter</code> függvények a <span class="kiemel">middleware</span>k.</p>
			<p>
				Jelen esetben három képet tudunk egyszerre kezelni a
				<span class="kiemel">Cloudinary</span>-vel.
			</p>
			<p>Ezeket az utasításokat így jegyezzük meg.</p>
			<p>Vagy csak másoljuk ki innen.</p>
		</div>
		<div class="jobb-3-kontener">
		<h3>Magyarázat:</h3>
		<p>A <code>pictureDeleteFromCloudinary.mjs</code> állomány szerkesztése.</p>
		<ol>
				<li>
					<code>import Cake from '../models/Cake.mjs';</code> -
					a <code>Cake</code> modellről később lesz szó.
				</li>
				<li>
					<code>const torolKep = await Cake.findById({ _id: id });</code> -
					a <code>Cake</code> modellről később lesz szó.
				</li>
			</ol>
		</div>
	</div>
	`;
