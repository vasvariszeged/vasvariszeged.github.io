---
icon: fa-solid fa-2
---

# Döntések meghozatala

:::note Röviden
- Az `if` utasítás lehetővé teszi, hogy bizonyos kódok egy feltétel alapján fussanak (vagy ne fussanak).
- Az `else` utasítás meghatározza a végrehajtandó kódot, amennyiben a feltétel nem igaz.
- Az `if` és `else` utasítások kombinálásával több kód ág közül választhatunk.
- A relációs operátorok segítségével ellenőrizhető két elem közötti kapcsolat: `==`, `!=`, `<`, `>`, `<=` és `>=`.
- A `!` operátor megváltoztatja a `bool` kifejezés értékét.
- Több `bool`-kifejezést kombinálhatunk az `&&` (__and__) és a `||` (__or__) operátorokkal.
:::

Az összes korábbi programunk egymás után hajtott végre utasításokat, fentről lefelé. Most pedig megnézzük, hogy hogyan változtathassunk a végrehajtás menetén. Lehetőség nyílik a komplexebb kódolásra, nem csupán egymást követő utasításokról lesz szó. Megismerkedünk az `if` utasításokkal. Az `if` utasítás lehetővé teszi számunkra, hogy eldöntsük, mely részeket futassuk le a kódból.

## Az `if` utasítás

Tegyük fel, hogy egy betűjegyet kell meghatároznunk egy numerikus pontszám alapján. 

| Jegy | Pontszám tartomány   |
|------|----------------------|
| A    | 90 pont felett       |
| B    | 80-tól 89-ig         |
| C    | 70-től 79-ig         |
| D    | 60-tól 69-ig         |
| F    | Minden egyéb esetben |


Könnyen megérthető, hogy hogyan használhatjuk fel korábbi tudásunkat ebben a helyzetben. A pontszámot be kell olvasnunk és integer típusúvá kell konvertálnunk. Valószínűleg létre kell hoznunk egy változót a pontszám tárolásához és esetleg egy másikat a betűjegy tárolásához.

Azonban az, ami még hiányzik, az a választás és döntés lehetősége. Jelenleg nincsenek eszközeink annak eldöntésére, hogy szempontok alapján mit tegyünk viszont ezekre az eszközökre szükség van a probléma megoldásához. Az `if` utasítás az elsődleges eszköz ezen célok eléréséhez. Az alábbiakban találunk egy egyszerű példát:

```csharp
string input = Console.ReadLine();
int score = Convert.ToInt32(input);

if (score == 100)
    Console.WriteLine("A+! Perfect score!");
```

Ez a program másképp fut le attól függően, hogy milyen pontszámot gépelünk be. Ha __100__-at gépelnénk, akkor az `"A+! Perfect score!"` szöveget fogja megjeleníteni. Ellenkező esetben egyáltalán nem jelenít meg semmit.

Az `if` utasítás létrehozásához használjuk a __if__ kulcsszót, amit egy zárójellel körülvett kifejezés követ - _ennek a típusa `bool`_. A zárójelben szereplő kifejezést nevezzük az __if__ utasítás feltételének.

Most először találkozunk az `==` operátorral. Ez az operátor azt vizsgálja, hogy a két oldalán lévő dolgok megegyeznek-e. Igazat értékel ki, ha azok egyenlők és hamisat, ha nem. 

Tehát ez a kifejezés csak akkor lesz igaz, ha a felhasználó által begépelt pontszám megegyezik a __100__-zal. Az `if` utasítást követő utasítás csak akkor hajtódik végre, ha a feltétel igazra értékelődik ki.

:::warning Bár a fordító figyelmen kívül hagyja a szóközöket mindenesetre ne írd le így:

```csharp
if (score == 100)
Console.WriteLine("A+! Perfect score!");
```

:::

### Blokk utasítások

Az `if` utasítás lehetőséget ad arra, hogy feltételes körülmények között egyetlen utasítást hajtsunk végre. Azonban mi történik, ha ugyanezt szeretnénk elérni több utasítással?
Egy egyszerű megoldás lehet az, hogy mindegyik utasítás elé másolunk egy-egy `if` utasítást, de van egy hatékonyabb megoldás is. A C# programozási nyelvben létezik egy olyan fogalom, amit blokk utasításnak nevezünk. A blokk utasítás lehetővé teszi, hogy több utasítást egy csoportba zárjunk, majd ezt a csoportot bármilyen helyen felhasználjuk, ahol egyetlen utasítás is elfogadott lenne. A blokk utasítás a kapcsoszárójelek közötti utasításokat tartalmazza, ahogy az alábbi példában látható:

```csharp
{
    Console.WriteLine("A+!");
    Console.WriteLine("Perfect score!");
}
```

Ezáltal az `if` utasítás alkalmazható a blokk utasításokra úgy, mint egyetlen utasításra:

```csharp
if (score == 100)
{
    Console.WriteLine("A+!");
    Console.WriteLine("Perfect score!");
}
```

A blokk utasítások használata az `if`-ekkel gyakran előfordul, sőt, néhány C# programozó preferálja a kapcsos zárójeleket mindig, még akkor is, ha csak egyetlen utasítást tartalmaznak. Ezt azért teszik, mert úgy érzik, hogy ez több struktúrát ad a kódnak, rendezettebben néz ki és segít elkerülni a hibákat. Fontos megjegyezni, hogy ha csak behúzzuk a kódot, de nem alkalmazunk blokk utasítást, akkor az `if`-be csak az első utasítás kerül. Az alábbi kódrészlet nem működik úgy, ahogy azt elvárnánk:

:::danger "A Perfect score!" szöveg minden alkalommal lefut.

```csharp
if (score == 100)
    Console.WriteLine("A+!");
    Console.WriteLine("Perfect score!");
```

Ha ezt a hibát folyamatosan elkövetjük, érdemes mindig blokk utasításokat használnunk, hogy megelőzzük ezt a típusú hibát már a kezdetektől fogva.
:::

### Blokkok, változók és láthatóság

Az egyik dolog, ami meglepő lehet a blokk utasításokkal kapcsolatban, az az, hogy saját változóik vannak. A blokkon belül létrehozott változókat nem lehet a blokkon kívül használni. Például, ez a kód nem fordul le:

```csharp
string input = Console.ReadLine();
int score = Convert.ToInt32(input);
if (score == 100)
{
    char grade = 'A';
}
Console.WriteLine(grade); // COMPILER ERROR.
```

A változó `grade` már nem létezik, amint elérjük a kódban az utolsó sorban található `Console.WriteLine` részt. Ha ezt a helyzetet egy kódtérképen ábrázolnánk, így nézne ki:

![](/assets/images/vasvari/csharp/if1.png)

A `main` metódusban közvetlenül megtalálhatóak az `input` és `score` változók, míg a `grade` változó csak az `if` blokkon belül létezik. A `grade` változót kizárólag az `if` blokkon belül használhatjuk. Viszont az `if` blokkon belül elérhetjük és használhatjuk az `input` és `score` változókat is. 

Azt a kódrészt, ahol egy azonosító vagy név használható, hatókörnek nevezzük. Mind az `input`, mind a `score` rendelkezik olyan hatókörrel, amely a `main` metódus egészére kiterjed. Ez a két változó rendelkezik metódus hatókörrel. A `grade` hatóköre azonban csak a blokkot fedi le. Ez a változó a blokk hatókörével rendelkezik.

Ha a `grade`-t a metóduson kívül akarjuk használni, akkor a blokkon kívül kell deklarálnunk:

```csharp
string input = Console.ReadLine();
int score = Convert.ToInt32(input);
char grade = '?';

if (score == 100)
{
    grade = 'A';
}
Console.WriteLine(grade);
```

Ez a változás így néz ki:

![](/assets/images/vasvari/csharp/if2.png)

## Az `else` utasítás

Az `if` mellé az `else` utasítás szolgál párjául. Az `else` lehetőséget biztosít arra, hogy meghatározzunk egy alternatív utasítást, amelyet akkor hajt végre, ha az `if` utasítás feltétele nem teljesül:

```csharp
string input = Console.ReadLine();
int score = Convert.ToInt32(input);
if (score == 100)
     Console.WriteLine("A+! Perfect score!");
else
    Console.WriteLine("Try again.");
```

Amikor a fenti kód lefut és az eredmény éppen __100__, akkor az `if` utasítást követő rész hajtódik végre. Ha az eredmény bármilyen más értéket vesz fel, akkor az `else` utasítást követő rész fut le.

Ezenkívül lehetőség van arra, hogy az `else` utasítást egy blokkutasításba ágyazzuk:

```csharp
char letterGrade;

if (score == 100)
{
    Console.WriteLine("A+! Perfect score!");
    letterGrade = 'A';
}
else 
{
    Console.WriteLine("Try again.");
    letterGrade = 'B';
}
```

## Az `else if` utasítás

Az `if` és `else` utasítások lehetővé teszik számunkra, hogy két lehetőség közül válasszunk. Az `else if` kombináció harmadik és negyedik lehetőséget is létrehozhat.

```csharp
if (score == 100)
    Console.WriteLine("A+! Perfect score!");
else if (score == 99)
    Console.WriteLine("Missed it by THAT much.");
else if (score == 42)
    Console.WriteLine("Oh no, not again.");
else
    Console.WriteLine("Try again.");
```

A fenti kód a négy útvonal közül csak egyet fog lefuttatni. A kiválasztott útvonal az lesz, amelynek feltétele igaz, vagy ha egyik sem igaz, akkor az utolsó `else` alatti utasítás fut le.

Az `if`-hez és az `else`-hez hasonlóan az `else if` is tartalmazhat több utasítást. Az utolsó `else` utasítás opcionális.

## Relációs operátorok: `==`, `!=`, `<`, `>`, `<=`, `>=`

Az __egyenlőség operátor__ (`==`) hasznos lehet, amikor ellenőrizzük, hogy két dolog pontosan azonos-e, de nem az egyetlen módja a feltételek meghatározásának. Csak egy a sok relációs operátor közül, amelyek két érték között különféle kapcsolatokat vizsgálnak. Az __egyenlőtlenség operátor__ (`!=`) az ellentéte, igazat ad, ha a két dolog nem egyenlő és hamisat, ha azok azonosak. 

Tehát a `3 != 2` __igaz__, míg a `3 != 3` __hamis__. 

Például:

```csharp
if (score != 0)
    Console.WriteLine("It could have been worse!");
```

Vannak továbbá a __nagyobb mint__ és __kisebb mint__ operátorok, `>` és `<`. A nagyobb mint operátor (`>`) igaz, ha az érték bal oldalon nagyobb, mint a jobb oldalon lévő, míg a kisebb mint operátor (`<`) igaz, ha az érték bal oldalon kisebb, mint a jobb oldalon lévő. Ez a két operátor elegendő egy elfogadható megoldás írásához a jegy problémára:

```csharp
string input = Console.ReadLine();
int score = Convert.ToInt32(input);

if (score > 90)
    Console.WriteLine("A");
else if (score > 80)
    Console.WriteLine("B");
else if (score > 70)
    Console.WriteLine("C");
else if (score > 60)
    Console.WriteLine("D");
else
    Console.WriteLine("F");
```


Van egy kis probléma a fent említett kóddal. Eredeti leírásunkban a __90__-nek __A__-nak kellene lennie. Azonban ebben a kódban a __90__-es pontszám nem az első blokkot hajtja végre, hanem a másodikat. Ennek az az oka, hogy a __90__ nem nagyobb, mint a __90__. Lehetőségünk lenne az értékeket egyel lefelé módosítani és az állapotot úgy megfogalmazni, hogy `score > 89`, de ez kevésbé tűnhet természetesnek.

Ezen a problémán könnyen segíthetünk a __nagyobb vagy egyenlő__ operátorral (`>=`) és annak párjával, a __kisebb vagy egyenlő__ operátorral (`<=`). 

- A `>=` operátor igaz, ha a bal oldalon lévő érték nagyobb vagy egyenlő a jobb oldalon lévőnél. 
- A `<=` operátor igaz, ha a bal oldalon lévő érték kisebb vagy egyenlő a jobb oldalon lévőnél. 

Ezek az operátorok lehetővé teszik egy természetesebb megoldás írását a jegyekkel kapcsolatos problémánkra:

```csharp
if (score >= 90)
    Console.WriteLine("A");
else if (score >= 80)
    Console.WriteLine("B");
else if (score >= 70)
    Console.WriteLine("C");
else if (score >= 60)
    Console.WriteLine("D");
else
    Console.WriteLine("F");
```

Ezek a szimbólumok hasonlítanak a matematikában használt __≥__ és __≤__ szimbólumokra, de ezek a szimbólumok nincsenek a billentyűzeten, így a C# nyelv valami billentyűzetbarátabbat használ.

## `bool` használata döntéshozatalnál

Az `if` és az `else if` bármilyen `bool` kifejezést használhat. Ezek az operátorok csak egyszerű `bool` kifejezések.

Az alábbi kód egy __if/else__ használatával értéket rendel egy `bool` változóhoz. Ezt a változót később egy másik `if` állítás feltételében használjuk.

```csharp
int score = 45;
int pointsNeededToPass = 100;
bool levelComplete;

if (score >= pointsNeededToPass)
    levelComplete = true;
else
    levelComplete = false;

if (levelComplete)
    Console.WriteLine("You've beaten the level!");
```

Egy kis gyakorlás után felismerhetjük, hogy rövidíthetnénk a fenti kódot. A `levelComplete` mindig ugyanazt az értéket veszi fel, mint a `score >= pointsNeededToPass` feltétel. Tehát a kódot így is írhatnánk:

```csharp
bool levelComplete = score >= pointsNeededToPass;

if (levelComplete)
    Console.WriteLine("You've beaten the level!");
```

A fenti kód azt is szemlélteti, hogy a relációs operátorokat, például __>=__, bármilyen kifejezésben használhatod, nem csak az `if` utasításokban.

## Logikai operátorok

A logikai operátorok lehetővé teszik, hogy logikai kifejezéseket kombináljunk. Az első ilyen az __not__ operátor (`!`). Ez az operátor egyetlen dologra vonatkozik és a Boole-féle ellentétet állítja elő: a __true__ falsera változik és a __false__ igazzá válik:

```csharp
bool levelComplete = score >= pointsNeededToPass;

if (!levelComplete)
    Console.WriteLine("This level is not over yet!");
```


A másik kettő egy párt alkot: 

- az __and__ operátor (`&&`) 
- és a __or__ operátor (`||`). 


A `&&` és `||` logikai operátorok lehetővé teszik két logikai kifejezés összekapcsolását, létrehozva egyetlen összetett kifejezést. Az `&&` használatakor a kifejezés csak akkor lesz igaz, ha _mindkét_ részkifejezés igaz. Az `||` esetében a kifejezés igaz lesz, ha _bármelyik_ részkifejezés igaz (illetve ha mindkét kifejezés igaz).

Az alábbi kódrészlet egy játékesetet szimulál, ahol a játékos akkor veszít, ha mindkét értéke (_pajzs-páncél_) eléri a 0 értéket:

```csharp
int shields = 50;
int armor = 20;
if (shields <= 0 && armor <= 0)
    Console.WriteLine("You're dead.");
```
Az `&&` operátor esetén az egész kifejezés csak akkor lesz igaz, ha mindkét feltétel is igaz.

Az `||` operátor hasonló, de ha bármelyik részkifejezés igaz, az egész kifejezés igaz:

```csharp
int shields = 50;
int armor = 20;

if (shields > 0 || armor > 0)
    Console.WriteLine("You're still alive! Keep going!");
```

:::info Lusta kiértékelés

Mindkét esetben a számítógép lusta kiértékelést alkalmaz. Ez azt jelenti, hogy ha már ismeri az egész kifejezés válaszát az első rész kiértékelése után, akkor nem hajlandó foglalkozni a második rész kiértékelésével. Eezt a szabályt arra használjuk, hogy a költségesebb kifejezéseket a jobb oldalra helyezzükk, lehetővé téve annak kiértékelését, csak akkor amikor szükség van rá.

:::

Ez lehetővé teszik számunkra, hogy új kifejezéseket hozzunk létre meglévőkből. Ha egyetlen összetett kifejezés túl bonyolultá válik, szétszedhetjük több darabra több soron keresztül a kód tisztaságának javítása érdekében:

```csharp
int shields = 50;
int armor = 20;

bool stillHasShields = shields > 0;
bool stillHasArmor = armor > 0;

if (stillHasShields || stillHasArmor)
    Console.WriteLine("You're still alive! Keep going!");
```

## `if` utasítások egymásba ágyazása

Elhelyezhetünk egy `if` utasítást egy másik `if` utasításban. Ezt beágyazásnak nevezzük, vagyis mondhatnánk ugyis, hogy ez az `if` utasítás be van ágyazva ebbe a másikba.

```csharp
if (shields <= 0)
{
    if (armor <= 0)
        Console.WriteLine("Shields and armor at zero! You're dead!");
    else
        Console.WriteLine("Shields are gone, but armor is keeping you alive!"); 
}
else 
{
    Console.WriteLine("You still have shields left. The world is safe."); 
}
```

Ha egyszer be lehet ágyazni `if` utasításokat, akkor meg lehet csinálni többször is. Egy `if` utasítás egy másik `if` utasításban, egy másik `if` utasításában. Időnként olyan mélyen ágyazott `if` utasításokkal találkozhatunk (_vagy írhatunk_), amelyek sok szintet tartalmaznak. Ezek nehezen olvashatóvá válhatnak, ezért javaslom a `Bool` változók használatát.



## Feltételes operátor

A C# rendelkezik egy további operátorral, ami hasonlóan működik, mint egy `if` utasítás. Ezt a feltételes operátornak nevezik - vagy néha __ternáris__ operátornak, mert ez az egyetlen olyan operátor a C#-ban, amely három bemenetet fogad.

A feltételes operátor három különböző kifejezéssel dolgozik. 

__ellenőrizendő feltétel__ `?` _kifejezés, ha igaz_ `:` _kifejezés, ha hamis_

Először van egy ellenőrizendő feltétel - ez egy logikai kifejezés, amit követ két másik kifejezés. Az elsőt értékeli ki, ha a feltétel igaz, a másodikat pedig, ha a feltétel hamis. 

Egy egyszerű példa így nézhet ki:

```csharp
string textToDisplay = score > 70 ? "You passed!" : "You failed.";
Console.WriteLine(textToDisplay);
```

Három kifejezés kombinálása bonyolult kódot eredményezhet, ezért törekedjünk arra, hogy a kódunk érthető maradjon.



















  