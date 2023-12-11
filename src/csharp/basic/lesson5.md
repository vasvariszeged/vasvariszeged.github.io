---
icon: fa-solid fa-5
---

# Változók


:::note Röviden
- Egy változó egy elnevezett memórialokáció, amelyben adatokat lehet tárolni.
- A változóknak van típusuk, nevük és értékük (_tartalmuk_).
- A változókat így deklaráljuk (_létrehozzuk_): `int szam;`
- Az értékek hozzárendelése a változókhoz a hozzárendelési operátorral történik: `szam = 3;`
- A változó nevének használatával lemásoljuk az értékét.
- Adjunk a változóinknak jó neveket.
:::

## Mi az a változó?

A szoftverfejlesztés egyik lényeges része az adatok tárolása ideiglenes memóriában, hogy később használhassuk. Például tárolhatjuk egy játékos jelenlegi pontszámát vagy emlékezhetünk egy menüválasztásra elég ideig ahhoz, hogy reagáljunk rá. Amikor a memóriáról és változókról beszélünk, akkor a RAM-ról beszélünk, amely megmarad, amíg a program fut, de törlődik, amikor a program bezáródik, vagy a számítógép újraindul.

A számítógép teljes memóriája hatalmas. Még az én régi okostelefonomnak is 3 gigabájt memóriája van - elég nagy ahhoz, hogy 750 millió különböző számot tároljon. Minden memórialokációnak egyedi numerikus memóriacíme van, amelyet fel lehet használni egy adott hely tartalmának elérésére. De nem praktikus megjegyezni, mi található a _#45387_ helyén. Az adatok jönnek és mennek a programban. Lehet, hogy csak egy pillanatra van szükségünk valamire, vagy az egész idő alatt, amíg a program fut. Ráadásul nem minden adat azonos méretű. A `"Hello, World!"` szöveg több helyet foglal el, mint egyetlen szám. Valami egyszerűbbre van szükségünk, mint a nyers memóriacímek.

Ezt a problémát egy változó oldja meg számunkra. A változók olyan elnevezett helyek, ahol az adatokat a memóriában tároljuk. Minden változónak három része van:
- a neve, 
- a típusa
- és a tartalma vagy értéke. 

A változó típusa azért fontos, mert ennek segítségével tudjuk meg, hogy hány bájtot kell fenntartani számára a memóriában, és a fordítóprogram is így tudja biztosítani, hogy a változó tartalmát helyesen használjuk.
A változó használatának első lépése a __deklarálása__. A változó __deklarálása__ lehetővé teszi a számítógép számára, hogy a megfelelő méretű helyet foglaljon számára a memóriában.

A változó __deklarálása__ után értékeket vagy tartalmakat rendelhetünk a változóhoz. Amikor először rendel értéket egy változóhoz, azt __inicializálásnak__ nevezzük. Egy változó __inicializálása__ előtt nem lehet tudni, hogy milyen bitek és bájtok lehetnek az adott memóriahelyen, ezért az inicializálás biztosítja, hogy csak érvényes adatokkal dolgozzunk.

Bár egy változót csak egyszer __deklarálhatunk__, a program futása során idővel különböző értékeket rendelhetünk hozzá. A játékos pontszámának változója frissülhet, ahogy a játékos pontokat gyűjt. A mögöttes memóriahely ugyanaz marad, de a tartalma idővel új értékekkel változik.
Amit egy változóval tehetünk, hogy lekérdezzük annak aktuális értékét. Az adatok elmentésének célja, hogy később visszatérhessünk hozzájuk. Amíg egy változót __inicializáltunk__, addig bármikor lekérdezhetjük az aktuális tartalmát, amikor csak szükségünk van rá.


## Változók létrehozása és használata C# nyelven

A következő kód bemutat három alapvető változóhoz kapcsolódó tevékenységet:

```csharp
String username; // Declaring a variable
username = Console.ReadLine(); // Assigning a value to a variable 
Console.WriteLine("Hi " + username); // Retrieving its current value
```

A változót a típus és a név együttes felsorolásával deklaráljuk (`string username;`).

Egy változóhoz úgy rendelünk értéket, hogy a változó nevét az egyenlőségjel bal oldalára, az új értéket pedig a jobb oldalára tesszük. Ez az új érték lehet egy kifejezés, amelyet a számítógép kiértékel, hogy meghatározza az értékét(`username = Console.ReadLine();`).

A változó aktuális értékének lekérdezése úgy történik, hogy egyszerűen a változó nevét használjuk egy kifejezésben (`"Hi " + username`). Ebben az esetben a programunk a felhasználónév aktuális értékének lekérdezésével indul. Ezután ezt az értéket használja a teljes `"Hi [username]"` üzenet előállításához. A kombinált üzenet az, amit a `WriteLine` metódusnak adunk meg.

A változót bárhol deklarálhatjuk a kódban. Mégis, mivel a változókat a használatuk előtt deklarálni kell, a változódeklarációk általában a kód tetejére kerülnek. Minden változót csak egyszer lehet deklarálni. A változókhoz olyan gyakran rendelhetünk új értékeket vagy olyan gyakran kérhetünk le egy változó aktuális értékét, amilyen gyakran csak akarjuk:

```csharp
string username;
username = Console.ReadLine();
Console.WriteLine("Hi " + username);

username = Console.ReadLine();
Console.WriteLine("Hi " + username);
```

Tekintettel arra, hogy a fenti `username` két különböző felhasználónév tárolására használjuk, ésszerű a változó újrafelhasználása. Másrészt, ha a második érték valami mást képvisel - mondjuk egy kedvenc színt -, akkor általában jobb egy második változót létrehozni:


```csharp
string username;
username = Console.ReadLine();
Console.WriteLine("Hi " + username);

string favoriteColor;
favoriteColor = Console.ReadLine();
Console.WriteLine("Hi " + favoriteColor);
```

:::info Ne feledje, hogy a változók neveit az emberek használják, nem a számítógépek. Olyan neveket válasszunk, amelyek segítenek a programozóknak megérteni a szándékunkat. A számítógépet ez nem érdekli.
:::

:::tip Egy második változó deklarálása technikailag több helyet foglal a memóriában, de néhány extra bájt elköltése (amikor milliárdok vannak), hogy a kód érthetőbbé váljon, egyértelmű nyereség.
:::


## Integers (egész számok)

A C# programokban minden változóhoz, értékhez és kifejezéshez tartozik egy típus. Eddig csak a `string` (_szöveg_) típussal találkoztunk. De sok más típus is létezik, sőt később saját típusokat is definiálhatunk. Most pedig nézzünk meg egy második típust: az `int`-et, amely az egész számot jelöli.

Az egész szám egy egész szám (_nincs tört vagy tizedes szám_), de vagy pozitív, vagy negatív, vagy nulla. Tekintettel a számítógép matematikai képességére, nem meglepő, hogy a számok tárolása gyakori, és sok változó használja az `int` típust. Például ezek mindegyike jól reprezentálható `int`-ként: 

- egy játékos pontszáma,
- a képernyő pixelhelyei, 
- egy fájl mérete és egy ország lakossága.


Egy `int`-típusú változó deklarálása olyan egyszerű, mint a `string` típus. Az `int` típus használata a deklaráláskor:

```csharp
int score;
```

Tehát a __score__ változó `int` értékeket tartalmaz.

:::warning Ez a típusfogalom fontos, ezért ismét elmondom:
__A típusok számítanak a C#-ban__. Minden értéknek, változónak és kifejezésnek van egy adott típusa, és a fordító gondoskodik arról, hogy ne keverjük össze őket. 
:::


A következő nem fordítható le, mert a típusok nem egyeznek:

```csharp
score = "Generic User"; // DOESN'T COMPILE!
```

A `"Generic User"` szöveg egy karakterlánc, de a __score__ típusa `int`. Ez egy kifinomultabb különbség:

```csharp
score = "0"; // DOESN'T COMPILE!
```

Ez legalább egy számnak tűnik de így idézőjelek közé zárva a `"0"` egy szám karakterlánckénti ábrázolása, nem pedig egy számé. A számok karakterként is használhatók, ami idézőjelben van mindig karakterlánc lesz. Ahhoz, hogy `int` legyen a számot idézőjelek nélkül kell, hogy leírjuk:

```csharp
score = 0; // 0 is an int literal.
```

Miután ez a kódsor lefutott, a __score__ változó - egy memóriahely, amely a __score__ nevű `int`-ek tárolására van fenntartva - értéke `0` lesz.

A következőkben láthatod, hogy a `score`-hoz különböző értékeket, valamint negatív számokat is rendelhetünk:

```csharp
score = 4;
score = 11;
score = -1564;
```


## A változó olvasása nem változtatja meg azt

Amikor egy változó tartalmát olvasod, a változó tartalma lemásolódik. Ezt szemléltetésképpen:

```csharp{7}
int a; 
int b;

a = 5; 
b = 2;

b = a; 
a = -3;
```


Az első két sorban `a` és `b` deklarálva van, és kap egy kezdeti értéket (__5__, illetve __2__), ami valahogy így néz ki:

![](/assets/images/vasvari/csharp/variable1.png)

A hetedik sorban `b = a;` az `a` tartalma átmásolódika és megismétlődik `b`-ben.

![](/assets/images/vasvari/csharp/variable2.png)

A változók `a` és `b` különbözőek, mindegyik saját másolattal rendelkezik az adatairól. A `b = a` nem jelenti azt, hogy mostantól `a` és `b` mindig egyenlőek lesznek! Az `=` jel az __értékadást jelenti__, nem az egyenlőséget. Amint a végső sor lefut, az `a` változó értékét `-3`-ra változtatjuk, de `b` megtartja az eredeti `5`-ös értékét. Ha a program végén megjelenítenénk `a` és `b` értékeit, látnánk, hogy az `a` értéke `-3`, `b` pedig `5`.

## Trükkök változókkal

A változók deklarálása és használata annyira gyakori, hogy van néhány hasznos rövidítés, amit érdemes megtanulni, mielőtt továbblépnénk.

Az első az, hogy egy változót deklarálhatunk és inicializálhatunk ugyanabban a sorban, például így:

```csharp
int x = 0;
```

Másodszor, egyszerre több változót is deklarálhatunk, ha azok azonos típusúak:

```csharp
int a, b, c;
```

És végül, bár a típusok számítanak, a `Console.WriteLine` karakterláncokat és egész számokat is megjeleníthet:

```csharp
Console.WriteLine(42);
```

A következő részben még több változótípust fogunk megismerni. A `Console.WriteLine` ezek mindegyikét képes megjeleníteni -  úgy van felépítve, hogy bármilyen típussal működjön.


## Változó nevek

- A változók nevének megadására a nyelvnek van néhány szabálya:

    1. A változók nevének betűvel vagy aláhúzással (`_`) kell kezdődnie. Például: `taco` és `_taco` érvényes változónevek, de az `1taco` és `*taco` nem.
    2. A kezdet után numerikus számjegyeket (__0-tól__ __9-ig__) is használhatunk.
    3. A legtöbb szimbólum és szóköz karakter tilos, mert ezek miatt a fordító nem tudja, hogy hol kezdődik egy változó neve és hol végződik a többi kód. (Például a `taco-poptart` nem megengedett, mert a `-` karaktert kivonásra használják. A fordító azt feltételezi, hogy ez egy `taco` nevű valamit próbál kivonni egy `poptart` nevű dologból).
    4. Egy változót nem nevezhetünk el úgy, mint egy kulcsszót. Például nem nevezhetünk egy változót `int` vagy `string` névvel, mivel ezek a nyelvben foglalt, speciális kulcsszavak.

- A változók elnevezésére a következő irányelveket ajánlom:

    1. Pontosan írjuk le, hogy mit tartalmaz a változó. Ha a változó egy játékos pontszámát tartalmazza, a `score` vagy a `playerScore` elfogadható. A `number` és az `x` azonban nem elég leíró.
    2. Ne rövidítsük vagy távolítsunk el betűket. Több időt töltünk a kód olvasásával, mint a megírásával.
    3. Ne bosszankodjunk a hosszú nevek miatt. Jobb, ha leíró nevet használunk, mintha karaktereket spórolnánk.
    4. Tegyük egyértelművé a többszavas nevek közötti határokat. A `playerScore` név könnyebben olvasható, mint a `playerscore`. A C# programozók körében két konvenció a __camelCase__ (vagy _lowerCamelCase_) és a __PascalCase__ (vagy _UpperCamelCase_), amelyeket a nevek írásmódját szemlélteti. Az elsőben az első szó kivételével minden szó nagybetűvel kezdődik. A másodikban minden szó nagybetűvel kezdődik. A szó közepén lévő nagy nagybetű miatt úgy néz ki, mint egy tevepúp, ezért is kapta ezt a nevet. A legtöbb C# programozó a változókra a __lowerCamelCase__, a többi dologra pedig a __UpperCamelCase__ esetet használja. Azt javaslom, hogy a kezdetek kezdetén maradjunk ennél a konvenciónál. A későbbiekben pedig majd Önökre bízom.

