let betolt_03 = `
	<h1>Fogalmak 2</h1> 
    <p>Ebben a részben megismerkedünk a frontend programozással kapcsolatos fogalmakkal.</p>
	<div class="row-3">
		<div class="kontener">
			<h3>Fogalom:</h3>
			<p>
				<span class="kiemel">JSX:</span> a JavaScript egy szintaxisbővítménye, amely HTML-szerű jelölést tesz
				lehetővé JavaScript-fájlokon belül, és általában a React nevű JavaScript könyvtárral használják
				felhasználói felületek (UI) létrehozásához. Ez leegyszerűsíti a komponensek írását és a webes
				felületek megjelenítésének kezelését. A JSX kódot futtatás előtt le kell fordítani egyszerű JavaScriptre.
			</p>
			<h5>Főbb tulajdonságok:</h5>
			<ol>
				<li>
					<b>Mi a funkciója:</b> Lehetővé teszi, hogy a JavaScriptben írj HTML-hez hasonló struktúrát,
					ami intuitívabbá teszi a UI komponensek leírását.
				</li>
				<li>
					<b>Hogyan működik: </b> Bár úgy néz ki, mint a HTML, valójában egy JavaScript kiterjesztés.
					A végső futtatás előtt egy fordító
					(például a Babel) alakítja át hagyományos JavaScript kóddá.
				</li>
				<li>
					<b>Miért használják:</b> Gyakran használják a React-tel,
					mert nagymértékben leegyszerűsíti és olvashatóbbá teszi a komponensek strukturálását.
				</li>
			</ol>
		</div>
		<div class="kontener">
			<h3>Fogalom:</h3>
			<p>
				<span class="kiemel">JSX komponens:</span>
				egy újrafelhasználható felhasználói felületi darab, amely JavaScript függvényhez hasonlít,
				és JSX (JavaScript XML) szintaxist használ a megjelenítendő UI leírására. Ezek a komponensek a
				képernyőn megjelenő dolgokat írják le, szülő komponensektől kapnak bemenetet
				(<span class="kiemel">props</span>),
				és tetszőleges számú bemenetet fogadnak.
			</p>
			<h5>Főbb tulajdonságok:</h5>
			<ol>
				<li>
					<b>Újrafelhasználható:</b> Lehetővé teszik, hogy a UI-t kisebb,
					független részekre oszd, amiket többször is felhasználhatsz.
				</li>
				<li>
					<b>JavaScript alapú:</b> Bár a szintaxis XML-re hasonlít, valójában JavaScript kódról van szó,
					amelyet a böngésző nem ismer fel közvetlenül, de a build folyamatban JavaScript kóddá alakít át,
					például a Babel segítségével.
				</li>
				<li>
					<b>Props bevitele:</b> Bemenetként "props" (tulajdonságokat) kapnak, amelyek meghatározzák,
					hogyan kell kinézniük és viselkedniük.
				</li>
				<li>
					<b>Visszatérési érték:</b> A komponens visszatér egy React elemmel, amely leírja,
					mi jelenik meg a képernyőn.
				</li>
			</ol>
		</div>
		<div class="kontener">
			<h3>Fogalom:</h3>
			<p>
				<span class="kiemel">props:</span> a Reactben az adatok átvitelének módja egyik komponensből a másikba,
				leggyakrabban szülő komponensből gyermek komponensbe. Ez teszi a komponenseket újrafelhasználhatóvá,
				mivel a szülő komponens képes az adatokat (például egy termék nevét, árát) a gyermek komponensnek átadni,
				a gyermek pedig ezeket megjelenítheti. A props bemenetként szolgál a komponensnek, és írásvédett (read-only),
				ami azt jelenti, hogy a fogadó komponens nem módosíthatja azokat.
			</p>
			<h5>Főbb jellemzői:</h5>
			<ol>
				<li>
					<b>Adatátvitel:</b> A <span class="kiemel">props</span>-on keresztül a szülő komponens adatokat küldhet a gyermek komponensnek.
				</li>
				<li>
					<b>Írásvédett:</b> A gyermek komponens nem módosíthatja a kapott <span class="kiemel">props</span>-okat, csak felhasználhatja azokat.
				</li>
				<li>
					<b>Egyirányú áramlás:</b> Az adat a szülő komponensből a gyermek felé áramlik, nem fordítva.
				</li>
				<li>
					<b>Újrafelhasználhatóság:</b> Lehetővé teszi a komponensek többszöri felhasználását különböző adatokkal,
					így konzisztens felhasználói felületet hozhatunk létre.
				</li>
				<li>
					<b>Passzolás:</b> A <span class="kiemel">props</span>-okat JSX attribútumokként adjuk át a gyermek komponensnek, amikor azt a szülőben rendereljük.
				</li>
			</ol>
		</div>
		<div class="kontener">
			<h3>Fogalom:</h3>
			<p>
				<span class="kiemel">Dependency injection:</span> A <span class="kiemel">függőségbefecskendezés</span> egy olyan tervezési minta,
				amelyben egy objektum külső forrásból kapja meg a függőségeit, ahelyett, hogy belsőleg létrehozná azokat.
				Ezek a függőségek jellemzően szolgáltatások, objektumok vagy komponensek, amelyekre az objektum a feladatai
				végrehajtásához támaszkodik.
			</p>
			<p>
				Egyszerűbben fogalmazva, ahelyett, hogy egy objektum felelős lenne a függőségeinek példányosításáért,
				azokat gyakran egy keretrendszer injektálja bele konstruktorokon, metódusokon vagy settereken keresztül.
			</p>
			<h5>Főbb jellemzői:</h5>
			<ol>
				<li><b>Dependency (függőség):</b> Egy osztály vagy komponens, amelyre egy másik osztálynak szüksége
				van a működéséhez.</li>
				<li><b>Injection (befecskendezés):</b> Külső függőség ellátása egy osztály számára.</li>
			</ol>
		</div>
	</div>
	`;
