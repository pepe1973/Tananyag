let betolt_03_jobb_05 = `
	<h1>Utasítás, kódcsomag</h1> 
	<h5>Feladat: </h5>
    <p>Hozzunk létre példát utasításokra.</p>
	<div class="row-3">
		<div class="kontener">
			<h3>példa:</h3>
			<pre>
			<code>
<span class="komment"># Több utasítás, több sor.</span>
print("Hello")
print("World!")
<span class="komment"># Több utasítás, egy sor. ; elválasztó karakterrel.</span>
print("Hello"); print("World"); print("again!")
			</code>
			</pre>
		</div>
		<div class="kontener">
			<h3>Parancssor:</h3>
			<div class="kod-kontener">
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/proba</span></code></p>
				<p><code class="parancs">$ python main.py</code></p>
				<pre class="parancs">
Hello
World!
Hello 
World 
again!
				</pre>
			</div>
		</div>
	</div>
	<h5>Feladat: </h5>
    <p>Hozzunk létre példát az utasításokra hibával.</p>
	<div class="row-3">
		<div class="kontener">
			<h3>példa:</h3>
			<pre>
			<code>
<span class="komment"># Több utasítás, egy sor. Hibával!
# Nincs elválasztó karakter (sortörés vagy ;)!</span>
print("Hello") print("World") print("again!")
			</code>
			</pre>
		</div>
		<div class="kontener">
			<h3>Parancssor:</h3>
			<div class="kod-kontener">
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/proba</span></code></p>
				<p><code class="parancs">$ python main.py</code></p>
				<pre class="parancs">
  File "C:\Users\Peter\Desktop\proba\main.py", line 2
    print("Hello") print("World") print("again!")
                   ^
SyntaxError: invalid syntax
				</pre>
			</div>
		</div>
	</div>
	<h5>Feladat: </h5>
    <p>Hozzunk létre példát a kódcsomagra.</p>
	<div class="row-3">
		<div class="kontener">
			<h3>példa:</h3>
			<pre>
			<code>
<span class="komment"># Fejlécsor!</span>
def kiir():
	<span class="komment"># Kódcsomag kezdete!</span>
	lista = ["alma", "körte"]
	lista.append("meggy")
	lista.append("cseresznye")
	<span class="komment"># Kódcsomag vége!</span>
	<span class="komment"># Fejlécsor!</span>
	for elem in lista:
		<span class="komment"># Kódcsomag kezdete!</span>
		elem = elem.upper()
		print(elem)
		<span class="komment"># Kódcsomag vége!</span>

kiir()
			</code>
			</pre>
		</div>
		<div class="kontener">
			<h3>Parancssor:</h3>
			<div class="kod-kontener">
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/proba</span></code></p>
				<p><code class="parancs">$ python main.py</code></p>
				<pre class="parancs">
ALMA
KÖRTE     
MEGGY     
CSERESZNYE
				</pre>
			</div>
		</div>
	</div>
	<h5>Feladat: </h5>
    <p>Hozzunk létre példát a kódcsomagra.</p>
	<div class="row-3">
		<div class="kontener">
			<h3>példa:</h3>
			<pre>
			<code>
<span class="komment"># Ez nem kódcsomag, bár a sorok egyformán vannak behúzva.
# Nem utasítások és nincs fejlécsor :-tal!</span>
mondat = "Télen húll a hó. " \\
	"Hűvösek a nappalok. " \\
	"Korán nyugszik le a nap." \\
	"De legalább későn kel."
print(f"A mondat: {mondat}")
			</code>
			</pre>
		</div>
		<div class="kontener">
			<h3>Parancssor:</h3>
			<div class="kod-kontener">
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/proba</span></code></p>
				<p><code class="parancs">$ python main.py</code></p>
				<pre class="parancs">
A mondat: Télen húll a hó. Hűvösek a nappalok. Korán nyugszik le a nap.De legalább későn kel.
				</pre>
			</div>
		</div>
	</div>
	`;

export default betolt_03_jobb_05;
