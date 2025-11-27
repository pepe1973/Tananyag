let betolt_03_jobb_04 = `
	<h1>Azonosítók, változók</h1> 
	<h5>Feladat: </h5>
    <p>
		Hozzunk létre példát a jó változó elnevezésekre!
	</p>
	<div class="row-3">
		<div class="kontener">
			<a href="./alkalmazas_js/03_blokk/megoldasok/fo_07.py" download>
				<img src="./alkalmazas_js/03_blokk/images/kep_07.png" title="A képre kattintva a kód letölthető!" />
			</a>
		</div>
		<div class="kontener">
			<h3>Parancssor:</h3>
			<div class="kod-kontener">
				<p>
					<code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/proba</span></code>
				</p>
				<p>
					<code class="parancs">$ python main.py</code>
				</p>
				<pre class="parancs">
almafa körtefa barackfa
				</pre>
			</div>
		</div>
	</div>
	<h5>Feladat: </h5>
    <p>
		Hozzunk létre példát a helytelen változó elnevezésekre! <span class="kiemel">Számmal nem kezdődhet!</span>
	</p>
	<div class="row-3">
		<div class="kontener">
			<a href="./alkalmazas_js/03_blokk/megoldasok/fo_08.py" download>
				<img src="./alkalmazas_js/03_blokk/images/kep_08.png" title="A képre kattintva a kód letölthető!" />
			</a>
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
    <p>
		Hozzunk létre példát a helytelen változó elnevezésekre! <span class="kiemel">Nem tartalmazhat szóközöket!</span>
	</p>
	<div class="row-3">
		<div class="kontener">
			<a href="./alkalmazas_js/03_blokk/megoldasok/fo_09.py" download>
				<img src="./alkalmazas_js/03_blokk/images/kep_09.png" title="A képre kattintva a kód letölthető!" />
			</a>
		</div>
		<div class="kontener">
			<h3>Parancssor:</h3>
			<div class="kod-kontener">
				<p>
					<code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/proba</span></code>
				</p>
				<p>
					<code class="parancs">$ python main.py</code>
				</p>
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
    <p>
		Hozzunk létre példát a helytelen változó elnevezésekre!
		<span class="kiemel">Nem tartalmazhat meg nem engedett karaktereket!</span>
	</p>
	<div class="row-3">
		<div class="kontener">
			<a href="./alkalmazas_js/03_blokk/megoldasok/fo_10.py" download>
				<img src="./alkalmazas_js/03_blokk/images/kep_10.png" title="A képre kattintva a kód letölthető!" />
			</a>
		</div>
		<div class="kontener">
			<h3>Parancssor:</h3>
			<div class="kod-kontener">
				<p>
					<code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/proba</span></code>
				</p>
				<p>
					<code class="parancs">$ python main.py</code>
				</p>
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
