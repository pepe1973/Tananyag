let betolt_08 = `
	<h1>Behúzás 1</h1> 
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
	`;
