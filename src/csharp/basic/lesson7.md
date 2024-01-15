---
icon: fa-solid fa-7
---

# Matematika

:::note Röviden
- Az összeadás (`+`), kivonás (`-`), szorzás (`*`), osztás (`/`) és maradék (`%`) mind használható matematikai kifejezésekhez: `int a = 3 + 2 / 4 * 6;`
- A `+` és `-` operátorok előjelek jelölésére (_vagy egy érték negálására_) is használhatók: _+3_, _-2_ vagy _-a_.
- A műveletek sorrendje megfelel a matematikai világnak.
- A sorrendet úgy változtathatjuk meg, hogy zárójelek segítségével csoportosítjuk azokat a dolgokat, amelyeket először szeretnénk elvégezni.
- Az összetett hozzárendelési operátorok (`+=`, `-=`, `*=`, `/=`, `%=`) olyan rövidítések, amelyek egy változót egy matematikai művelettel állítanak be. `a += 3;` ugyanaz, mint `a = a + 3;`
- A növelő és csökkentő operátorok: `a++;` `b--;`
- A numerikus típusok mindegyike definiál speciális értékeket a tartományaikhoz (`int.MaxValue`, `double.MinValue`, stb.), a lebegőpontos típusok pedig `PositiveInfinity`, `NegativeInfinity` és `NaN` értékeket is definiálnak.
- Az egész számok osztása elhagyja a maradékokat, míg a lebegőpontos osztás nem.
- A típusok között átváltással konvertálhatunk: `int x = (int)3.3;`
- A `Math` és `MathF` osztályok tartalmaznak egy sor segédmetódust a gyakori matematikai műveletek kezelésére.
:::

A számítógépeket a matematika céljából építették fel és itt az ideje, hogy megnézzük, hogyan lehet a számítógépet néhány alapvető számításra felhasználni.

## Műveletek és operátorok

Egy művelet egy számítás, amely két számot vesz figyelembe és valamilyen módon kombinálva egyetlen eredményt hoz létre. Minden operátor azt jelzi, hogy hogyan vannak kombinálva a számok és minden operátort egy adott szimbólum reprezentál. Például a __2 + 3__ egy művelet. A művelet az összeadás, amit a __+__ szimbólummal jelölünk. Azokat a dolgokat, amelyeket egy művelet használ, operandusoknak nevezzük.

A legtöbb operátor két operandust igényel. Ezeket bináris operátoroknak nevezzük ("_bináris_" azt jelenti, hogy "_két dologból áll_"). Egy operátor, amely egy operandust igényel, unáris operátor, míg az, amely háromat igényel, ternáris operátor. __A C# nyelvnek sok bináris operátora van, néhány unáris operátora és egyetlen ternáris operátora.__

## Összeadás, kivonás, szorzás és osztás

A C# a matematika világából kölcsönzi az operátorszimbólumokat. Például a 2 és a 3 összeadása és az eredmény tárolása egy változóban így néz ki:

```csharp
int a = 2 + 3;
```

A __2 + 3__ egy művelet, de minden művelet egyben kifejezés is. Amikor a programunk fut, a program fogja ezt a két értéket és a felsorolt művelettel kiértékeli őket. Ez a kifejezés __5__-re értékelődik ki, ami a memóriába helyezett eredmény.

Ugyanez működik a kivonásnál is:

```csharp
int b = 5 - 2;
```

Az ilyen aritmetika bármilyen kifejezésben használható, nem csak egy változó inicializálásakor:

```csharp
int a;
a = 9 - 2;
a = 3 + 3;

int b = 3 + 1;
b = 1 + 2;
```

Az operátoroknak nincs szükségük szó szerinti értékekre bármilyen kifejezést használhatnak. Az alábbi kód például összetettebb kifejezéseket használ, amelyek változókat tartalmaznak:

```csharp
int a = 1;
int b = a + 4;
int c = a - b;
```

Az operátorok és kifejezések lehetővé teszik számunkra, hogy egy folyamaton keresztül, lépésről lépésre számoljuk ki az eredményt.

A szorzást a csillag (__*__) szimbólummal jelöljük:

```csharp
float totalPies = 4
float slicesPerPie = 8
float totalSlices = totalPies * slicesPerPie;
```

Az osztást az előre perjel (__/__) szimbólum használjuk:


```csharp
double moneyMadeFromGame = 100000;
double totalProgrammers = 4;
double moneyPerPerson = moneyMadeFromGame / totalProgrammers;
```

Az utolsó két példa azt mutatják, hogy matematikai műveleteket végezhetünk bármilyen numerikus típussal, nem csak az `int` típussal.

## Összetett kifejezések és műveleti sorrend

Eddig a matematikai kifejezéseink csak egyetlen operátort tartalmaztak egyszerre, de a matematikai kifejezéseinkben több operátort is kombinálhatnunk. Például az alábbi két különböző műveletet használva egyetlen kifejezésben:

```csharp
int result = 2 + 5 * 2;
```

A cél az, hogy megértsük melyik művelet hajtódik végre először. Ha az összeadást végezzük el először, a result _14_. Ha pedig a szorzást végezzük el, a result _12_.

Van egy szabályrendszer arra, hogy melyik operátorokat értékelik ki először a fordító. Ez a szabályrendszer az __operátorok sorrendje__. Szerencsére a C# követi a szokásos matematikai műveleti sorrendet, így természetesnek tűnik, ha ismered a matematikai műveleti sorrendet.

A C#-nak sok operátora van az __összeadás__, __kivonás__, __szorzás__ és __osztás__ túlmenően, tehát a teljes szabályrendszer bonyolult. 

Most annyi elég, hogy az alábbi két szabály érvényes:
- A szorzás és osztás először történik, balról jobbra.
- Az összeadás és kivonás utoljára történik, balról jobbra.

Ezen szabályoknak köszönhetően tudhatjuk, hogy az __2 + 5 * 2__ kifejezésben először a szorzás történik, átalakítva azt __2 + 10__-é, majd az összeadás következik, a végeredmény pedig __12__, amelyet az eredmény változóban tárolunk.

Ha felül szeretnénk írni a műveleti sorrendet, két lehetőségünk  van rá. Az első az, hogy a végrehajtandó részt külön szedjük:

```csharp
int result1 = 2 + 5;
int result2 = result1 * 2;
```

A másik lehetőség pedig a zárójelek használata. A zárójelek egy al-kifejezést hoznak létre, amelyet először értékel ki:

```csharp
int result = (2 + 5) * 2;
```

A zárójelek kényszerítik a számítógépet arra, hogy először végezze el a __2 + 5__ összeadást a szorzás előtt. A matematika világában is használják ezt a trükköt.

A matematikai világban a szögletes zárójelek ([ és ]) és kapcsos zárójelek ({ és }) néha "erősebb" csoportosítási szimbólumként szolgálnak. A C# ezeket a szimbólumokat más célokra használja, ezért ehelyett egymásba ágyazott több zárójelet használunk:

```csharp
int result = ((2 + 1) * 8 - (3 * 2) * 2) / 4;
```

:::info Ne felejtsük el: a cél nem az, hogy mindent egyetlen sorba sűrítsünk, hanem olyan kódot írjunk, amit képesek leszünk megérteni, amikor két hét múlva visszatérünk hozzá. 
:::


Nézzünk meg egy másik példát. Ez a kód kiszámolja a trapéz területét:

```csharp
double side1 = 4.5;
double side2 = 3.5;
double height = 1.5;

double areaOfTrapezoid = (side1 + side2) / 2.0 * height;
```


A zárójeleket először kiértékeljük, ezért először az __side1 + side2__ kifejezéseket oldjuk meg.A programunk lekérdezi az egyes változók értékeit, majd elvégzi az összeadást. Ezen a ponton a teljes kifejezést így lehet elképzelni: 

__8.0 / 2.0 * height__ 

Az osztásnak és a szorzásnak ugyanaz az elsőbbsége, tehát előbb osztunk, mint szorzunk, mert ezeket balról jobbra haladva végezzük. 

A __8.0 / 2.0__ az __4.0__ és a kifejezésünk  __4.0 * height__. 

Már csak a szorzás az egyetlen művelet, amivel foglalkoznunk kell, ezért úgy hajtjuk végre, hogy a magasságban lévő értéket lekérdezzük (__1.5__) és megszorozzuk, így a végeredmény __6.0__ lesz. Ezt az értéket helyezzük az __areaOfTrapezoid__ változóba.

## Különböző szám értékek

Az 11 numerikus típus - nyolc egész típus és három lebegőpontos típus - mindegyike definiál néhány különleges értéket, amelyek hasznosak lehetnek számunkra.

A 11 típus mindegyike meghatározza a `MinValue` és a `MaxValue` értékeket, ami a _legkisebb_ és _legnagyobb_ érték, amelyet helyesen képesek reprezentálni. Ezek lényegében változóként vannak definiálva és a típus nevén keresztül érheted el őket. 

```csharp
int aBigNumber = int.MaxValue;
short aBigNegativeNumber = short.MinValue;
```

A `double` és `float` típusok definiálnak egy értéket a pozitív és negatív végtelen számára, amit `PositiveInfinity` és `NegativeInfinity`-nak hívnak:

```csharp
double infinity = double.PositiveInfinity;
```

Sok számítógép az __∞__ szimbólumot használja a végtelen numerikus érték reprezentálására.

A `double` és `float` típusok továbbá definiálnak egy furcsa értéket, amit __NaN__-nek, vagyis "__nem szám__"-nak hívnak. A __NaN__-t akkor kapunk, ha egy számítás eredménye egy lehetetlen értéket eredményez, például nullával való osztás esetén.

```csharp
double notAnyRealNumber = double.NaN;
```

## Egész számos osztás vs Lebegőpontos osztás

Próbáld ki ezt a programot és nézd meg, hogy a megjelenített eredmény az-e, amit vártál:

```csharp
int a = 5;
int b = 2;
int result = a / b;
Console.WriteLine(result);
```

A számítógépen két megközelítés létezik az osztásra. Matematikailag az __5/2 = 2.5__. Ha `a`, `b` és az eredmény is lebegőpontos típusok lennének, akkor ez történt volna. Ezt az osztási stílust lebegőpontos osztásnak nevezik, mert ez az, amit lebegőpontos típusokkal kapsz.

A másik lehetőség az egész számok osztása. Amikor bármelyik egész típussal osztasz, az eredmény törtrészének a bitjei eldobásra kerülnek. Még a __9/10__ is, ami matematikailag _0.9_, egyszerűen __0__ lesz. A fenti kód csak egészeket használ, így egész számos osztást alkalmaz. A __5/2__ így _2.5_ helyett __2__ lesz és ezt helyezzük az eredménybe.


## Nullával való osztás

A matematikában a nullával való osztás nincs definiálva - ez egy értelmetlen művelet, amelynek nincs meghatározott eredménye. 

- Ha egész típusokkat osztunk nullával, a programunk összeomlik.
- Ha lebegőpontos típusokkat osztunk nullával, nem kapjuk ugyanazt a fajta programösszeomlást. 

Mivel a program azt feltételezi, hogy valójában egy lehetetlenül kicsi, de nem nulla számmal akartál osztani és az eredmény pozitív végtelen, negatív végtelen vagy NaN lesz attól függően, hogy a számláló pozitív szám, negatív szám, vagy nulla volt-e. 

:::info A matematikai műveletek végtelenekkel és NaN-ekkel mindig végteleneket és NaN-eket eredményeznek, így meg kell védenünk magunkat a nullával való osztástól amikor csak lehet.
:::


## Egy pár operátor

Az összeadás, kivonás, szorzás és osztás nem az egyetlen operátor a C# nyelvben.

### Unáris + és - operátorok

Míg a + és - általában összeadásra és kivonásra szolgálnak, amely két operandust igényel (pl. _a - b_), mindkettőnek van egy unáris verziója is, amely csak egyetlen operandust igényel:

```csharp
int a = 3;
int b = -a;
int c = +a;
```

A _-_ operátor megfordítja az utána következő értéket. Mivel `a` értéke _3_, a `-a` értéke _-3_ lesz. Ha `a` értéke _-5_ lett volna, akkor `-a` értéke _+5_ lenne. Az előjel megfordításra gondolhatunk úgy, mintha _-1_-tel szoroznánk.

A unáris _+_ nem csinál semmit a numerikus típusokkal, de néha könnyebb átláthatóságot adhat a kódhoz. Például:

```csharp
int a = 3;
int b = -(a + 2) / 4;
int c = +(a + 2) / 4;
```
### A maradék operátor

A C# maradék operátora `%` szimbólum segítségével számítja ki a maradékot. A maradék kiszámítása így néz ki a kódban:

```csharp
int leftOverApples = 23 % 3;
```

A maradék operátor elsőre talán nem tűnik hasznosnak, de nagyon hasznos lehet. Az egyik leggyakoribb felhasználási módja annak eldöntése, hogy egy szám egy másik szám többszöröse-e. Ha igen, akkor a maradék 0. Nézzük meg ezt a kódot:

```csharp
int remainder = n % 2; // Ha ez 0, akkor 'n' páros szám.
```

Ha a maradék 0, akkor a szám osztható kettővel, ami azt is jelenti, hogy páros szám. A maradék operátornak ugyanaz az precedencia sorrendje, mint a szorzásnak és az osztásnak.

## Változók frissítése

Az `=` operátor a hozzárendelési operátor és bár ugyanúgy néz ki, mint az egyenlőségjel, nem jelenti azt, hogy a két oldal egyenlő. Ehelyett azt jelzi, hogy a jobb oldalon lévő valamilyen kifejezést ki kell értékelni, majd el kell tárolni a bal oldalon látható változóban.

Gyakori, hogy a változók idővel új értékekkel frissülnek. Az is gyakori, hogy egy változó új értékét az aktuális érték alapján számoljuk ki. Például a következő kód az a változó értékét 1-gyel növeli:

```csharp
int a = 5;
a = a + 1; // the variable a will have a value of 6 after running this line.
```

A második sor az `a`-t _1_-gyel növeli, függetlenül attól, hogy mi volt benne korábban.

A fenti kód meg mutatja, hogy a hozzárendelés hogyan különbözik az egyenlőség matematikai elképzelésétől. A matematika világában az `a = a + 1` abszurditás. Nem létezik olyan szám, amely eggyel többel egyenlő önmagánál. A C# kódban azonban gyakoriak az olyan utasítások, amelyek egy változót az aktuális értéke alapján frissítenek. Számos rövidítés létezik erre.A `a = a + 1;` helyett ezt tehetnénk helyette:

```csharp
a += 1;
```

Ez a kód pontosan megegyezik az `a = a + 1;` kóddal, csak rövidebb. A `+=` operátort összetett hozzárendelési operátornak nevezzük, mert egy műveletet (ebben az esetben az összeadást) kombinál egy változó hozzárendelésével. Az eddig látott bináris operátorok mindegyikéhez létezik összetett hozzárendelési operátor, beleértve a `+=`, `-=`, `*=`, `/=` és `%=` operátorokat:

```csharp
int a = 0;
a += 5; // The equivalent of a = a + 5; (a is 5 after this line runs.)
a -= 2; // The equivalent of a = a – 2; (a is 3 after this line runs.)
a *= 4; // The equivalent of a = a * 4; (a is 12 after this line runs.)
a /= 2; // The equivalent of a = a / 2; (a is 6 after this line runs.)
a %= 2; // The equivalent of a = a % 2; (a is 0 after this line runs.) 
```

## Inkrementálás és dekrementálás operátorok


Ha egy változóhoz egyet adunk hozzá, azt a változó inkrementálásának, ha pedig kiveszünk belőle egyet, azt a változó dekrementálásának nevezzük. Ez a két szó a növelés és a csökkentés szavakból származnak. A változót egy értékkel felfelé vagy lefelé mozgatják.

A növelés és csökkentés olyannyira gyakori, hogy specifikus operátorok léteznek hozzájuk ilyen az inkrementáló operátor (`++`) és a dekrementáló operátor (`--`). Ezek az operátorok unárisak, csak egyetlen operandust igényelnek a működésükhöz, de annak egy változó kell lennie és nem egy kifejezésnek. 

Például:

```csharp
int a = 0;
a++; // The equivalent of a += 1; or a = a + 1; 
a--; // The equivalent of a -= 1; or a = a - 1;
```

Hamarosan számos felhasználási lehetőségét fogjuk látni ezeknek az operátoroknak.

## Különböző típusokkal és castolással való munka

Különböző numerikus típusok problémásak lehet. A legtöbb matematikai művelet csak az azonos típusú operandusokra van definiálva. Gyakran szükségünk van különböző adattípusokkal való munkavégzésre a programjainkban. A C# rendelkezik egy típusok közötti konverziós rendszerrel - ez lehetővé teszi a különböző típusok használatát.

Két kategóriája van a konverzióknak. 
- Az adatvesztéssel járó konverzió. Például egy `long` átalakítása egy `byte` típussá elvesztheti az adatot, ha a szám nagyobb, mint amennyit egy `byte` pontosan képes reprezentálni. 
- Az adatvesztéssel nem járó konverzió. Például egy `long` mindent képes reprezentálni, amit egy `byte` is, tehát nincs kockázat a konverzió során.

A konverziók lehetnek __explicitek__ vagy __implicitek__. A C#-ban az összes numerikus típus között vannak definiált konverziók. Amikor ez biztonságos, ezek implicit konverziók. Amikor nem az, akkor ezek explicit konverziók. Tekintsük meg ezt a kódot:

```csharp
byte aByte = 3;
int anInt = aByte;
```

Az `aByte` egyszerű kifejezés típusa byte. Mégis `int`-té kell alakítani, hogy az `anInt` változóban tárolhassuk. A `byte`-ból `int`-be való átalakítás biztonságos, ezért a számítógép automatikusan elvégzi ezt az átalakítást. A fenti kód lefordítható anélkül, hogy bármi különöset kellene tennünk.

Ha a másik irányba szeretnénk ezt megvalósítani - egy `int`-ből akarunk `byte`-ot -, akkor a konverzió nem biztonságos. A fordításhoz kifejezetten meg kell adnunk, hogy használni akarjuk a konverziót, ismerve az ezzel járó kockázatokat. A konverzió kifejezett kéréséhez az alább látható castolási operátort használjuk:

```csharp
byte anInt = 3;
byte aByte = (byte)anInt;
```

A konvertálni kívánt típus a kifejezés elé van helyezve zárójelekben. Ez a kód azt mondja: "Tudom, hogy az `anInt` egy `int`, de tudom kezelni annak következményeit, ha ezt `byte`-á alakítjuk, ezért kérlek, konvertáld át".

Azonban a kasztolási átalakítások nincsenek definiálva minden lehetséges típus között. Például ezt nem teheted:

```csharp
string text = "0";
int number = (int)text; // DOES NOT WORK! 
```

Nincs lehetőségünk átalakításra `string` típusról `int` típusra. 


A kasztolások és az átalakítások megoldják azt a második problémát is, amit a különböző típusok okoznak. Tekintsük meg ezt a kódot:

```csharp
int amountDone = 20;
int amountToDo = 100;
double fractionDone = amountDone / amountToDo;
```

Mivel az `amountDone` és `amountToDo` `int` típusú, az osztás `int` osztásként történik, és az eredmény __0__ lesz. (Az int osztás megszabadul az egész részektől, és _0.2_ egy sima _0_ lesz.) Ez az `int` érték aztán automatikusan átalakul egy `double` típussá (_0.0_). Azonban ez valószínűleg nem az, amit most vártunk. Ha az osztásban részt vevő bármelyik részt `double` típusúvá alakítjuk át, akkor az osztás lebegőpontos osztásként történik:

```csharp
int amountDone = 20;
int amountToDo = 100;
double fractionDone = (double)amountDone / amountToDo;
```

Most a `amountDone` konvertálása `double` típusúvá először megtörténik és az eredmény pedig 0.2. Ebben a pontban az kifejezés már double típusú, tehát nincs szükség további átalakításra a fractionDone értékének hozzárendeléséhez.

## A Math és MathF osztályok

A __C#__ nyelv két osztályt is tartalmaz, amelyek segítenek a matematikai műveletek végrehajtásában. Ezeket az osztályokat a `Math` osztálynak és a `MathF` osztálynak nevezik.

### `π` és `e`

A különleges, elnevezett `e` és `π` számok a `Math` osztályban vannak definiálva, így nem kell újra definiálnod őket magadnak. Ezek a két szám a `Math.E` és a `Math.PI`. Például a következő kód kiszámolja egy kör területét (_Terület = πr2_):

```csharp
double area = Math.PI * radius * radius;
```

### Hatványozás és négyzetgyökvonás

A C#-nak nincs hatványozó operátora, azonban a `Math` osztály módot biztosít hatványozásra és négyzetgyök vonásra.

```csharp
double x = 3.0;
double xSquared = Math.Pow(x, 2);
```

A `Pow` az első olyan metódus, amelynek két információra van szüksége a feladat elvégzéséhez. A fenti kód bemutatja, hogyan lehet ezeket a metódusokat használni.

Tehát a `Math.Pow(x, 2)` ugyanaz, mint __x^2__.

Négyzetgyökvonáshoz a `Sqrt` metódust használjuk:

```csharp
double y = Math.Sqrt(xSquared);
```

### Abszolút érték

Az abszolút érték egy szám pozitív változata. A 3 abszolút értéke 3. A -4 abszolút értéke 4. Az `Abs` metódus kiszámolja az abszolút értékeket:

```csharp
int x = Math.Abs(-2);
```

### Min, Max

A `Math` osztálynak vannak olyan metódusai is, amelyek visszaadják két szám minimumát és maximumát:

```csharp
int smaller = Math.Min(2, 10);
int larger = Math.Max(2, 10);
```

Itt a `smaller` változó értéke 2 lesz, míg a `larger` változó értéke 10 lesz.

Ez egy szelet a leggyakrabban használt `Math` osztály metódusaiból, de van még több. Fedezd fel a lehetőségeket, amikor ráérsz, hogy megismerkedj a más lehetőségekkel.