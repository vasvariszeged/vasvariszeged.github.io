---
icon: fa-solid fa-9
---

# Hibakezelés és kivételek

:::note Röviden
- A kivételek a C# elsődleges hibakezelési mechanizmusa.
- A kivételek az `Exception` típus objektumai.
:::

Eddig úgy tettünk, mintha a programjainkban soha semmi sem romolhatna el és itt az ideje szembenézni a valósággal. Mit tegyünk, ha a dolgok rosszul mennek? Tekintsük meg ezt a kódot, amely 1 és 10 közötti számot kap a felhasználótól:

```csharp
int GetNumberFromUser()
{
    int number = 0;
    while (number < 1 || number > 10)
    {
        Console.Write("Enter a number between 1 and 10: ");
        string? response = Console.ReadLine();
        number = Convert.ToInt32(response);
}
    return number;
}
```

Mi történik, ha beírjuk az __"asdf"__ szót? A `Convert.ToInt32();` nem tudja ezt átalakítani a programunk összeomlik és befejeződik. A C# programozási nyelvben, ha egy kódrészlet elakad, akkor nem tud továbbmenni, mert **kivételt dob**. A kivétel a kódban található rész - ami észleli ezt. A kivételkezelők azok a kódrészletek amelyek reagálnak egy dobott kivételre és megakadályozzák annak további folytatását.

## Kivételek kezelése

A legtöbb kódunk minden esetet figyelembe tud venni a hibalehetőségek nélkül - például a `Math.Sqrt` biztonságosan kezeli az összes négyzetgyököt.

Ezzel szemben a `Convert.ToInt32()` nem nyújt ilyen garanciát. Ha az __"asdf"__ meghívásával hívjuk, akkor találkozunk a problémával. A szöveg nem konvertálható és a metódus nem tudja folytatni a megadott feladatát. Az ilyen hibák kezelésére szolgáló megközelítésünk korábban így szólt: _"Kedves felhasználó: Örülök, hogy nem hibáztál. Nem tudnám kezelni, ha hibázól."_. 

A reménykedés helyett inkább foglalkozzunk a kérdéssel nyíltan. Először is fel kell ismernünk, hogy egy kódrészlet meghibásodhat és rendelkeznünk kell egy tervvel a helyreállításra is. A problémás kódot egy `try` blokkba helyezzük, amelyet rögtön követ az `Exception`:


```csharp
try 
{
    number = Convert.ToInt32(response);
}
catch (Exception)
{
    number = -1;
    Console.WriteLine($"I do not understand '{response}'.");
}
```

A `catch` blokk elkap minden olyan kivételt, amely a `try` blokkban keletkezik és az ott található kód lefut, hogy a probléma elhárítható legyen. Ebben az esetben, ha valamilyen okból nem sikerül `int`-re konvertálnunk, akkor a __"I do not understand..."__ szöveget fogjuk megjeleníteni és a számot __-1__-re állítjuk.

Nézzünk most részletekbe bele. Amikor a kód hibás állapotot észlel - _valami kivételes, az átlagosnál vagy elvárttól eltérő_ -, akkor létrehoz egy új példányt a `System.Exception` osztályból. Ez az kivétel objektum reprezentálja a bekövetkezett problémát és különböző leszármazott osztályok különféle hibakategóriákat képviselnek. A fenti kódban a `Convert.ToInt32();` tartalmazza azt a kódot, amely észleli ezt a hibát, létrehozza a kivételt és dobja azt. Hamarosan meglátjuk, hogyan tehetjük ezt meg magunk is.

A program először a `Convert.ToInt32()` metódusban keres egy megfelelő __`catch` blokkot__, amely kezeli ezt a hibát. Ha ilyen blokk nem található a keresés a __hívó metódusban__ folytatódik, __ami a mi kódunk__. Ha a mi kódunkban sincs olyan `catch` blokk, amely kezelné a problémát, akkor a keresés tovább folytatódna, amíg nem talál megfelelő `catch` blokkot vagy a program a **belépési pontján** kilépne. Ezért az utóbbi esetben a program **összeomlásával** végződne.

Szerencsére ez a kód most már kezeli az ilyen hibákat, így a keresés a mi `catch` blokkunkban ér véget. Amint a kód a `catch` blokkon belül lefut, a végrehajtás folytatódik a `try/catch` blokk után.

:::note Ha egy try blokkban sok állítás van és az első kivételt dob, akkor a kód többi része nem fog lefutni. 

Kritikus fontosságú a megfelelő kódrészlet kiválasztása a `try` blokkokba, de általában kisebb kódrészleteket érdemes használni.
:::

### Speciális kivételtípusok kezelése

A fenti `catch` blokkunk az összes lehetséges kivételtípust kezeli. Általában nem ezt akarjuk. Általában jobb, ha pontosabban meghatározzuk a hiba típusát.

Ha megnézzük a `Convert.ToInt32(string);` dokumentációját, akkor láthatjuk, hogy a program dobhat `System.FormatException` vagy `System.OverflowException` hibát. A `FormatException` osztály akkor lép fel, ha a szöveg nem numerikus, az `OverflowException` pedig akkor, ha a szám túl nagy ahhoz, hogy `int`-ben tároljuk. Ezeket célszerű különböző módon kezelni. A `catch` blokkunkat a következőkre módosíthatjuk:

```csharp
try {
    number = Convert.ToInt32(response);
}
catch (FormatException)
{
    number = -1;
    Console.WriteLine($"I do not understand '{ response }'.");
}
catch (OverflowException)
{
    number = -1;
    Console.WriteLine($"That number is too big!"); 
}
```

Ez a kód két külön `catch` blokkot definiál egyetlen `try` blokkhoz rendelve, mindegyik a `Convert.ToInt32();` hiba különböző módjait kezeli. Ez lehetővé teszi számunkra, hogy minden hibatípust másképp kezeljünk.

A kivételkezelő keresésekor a sorrend számít. A `FormatException` és az `OverflowException` különböző kivétel típusok, de tekintsük meg ezt a kódot:

```csharp
try { ... }
catch (FormatException) { ... }
catch (Exception) { ... }
```

Az első blokk kezeli a `FormatExceptiont`, mert ez jön először. A második minden más kivételtípust kezelni fog, mert minden az `Exception`-ből származik.

Egy `try/catch` blokknak nem kell minden elképzelhető kivételtípust kezelni. Ha akarnánk, egyszerűen megtehetnénk a következőket:

```csharp
try { ... }
catch (FormatException) { ... }
```

Ez a kód `FormatException` objektumokat fogja elkapni, de többi hibát másra hagyja. A kivételkezelés során fontos, hogy csak azokat a kivételeket kapjuk el, amelyeket ténylegesen kezelni tudunk és ne kapjuk el azokat, amelyeket nem tudunk megfelelően kezelni.

### A kivételobjektum használata

A kivételkezelőben szükség esetén használhatjuk a kivételobjektumot a blokkban. Ehhez a `catch` zárójelében a kivétel típusa után adjunk hozzá egy nevet:

```csharp
try { ... }
catch (FormatException e)
{
    Console.WriteLine(e.Message);
}
```

Az `Exception` osztály definiál egy `Message` tulajdonságot, így minden kivételobjektum rendelkezik vele. Más kivétel típusok további adatokat adhatnak hozzá, amelyek hasznosak lehetnek, bár sem a `FormatException`, sem az `OverflowException` nem teszi ezt.


## Kivételek dobása

Nézzük most meg az egyenlet másik oldalát: __új kivételek létrehozását__ és __dobását__.

A kódunknak először is fel kell ismernie a problémát. Nekünk kell meghatároznunk, hogy mi számít megoldhatatlan hibának. De ha már felismertünk egy ilyen helyzetet, készen állunk arra, hogy létrehozzunk és eldobjunk egy kivételt.

A kivételeket olyan objektumok képviselik, amelyeknek az osztálya `Exception` vagy egy származtatott osztály. Egy kivételobjektum létrehozása ugyanúgy történik, mint bármely más objektumé: használjuk a `new` parancsot és meghívjuk az egyik konstruktorát. A létrehozás után a következő lépés a kivétel eldobása, ami megkezdi a kivétel kezelőjének keresését. Ezek gyakran egyetlen utasításban történnek:

```csharp
throw new Exception();
```

A `new Exception()` rész létrehozza a kivételobjektumot. A `throw` kulcsszó az, ami elindítja a kezelő keresését. Ez valahogy így nézhet ki:

```csharp
Console.WriteLine("Name an animal.");
string? animal = Console.ReadLine();
if (animal == "snake")
```

Az `Exception` osztály a létező legáltalánosabb hiba reprezentálója. Ezzel a kóddal csak annyit tudunk, hogy valami hiba történt. Általában olyan osztályból származó __példányokat__ akarunk dobni, amely az `Exception` osztályból származik, nem magából az `Exception` osztályból. Ezzel pontosabban tudjuk közölni, milyen hiba történt és lehetővé teszi a kezelő számára, hogy hogyan kezelje azt illetve egyáltalán kezelje-e.


| Exception neve              | Jelentése                                                          |
|-----------------------------|--------------------------------------------------------------------|
| `NotImplementedException`     | A metódus még nincs implementálva.                                 |
| `NotSupportedException`       | A metódus nem támogatott.                                          |
| `InvalidOperationException`   | Az objektum jelenlegi állapota nem teszi lehetővé a műveletet.    |
| `ArgumentOutOfRangeException` | Az érték nem esik a megengedett tartományba.                        |
| `ArgumentNullException`       | A null érték nem megengedett egy paraméterként átadott argumentumnál. |
| `ArgumentException`           | Az argumentum értéke nem megfelelő vagy helytelen.                 |
| `Exception`                   | Általános kivétel, amelyet nem sikerült más specifikus típusba besorolni vagy kezelni.           |

Korábban ahelyett, hogy a `new Exception()` használtuk volna, inkább egy specifikusabb típust kellett volna választanunk.

Talán a `NotSupportedException` a jobb választás:

```csharp
Console.WriteLine("Name an animal.");
string? animal = Console.ReadLine();
if (animal == "snake") throw new NotSupportedException();
```

A legtöbb kivételtípus lehetővé teszi egy üzenet paraméterként való megadását is és gyakran hasznos, ha egy ilyen üzenetet is megadunk, hogy segítsük a programozókat, akik később találkoznak vele:

```csharp
if (animal == "snake") throw new NotSupportedException("I have ophidiophobia.");
```

A kivétel típusától függően lehetséges (vagy akár kötelező), hogy további információkat adjunk meg a konstruktornak.

Ha a meglévő kivételtípusok egyike nem elegendő a hiba kategorizálására, készítsünk sajátot egy új, az `Exception` vagy egy másik kivételosztályból származtatott osztály definiálásával:

```csharp
public class SnakeException : Exception
{
    public SnakeException() { }
    public SnakeException(string message) : base(message) { }
}
```

Kerüljük a sima `Exception` dobását. Használjunk egy létező típust, ha annak van értelme. Ellenkező esetben hozzunk létre egy újat.

## A `finally` blokk

A `finally` blokkot gyakran használják a `try` és a `catch` blokkokkal együtt. A `finally` blokk olyan kódot tartalmaz, amelynek attól függetlenül kell futnia, hogy a végrehajtás folyamata hogyan hagyja el a `try` blokkot, akár a kód tipikus befejezésével, akár egy kivétel dobásával, akár egy korai visszatéréssel:

```csharp
try 
{
    Console.WriteLine("Shall we play a game?"); 
    if (Console.ReadLine() == "no") return;

    Console.WriteLine("Name an animal.");
    string? animal = Console.ReadLine();
    if (animal == "snake") throw new SnakeException();
}
catch (SnakeException) 
{ 
    Console.WriteLine("Why did it have to be snakes?"); 
}
finally
{
    Console.WriteLine("We're all done here.");
}
```

A fenti `try` blokkból háromféle módon lehet kilépni; a `finally` blokk mindhárom esetben lefut. Ha a 4. sorban találkozunk egy visszatéréssel, ilyenkor a `finally` blokk végrehajtódik a visszatérés előtt. 

Ha a `try` blokk végére a normál végrehajtás révén jutunk el, akkor a `finally` blokk lefut. Ha egy `SnakeException` kivétel keletkezik, akkor a `finally` blokk a `SnakeException` kezelő futása után hajtódik végre. Ha ez a kód más, itt nem kezelt kivételt dob, akkor a `finally` blokk még mindig lefut, mielőtt a metódus elhagyja a kezelőt keresve. 