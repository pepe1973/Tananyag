let betolt_03 = `
	<h1>Fogalmak 1</h1> 
    <p>Ebben a részben megismerkedünk a Python programozással kapcsolatos fogalmakkal.</p>
	<div class="row-3">
		<div class="kontener">
			<h3>Fogalom:</h3>
			<p>
				<span class="kiemel">Interpretált:</span> Az interpretált (értelmezett) nyelv egy 
				olyan programozási nyelv, 
				amelynek utasításait nem fordítják le előre gépi kóddá, hanem egy 
				<span class="kiemel">interpreter</span> (értelmező program) 
				futás közben alakítja át és hajtja végre azokat. Az értelmező program lépésenként 
				olvassa a forráskódot, és azonnal végre is hajtja az adott utasítást, mielőtt 
				továbbhaladna a következőre. Ez ellentétben áll a fordított nyelvekkel, amelyeknél a 
				teljes kódot előbb lefordítják futtatható fájlba, mielőtt elindulna. 
			</p>
			<h5>Főbb tulajdonságok:</h5>
			<ol>
				<li>
					<b>Működési elv:</b> Az értelmező (interpreter) lépésről lépésre elemzi és 
					futtatja a kódot.
				</li>
				<li>
					<b>Példák:</b> Olyan nyelvek, mint a Python vagy a JavaScript, 
					gyakran interpretált módon működnek, bár léteznek fordított változataik is.
				</li>
			</ol>
		</div>
		<div class="kontener">
			<h3>Fogalom:</h3>
			<p>
				<span class="kiemel">Objektumorientált programozás (OOP):</span> egy olyan programozási paradigma, 
				amely az objektumok fogalmára épül, és az adatok és a hozzájuk tartozó műveletek 
				összekapcsolását jelenti. Célja a valós világ modellezése, ahol a program egésze olyan 
				objektumokból épül fel, amelyek rendelkeznek saját jellemzőkkel és működési módszerekkel, 
				és egymással kölcsönhatásba lépnek. Előnyei közé tartozik a bonyolult kódok egyszerűsítése, 
				a jobb átláthatóság, a gyorsabb fejlesztés, a könnyebb módosíthatóság és a fokozott adatbiztonság.  
			</p>
			<h5>Főbb tulajdonságok:</h5>
			<ol>
				<li>
					<b>Objektum:</b> Egy egységbe zárt programdarab, amely adatokat (tulajdonságok, mezők) 
					és az ezeket az adatokat kezelő műveleteket (metódusok, függvények) tartalmazza.
				</li>
				<li>
					<b>Osztály:</b> Az objektumok "tervrajza" vagy sablonja, amely meghatározza, 
					hogy az azonos típusú objektumok milyen tulajdonságokkal és metódusokkal rendelkeznek majd.
				</li>
				<li>
					<b>Az objektumok csoportosítása:</b> Az OOP a programot egyedi jellemzőkkel bíró, 
					önmagukban is működő objektumok gyűjteményeként fogja fel.
				</li>
				<li>
					<b>Módszertan (paradigma):</b> Az OOP egy olyan programozási módszertan, 
					amely az objektumokon alapul, és amely a klasszikus strukturált programozáshoz 
					képest sokkal rugalmasabb megközelítést kínál. 
				</li>
			</ol>
		</div>
		<div class="kontener">
			<h3>Fogalom:</h3>
			<p>
				<span class="kiemel">Eljárásorientált (procedurális) programozás:</span> egy olyan programozási paradigma, 
				amelyben a program egy vagy több eljárás (procedúra, függvény vagy alprogram) köré épül, 
				amelyek adatokat dolgoznak fel. Az eljárásorientált megközelítésben az adatok és az azokat manipuláló 
				műveletek (eljárások) külön vannak, szemben az objektumorientált programozással, ahol az adatok és a 
				hozzájuk tartozó műveletek egy objektumban vannak egyesítve.   
			</p>
			<h5>Főbb tulajdonságok:</h5>
			<ol>
				<li>
					<b>Eljárások:</b> A program a feladatait kisebb, újrafelhasználható részekre, eljárásokra bontja.
				</li>
				<li>
					<b>Adatok és eljárások szétválasztása:</b> Az eljárások és a feldolgozott adatok általában 
					különálló részek, bár az eljárások használhatják egymás adatait.
				</li>
				<li>
					<b>Eljárásfókusz:</b> A hangsúly az eljárások sorrendiségén és logikáján van, 
					ahogy a program elvégzi a feladatokat. 
				</li>
			</ol>
		</div>
		<div class="kontener">
			<h3>Fogalom:</h3>
			<p>
				<span class="kiemel">REPL:</span> a <span class="kiemel">Read</span>, 
				<span class="kiemel">Eval</span>, <span class="kiemel">Print</span>, 
				<span class="kiemel">Loop</span> (olvas, értékel, nyomtat, ismétel) rövidítése, 
				egy interaktív programozási környezet, ahol a fejlesztők kódrészleteket írhatnak be, 
				azokat azonnal végrehajthatják és megtekinthetik az eredményt. 
				Különösen hasznos kód teszteléséhez, hibakereséshez és új nyelvi koncepciók interaktív 
				felfedezéséhez. A legtöbb modern programozási nyelv (például Python, JavaScript, Ruby) 
				rendelkezik REPL-lel. 
			</p>
			<h5>Működési módja:</h5>
			<ol>
				<li>
					<b>Read (olvas):</b>  A REPL beolvassa a parancsot, amit a felhasználó beír.
				</li>
				<li>
					<b>Eval (értékel):</b> Az <span class="kiemel">interpreter</span> (értelmező) kiértékeli 
					a beolvasott kódot.
				</li>
				<li>
					<b>Print (nyomtat):</b> Eltérően a teljes szkriptek futtatásától, 
					a REPL azonnal kiírja a kiértékelt kód eredményét a képernyőre.
				</li>
				<li>
					<b>Loop (ismétel):</b> Az egész folyamat megismétlődik, a 
					REPL visszatér a "olvas" állapothoz, és várja a következő parancsot. 
				</li>
			</ol>
			<h2>Példa:</h2>
			<pre><code>
H:/ python

Python 3.9.7 (tags/v3.9.7:1016ef3, Aug 30 2021, 20:19:38) [MSC v.1929 64 bit (AMD64)] on win32
Type "help", "copyright", "credits" or "license" for more information.
Ctrl click to launch VS Code Native REPL

>>> print("Hello World!")

Hello World!

>>> exit() 

H:/
			</code></pre>
		</div>
	</div>
	`;
