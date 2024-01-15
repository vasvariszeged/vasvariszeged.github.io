---
icon: fa-solid fa-6
---

# A C# típusok

:::note Röviden
- A változók és értékek típusai a C# nyelvben – nem felcserélhetők egymással.
- Nyolc egész szám típus létezik különböző méretű és tartományú egész számok tárolására: `int`, `short`, `long`,
`byte`, `sbyte`, `uint`, `ushort` és `ulong`.
- A `char` típus egyes karakterek tárolására szolgál.
- A `string` típus hosszabb szöveget tárol.
- A valós számok tárolására három típus létezik: `float`, `double` és `decimal`.
- A `bool` típus a logikában használt igazságértékeket (_true_ és _false_) tárolja.
- Ezek a típusok egy sokkal nagyobb típusrendszer építőkövei.
- A `var` használata egy változó típusnál azt jelenti, hogy a fordító a környező kódból következtet a típusára, így nem kell begépelnünk.
- A `Convert` osztály segít az egyik típust egy másikba konvertálni.
:::

A C# nyelvben a változók és az értékek típusai meg kell, hogy egyezzenek, de eddig csak két típust ismertünk meg. Most megnézzük a típusok változatos készletét, amelyeket a programjainkban használhatunk. Ezeket a típusokat beépített típusoknak vagy primitív típusoknak nevezzük. Ezek az építőkövei a bonyolultabb típusoknak, amelyekkel később találkozunk.

## Az adatok ábrázolása binárisan

Miért olyan fontosak a típusok?

Minden adatot, amelyet a programjainkban ábrázolni szeretnénk, a számítógép áramkörében kell tárolni és csak a bináris __1__ és __0__ értékekre korlátozódik. Ha egy számot akarunk tárolni, akkor szükségünk van egy sémára, amely a bitek (_egyetlen 1 vagy 0_) és a bájtok (_8 bitből álló csoport és a bitek szabványos csoportosítási mérete_) használatával reprezentálja a tárolni kívánt lehetséges számok tartományát. Ha egy szót akarunk ábrázolni, akkor szükségünk van valamilyen sémára a bitek és bájtok használatára a betűk és betűsorozatok ábrázolására. Tágabb értelemben bármit, amit egy programban ábrázolni akarunk, szükségünk van egy sémára, amellyel binárisan kifejezhetjük.

Minden típus saját szabályokat határoz meg az értékek bináris ábrázolására és a különböző típusok nem felcserélhetők egymással. Nem lehet egész számok reprezentálására szánt biteket és bájtokat venni és ezeket a biteket és bájtokat átértelmezni karakterláncként és azt várni, hogy értelmet nyerjünk belőle. Ugyanígy nem vehetünk szöveget reprezentáló biteket és bájtokat és nem értelmezhetjük őket egész számként és nem várhatjuk el, hogy ez értelmes legyen. Ezek nem ugyanazok. Ezt nem lehet megkerülni.

Ez nem jelenti azt, hogy minden típus egy külön világ, amely soha nem léphet kölcsönhatásba a többi típussal. Gyakran át tudunk és át is fogunk alakítani egyik típusból a másikba. De az átalakulással járó költségek nem ingyenesek, ezért inkább tudatosan tesszük, mint véletlenül.

Kiemelkedően fontos, hogy a C# nem talál ki teljesen új rendszereket és szabályokat legtöbb típusához. Az informatikai világ kidolgozott rendszereket alkalmaz a gyakori típusokra, mint például számokra és betűkre. A számítógép fizikai hardvere is ugyanezen rendszereket használja. Mivel ezek beépítve vannak az áramkörbe, így ez által gyors működés érhető el.

## Integer típus

Nézzük meg a C# programokban elérhető alapvető típusokat, kezdve azokkal, amelyek az egész számokat képviselik. Létezik nyolc különböző típus is az egész számokkal való munkához. Ezt a nyolc típust egész típusoknak vagy integertípusoknak nevezik. Mindegyik típus más-más számú bájtot használ, ami lehetővé teszi, hogy nagyobb számokat tároljunk több memória felhasználásával, vagy kisebb számokat tároljunk memóriakímélő módon.

Az `int` típus _4 bájtot_ használ és számokat képes reprezentálni körülbelül -2 milliárdtól +2 milliárdig.

Ellentétben a `short` típussal, amely _2 bájtot_ használ és körülbelül __-32,000__-től __+32,000__-ig terjedő számokat képes reprezentálni, a long típus _8 bájtot_ használ és körülbelül -9 kvintilliótól +9 kvintillióig terjedő számokat képes reprezentálni.

A méretek és tartományok azt mutatják meg, mikor választhatod a `short` vagy a `long` típust az `int` helyett. Ha a memória korlátozott és a `short` tartománya elegendő, használhatsz `short`-ot. Ha olyan számokat kell használnod, amelyek nagyobbak, mint amit az `int` kezelne, akkor a `long` típusra kell váltanod, még akkor is, ha több bájtba kerül.


A `short`, `int` és `long` típusok előjeles típusok, pozitív vagy negatív előjelet tartalmaznak és pozitív és negatív értékeket tárolnak. 
Ha csak pozitív számokra van szüksége, akkor erre szolgálnak az előjel nélküli típusok: `ushort`, `uint` és `ulong`. Ezek mindegyike ugyanannyi bájtot használ, mint az előjeles megfelelőjük, nem tárolhatunk bennük negatív számokat, de cserébe kétszer annyi pozitív számot tárolhatunk. Így az `ushort` tartománya __0__-tól körülbelül __65 000__-ig, az `uint` tartománya __0__-tól körülbelül __4__ milliárdig, az `ulong` tartománya pedig __0__-tól körülbelül __18__ kvintillióig terjed.

Az utolsó két egész számtípus egy kicsit más. A `byte` típus, amely egyetlen bájtot használ a __0__ és __255__ közötti értékek ábrázolására (előjel nélküli). Bár az integer-szerű, a byte-típust gyakrabban használják olyan bájtok vagy bájtok gyűjteményének kifejezésére, amelyeknek nincs konkrét struktúrájuk (_vagy a program nem ismeri őket_). A bájt típusnak van egy előjeles megfelelője, az `sbyte`, amely a -128 és +127 közötti értékeket képviseli. Az `sbyte` típus nem túl gyakran használatos, de teljessé teszi a készletet.

Az alábbi táblázat összefoglalja ezeket az információkat.

| Típus   | Méret (bájt) | Minimum                  | Maximum                  |
|---------|--------------|--------------------------|--------------------------|
| byte    | 1            | 0                        | 255                      |
| short   | 2            | -32.768                  | 32.767                   |
| int     | 4            | -2.147.483.648           | 2.147.483.647            |
| long    | 8            | -9.223.372.036.854.775.808| 9.223.372.036.854.775.807|
| sbyte   | 1            | -128                     | 127                      |
| ushort  | 2            | 0                        | 65.535                   |
| uint    | 4            | 0                        | 4.294.967.295            |
| ulong   | 8            | 0                        | 18.446.744.073.709.551.615|

### Változók deklarálása és használata egész típusú változókkal

Az ilyen más típusú változók deklarálása ugyanolyan egyszerű, mint az `int` vagy `string` típusok esetén, csak használd ezeknek a típusoknak a nevét int vagy `string` helyett, ahogyan azt korábban is tettük:

```csharp{1,4,7}
byte aSingleByte = 34;
aSingleByte = 17;

short aNumber = 5039;
aNumber = -4354;

long aVeryBigNumber = 395904282569;
aVeryBigNumber = 13;
```


A múltban láttuk, hogy egy szám közvetlenül kódunkban történő megadása egy `int` literált hoz létre. De ez felvet egy érdekes kérdést. Hogyan hozhatunk létre olyan literált, amely egy `byte` literál vagy egy `ulong` literál?

:::info literál
A literál egy konkrét, szó szerinti értéket jelent a programban. Ez lehet egy szám, egy karakter, egy szöveg vagy más adattípus értéke, amelyet közvetlenül a forráskódban adjuk meg. A literálok olyan értékeket képviselnek, amelyek az adott adattípusnak megfelelőek.

Például:

- Szám literál: `42` egy egész szám literál.
- Karakter literál: `'A'` egy karakter literál.
- Szöveg literál: `"Hello, World!"` egy szöveg literál.

Tehát a literál a forráskódban szereplő konkrét érték, amely az adott adattípusnak felel meg.
:::

Az `int`-nél kisebb dolgok esetében nincs szükség semmi különlegesre az adott típusú literál létrehozásához:

```csharp
byte aNumber = 32;
```

A __32__ egy `int` literál, de a fordító elég intelligens ahhoz, hogy észrevegye, hogy egy `byte`-ban próbálod tárolni és ellenőrizze, hogy az __32__ a megengedett tartományon belül van-e a `byte` típus esetében. A fordító kezeli ezt. Ellentétben, ha olyan literált használnál, ami túl nagy a `byte` típushoz, fordítási hibát kapnál, ami megakadályozza a programod fordítását és futtatását.

Ez ugyanez a szabály érvényes az `sbyte`, `short` és `ushort` típusokra is.

Ha a literál érték túl nagy az `int` típushoz, automatikusan `uint` literállá, `long` literállá vagy `ulong` literállá válik. Fordítói hibát kapunk, ha olyan literált állítunk be, amelynek értéke mindenhez túl nagy. Annak illusztrálására, hogy hogyan működnek ezek a nagyobb literáltípusok, tekintsük meg ezt a kódot:

```csharp
long aVeryBigNumber = 10000000000; // 10 billion would be a `long` literal.
```

Előfordulhat, hogy néha azt szeretnéd, hogy egy kisebb szám egyik nagyobb literális típussá váljon. Ezt úgy kényszeríthetjük ki, hogy a szó szerinti érték végére egy __U__ vagy __L__ (_vagy mindkettő_) betűt teszünk:

```csharp
ulong aVeryBigNumber = 10000000000U;
aVeryBigNumber = 10000000000L;
aVeryBigNumber = 10000000000UL;
```

Az __U__ azt jelenti, hogy az érték előjel nélküli és vagy `uint` vagy `ulong` kell, hogy legyen. Az __L__ azt jelzi, hogy a literálnak `long`-nak vagy `ulong`-nak kell lennie, a mérettől függően. Az __UL__ azt jelzi, hogy `ulong`-nak kell lennie. Ezek az utótagok lehetnek nagy- vagy kisbetűsek és bármelyik sorrendben. Kerüljük azonban a kisbetűs __l__ használatát, mert az túlságosan úgy néz ki, mint az __1__.

Ezekre az utótagokra nem túl gyakran lesz szükségünk.


### Számjegy szeparátor

Amikor az emberek hosszú számokat írnak, például __1,000,000,000,000__, gyakran használunk elválasztójelet, például vesszőt, hogy megkönnyítsük a szám értelmezését. Bár a C# nyelvben nem használhatjuk erre a célra a vesszőt, van egy alternatíva: az aláhúzás (`_`).

```csharp
int bigNumber = 1_000_000_000;
```

A számok írásakor a szokásos konvenció szerint hármas csoportosításban (ezrek, milliók, milliárdok stb.) írjuk őket, de a C# fordító nem törődik azzal, hogy ezek hol jelennek meg. Ha egy másik csoportosításnak több logikai értelme van, használjuk azt. A következők mindegyike megengedett:

```csharp
int a =  123_456_789;
int b = 12_34_56_78_9;
int c = 1_2__3___4____5;
```

### Az egész típusok közötti választás

Nyolc típus áll rendelkezésre az egész számok tárolására, de hogyan döntjük el, hogy melyiket használjuk?

Egyrészt gondosan megfontolhatjuk azokat az értéktartományokat, amelyekre szükségünk lehet bármely változónál, majd kiválaszthatjuk a legrövidebbet (_a memóriahasználat csökkentése érdekében_), amely belefér az elképzelt tartományunkba. Például, ha egy játékos pontszámára van szükségünk és tudjuk, hogy sosem lehet negatív, akkor már eleve kizártuk a nyolc lehetőségnek a felét. Ha a játékos pontszáma a százezreket is elérheti egy játék során, akkor kizárhatjuk a `byte` és `ushort` típusokat, mert azok nem elég nagyok. Ez csak az `uint` és `ulong` típusokat hagyja meg nekünk. Ha úgy gondoljuk, hogy a játékos pontszáma elérheti a 4 milliárdot, jobb, ha `ulong` típust használunk, de ha az adott értékek csak néhány milliót érnek el, akkor biztonságos az `uint` használata is. (_Mindig megváltoztathatjuk egy változó típusát és újra fordíthatjuk a programot, ha netán rosszul sikerült a típus kiválasztása - de könnyebb volna elsőre helyesen kiválasztani._)

:::danger Az a stratégia, hogy a legkisebb praktikus tartományt választjuk ki egy adott változóhoz, előnyös, de két dolog ellene szól.
Az első az, hogy a modern programozásban ritkán számít egyetlen bájtnyi hely megtakarítása. Túl sok memória van ahhoz, hogy az egyes bájtokon bosszankodjunk. 

A második, hogy a számítógépek hardvere nem támogatja a kisebb típusokkal való matematikai műveleteket. A számítógép átalakítja őket `int`-ekké és a műveleteket `int`-ként futtatja, ami arra kényszerít minket, hogy ezután bajlódjunk azzal, hogy az eredményt visszaváltoztassuk a kisebb típusra. Az `int` típus kényelmesebb, mint az `sbyte`, `byte`, `short` és `ushort` típusok, ha sok matematikai műveletet végzünk.

Ezért a gyakran alkalmazott stratégia az, hogy `int`, `uint`, `long` vagy `ulong` típusokat használjunk szükség esetén és csak akkor alkalmazzuk a `byte`, `sbyte`, `short` és `ushort` típusokat, ha egyértelmű és jelentős előnye van.
::::


### Bináris és hexadecimális literálok

Eddig az egész szám literálok mind 10-es alapúak voltak, azaz a normális tízes számrendszerben, amit az emberek általában használnak. Azonban a programozási világban néha könnyebb lehet a számot bináris (__2-es számrendszer__) vagy hexadecimális (__16-os számrendszer__) alapon megadni, ahol a hexadecimális számok 0-tól 9-ig terjednek, majd a betűk A-tól F-ig.

Egy bináris literál létrehozásához kezdd a számot a 0b-vel. Például: 

```csharp
int thirteen = 0b00001101;
```

Egy hexadecimális literál létrehozásához kezdd a számot 0x-szel: 

```csharp
int theColorMagenta = 0xFF00FF;
```

Ez a példa mutatja, hol lehet hasznos ez. A színeket gyakran hat vagy nyolc hexadecimális számjeggyel reprezentálják.

## Szöveg: Karakterek és karakterláncok

Van még pár numerikus típus, de most hagyjuk egy kicsit azokat és nézzük meg, hogyan lehet reprezentálni karaktereket és hosszabb szövegeket.

A C#-ban a `char` típus egyetlen karaktert reprezentál, míg a `string` a tetszőleges hosszúságú szöveget ábrázolja.

A `char` típus szorosan kapcsolódik az egész típusokhoz. A karakterek mindegyikéhez egy számot rendelünk, amely egyedi bitmintát jelent. A `char` típus nem csak billentyűzeti karakterekre korlátozódik. A `char` típus két bájtot használ, hogy __65.536__ különböző karakter elférjen benne. Az egyes karakterekhez rendelt szám egy széles körben használt __Unicode__ nevű szabványnak felel meg. Ez a készlet magában foglalja az angol karaktereket és minden ember által olvasható nyelv karaktereit, valamint egy egész sor más véletlenszerű karaktert és emojit. A `char` literális a karaktert egyszeres idézőjelbe helyezve készül:

```csharp
char aLetter = 'a'; 
char baseball = '⚾';
```

_(A konzolablak azt a baseball karaktert nem tudja megjeleníteni.)_

Ha ismerjük a szimbólum hexadecimális __Unicode__ számát és azt szeretnénk használni akkor leírhatjuk egy __\u__ után:

```csharp
char aLetter = '\u0061'; // An 'a'
```

A `string` típus számos karaktert egy sorozatba gyűjt, hogy lehetővé tegye a tetszőleges szöveg reprezentálását. A `string` szó a matematika világából származik, ahol egy `string` egy szimbólumok sorozata, amelyeket egy meghatározott halmazból választanak ki, egymás után, tetszőleges hosszúságban. Ez egy olyan kifejezés, amit a programozási világ ellopott a matematika világából és a legtöbb programozási nyelv ezt az elképzelést `string`-nek nevezi.

A `string` literális úgy készül, hogy a kívánt szöveget dupla idézőjelbe helyezzük:

```csharp
string message = "Hello, World!";
```

## Lebegőpontos típusok

Most visszatérünk a számok világához, hogy megvizsgáljuk azokat a típusokat, amelyek az egészen számokon kívül más számokat is képesek reprezentálni. Hogyan ábrázoljuk például a 1.21 gigawattot vagy a különleges π számot?

A C# három olyan típust tartalmaz, amelyeket lebegőpontos adattípusoknak nevezünk. Ezek a matematikusok által valós számoknak nevezett típusok, amelyek magukban foglalják az egészeket és az olyan számokat, amelyek tizedes vagy tört részt tartalmaznak. Habár nem tudnánk 3.1415926-ot egy egész számként reprezentálni (_3 a legjobb, amit tehetnénk_), lebegőpontos számként már igen.

A lebegőpontos típusok esetében néhány bit tárolja a jelentős számjegyeket, befolyásolva a pontosságot, míg más bit-ek meghatározzák, hogy mennyire nagy vagy kicsi, befolyásolva az ábrázolt nagyságrendet. 

Háromféle lebegőpontos szám típus létezik: `float`, `double` és `decimal`. A `float` típus __4 bájtot__ használ, míg a `double` ennek kétszeresét (ezért a `double` név) __8 bájt__. A `decimal` típus __16 bájtot__ használ. Míg a `float` és `double` a számítástechnika világában elfogadott konvenciókat követik, beleértve magát a számítógép áramkörét is, a `decimal` nem. Ez azt jelenti, hogy a `float` és `double` gyorsabbak. Azonban a `decimal` az előjeles számjegyek tárolására használja a legtöbb bitjét és a legpontosabb lebegőpontos típus. Ha olyan feladatot végzel, amely rendkívüli pontosságot igényel, még a sebesség rovására is, a `decimal` a jobb választás.

Ebben a táblázatban összefoglaltam a lebegőpontos típusokat (`float`, `double`, `decimal`) a tárolt bájtok, a tartomány, a pontosság számjegyekben, valamint a hardveres támogatás szempontjából.

| Type     | Bytes | Tartomány                                | Pontosság | Hardveres támogatás |
|----------|-------|--------------------------------------|---------------------|---------------------|
| `float`    | 4     | ±1.0 × 10<sup>-45</sup> – ±3.4 × 10<sup>38</sup>    | 7                   | Yes                 |
| `double`   | 8     | ±5 × 10<sup>-324</sup> – ±1.7 × 10<sup>308</sup>    | 15-16               | Yes                 |
| `decimal`  | 16    | ±1.0 × 10<sup>-28</sup> – ±7.9 × 10<sup>28</sup>     | 28-29               | No                  |


Az ilyen típusú változók létrehozása ugyanolyan, mint bármely más típusé, de érdekesebbé válik, amikor `float`, `double` és `decimal` literálokat hozunk létre:

```csharp
double number1 = 3.5623;
float number2 = 3.5623f;
decimal number3 = 3.5623m;
```

Ha egy szám literális tartalmaz egy tizedespontot, akkor az egy `double` literális lesz, nem pedig egész literális. Az végéhez `f` vagy `F` hozzáfűzése egy `float` literállá teszi. Az `m` vagy `M` hozzáfűzése pedig decimális literálissá alakítja azt.

Minden három típus nagyobb tartományt képes reprezentálni, mint bármely egész típus, így ha egy egész literált használsz, a fordító automatikusan átkonvertálja azt.


## A bool típus

Az utolsó típus, amelyet itt tárgyalunk az a `bool` típus. A `bool` típus furcsának tűnhet, ha új vagy a programozásban, de hamarosan látni fogjuk az értékét. A `bool` típus a __Boole-algebráról__ kapta a nevét, amelyet _George Boole_, a tervezője után neveztek el. A `bool` típus igazságértékeket reprezentál. Ezeket a döntéshozatalban használjuk és két lehetséges értéke van: __true__ és __false__. Mindkettő `bool` literál, amit beleírhatsz a kódodba:

```csharp
bool itWorked = true;
itWorked = false;
```

Néhány nyelv a `bool`-t nem kezelik másként, mint fantáziadús `int`-ként, ahol a __false__ a __0__ szám, a __true__ pedig bármi más. A C# viszont elkülöníti az `int`-et a `bool`-tól, mert a kettő összekeverése sok általános hibakategóriához vezet.

Egy `bool` elméletileg csak egyetlen bitet használhatna, de ehelyett egy teljes bájtot használ.

## Típuskövetkeztetés

Minden változónak, értéknek és kifejezésnek van egy meghatározott ismert típusa. A változók deklarálásakor nagyon pontosan megadtuk az egyes változók típusát. A fordító azonban nagyon okos - képes átnézni a kódot és a körülötte lévő jelekből és nyomokból kitalálni (de inkább __kikövetkeztetni__), hogy az milyen típusú. Ezt a funkciót típuskövetkeztetésnek nevezzük. Ez a fordító Sherlock Holmes-ja.

A típuskövetkeztetést számos nyelvi jellemzőre használják, de az egyik legjelentősebb az, hogy a fordító képes következtetni egy változó típusára a kód alapján, amellyel inicializálva van. Nem kell mindig magunknak kiírni egy változó típusát. Használhatjuk helyette a `var` kulcsszót:

```csharp
var message = "Hello, World!";
```

A fordító képes észrevenni, hogy a `"Hello, World!"` egy karakterlánc és ezért a `message` változónak is karakterláncnak kell lennie ahhoz, hogy ez a kód működjön. A `var` használatával a fordítónak azt mondjuk, "_Ez az, amit vársz. Tudom, hogy meg tudod oldani. Nem foglak untatni azzal, hogy magam írom le._"

Ez csak akkor működik, ha a változót ugyanazon a soron inicializáljuk, ahol deklaráljuk. Ellenkező esetben nincs elegendő információ a fordító számára ahhoz, hogy következtessen a típusára. Ez nem fog működni:

```csharp
var x; // DOES NOT COMPILE!
```

Itt nincsenek utalások, amelyek megkönnyítenék a típuskövetkeztetést, így a típuskövetkeztetés sikertelen. Konkrét, elnevezett típusok használatára kell visszatérnünk.

A __Visual Studio__-ban könnyen láthatjuk, hogy a fordító milyen típusra következtetett, ha az egeret a `var` kulcsszó fölé visszük, amíg meg nem jelenik az eszköztár, amely megmutatja a következtetett típust.

Sok programozó előszeretettel használja a `var` kulcsszót mindenhol, ahol csak lehetséges. Gyakran rövidebb és tisztább, különösen akkor, amikor hosszabb nevű típusokkal kezdünk dolgozni.

Azonban két potenciális problémát is figyelembe kell venni a `var` használatakor. Az első az, hogy néha a számítógép rossz típust következtet. Ezek a hibák néha alig észrevehetőek. A második probléma az, hogy a számítógép gyorsabban következtet egy változó típusát, mint egy ember. Tekintsük meg ezt a kódot:

```csharp
var input = Console.ReadLine();
```

A számítógép képes következtetni, hogy az `input` egy karakterlánc, mivel tudja, hogy a `ReadLine` karakterláncokat ad vissza. Az ilyen információk kinyerése sokkal nehezebb számunkra.

Egy `var`-ral definiált változó továbbra is egy konkrét típust használ. Ez nem egy rejtélyes típus, nem változtatható típus és nem egy mindenre jó típus. Továbbra is egy meghatározott típussal rendelkezik, csak épp nem írtuk le explicit módon. Ez a példa nem fog működni:

```csharp
var something = "Hello";
something = 3; // ERROR. Cannot store an int in a string-typed variable.
```

## A Convert osztály és a parse metódusok

Mivel 14 típus áll rendelkezésünkre, néha szükségünk lesz a típusok közötti konverzióra. Ennek legegyszerűbb módja a `Convert` osztály. A `Convert` osztály olyan, mint a `Console` osztály - egy olyan dolog a rendszerben, amely egy sor feladatot vagy képességet biztosít, amelyet el tud végezni. A `Convert` osztály ezen különböző beépített típusok közötti konvertálásra szolgál. A következő példával illusztrálva:

```csharp
Console.Write("What is your favorite number?");
string favoriteNumberText = Console.ReadLine();
int favoriteNumber = Convert.ToInt32(favoriteNumberText);
Console.Write(favoriteNumber + " is a great number!");
```

Láthatod, hogy a `Convert.ToInt32` metódusa szövegként vár bemenetet és egy egész számot ad eredményként, az átalakítás folyamatában a szöveget konvertálva. A `Convert` osztálynak vannak `To...` metódusai, amelyek lehetővé teszik a beépített típusok közötti konvertálást:

| Method Name | Target Type | Method Name | Target Type |
|-------------|-------------|-------------|-------------|
| ToByte      | byte        | ToSByte     | sbyte       |
| ToInt16     | short       | ToUInt16    | ushort      |
| ToInt32     | int         | ToUInt32    | uint        |
| ToInt64     | long        | ToUInt64    | ulong       |
| ToChar      | char        | ToString    | string      |
| ToSingle    | float       | ToDouble    | double      |
| ToDecimal   | decimal     | ToBoolean   | bool        |


A fenti nevek többsége egyértelmű, bár néhányat érdemes megmagyarázni mivel a nevek nem tökéletesek...

A `short`, `int` és `long` típusok az `Int` szót és a hozzátartozó bitméretet használják. Például a `short` típus 16 bitet (_2 bájt_) használ, így a `ToInt16` átalakít át egy `short` típussá. Az `ushort`, `uint` és `ulong` ugyanezt csinálja, csak az `UInt` szóval.

A másik meglepetés az, hogy egy lebegőpontos számra való átalakítás `ToSingle`, nem pedig `ToFloat`. 

A konzolablakból származó összes `input` szöveg típusú. Sok programnak szüksége lesz arra, hogy átalakítsa a felhasználó szövegét egy másik típussá annak érdekében, hogy kásőbb azzal dolgozhasson. A szöveg elemzésének, felbontásának és más adattípussá történő átalakításának folyamata parszolásnak nevezhető. A `Convert` osztály nagyszerű kiindulópont a szöveg parszolásához, bár idővel további parszolási eszközöket is tanulunk majd.

### Parse (parszolási) metódusok

Néhány C# programozó kedveli a `Convert` osztály alternatíváját. Ezeknek a típusoknak sokszor van egy `Parse` nevű metódusa, amely segítségével egy szöveget tudunk átalakítanak. Például:

```csharp
int number = int.Parse("9000");
```

Néhányan ezt a stílust részesítik előnyben a többnyire egyenértékű `Convert.ToInt32`-hez képest.



![Az itt látható diagram összefoglalja a C# típusrendszert. Ez tartalmazza mindazt, amit nagyjából tárgyaltunk és még jó néhány más típust és kategóriát is, amelyeket a jövőben fogunk tárgyalni.](/assets/images/vasvari/csharp/typeofcsharp.png)