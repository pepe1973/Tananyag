let betolt_05 = `
	<h1>Fogalmak 4</h1> 
    <p>Ebben a részben megismerkedünk a backend programozással kapcsolatos fogalmakkal.</p>
	<div class="row-3">
		<div class="kontener">
			<h3>Fogalom:</h3>
			<p>
				<span class="kiemel">useContext():</span> egy <span class="kiemel">React hook</span>, amely lehetővé
				teszi a komponensek számára,
				hogy adatokhoz férjenek hozzá a komponensfa mélyén anélkül, hogy a <span class="kiemel">props</span>-okat manuálisan kellene
				átadniuk a szülőkomponenseken keresztül. Ezt úgy teszi, hogy egy központilag definiált kontextusból (<span class="kiemel">Context</span>)
				veszi ki az értékeket, amelyek lehetnek például a felhasználó adatai vagy egy alkalmazás témája
				(pl. sötét mód beállításai). Ezáltal a komponensek közvetlenül tudnak kommunikálni egymással, elkerülve a "prop drilling" problémáját.
			</p>
			<h5>Hogyan működik:</h5>
			<ol>
				<li>
					<b>Kontextus létrehozása:</b> Először egy <code>React.createContext()</code> használatával hozunk létre
					egy kontextust, amelynek van egy alapértelmezett értéke.
				</li>
				<li>
					<b>Kontextus szolgáltatása:</b> A kontextusban tárolt adatokat egy kontextus szolgáltató komponenssel
					<code>Context.Provider</code> tesszük elérhetővé egy adott komponens fa tetején.
				</li>
				<li>
					<b>Kontextus használata:</b> A komponensfa bármely alkomponense <code>useContext</code>
					<span class="kiemel">hook</span> használatával közvetlenül hozzáférhet az adatokhoz,
					amiket a szolgáltató biztosít. A <span class="kiemel">hook</span> megkapja a kontextust, mint argumentumot,
					és visszaadja az aktuális értékét.
				</li>
			</ol>
			<p><a href="https://www.w3schools.com/react/react_usecontext.asp" target="_blank">w3schools: useContext()</a></p>
		</div>
		<div class="kontener">
			<h3>Fogalom:</h3>
			<p>
				<span class="kiemel">useRef():</span> egy <span class="kiemel">React hook</span>, amelyet két fő célra
				használhatunk: egyrészt közvetlen hozzáférést biztosít egy DOM-elemhez,
				másrészt egy olyan értéket tárol, amely a komponens újrarenderelései során is megmarad,
				anélkül, hogy az újrarenderelést kiváltaná. Ezzel ideálissá válik olyan esetekben, amikor nem az érték változása,
				hanem maga az érték, például egy futó időzítő ID, vagy egy DOM-elem állapota fontos a komponens működéséhez.
			</p>
			<h5>Főbb tulajdonságok:</h5>
			<ol>
				<li>
					<b>DOM-elemek elérése:</b> A <span class="kiemel">useRef</span> segítségével közvetlenül kezelhetünk
					DOM-elemeket, például fókuszálhatunk egy input mezőre vagy mérhetjük a méretét.
				</li>
				<li>
					<b>Értékek tárolása renderelések között:</b> Bármilyen értéket tárolhatunk benne (objektum, szám, tömb stb.),
					amely nem befolyásolja közvetlenül a felhasználói felületet, és meg kell őrizni a komponens életciklusa során.
					Amikor a <code>ref</code> értéke megváltozik, a komponens nem fog újrarenderelődni,
					ellentétben a <span class="kiemel">useState</span> használatával.
				</li>
			</ol>
			<p><a href="https://www.w3schools.com/react/react_useref.asp" target="_blank">w3schools: useRef()</a></p>
		</div>
		<div class="kontener">
			<h3>Fogalom:</h3>
			<p>
				<span class="kiemel">useReducer():</span> egy <span class="kiemel">React hook</span>, amely lehetővé teszi a
				komplex állapotkezelést egy komponensen belül, hasonlóan a Redux módszerhez. A <span class="kiemel">useState</span>
				helyett, amely egyszerűbb állapotokat kezel, a <span class="kiemel">useReducer</span> használható olyan esetekben,
				amikor az állapotátmenetek összetettek vagy amikor több al-állapotot kell kezelni.
				A <span class="kiemel">hook</span> egy „reducer” függvényt használ, amely a korábbi állapotot és
				egy „action” objektumot vesz át, majd a kapott <span class="kiemel">action</span> típusától függően
				visszaadja az új állapotot.
			</p>
			<h5>Főbb tulajdonságok:</h5>
			<ol>
				<li>
					<b>Egyszerűsíti az összetett logikát:</b> A reducer funkció logikáját a komponensen kívül vagy belül is
					definiálhatod, így az állapotkezelés logikája rendezettebbé válik.
				</li>
				<li>
					<b>Jobban működik összetett állapotokkal:</b> Ha egy komponensnek több al-állapota van, vagy ha az állapot
					változása függ a meglévő állapottól, a <span class="kiemel">useReducer</span> jobb választás lehet.
				</li>
				<li>
					<b>Tesztelhetőség:</b> A reducer funkció tiszta JavaScript függvény, ami önmagában is tesztelhetővé teszi az
					állapotváltozások logikáját.
				</li>
			</ol>
			<p><a href="https://www.w3schools.com/react/react_usereducer.asp" target="_blank">w3schools: useReducer()</a></p>
		</div>
		<div class="kontener">
			<h3>Fogalom:</h3>
			<p>
				<span class="kiemel">useCallback():</span> egy <span class="kiemel">React hook</span>, amely segít a teljesítmény
				javításában azáltal, hogy memorizálja a <span class="kiemel">callback</span> függvényeket. Ez azt jelenti,
				hogy a funkció nem jön létre újra minden alkalommal, amikor az adott komponens újra renderelődik,
				hanem csak akkor frissül, ha a függőségi tömbben felsorolt értékek megváltoznak. Ez különösen akkor hasznos,
				ha a függvényt alkomponenseknek adjuk át, és így elkerülhető a felesleges újrarajzolás.
			</p>
			<h5>Főbb tulajdonságok:</h5>
			<ol>
				<li>
					<b>A probléma:</b> Alapértelmezés szerint minden komponens rendereléskor a benne definiált függvények is
					újra létrejönnek, ami lehetetlenné teszi, hogy megegyezzenek a hivatkozások. Ez felesleges újrarajzolásokat
					okozhat, ha ezeket a függvényeket gyermekkomponenseknek adjuk át propként.
				</li>
				<li>
					<b>A megoldás:</b> A <span class="kiemel">useCallback</span> visszatér egy "memorizált" verzióval a függvényből.
					Amíg a függőségek nem változnak, ugyanazt a funkcióhivatkozást adja vissza.
				</li>
				<li>
					<b>Példa:</b> Ha egy gyermekkomponensnek adunk át egy függvényt, és az a hivatkozás megegyezésén múlik,
					hogy mikor kell újra renderelnie, a <span class="kiemel">useCallback</span> használatával megakadályozható a
					felesleges renderelés, ha a szülőkomponens csak akkor renderel újra, amikor a funkció függőségei valójában
					megváltoznak.
				</li>
			</ol>
			<p><a href="https://www.w3schools.com/react/react_usecallback.asp" target="_blank">w3schools: useCallback()</a></p>
		</div>
	</div>
	`;
