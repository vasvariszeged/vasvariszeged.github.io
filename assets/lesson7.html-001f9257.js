import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,d as e}from"./app-434ca933.js";const t={},p=e(`<h1 id="delegate" tabindex="-1"><a class="header-anchor" href="#delegate" aria-hidden="true">#</a> Delegate</h1><div class="hint-container note"><p class="hint-container-title">Röviden</p><ul><li>A <code>delegate</code> jelentősen növelheti a kódrészek rugalmasságát.</li><li>Lehetővé teszi, hogy algoritmusokat definiáljunk cserélhető elemekkel.</li></ul></div><p>A <code>delegate</code> egy olyan változó, amely egy metódusra vagy függvényre való hivatkozást tartalmaz. Ez a funkció lehetővé teszi, hogy a végrehajtható kóddarabokat úgy adjuk át, mintha egyszerű adatok lennének. Ez talán nem tűnik nagy dolognak, de sok mindent megváltoztat. A <code>delegate</code>-ek önmagukban is nagy teljesítményűek, de számos más nagy teljesítményű C#-funkció alapjául is szolgálnak.</p><p>Nézzük meg, milyen típusú problémákat segítenek megoldani. Tegyük fel, hogy van ez a metódus, amely egy számokat tartalmazó tömböt vár és egy új tömböt hoz létre, amelyben minden elemet megnöveltünk. Ha az <strong>[1, 2, 3, 4, 5]</strong> tömböt adjuk meg, akkor az eredmény <strong>[2, 3, 4, 5, 6]</strong> lesz.</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> <span class="token function">AddOneToArrayElements</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> numbers<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name"><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name"><span class="token keyword">int</span></span><span class="token punctuation">[</span>numbers<span class="token punctuation">.</span>Length<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> index <span class="token operator">&lt;</span> result<span class="token punctuation">.</span>Length<span class="token punctuation">;</span> index<span class="token operator">++</span><span class="token punctuation">)</span>
        result<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> numbers<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Mi van akkor, ha szükségünk van egy olyan metódusra is, amely helyettünk kivon egyet? Nem nagy ügy:</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> <span class="token function">SubtractOneFromArrayElements</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> numbers<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name"><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name"><span class="token keyword">int</span></span><span class="token punctuation">[</span>numbers<span class="token punctuation">.</span>Length<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> index <span class="token operator">&lt;</span> result<span class="token punctuation">.</span>Length<span class="token punctuation">;</span> index<span class="token operator">++</span><span class="token punctuation">)</span>
        result<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> numbers<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ez a két metódus azonos, kivéve a kódot, amely az eredeti értékből kiszámítja az új tömb értékét. Létrehozhatnánk mindkét metódust így de ez nem ideális. Ez egy nagy darab duplikált kód lenne.</p><p>Ha hibát kellene javítanunk, azt két helyen kellene megtennünk. Talán hozzáadhatnánk egy másik paramétert, amely jelzi, hogy mennyire változtassuk meg a számot:</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> <span class="token function">ChangeArrayElements</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> numbers<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">int</span></span> amount<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name"><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name"><span class="token keyword">int</span></span><span class="token punctuation">[</span>numbers<span class="token punctuation">.</span>Length<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> index <span class="token operator">&lt;</span> result<span class="token punctuation">.</span>Length<span class="token punctuation">;</span> index<span class="token operator">++</span><span class="token punctuation">)</span>
        result<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> numbers<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">+</span> amount<span class="token punctuation">;</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><div class="highlight-line"> </div><br><br><br><div class="highlight-line"> </div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Az összeadáshoz és kivonáshoz hívhatjuk a <code>ChangeArrayElements(numbers, +1);</code> és a <code>Change ArrayElements(numbers, -1);</code> parancsokat de csak ennyi rugalmasságot kaphatunk. Mi lenne, ha egy hasonló metódust szeretnénk, amely minden elemet megduplázna vagy kiszámítaná minden elem négyzetgyökét?</p><p>A metódusnak a lehető legnagyobb rugalmasságot biztosítjuk, megkérhetjük, hogy egy konkrét szám hozzáadása helyett kérjen egy használandó metódust.</p><p>Ezt könnyebb egy példával szemléltetni. Kezdjük az <code>AddOne</code>, <code>SubtractOne</code> és <code>Double</code> metódusok definiálásával:</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> <span class="token function">AddOne</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> number<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> number <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> 

<span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> <span class="token function">SubtractOne</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> number<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> number <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> 

<span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> <span class="token function">Double</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> number<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> number <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ezeknek a metódusoknak ugyanaz a paraméterlistája (<em>egyetlen <code>int</code> paraméter</em>) és ugyanaz a visszatérési típusa (<em>szintén <code>int</code></em>). Ez a hasonlóság lényeges ez teszi őket felcserélhetővé.</p><p>A következő lépés az, hogy nevet adunk ennek a mintának egy <code>delegate</code> típus definiálásával:</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">delegate</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> <span class="token function">NumberDelegate</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> number<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Ez egy új típust definiál. Egy új <code>delegate</code> típus definiálásához szükség van egy visszatérési típusra, egy névre és egy paraméterlistára. Ebben az értelemben úgy néz ki, mint egy metódusdeklaráció, eltekintve a <code>delegate</code> kulcsszótól.</p><p>A <code>delegate</code> típusokat használó változók tárolhatnak metódusokat. A metódusnak azonban meg kell egyeznie a <code>delegate</code> visszatérési típusával és paramétertípusaival ahhoz, hogy működjön. Egy <code>NumberDelegate</code> típusú változó bármely <code>int</code> visszatérési típusú és egyetlen <code>int</code> paraméterű metódust tárolhat. Szerencsénkre az <code>AddOne</code>, <code>SubtractOne</code> és a <code>Double</code> mind megfelel ezeknek a feltételeknek. Ez azt jelenti, hogy létrehozhatunk egy olyan változót, amely bármilyen hivatkozást tárolhat.</p><p>Készíthetünk egy metódust egy olyan paraméterrel, amelynek típusa <code>NumberDelegate</code>, ami lehetővé teszi a metódus hívás számára, hogy egy másik metódust adjunk meg:</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> <span class="token function">ChangeArrayElements</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> numbers<span class="token punctuation">,</span> <span class="token class-name">NumberDelegate</span> operation<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>  
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Nézzük meg, hogyan használja a <code>ChangeArrayElements</code> ezt a <code>delegate</code> típusú változót.</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> <span class="token function">ChangeArrayElements</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> numbers<span class="token punctuation">,</span> <span class="token class-name">NumberDelegate</span> operation<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name"><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name"><span class="token keyword">int</span></span><span class="token punctuation">[</span>numbers<span class="token punctuation">.</span>Length<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> index <span class="token operator">&lt;</span> result<span class="token punctuation">.</span>Length<span class="token punctuation">;</span> index<span class="token operator">++</span><span class="token punctuation">)</span>
        result<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">operation</span><span class="token punctuation">(</span>numbers<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line"> </div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ha megnézzük ezt a kódot, láthatjuk, miért használjuk így a <code>delegate</code>-et. A <code>ChangeArrayElements</code> tudja, hogyan iteráljon a tömbön és építsen fel egy új tömböt, de nem érti, hogyan számítsa ki az új értékeket a régi értékekből. Azt várja, hogy valaki más végezze el ezt a munkát és amikor eljön az ideje, ezt a feladatot a <code>delegate</code>-re bízza.</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">delegate</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> <span class="token function">NumberDelegate</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> number<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloWorld</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Main</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> args<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> array <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name"><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> <span class="token punctuation">{</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
        array <span class="token operator">=</span> <span class="token function">ChangeArrayElements</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">NumberDelegate</span><span class="token punctuation">(</span>AddOne<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> <span class="token function">ChangeArrayElements</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> numbers<span class="token punctuation">,</span> <span class="token class-name">NumberDelegate</span> operation<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name"><span class="token keyword">int</span></span><span class="token punctuation">[</span>numbers<span class="token punctuation">.</span>Length<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> index <span class="token operator">&lt;</span> result<span class="token punctuation">.</span>Length<span class="token punctuation">;</span> index<span class="token operator">++</span><span class="token punctuation">)</span>
            result<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">operation</span><span class="token punctuation">(</span>numbers<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> <span class="token function">AddOne</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> number<span class="token punctuation">)</span> 
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> number <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> 
    
    <span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> <span class="token function">SubtractOne</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> number<span class="token punctuation">)</span> 
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> number <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> 
    
    <span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> <span class="token function">Double</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> number<span class="token punctuation">)</span> 
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> number <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25),o=[p];function c(l,i){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","lesson7.html.vue"]]);export{r as default};
