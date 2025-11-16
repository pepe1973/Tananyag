let betolt_01_jobb_03 = `
	<h1>Fogalmak 3</h1> 
    <p>
		Ebben a részben megismerkedünk a frontend programozással kapcsolatos fogalmakkal.
	</p>
	<div class="row-3">
		<div class="kontener">
			<h3>Fogalom:</h3>
			<p>
				<span class="kiemel">State:</span> egy objektum, amely egy komponens belső információit tárolja,
				és ez az információ az idő múlásával változhat. Amikor a <span class="kiemel">state</span> megváltozik (például felhasználói beavatkozás
				vagy adat lekérése miatt), a React automatikusan újrarajzolja a komponens felületét,
				hogy tükrözze az aktuális adatokat.
			</p>
			<h5>Főbb jellemzői:</h5>
			<ol>
				<li>
					<b>Adattárolás:</b> A <span class="kiemel">state</span> kulcs-érték párokat tartalmazó objektum,
					amely olyan adatokat tárol, amelyeket a komponensnek kezelnie kell.
				</li>
				<li>
					<b>Dinamikus UI:</b> Segítségével a komponensek dinamikusan képesek reagálni a változásokra,
					és frissíteni a felhasználói felületet.
				</li>
				<li>
					<b>Változó adattípusok:</b>  A <span class="kiemel">state</span>-ben tárolhatunk különböző típusú adatokat,
					mint például string, szám, boolean vagy tömb.
				</li>
				<li>
					<b>Minden hooknak megvan a maga funkciója:</b> Például a <code>useState</code> hook lehetővé teszi az
					állapot kezelését, míg az <code>useEffect</code> hook a mellékhatások kezelésére szolgál,
					mint például az adatok lekérdezése.
				</li>
			</ol>
		</div>
		<div class="kontener">
			<h3>Fogalom:</h3>
			<p>
				<span class="kiemel">Hook:</span> olyan speciális funkciók, amelyek lehetővé teszik állapotkezelést és
				más React-funkciók, például az életciklus-műveletek használatát funkcionális komponensekben, anélkül,
				hogy osztályokat kellene írni. Ezzel leegyszerűsítik és olvashatóbbá teszik a kódot,
				és lehetővé teszik a logika újrafelhasználását több komponens között.
			</p>
			<h5>Főbb jellemzői:</h5>
			<ol>
				<li>
					<b>Lehetővé teszik az állapotkezelést funkcionális komponensekben:</b> Korábban
					erre csak osztályalapú komponensek voltak képesek.
				</li>
				<li>
					<b>Leegyszerűsítik a kód írását:</b> Egyszerűbbé és olvashatóbbá teszik a fejlesztést azáltal,
					hogy a funkciókat közvetlenül a komponensekbe lehet integrálni.
				</li>
				<li>
					<b>Újrafelhasználhatóvá teszik a logikát:</b> Segítenek a logikai egységek kinyerésében és
					megosztásában, így azok több helyen is felhasználhatók.
				</li>
				<li>
					<b>Minden hooknak megvan a maga funkciója:</b> Például a <code>useState</code> hook lehetővé teszi az
					állapot kezelését, míg az <code>useEffect</code> hook a mellékhatások kezelésére szolgál,
					mint például az adatok lekérdezése.
				</li>
			</ol>
		</div>
		<div class="kontener">
			<h3>Fogalom:</h3>
			<p>
				<span class="kiemel">useState():</span> egy <span class="kiemel">React Hook</span>, amely lehetővé teszi a
				funkcionális komponensek számára, hogy állapotot kezeljenek. Használatakor egy tömböt ad vissza,
				amely az aktuális állapotot és egy állapotfrissítő funkciót tartalmaz. Ezzel a komponensek a saját
				<span class="kiemel">state</span>-jüket tárolhatják és tudják módosítani, például gomb kattintására.
			</p>
			<h5>Főbb tulajdonságai:</h5>
			<ol>
				<li>
					<b>Kezdeti érték:</b> A <span class="kiemel">useState</span> egy kezdeti értéket fogad el argumentumként,
					ami az állapot kezdeti értéke lesz.
				</li>
				<li>
					<b>State (állapot):</b>  A <span class="kiemel">useState</span> visszaadott tömbjének első eleme az aktuális állapotérték.
				</li>
				<li>
					<b>Állapotfrissítő funkció:</b> A tömb második eleme egy funkció, amit meghívva az állapot frissíthető,
					és a komponens újra renderelhető.
				</li>
			</ol>
			<p>
				<a href="https://www.w3schools.com/react/react_usestate.asp" target="_blank">w3schools: useState()</a>
			</p>
		</div>
		<div class="kontener">
			<h3>Fogalom:</h3>
			<p>
				<span class="kiemel">useEffect():</span> egy React-horog, amellyel a komponensek renderelése után tudsz
				mellékhatásokat (pl. adat lekérése, feliratkozások, DOM manipuláció) végrehajtani.
				A <span class="kiemel">useEffect</span> funkciója, hogy elérhető,
				hogy a komponens a DOM frissítései után fusson le, és ezen a módon tudsz elvégezni bizonyos műveleteket,
				mint például API-hívásokat kezdeményezni vagy feliratkozásokat kezelni.
			</p>
			<h5>Főbb tulajdonságai:</h5>
			<ol>
				<li>
					<b>Fő funkció:</b>  Lehetővé teszi a mellékhatások kezelését, miután a komponens már lefutott és megjelent a DOM-ban.
				</li>
				<li>
					<b>Felhasználás:</b>  Hasznos adatlekérésekhez, feliratkozásokhoz és manuális DOM-manipulációkhoz.
				</li>
				<li>
					<b>Működés:</b> Átadsz neki egy függvényt, amely a komponens renderelése után fog futni,
					így a React "emlékszik" rá és végrehajtja.
				</li>
			</ol>
			<p>
				<a href="https://www.w3schools.com/react/react_useeffect.asp" target="_blank">w3schools: useEffect()</a>
			</p>
		</div>
	</div>
	`;

export default betolt_01_jobb_03;
