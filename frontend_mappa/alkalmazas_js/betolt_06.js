let betolt_06 = `
	<h1>Fogalmak 5</h1> 
    <p>Ebben a részben megismerkedünk a backend programozással kapcsolatos fogalmakkal.</p>
	<div class="row-3">
		<div class="kontener">
			<h3>Fogalom:</h3>
			<p>
				<span class="kiemel">useMemo():</span> egy <span class="kiemel">React hook</span>, ami a teljesítmény
				optimalizálására szolgál a <span class="kiemel">memoizáció</span> (azaz egy érték "gyorsítótárazása" vagy
				"megjegyzése") révén. Ez azt jelenti, hogy ha egy drága számítás eredménye nem változik,
				azt a <span class="kiemel">hook</span> megjegyzi, és nem számolja újra minden újrarajzoláskor,
				ami gyorsíthatja az alkalmazást.
			</p>
			<h5>Főbb tulajdonságok:</h5>
			<ol>
				<li>
					<b>Működése:</b>A <span class="kiemel">useMemo</span> megkap egy függvényt, ami a kiszámítandó értéket
					állítja elő, valamint egy függőségi tömböt. Amíg a tömbben lévő értékek nem változnak,
					a <span class="kiemel">hook</span> az utoljára kiszámított értéket adja vissza.
				</li>
				<li>
					<b>Mikor használd:</b> Csak akkor használd, ha a számítás valósan költséges és lassú,
					és a komponens gyakran újrarajzolódik.
				</li>
				<li>
					<b>Használata:</b> A szintaxis: <code>const memoizáltÉrték = useMemo(() => funkció(), [függőségek])</code>. 
				</li>
			</ol>
			<p><a href="https://www.w3schools.com/react/react_usememo.asp" target="_blank">w3schools: useMemo()</a></p>
		</div>
		<div class="kontener">
			<h3>Fogalom:</h3>
			<p>
				<span class="kiemel">CORS (Cross-Origin Resource Sharing):</span> egy webbiztonsági mechanizmus,
				amely lehetővé teszi, hogy egy weboldal szkriptjei biztonságosan kérjenek erőforrásokat egy másik domainről.
				Ezt a böngészőoldali szabályozást a szerverek "hívják meg" HTTP fejlécekkel, lehetővé téve a különféle,
				azonosítatlan eredetű erőforrások, például API-k, betűkészletek vagy adatok biztonságos elérését.
			</p>
			<h5>Főbb tulajdonságok:</h5>
			<ol>
				<li>
					<b>Hogyan működik:</b> Ha egy weboldal (pl. <span class="kiemel">a.com</span>) egy másik
					domainről (<span class="kiemel">b.com</span>) szeretne lekérni adatot, a böngésző a szerverrel kommunikál
					annak érdekében, hogy eldöntse, engedélyezett-e ez a kérés.
				</li>
				<li>
					<b>Célja:</b> A <span class="kiemel">Same-Origin Policy</span> nevű alapvető böngészőbiztonsági funkció
					kiterjesztése és rugalmasabbá tétele, amely alapvetően megakadályozza a weboldalak
					közötti adatátvitelt a biztonság érdekében.
				</li>
				<li>
					<b>Miért fontos:</b> Alapvető fontosságú a modern, összetett webalkalmazások számára, amelyek gyakran
					külső API-kat, harmadik féltől származó szolgáltatásokat vagy más erőforrásokat használnak.
				</li>
			</ol>
		</div>
	</div>
	`;
