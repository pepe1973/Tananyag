let betolt_06 = `
	<h1>Fogalmak 5</h1> 
    <p>Ebben a részben megismerkedünk a backend programozással kapcsolatos fogalmakkal.</p>
	<div class="row-3">
		<div class="bal-3-kontener">
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
			<p><code>127.0.0.1:3500</code> - ez socket</p>
			<p><code>http://127.0.0.1:3500/</code> - ez endpoint</p>
			<p>
				<code>http://localhost:3500/cakes</code> - ez is
				endpoint
			</p>
			</div>
		<div class="kozep-3-kontener">
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
		<div class="jobb-3-kontener">
			<h3>Fogalom:</h3>
			<p>
				<span class="kiemel">CRUD:</span> az állandó adattárolás
				négy alapvető funkciójának betűszava: <span class="kiemel">létrehozás</span>,
				<span class="kiemel">olvasás</span>, <span class="kiemel">frissítés</span> 
				és <span class="kiemel">törlés</span>. Ezek a műveletek alapvető
				fontosságúak az alkalmazásokban és adatbázisokban lévő
				adatok kezeléséhez, lehetővé téve a felhasználók számára
				új rekordok hozzáadását, meglévő adatok lekérését,
				aktuális rekordok módosítását és régi adatok
				eltávolítását .
			</p>
		</div>
	</div>
	`;
