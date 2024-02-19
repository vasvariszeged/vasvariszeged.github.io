---
icon: fa-solid fa-8
---

# Néhány típus I.

:::note Röviden
- A `Random` pszeudo-véletlen számokat generálása.
- A `DateTime` megkapja az aktuális időt és tárolja az idő- és dátumértékeket.
- A `TimeSpan` egy időtartamot jelöl.
- A `List<T>` egy népszerű és sokoldalú általános gyűjtemény - a legtöbb dologhoz ezt használjuk a tömbök helyett.
:::

Most megnézzünk egy pár típust, amelyek a __.NET__-hez tartoznak. A C# könyvtárában, az úgynevezett __Base Class Library__-ben (_BCL_) több ezer típus található. Ésszerűen nem tudunk mindegyikkel foglalkozni. Az eddigiekben már több típusról is beszéltünk és a jövőben még többről fogunk, de most olyanokat fogunk megvizsgálni, amelyek örökre megváltoztatják a C# nyelven történő programozását.

## A `Random`

A `Random` osztály  véletlen számokat generál. Egyes programok (_például játékok_) nagyobb valószínűséggel használnak véletlen számokat, mint mások, de a randomizálás bárhol megtalálható.

A randomizálás egy érdekes fogalom. A számítógép pontosan követi az utasításokat, ami nem valódi randomizálás, hacsak nem vásárolunk olyan hardvert, amely valamilyen természetes véletlen jelenséget mér (_mint például a termikus zaj vagy a fotoelektromos hatás_). Egyes algoritmusok azonban a múltbeli számok alapján véletlenszerűnek tűnő számsorozatot állítanak elő. Ezt _pszeudovéletlen_ számgenerálásnak nevezik, mert nem igazán véletlenszerű. A legtöbb gyakorlati célra, beleértve a legtöbb játékot is, a _pszeudovéletlen_ számgenerálás elegendő.

:::tip Pszeudovéletlen generátorok
Az pszeudovéletlen generátoroknak egy kezdeti értékkel, az úgynevezett __seeddel__ kell kezdeni. Ha ugyanazt a __seedet__ újra felhasználjuk, akkor pontosan __ugyanazt__ a véletlenszerűnek tűnő sorozatot kapjuk újra. Ez lehet rossz és jó is. A __Minecraft__ például egy __seed__ alapján generálja a világokat. Néha egy adott véletlenszerű világot szeretnél és ha azt mondod a Minecraftnak, hogy egy adott __seedet__ használjon, akkor ugyanazt a világot láthatod újra. De a legtöbbször véletlenszerű __seedet__ akarsz, hogy egyedi világot kapj.
:::

A `System.Random` osztály a kiindulópontja mindannak, ami a véletlenszerűséggel kapcsolatos. Ez egy egyszerű osztály, amelynek használata könnyen megtanulható:

```csharp
Random random = new Random();
Console.WriteLine(random.Next());
```

A `Random()` konstruktor egy tetszőleges _seed_ értékkel van inicializálva, ami azt jelenti, hogy ugyanaz a szekvencia soha többé nem fog előjönni egy másik __Random__ objektummal vagy a program újrafuttatásával. 

:::info Anno
_A .NET régebbi verziói az aktuális időt használták seedként, ami azt jelentette, hogy két Random példány gyors egymásután történő létrehozása ugyanazt a seedet és ugyanazt a sorozatot generálta. De most már ez nem így van._
:::

A `Random` legalapvetőbb metódusa a `Next()` metódus. A __Next__ egy véletlenszerű, nem negatív (0 vagy pozitív) `int` értéket választ ki egyenlő eséllyel. Ugyanolyan valószínű, hogy __7__-et kapunk, mint __1,844,349,103__-at. Egy ilyen nagy tartomány ritkán hasznos, ezért a __Next__ néhány túlterhelésével nagyobb kontrollt kapunk. A `Next(int)` segítségével a felső határt választhatjuk ki:

```csharp
Console.WriteLine(random.Next(6));
```

A `random.Next(6)` __0, 1, 2, 3, 4 vagy 5 (de nem 6)__ lehetséges választási lehetőséget ad, mindegyikre egyenlő eséllyel. Gyakori, hogy ehhez az eredményhez __1__-et adunk hozzá, __így a tartomány 0-tól 5-ig helyett 1-től 6-ig__ terjed. 
Például:

```csharp
Console.WriteLine($"Rolling a six-sided die: {random.Next(6) + 1}");
```

A `Next` harmadik metódusa lehetővé teszi a minimális érték megnevezését is:

```csharp
Console.WriteLine(random.Next(18, 22));
```

Ez véletlenszerűen választ a __18, 19, 20 és 21__ értékek közül (de a __22__-t nem).

Ha egész számok helyett lebegőpontos értékeket szeretnénk, használhatjuk a `NextDouble();` metódust:

```csharp
Console.WriteLine(random.NextDouble());
```

Ez egy `double` értéket ad vissza __0,0__ és __1,0__ között. (_Szigorúan véve sosem lesz 1,0 de 0,9999999 igen._) Ezt egy egyszerű aritmetikával nagyobb tartományra is kiterjeszthetjük. Az alábbiakban a __0__ és __10__ közötti tartományba eső véletlen számokat állíthatunk elő:

```csharp
Console.WriteLine(random.NextDouble() * 10);
```

Ez pedig a __-10__ és __+10__ közötti tartományba eső véletlen számokat eredményez:


```csharp
Console.WriteLine(random.NextDouble() * 20 - 10);
```

A `Random` osztály rendelkezik egy konstruktorral is, amely lehetővé teszi egy adott __seed__ átadását:

```csharp
Random random = new Random(3445);
Console.WriteLine(random.Next());
```

## A `DateTime`

A `DateTime` struktúra lehetővé teszi az aktuális idő lekérdezését. A `DateTime` érték létrehozásának egyik módja a konstruktorai:

```csharp
DateTime time1 = new DateTime(2023, 12, 31);
DateTime time2 = new DateTime(2023, 12, 31, 23, 59, 55);
```

Ez a kód egy olyan időintervallumot állít be, amely __2023. december 31__-én kezdődik és __2023. december 31__-én __23:59:55__-kor ér véget. Összesen __12__ konstruktor létezik a `DateTime` számára, amelyek mindegyike más-más információt igényel.

Talán még hasznosabbak a statikus `DateTime.Now` és `DateTime.UtcNow` tulajdonságok:

```csharp
DateTime nowLocal = DateTime.Now;
DateTime nowUtc   = DateTime.UtcNow;
```

A `DateTime.Now` a helyi időzónánkban adja meg az aktuális dátumot és időt, ahogy a számítógépünkön van beállítva. A `DateTime.UtcNow` pedig a __Egyezményes koordinált világidőben__ (UTC) adja meg az aktuális dátumot és időt, ami gyakorlatilag a világidő, nem tartalmaz specifikus időzónákat, nyári időszámítást, stb.

A `DateTime` értéknek különböző tulajdonságai vannak, amelyekkel többek között az __év__, a __hónap__, a __nap__, az __óra__, a __perc__, a __másodperc__ és a __milliszekundum__ látható. Az alábbiakban néhány egyszerű felhasználási módot láthatunk:

```csharp
DateTime time = DateTime.Now;
if (time.Month == 10) Console.WriteLine("Happy Halloween!");
else if (time.Month == 4 && time.Day == 1) Console.WriteLine("April Fools!");
```

Vannak olyan metódusok is, amelyekkel új `DateTime` értékeket kaphatunk egy másikhoz képest. Például:

```csharp
DateTime tomorrow = DateTime.Now.AddDays(1);
```

A `DateTime` struktúra, sok olyan könnyen elfelejthető különleges esetet kezel, mint a __szökőévek__ és a __hét napjainak__ számítása. Amikor dátumokkal és időkkel foglalkozunk, ez az alap, amellyel reprezentálhatjuk őket és megszerezhetjük az aktuális dátumot és időt.

## A `TimeSpan`

A `TimeSpan` struktúra egy időintervallumot reprezentál. A `TimeSpan` több konstruktorának segítségével adhatjuk meg az idő hosszát:

```csharp
TimeSpan timeSpan1 = new TimeSpan(1, 30, 0); // 1 hour, 30 minutes, 0 seconds. 
TimeSpan timeSpan2 = new TimeSpan(2, 12, 0, 0); // 2 days, 12 hours.
TimeSpan timeSpan3 = new TimeSpan(0, 0, 0, 0, 500); // 500 milliseconds. 
TimeSpan timeSpan4 = new TimeSpan(10); // 10 "ticks" == 1 microsecond
```

A kommentek (`//`) elolvasása után ezek többsége egyértelmű, de az utolsó figyelemre méltó. A `TimeSpan` belsőleg egy `tick` nevű egységben tartja számon az időt, ami __0,1 mikroszekundum__ vagy __100 nanoszekundum__. Ez a legfinomabb, amit egy `TimeSpan` elérhet, de ennél többre ritkán van szükség.

A `TimeSpans` létrehozásának másik módja a különböző `From...` metódusok egyike:

```csharp
TimeSpan aLittleWhile = TimeSpan.FromSeconds(3.5);
TimeSpan quiteAWhile = TimeSpan.FromHours(1.21);
```

A teljes gyűjtemény tartalmazza a `FromTicks`, `FromMilliseconds`, `FromSeconds`, `FromHours` és `FromDays`-t.


A `TimeSpan` két olyan tulajdonsággal rendelkezik, amelyeket érdemes megemlíteni. Az első ez a készlet: `Days`, `Hours`, `Minutes`, `Seconds`, `Miliseconds`. Ezek a `TimeSpan` különböző összetevőit képviselik. Például:

```csharp
TimeSpan timeLeft = new TimeSpan(1, 30, 0);
Console.WriteLine($"{timeLeft.Days}d {timeLeft.Hours}h {timeLeft.Minutes}m");
```
A `timeLeft.Minutes` nem ad vissza a 90 percet, mivel ebből 60 perc egy teljes órából származik, amit az **Hours** tulajdonság reprezentál.

A konzolon a következő jelenik meg:

```console
0d 1h 30m
```

A második a teljes időtartamot rögzíti a kért egységben: `TotalDays`, `TotalHours`, `TotalMinutes`, `TotalSeconds` és `TotalMillseconds`.

```csharp
TimeSpan timeRemaining = new TimeSpan(1, 30, 0);
Console.WriteLine(timeRemaining.TotalHours);
Console.WriteLine(timeRemaining.TotalMinutes);
```

A konzolon a következő jelenik meg:

```console
1.5
90
```

Mind a `DateTime`, mind a `TimeSpan` több operátort definiál a összehasonlításhoz (__>, <, >=, <=__), összeadáshoz és kivonáshoz. Ráadásul a két struktúra jól együttműködik egymással:

```csharp
DateTime eventTime = new DateTime(2022, 12, 4, 5, 29, 0); // 4 Dec 2022 at 5:29am
TimeSpan timeLeft = eventTime - DateTime.Now; // 'TimeSpan.Zero' is no time at all.

if (timeLeft > TimeSpan.Zero)
    Console.WriteLine($"{timeLeft.Days}d {timeLeft.Hours}h {timeLeft.Minutes}m");
else
    Console.WriteLine("This event has passed.");
```

A második sor azt mutatja, hogy egy `DateTime` kivonása egy másik `DateTime`-ból egy `TimeSpan`-t eredményez, amely a kettő közötti idő. Az `if` utasítás a speciális `TimeSpan.Zero` értékkel való összehasonlítást mutatja.

## A `List`

A `List<T>` osztály talán a leginkább használt osztály a __.NET__ keretrendszerben. A `List<T>`-ben fontos az elemek sorrendje, az elemekhez az indexük alapján férhetünk hozzá és könnyen tudunk hozzáadni és eltávolítani elmeket. Olyanok, mint egy tömb, de dinamikusan növelhető és csökkenthető képességük miatt szinte minden körülmények között kiválóvá teszi őket.

A `List<T>` osztály egy összetett osztály sokféle képességgel. Nem fogjuk mindet megvizsgálni, de nézzük meg a legfontosabbakat.

### Lista példányok létrehozása

Egy új lista létrehozásának számos módja van, de a leggyakoribb egy üres lista létrehozása:

```csharp
List<int> numbers = new List<int>();
```

Ez egy új `List<int>` példányt hoz létre, amelyben nincs semmi. A legtöbbször ezt fogjuk használni. 

Ha egy listának ismert kezdeti elemkészlete van, használhatod a gyűjtemény inicializáló szintaxist is, ahogyan azt a tömböknél tettük:

```csharp
List<int> numbers = new List<int>() { 1, 2, 3 };
```

Ez ugyanazt az üres konstruktort hívja meg, mielőtt egyesével hozzáadná a gyűjtemény elemeit, de elegáns módja egy új lista inicializálásának meghatározott elemekkel. Ahogy az objektum inicializáló szintaxisánál láttuk, ahol egy új objektum tulajdonságait állítjuk be, ha a konstruktornak nincs szüksége paraméterekre, a zárójeleket is elhagyhatjuk:

```csharp
List<int> numbers = new List<int> { 1, 2, 3 };
```

Egyeseknek tetszik ennek a változatnak a tömörsége, mások furcsának találják. Mindkettő működik.

### Indexelés

A listák támogatják az indexelést, akárcsak a tömbök:


```csharp
List<string> words = new List<string>() { "apple", "banana", "corn", "durian" };
Console.WriteLine(words[2]);
```

A listák szintén __0__-tól történő indexelést használnak. A __2__-es indexre történő hivatkozás esetén a "__corn__" karakterláncot kapjuk.

Egy listában lévő elemet úgy cserélhetünk ki, hogy az indexhez új értéket rendelünk, akárcsak egy tömbben:

```csharp
words[0] = "avocado";
```

### Elemek hozzáadása és eltávolítása a listából

A listák egyik fő előnye a tömbökkel szemben az, hogy könnyen hozzáadhatunk és eltávolíthatunk elemeket. Például:

```csharp
List<string> words = new List<string>();
words.Add("apple");
```

Az `Add` az elemeket a lista végére helyezi. Ha valamit a más helyre szeretnénk beszúrni, akkor használjuk az `Insert`-et, amihez szükséges egy indexelem használata:

```csharp
List<string> words = new List<string>() { "apple", "banana", "durian" };
words.Insert(2, "corn");
```

Ha sok elemet kell hozzáadni vagy beszúrni, akkor ott van az `AddRange`, hogy a lista végére és az `InsertRange` amellyel más helyre tudunk beilleszteni elemeket:

```csharp
List<string> words = new List<string>();
words.AddRange(new string[] { "apple", "durian" });
words.InsertRange(1, new string[] { "banana", "corn" });
```

Ha elemeket szeretnénk eltávolítani a listából, az eltávolítandó elemet az `Remove` metódussal tehetjük meg:

```csharp
List<string> words = new List<string>() { "apple", "banana", "corn", "durian" };
words.Remove("banana");
```

__Ha egy elem többször is szerepel a gyűjteményben, csak az első előfordulás kerül eltávolításra.__ A `Remove` egy `bool` értéket ad vissza, amely megmondja, hogy bármi eltávolításra került-e. Ha az összes előfordulást el kell távolítanunk, akkor addig kell mennünk a ciklusban, amíg az `false` értéket nem ad vissza.

Ha egy adott indexen lévő elemet szeretnénk eltávolítani, használjuk a `RemoveAt` parancsot:

```csharp
words.RemoveAt(0);
```

A `Clear` metódus eltávolít mindent a listából:

```csharp
words.Clear();
```

Mivel egy lista elemeinek hozzáadásáról és eltávolításáról beszélünk, fontos tudnunk, hogy hogyan határozhatjuk meg, hogy hány elem van a listánkban. A tömbökkel ellentétben, amelyeknek `Length` tulajdonsága van, a listáknak `Count` tulajdonságuk van:

```csharp
Console.WriteLine(words.Count);
```

### `List` és a `foreach` ciklus

A foreach ciklus ugyanúgy használható egy `List<T>` esetében, mint egy tömb esetében.

```csharp
foreach (Ship ship in ships)
{
    ship.Update();
}
```

A `for` ciklus használatával és az aktuális indexen lévő elem lekérdezésével megkerülhetjük a `foreach` ciklus által használt iterációs mechanizmust.

```csharp
for (int index = 0; index < ships.Count; index++)
{
    Ship ship = ships[index];
    ship.Update();
}
```

### Egyéb hasznos eszközök

A `Contains` metódus megmondja, hogy a lista tartalmaz-e egy adott elemet és `true` -t ad vissza, ha van és `false` -t, ha nincs.

```csharp
bool hasApples = words.Contains("apple");
if (hasApples)
    Console.WriteLine("Apples are already on the shopping list!");
```

Az `IndexOf` metódus megmondja, hogy egy elem hol található a listában, vagy __-1__ add, ha nincs ott:

```csharp
int index = words.IndexOf("apple");
```


  