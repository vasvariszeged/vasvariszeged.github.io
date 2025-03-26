import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,d as t}from"./app-434ca933.js";const e={},p=t(`<h1 id="gyakorlo-iii" tabindex="-1"><a class="header-anchor" href="#gyakorlo-iii" aria-hidden="true">#</a> Gyakorló III.</h1><h2 id="_1-feladat" tabindex="-1"><a class="header-anchor" href="#_1-feladat" aria-hidden="true">#</a> 1. Feladat</h2><p>Írj egy C# programot, amely egy egyszerű menüt jelenít meg, és a felhasználó választása alapján végrehajt egy adott műveletet a <code>switch</code> utasítással.</p><p><strong>Várt kimenet:</strong></p><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>Add meg a művelet számát:
1 – Hozzáadás
2 – Kivonás
3 – Szorzás
4 – Osztás
5 – Kilépés

Add meg az első számot: 10
Add meg a második számot: 5

Add meg a művelet számát: 1
A művelet eredménye: 15
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>Megoldás</summary><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">int</span></span> choice<span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">int</span></span> num1<span class="token punctuation">,</span> num2<span class="token punctuation">;</span>

<span class="token comment">// Menü kiírása</span>
Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;Add meg a művelet számát:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;1 – Hozzáadás&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;2 – Kivonás&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;3 – Szorzás&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;4 – Osztás&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;5 – Kilépés&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// A felhasználó választásának beolvasása</span>
choice <span class="token operator">=</span> Convert<span class="token punctuation">.</span><span class="token function">ToInt32</span><span class="token punctuation">(</span>Console<span class="token punctuation">.</span><span class="token function">ReadLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Az első és második szám beolvasása</span>
Console<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span><span class="token string">&quot;Add meg az első számot: &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
num1 <span class="token operator">=</span> Convert<span class="token punctuation">.</span><span class="token function">ToInt32</span><span class="token punctuation">(</span>Console<span class="token punctuation">.</span><span class="token function">ReadLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

Console<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span><span class="token string">&quot;Add meg a második számot: &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
num2 <span class="token operator">=</span> Convert<span class="token punctuation">.</span><span class="token function">ToInt32</span><span class="token punctuation">(</span>Console<span class="token punctuation">.</span><span class="token function">ReadLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Switch utasítás a művelet végrehajtásához</span>
<span class="token keyword">switch</span> <span class="token punctuation">(</span>choice<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token number">1</span><span class="token punctuation">:</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;A művelet eredménye: &quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>num1 <span class="token operator">+</span> num2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token number">2</span><span class="token punctuation">:</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;A művelet eredménye: &quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>num1 <span class="token operator">-</span> num2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token number">3</span><span class="token punctuation">:</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;A művelet eredménye: &quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>num1 <span class="token operator">*</span> num2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token number">4</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>num2 <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span>
            Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;A művelet eredménye: &quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>num1 <span class="token operator">/</span> num2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">else</span>
            Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;Hiba: Nullával való osztás nem engedélyezett.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token number">5</span><span class="token punctuation">:</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;Kilépés...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">default</span><span class="token punctuation">:</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;Érvénytelen művelet.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,6),o=[p];function c(i,l){return s(),a("div",null,o)}const d=n(e,[["render",c],["__file","lesson3task.html.vue"]]);export{d as default};
