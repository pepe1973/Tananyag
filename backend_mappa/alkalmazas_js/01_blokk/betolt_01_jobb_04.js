let betolt_01_jobb_04 = `
	<h1>Fogalmak 4</h1> 
    <p>
		Ebben a részben megismerkedünk a backend programozással kapcsolatos fogalmakkal.
	</p>
	<div class="row-3">
		<div class="kontener">
			<h3>Fogalom:</h3>
			<p>
				<span class="kiemel">MongoDb:</span> egy
				<span class="kiemel">NoSQL</span>
				adatbázis-kezelő rendszer, amely rugalmas,
				dokumentum-alapú struktúrája révén nagy mennyiségű adat
				tárolására alkalmas. A hagyományos táblázatok helyett
				<span class="kiemel">JSON-szerű dokumentumokat</span>
				(BSON formátumban) használ, ami gyorsabb fejlesztést és
				könnyebb adatkezelést tesz lehetővé. Különösen népszerű
				a modern alkalmazásfejlesztésben és a felhőalapú
				rendszerekben, mivel könnyen skálázható.
			</p>
			<h5>Főbb tulajdonságai:</h5>
			<ol>
				<li>
					<b>Dokumentum-alapú:</b> Az adatok tárolására
					rugalmas, JSON-szerű dokumentumokat használ, nem
					pedig relációs táblázatokat és sorokat.
				</li>
				<li>
					<b>NoSQL:</b> Ez egy nem-relációs adatbázis, amely
					rugalmasságot és skálázhatóságot kínál.
				</li>
				<li>
					<b>Skálázható:</b> Képes elosztott rendszerek és
					klaszterek kezelésére, így könnyen skálázható a
					növekvő terheléshez.
				</li>
				<li>
					<b>Nyílt forráskódú:</b> A <span class="kiemel">MongoDB</span> egy nyílt
					forráskódú szoftver.
				</li>
			</ol>
		</div>
		<div class="kontener">
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
			<p>
				<b>Model = Collection + Schema + CRUD logika</b>
			</p>
		</div>
		<div class="kontener">
			<h3>Fogalom:</h3>
			<p>
				<span class="kiemel">Promise:</span> programozásban egy
				objektum, amely egy
				<span class="kiemel">aszinkron</span> (nem egyidejű)
				művelet (például egy hálózati kérés vagy
				adatbázis-művelet) végső befejezését (<span
					class="kiemel"
					>fulfilled</span
				>) vagy sikertelenségét (<span class="kiemel"
					>rejected</span
				>) jelenti. A <code>promise</code>-ek megkönnyítik az
				aszinkron kód írását és karbantartását a hagyományos,
				visszahívó függvényekkel szemben, mivel strukturáltabb
				megközelítést kínálnak az eredmények és hibák
				kezelésére.
			</p>
		</div>
		<div class="kontener">
			<h3>Fogalom:</h3>
			<p>
				<span class="kiemel">Middleware:</span> olyan függvény,
				amely hozzáféréssel rendelkezik a
				<code>HTTP Request</code> és a
				<code>HTTP Response</code> objektumhoz és az alkalmazás
				kérés-válasz ciklusában a következő
				<code>middleware</code> függvényhez.
			</p>
			<p>
				A következő
				<code>middleware</code> függvényt általában egy
				<code>next</code> nevű változó jelöli.
			</p>
		</div>
	</div>
	`;

export default betolt_01_jobb_04;
