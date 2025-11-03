let betolt_06 = `
	<h1>Behúzás 2</h1> 
	<h5>Feladat: </h5>
    <p>Hozzunk létre példát a helytelen behúzásra. Nincs behúzás!</p>
	<div class="row-3">
		<div class="kontener">
			<h3>példa:</h3>
			<pre>
			<code>
for i in range(10):
if i % 2 == 0:
		k = i / 2
		print(k)
	else:
		l = (i + 1) / 2
		print(l)
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
    if i % 2 == 0:
    ^
IndentationError: expected an indented block
				</pre>
			</div>
		</div>
	</div>
	<h5>Feladat: </h5>
    <p>Hozzunk létre példát a helytelen behúzásra. Nem azonos behúzás egy blokkon belül!</p>
	<div class="row-3">
		<div class="kontener">
			<h3>példa:</h3>
			<pre>
			<code>
for i in range(10):
	if i % 2 == 0:
	  k = i / 2
		print(k)
	else:
		l = (i + 1) / 2
		print(l)
			</code>
			</pre>
		</div>
		<div class="kontener">
			<h3>Parancssor:</h3>
			<div class="kod-kontener">
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/proba</span></code></p>
				<p><code class="parancs">$ python main.py</code></p>
				<pre class="parancs">
  File "C:\Users\Peter\Desktop\proba\main.py", line 4
    print(k)
TabError: inconsistent use of tabs and spaces in indentation
				</pre>
			</div>
		</div>
	</div>
	`;
