import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as s,d as e}from"./app-434ca933.js";const t={},o=e(`<h1 id="konzol-2-0" tabindex="-1"><a class="header-anchor" href="#konzol-2-0" aria-hidden="true">#</a> Konzol 2.0</h1><div class="hint-container note"><p class="hint-container-title">Röviden</p><ul><li><p>A <code>Console</code> osztállyal:</p><ul><li>írhatunk egy sort (<code>Write</code>),</li><li>várhatunk egyetlen billentyűleütésre (<code>ReadKey</code>),</li><li>megváltoztathatjuk a színeket (<code>ForegroundColor</code>, <code>BackgroundColor</code>),</li><li>törölhetjük az egész konzolablakot (<code>Clear</code>),</li><li>megváltoztathatjuk az ablak címét (<code>Title</code>),</li><li>és lejátszhatunk retro hangjelzéseket (<code>Beep</code>).</li></ul></li><li><p>Az <code>escape</code> karakterek a <code>\\</code> karakterrel kezdődnek és azután mondják meg a számítógépnek, hogy a következő karaktert másképp értelmezze. A <code>\\n</code> egy új sor, a <code>\\t</code> egy tabulátor, <code>\\&quot;</code> egy idézőjel egy karakterláncban.</p></li><li><p>A <code>@</code> karakterlánc után figyelmen kívül hagy minden lehetséges <code>escape</code> szekvenciát: <code>@&quot;C:\\Users\\Me\\File.txt&quot;</code>.</p></li><li><p>A <code>$</code> karakterlánc előtte azt jelenti, hogy a kapcsos zárójelek kódot tartalmaznak: <code>$&quot;a:{a} sum:{a+b}&quot;</code>.</p></li></ul></div><p>Elmélyítjük a konzollal kapcsolatos ismereteinket és megtanulunk néhány dolgot, amelyekkel könnyebbé tehetjük a szöveggel és a konzolablakkal való munkát. Bár a konzolablak nem olyan mutatós, mint egy <strong>GUI</strong> vagy egy <strong>weboldal</strong> de attól nem kell, hogy unalmas legyen.</p><h2 id="a-console-osztaly" tabindex="-1"><a class="header-anchor" href="#a-console-osztaly" aria-hidden="true">#</a> A Console osztály</h2><p>A <code>Console</code> osztályt már az első <strong>Hello World</strong> programunk óta használjuk, de itt az ideje, hogy mélyebbre ássunk benne, hogy lássuk, mire képes még. A <code>Console</code> számos metódussal rendelkezik és néhány saját változót is biztosít.</p><h3 id="az-write-metodus" tabindex="-1"><a class="header-anchor" href="#az-write-metodus" aria-hidden="true">#</a> Az <code>Write</code> metódus</h3><p>A <code>Console.WriteLine</code> mellett egy másik, <code>Write</code> nevű metódus ugyanazt teszi, mint a <code>WriteLine</code>, csak nem ugrik a következő sorra, amikor befejeződik. Ennek sokféle felhasználási módja van, de az egyik, amit szeretek, az az, hogy a felhasználónak feltehetünk egy kérdést és hagyjuk, hogy ugyanabban a sorban válaszoljon:</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>Console<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span><span class="token string">&quot;What is your name, human? &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">string</span></span> userName <span class="token operator">=</span> Console<span class="token punctuation">.</span><span class="token function">ReadLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="a-readkey-metodus" tabindex="-1"><a class="header-anchor" href="#a-readkey-metodus" aria-hidden="true">#</a> A <code>ReadKey</code> metódus</h3><p>A <code>Console.ReadKey</code> metódus nem várja meg, hogy a felhasználó megnyomja az <strong>Enter</strong> billentyűt a befejezés előtt. Csak egyetlen billentyűlenyomásra vár. Tehát, ha olyasmit szeretnénk megtenni, mint például <strong>Nyomj meg egy billentyűt a folytatáshoz...</strong>, akkor a <code>Console.ReadKey</code>-t használhatod:</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;Nyomj meg egy billentyűt, amikor készen állsz a kezdéshez.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Console<span class="token punctuation">.</span><span class="token function">ReadKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Ennek a kódnak viszont van egy kis problémája. Ha egy betűt lenyomunk, akkor az a betű még megjelenik a képernyőn. Van erre egy megoldás. Két verziója van a <code>ReadKey</code> metódusnak. Az egyik verzió, amit fentebb láttunk, nem rendelkezik bemenettel. A másik verzió egy olyan <code>bool</code> típusú bemenettel rendelkezik, amely azt jelzi, hogy a szöveget &quot;<em>kapja el</em>&quot; vagy sem. Ha elkapja, akkor nem jelenik meg a konzolablakban. Ennek a verziónak a használata a következőképpen néz ki:</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;Nyomj meg egy billentyűt, amikor készen állsz a kezdéshez.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Console<span class="token punctuation">.</span><span class="token function">ReadKey</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="szinek-modositasa" tabindex="-1"><a class="header-anchor" href="#szinek-modositasa" aria-hidden="true">#</a> Színek módosítása</h3><p>A <code>Console</code> osztály változókat biztosít, amelyek tárolják a szöveg megjelenítéséhez használt színeket. Nem ragadunk le csak a fekete-fehér kombinációnál! Ezt legjobban egy példával lehet illusztrálni:</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>Console<span class="token punctuation">.</span>BackgroundColor <span class="token operator">=</span> ConsoleColor<span class="token punctuation">.</span>Yellow<span class="token punctuation">;</span>
Console<span class="token punctuation">.</span>ForegroundColor <span class="token operator">=</span> ConsoleColor<span class="token punctuation">.</span>Black<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Ha ehez a két változóhoz új értéket rendelünk, akkor a konzol fekete szöveget fog sárga hátterel megjeleníteni. A <code>BackgroundColor</code> és a <code>ForegroundColor</code> változó, nem pedig metódus, így nem használunk zárójeleket. Ezek a sorok új értéket rendelnek hozzá ezekhez a változókhoz - <em>bár eddig nem láttunk még hasonlót, mint a <code>ConsoleColor.Yellow</code> vagy <code>ConsoleColor.Black</code></em>.</p><p><code>ConsoleColor</code> egy enumeráció, erről többet fogunk megtudni egy kicsit később. Röviden elmondva egy enumeráció egy értékek gyűjteményét definiálja és mindegyikhez egy nevet rendel. A <code>Yellow</code> és a <code>Black</code> két elem neve a <code>ConsoleColor</code> gyűjteményben.</p><h3 id="a-clear-metodus" tabindex="-1"><a class="header-anchor" href="#a-clear-metodus" aria-hidden="true">#</a> A <code>Clear</code> metódus</h3><p>Miután megváltoztattuk a konzol háttérszínét, észrevehetjük, hogy ez nem változtatja meg az ablak teljes háttérét, csak az újonnan írt betűkét. A <code>Console.Clear</code> metódusát használhatjuk az összes szöveg letörlésére a képernyőről és az egész háttérszín megváltoztatására az újonnan beállított háttérszínre:</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>Console<span class="token punctuation">.</span><span class="token function">Clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Ez eltávolítja az összes jelenlegi szöveget a képernyőről (<em>ami valójában is a fő célja</em>), ezért fontos, hogy csak a megfelelő pillanatokban alkalmazd.</p><h3 id="az-ablak-cimenek-modositasa" tabindex="-1"><a class="header-anchor" href="#az-ablak-cimenek-modositasa" aria-hidden="true">#</a> Az ablak címének módosítása</h3><p>A <code>Console</code>-nak van egy <code>Title</code> változója is, amely megváltoztatja a konzolablak fejlécében megjelenő szöveget. A típusa egy karakterlánc.</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>Console<span class="token punctuation">.</span>Title <span class="token operator">=</span> <span class="token string">&quot;Hello, World!&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Majdnem minden jobb, mint az alapértelmezett név, ami általában értelmetlen.</p><h3 id="a-beep-metodus" tabindex="-1"><a class="header-anchor" href="#a-beep-metodus" aria-hidden="true">#</a> A Beep metódus</h3><p>A Console osztály még csipogni is tud! A Beep metódus létrehozza a csipogó hangot:</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>Console<span class="token punctuation">.</span><span class="token function">Beep</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Ha zenész vagy, van egy változat, amely lehetővé teszi számodra a frekvencia és az időtartam kiválasztását:</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>Console<span class="token punctuation">.</span><span class="token function">Beep</span><span class="token punctuation">(</span><span class="token number">440</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Ehhez a Beep metódushoz két információra van szükségünk. Az első az frekvencia. Minél magasabb a szám, annál magasabb a hangmagasság - <em>a 440 közép hangmagasság</em>. A második információ a időtartam, mérve milliszekundumban.</p><h2 id="a-string-keszsegek-fejlesztese" tabindex="-1"><a class="header-anchor" href="#a-string-keszsegek-fejlesztese" aria-hidden="true">#</a> A string készségek fejlesztése</h2><p>Nézzünk meg néhány karakterlánccal kapcsolatos újdonságot.</p><h3 id="escape-karakter" tabindex="-1"><a class="header-anchor" href="#escape-karakter" aria-hidden="true">#</a> Escape karakter</h3><p>Hogyan jelenítsük meg az idézőjelet ? Ez az opció így nem működik:</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span>&quot;<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// HIBA: Rossz idézőjelek!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>A fordító az első idézőjelet egy karakterlánc kezdeteként, a másodikat pedig annak végként érzékel. A harmadik egy újabb karakterlánc kezdete, amely sosem ér véget és fordítási hibákat kapunk.</p><p>A C# nyelvben a <strong>backslash</strong> az escape karakter (<code>\\</code>). A <strong>backslash</strong>, amit egy idézőjel követ (<code>\\&quot;</code>) utasítja a fordítót arra, hogy a karaktert szó szerinti idézőjeleként értelmezze a karakterláncban és ne kezelje azt a karakterlánc végeként:</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;\\&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>A fordító az első idézőjelet a karakterlánc kezdeteként észleli, a középső <code>\\&quot;</code>-t idézőjelkarakterként a szövegen belül és a harmadikat a karakterlánc végként értelmezi.</p><p>Az idézőjel nem az egyetlen escape karakter. Itt van néhány más is pélául:</p><ul><li><code>\\t</code> egy tabulátor karakter,</li><li><code>\\n</code> egy új sor karakter,</li><li>és <code>\\r</code> egy visszatérés karakter.</li></ul><p>Mi van akkor, ha szeretnénk egy <code>\\</code> karaktert a karakterláncunkban? Van erre is egy escape karakter: <code>\\\\</code>. Ez lehetővé teszi, hogy <strong>backslash</strong> karakterek is szerepeljenek a karakterláncainkban:</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;C:\\\\Users\\\\Felhasznalo\\\\Desktop\\\\MyFile.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Így a kód a következőt jeleníti meg:</p><div class="language-console line-numbers-mode" data-ext="console"><pre class="language-console"><code>C:\\Users\\Felhasznalo\\Desktop\\MyFile.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>A szöveg elé elhelyezhetünk egy <code>@</code> jelet , hogy utasítsd a fordítót arra, hogy mindent pontosan úgy kezeljen:</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">@&quot;C:\\Users\\RB\\Desktop\\MyFile.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="kifejezesek-beagyazasa-karakterlancba" tabindex="-1"><a class="header-anchor" href="#kifejezesek-beagyazasa-karakterlancba" aria-hidden="true">#</a> Kifejezések beágyazása karakterláncba</h3><p>Gyakori, hogy egyszerű kifejezéseket vegyítsünk szöveggel. Például:</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>Console<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span><span class="token string">&quot;A kedvenc számom: &quot;</span> <span class="token operator">+</span> kedvencSzam <span class="token operator">+</span> <span class="token string">&quot;.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Ez a kód a <strong>+</strong> operátort használja karakterláncok összefűzéséhez - gyakran <strong>karakterlánc konkatenációnak</strong> nevezik és nem összeadásnak. Ezt már láttuk és ez egy hasznos eszköz, de nehezen olvashatóvá válhat. A karakterlánc beágyazás lehetővé teszi, hogy kifejezéseket ágyazzunk be egy karakterláncba, azzal, hogy kapcsos zárójelekkel vesszük körbe:</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$&quot;A kedvenc számom: </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">kedvencSzam</span><span class="token punctuation">}</span></span><span class="token string">.&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>A karakterlánc előtt el kell helyeznünk először is egy <code>$</code> jelet. A karakterláncban bármilyen kifejezést kapcsos zárójelek közé zárhatunk és az eredmény ezután karakterlánccá alakul.</p><p>Általában sokkal olvashatóbb kódot eredményez, de kerüljük a hosszú kifejezések beágyazását a szövegbe. Jobb először kiszámolni az eredményt és eltárolni egy változóban.</p><h3 id="karaktereklancok-igazitasa" tabindex="-1"><a class="header-anchor" href="#karaktereklancok-igazitasa" aria-hidden="true">#</a> Karakterekláncok igazítása</h3><p>Az igazítás lehetővé teszi egy karakterlánc megjelenítését egy meghatározott preferált szélességgel. Szükség esetén szóközök kerülnek hozzáadásra az érték elé a kívánt szélesség eléréséhez. Az igazítás hasznos, ha szöveget táblázatosan szeretnénk elrendezni és szükségünk van arra, hogy azok vízszintesen igazodjanak. A preferált szélesség megadásához helyezzünk el egy vesszőt majd a kívánt szélességet, a kiértékelendő kifejezés mögött:</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">string</span></span> nev1 <span class="token operator">=</span> Console<span class="token punctuation">.</span><span class="token function">ReadLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">string</span></span> nev2 <span class="token operator">=</span> Console<span class="token punctuation">.</span><span class="token function">ReadLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$&quot;#1: </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">nev1<span class="token punctuation">,</span><span class="token number">20</span></span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$&quot;#2: </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">nev2<span class="token punctuation">,</span><span class="token number">20</span></span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ha az én két változóban tárolt nevem <em>Steve</em> és <em>Captain America</em> lenne, a kimenet a következőképpen alakulna:</p><div class="language-console line-numbers-mode" data-ext="console"><pre class="language-console"><code>#1:                Steve
#2:      Captain America
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Ez a kód 20 karaktert tart fenn a név megjelenítéséhez. Ha a hossz kevesebb, mint 20 karakter akkor szóközök kerülnek elé hozzáadásra, hogy elérje a kívánt szélességet.</p><p>Ha azt szeretnénk, hogy a szóközök a szó után legyenek, használjunk negatív értéket:</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$&quot;</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">nev1<span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">20</span></span><span class="token punctuation">}</span></span><span class="token string"> - 1&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$&quot;</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">nev2<span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">20</span></span><span class="token punctuation">}</span></span><span class="token string"> - 2&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Ez a következő kimenetet eredményezi:</p><div class="language-console line-numbers-mode" data-ext="console"><pre class="language-console"><code>Steve                - 1
Captain America      - 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Az szélességeknek két jelentős korlátja van. Először is, nincs kényelmes módja a szöveg középre igazításának. Másodszor ha a szöveg amit írunk hosszabb, mint a preferált szélesség, akkor a program nem vágja le a szöveget, hanem egyszerűen tovább írja a karaktereket, ami összezavarja az oszlopokat.</p><h3 id="karakterlancok-formazasa" tabindex="-1"><a class="header-anchor" href="#karakterlancok-formazasa" aria-hidden="true">#</a> Karakterláncok formázása</h3><p>A formázás lehetővé az adatok megjelenítésének modosítását. Amikor egy lebegőpontos számot jelenítünk meg, sok tizedesjegyet ír ki. Például a <code>Console.WriteLine(Math.PI);</code> <strong>3.141592653589793</strong>-t jelenít meg. Gyakran nincs szükség az összes tizedesjegyre és inkább kerekítenénk. A következő kód azt mutatja meg, hogy hogyan írjunk ki számot három tizedesjeggyel:</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$&quot;</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">Math<span class="token punctuation">.</span>PI</span><span class="token format-string"><span class="token punctuation">:</span>0.000</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>A formázáshoz a változó után kettőspontot helyezzünk el, majd egy formátum karakterláncot. Ez a <strong>3.142</strong>-t jeleníti meg és még kerekít is!<br> A 0 bármelyik formátumban azt jelzi, hogy szeretnénk egy számot ott látni, még akkor is, ha a szám nem feltétlenül szükséges. Például a 42-es szám esetén egy <strong>000.000</strong> formátumú karakterlánc használata azt eredményezi, hogy <strong>042.000</strong>-ként jeleníti meg.<br> Ellentétben, a <strong>#</strong> helyet hagy a számjegynek:</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$&quot;</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp"><span class="token number">42</span></span><span class="token format-string"><span class="token punctuation">:</span>#.##</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;42&quot; lesz megjelenítve</span>
Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$&quot;</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp"><span class="token number">42.1234</span></span><span class="token format-string"><span class="token punctuation">:</span>#.##</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;42.12&quot; lesz megjelenítve</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Ezenkívül használhatsz a <code>%</code> jelet is annak megadására, hogy a számot százalékként ábrázolja és ne törtszámként. Például:</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">float</span></span> currentHealth <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">float</span></span> maxHealth <span class="token operator">=</span> <span class="token number">9</span><span class="token punctuation">;</span> 
Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$&quot;</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">currentHealth <span class="token operator">/</span> maxHealth</span><span class="token format-string"><span class="token punctuation">:</span>0.0%</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Megjeleníti: &quot;44.4%&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Számos más szimbólumot is használhatsz a formázott karakterláncokhoz, de ez elég ahhoz, hogy egy alapvető eszköztárral dolgozhassunk.</p>`,75),l=[o];function p(c,i){return n(),s("div",null,l)}const u=a(t,[["render",p],["__file","lesson1.html.vue"]]);export{u as default};
