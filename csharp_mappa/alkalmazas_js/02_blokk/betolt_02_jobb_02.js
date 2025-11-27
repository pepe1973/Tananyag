let betolt_02_jobb_02 = `
	<h1>Fogalmak 2</h1> 
    <p>
		Ebben a részben megismerkedünk a Python programozással kapcsolatos fogalmakkal.
	</p>
	<div class="row-3">
		<div class="kontener">
			<h3>Fogalom:</h3>
			<p>
				<span class="kiemel">Kulcsszó (Keyword):</span> A Python kulcsszavak foglalt szavak fix jelentéssel,
				amelyek meghatározzák a Python szintaxisát. Nem használhatók névként.
			</p>
			<h5>Milyen kulcsszavak vannak:</h5>
			<p>
				<code>import keyword</code>
			</p>
			<p>	
				<code>print(keyword.kwlist)</code>
			</p>
		</div>
		<div class="kontener">
			<h3>Fogalom:</h3>
			<p>
				<span class="kiemel">Literál:</span> A Pythonban a literálok fix értékek, amelyeket közvetlenül a
				kódba írnak, és amelyek konstans adatokat képviselnek. Lehetőséget biztosítanak számok, szöveg vagy
				más lényeges információk tárolására, amelyek a program végrehajtása során nem változnak.
				A Python különböző típusú literálokat támogat, például numerikus literálokat, karakterlánc-literálokat,
				logikai literálokat és speciális értékeket, például a None-t.
			</p>
			<p>
				<a href="https://www.geeksforgeeks.org/python/literals-in-python/" target="_blank">GeeksForGeeks - Literals in Python</a>
			</p>
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
			<pre>
				<code>
H:/ python

Python 3.9.7 (tags/v3.9.7:1016ef3, Aug 30 2021, 20:19:38) [MSC v.1929 64 bit (AMD64)] on win32
Type "help", "copyright", "credits" or "license" for more information.
Ctrl click to launch VS Code Native REPL

>>> print("Hello World!")

Hello World!

>>> exit() 

H:/
				</code>
			</pre>
		</div>
	</div>
	`;

export default betolt_02_jobb_02;
