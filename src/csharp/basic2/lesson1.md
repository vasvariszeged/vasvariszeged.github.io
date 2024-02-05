---
icon: fa-solid fa-1
---

# Konzol 2.0

:::note Röviden
- A `Console` osztállyal:
    - írhatunk egy sort (`Write`), 
    - várhatunk egyetlen billentyűleütésre (`ReadKey`), 
    - megváltoztathatjuk a színeket (`ForegroundColor`, `BackgroundColor`), 
    - törölhetjük az egész konzolablakot (`Clear`), 
    - megváltoztathatjuk az ablak címét (`Title`), 
    - és lejátszhatunk retro hangjelzéseket (`Beep`).

- Az `escape` karakterek a `\` karakterrel kezdődnek és azután mondják meg a számítógépnek, hogy a következő karaktert másképp értelmezze. A `\n` egy új sor, a `\t` egy tabulátor, `\"` egy idézőjel egy karakterláncban.
- A `@` karakterlánc előtt figyelmen kívül hagy minden lehetséges `escape` szekvenciát: `@"C:\Users\Me\File.txt"`.
- A `$` karakterlánc előtt azt jelenti, hogy a kapcsos zárójelek kódot tartalmaznak: `$"a:{a} sum:{a+b}"`.
:::

Elmélyítjük a konzollal kapcsolatos ismereteinket és megtanulunk néhány dolgot, amelyekkel könnyebbé tehetjük a szöveggel és a konzolablakkal való munkát. Bár a konzolablak nem olyan mutatós, mint egy __GUI__ vagy egy __weboldal__ de attól nem kell, hogy unalmas legyen.


## A Console osztály

A `Console` osztályt már az első __Hello World__ programunk óta használjuk, de itt az ideje, hogy mélyebbre ássunk benne, hogy lássuk, mire képes még. A `Console` számos metódussal rendelkezik és néhány saját változót is biztosít.

### Az `Write` metódus

A `Console.WriteLine` mellett egy másik, `Write` nevű metódus ugyanazt teszi, mint a `WriteLine`, csak nem ugrik a következő sorra, amikor befejeződik. Ennek sokféle felhasználási módja van, de az egyik, amit szeretek, az az, hogy a felhasználónak feltehetünk egy kérdést és hagyjuk, hogy ugyanabban a sorban válaszoljon:

```csharp
Console.Write("What is your name, human? ");
string userName = Console.ReadLine();
```

### A `ReadKey` metódus

A `Console.ReadKey` metódus nem várja meg, hogy a felhasználó megnyomja az __Enter__ billentyűt a befejezés előtt. Csak egyetlen billentyűlenyomásra vár. Tehát, ha olyasmit szeretnénk megtenni, mint például __Nyomj meg egy billentyűt a folytatáshoz...__, akkor a `Console.ReadKey`-t használhatod:

```csharp
Console.WriteLine("Nyomj meg egy billentyűt, amikor készen állsz a kezdéshez.");
Console.ReadKey();
```

Ennek a kódnak viszont van egy kis problémája. Ha egy betűt lenyomunk, akkor az a betű még megjelenik a képernyőn. Van erre egy megoldás. Két verziója van a `ReadKey` metódusnak. Az egyik verzió, amit fentebb láttunk, nem rendelkezik bemenettel. A másik verzió egy olyan `bool` típusú bemenettel rendelkezik, amely azt jelzi, hogy a szöveget "_kapja el_" vagy sem. Ha elkapja, akkor nem jelenik meg a konzolablakban. Ennek a verziónak a használata a következőképpen néz ki:

```csharp
Console.WriteLine("Nyomj meg egy billentyűt, amikor készen állsz a kezdéshez.");
Console.ReadKey(true);
```

### Színek módosítása

A `Console` osztály változókat biztosít, amelyek tárolják a szöveg megjelenítéséhez használt színeket. Nem ragadunk le csak a fekete-fehér kombinációnál! Ezt legjobban egy példával lehet illusztrálni:

```csharp
Console.BackgroundColor = ConsoleColor.Yellow;
Console.ForegroundColor = ConsoleColor.Black;
```

Ha ehez a két változóhoz új értéket rendelünk, akkor a konzol fekete szöveget fog sárga hátterel megjeleníteni. A `BackgroundColor` és a `ForegroundColor` változó, nem pedig metódus, így nem használunk zárójeleket. Ezek a sorok új értéket rendelnek hozzá ezekhez a változókhoz - _bár eddig nem láttunk még hasonlót, mint a `ConsoleColor.Yellow` vagy `ConsoleColor.Black`_. 

`ConsoleColor` egy enumeráció, erről többet fogunk megtudni egy kicsit később. Röviden elmondva egy enumeráció egy értékek gyűjteményét definiálja és mindegyikhez egy nevet rendel. A `Yellow` és a `Black` két elem neve a `ConsoleColor` gyűjteményben.

### A `Clear` metódus

Miután megváltoztattuk a konzol háttérszínét, észrevehetjük, hogy ez nem változtatja meg az ablak teljes háttérét, csak az újonnan írt betűkét. A `Console.Clear` metódusát használhatjuk az összes szöveg letörlésére a képernyőről és az egész háttérszín megváltoztatására az újonnan beállított háttérszínre:

```csharp
Console.Clear();
```

Ez eltávolítja az összes jelenlegi szöveget a képernyőről (_ami valójában is a fő célja_), ezért fontos, hogy csak a megfelelő pillanatokban alkalmazd.

### Az ablak címének módosítása

A `Console`-nak van egy `Title` változója is, amely megváltoztatja a konzolablak fejlécében megjelenő szöveget. A típusa egy karakterlánc.

```csharp
Console.Title = "Hello, World!";
```

Majdnem minden jobb, mint az alapértelmezett név, ami általában értelmetlen.

### A Beep metódus

A Console osztály még csipogni is tud! A Beep metódus létrehozza a csipogó hangot:

```csharp
Console.Beep();
```

Ha zenész vagy, van egy változat, amely lehetővé teszi számodra a frekvencia és az időtartam kiválasztását:

```csharp
Console.Beep(440, 1000);
```

Ehhez a Beep metódushoz két információra van szükségünk. Az első az frekvencia. Minél magasabb a szám, annál magasabb a hangmagasság - _a 440 közép hangmagasság_. A második információ a időtartam, mérve milliszekundumban.

## A string készségek fejlesztése

Nézzünk meg néhány karakterlánccal kapcsolatos újdonságot.

### Escape karakter

Hogyan jelenítsük meg az idézőjelet ? Ez az opció így nem működik:

```csharp
Console.WriteLine("""); // HIBA: Rossz idézőjelek!
```

A fordító az első idézőjelet egy karakterlánc kezdeteként, a másodikat pedig annak végként érzékel. A harmadik egy újabb karakterlánc kezdete, amely sosem ér véget és fordítási hibákat kapunk.

A C# nyelvben a __backslash__ az escape karakter (`\`). A __backslash__, amit egy idézőjel követ (`\"`) utasítja a fordítót arra, hogy a karaktert szó szerinti idézőjeleként értelmezze a karakterláncban és ne kezelje azt a karakterlánc végeként:

```csharp
Console.WriteLine("\"");
```

A fordító az első idézőjelet a karakterlánc kezdeteként észleli, a középső `\"`-t idézőjelkarakterként a szövegen belül és a harmadikat a karakterlánc végként értelmezi.

Az idézőjel nem az egyetlen escape karakter. Itt van néhány más is pélául:
- `\t` egy tabulátor karakter, 
- `\n` egy új sor karakter, 
- és `\r` egy visszatérés karakter. 

Mi van akkor, ha szeretnénk egy `\` karaktert a karakterláncunkban? Van erre is egy escape karakter: `\\`. Ez lehetővé teszi, hogy __backslash__ karakterek is szerepeljenek a karakterláncainkban:

```csharp
Console.WriteLine("C:\\Users\\Felhasznalo\\Desktop\\MyFile.txt");
```

Így a kód a következőt jeleníti meg:

```console
C:\Users\Felhasznalo\Desktop\MyFile.txt
```

A szöveg elé elhelyezhetünk egy `@` jelet , hogy utasítsd a fordítót arra, hogy mindent pontosan úgy kezeljen:

```csharp
Console.WriteLine(@"C:\Users\RB\Desktop\MyFile.txt");
```

### Kifejezések beágyazása karakterláncba

Gyakori, hogy egyszerű kifejezéseket vegyítsünk szöveggel. Például:

```csharp
Console.Write("A kedvenc számom: " + kedvencSzam + ".");
```

Ez a kód a __+__ operátort használja karakterláncok összefűzéséhez - gyakran __karakterlánc konkatenációnak__ nevezik és nem összeadásnak. Ezt már láttuk és ez egy hasznos eszköz, de nehezen olvashatóvá válhat. A karakterlánc beágyazás lehetővé teszi, hogy kifejezéseket ágyazzunk be egy karakterláncba, azzal, hogy kapcsos zárójelekkel vesszük körbe:

```csharp
Console.WriteLine($"A kedvenc számom: {kedvencSzam}.");
```

A karakterlánc előtt el kell helyeznünk először is egy `$` jelet. A karakterláncban bármilyen kifejezést kapcsos zárójelek közé zárhatunk és az eredmény ezután karakterlánccá alakul.

Általában sokkal olvashatóbb kódot eredményez, de kerüljük a hosszú kifejezések beágyazását a szövegbe. Jobb először kiszámolni az eredményt és eltárolni egy változóban.


### Karakterekláncok igazítása

Az igazítás lehetővé teszi egy karakterlánc megjelenítését egy meghatározott preferált szélességgel. Szükség esetén szóközök kerülnek hozzáadásra az érték elé a kívánt szélesség eléréséhez. Az igazítás hasznos, ha szöveget táblázatosan szeretnénk elrendezni és szükségünk van arra, hogy azok vízszintesen igazodjanak. A preferált szélesség megadásához helyezzünk el egy vesszőt majd a kívánt szélességet, a kiértékelendő kifejezés mögött:

```csharp
string nev1 = Console.ReadLine();
string nev2 = Console.ReadLine();
Console.WriteLine($"#1: {nev1,20}");
Console.WriteLine($"#2: {nev2,20}");
```

Ha az én két változóban tárolt nevem _Steve_ és _Captain America_ lenne, a kimenet a következőképpen alakulna:

```console
#1:                Steve
#2:      Captain America
```

Ez a kód 20 karaktert tart fenn a név megjelenítéséhez. Ha a hossz kevesebb, mint 20 karakter akkor szóközök kerülnek elé hozzáadásra, hogy elérje a kívánt szélességet.

Ha azt szeretnénk, hogy a szóközök a szó után legyenek, használjunk negatív értéket:

```csharp
Console.WriteLine($"{nev1,-20} - 1");
Console.WriteLine($"{nev2,-20} - 2");
```

Ez a következő kimenetet eredményezi:

```console
Steve                - 1
Captain America      - 2
```

Az szélességeknek két jelentős korlátja van. Először is, nincs kényelmes módja a szöveg középre igazításának. Másodszor ha a szöveg amit írunk hosszabb, mint a preferált szélesség, akkor a program nem vágja le a szöveget, hanem egyszerűen tovább írja a karaktereket, ami összezavarja az oszlopokat.

### Karakterláncok formázása

A formázás lehetővé az adatok megjelenítésének modosítását. Amikor egy lebegőpontos számot jelenítünk meg, sok tizedesjegyet ír ki. Például a `Console.WriteLine(Math.PI);` __3.141592653589793__-t jelenít meg. Gyakran nincs szükség az összes tizedesjegyre és inkább kerekítenénk. A következő kód azt mutatja meg, hogy hogyan írjunk ki számot három tizedesjeggyel:

```csharp
Console.WriteLine($"{Math.PI:0.000}");
```

A formázáshoz a változó után kettőspontot helyezzünk el, majd egy formátum karakterláncot. Ez a __3.142__-t jeleníti meg és még kerekít is!
A 0 bármelyik formátumban azt jelzi, hogy szeretnénk egy számot ott látni, még akkor is, ha a szám nem feltétlenül szükséges. Például a 42-es szám esetén egy __000.000__ formátumú karakterlánc használata azt eredményezi, hogy __042.000__-ként jeleníti meg.
Ellentétben, a __#__ helyet hagy a számjegynek:

```csharp
Console.WriteLine($"{42:#.##}"); // "42" lesz megjelenítve
Console.WriteLine($"{42.1234:#.##}"); // "42.12" lesz megjelenítve
```

Ezenkívül használhatsz a `%` jelet is annak megadására, hogy a számot százalékként ábrázolja és ne törtszámként. Például:

```csharp
float currentHealth = 4;
float maxHealth = 9; 
Console.WriteLine($"{currentHealth / maxHealth:0.0%}"); // Megjeleníti: "44.4%"
```

Számos más szimbólumot is használhatsz a formázott karakterláncokhoz, de ez elég ahhoz, hogy egy alapvető eszköztárral dolgozhassunk.
