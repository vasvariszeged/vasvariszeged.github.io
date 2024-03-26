---
icon: fa-solid fa-7
---

# Static

:::note Röviden
- `Static`-ok a mezők, a metódusok és a konstruktorok is lehetnek.
- Ha egy osztály `static`, akkor csak `static` tagokat tartalmazhat.
:::

## Static adattagok

Már észrevehettük hogy használtuk a `Console`, `Convert` és `Math` osztályokat, de soha nem csináltunk olyat, hogy `new Console()`. Másképp használtuk a saját osztályainkat. A C# nyelvben az adattagok természetesen az osztály példányaihoz tartoznak. Tekintsük ezt az egyszerű példát:

```csharp
public class SomeClass
{
    private int number;
    public int Number => number; //get-only
}
```

A `SomeClass` minden egyes példánya saját `number` mezővel rendelkezik és a metódusok vagy tulajdonságok (_property-k_), például a `Number` tulajdonság hívása konkrét példányokhoz és azok egyedi adataihoz kapcsolódik. Minden példány független a többitől, kivéve, hogy osztoznak ugyanazon az osztálydefiníción.

Az osztály tagjait is elláthatjuk a `static` kulcsszóval, hogy elkülönítsük azokat az egyes példányoktól. Ez azt jelenti, hogy minden eddig látott tagtípus statikussá tehető.


## Static mezők

A statikus kulcsszó egy mezőre történő alkalmazásával statikus mezőt vagy statikus változót hozhatunk létre. Ezek különösen hasznosak olyan változók definiálásához, amelyek az osztály minden példányára hatással vannak. Például, hozzáadhatjuk ezt a két statikus mezőt, amelyek segítenek meghatározni, hogy egy pontszámot érdemes-e felvenni a táblázatába:

```csharp
public class Score
{
    private static readonly int PointThreshold = 1000;
    private static readonly int LevelThreshold = 4;
}
```

:::info Korábban láttuk, hogy a C# programozók általában lowerCamelCase-el nevezik el a mezőket, de ha statikusak, akkor inkább UpperCamelCase-t használnak.
:::

Ez a két mező privát (`private`) és csak olvasható (`readonly`), de ugyanazokat a módosítókat használhatjuk egy statikus mezőn, mint egy normál mezőn. Alkalmanként a normál, nem statikus mezőkre példány (_instance_) mezőként hivatkozunk, amikor egyértelmű különbséget akarunk tenni.

A statikus mezőket az osztályon belül ugyanúgy használjuk, mint bármely más mezőt:

```csharp{3,4}
public bool IsWorthyOfTheHighScoreTable()
{
    if (Points < PointThreshold) return false; 
    if (Level < LevelThreshold) return false; 
    return true;
}
```

Ha egy statikus mező nyilvános, akkor az osztályon kívül is használható az osztály nevén keresztül (például `Score.PointThreshold`).

## Globális állapot

A statikus elemek hasznosak lehetnek, de óvatosan kell velük bánni. Ha egy mező statikus, nyilvános és nem csak olvasni lehet, akkor globális állapotot teremt. Ez olyan állapot, amelyet a program bármely része megváltoztathat és használhat. Ezért a globális állapot kockázatos, mert a programunk egy részének hatása lehet más részekre is. A globális állapot meglepő változásai olyan hibákat okozhatnak, amiket nehéz megtalálni és általában jobb, ha nincs ilyen állapot.

Maga a kombináció az, ami veszélyes. Ha a mezőt `public` helyett `private`-ra állítjuk be, az csak az osztályra korlátozza a hozzáférést, ami könnyebben kezelhető. A mező `readonly`-vá tétele biztosítja, hogy az idő múlásával nem változhat, így megakadályozza, hogy a kód egy része zavarja a többi részt. Ha a mező nem statikus, akkor a programnak csak azok a részei tudnak vele bármit csinálni, amelyeknek van hivatkozásuk az objektumra. Csak óvatosan, amikor `public static` mezőt készítünk.

## Statikus tulajdonságok

A tulajdonságok (_properties_) szintén statikussá tehetők. Ezek használhatnak statikus mezőket vagy automatikus implementált tulajdonságokká is tehetők. Ezeknek ugyanaz a globális állapotproblémája van, mint a mezőknek, ezért a `public static` tulajdonságokkal is óvatosan kell bánni.

Az alábbiakban annak a két küszöbértéknek a tulajdonság (_property_) változata látható, amelyeket korábban mezőként alakítottunk ki:

```csharp
public class Score
{
    public static int PointThreshold { get; } = 1000; 
    public static int LevelThreshold { get; } = 4;
}
```

A `Console` osztály statikus tulajdonságait használjuk legyen ez `Console.ForegroundColor` például - vagy akár a `Console.Title`. A `Console.ForegroundColor` jó példa a globális állapot veszélyére. Ha a kód egy része pirosra változtatja a színt egy hiba megjelenítéséhez, akkor minden, ami utána következik, szintén pirosra lesz írva, amíg valaki vissza nem változtatja azt.

## Statikus metódusok

A metódusok lehetnek statikusak is. Egy statikus metódus nem kötődik egyetlen példányhoz sem, így nem hivatkozhat nem statikus (_példány_) mezőkre, tulajdonságokra vagy metódusokra.

A statikus metódusokat leggyakrabban segédmetódusoként használják, amelyek valamilyen szolgáltatást nyújtanak az osztályhoz kapcsolódóan, amelyben elhelyezték őket, de nem kötődik közvetlenül egyetlen példányhoz sem. A következő metódus például azt határozza meg, hogy egy tömbben hány pontszám tartozik egy adott játékoshoz:

```csharp
public static int CountForPlayer(string playerName, Score[] scores)
{
    int count = 0;

    foreach (Score score in scores)
    {
        if (score.Name == playerName) count++;
    }
       
    return count;
}
```

Ennek a metódusnak nem lenne értelme példány metódusként, mert sok pontszámról van szó, nem pedig egyről. A `Score` osztály statikus metódusaként azonban van értelme, mert a pontszámokkal kapcsolatos műveleteket végzi.

A statikus metódusok másik gyakori használata a _factory method_, amely a konstruktor meghívásának alternatívájaként új példányokat hoz létre a környezet számára. Ez a metódus lehet _factory method_ például a `Rectangle` osztályunkban:

```csharp
public static Rectangle CreateSquare(float size) => new Rectangle(size, size);
```

Ez a metódust a következőképpen hívhatjuk meg:

```csharp
Rectangle rectangle = Rectangle.CreateSquare(2);
```

Ez a kód azt is szemlélteti, hogyan lehet az osztályon kívül meghívni a statikus tagokat. De ismerősnek kell tűnnie; így hívunk olyan dolgokat, mint a Console.WriteLine és a Convert.ToInt32, amelyek szintén statikus metódusok.

## Statikus konstruktorok

Ha egy osztály statikus mezőkkel vagy tulajdonságokkal rendelkezik, előfordulhat, hogy ezek inicializálásához valamilyen logikát kell futtatnia. Ennek megoldására definiálhatunk egy statikus konstruktort:

```csharp
public class Score
{
    public static readonly int PointThreshold;
    public static readonly int LevelThreshold;

    static Score()
    {
        PointThreshold = 1000;
        LevelThreshold = 4;
    }
}
```

A statikus konstruktornak nem lehetnek paraméterei és nem is hívható közvetlenül. Ehelyett automatikusan lefut az osztály első használatakor. Emiatt nem helyezhetünk el rajtuk olyan hozzáférési módosítót, mint a `public` vagy a `private`.

## Statikus osztályok

Néhány osztály nem több, mint mezők, függvények vagy tulajdonságok gyűjteménye. A `Console`, a `Convert` és a `Math` mind példák erre. Ezekben az esetekben érdemes megtiltani az osztály példányainak létrehozását, amit a `static` kulcsszóval történő jelöléssel érhetünk el:

```csharp
public static class Utilities
{
    public static int Helper1() => 4;
    public static double HelperProperty => 4.0;
    public static int AddNumbers(int a, int b) => a + b;
}
```

A fordító gondoskodik arról, hogy véletlenül se adjunk nem statikus tagokat egy statikus osztályhoz és megakadályozza az új példányok létrehozását a `new` kulcsszóval. Mivel a `Console`, a `Convert` és a `Math` mind statikus osztályok, soha nem kellett - _és nem is volt szabad_ - példányt létrehoznunk a `new` kulcsszóval.