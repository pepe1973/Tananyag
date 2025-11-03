let betolt_04 = `
	<h1>Szintaxis - Összefoglaló</h1> 
    <p>Ebben a részben megismerkedünk a Python programozás szintaxisának szabályaival.</p>
	<h5>Behúzás (indentation):</h5>
	<p>A behúzás a kódsor elején található szóközöket jelenti.</p>
	<p>A Python behúzást használ a kódblokkok jelölésére.</p>
	<p>A Python hibát jelez, ha kihagyod a behúzást!</p>
	<p>A szóközök számát programozóként te döntöd el, a leggyakoribb használat a négy, de legalább egyre van szükség.</p>
	<p>Ugyanannyi szóközt kell használnod ugyanabban a kódblokkban, különben a Python hibát jelez!</p>
	<h5>Komment (comment):</h5>
	<p>A Python kommentálási képességgel rendelkezik a kódon belüli dokumentáció céljából.</p>
	<p>A kommentek <code>#</code> karakterrel kezdődnek , és a Python a sor többi részét kommentként jeleníti meg.</p>
	<p>A kommentek segítségével elmagyarázhatók a Python kódok.</p>
	<p>A kód tesztelésekor kommentek használhatók a végrehajtás megakadályozására.</p>
	<p>A Pythonnak nincs igazán szintaxisa a többsoros megjegyzésekhez. 
	Többsoros megjegyzés hozzáadásához minden sorhoz beszúrhat egy <code>#</code>-et.</p>
	<p>Mivel a Python figyelmen kívül hagyja a változóhoz nem rendelt karakterlánc literálokat, hozzáadhatsz egy többsoros karakterláncot 
	(tripla idézőjelek: """) a kódodhoz, és ebbe helyezheted el a kommentedet.</p>
	<h5>Utasítás (statement):</h5>
	<p>A számítógépes program "instrukcióknak" egy olyan listája, amelyet a számítógépnek "végre kell hajtania".</p>
	<p>Egy programozási nyelvben ezeket a programozási instrukciókat utasításoknak nevezzük.</p>
	<p>A Pythonban egy utasítás általában a sor végével záródik. Nem kell pontosvesszőt <code>;</code> használni, 
	mint sok más programozási nyelvben (például Java vagy C ).</p>
	<p>A legtöbb Python program sok utasítást tartalmaz.</p>
	<p>Az utasítások egyenként, ugyanabban a sorrendben hajtódnak végre, ahogyan megírták őket.</p>
	<p>Több utasítást is írhatunk egy sorba, ha elválasztjuk őket <code>;</code>-vel, de ezt ritkán használjuk, 
	mert megnehezíti az olvasást.</p>
	<p>Ha azonban két utasítást teszel ugyanabba a sorba elválasztó karakter (sortörés vagy <code>;</code>) nélkül, 
	a Python hibát fog dobni.</p>
	<h5>Hosszú sorok tördelése:</h5>
	<p>Az olvashatóság javítása érdekében általában egyetlen kódsor hosszát 79 karakterre korlátozzuk. Nézzük meg tehát, 
	hogyan kezeljük a 79 karakternél hosszabb kódsorokat.</p>
	<p>Egy kódsor kettéválasztásához és annak jelzéséhez, hogy a következő sor nem új sor,
	 fordított perjelet (<span class="kiemel">backslash</span>) használunk. </p>
	`;
