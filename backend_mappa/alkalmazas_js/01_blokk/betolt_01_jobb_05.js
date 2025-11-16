let betolt_01_jobb_05 = `
	<h1>Fogalmak 5</h1> 
    <p>
		Ebben a részben megismerkedünk a backend programozással kapcsolatos fogalmakkal.
	</p>
	<div class="row-3">
		<div class="kontener">
			<h3>Fogalom:</h3>
			<p>
				<span class="kiemel">Endpoint:</span> a
				<span class="kiemel">végpont</span>ok olyan fizikai
				eszközök, amelyek számítógép-hálózathoz csatlakoznak, és
				információkat cserélnek velük. Néhány példa a
				végpontokra: mobileszközök, asztali számítógépek,
				virtuális gépek, beágyazott eszközök és kiszolgálók.
			</p>
			<p>
				<span class="kiemel">Socket:</span> egy kétirányú
				kommunikációs kapcsolat végpontja, amely két program
				közötti adott kapcsolatot képvisel. A végpont (endpoint)
				egy tágabb fogalom, amely utalhat egy socketre (IP-cím
				és portszám által meghatározott) vagy egy fizikai
				eszközre, például egy számítógépre vagy szerverre.
				Hálózatépítésben a végpont egy IP-cím és egy portszám
				kombinációja, míg a socket egy szoftverobjektum, amelyet
				az alkalmazások az adatok küldésére és fogadására
				használnak az adott végponton keresztül.
			</p>
			<h5>Példák:</h5>
			<p>
				<code>127.0.0.1:3500</code> - ez socket
			</p>
			<p>
				<code>http://127.0.0.1:3500/</code> - ez endpoint
			</p>
			<p>
				<code>http://localhost:3500/cakes</code> - ez is
				endpoint
			</p>
			</div>
		<div class="kontener">
			<h3>Fogalom:</h3>
			<p>
				<span class="kiemel">Route:</span> egy olyan leképezés,
				amely a felhasználó böngészőkérését (egy adott URL
				alapján) a megfelelő kódhoz vagy oldalhoz irányítja a
				megjelenítéshez.
			</p>
			<p>
				Ez egy alapvető része annak , hogyan navigál egy webes
				alkalmazás, és meghatározza, hogy milyen tartalmat,
				funkciót vagy erőforrást jelenítsen meg, amikor a
				felhasználó meglátogat egy adott webcímet.
			</p>
			<h5>Hogyan működik:</h5>
			<ol>
				<li>
					<b>Request (kérés):</b> A felhasználó beír egy
					URL-címet, például https://example.com/about, vagy
					rákattint egy hivatkozásra.
				</li>
				<li>
					<b>Routing (útvonaltervezés):</b> A webszerver vagy
					a kliensoldali alkalmazás ellenőrzi az
					útvonalszabályait, hogy egyezést találjon az
					URL-címmel.
				</li>
				<li>
					<b>Handler (kezelő):</b> Miután egyezést talált, az
					útvonal egy adott kezelőhöz irányítja a kérést. Ez a
					kezelő lehet:
					<ul>
						<li>
							Egy fizikai fájl (például egy .html vagy egy
							.ejs fájl).
						</li>
						<li>
							Egy függvény vagy osztály, amely feldolgozza
							a kérést és létrehozza a tartalmat.
						</li>
					</ul>
				</li>
				<li>
					<b>Response (válasz):</b> A kezelő végrehajtja a
					kérést, és a szerver vagy alkalmazás visszaküldi a
					kért tartalmat a felhasználó böngészőjének.
				</li>
			</ol>
		</div>
		<div class="kontener">
			<h3>Fogalom:</h3>
			<p>
				<span class="kiemel">Request params:</span> kérés paraméterek lehetővé teszik az adatok átadását egy API-végpontnak kérés kezdeményezésekor. 
				Fontos részét képezik a REST API-k tervezésének és használatának. 
			</p>
			<p>
				A <span class="kiemel">request params</span>, más néven <span class="kiemel">query params</span> (lekérdezési paraméterek)
				vagy <span class="kiemel">URL params</span> (URL-paraméterek), kulcs-érték párok, 
				amelyeket a rendszer hozzáfűz az URL-hez HTTP-kérés kezdeményezésekor. 
				A paraméterek láthatók az URL-ben, és lehetővé teszik a kliens számára, 
				hogy egyszerű és szabványosított módon továbbítson adatokat az API-nak.
			</p>
			<h5>Típusok:</h5>
			<ol>
				<li><b>Query Parameters:</b> a lekérdezési paraméterek a leggyakoribb típusok. 
				Ezeket egy <code>?</code> karakter után fűzzük hozzá az URL-útvonalhoz:
				<p><code>/users?page=1&per_page=20</code></p>
				</li>
			</ol>
			<ol>
				<li><b>Path Parameters:</b> Az elérési út paraméterei beépülnek magába az URL elérési útjába:
				<p><code>/users/{userId}</code></p>
				</li>
			</ol>
		</div>
		<div class="kontener">
			<h3>Fogalom:</h3>
			<p>
				<span class="kiemel">req.params:</span> egy objektum, amely tartalmazza az URL-útvonalból kinyert paramétereket, 
				például a <code>/user/:name</code> útvonalban a <code>:name</code>-hez tartozó értéket. 
				Ez segít a szervernek megérteni a kérés specifikus részleteit, lehetővé téve az adatok kinyerését közvetlenül az 
				<span class="kiemel">URL</span>-ből. 
			</p>
			<ol>
				<li><b>Hogyan működik:</b> Ha egy útvonalat a <code>user/:name</code> formában definiálsz, 
				a <code>req.params.name</code> hozzáférhet a felhasználó nevéhez az <span class="kiemel">URL</span>-ből.</li>
				<li><b>Szerepe:</b> A <span class="kiemel">req.params</span> objektum segít az azonosításon alapuló lekérések megvalósításában, 
				például egy adott felhasználó profiljának lekérdezésében.</li>
				<li><b>Példa:</b> Egy <code>GET /user/123</code> kérés esetén a <code>req.params.id</code> értéke 123 lenne. </li>
			</ol>
		</div>
	</div>
	`;

export default betolt_01_jobb_05;
