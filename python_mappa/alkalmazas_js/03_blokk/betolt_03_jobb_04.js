let betolt_03_jobb_04 = `
	<h1>Azonosítók, változók</h1> 
	<h5>Feladat: </h5>
    <p>Hozzunk létre példát a jó változó elnevezésekre!</p>
	<div class="row-3">
		<div class="kontener">
			<h3>példa:</h3>
			<pre>
			<code>
<span class="komment"># Helyes azonosítók (identifier).</span>
valtozo1 = "almafa"
_valtozo = "körtefa"
Valtozo_2 = "barackfa"

print(valtozo1, _valtozo, Valtozo_2)
			</code>
			</pre>
		</div>
		<div class="kontener">
			<h3>Parancssor:</h3>
			<div class="kod-kontener">
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/proba</span></code></p>
				<p><code class="parancs">$ python main.py</code></p>
				<pre class="parancs">
almafa körtefa barackfa
				</pre>
			</div>
		</div>
	</div>
	<h5>Feladat: </h5>
    <p>Hozzunk létre példát a helytelen változó elnevezésekre!</p>
	<div class="row-3">
		<div class="kontener">
			<h3>példa:</h3>
			<pre>
			<code>
<span class="komment"># Helytelen azonosítók (identifier).</span>
1valtozo = "almafa"

print(1valtozo)
			</code>
			</pre>
		</div>
		<div class="kontener">
			<h3>Parancssor:</h3>
			<div class="kod-kontener">
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/proba</span></code></p>
				<p><code class="parancs">$ python main.py</code></p>
				<pre class="parancs">
  File "C:\\Users\\Peter\\Desktop\\proba\\main.py", line 2
    1valtozo = "almafa"    
     ^
SyntaxError: invalid syntax
				</pre>
			</div>
		</div>
	</div>
	<h5>Feladat: </h5>
    <p>Hozzunk létre példát a helytelen változó elnevezésekre!</p>
	<div class="row-3">
		<div class="kontener">
			<h3>példa:</h3>
			<pre>
			<code>
<span class="komment"># Helytelen azonosítók (identifier).</span>
valtozo nev = "almafa"

print(valtozo nev)
			</code>
			</pre>
		</div>
		<div class="kontener">
			<h3>Parancssor:</h3>
			<div class="kod-kontener">
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/proba</span></code></p>
				<p><code class="parancs">$ python main.py</code></p>
				<pre class="parancs">
  File "C:\\Users\\Peter\\Desktop\\proba\\main.py", line 2
    valtozo nev = "almafa" 
            ^
SyntaxError: invalid syntax
				</pre>
			</div>
		</div>
	</div>
	<h5>Feladat: </h5>
    <p>Hozzunk létre példát a helytelen változó elnevezésekre!</p>
	<div class="row-3">
		<div class="kontener">
			<h3>példa:</h3>
			<pre>
			<code>
<span class="komment"># Helytelen azonosítók (identifier).</span>
valtozo&nev = "almafa"

print(valtozo&nev)
			</code>
			</pre>
		</div>
		<div class="kontener">
			<h3>Parancssor:</h3>
			<div class="kod-kontener">
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/proba</span></code></p>
				<p><code class="parancs">$ python main.py</code></p>
				<pre class="parancs">
  File "C:\\Users\\Peter\\Desktop\\proba\\main.py", line 2
    valtozo&nev = "almafa"
    ^
SyntaxError: cannot assign to operator
				</pre>
			</div>
		</div>
	</div>
	`;

export default betolt_03_jobb_04;
