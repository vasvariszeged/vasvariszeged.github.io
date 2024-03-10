import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as e,a as t}from"./app-37e6cb78.js";const o="/assets/images/vasvari/SimpleDoubleProperty.webp",p="/assets/images/vasvari/WhatIsAProperty.webp",l="/assets/images/vasvari/PropertyListenerOptions.webp",i="/assets/images/vasvari/SimplePropertyBinding.webp",c="/assets/images/vasvari/SimplePropertyBidirectionalBinding.webp",u={},k=t('<h1 id="properties-and-bindings" tabindex="-1"><a class="header-anchor" href="#properties-and-bindings" aria-hidden="true">#</a> Properties and Bindings</h1><p><em>avagy Tulajdonságok és Kötések</em></p><p>A JavaFX használatának egyik előnye a tulajdonságok és a kötések átfogó támogatása. A tulajdonságok segítségével többek között a <strong>Jelenetet</strong> (<code>Scene</code>) úgy kötheti össze, hogy a <strong>Nézet</strong> (<code>View</code>) automatikusan frissüljön, ha módosítja a mögötte lévő adatokat.</p><p>A tulajdonságok <strong>Megfigyelhető</strong> (<code>Observable</code>) objektumok, amelyek lehetnek írhatóak vagy csak olvashatóak. A JavaFX-ben <strong>30</strong> típusú <code>Property</code> objektum létezik, köztük a <code>StringProperty</code>, a <code>SimpleListProperty</code> és a <code>ReadOnlyObjectProperty</code>. Mindegyik tulajdonság egy meglévő Java-objektumot csomagol be (<code>wrap</code>), hozzáadva a megfigyelés (<code>Event Listener</code>) és a kötés (<code>Bindings</code>) funkcionalitását.</p><figure><img src="'+o+'" alt="A  a JavaFX kötések, tulajdonságok és csomagok jelentős részéből örököl. Mindegyik csomag hozzáad egy-egy aspektust a JavaFX tulajdonságai által mutatott esetleges funkcionalitáshoz." tabindex="0" loading="lazy"><figcaption>A <code>SimpleDoubleProperty</code> a JavaFX <strong>kötések</strong>, <strong>tulajdonságok</strong> és <strong>csomagok</strong> jelentős részéből örököl. Mindegyik csomag hozzáad egy-egy aspektust a JavaFX tulajdonságai által mutatott esetleges funkcionalitáshoz.</figcaption></figure><p>A kötés egy olyan mechanizmus az objektumok közötti kapcsolatok érvényesítésére, amelyben egy vagy több megfigyelhető objektumot használnak egy másik objektum értékének frissítésére. A kötések egy vagy mindkét irányba hathatnak egymásra, és létrehozhatók közvetlenül a tulajdonságokból (<code>Fluent API</code>) vagy a <code>Bindings</code> segédosztály segítségével (<code>Bindings API</code>).</p><p>Egyéni kötésű objektumok kézzel is létrehozhatók, ha extra testreszabásra vagy teljesítményre van szükség. Ezt nevezzük alacsony szintű API-nak (<em>Low-Level API</em>).</p><div class="hint-container info"><p class="hint-container-title">Properties and Bindings</p><p>A tulajdonságok és kötések interfészek és osztályok egy csoportja, amelyek célja, hogy jelentősen megkönnyítsék a fejlesztői életét. Ennek ellenére <strong>61</strong> tulajdonsággal és <strong>249</strong> metódussal a <code>Bindings</code> osztályban ez túlterhelő és nehezen kezelhető.</p><p>A <strong>JavaFX</strong> korai szakaszában számos probléma abból eredet, hogy például a jelenet nem frissítette magát, amikor megváltoztattak valamit. Ennek az oka az volt, hogy a jelenetet helytelenül kötötték össze a tulajdonságokkal. A JavaFX jelenetet úgy tervezték, hogy a tulajdonságok és események alapján frissüljön.</p></div><h3 id="mi-az-a-property" tabindex="-1"><a class="header-anchor" href="#mi-az-a-property" aria-hidden="true">#</a> Mi az a Property?</h3><p>Amennyiben nem számítástechnikai háttérrel rendelkezel, a tulajdonságok elsőre elég ijesztőnek tűnnek. A motorháztető alatt azonban nincs semmi varázslatos. A <strong>JavaFX</strong> <code>Property</code> objektumok többsége két kulcsfontosságú interfészt terjeszt ki:</p><ul><li><code>ReadOnlyProperty&lt;T&gt;</code></li><li><code>WriteableValue&lt;T&gt;</code></li></ul><figure><img src="'+p+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Néhányuk azonban nem... A JavaFX csak <strong>10</strong> olvasható tulajdonsággal rendelkezik, amelyek kiterjesztik a <code>ReadOnlyProperty&lt;T&gt;</code>-t, de a <code>WriteableValue&lt;T&gt;</code>-t nem.</p><h3 id="property-letrehozasa" tabindex="-1"><a class="header-anchor" href="#property-letrehozasa" aria-hidden="true">#</a> Property létrehozása</h3><p>A JavaFX tíz beépített osztállyal rendelkezik, amelyek jelentősen megkönnyítik a tulajdonságok létrehozását. Ezek minden szükséges funkciót megvalósítanak, a figyeléstől a kötésig.</p><ul><li><code>SimpleBooleanProperty</code></li><li><code>SimpleDoubleProperty</code></li><li><code>SimpleFloatProperty</code></li><li><code>SimpleIntegerProperty</code></li><li><code>SimpleListProperty</code></li><li><code>SimpleLongProperty</code></li><li><code>SimpleMapProperty</code></li><li><code>SimpleObjectProperty</code></li><li><code>SimpleSetProperty</code></li><li><code>SimpleStringProperty</code></li></ul><p>Az egyszerű tulajdonságobjektumok (<code>Simple...Property</code>) bármelyikét definiálhatja kezdeti értékkel vagy anélkül. Ha alapértelmezett érték nélkül definiáljuk őket, akkor a tulajdonság az alapértelmezett értékét kapják - 0, false, &quot;&quot; vagy egy üres gyűjteményt.</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">SimpleIntegerProperty</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token class-name">SimpleIntegerProperty</span><span class="token punctuation">(</span><span class="token keyword">int</span> initialValue<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Létrehozhatók egy névvel és egy olyan objektummal is, amelyet a JavaFX a tulajdonság &quot;<code>bean</code>&quot;-jeként említ. Ez semmilyen módon nem zárja egységbe be a tulajdonságot, hanem egy szimbolikus linket hoz létre egy objektumhoz, amely a tulajdonság &quot;tulajdonosát&quot; reprezentálja.</p><div class="hint-container info"><p class="hint-container-title">Egységbezárás</p><p>avagy <code>Encapsulation</code><br> Az adatok és a metódusok osztályba való összezárását jelenti. Tulajdonképpen az objektum egyéségbezárja az állapotot (<em>adattagok értékei</em>) a viselkedésmóddal (<em>műveletekkel</em>). Következmény: az objektum állapotát csak a műveletein keresztül módosíthatjuk.</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BankAccount</span> <span class="token punctuation">{</span>
    <span class="token comment">// Privát mező, nem érhető el közvetlenül kívülről</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> accountNumber<span class="token punctuation">;</span>
    <span class="token comment">// Privát mező, nem érhető el közvetlenül kívülről</span>
    <span class="token keyword">private</span> <span class="token keyword">double</span> balance<span class="token punctuation">;</span> 
    

    <span class="token keyword">public</span> <span class="token class-name">BankAccount</span><span class="token punctuation">(</span><span class="token class-name">String</span> accountNumber<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>accountNumber <span class="token operator">=</span> accountNumber<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>balance <span class="token operator">=</span> <span class="token number">0.0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Getter metódus az accountNumber lekérdezéséhez</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getAccountNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> accountNumber<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Getter metódus az egyenleg lekérdezéséhez</span>
    <span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">getBalance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> balance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Metódus a pénz befizetéséhez</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">deposit</span><span class="token punctuation">(</span><span class="token keyword">double</span> amount<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>amount <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            balance <span class="token operator">+=</span> amount<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Metódus a pénz kivételéhez</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">withdraw</span><span class="token punctuation">(</span><span class="token keyword">double</span> amount<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>amount <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> amount <span class="token operator">&lt;=</span> balance<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            balance <span class="token operator">-=</span> amount<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>A <code>BankAccount</code> osztály két privát mezőt tartalmaz (<code>accountNumber</code> és <code>balance</code>), amelyek nem érhetők el közvetlenül kívülről. Ehelyett a mezőkhöz két <em>getter</em> metódust készítettünk (<code>getAccountNumber</code> és <code>getBalance</code>), amelyek segítségével az értéküket lekérdezhetjük, de nem módosíthatjuk őket közvetlenül.</p><p>Az osztály továbbá biztosít metódusokat a pénz befizetésére (<code>deposit</code>) és kivételére (<code>withdraw</code>), amelyek ellenőrzik a bemeneti értékeket és csak érvényes műveleteket hajtanak végre. Tehát az <code>encapsulation</code> segít abban, hogy az osztály belső állapotát ellenőrzött módon kezeljük, és ne lehessen káros végrehajtásokat rajta eszközölni.</p></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">SimpleIntegerProperty</span><span class="token punctuation">(</span><span class="token class-name">Object</span> bean<span class="token punctuation">,</span> <span class="token class-name">String</span> name<span class="token punctuation">)</span>
<span class="token class-name">SimpleIntegerProperty</span><span class="token punctuation">(</span><span class="token class-name">Object</span> bean<span class="token punctuation">,</span> <span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> initialValue<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Sem a <code>name</code>, sem a <code>bean</code> attribútumok nem változtatják meg a tulajdonság viselkedését, de hasznos keresési lehetőségként szolgálhat. Ez akkor hasznos, ha ugyanazt a figyelőt több tulajdonsághoz csatoljuk - különösen generált tulajdonságokhoz. Ezután, ha változás történik, a <code>bean</code> és a <code>name</code> attribútumok segítségével ellenőrizhetjük, hogy melyik tulajdonság változott meg éppen.</p><p>Minden <strong>JavaFX</strong> tulajdonság rendelkezik olyan beépített funkciókkal, amelyek segítik az alábbiakat:</p><ul><li>Lehetőség van figyelni és értesülni a tulajdonság értékének változásairól.</li><li>A tulajdonságokat egymáshoz lehet kötni, így automatikusan frissülnek, ha az egyik megváltozik.</li><li>Lehetőség van lekérdezni és beállítani a tulajdonság értékét, feltéve, hogy a tulajdonság írható.</li></ul><h3 id="hogyan-kell-megfigyelni-a-tulajdonsagokat" tabindex="-1"><a class="header-anchor" href="#hogyan-kell-megfigyelni-a-tulajdonsagokat" aria-hidden="true">#</a> Hogyan kell megfigyelni a tulajdonságokat</h3><p>Ahogy fentebb láttuk, a <strong>JavaFX</strong> <code>Property</code> objektumok különböző implementált interfészek összevisszasága. Ez itt azért fontos, mert ez azt jelenti, hogy kétféle módon biztosítják a változásokra való figyelést: <code>invalidation</code> és <code>change</code>.</p><figure><img src="`+l+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><code>InvalidationListeners</code>: Minden JavaFX tulajdonság megvalósítja az <code>Observable</code> interfészt, ami azt jelenti, hogy mindegyik képes regisztrálni olyan <em>listenereket</em>, amelyek akkor aktiválódnak, amikor a tulajdonság érvénytelenítve lett.</p><div class="hint-container info"><p class="hint-container-title">Érvénytelenítve</p><p>avagy <code>invalidation</code><br> Az érvénytelenítés azt jelzi, hogy a tulajdonság állapota megváltozott, de az aktuális értékét nem kapjuk meg a figyelőn keresztül. Használata akkor lehet hasznos, ha egy tulajdonság frissítése nem igényel azonnali újraszámítást, de értesítést akarunk kapni a változásról.</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">javafx<span class="token punctuation">.</span>beans<span class="token punctuation">.</span></span><span class="token class-name">InvalidationListener</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javafx<span class="token punctuation">.</span>beans<span class="token punctuation">.</span></span><span class="token class-name">Observable</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">InvalidationListenerExample</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">MyProperty</span> myProperty <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyProperty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">InvalidationListener</span> listener <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">InvalidationListener</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">invalidated</span><span class="token punctuation">(</span><span class="token class-name">Observable</span> observable<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;A tulajdonság érvénytelenítve lett.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>

        myProperty<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span>listener<span class="token punctuation">)</span><span class="token punctuation">;</span>

        myProperty<span class="token punctuation">.</span><span class="token function">setValue</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// Itt meg kell adni a listener objektumot</span>
        myProperty<span class="token punctuation">.</span><span class="token function">removeListener</span><span class="token punctuation">(</span>listener<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">MyProperty</span> <span class="token keyword">implements</span> <span class="token class-name">Observable</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> value<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">InvalidationListener</span> listener<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addListener</span><span class="token punctuation">(</span><span class="token class-name">InvalidationListener</span> listener<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>listener <span class="token operator">=</span> listener<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">removeListener</span><span class="token punctuation">(</span><span class="token class-name">InvalidationListener</span> listener<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>listener <span class="token operator">==</span> listener<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>listener <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setValue</span><span class="token punctuation">(</span><span class="token keyword">int</span> newValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">!=</span> newValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            value <span class="token operator">=</span> newValue<span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>listener <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                listener<span class="token punctuation">.</span><span class="token function">invalidated</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><p>Azoknál a tulajdonságoknál, amelyek bonyolult vagy költséges számításokat igényelnek, ez egy hasznos eszköz lehet, de nem tapasztalom, hogy annyira gyakran használnák, mint a <code>ChangeListeners</code>-t.</p><p><code>ChangeListeners</code>: A JavaFX tulajdonságok az <code>ObservableValue&lt;T&gt;</code> interfészt is kiterjesztik, ami azt jelenti, hogy olyan <em>listenereket</em> is regisztrálhatunk, amelyek csak akkor hívódnak meg, ha egy objektum ténylegesen megváltozott.</p><p>A <em>listenerek</em> lehetővé teszik számunkra, hogy értesüljünk egy változásról, és előre meghatározott kódot biztosítsunk, amely az új és régi tulajdonságértékeken alapul.</p><h3 id="valtozasokrol-valo-ertesules" tabindex="-1"><a class="header-anchor" href="#valtozasokrol-valo-ertesules" aria-hidden="true">#</a> Változásokról való értesülés</h3><p>Egy tulajdonsághoz az <code>addListener()</code> metódus meghívásával regisztrálhatunk egy figyelőt, amely vagy egy <code>InvalidationListener</code> (kevésbé gyakori), vagy egy <code>ChangeListener</code> (gyakoribb).</p><p>Használatához elegendő implementáláni a <code>ChangeListener</code> interfész - ez egy funkcionális interfész egy metódussal: <code>changed()</code>.</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">DoubleProperty</span> magassag <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleDoubleProperty</span><span class="token punctuation">(</span><span class="token number">2500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">ChangeListener</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Number</span><span class="token punctuation">&gt;</span></span> changeListener <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ChangeListener</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Number</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">changed</span><span class="token punctuation">(</span><span class="token class-name">ObservableValue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">Number</span><span class="token punctuation">&gt;</span></span> observable<span class="token punctuation">,</span> <span class="token class-name">Number</span> oldValue<span class="token punctuation">,</span> <span class="token class-name">Number</span> newValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>newValue<span class="token punctuation">.</span><span class="token function">doubleValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">1500</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">ejtoernyoKinyitasa</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

magassag<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span>changeListener<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Az összes számértékű tulajdonság (<code>double</code>, <code>float</code>, <code>int</code> és <code>long</code>) esetében olyan <code>ChangeListener</code>-ek szükségesek, amelyek paraméterként <code>Number</code> típust várnak.</p><div class="hint-container info"><p class="hint-container-title">lambda</p><p>Természetesen, mivel ezek funkcionális interfészek, lehetőség van rá, hogy létrehozzuk őket <strong>lambda</strong> kifejezések segítségével.</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>magassag<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token punctuation">(</span>observable<span class="token punctuation">,</span> oldValue<span class="token punctuation">,</span> newValue<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>newValue<span class="token punctuation">.</span><span class="token function">doubleValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">15000</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">deployParachute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><p>Minden alkalommal, amikor a tulajdonság értéke megváltozik, a <code>listener</code> egyszer működésbe lép.</p><h3 id="mi-az-a-kotes" tabindex="-1"><a class="header-anchor" href="#mi-az-a-kotes" aria-hidden="true">#</a> Mi az a kötés?</h3><p>A kötésekkel az objektumokat összeköthetjük, és olyan kapcsolatot hozunk létre, amelyben az egyik objektum függ legalább egy másik objektumtól. A tulajdonságok natív módon, valamint <code>Expression</code> és <code>Binding</code> objektumok létrehozásával köthetők.</p><p>A <code>Expression</code> és a <code>Binding</code> megfigyelhető objektumok, amelyek legalább egy másik megfigyelhető objektum értékétől is függnek (<em>de potenciálisan több is lehet</em>). Ez lehetővé teszi, hogy több számítást tartalmazó kifejezésláncokat hozzon létre: szuperegyszerű módja a karakterlánc- vagy számkonverziók összekapcsolásának.</p><h3 id="hogyan-kossunk-ossze-property-ket" tabindex="-1"><a class="header-anchor" href="#hogyan-kossunk-ossze-property-ket" aria-hidden="true">#</a> Hogyan kössünk össze Property-ket</h3><p>Háttérben a kötés (<code>binding</code>) egy speciális használati módja a változásfigyelésnek. Az összes <strong>JavaFX Binding API</strong> tartalmaz sablonkódot, amely figyeli (<strong>legalább</strong>) egy tulajdonság változását, és minden változást alkalmaz az adott kötés értékének frissítéséhez.</p><p>Míg a <code>ChangeListner</code>-ek lehetővé teszik előre definiált kód megadását, a kötés lehetővé teszi két tulajdonság egyszerű összekapcsolását anélkül, hogy aggódnánk a konkrét érték frissítésének a megvalósítása miatt.</p><p>A legegyszerűbb és leggyakrabban használt módszerek azok, amelyek a <code>Property</code> objektumokhoz vannak csatolva: <code>bind()</code> és <code>bindBidirectional()</code>. Ezek a legegyszerűbb lehetőségek az egyirányú és kétirányú kötések létrehozásához.</p><h3 id="egyiranyu-kotes" tabindex="-1"><a class="header-anchor" href="#egyiranyu-kotes" aria-hidden="true">#</a> Egyirányú kötés</h3><p>Amikor meghívod a <code>bind()</code> módszert egy tulajdonságon, átadsz neki egy második tulajdonságot <em>argumentumként</em> - ez a kötés forrása.</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">StringProperty</span> sourceProperty <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleStringProperty</span><span class="token punctuation">(</span><span class="token string">&quot;First Value&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">StringProperty</span> targetProperty <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleStringProperty</span><span class="token punctuation">(</span><span class="token string">&quot;Second Value&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
targetProperty<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>sourceProperty<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>A háttérben a tulajdonság egy hivatkozást tárol, ahol az új tulajdonságnak figyeli a változásait. Amikor a forrás (<code>sourceProperty</code>) értéke megváltozik, automatikusan frissíti a célt (<code>targetProperty</code>), amikor változást észlel.</p><figure><img src="`+i+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Ebben az esetben a <code>targetProperty</code> követni fogja a <code>sourceProperty</code> értékét. Néhány megjegyzés a módszerhez tartozó további részekről:</p><ul><li>Ha a tulajdonság jelenleg kötve van, a jelenlegi kötése megszűnik, és az új kötés lép a helyére.</li><li>Ha <code>null</code> értéket adunk át argumentumként, a metódus <code>NullPointerException</code> kivételt dob.</li><li>A metódus azonnal másolja a megfigyelt tulajdonság értékét, így az aktuális <code>targetProperty</code> értéke elveszik.</li></ul><details class="hint-container details"><summary>Egyirányú kötés példakód</summary><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>vasvari<span class="token punctuation">.</span>helloworld</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javafx<span class="token punctuation">.</span>application<span class="token punctuation">.</span></span><span class="token class-name">Application</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javafx<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>property<span class="token punctuation">.</span></span><span class="token class-name">SimpleStringProperty</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javafx<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>property<span class="token punctuation">.</span></span><span class="token class-name">StringProperty</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javafx<span class="token punctuation">.</span>geometry<span class="token punctuation">.</span></span><span class="token class-name">Insets</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javafx<span class="token punctuation">.</span>scene<span class="token punctuation">.</span></span><span class="token class-name">Scene</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javafx<span class="token punctuation">.</span>scene<span class="token punctuation">.</span>control<span class="token punctuation">.</span></span><span class="token class-name">Label</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javafx<span class="token punctuation">.</span>scene<span class="token punctuation">.</span>control<span class="token punctuation">.</span></span><span class="token class-name">TextField</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javafx<span class="token punctuation">.</span>scene<span class="token punctuation">.</span>layout<span class="token punctuation">.</span></span><span class="token class-name">VBox</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javafx<span class="token punctuation">.</span>stage<span class="token punctuation">.</span></span><span class="token class-name">Stage</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OneWayBindingExample</span> <span class="token keyword">extends</span> <span class="token class-name">Application</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">start</span><span class="token punctuation">(</span><span class="token class-name">Stage</span> stage<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Create StringProperty</span>
        <span class="token class-name">StringProperty</span> sourceProperty <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleStringProperty</span><span class="token punctuation">(</span><span class="token string">&quot;Default Value&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Create UI components</span>
        <span class="token class-name">TextField</span> textField <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TextField</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Label</span> label <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Label</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Bind the label&#39;s text property to the text property of the TextField</span>
        label<span class="token punctuation">.</span><span class="token function">textProperty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>textField<span class="token punctuation">.</span><span class="token function">textProperty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Layout setup</span>
        <span class="token class-name">VBox</span> root <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VBox</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        root<span class="token punctuation">.</span><span class="token function">setPadding</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Insets</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        root<span class="token punctuation">.</span><span class="token function">getChildren</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addAll</span><span class="token punctuation">(</span>textField<span class="token punctuation">,</span> label<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Scene setup</span>
        <span class="token class-name">Scene</span> scene <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scene</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Stage setup</span>
        stage<span class="token punctuation">.</span><span class="token function">setTitle</span><span class="token punctuation">(</span><span class="token string">&quot;One-Way Binding Example&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        stage<span class="token punctuation">.</span><span class="token function">setScene</span><span class="token punctuation">(</span>scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
        stage<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">launch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="ketiranyu-kotes" tabindex="-1"><a class="header-anchor" href="#ketiranyu-kotes" aria-hidden="true">#</a> Kétirányú kötés</h3><p>Ha két tulajdonságot szeretnénk összekötni úgy, hogy mindig ugyanaz legyen az értékük, akkor használhatjuk a <code>bindBidirectional()</code> függvényt, amelynek argumentumaként átadjuk a forrás tulajdonságot.</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">StringProperty</span> sourceProperty <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleStringProperty</span><span class="token punctuation">(</span><span class="token string">&quot;First Value&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">StringProperty</span> targetProperty <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleStringProperty</span><span class="token punctuation">(</span><span class="token string">&quot;Second Value&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
targetProperty<span class="token punctuation">.</span><span class="token function">bindBidirectional</span><span class="token punctuation">(</span>sourceProperty<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ha a tulajdonságok értéke különböző, akkor a metódus hívásának sorrendje fontos a kötés kezdőértékének meghatározásában.</p><p>A <code>targetProperty</code> alkalmazott tulajdonság azonnal frissíti a <code>targetProperty</code> értékét, mielőtt a <code>sourceProperty</code>-vel azt összekötnénk. Ez azt jelenti, hogy a kétirányú kötés után mindkét tulajdonság az argumentumként átadott tulajdonság értékével fog rendelkezni.</p><figure><img src="`+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>A <strong>JavaFX</strong> nemcsak az alapvető, egyszerű másoláson alapuló kötést támogatja, hanem lehetőséget nyújt a tulajdonságok bonyolultabb összekapcsolására is: több tulajdonság összekapcsolására vagy egy tulajdonságnak bonyolult manipulációja a másik tulajdonságának a frissítésére.</p><p>A következő részekben áttekintjük a bonyolultabb kötéseket.</p><details class="hint-container details"><summary>Kétirányú kötés példakód</summary><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>vasvari<span class="token punctuation">.</span>helloworld</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javafx<span class="token punctuation">.</span>application<span class="token punctuation">.</span></span><span class="token class-name">Application</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javafx<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>property<span class="token punctuation">.</span></span><span class="token class-name">SimpleStringProperty</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javafx<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>property<span class="token punctuation">.</span></span><span class="token class-name">StringProperty</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javafx<span class="token punctuation">.</span>geometry<span class="token punctuation">.</span></span><span class="token class-name">Insets</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javafx<span class="token punctuation">.</span>scene<span class="token punctuation">.</span></span><span class="token class-name">Scene</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javafx<span class="token punctuation">.</span>scene<span class="token punctuation">.</span>control<span class="token punctuation">.</span></span><span class="token class-name">Label</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javafx<span class="token punctuation">.</span>scene<span class="token punctuation">.</span>control<span class="token punctuation">.</span></span><span class="token class-name">TextField</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javafx<span class="token punctuation">.</span>scene<span class="token punctuation">.</span>layout<span class="token punctuation">.</span></span><span class="token class-name">VBox</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javafx<span class="token punctuation">.</span>stage<span class="token punctuation">.</span></span><span class="token class-name">Stage</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TwoWayBindingExample</span> <span class="token keyword">extends</span> <span class="token class-name">Application</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">start</span><span class="token punctuation">(</span><span class="token class-name">Stage</span> stage<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Create StringProperties</span>
        <span class="token class-name">StringProperty</span> sourceProperty <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleStringProperty</span><span class="token punctuation">(</span><span class="token string">&quot;First Value&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">StringProperty</span> targetProperty <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleStringProperty</span><span class="token punctuation">(</span><span class="token string">&quot;Second Value&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Bind the properties bidirectionally</span>
        targetProperty<span class="token punctuation">.</span><span class="token function">bindBidirectional</span><span class="token punctuation">(</span>sourceProperty<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Create UI components</span>
        <span class="token class-name">TextField</span> sourceTextField <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TextField</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">TextField</span> targetTextField <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TextField</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Bind the text properties bidirectionally to the StringProperties</span>
        sourceTextField<span class="token punctuation">.</span><span class="token function">textProperty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">bindBidirectional</span><span class="token punctuation">(</span>sourceProperty<span class="token punctuation">)</span><span class="token punctuation">;</span>
        targetTextField<span class="token punctuation">.</span><span class="token function">textProperty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">bindBidirectional</span><span class="token punctuation">(</span>targetProperty<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Label</span> infoLabel <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Label</span><span class="token punctuation">(</span><span class="token string">&quot;Type in one field and see the other update!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Layout setup</span>
        <span class="token class-name">VBox</span> root <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VBox</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        root<span class="token punctuation">.</span><span class="token function">setPadding</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Insets</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        root<span class="token punctuation">.</span><span class="token function">getChildren</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addAll</span><span class="token punctuation">(</span>sourceTextField<span class="token punctuation">,</span> targetTextField<span class="token punctuation">,</span> infoLabel<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Scene setup</span>
        <span class="token class-name">Scene</span> scene <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scene</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Stage setup</span>
        stage<span class="token punctuation">.</span><span class="token function">setTitle</span><span class="token punctuation">(</span><span class="token string">&quot;Two-Way Binding Example&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        stage<span class="token punctuation">.</span><span class="token function">setScene</span><span class="token punctuation">(</span>scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
        stage<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">launch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,63);function r(d,m){return s(),a("div",null,[k,e(`-
## Haladó kötési technikák

Három módszer áll rendelkezésre bármely tulajdonság manipulálására és a manipulált érték kötésére:

- A \`Fluent API\` - olyan módszerek, mint a \`myProperty.bind(otherProperty).multiply(2)\`
- A \`Bindings API\` - olyan módszerek, mint a \`Bindings.add(myProperty, otherProperty)\`
- Az \`Low-Level API\` - saját \`Bindings\` objektumok létrehozása, mint például a \`DoubleBinding\`

Ezek közül kettő előre meghatározott implementációkkal rendelkező sablon módszereket biztosít a tulajdonságok összekapcsolásához. Ezek a módszerek a tulajdonságkötések többségének lefedésére elegendőek, mivel hatalmas rugalmasságot biztosítanak.

### Fluent API

![](/assets/images/vasvari/ExpressionChaining.webp)

A __Fluent API__ az \`expression\` objektumok létrehozására támaszkodik, melyek hasonlóak a tulajdonságokhoz (_figyelhető értékek_), de extra kényelmi metódusokkal rendelkeznek a további manipulációk támogatásához.

A tulajdonságokat is össze lehet kötni kifejezésekkel, ami azt jelenti, hogy a manipulációk eredményét fel lehet használni egy tulajdonság frissítéséhez, éppen úgy, mint fentebb. Ennek a funkcionalitásnak - a megfigyelhetőségnek és egy értéktől való függésnek - az az eredménye, hogy láncolás lehetséges.


Például karakterláncok esetében ezt arra használhatjuk, hogy a karakterláncok láncolatát hozzuk létre, amelyeket egymáshoz fűzünk. Amint a \`sourceProperty\` frissül, a \`targetProperty\` automatikusan frissül a kifejezésen keresztül.

\`\`\`java
StringProperty sourceProperty = new SimpleStringProperty("It doesn't matter how slowly you go");
StringExpression expression = sourceProperty.concat(" as long as you don't stop");
StringProperty targetProperty = new SimpleStringProperty("");
targetProperty.bind(expression);
System.out.println(targetProperty.get());
//Output: It doesn't matter how slowly you go as long as you don't stop
\`\`\`

Ezt mind megtehetjük egy sorban, így a bonyolult kódot viszonylag tömörebben írhatjuk. Ebben az esetben létrehozzuk a \`StringExpression\`-t, miközben meghívjuk a bind metódust.

\`\`\`java
targetProperty.bind(sourceProperty.concat(" as long as you don't stop"));
System.out.println(targetProperty.get());
//Output: It doesn't matter how slowly you go as long as you don't stop
\`\`\`

Ez egy kicsit zavaró lehet, de ne felejtsük el, hogy a \`targetProperty\` valójában a \`concat()\` metódus által létrehozott \`StringExpression\`-hez van kötve. Ez az anonim kifejezés az, ami a \`sourceProperty\`-hez lesz kötve.

Lefedi a legtöbb manipulációt, amire szükségünk lehet. A \`Fluent API\`-t számokkal is használhatjuk. Számsorok esetén manipulációkat fűzhetünk egymáshoz, hogy egyszerű, olvasható kódot hozzunk létre, amely tükrözi a reprodukálni kívánt képletet. Például fokból radiánba váltáshoz meg kell szorozni Pi értékével és elosztani 180-tal. 

\`\`\`java
DoubleProperty degrees = new SimpleDoubleProperty(180);
DoubleProperty radians = new SimpleDoubleProperty();
radians.bind(degrees
                .multiply(Math.PI)
                .divide(180)
        );
\`\`\`

:::info 
A kód rendkívül olvasható jelenleg.

Azonban teljesítmény szempontjából minden kifejezés egy láncszem, amelyet minden változáskor frissíteni kell az eredeti tulajdonságban. Ebben a példában, ahol fokokból radiánba váltunk, két megfigyelhető értéket hozunk létre csak azért, hogy frissítsük a radián tulajdonságunkat.
:::

Bonyolult átalakítások esetén, vagy olyan helyzetekben, ahol sok kötést végezünkk, érdemes fontolóra venni a \`Bindings API\` használatát (\`az rugalmasságot nyújt, amire szükséged van\`), vagy a \`Low-Level API\`-t.

### Binding API

A Bindings osztály a __JavaFX__-ben egy segédosztály, amely __249__ metódust tartalmaz a tulajdonságkötésekhez. Lehetővé teszi a különböző típusú megfigyelhető (\`observable\`) objektumok közötti kötések létrehozását. Összekötheted tulajdonságokat értékekkel, például karakterláncokkal és számokkal, a kötéstől függően.


![](/assets/images/vasvari/HowAPropertyOrBindingUpdates.webp)

Az JavaFX-ben 10 általános kötési stratégia létezik, amelyeket a két fő részterület osztottam, ezek a "__műveletek értékeken__" (_values_) és "__műveletek gyűjteményeken__" (_collections_). Néhány nem illeszkedik bele, ezért van egy "__egyéb__" nevű kevésbé elegáns kategóriánk is.

__Értékek__ (_values_):
- Matematika (\`+, - ÷, ×\`)
- A maximum vagy a minimum kiválasztása
- Érték-összehasonlítás (\`=, !=, <, >, <=, >=\`)
- String formázás


__Gyűjtemények__ (_collections_):
- Két gyűjtemény összekapcsolása (listák (_list_), map-ek, set-ek (_halmazok_))
- Értékek kötése objektumokhoz a gyűjtemény egy bizonyos pozíciójában lévő objektumokhoz.
- Kötés a gyűjtemény méretéhez
- Egy gyűjtemény üres-e


__Egyéb kötések__:
- Több objektumhoz kötődések
- Boolean operátorok (és, nem vagy) - (és ha!)
- Értékek kiválasztása


### Értékeken végzett műveletek

A __Bindings API__ támogatást nyújt négy egyszerű matematikai művelethez: __összeadás__, __kivonás__, __szorzás__ és __osztás__. Különféle metódusokat biztosít ezek használatához \`double\`, \`int\` és \`Long\` értékekkel, valamint két \`ObservableNumberValue\` objektum között (például egy \`DoubleProperty\` esetén).


\`\`\`java
DoubleBinding add(double op1, ObservableNumberValue op2)
NumberBinding add(float op1, ObservableNumberValue op2)
NumberBinding add(int op1, ObservableNumberValue op2)
NumberBinding add(long op1, ObservableNumberValue op2)
DoubleBinding add(ObservableNumberValue op1, double op2)
NumberBinding add(ObservableNumberValue op1, float op2)
NumberBinding add(ObservableNumberValue op1, int op2)
NumberBinding add(ObservableNumberValue op1, long op2)
NumberBinding add(ObservableNumberValue op1, ObservableNumberValue op2)
\`\`\`



### Low-level API

A \`Low-Level API\` egy 10 absztrakt \`Binding\` osztály gyűjteménye, melyeket az összes kötés nehézkes részének végrehajtására terveztek (_például hallgatók hozzáadása és eltávolítása_). Az osztály \`observable\` értékeket vesz fel, és átalakítja őket egy kimenetre. A __Fluent__ és a __Bindings API__-khoz hasonlóan a __Low-level API__ is támogatja a \`boolean\`, \`string\`, \`számok\`, \`gyűjtemények\` és \`objektumok\` használatát.


#### Low-Level API kötés létrehozása

Olyan egyszerű lehet, mint egy absztrakt belső osztály definiálása (_egy osztály, amit más kóddal együtt definiálsz_). Mivel az absztrakt \`Bindings\` osztályoknak csak egy absztrakt metódusa van, csak akkor kell a \`computeValue()\` metódust felülírnod, amikor definiáljuk.

Amint definiáljuk a kötést, az hivatalos tanács az, hogy használjunk inicializációs blokkot, amely összeköti a forrás tulajdonságokat a kötés létrehozása során. Az összhatás pontosan ugyanaz - _a fordító amúgy is beilleszti a kódot az inicializációs blokkokba_ - viszont a konstruktor megközelítés alkalmasabb, ha egy olyan konkurens osztályt hozol létre, amit többször is használni fogsz.

\`\`\`java
//Inside your binding object at the top
{
    super.bind(cost, itemCount);
}
\`\`\`

Ezután csak meg kell határoznod a \`computeValue()\` metódust. Ebben az esetben egészen egyszerű, de a számítást akár bonyolultabbá is teheted, ahogyan csak szeretnéd.

\`\`\`java
DoubleProperty cost = new SimpleDoubleProperty(25);
IntegerProperty itemCount = new SimpleIntegerProperty(15);
DoubleBinding totalCost = new DoubleBinding() {
    
    {
        super.bind(cost, itemCount);
    }
    
    @Override
    protected double computeValue() {
        return itemCount.get() * cost.get();
    }
};
\`\`\`


Ettől a ponttól kezdve a \`totalCost\` kötés értéke mindig tükrözi a \`cost\` és \`itemCount\` tulajdonságok szorzatát.

Ha szeretnéd, hogy a \`totalCost\` objektumot továbbadhassa és később visszakaphassa a függőségeket, extra funkcionalitást adhatsz hozzá az alapértelmezett \`getDependencies()\` metódus felülírásásával.

#### További funkcionalitás hozzáadása a Low-Level API kötésekhez

Az \`Low-Level API\` minden osztálya bővíthető a \`getDependencies()\` és \`dispose()\` metódusok felülírásásával.

- \`getDependencies()\`: visszatérhet az összes függőséggel, ha szükséges őket tárolni és később visszakapni.
- \`dispose()\`: leiratkozhat az összes kötés függőségére regisztrált \`listener\`-ről.



##### \`getDependencies()\` felülírása

A \`getDependencies()\` metódus felülírása fontos, ha szeretnéd átadni a kötés objektumot egy másik osztálynak, vagy tárolni és később visszakapni a függőségeket.

\`\`\`java
DoubleBinding totalCost = new DoubleBinding() {
    {
        super.bind(cost, itemCount);
    }
    @Override
    protected double computeValue() {
        return itemCount.get() * cost.get();
    }
    @Override
    public ObservableList<?> getDependencies() {
        return FXCollections.observableList(Arrays.asList(cost, itemCount));
    }
};
\`\`\`

Érdemes észben tartani, mielőtt nekiesnénk felülírni ezt a metódust, hogy a \`Low-Level API\` összes alapértelmezett implementációja __weak listenereket__ használ. Ez azt jelenti:

:::warning Ha a Low-Level API-t az alapértelmezett implementációval használjuk, akkor erős referenciákat kell fenntartania a \`observable\` (_megfigyelhető_) objektumokra, különben azok szemétgyűjtésre (\`garbage collected\`) kerülnek, és a hivatkozás elveszik.
:::

Ezzel együtt, ha erős __listenerekkel__ implementáltad a kötést, akkor érdemes lesz a \`dispose()\` metódust is felülírnod. Ez megakadályozza a memóriaszivárgásokat, amelyek akkor jelentkezhetnek, ha egy kötést nem törölnek le az \`observable\` objektumról, miután már használták.


\`\`\`java
@Override
public void dispose() {
    unbind(cost, itemCount);
}
\`\`\`

Ez a példa kód azt mutatja be, ahol egy \`SimpleDoubleProperty\` objektumot és egy \`DoubleBinding\` osztályt használunk. Az alkalmazás automatikusan számolja ki és frissíti egy szám négyzetgyökét, amikor az eredeti szám értéke megváltozik, és a _binding_ feloldása is implementálva van.

\`\`\`java
package org.vasvari.helloworld;

import javafx.beans.binding.DoubleBinding;
import javafx.beans.property.SimpleDoubleProperty;

public class SquareRootBindingExample {

    public static void main(String[] args) {
        // Létrehozunk egy SimpleDoubleProperty-t kezdeti értékkel
        SimpleDoubleProperty number = new SimpleDoubleProperty(256);

        // Létrehozunk egy DoubleBinding példányt a négyzetgyök kiszámítására
        DoubleBinding squareRoot = new DoubleBinding() {
            {
                // Az összekötés (binding) inicializálása a number property-vel
                this.bind(number);
            }

            // Az örökölt computeValue metódus felülírása a négyzetgyök kiszámítására
            @Override
            protected double computeValue() {
                double n = number.get();
                return Math.sqrt(n);
            }
        };

        // Kiírjuk az eredeti értéket és annak négyzetgyökét
        System.out.println("Eredeti érték: " + number.getValue());
        System.out.println("Négyzetgyök: " + squareRoot.getValue());

        // Megváltoztatjuk az eredeti értéket, és megfigyeljük a négyzetgyök értékének változását
        number.setValue(64);
        System.out.println("Eredeti érték: " + number.getValue());
        System.out.println("Négyzetgyök: " + squareRoot.getValue());

        // Feloldjuk a bindinget, amikor már nem szükséges
        squareRoot.dispose();
    }
}
\`\`\`
`)])}const b=n(u,[["render",r],["__file","lesson3b.html.vue"]]);export{b as default};
