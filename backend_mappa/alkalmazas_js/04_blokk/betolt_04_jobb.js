let betolt_04_jobb = `
	<h1>Cloudinary beállítása</h1> 
    <p>
		Következő lépésként összekötjük a <span class="kiemel">webszerver</span>ünket
		a <span class="kiemel">Cloudinary</span> felhőalkalmazással. Ide fogjuk
		feltölteni a képeinket.
	</p>
	<div class="row-3">
		<div class="kontener">
			<h3>Parancssor:</h3>
			<div class="kod-kontener">
				<p>
					<code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend/utils</span></code>
				</p>
				<p>
					<code class="parancs">$ cd ..</code>
				</p>
				<p>
					<code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend</span></code>
				</p>
				<p>
					<code class="parancs">$ cd middlewares</code>
				</p>
				<p>
					<code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend/middlewares</span></code>
				</p>
				<p>
					<code class="parancs">$ touch pictureToCloudinary.mjs pictureDeleteFromCloudinary.mjs</code>
				</p>
			</div>
		</div>
		<div class="kontener">
			<h3>Visual Studio Code:</h3>
			<code>pictureToCloudinary.mjs</code>
			<a href="./alkalmazas_js/04_blokk/megoldasok/pictureToCloudinary.mjs" download>
				<img src="./alkalmazas_js/04_blokk/images/kep_01.png" title="A képre kattintva a kód letölthető!" />
			</a>
			<code>pictureDeleteFromCloudinary.mjs</code>
			<a href="./alkalmazas_js/04_blokk/megoldasok/pictureDeleteFromCloudinary.mjs" download>
				<img src="./alkalmazas_js/04_blokk/images/kep_02.png" title="A képre kattintva a kód letölthető!" />
			</a>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<p>
				Lépjünk ki a <code>utils</code> mappából.
			</p>
			<p>
				Ehhez adjuk ki a
				<code>cd ..</code>
				utasítást a parancssorban. 
			</p>
			<p>
				Lépjünk be a <code>middlewares</code> mappába.
			</p>
			<p>
				Ehhez adjuk ki a
				<code>cd middlewares</code>
				utasítást a parancssorban. 
			</p>
			<p>
				A <code>middlewares</code> mappában hozzunk létre egy <code>pictureToCloudinary.mjs</code> és egy 
				<code>pictureDeleteFromCloudinary.mjs</code> nevű állományt.
			</p>
			<p>
				Ehhez adjuk ki a
				<code>touch pictureToCloudinary.mjs pictureDeleteFromCloudinary.mjs</code>
				utasítást a parancssorban. 
			</p>
			<p>
				Csak a <span class="kiemel">Git Bash</span> felületen működik!
			</p>
			<p>
				A <code>pictureUploader</code> és <code>pictureDeleter</code> függvények a <span class="kiemel">middleware</span>k.
			</p>
			<p>
				Jelen esetben három képet tudunk egyszerre kezelni a
				<span class="kiemel">Cloudinary</span>-vel.
			</p>
			<p>
				Ezeket az utasításokat így jegyezzük meg.
			</p>
			<p>
				Vagy csak másoljuk ki innen.
			</p>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<p>
				A <code>pictureDeleteFromCloudinary.mjs</code> állomány szerkesztése.
			</p>
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

export default betolt_04_jobb;
