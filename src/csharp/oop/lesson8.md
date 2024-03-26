---
icon: fa-solid fa-8
---

# null referenciák

:::note Röviden
- A típusok tartalmazhatnak olyan referenciákat, amely semmire sem mutatnak: `null`, ami egy objektum hiányát jelenti.
:::

A referencia típusú változók, például a `string`-ek, a tömbök (`array`-ek) és az osztályok (`class`-ok) nem tárolják az adatokat közvetlenül a változókban. A legtöbbször ezek a referenciák egy adott objektumra mutatnak, de néhány esetben az érték hiányát jelző referenciák. Ezt `null`-referenciának nevezzük. A kódban a `null` referenciát a `null` kulcsszóval használhatjuk:

```csharp
string name = null;
```

A `null` referencia akkor hasznos ha előfordulhat olyan, hogy nem áll rendelkezésünkre adat.

:::tip Képzeljünk el egy játékot

Amelyben egy olyan karaktert irányítunk, aki be tud üllni egy járműbe és vezetni tudja azt. A járműnek lehet egy `Character driver;` mezője, amely megmutatja, hogy éppen melyik karakter ül vezetőülésben. Ettől függetlenül a vezetőülés lehet, hogy üres, amit úgy lehet ábrázolni, hogy a `driver` egy `null` referenciát tartalmaz. `null` __a referencia típusok alapértelmezett értéke.__
:::

A `null` értékek használata azonban nem marad következmények nélkül. Nézzük meg ezt a kódot:

```csharp
string name = null;
Console.WriteLine(name.Length);
```

Ez a kód összeomlik, mert egy nem létező karakterlánc hosszát próbálja lekérdezni. Ezt a hibát könnyű észrevenni, mivel a `name` mindig `null;` más helyzetekben kevésbé nyilvánvaló:

```csharp
string name = Console.ReadLine(); // Visszatérhet null-al!
Console.WriteLine(name.Length);
```

__Vajon a `ReadLine()` karakterláncot adott vissza nekünk, vagy `null` értéket?__ Valószínűleg még nem találkoztunk vele, de bizonyos helyzetekben előfordulhat, hogy a `ReadLine()` `null` értéket ad vissza. (_Próbáljuk meg a __Ctrl + Z__ billentyűkombinációt megnyomni, amikor a számítógép arra vár, hogy valamit beírjunk._) A lehetőség, hogy `null` lehet, arra kényszerít minket, hogy óvatosan használjuk.

## `null` vagy nem `null`?

Amikor referencia típusú változókról van szó, érdemes megállni egy pillanatra és átgondolni, hogy a `null` érték lehetőséges legyen-e?!

Néhány módszert fogunk látni a `null` érték ellenőrzésére rövidesen:

- Abban az esetben ha a `null` érték megengedett, érdemes ellenőrizni a `null` értéket, mielőtt használnánk azokat a tagokat (_metódusokat_, _tulajdonságokat_, _mezőket_, stb.).

- Abban az esetben ha a `null` érték nem megengedett, ellenőriznünk kell az összes értéket, amit hozzárendelünk, hogy biztosak legyünk abban, hogy véletlenül sem rendelünk `null` értéket hozzá. 

Miután eldöntöttük, hogy egy változónak megengedjük-e a `null` értéket, ezt a döntést jelezni akarjuk a kódunkban. Bármely referencia-típusú változó végén lehet egy `?` vagy nem. Az `?` azt jelenti, hogy tartalmazhat `null` értéket. 

Például:

```csharp
string? name = Console.ReadLine(); // Visszatérhet null-al!
```

A fenti kódban a `name` típusa most `string?`, ami azt jelzi, hogy bármilyen érvényes `string` példányt tartalmazhat, de lehet `null` is. A `?` nélkül, ahogy eddig is használtuk azt mondja meg, hogy a `null` nem opció.

Eddig figyelmen kívül hagytuk a `null` lehetőségét, sőt eddig probléma nélkül megúsztuk. Az összes eddig látott kódunkban az egyetlen valós veszélyt az jelentette, hogy a `Console.ReadLine();` `null` értéket adhatott volna vissza és ezt nem kezeltük.

:::info Viszont eddig...
nem nyomtuk meg a __Ctrl + Z__ billentyűkombinációt, így ez a probléma nem merült fel. :D
:::
Még ha elő is jött volna, általában a bemenetet vagy közvetlenül megjelenítettük vagy más típusba konvertáltuk és mind a `Console.WriteLine();`, mind a `Convert.ToInt32();` (_és a többi metódus_) biztonságosan kezeli le a `null` értéket.

De mostantól kezdve sokkal nagyobb valószínűséggel találkozunk `null`-al kapcsolatos problémákkal, ezért itt az ideje, hogy óvatosabbak legyünk és minden egyes referencia-típusú változó esetében szándékosan döntsünk arról, hogy a `null` megengedett-e vagy sem.

Ha helyesen alkalmazzuk (_vagy kihagyjuk_) a `?`-t a változóinkra, akkor a fordító segítségét is igénybe vehetjük a `null` ellenőrzéséhez. Ez a segítség rendkívül hasznos. Könnyen előfordulhat, hogy magunktól valamit kihagyunk. Ha a fordító segít észrevenni a `null`-al kapcsolatos problémákat, nem fogunk sokat kihagyni. A másik előnye természetesen az, hogy a kódból egyértelműen kiderül, hogy a `null` érvényes lehetőség-e egy változóra.

Példáinkban eddig csak `string`-eket használtunk, de ez minden hivatkozási típusra vonatkozik, beleértve a tömböket és bármilyen általunk készített osztályt is. Hasonlót tehetnénk a `Score` és `Rectangle` osztályaink használatára is.

## `null` ellenőrzése

Gyakran szükség lesz arra, hogy ellenőrizzük, hogy `null` érték-e az adott referencia. A `null` érték ellenőrzésének mechanizmusa egyszerű. A legegyszerűbb módja annak, hogy ellenőrizzük a `null` értéket, az egy referencia összehasonlítása a `null` literállal, ami egy `null` ellenőrzést jelent:

```csharp
string? name = Console.ReadLine();

if (name != null) 
{
    Console.WriteLine("The name is not null.");
}
```

Ha egy változó azt jelzi, hogy a `null` érték lehetséges lehetőség, akkor érdemes `null` ellenőrzést végezni, mielőtt használnánk annak tagjait.

Fontos megjegyezni, hogy **a fordítás után nincs különbség a `string?` és a `string` között**. Ha figyelmen kívül hagyjuk a fordító által adott figyelmeztetéseket, amelyek segítenek a helyes megoldás megtalálásában, még egy egyszerű `string` (_a `?` nélkül_) is technikailag tartalmazhat `null` értéket.

### `null`-feltételes operátorok: `?.` és `?[]`

A `null`-ellenőrzéssel az egyik probléma az, hogy a későbbiekben következményei lehetnek. 

Például:

```csharp
private string? GetTopPlayerName()
{
    return scoreManager.GetScores()[0].Name;
}
```

`scoreManager` lehet `null`, a `GetScores()` `null`-át adhat vissza, vagy a tömb tartalmazhat `null` hivatkozást a 0 indexen. Ha ezek bármelyike `null`, a program összeomlik. Minden egyes lépésnél ellenőriznünk kell:

```csharp
private string? GetTopPlayerName()
{
    if (scoreManager == null) return null;
    Score[]? scores = scoreManager.GetScores(); 
   
    if (scores == null) return null;
    Score? topScore = scores[0];
    
    if (topScore == null) return null;
    
    return topScore.Name;
}
```

A `null`-ellenőrzések miatt a kód nehezen olvasható. Elfedik az lényeges részeket.

Van egy másik lehetőség is: a __null-feltételes operátorok__. A `?.` és `?[]` operátorokat alkalmazhatjuk a `.` és `[]` helyett, hogy egyszerre ellenőrizzük a `null` értéket és hozzáférjünk a taghoz:


```csharp
private string? GetTopPlayerName()
{
    return scoreManager?.GetScores()?[0]?.Name;
}
```

Mind a `?.`, mind a `?[]` kiértékeli az előtte lévő részt, hogy kiderüljön, `null`-e. Ha igen, akkor nem történik további kiértékelés és az egész kifejezés `null`-ára értékelődik. Ha nem `null`, akkor a kiértékelés úgy folytatódik, mintha egy normál `.` vagy `[]` operátor lett volna. 

Ha a `scoreManager` `null`, akkor a fenti kód `null` értéket ad vissza anélkül, hogy meghívná a `GetScores` függvényt. Ha a `GetScores()` `null` értéket ad vissza, akkor a fenti kód `null` értéket ad vissza anélkül, hogy hozzáférne az 0. indexhez.

Ezek az operátorok nem fednek le minden nullával kapcsolatos forgatókönyvet - _néha szükség lesz a jó öreg `if (x == null)`-ra -_, de sok esetben megoldást jelenthetnek.

### A `null`-összefoglaló operátor: `??`

A null-összefoglaló operátor (`??`) - _coalescing operator_ - szintén hasznos eszköz. Egy olyan kifejezést vesz, amely `null` lehet és egy olyan értéket vagy kifejezést ad meg, amelyet helyettesítő értékként használhatunk, ha `null`:

```csharp
private string GetTopPlayerName() // Többé nem kell megengedni a null -t.
{
    return scoreManager?.GetScores()?[0]?.Name ?? "(not found)";
}
```

Ha a `??` előtti kód nullára értékelődik, akkor a `"(not found)"` értékét fogja használni helyette.
Erre is van egy összetett hozzárendelési operátor:

```csharp
private string GetTopPlayerName()
{
    string? name = scoreManager?.GetScores()?[0]?.Name;
    
    name ??= "(not found)";
    
    return name; // Nincs fordítói figyelmeztetés. A `??=` biztosítja, hogy valós értéket kapjunk.
}
```

### A `null`-t megengedő operátor: `!`

A fordító igen alaposan elemzi, hogy mi lehet és mi nem lehet `null` és megfelelő figyelmeztetéseket ad nekünk. Hogy megszabaduljunk a fordítói figyelmeztetéstől, használhatjuk a null-megengedő operátort: `!`. Ez az operátor azt mondja a fordítónak: __"Tudom, hogy ez potenciális `null` problémának tűnik, de nem lesz az. Bízz bennem!"__

```csharp
string? nullableString = null;

string nonNullableString = nullableString!;
```

Ebben a példában a `nullableString` változó `null` értéket kap. A `nonNullableString` változó azonban a `null`-t megengedő operátor (`!`) segítségével kijelenti, hogy biztosak vagyunk benne, hogy a `nullableString` változó nem lesz `null`. Ez lehetővé teszi a fordítónak, hogy átmenetileg figyelmen kívül hagyja a `null` hibákat és engedélyezze a kódnak, hogy futtatódjon. 

Legyenünk óvatosak a használatával, mert ha a változó mégis `null` értéket kap, futási időben hibát fog dobni.