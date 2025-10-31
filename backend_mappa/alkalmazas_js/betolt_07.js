let betolt_07 = `
	<h1>Fogalmak 6</h1> 
    <p>Ebben a részben megismerkedünk a backend programozással kapcsolatos fogalmakkal.</p>
	<div class="row-3">
		<div class="bal-3-kontener">
			<h3>Fogalom:</h3>
			<p>
				<span class="kiemel">View engine:</span> a nézetmotor
				egy szoftverkomponens, amely egy sablonfájlt (például
				HTML-t) vesz, és azt egy szerverről származó dinamikus
				adatokkal kombinálja, hogy létrehozzon egy végső
				HTML-oldalt, amelyet a felhasználó böngészőjébe
				küldenek.
			</p>
			<p>
				Sablonfeldolgozóként működik, áthidalva a szakadékot a
				szerver logikája és a kliens kijelzője között,
				megkönnyítve a dinamikus weboldalak létrehozását.
				Népszerű példák közé tartozik az EJS, a Pug és a
				Handlebars a Node.js-hez, valamint a Razor a .NET-hez.
			</p>
			<h5>Hogyan működik:</h5>
			<ol>
				<li>
					<b>Sablonok és adatok kombinálása:</b> Egy
					nézetmotor egy sablonfájlt - ami egy előre megírt
					HTML-struktúra speciális szintaxissal - egyesít a
					szerver által biztosított adatokkal.
				</li>
				<li>
					<b>Dinamikus tartalom megjelenítése:</b> Feldolgozza
					a sablont, a dinamikus adatokat a megfelelő helyekre
					injektálja, hogy teljes, valós idejű HTML kimenetet
					hozzon létre.
				</li>
				<li>
					<b>Elküldi a böngészőnek:</b> A kapott HTML-kódot
					ezután elküldi a kliens böngészőjének, hogy
					weboldalként jelenítse meg.
				</li>
				<li>
					<b>Leegyszerűsíti a fejlesztést:</b> A statikus és
					dinamikus tartalom kombinációjának kezelésével a
					view engine-ek leegyszerűsítik a dinamikus
					webalkalmazások létrehozásának és megjelenítésének
					folyamatát.
				</li>
			</ol>
			</div>
		<div class="kozep-3-kontener">
			<h3>Fogalom:</h3>
			<p>
				<span class="kiemel">express.static():</span> az
				<span class="kiemel">Express.JS</span> egy beépített
				köztes szoftverfüggvényt (<span class="kiemel"
					>middleware</span
				>), az <code>express.static()</code>-ot biztosít, amely
				lehetővé teszi statikus fájlok kiszolgálását az
				alkalmazásban. Ez a köztes szoftver egy könyvtár elérési
				utat fogad argumentumként, és a könyvtárban található
				fájlokat a megfelelő URL-útvonalakon szolgálja ki.
			</p>
			<p>
				Ez megkönnyíti a fájlok, például képek, CSS fájlok és
				kliensoldali JavaScript fájlok kiszolgálását a kliensnek
				anélkül, hogy egyéni kódot kellene írni. Egyszerűen adja
				meg a könyvtár elérési útját az
				<code>express.static()</code> használatával , és
				csatlakoztassa az alkalmazás gyökérútvonalához az
				<code>app.use()</code> használatával .
			</p>
		</div>
		<div class="jobb-3-kontener">
			<h3>Fogalom:</h3>
			<p>
				<span class="kiemel">MongoDb model:</span> a modell a
				<span class="kiemel">MongoDB</span>-ben egy
				adatbázis-gyűjteményt (<span class="kiemel"
					>collection</span
				>) képvisel, és meghatározza, milyen szerkezetű (séma
				alapján) <span class="kiemel">dokumentum</span>okat
				lehet abban tárolni.
			</p>
			<p>
				A modell egy JavaScript-osztály, amit a
				<span class="kiemel">Mongoose</span> a
				<span class="kiemel">Schema</span> alapján hoz létre.
			</p>
			<p>
				A modell segítségével tudunk adatokat olvasni,
				létrehozni, frissíteni és törölni a
				<span class="kiemel">MongoDB</span>-ben (<span
					class="kiemel"
					>CRUD</span
				>
				műveletek).
			</p>
			<p><b>Model = Collection + Schema + CRUD logika</b></p>
		</div>
	</div>
	`;
