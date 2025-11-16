let betolt_01_jobb_02 = `
	<h1>Fogalmak 2</h1> 
    <p>
		Ebben a részben megismerkedünk a backend programozással kapcsolatos fogalmakkal.
	</p>
	<div class="row-3">
		<div class="kontener">
			<h3>Fogalom:</h3>
			<p>
				<span class="kiemel">ES6:</span> az ECMAScript 6 rövidítése, 
				ami a JavaScript 2015-ben kiadott hatodik, 
				nagy jelentőségű verziója. 
				Számos új funkciót és szintaxisjavítást vezetett be, 
				amelyek megkönnyítik és hatékonyabbá teszik a kódírást, 
				például a <code>let</code> és <code>const</code> kulcsszavakat, 
				a <span class="kiemel">nyílfüggvények</span>et, 
				a <span class="kiemel">destruktúrát</span>, 
				az <span class="kiemel">osztály</span>okat 
				és a <span class="kiemel">modul</span>okat. 
			</p>
			<h5>Főbb tulajdonságok:</h5>
			<ol>
				<li>
					<b>let</b> és <b>const:</b> új változódeklarációs
					kulcsszavak, amelyek a hatókör (<span class="kiemel"
						>scope</span
					>) szempontjából jobb kontrollt biztosítanak a
					hagyományos <code>var</code>
					helyett.
				</li>
				<li>
					<b>Arrow function:</b> (nyílfüggvények) részben
					rövidebb szintaxist kínálnak a függvények írásához,
					és automatikusan kezelik a
					<code>this</code> kulcsszót.
				</li>
				<li>
					<b>Destruction: </b> (destruktúra) lehetővé teszi
					objektumok vagy tömbök komplex szerkezeteinek
					egyszerűbb részekre bontását.
				</li>
				<li>
					<b>Spread operator:</b> kiterjeszti a tömböt vagy
					objektumot elemekre vagy tulajdonságokra, például
					függvények argumentumaiként.
				</li>
				<li>
					<b>Class based inheritance: </b> JavaScriptben az
					osztályok bevezetésével egyszerűbbé vált az
					objektumorientált programozás.
				</li>
				<li>
					<b>Modules:</b> beépített támogatást hozott a
					modulokhoz, ami segít a kód szervezésében.
				</li>
				<li>
					<b>Promise:</b> egyszerűsíti az aszinkron műveletek
					kezelését.
				</li>
				<li>
					<b>Default parameters:</b> lehetőséget ad arra, hogy
					függvényparamétereknek alapértelmezett értékeket
					adjunk.
				</li>
			</ol>
		</div>
		<div class="kontener">
			<h3>Fogalom:</h3>
			<p>
				<span class="kiemel">MVC:</span>
				(Model-View-Controller) egy szoftvertervezési minta,
				amely az alkalmazás logikáját három fő komponensre
				bontja: <b>M</b>odel (modell, adatok és üzleti logika),
				<b>V</b>iew (nézet, felhasználói felület) és
				<b>C</b>ontroller (vezérlő, logikai központ, amely
				összeköti a kettőt). Célja, hogy elkülönítse az
				adatkezelést a megjelenítéstől, ami megkönnyíti a
				fejlesztést és a karbantartást.
			</p>
			<h5>Három fő komponens:</h5>
			<ol>
				<li>
					<b>Model (modell):</b> Ez kezeli az alkalmazás
					adatait és az üzleti logikát. Például, a modell
					felelős az adatbázissal való kommunikációért, vagy
					az adatok feldolgozásáért.
				</li>
				<li>
					<b>View (nézet):</b> Ez felelős az adatok
					megjelenítéséért a felhasználó számára. Ez lehet egy
					grafikus felület, egy weboldal, vagy egy táblázat. A
					nézet nem tartalmaz üzleti logikát, csak megjeleníti
					az adatokat.
				</li>
				<li>
					<b>Controller (vezérlő):</b> Ez a komponens kezeli a
					felhasználói bemenetet és összeköti a modellt a
					nézettel. Például, ha a felhasználó egy gombra
					kattint, a vezérlő felveszi a kérést, módosítja az
					adatokat a modellben, majd a modell által adott új
					adatok alapján frissíti a nézetet.
				</li>
			</ol>
		</div>
		<div class="kontener">
			<h3>Fogalom:</h3>
			<p>
				<span class="kiemel">Dependency:</span> az
				<span class="kiemel">Express.js</span>-ben a
				<sapn class="kiemel">függőség</sapn> egy szükséges
				<span class="kiemel">npm</span> csomag vagy könyvtár,
				amelyet az alkalmazásnak futtatnia kell.
			</p>
			<p>
				A leggyakoribb példa maga az
				<span class="kiemel">express</span> keretrendszer.
			</p>
			<p>
				Ezek a <code>package.json</code> állományban vannak
				felsorolva, és automatikusan települnek a futtatásakor:
				<code>npm install</code>.
			</p>
		</div>
		<div class="kontener">
			<h3>Fogalom:</h3>
			<p>
				<span class="kiemel">JSON:</span> (JavaScript Object Notation) egy ember által olvasható, könnyű súlyú szöveges formátum, 
				amelyet rendszerek közötti adatcserére használnak. Két kulcsfontosságú struktúrára épül: 
				<span class="kiemel">kulcs-érték</span> párokra és <span class="kiemel">tömbökre</span>, és sok programnyelv képes feldolgozni. 
				Bár eredetileg a JavaScriptből származik, nyelvfüggetlen, és általában webszerverekből 
				weboldalakra történő adatátvitelhez használják. 
			</p>
			<h5>Főbb jellemzői:</h5>
			<ol>
				<li>
					<b>Ember által olvasható:</b> Könnyen olvasható és írható a szoftverfejlesztők számára, 
						ami leegyszerűsíti az adatokat érthetővé tévő folyamatokat.
				</li>
				<li>
					<b>Könnyű súlyú:</b> Mivel szövegalapú, viszonylag kis méretű, ami gyors és hatékony adatátvitelt tesz lehetővé.
				</li>
				<li>
					<b>Nyelvfüggetlen:</b> Annak ellenére, hogy a neve a JavaScriptre utal, a JSON szabványt számos programozási nyelv képes értelmezni és használni.
				</li>
				<li>
					<b>Kulcs-érték párok és tömbök:</b> Az adatok strukturálása kulcs-érték párok és tömbök kombinációján alapul. Például:
					<ul>
						<li><b>Kulcs-érték:</b> { "név": "Példa", "kor": 30 }</li>
						<li><b>Tömb:</b> ["alma", "körte", "banán"]</li>
					</ul>
				</li>
			</ol>
		</div>
	</div>
	`;

export default betolt_01_jobb_02;
