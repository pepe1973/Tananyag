let betolt_11 = `
	<h1>Mappastruktúra kialakítása</h1> 
    <p>Ebben a részben kialakítjuk a mappastruktúrát.</p>
	<div class="row-3">
		<div class="kontener">
			<h3>Parancssor:</h3>
			<div class="kod-kontener">
				<p><code>User@ALAP-SZAMITOGEP <span class="git-lila">MINGW64</span> <span class="git-sar">~/Desktop/Cukraszda/backend</span></code></p>
				<p><code class="parancs">$ mkdir controllers middlewares models public routes utils views</code></p>
			</div>
		</div>
		<div class="kontener">
			<h3>Visual Studio Code:</h3>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<p>
				A <code>backend</code> mappában alakítsuk
				ki a mappastruktúrát, amely tükrözi az
				<span class="kiemel">MVC</span>-t.
			</p>
			<p>
				Ehhez adjuk ki az
				<code
					>mkdir controllers middlewares models public routes
					utils views</code
				>
				utasítást a parancssorban.
			</p>
		</div>
		<div class="kontener">
			<h3>Magyarázat:</h3>
			<ol>
				<li>
					<code>controllers</code> -
					<span class="kiemel">CRUD</span> műveletek
					kezeléséhez.
				</li>
				<li>
					<code>middlewares</code> - az
					<code>HTTP Request</code> és
					<code>HTTP Response</code> között végzett műveletek
					kezeléséhez.
				</li>
				<li>
					<code>models</code> -
					<span class="kiemel">MongoDb</span> modellek
					kezeléséhez.
				</li>
				<li>
					<code>public</code> - statikus állományok
					kezeléséhez.
				</li>
				<li>
					<code>routes</code> - <code>route</code>-ok
					kezeléséhez.
				</li>
				<li>
					<code>utils</code> - szerver működéséhez szükséges
					dolgok kezeléséhez.
				</li>
				<li>
					<code>views</code> - szerveroldali user interface
					kezeléséhez.
				</li>
			</ol>
		</div>
	</div>
	`;
