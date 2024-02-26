---
icon: fa-solid fa-2
---

# Enumerációk

:::note Röviden
- Egy enumeráció egy egyéni típus, amely felsorolja az értékek halmazát.
- Az enumerációkat a többi metódus után, vagy egy külön fájlban határozzuk meg.
- Az enumeráció meghatározása után használhatja azt egy változó típusaként.
:::

A __C#__ nyelvben a típusok számítanak. Nem használunk `string`-et, ha számokkal dolgozunk, és nem használunk `int`-et, ha szöveggel dolgozunk. Mit tegyünk, ha olyasmivel találkozunk, ami nem illik bele valamelyik már létező típusba? Mi van például, ha az évszakokat (__tavasz, nyár, ősz, tél__) kell ábrázolnunk?

Ha csak olyan adattípusokat használunk, amelyeket már ismerünk, két lehetőségünk van: 

1. Egész szám `int` típus:

    Egy int típus esetén minden évszakhoz hozzárendelhetnénk egy számot:

    ```csharp
    int current = 2; // summer
    ```
    és
    ```csharp
    if (current == 3) Console.WriteLine("Winter is coming.");
    ```

    Ez a megközelítés működhet, de két problémával jár:

    - Először is, nehéz megjegyezni, hogy melyik évszak melyik. A téllel vagy a tavasszal kezdtük? 0-nál vagy 1-nél kezdjük a számolást? Csak a megjegyzéssel válik világossá. 
    - A második probléma az, hogy semmi sem akadályozza meg, hogy más számokat használjunk. Valaki az aktuális évszakot -14 vagy 2 millióra teheti.

2. Karakterlánc `string` típus:

    Mi lenne, ha `string`-eket használnánk? Használhatnánk a __Summer__ szöveget a nyár ábrázolására:

    ```csharp
    string current = "Summer";
    ```
    és
    ```csharp
    if (current == "Fall") Console.WriteLine("Winter is coming.");
    ```

    Ez a megközelítés hasonló problémákkal jár. __fall__, __Faall__ és az __Autumn__ nem jelentik ugyanazt a karakterláncot. És semmi sem akadályoz meg minket abban, hogy valami olyasmit tegyünk, mint `current = "Monday";`.

A C# jobb megoldást kínál erre a problémára egy új típus, az úgynevezett __enumeráció__ definiálását.

## Enumeráció alapjai

Az enumeráció olyan típus, amely választási lehetőségek a lehetséges opciók egy kis listájából állnak. 

:::note Az enumerálni ige azt jelenti, hogy “felsorolni a dolgokat egyenként”, innen ered a neve. 
:::


Az enumerációk csak akkor működnek, ha viszonylag kevés választási lehetőségünk van. Például a `Boolean` értékek `true` és `false` kiváló enumeráció lenne, ha nem lennének már a `bool` típus részei. Az __évszakok__ is kiválóan alkalmasak enumerációra, mivel mindössze négy választási lehetőségünk van.

### Enumeráció definiálása

Mielőtt használhatnánk egy enumerációt, definiálnunk kell azt. A következőkben egy új enumerációt definiálunk az évszakok ábrázolására:

```csharp
enum Season { Spring, Summer, Fall, Winter }
```

Egy új enumeráció definiálásához az `enum` kulcsszóval kell kezdenünk, amit az enumeráció neve (`Season`) követ. A kapcsos zárójelek között, vesszővel elválasztva felsoroljuk az enumeráció lehetőségeit. A C#-ban általában a típusnevekhez és az enumeráció tagjaihoz is az __UpperCamelCase__ elnevezési konvenciót alkalmazzák.

A kód többi részébe helyezve az egész fájl így nézhet ki:

```csharp
public class HelloWorld
{
    enum Season { Spring, Summer, Fall, Winter }
    
    public static void Main(string[] args)
    {
        Console.WriteLine ("Hello World!");
    }
}
```

A szóköz nem számít, így a következő használati stílus is jellemző:


```csharp
enum Season 
{ 
    Spring,  
    Summer, 
    Fall,
    Winter 
}
```

Az enumeráció első eleme lesz az alapértelmezett értéke, ezért ezt jól válasszuk meg.


### Enumeráció használata

Miután definiáltuk a `Season` enumerációt, használhatjuk, mint bármely más típust. Például deklarálhatunk egy változót, amelynek típusa `Season`:


```csharp
Season current;
```

A fordító most már képes segíteni abban, hogy csak érvényes évszakokat rendeljünk hozzá ehez a változóhoz. Megadhatunk egy konkrét értéket, például így:

```csharp
Season current = Season.Summer;
```

Egy adott értéket az enumerációtípus neve és a pont operátor segítségével érünk el. Ez kissé bonyolultabb, mint például ha __int__ (`2`) vagy __string__ (`Summer`) literálokat használtunk volna, de nem rossz.

Az enumerációk és az egész számok sok közös tulajdonsággal rendelkeznek. Például az `==` operátort használhatjuk az egyenlőség ellenőrzésére:

```csharp
public class HelloWorld
{
    enum Season {Spring, Summer, Fall, Winter }
    
    public static void Main(string[] args)
    {
        Season current = Season.Summer;
        if (current == Season.Summer || current == Season.Winter)
            Console.WriteLine("Happy solstice!");
        else
            Console.WriteLine("Happy equinox!");
    }
}
```

## A `ConsoleColor` újboli megtekintése

A múltban így használtuk a `ConsoleColor` típust:

```csharp
Console.BackgroundColor = ConsoleColor.Yellow;
```

Most már ez a kód új értelmet nyer. A `ConsoleColor` egy __enumeráció__! Valahol ott van ez a kód, például `enum ConsoleColor { Black, Yellow, Red, ... }`. Az enumerációk ismeretével mi magunk is megírhattuk volna ezt!


## Enumerációk sötét titka

Az enumerációk tulajdonképpen egész számokat reprezentálnak. Azonban a fordítóprogram kizárja annak lehetőségét, hogy véletlenül alkalmazzuk őket. Minden enumerációnak van egy alaptípusa, ami az egész szám típuson alapul. Az alapértelmezett alaptípus az `int`, de lehetőség van annak módosítására:

```csharp
enum Season: byte {Spring, Summer, Fall, Winter }
```

Nem éri meg ezt megváltoztatni, de érdemes megfontolni, ha szűkös a memória.

Mivel az enumerációk egész számokon alapulnak, van néhány más trükk is, amit hasznosnak találhatunk. Minden enumerációs taghoz `int` értéket rendelünk. Ezek alapértelmezés szerint a definícióban szereplő sorrendben, 0-val kezdődően kerülnek megadásra. Tehát fentebb a  _Spring_ __0__, a _Summer_ __1__, stb. Ha szeretnénk akár egyéni számokat is hozzárendelhetünk:

```csharp
enum Season { Spring = 3, Summer = 6, Fall = 9, Winter = 12}
```

Minden olyan enumerációs tag, amelyhez nincs hozzárendelt szám, automatikusan az előtte lévő tag utáni számot kapja. Az alábbiakban tehát a _Spring az 1_, _a Summer a 2_, _a Fall a 3_, _a Winter pedig a 4_:

```csharp
enum Season { Spring = 1, Summer, Fall, Winter}
```

Lehetőségünk van egész számok és enumerációk között is átalakítani:

```csharp
int number = (int) Season.Fall; 
Season now = 2;
```

