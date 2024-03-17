---
icon: fa-solid fa-5
---

# Az információ elrejtése

:::note Röviden
- Az információ elrejtése azt jelenti, hogy a részleteket nem tesszük hozzáférhetővé a külső kódnak.
- Az osztálytagok hozzáférhetőségét a `public` vagy `private` kulcsszavakkal határozhatjuk meg, attól függően, hogy melyiket akarjuk használni.
- Absztrakció.
- A harmadik hozzáférhetőségi szint az `internal`.
:::

Most pedig az objektumorientált programozás két alapvető fogalmát fogjuk megnézni: az __információ elrejtést__ és az __absztrakciót__.

Láttuk, hogy az __encapsuláció__ segítségével egy objektum felelős lehet a rendszer egy részéért, saját adatait speciális változókban tárolhatja, amelyeket mezőknek nevezünk és saját képességeinek listáját adhatja meg metódusok formájában.

Második elvünk az __encapsuláció__ egyszerű kiterjesztése (_néhányan ugyanannak tekintik_):

:::tip Objektumorientált elv #2

Információelrejtés - Csak az objektum maga férhet hozzá közvetlenül az adataihoz.
:::

Hogy ez miért fontos, tekintsük az alábbi kódot:

```csharp
class Rectangle
{
    public float width;
    public float height;
    public float area;

    public Rectangle(float width, float height, float area)
    {
        this.width = width;
        this.height = height;
        this.area = area;
    } 
}
```

Ez talán jó kezdés is lehetne, de van egy probléma. Egy téglalap területét a szélességének és a magasságának szorzatával kapjuk. Tehát ha a téglalap _szélessége: 1_ és _magassága: 1_ akkor a téglalap _területe: 1_. Viszont a téglalap jelenlegi meghatározásunk alapján ez is lehetséges:

```csharp
Rectangle rectangle = new Rectangle(2, 3, 200000);
```
 
Nem lenne jó, ha betudnánk vezetni ezt a fajta szabályt! A terület paraméter eltávolítása a konstruktorból, megakadályozza, hogy valaki (_beleértve minket is, amikor három hét múlva elfelejtjük a részleteket_ 🙄) véletlenül értelmetlen területet adjon meg. Magát a területet pedig a konstruktoron belül fogjuk kiszámolni:

```csharp
class Rectangle
{
    public float width;
    public float height;
    public float area;

    public Rectangle(float width, float height)
    {
        this.width = width;
        this.height = height;
        this.area = width * height;
    } 
}
```

Ez biztosítja, hogy az új téglalapok mindig a megfelelő területtel legyenek létrehozva. De még mindig van egy problémánk:


```csharp
Rectangle rectangle = new Rectangle(2, 3);
rectangle.area = 200000;
Console.WriteLine(rectangle.area);
```

Ez a kód helyesen számolja ki a területet kezdetben, de nem akadályozza meg semmi abban, hogy valaki szándékosan vagy véletlenül megváltoztassa az értékét. Kívülről beavatkozhatunk és olyan módon manipulálhatjuk a téglalap adatait ahogy csak akarjuk viszont ez nem megengedett.

Ha a `Rectangle` osztálynak elrejtenénk az adatait, akkor kívülről nem tudnánk logikátlan vagy ellentmondó állapotokba hozni. Természetesen néha szükségünk lesz kívülről elérni a téglalap szélességét, magasságát és területét és talán meg is akarjuk majd változtatni a méretét, de mindez megvédhető metódusokkal.

## A `public` és `private` módosítók

Amikor elkezdtünk osztályokat készíteni, minden mezőnkre és metódusunkra beállítottuk a `public`-ot. Ez a problémánk gyökere mert lehetővé teszi, hogy a kívülről elérjük azokat.

Az osztály minden tagjának - _tehát a mezőknek és metódusoknak egyaránt_ - van egy hozzáférési szintje. Ez a szint határozza meg, hogy honnan érhető el az adott tag. A `public` kulcsszó a tagot __nyilvános hozzáférhetőséggel__ ruházza fel - ami azt jelenti, hogy bárhol használható.

A `public` helyett használhatnánk a `private` kulcsszót is, amely a tagot __privát hozzáférhetőséggel__ látja el - csak az osztályon belül használható. A `public` és a `private` kulcsszavak mind __hozzáférési módosítóknak nevezhetők__, mert megváltoztatja az adott tag hozzáférési szintjét. Ha a mezőinket priváttá tesszük, akkor a kívülről közvetlenül nem érjük el:

```csharp
class Rectangle
{
    private float width;
    private float height;
    private float area;

    public Rectangle(float width, float height)
    {
        this.width = width;
        this.height = height;
        this.area = width * height;
    } 
}
```

Az adataink mostantól `pirvate`-ok. Az osztályon belül továbbra is használhatjuk a mezőket, mivel a konstruktor inicializálja őket. A tagok priváttá tétele biztosítja, hogy kívülről ne tudjuk megváltoztatni azokat. Továbbá ne tudjunk létre hozni értelmetlen téglalapokat sem.

__De most az ellenkező problémánk van.__ Elzártuk az összes hozzáférést ezekhez a tagokhoz. A kívülről valamilyen láthatóságot és talán némi irányítást szeretnénk a téglalapok felett. Minden mezőnket privátnak jelöltük, így már ezt sem tudjuk megtenni:

```csharp
Rectangle rectangle = new Rectangle(2, 3);
Console.WriteLine(rectangle.area); // DOESN'T COMPILE!
```

Ha a kívülről elszeretnénk érni a téglalap területét, akkor azt jelenti, hogy a mezőt mindenképpen nyilvánossá kell tennünk? 

__Általában nem.__ 

Ahelyett, hogy közvetlen hozzáférést engednénk a mezőinkhez, __metódusokon__ keresztül biztosítunk ellenőrzött hozzáférést - _ha kívülről például elszeretnénk érni a téglalap szélességét, magasságát és területét_. Ezért ezeket a metódusokat hozzáadjuk a `Rectangle` osztályhoz:

```csharp
public float GetWidth() 
{
    return width;
}

public float GetHeight() 
{
    return height;
}

public float GetArea() 
{
    return area;
}

/* 
* public float GetWidth() => width;
* public float GetHeight() => height;
* public float GetArea() => area;
*/

```

A mezők privátok maradnak és a kívülről továbbra is megkaphatjuk a kérdéseinkre a válaszokat, anélkül, hogy korlátlanul hozzáférhetnénk az adatokhoz.

Ha a kívülről szükségünk van arra is, hogy megváltoztassuk a téglalap méreteit, akkor ezt is megoldhatjuk metódusok segítségével:

```csharp
public void SetWidth(float value)
{
    width = value;
    area = width * height;
}

public void SetHeight(float value)
{
    height = value;
    area = width * height;
}
```

Ésszerű megoldani, hogy tudjuk frissítseni a szélességet és a magasságot, ezért ezeknek a tagokhoz létrehoztunk metódusokat. 

Viszont nem akarjuk, hogy a közvetlenül módosíthassuk a területet, ezért azt kihagytuk. Szándékosan olyan neveket választottam, amelyek `Get`-tel és `Set`-tel kezdődnek. 

A metódusok amelyek lekérik egy mező jelenlegi értékét __gettereknek__, amelyek új értéket rendelnek egy mezőhöz, __settereknek__ hívjuk. 

A fenti kódból látható, hogy ezek a metódusok többet tesznek lehetővé, mint a mező új értékének beállítása. Mind a `SetWidth`, mind a `SetHeight` frissíti a téglalap területét, hogy az összhangban maradjon a szélességével és magasságával.

Ezek a változtatások a következő `Rectangle` osztályt eredményezik:


```csharp
class Rectangle
{
    private float width;
    private float height;
    private float area;

    public Rectangle(float width, float height)
    {
        this.width = width;
        this.height = height;
        this.area = width * height;
    }
    
    public void SetWidth(float value)
    {
        width = value;
        area = width * height;
    }

    public void SetHeight(float value)
    {
        height = value;
        area = width * height;
    }
        
    public float GetWidth() 
    {
        return width;
    }
    
    public float GetHeight() 
    {
        return height;
    }
    
    public float GetArea() 
    {
        return area;
    }
}
```

Ezekkel a változtatásokkal, ha egy téglalapot akarunk létrehozni és megváltoztatni a méretét, akkor az új metódusokat használjuk:

```csharp
Rectangle rectangle = new Rectangle(2, 3);
rectangle.SetWidth(3);
Console.WriteLine(rectangle.GetArea());
```

Az információ elrejtése lehetővé teszi egy objektum számára, hogy megvédje az adatait. Az objektum állapotának lekérdezéséhez vagy módosításához nem megfelelő a közvetlen hozzáférés, ehelyett a `getter` vagy `setter` nevű metódusokat kell használnunk.
Így az objektumok betartják azokat az elveket, amelyeket az adataikra alkalmaznak, mint például a téglalap területének kiszámítása.

Az információ elrejtése lényegesen bonyolultabb - a `rectangle.SetWidth(3);` utasítás nehezebben érthető, mint a `rectangle.width = 3;`. Ez a megoldás jelenleg csak ideiglenes.

### Az alapértelmezett láthatóságot `private`

Minden osztálytagunkhoz `public` vagy `private` értéket adtunk de ez nem feltétlenül szükséges. Teljesen elhagyhatjuk ezeket ha nem adunk meg láthatóságot akkor az osztály tagjai `private`-ok lesznek.

A legtöbb esetben azt javaslom, hogy ne hagyjuk el. Mindig tegyük ki a `public` vagy a `private` láthatósági szinteket minden egyes osztálytagra. Ez arra kényszerít, hogy átgondoljuk, mennyire legyen elérhető az adott tag.

### Mikor használjuk a `private` és `public` láthatóságot?

Két gyakori irányelv segít nekünk abban, hogy eldöntsük, mikor legyenek tagok `private`-ok vagy `public`-usak.

1. Az első, amit korábban érintettünk, az az, hogy egy osztálynak védenie kell az adatait. A mezők szinte mindig privátoknak kell lenniük. Vannak kivételek, de ezek ritkák.

2. A második irányelv az, hogy a tagoknak mindig annyira kell hozzáférhetetleneknek lenniük, amennyire csak lehetséges, miközben az osztálynak még mindig képesnek kell lennie a betöltött szerepének teljesítésére. 

:::tip Például mondhatnánk, hogy...
A legutóbbi `Rectangle` osztálydefiníciónkban a `getter`-ek és `setter`-ek a téglalap reprezentálásának részei. Ezért ésszerű, hogy ezek mindegyike __publikus__ legyen, de jó pár alkalommal volt olyan kódsorunk, ami így nézett ki: `area = width * height;`. Készíthetnénk egy `UpdateArea` nevű metódust, amely tartalmazza ezt a logikát, majd három különböző helyen hívhatnánk meg (a konstruktorban, a `SetWidth`-ben és a `SetHeight`-ben). 

Az `UpdateArea` privát vagy publikus legyen? 

Az `area` frissítése nem olyasmi, amit a kívülről kifejezetten kérnünk kellene. Mivel a kívülről nem kell hozzáférni, ez az új metódus valószínűleg jobb lenne privát metódusként.
:::

Néha előfordulhat, hogy rossz a hozzáférhetőségi szintet használunk majd de ez a szoftvertervezés része. Viszont később szerencsére ezt megváltoztathatjuk. Könnyebb valamit privátból publikussá tenni, mint fordítva. A kívülről már használhatunk valamit, amit kezdetben publikussá tettünk és azokat el kell majd távolítanunk.

### Láthatósági szintek iránymutatások, nem törvények

Amikor valamit priváttá teszünk, az nem azt jelenti, hogy kívülről teljesen képtelenség használni. Egyedül azt jelzi, hogy a fordító segítségét kérjük annak biztosításában, hogy a privát elemek véletlenül se legyenek hozzáférhetők a kód más részei számára. Fordító hibákat hoz létre, ha megpróbálunk hozzáférni a privát tagokhoz.


## Absztrakció

Egy osztály belső működése nem látható számunkra. Olyan ez, mint egy mobiltelefon belseje, amíg a telefon gombjai és képernyője működik, addig nem érdekel bennünket, hogyan működik a belső áramkör. Az emberi test is ilyen. Nem kell tudnunk, hogyan kapcsolódnak az idegek és az inak, amíg a dolgok megfelelően működnek.

Tehát egy objektum belső működése el van rejtve, így csak a kívánt információkat és funkciókat teszi elérhetővé. Ezáltal a belső folyamatokat szabadon módosíthatjuk anélkül, hogy ez befolyásolná a viselkedését. Ezt a képességet nevezzük __absztrakciónak__, ami az objektumorientált programozás egyik alapelve.


:::tip Objektumorientált elv #3

Az absztrakció révén a belső működés megváltoztatható anélkül, hogy ez hatással lenne a környezetére.
:::

Az absztrakció segít a nagy problémák kisebb részekre bontásában, így minden egyes részen külön-külön dolgozhatunk. Nem kell emlékeznünk a teljes program minden egyes részletére.

Illusztráljuk egy példával. A `Rectangle` osztály korábbi verzióiban volt egy mező a téglalap területére, amely minden alkalommal frissült, amikor a szélesség vagy a magasság változott. Ezt azonban megváltoztathatjuk úgy, hogy a területet csak szükség esetén számítsuk ki és a mezőt a programunk többi részének befolyásolása nélkül elhagyhatjuk:

```csharp
class Rectangle 
{
    private float width;
    private float height;

    public Rectangle(float width, float height)
    {
        this.width = width;
        this.height = height;
    }
    
    public float GetWidth() 
    {
        return width;
    }
    
    public float GetHeight() 
    {
        return height;
    }
    
    public float GetArea() 
    {
        return this.width * this.height;
    }

    public void SetWidth(float value)
    {
        this.width = value;
    }

    public void SetHeight(float value)
    {
        this.height = value;
    }    
}
```

A `area` mező eltűnt és a `SetWidth`, `SetHeight`, valamint a konstruktor már nem számítja ki a területet. Ehelyett a terület kiszámítása igény szerint történik, amikor valaki meghívja a `GetArea` metódus. Kívülről nem fog látszódni ez a változtatás. 

## Típusú hozzáférhetőségi szintek és az `internal`

A típusokhoz hozzáférési szinteket lehet (__és kell is__) rendelni:

```csharp{1}
public class Rectangle
{
// ...
}
```

A `private` hozzáférési szint nem alkalmazható és nem is releváns ilyen esetben, mivel az korlátozzná a használatot. Elsőre úgy tűnhet, hogy csak a `public` hozzáférési szint marad, de létezik egy másik lehetőség is: az `internal`. 

A `public` és az `internal` közötti különbség elsőre nem tűnik nagynak. A `public` hozzáférési szinttel rendelkező elemek mindenhol elérhetők, beleértve más projekteket is, míg az `internal` csak a saját projektünkben használható. Gondoljunk például a __.NET Base Class Library__ összes kódjára, mint a `Console` és a `Convert`. Ez a kód úgy lett kialakítva, hogy mindenhol újra használható legyen. A `Console` és a `Convert` mindkettő `public`.

Ha létrehozol egy új típust (osztályt, enumerációt, stb.) és úgy érzed, hogy ez támogató szerepet tölt be - amelyek segítik a többi osztály munkáját, de nem olyan, hogy a programon belül más osztály is ismerjen -, akkor az `internal` hozzáférési szintet választhatjuk erre a célra.

:::note Jelenleg önálló programokat fejlesztünk. Nem hoztunk létre semmit, amit más projektektől elvárnánk, hogy újrahasználjanak. Elképzelhető, hogy azt gondolod: "Nem várom el, hogy bárki más vagy én is újrahasználjam mindezt. Miért kellene bármit is publická tennem?"
:::

Ez egy ésszerű gondolkodásmód és néhányan azt javasolnák, hogy mindent tegyél `internal`-lá, amíg valamit kifejezetten nem tervezel újrahasználni. Ez egy logikus megközelítés és használhatod, ha úgy döntesz. De a legtöbb C# programozó egy másik megközelítést követ:

Három lépésben kell eldöntenünk a megosztás vagy nem megosztás kérdését:
1. Megosztod-e a teljes projektet?
2. Megosztod-e az adott típusdefiníciót?
3. Megosztod-e a specifikus tagot, mint egy mezőt vagy metódust?

A C# programozók általában ezeket a különböző szinteket elkülönítve vizsgálják. 

Az `internal` említésére azért került sor, mert ez az alapértelmezett hozzáférési szint egy típus esetében, ha nincs explicit módon megadva. Az tanácsom az, hogy mindig írd ki a szándékolt hozzáférési szintet, ahelyett, hogy a defaultra hagynád. Ez arra kényszerít, hogy kialakítsd a szokást, hogy tudatosan döntsd el az elérési szinteket, ahelyett, hogy a véletlenre bíznád. Ha később úgy döntesz, hogy néhány hónap múlva inkább a defaultot használod, akkor abbahagyhatod az explicit megadást.