---
icon: fa-solid fa-4
---

# Osztályok

:::note
- Az osztályok a leghatékonyabb módja az új típusok definiálásának.
- Egy osztály adatokat (__mezőket__) és az adatokon végzett műveleteket (__metódusokat__) foglal össze.
- A konstruktorok határozzák meg, hogyan jönnek létre az új példányok.
- Az osztályok referencia típusok.
:::

Az egyéni típusok létrehozásának és alkalmazásának módját az _enumerációkon_ keresztül már megismerhettük. A _tuple_-kel pedig az összetett típusok használatába nyújtott betekintést. Most, hogy már megismerkedtünk velük, ideje áttérnünk a lényegre, ami nem más, mint az osztályok bemutatása. Az osztályok használata az objektumorientált programozásnak az alapja. Visszatérünk a pontszám ábrázolásához, ezúttal osztályok segítségével oldjuk meg a feladatot.

__Először is, tisztázzuk az objektumok, osztályok és példányok fogalmát.__

Az objektum a program egy részéért felel és adatokat és metódusokat tartalmaz, amelyek meghatározzák, hogy az objektum milyen adatokat tárol és milyen műveleteket tud elvégezni, ha szükséges. Egy objektumorientált programban általában sok objektum van, amelyek mindegyike a saját feladatát látja el a rendszerben. Néhány objektum ismer más objektumokat és más objektumok metódusait hívja meg, hogy együttműködjön velük a saját feladatának megoldásában. Ezt már csináltuk a saját programjainkban is. A fő metódusunk egy objektumban van és a `Console`, `Convert` és `Math` objektumokat kéri meg, hogy végezzék el azokat a feladatokat, amelyekre specializálódtak.

Az objektumorientált világban való programozás nagy része az, hogy eldöntsük, hogyan bontsuk fel a programot objektumokra. Néhány programozási nyelvben az objektumok rugalmasak. Változókat és metódusokat lehet hozzáadni és eltávolítani. Ahogy a programok nőnek ebben a rendszerben, ez a probléma egyre nagyobb lesz.


## Egy új osztály létrehozása

Mielőtt használhatnánk egy osztályt, először definiálnunk kell azt. Sok C# programozó minden osztályt külön fájlban helyez el. Valóban, ahogy a programjaink elég nagyra nőnek ahhoz, hogy 10 vagy 100 osztályt definiáljunk, nem akarjuk majd mindet egyetlen fájlban tartani. Később megnézzük, hogyan oszthatjuk fel a programunkat több fájlra. Egyelőre ugyanoda helyezzük el őket, ahová mi az enumerációkat helyeztük.

Egy új osztály definiálása a `class` kulcsszóval történik, amelyet az osztály neve, majd egy sor kapcsos zárójel követ. A neveket általában __UpperCamelCase__ nagybetűvel írjuk, csakúgy, mint az enumerációkat és a metódusokat. Az osztály kapcsos zárójelén belül elhelyezhetjük azokat a változókat és metódusokat, amelyekre az osztálynak szüksége lesz a feladatai ellátásához.

Az előző __Tetris__ pontszámtáblázatának példáját felhasználva tudjuk, hogy három változóra van szükségünk: 
- egy névre, 
- egy pontszámra 
- és a játékos által elért szintre. 

Egy egyszerű `Score` osztály így néz ki:

```csharp
class Score 
{
    public string name;
    public int points;
    public int level; 
}
```

Ezek a változók nem ugyanazok, mint a metódusokhoz tartozó helyi változók vagy paraméterek. Ezek másfajta változók, amelyeket mezőknek vagy példányváltozóknak nevezünk. A metódusokhoz kapcsolódó helyi változók és paraméterek csak a metódus meghívása és befejezése között léteznek.
A mezők az objektum memóriáján belül létrehozott változók. Addig élnek, amíg az objektum él és az objektum részét alkotják.

Később megfogjuk nézni, hogy mit jelent a `public`, de most csak vakon alkalmazzuk ezt a mezőkre, amiket létrehozunk. Például az alábbi metódus megmutatja, hogy a pontszám kiérdemelt-e egy csillagot, amit úgy definiálunk, hogy legalább 1000 pontnyi átlaga van a játékosnak szintenként:

```csharp
class Score
{
    public string name;
    public int points;
    public int level;
    
    public bool EarnedStar() {
        return (points / level) > 1000;
    }
}
```

Az `EarnedStar` metódus olyan, mint a legtöbb metódus, amit a múltban láttunk, de jelentős különbséggel. Talán legfeltűnőbb része az, ahogy a `points` és `level` mezőket használja a kódjában. Mivel az `EarnedStar` a `Score` osztályban van, ez a metódus hozzáfér a saját lokális változóihoz és paramétereihez (_bár ennek a metódusnak nincsenek ilyenjei_) és az osztályban definiált bármely változóhoz. Az osztályok lehetőséget adnak arra, hogy az adatokat és az azokon végzett műveleteket egy jól definiált, összefüggő egységbe foglaljuk. Ezt az elvet __encapsulation__-nek nevezik.



:::tip Objektumorientált elv #1

__Encapsuláció__ - Az adatokat (_mezőket_) és ezeken az adatokon végzett műveleteket (_metódusokat_) egy jól meghatározott egységben (_például egy osztályba_) kerülnek összekapcsolásra.

Az __encapsuláció__ segít létrehozni az objektumokat, amelyek megoldják az apróbb részekre felbontott problémákat, ez által nagyobb programok építését teszi lehetővé.
:::

## Osztályok példányai

Az eddig látott kód definiálta a `Score` osztályt. Leírta, hogy a programunkban hogyan fognak működni a pontszámok. Ezt az osztályt ugyanúgy használhatjuk, mint bármely más típust. Most pedig __deklarálunk__ egy változót, amelynek típusa `Score`, majd hozzárendelhetünk egy új példányt:

```csharp
public class HelloWorld
{
    public static void Main(string[] args)
    {
        Score best = new Score();
    }
}

class Score
{
    public string name;
    public int points;
    public int level;
    
    public bool EarnedStar() {
        return (points / level) > 1000;
    }
}
```

Egy osztály példányai a `new` kulcsszóval vannak létrehozva. Az `Score()` egy különleges metódusra utal, amit __konstruktornak__ nevezünk és arra szolgál, hogy az új példányokat felkészítse a használatra. Nem definiáltunk konstruktort a `Score` osztályunkban, de a fordító elég kedves volt hozzánk, hogy egy alapértelmezettet generáljon nekünk. Ezt használjuk itt. A `new Score()` kifejezés létrehozza `Score` osztály példányt és ezt a `best` változóban tárolja.

Most, hogy a példányunk létrejött, dolgozhatunk a mezőivel és meghívhatjuk a metódusait:

```csharp
public class HelloWorld
{
    public static void Main(string[] args)
    {
        Score best = new Score();

        best.name = "ROB";
        best.points = 12420;
        best.level = 15;
        
        if (best.EarnedStar()) 
        {
            Console.WriteLine("You earned a star!");
        }  
    }
}

class Score
{
    public string name;
    public int points;
    public int level;
    
    public bool EarnedStar() {
        return (points / level) > 1000;
    }
}  
```

A kód középső része (_7., 8., 9. sor_) új értékeket rendel a példány minden egyes mezőjéhez. Ezek a mezők a példányhoz tartoznak, ezért egy példányra való hivatkozáson keresztül lehet elérni őket, jelenlegi példánkban a `best` változón keresztül.

Az `if` utasítás feltételében az `EarnedStar` metódust hívjuk meg. Ez eltér attól, ahogyan korábban a metódusokat meghívtuk. Itt is a `Score` osztály egy példányán keresztül kell elérnünk a metódust, a `best` változón keresztül. Ez inkább hasonlít ahhoz, ahogyan a `Console` és a `Convert` metódusokat hívjuk. Ezekben az esetekben azonban nem egy példányt, hanem az osztály nevét használtuk. Ezt a bizonyos különbséget később fogjuk megnézni.

Egynél több példányt is létrehozhatunk egy osztályból. Ha ezt megtesszük, akkor minden példánynak saját adatai vannak, amelyek függetlenek a többi példánytól:

```csharp
public class HelloWorld
{
    public static void Main(string[] args)
    {
        Score a = new Score();
        a.name = "ROB";
        a.points = 12420;
        a.level = 15;

        Score b = new Score();
        b.name = "JOHN";
        b.points = 8543;
        b.level = 9;
        
        if (a.EarnedStar()) 
        {
            Console.WriteLine("You earned a star!");
        }

        if (b.EarnedStar()) 
        {
            Console.WriteLine("You earned a star!");
        } 
    }
}

class Score
{
    public string name;
    public int points;
    public int level;
    
    public bool EarnedStar() {
        return (points / level) > 1000;
    }
} 
```
Ez a kód két `Score` példányt hoz létre és mindkettőre hivatkozik az `a` és `b` változókban. Mivel mindkét példánynak megvannak a saját adatai, az `a.EarnedStar()` az `a` adatai alapján, a `b.EarnedStar()` parancs esetében pedig a `b` adatai alapján határozzuk meg.



![Ha megnézzük a fenti program által használt memóriát, a futás után így nézne ki.](/assets/images/vasvari/csharp/object1.jpg)


## Konstruktor

Az objektumok létrejöttének pillanatában lefutó speciális metódusokat konstruktoroknak nevezzük, amelyek gondoskodnak arról, hogy az objektumok megfelelő állapotban induljanak. A `Score` osztályhoz egy konstruktort adunk a következő kódban, amely minden mezőt egy általunk megadott értékre állít be:


```csharp
class Score
{
    public string name;
    public int points;
    public int level;

    public Score()
    {
        name = "Unknown";
        points = 0;
        level = 1;
    }
    
    public bool EarnedStar() {
        return (points / level) > 1000;
    }
} 
```

A konstruktorok olyanok mint a metódusok, viszont van nekik két sajátosságuk. Az egyik az, hogy a konstruktorok neve megegyeznek az osztály nevével. A másik pedig, hogy nem adnuk meg nekik visszatérési típust. Ezen kívül a konstruktorok hasonlóan működnek, mint más metódusok. Elágazásokat, ciklusokat és más metódusokat is hívhatunk bennük.

:::info TL;DR
A konstruktor azért felel, hogy az új példányok minden mezőjéhez kezdeti értékeket rendeljen.
:::

### Alapértelmezett konstruktorok és mezőértékek

Ezen a ponton talán elgondolkoztunk már azon a tényen, hogy korábban nem definiáltunk konstruktort, mégis létrehozhattuk a `Score` osztály új példányait. Hogyan is működött ez?

Ha nem definiálunk konstruktort, a fordító beilleszt egy ilyet, ami így néz ki:

```csharp
public Score() { }
```

A konstruktor létezik és használható új példányok létrehozásakor, de semmi különlegeset nem csinál. A konstruktor célja, hogy a példányokat kezdőértékekkel lássa el. Azonban ez a konstruktor semmit sem inicializál.

#### Milyen kezdőállapotban vannak a mezőink ebben az esetben?

Ahogy az tömböknél is láttuk, minden mezőt a típus alapértelmezett értékére inicializálunk. Ez az inicializálás az objektum memóriájának minden __0__ bitjével történik. Ahogy korábban láttuk, az `int` típus alapértelmezett értéke a __0__ szám, a `string` típus alapértelmezett értéke pedig a speciális `null` érték. Így egy új `Score` példány `null` nevet (név hiányát), `0` pontot és `0` szintet kapna. Amint saját konstruktort adunk egy osztályhoz, az alapértelmezett konstruktor már nem generálódik automatikusan.

### Konstruktorok paraméterekkel

A konstruktoroknak ugyanúgy lehetnek paraméterei, mint más metódusoknak. Elég gyakori, hogy a konstruktorok paramétereket használnak, hogy a külvilág megadhassa néhány mező kezdeti értékét. Az alábbi konstruktor ezt teszi:

```csharp
class Score
{
    public string name;
    public int points;
    public int level;
    
    public Score(string n, int p, int l)
    {
        name = n;
        points = p;
        level = l; 
    }
    
    public bool EarnedStar() {
        return (points / level) > 1000;
    }
}
```


Az `n`, `p` és `l` változónevek nem alkalmasak. Általában `name`, `points` és `level` néven hívnánk őket. Az osztály metódusait, beleértve a konstruktorokat is, hozzáférnek a mezőkhöz, a helyi változókhoz és a paraméterekhez. Egy mező nevét megkaphatja egy helyi változó vagy egy paraméter is. Hamarosan megoldjuk ezt a problémát, de most az `n`, `p` és `l` neveket használjuk, hogy elkerüljük a névütközést.

Ez a konstruktor három paraméterrel rendelkezik, amelyek segítségével a hívó kód megadhatja minden mező kezdőértékét.
Ennek az új konstruktornak köszönhetően másképp kell létrehoznunk egy új `Score` objektumot, de ezzel a változtatással már nem szükséges később inicializálnunk minden mezőt:

```csharp
Score score = new Score("ROB", 12420, 15);
```

### Több konstruktor

Egy osztály annyi konstruktort lehet, amennyire csak szüksége van. Viszont mindegyiknek különböznie kell a paraméterek száma vagy típusa szerint. Az alábbi kód két konstruktort határoz meg. Az elsőnek nincs paramétere (_egy paraméter nélküli konstruktor_) és minden mezőnek alapértelmezett kezdőértéket ad. A második konstruktor három paraméterrel rendelkezik, amelyek kezdőértékeket állítanak be minden mező számára.

```csharp
class Score
{
    public string name;
    public int points;
    public int level;

    public Score()
    {
        name = "Unknown";
        points = 0;
        level = 1; 
    }
    
    public Score(string n, int p, int l)
    {
        name = n;
        points = p;
        level = l; 
    }
    
    public bool EarnedStar() {
        return (points / level) > 1000;
    }
}
```

Mi választhatjuk ki, melyik konstruktort szeretnénk használni:

```csharp
Score a = new Score();
Score b = new Score("ROB", 12420, 15);
```

### Inline inicializálása

A mezők inicializálásának egy másik módja az inline módon történhet, ami azt jelenti, hogy deklarációjuk helyén inicializáljuk őket, ahogy az alábbiakban látható:

```csharp
class Score
{
    public string name = "Unknown"; 
    public int points = 0;
    public int level = 1;

    public bool EarnedStar() {
        return (points / level) > 1000;
    }
}
```

Ezek lesznek a mezők alapértelmezett értékei de bármely konstruktor felülírhatja szükség szerint.

```csharp
class Score
{
    public string name = "Unknown";
    public int points;
    public int level = 1;
    
    public Score()
    {
        name = "Mystery";
    }

    public bool EarnedStar() {
        return (points / level) > 1000;
    }

}
```

A `points` mező az alapértelmezett `int` értéket __0__-t veszi fel. A `level` mező az incializálás miatt `1` értéket kap. `name` először `Unknown` értéket kap, majd `Mystery` értékkel frissül.

A mező típusát nem írhatjuk le `var`-ral, ahogy a paramétereket sem. Ezt kötelező megadni.

### A név elrejtése és a `this` kulcsszó

Térjünk vissza a rossz egybetűs változónevekhez:

```csharp
 public Score(string n, int p, int l)
{
    name = n;
    points = p;
    level = l; 
}
```

A `Score` osztály konstruktorában elérhetjük az `n`, `p`, `l` változókat és a `name`, `points`, `level` változókat. De ezek a rövid nevek nem túl jók. Általában az `n`, `p` és `l` változókat `name`, `points`, `level` neveztem volna el. Viszont ebben az esetben ugyanazokat a neveket használnám kétszer. A C# nyelv engedélyezi ezt, de nem ajánlott. De lássuk, mi történik, ha mégis ezt tesszük:

```csharp
 public Score(string name, int points, int level)
{
    name = name;
    points = points;
    level = level; 
}
```

Ha egy olyan utasítást írunk, mint a `name = name;`, akkor mindkét `name` ugyanarra az értékre utal - _ami gyakorlatilag a konstruktor bemeneti paramétere._ Ez a kód nem csinál semmi mást, mint hogy ugyanazt az értéket adja vissza ugyanannak a változónak. Az __osztály__ `name` tulajdonsága még mindig elérhető lenne, de a paraméter, aminek ugyanaz a neve, eltakarja azt. Ezt hívjuk név elrejtése (_name hiding_).

Ennek a problémának a megoldására két lehetőség van. Az egyik, hogy más neveket adunk a változóknak. Ezt csináltuk a példában, de a választott nevek nem voltak túl jók. Egy sokkal jobb megoldás a C#-ban, hogy az aláhúzás jelet (`_`) teszünk a tulajdonság neve elé:

```csharp
class Score
{
    public string _name;
    public int _points;
    public int _level;

    public Score(string name, int points, int level)
    {
        _name = name;
        _points = points;
        _level = level;
    }
}
```

Az aláhúzások lehetővé teszik, hogy hasonló neveket használjunk és egyértelműen megkülönböztessük a mezőket a helyi változóktól és paraméterektől. Az aláhúzások használata annyira elterjedt, hogy ezek a konvenciók más programozási nyelvekben is használatosak és néhány programozó átviszi őket a C# világába, mert ismerősek. Az, hogy mit választunk, sokkal kevésbé fontos, mint az, hogy következetesek legyünk. Nem akarunk `name`, `myPoints`, `level_` nevű mezőket és `_name`, `points` és `my_level` nevű konstruktorparamétereket.

A második megoldás a név elrejtésére a `this` kulcsszó. A `this` kulcsszó olyan, mint egy speciális változó, amely mindig az aktuális objektumra utal. Segítségével közvetlenül elérhetjük a mezőket, függetlenül attól, hogy milyen neveket használtunk a helyi változók és paraméterek számára:

```csharp
class Score
{
    public string name;
    public int points;
    public int level;
    
    public Score(string name, int points, int level)
    {
        this.name = name;
        this.points = points;
        this.level = level;
    } 
}
```

Mindhárom paraméter elrejti az azonos nevű mezőket, de még mindig elérhetjük őket a `this` kulcsszó használatával. A `this` kulcsszó lehetővé teszi számunkra, hogy egyértelmű neveket használjunk. Ez az megközelítés szintén népszerű a C# programozók körében.

### Más konstruktorok hívása a `this` kulcsszóval

Néha előfordul, hogy egy konstruktorban használt kódrészletet szeretnénk felhasználni egy másik konstruktorban is. De nem tudjuk egyszerűen meghívni a konstruktort a `new` kulcsszó nélkül, mert akkor egy új objektumot hoznánk létre a már meglévő mellett, ami nem lenne jó. Ha azt akarjuk, hogy egy konstruktor használja egy másik konstruktor kódját, akkor a `this` kulcsszóval hívjuk meg a másik konstruktort:

```csharp
class Score
{
    public string _name;
    public int _points;
    public int _level;

    public Score() : this("Unknown", 0, 1) 
    {
    
    }

    public Score(string name, int points, int level)
    {
        _name = name;
        _points = points;
        _level = level;
    }
}
```

Ez lehetővé teszi, hogy az egyik konstruktor egy másik konstruktort futtasson először, kiküszöbölve a duplikált kódot.

### Az osztály nevének elhagyása

Amikor egy osztály új példányait hozzuk létre és a fordító elég információval rendelkezik ahhoz, hogy tudja, melyik osztályt használjuk, elhagyhatjuk az osztály nevét:

```csharp
Score first = new();
Score second = new("R2-D2", 12420, 15);
```

Ez olyan, mint a `var`, csak az egyenlőségjel másik oldalán. A fordító arra következtethet, hogy a `Score` osztály példányát hozzuk létre, mivel az egy `Score`-típusú változóhoz van rendelve. Ez a funkció akkor a leghasznosabb, ha a típusnevünk hosszú és összetett.