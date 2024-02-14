---
icon: fa-solid fa-5
---

# Tömbök

:::note Röviden
- Tömbök több azonos típusú értéket tartalmaznak.
- Szögletes zárójelek segítségével lehet hozzáférni a tömb elemeihez.
- Visszafele indexelés.
- Tartomány lekérése.
- A `Length` megmutatja, hogy a tömb hány elemet képes tárolni.
- A `foreach` ciklus.
- Többdimenziós tömbök.
:::

Képzeld el, hogy egy játékhoz készítesz egy ranglistát. Könnyen elképzelhetjük, hogyan hozhatunk létre egy változót egyetlen pontszám reprezentálására. Talán `int` vagy `uint` típust használnánk. Azonban szükségünk van több pontszámra, nem csak egyre. Csak azokat az ismereteket használva, amiket már tudunk, elképzelhetjük, hogy több változót hozunk létre különböző pontszámokhoz. Ha egy Top 10-et szeretnénk, talán valami ilyesmit tennénk:

```csharp
int score1 = 100;
int score2 = 95;
int score3 = 92;
```

Technikailag működik. Tíz változó leírása nem olyan rossz. De reméljük, hogy nem változtatjuk meg a véleményünket és nem akarunk 100 vagy 1000 pontot!

A C# lehetőséget biztosít arra, hogy egyszerre foglaljunk helyet egy teljes értékgyűjteménynek, amit tömbnek nevezünk. Egyetlen változó képes tárolni egy értéktömböt és a tömb belsejében minden elem elérhető az indexe alapján - _azaz a sorszáma alapján a tömbben_. Így, ahelyett, hogy `score1`, `score2` stb. változókat hoznánk létre, egyszerűen létrehozhatunk egyetlen `scores` nevű tömböt a feladat elvégzéséhez.


## Tömbök létrehozása

A következőképpen deklarálhatunk egy olyan változót, amelynek típusa _egész számok_ tömbje:

```csharp
int[] scores;
```

A szögletes zárójelek (`[` és `]`) azt jelzik, hogy ez a változó egy tömböt tartalmaz, ami sok értéket foglal magában, nem csak egyet. A szögletes zárójelek gyakran előfordulnak, amikor tömbökkel dolgozunk.

Minden tömb csak egy adott típusú elemet tartalmaz. A fenti példa egy `int`-ekből álló tömb volt, amit `int[]` jelöl. Ezt akár `int` tömbnek is nevezhetnénk. Készíthetünk például egy `string` tömböt, ami a `string[]` típust kap, vagy egy `bool` tömböt, ami a `bool[]` típust kap.


Az egy tömbváltozó deklarálása után a következő lépés az új tömb létrehozása az elemek tárolására:

```csharp
int[] scores = new int[10];
```

A `new` kulcsszó alkalmazása a programunkban új elemeket hoz létre. A fenti kód annyi memóriát foglal le, amely elég nagy ahhoz, hogy tíz `int` értéket tároljon. Az új számok gyűjteménye a `scores` változóban kerül tárolásra.

Ezt a tömböt bármekkora méretűvé tehettük volna, de ha egyszer egy létrehoztunk, akkor annak méretét már nem változtathatjuk meg. Nem tudjuk bővíteni vagy kicsinyíteni. A `scores` tartalmát nem lehet átméretezni. 

Azonban a `new` használatával létrehozhatunk egy második tömböt, több (_vagy kevesebb_) elemmel. Ezzel az új, hosszabb tömbtel frissíthetjük a pontszámokat:

```csharp
scores = new int[20];
```

Ez egy vadonatúj tömb, amely új memóriát használ a tartalmához. A `scores` változó átvált erre az új memóriára az eredeti __10__ elemes tömb memóriája helyett.

:::info Listák
Később tanulunk majd a listákról. A listák használata sokkal jobb, mint a tömböké. Lehetővé teszik az elemek hozzáadását és eltávolítását szükség szerint. Miután megtanultuk a listákat, valószínűleg nem fogjuk olyan gyakran használni a tömböket. De a listák a tömbökön alapulnak, így fontos ismerni azokat.
::::

## Értékek lekérése és beállítása tömbökben

Nézzük meg, hogyan dolgozhatunk a tömb egyes elemeivel. A tömb egy adott elemére való hivatkozáshoz az indexelő operátort (`[` és `]`) használjuk. Ez a kód például a `scores` tömb __0__. eleméhez rendel egy értéket:


```csharp
scores[0] = 99;
```

A szögleteszárójelben lévő számot indexnek nevezzük. A fenti kód a __99__-es értéket tárolja a __0__. indexen. Ez az index bármilyen `int` kifejezés lehet, nem csak egy literál. Például: `scores[someSpot + 1]`.

:::warning Talán meglepő, hogy az indexelés 0-ról indul, nem pedig 1-ről.
Ezt családi hagyománynak is tekinthetjük. 
A __Java__, a __C++__ és a __C__ az indexelést __0__-ról kezdi. 
Ezt __0__-alapú indexelésnek nevezzük. 
__A C# nyelvben is az első elem a 0.__
:::

A tömb értékei más számokkal is elérhetők:

```csharp
scores[1] = 95;
scores[2] = 90;
```

A tömb aktuális értékét egy adott indexre mutató operátorral is kiolvashatja:

```csharp
Console.WriteLine(scores[0]);
```

Ez kiírja a `scores` tömb első (_0. indexű_) elemének aktuális értékét.

### Alapértelmezett értékek

Egy új tömb létrehozásakor a számítógép lefoglalja a tömb memóriahelyét és minden bitet 0-ra állít. Ez automatikusan inicializálja a tömb minden elemét, de mit inicializál? 

A __minden bit 0__ kijelentés a típustól függ:

- Minden numerikus típus esetében, beleértve az `int` és a `float` típusokat is, ez 0. 
- A `bool` esetében ez a `false`. 
- Karakterek esetében ez egy speciális karakter, az úgynevezett `null` karakter. 
- Egy karakterlánc esetében ez egy `null`, hiányzó vagy nem létező értéket jelöl.

A `null` értékekről később többet fogunk megtudni. Egyelőre a `null` karakterláncokat kezeljük úgy, mintha nem lennének inicializálva.

Nem kell végigmennünk egy egész tömbön és feltöltenünk azt konkrét értékekkel, ha az alapértelmezett érték elég jó. Tegyük fel például, hogy ezt tesszük:

```csharp
int[] scores = new int[5];
```

Ez az öt elemű tömb öt helyet foglal, mindegyik értéke 0 lesz.

### A tömb határainak túllépése

Ha az index a értéke a tömb méreténél nagyobb akkor az problémához vezet. A __C#__ gondoskodik arról, hogy a tömb elejét vagy végét meghaladó elérési kísérletet még azelőtt megállítsa, mielőtt az megtörténhetne és létrehozza az __index out-of-range__ hibát, amely a program összeomlásához vezet, ha nem kezeljük. Egy ilyen probléma az alábbi kóddal merülne fel:

```csharp
int[] scores = new int[5];
scores[10] = 1000;
```

A `scores` tömb, öt elemet tartalmaz és azokat __0__-tól __4__-ig számozza. A __-1__ indexű hely elérése ugyanezen okból sikertelen lenne.

Ügyeljünk arra, hogy csak az érvényes indexekre hivatkozzunk. Szerencsére minden tömb rögzíti a méretét.
A tömb `Length` változójára hivatkozva megtudhatjuk, hány eleme van:

```csharp
Console.WriteLine(scores.Length);
```

Ez különösen akkor hasznos, ha nem tudjuk, mekkora lehet egy tömb. Az alábbi kód megkérdezi a felhasználótól a hosszúságot, létrehoz egy ilyen méretű tömböt, majd egy `for` ciklus segítségével feltölti azt értékekkel:

```csharp
int length = Convert.ToInt32(Console.ReadLine());
int[] array = new int[length];

for(int index = 0; index < array.Length; index++) 
    array[index] = 1;
```

Ez egy 1-esekkel teli tömböt eredményez, annyi elemmel, amennyit a felhasználó kért.

A for ciklusokat gyakran használják tömbökkel. A fenti séma tipikus és érdemes megjegyezni, ha magadnak kell megcsinálnod. A legtöbb C# programozó az indexet __0__-nál kezdi, a ciklus addig tart, amíg a ciklus változója kisebb, mint a tömb hossza és a cikluson keresztül minden egyes alkalommal inkrementál.

### Indexelés a végéről

Előfordul, hogy az elemeket a tömb végétől kívánjuk elérni, nem pedig az elejétől. Ezt a `^` operátorral érheted el. Az alábbi kód a `scores` tömb utolsó elemét szerezi be:

```csharp
int lastScore = scores[^1];
```

Igen, az elejéről __0__-tól kezdesz, de a végéről __1__-től indul.

### Tartományok

Lehetséges egy tömbön belüli szakaszt vagy tartományt másolni a tartományoperátorral `(..)`:

```csharp
int[] firstThreeScores = scores[0..3];
```

Tömbök esetén ez egy másolatot készít. Az első három pont módosítása nem érinti az eredeti `scores` tömböt.

A tartományokban szereplő számok rövid megbeszélést érdemelnek. Az első szám az `index`, ahol elkezdjük. A második szám az az `index`, ahol véget ér, de nem kerül bele a másolatba. A __0..3__ például a __0__, __1__ és __2__ indexű elemeket használja, de a __3.__ indexűt nem.

## Tömbök létrahozásának más módjai

Bár a `new int[10]` megközelítés egy gyakori módja az új tömbök létrehozásának, létezik azért még néhány másik variáció is erre. Ha tudjuk, hogy milyen értékeket szeretnénk inicializálni a tömbünkben, akkor használhatjuk ezt az alternatívát:

```csharp
int[] scores = new int[10] { 100, 95, 92, 87, 55, 50, 48, 40, 35, 10 };
```

Minden értéket vesszővel elválasztva és szögletes zárójelek közé zárva sorolunk fel. Ezt a sémát nevezzük __gyűjtemény inicializáló szintaxis__-nak. A felsorolt elemek számának és hosszának meg kell egyeznie egymással, de ha az összes elemet felsoroljuk, akkor a hossz megadása eleve kihagyható:

```csharp
int[] scores = new int[] { 100, 95, 92, 87, 55, 50, 48, 40, 35, 10 };
```

Ha a felsorolt értékek típusa elég egyértelmű ahhoz, hogy a fordító kikövetkeztesse a típust, akkor a tömb létrehozásakor nem is kell megadni a típust:

```csharp
int[] scores = new [] { 100, 95, 92, 87, 55, 50, 48, 40, 35, 10 };
```

## Pár példa tömbökkel

Nézzünk néhány példát egy kicsit bonyolultabb helyzettel.

Az első példa megkeresi a tömb legkisebb értékét. A folyamat alapja az, hogy rögzítjük a eddig talált legkisebb értéket és végigmegyünk a tömbön, vizsgálva az egyes elemeket. Minden elem esetében megvizsgáljuk, hogy kisebb-e, mint a eddig talált legkisebb szám. Ha igen, akkor ezt kezdjük el használni a legkisebb számként. Amikor elérjük a tömb végét, tudjuk, hogy a félretett elem a tömb legkisebb eleme.

```csharp
int[] array = new int[] { 4, 51, -7, 13, -99, 15, -8, 45, 90 };
int currentSmallest = int.MaxValue; // Kezdjük magasabb értékkel, mint bármelyik elem a tömbben.
for (int index = 0; index < array.Length; index++)
{
    if (array[index] < currentSmallest)
        currentSmallest = array[index];
}
Console.WriteLine(currentSmallest);
```

A következő példa kiszámolja egy tömbben lévő számok átlagértékét. Az átlagérték a tömbben lévő összes elem összege, osztva a tartalmazott elemek számával. Meghatározhatjuk az összes elem összegét a tömbben a futó összeg fenntartásával, kezdve nullával és hozzáadva minden elemet ehhez a futó összeghez, ahogy egy ciklusban végigmegyünk rajtuk. Miután ezt befejeztük, az átlagot kiszámoljuk az összeg osztva az elemek számával:

```csharp
int[] array = new int[] { 4, 51, -7, 13, -99, 15, -8, 45, 90 };
int total = 0;
for (int index = 0; index < array.Length; index++)
    total += array[index];
float average = (float)total / array.Length;
Console.WriteLine(average);
```

## A `foreach` ciklusok

Tömbök és ciklusok gyakran járnak kéz a kézben, mivel általános, hogy valamilyen műveletet végezzünk minden elemmel egy tömbben. Például az alábbi kód az összes elemet megjeleníti:

```csharp
int[] scores = new int[10];
for(int index = 0; index < scores.Length; index++)
{
    int score = scores[index];
    Console.WriteLine(score);
}
```

A C# negyedik és utolsó típusú ciklusa a `foreach` ciklus. Ez egyszerűbb szintaxissal rendelkezik, mint egy `for` ciklus. Az alábbiakban ugyanaz a kód:

```csharp
int[] scores = new int[10];

foreach (int score in scores)
    Console.WriteLine(score);
```

A `foreach` ciklus létrehozásához a `foreach` kulcsszót használod. A zárójelek között egy változót deklarálhatsz, amely mindig sorban tartalmazza a tömb minden elemét. Az `in` kulcsszó választja el a változót a bejárni kívánt tömbtől. A változót a cikluson belül használhatod, ahogyan a fenti példában is látható.

A `foreach` ciklusnak az a hátránya, hogy elveszítjük az információt arról, hogy éppen melyik indexen vagyunk - ez egy `for` ciklusnál a ciklus változójával egyértelmű. Ha mind az elemnek, mind annak indexének hozzáférésre van szükségünk (_például olyan szövegek megjelenítéséhez, mint "Pontszám #3: 82"_), akkor a legjobb választás egy `for` ciklus. A `foreach` ciklus általában könnyebben olvasható, mint a `for` ciklus, de kissé lassabb is. Ha a teljesítmény problémát okoz, érdemes lehet egy problémás `foreach` ciklust átírni egy `for` ciklussá annak felgyorsítása érdekében.


## Többdimenziós tömbök

A legtöbb tömb példánk `int` tömbökből állt, de nincsenek korlátok arra vonatkozóan, hogy milyen típusokat használhatunk egy tömbben. Ugyanilyen könnyen használhatunk `double[]`, `bool[]` és `char[]` tömböket is. 

Még tömböket is készíthetünk tömbökből! Képzeljük el például, hogy a következő számmátrixunk van:

```txt
1 2
3 4
5 6
```

Ezt a struktúrát és annak tartalmát a következő módon ábrázolhatjuk:

```csharp
int[,] matrix = new int[3, 2] { 
    { 1, 2 }, 
    { 3, 4 }, 
    { 5, 6 } 
};

Console.WriteLine(matrix[0, 1]);
```

A többdimenziós tömböknél a szögletes zárójelek közé tett vesszővel jelezzük, hogy egynél több dimenzióval rendelkezik. Új többdimenziós tömb létrehozásakor a méreteit vesszővel elválasztva a szögletes zárójelek közé írhatjuk. Ha konkrét értékekkel akarjuk inicializálni, akkor más szögletes zárójelek között szögletes zárójelekből álló halmazokat használsz. A beállítás nem triviális, de egyszerű.

Ha egy többdimenziós tömb minden elemét meg akarjuk nézni, akkor a `GetLength` metódus lesz a segítségünkre, amelynek meg kell adnunk egy dimenziót (_0-tól számítva, nem 1-től_):

```csharp
int[,] matrix = new int[4,4];

for (int row = 0; row < matrix.GetLength(0); row++)
{
    for (int column = 0; column < matrix.GetLength(1); column++)
        Console.Write(matrix[row, column] + " ");
    Console.WriteLine();
}
```


