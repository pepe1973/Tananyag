let betolt_04 = `
	<h1>Fogalmak 3</h1> 
    <p>Ebben a részben megismerkedünk a backend programozással kapcsolatos fogalmakkal.</p>
	<div class="row-3">
		<div class="bal-3-kontener">
			<h3>Fogalom:</h3>
			<p>
				<span class="kiemel">process.env:</span> a
				<code>process.env</code> globális változót a
				<span class="kiemel">Node.js</span> injektálja
				futásidőben az alkalmazás számára, és ez a változó az
				alkalmazás indításakor fennálló
				<spanspan class="kiemel"
					>rendszerkörnyezet állapotát</spanspan
				>
				jelöli (környezeti változók).
			</p>
			<p>
				Például, ha a rendszerhez be van állítva egy
				<code>PORT</code> változó, akkor ez a
				<code>process.env.PORT</code>
				segítségével lesz elérhető.
			</p>
			</div>
		<div class="kozep-3-kontener">
			<h3>Fogalom:</h3>
			<p>
				<span class="kiemel">Version control:</span> egy
				rendszer a fájlok időbeli változásainak nyomon
				követésére és kezelésére, amely lehetővé teszi az
				együttműködést és a korábbi verziókhoz való
				visszatérést.
			</p>
			<p>
				Ez egy elsősorban szoftverfejlesztésben használt
				gyakorlat a forráskód kezelésére, de más dokumentumokra
				és projektekre is alkalmazható.
			</p>
			<p>
				A verziókövető rendszerek olyan szoftvereszközök,
				amelyek pillanatképeket készítenek a fájlokról, lehetővé
				téve a fejlesztők számára, hogy egyszerre dolgozzanak
				anélkül, hogy elveszítenék munkájukat, vagy felülírnák
				mások módosításait.
			</p>
		</div>
		<div class="jobb-3-kontener">
			<h3>Fogalom:</h3>
			<p>
				<span class="kiemel">Webszerver:</span> egy szoftver
				vagy hardver, amely tárolja a weboldalakat (HTML-fájlok,
				képek stb.), és HTTP protokollon keresztül kiszolgálja
				azokat a felhasználók böngészői felé kérésre. Amikor egy
				webcím meg van adva, a böngésző kapcsolódik a
				webszerverhez, amely továbbítja a kért weboldal
				tartalmát. Ezt a szoftvert és hardvert egyaránt
				nevezhetjük webszervernek, és feladata a webes tartalmak
				tárolása és elérhetővé tétele.
			</p>
			<h5>Főbb funkciói:</h5>
			<ol>
				<li>
					<b>Weboldalak kiszolgálása:</b> Statikus (pl. HTML,
					CSS, JavaScript, képek) és dinamikus tartalmakat
					(pl. adatbázisokból generált oldalakat) küld a
					böngészőknek.
				</li>
				<li>
					<b>HTTP kérések kezelése:</b> Fogadja a böngészők
					HTTP kéréseit, és válaszként elküldi a kért
					erőforrást vagy hibaüzenetet.
				</li>
				<li>
					<b>Webes tartalom tárolása:</b> A weboldalakhoz
					szükséges összes fájlt (HTML, CSS, JavaScript,
					képek, videók stb.) tárolja.
				</li>
				<li>
					<b>Biztonság:</b> Védelmi funkciókat is elláthat a
					biztonsági fenyegetésekkel szemben.
				</li>
			</ol>
		</div>
	</div>
	`;
