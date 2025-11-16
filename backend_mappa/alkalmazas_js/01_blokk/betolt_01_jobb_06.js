let betolt_01_jobb_05 = `
	<h1>Fogalmak 6</h1> 
    <p>
		Ebben a részben megismerkedünk a backend programozással kapcsolatos fogalmakkal.
	</p>
	<div class="row-3">
		<div class="kontener">
			<h3>Fogalom:</h3>
			<p>
				<span class="kiemel">req.body:</span> egy olyan objektum a szerveroldali webfejlesztésben, 
				amely a kérés (<span class="kiemel">request</span>) törzsében (<span class="kiemel">body</span>) küldött adatokat tartalmazza, 
				és leggyakrabban a <span class="kiemel">POST</span>, 
				<span class="kiemel">PUT</span> vagy <span class="kiemel">PATCH</span> metódusokkal 
				használják. Ez az adatokat (például felhasználói adatok, űrlapbeviteli mezők) tartalmazza, 
				amelyeket egy kliens küld a szervernek, például egy új felhasználó regisztrálásakor vagy egy meglévő erőforrás frissítésekor. 
			</p>
			<ol>
				<li><b>req:</b> Ez a "request" (kérés) rövidítése, a kérést reprezentáló objektum.</li>
				<li><b>body:</b>  Ez a kérés törzsére utal, amely azokat az adatokat tartalmazza, 
				amelyeket a kliens elküldött a szervernek a kérés elküldésekor.</li>
				<li><b>Példa:</b> Ha egy webalkalmazásban egy új felhasználót hozol létre egy űrlapon keresztül, 
				akkor a felhasználó neve és e-mail címe a <span class="kiemel">req.body</span> objektumban lesz elérhető, 
				így a szerver könnyen hozzáférhet és feldolgozhatja ezeket az adatokat, például egy adatbázisba való mentéshez.</li>
			</ol>
		</div>
		<div class="kontener">
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
		<div class="kontener">
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
		<div class="kontener">
			<h3>Fogalom:</h3>
			<p>
				<span class="kiemel">HTTP methods:</span> a HTTP
				metódusok parancsok, amelyek jelzik az erőforráson
				végrehajtandó kívánt műveletet, például az adatok
				<span class="kiemel">létrehozását</span>,
				<span class="kiemel">olvasását</span>,
				<span class="kiemel">frissítését</span> vagy
				<span class="kiemel">törlését</span>. A
				<span class="kiemel">Hypertext Transfer Protocol</span>
				(HTTP) protokollban használják őket a kliens szerverhez
				intézett kérésének céljának meghatározására. A
				leggyakoribb módszerek a GET, POST, PUT, PATCH és
				DELETE, amelyek a CRUD műveleteknek felelnek meg .
			</p>
			<h5>Leggyakoribb módszerek:</h5>
			<ol>
				<li>
					<b>GET:</b> Adatokat kér le a szerverről.
				</li>
				<li>
					<b>POST:</b> Adatokat küld a szervernek egy új
					erőforrás létrehozásához.
				</li>
				<li>
					<b>PUT:</b> Lecserél egy meglévő erőforrást a
					kérésben szereplő adatokkal, vagy létrehozza azt, ha
					az nem létezik.
				</li>
				<li>
					<b>PATCH:</b> Részleges módosítást alkalmaz egy
					erőforráson.
				</li>
				<li>
					<b>DELETE:</b> Törli a megadott erőforrást.
				</li>
				<li>
					<b>HEAD:</b> Csak az erőforrás fejlécadatait kéri
					le, a törzs nélkül.
				</li>
				<li>
					<b>OPTIONS:</b> Leírja a cél erőforráshoz elérhető
					kommunikációs lehetőségeket.
				</li>
			</ol>
		</div>
	</div>
	`;

export default betolt_01_jobb_05;
