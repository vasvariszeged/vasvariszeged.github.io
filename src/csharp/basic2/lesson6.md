---
icon: fa-solid fa-6
---

# Metódusok

:::note Röviden
- A metódusok lehetővé teszik, hogy elnevezzük és újrahasznosítsuk a kódrészleteket.
- A paraméterek lehetővé teszik a metódusnak, hogy különböző adatokkal dolgozzon minden egyes híváskor.
- A metódusok eredményt állítanak elő visszatérési értékkel.
- Két metódus ugyanazzal a névvel rendelkezhet (_metódus túlterhelés - overload_), ha a paramétereik különbözőek.
- Néhány egyszerű metódust kifejezésként lehet definiálni
:::

Ahogy egyre több eszközt gyűjtöttünk össze a készletünkbe, úgy bővülnek a programjaink is. El kell kezdenünk megtanulni, hogyan kezdjük el rendszerezni a kódunkat. A C#-nak elég sok eszköze van a kódszervezésre, de az első, amit megtanulunk, az a metódus.

Már eddig is használtunk és hoztunk létre metódusokat. Például használtuk a `Console` osztálynak a `WriteLine` metódusát és a `Convert` osztákynak `ToInt32` metódusát is. Minden általunk készített programnak volt egy `Main` metódusa, amely tartalmatza az általunk írt kódot és a programunk belépési pontja.

Most azt fogjuk megvizsgálni, hogyan készíthetünk további metódusokat és hogyan használhatjuk ezt arra, hogy apró és újrafelhasználható elemekre bontsuk a kódunkat.


## Metódus definiálása

Egy új metódus létrehozásához meg kell értenünk, hogy hol és hogyan kell létrehozni. Az alábbi kód ennek egy lehetséges módját mutatja be:

```csharp
static void CountToTen()
{
    for (int current = 1; current <= 10; current++)
        Console.WriteLine(current);
}
```

A `void CountToTen()` sor, a kapcsos zárójelek és az között, minden ami van egy új metódust határoz meg. Egyelőre koncentráljunk erre a `void CountToTen()` sorra. Ez a sor deklarálja vagy létrehozza a metódust és meghatározza, hogyan kell használni.

`CountToTen` a metódus neve. A változókhoz hasonlóan nagy rugalmassággal rendelkezünk az elnevezésében, de a C# programozók többsége __UpperCamelCase__-t használ minden metódusnévhez.

A `void` rész, a név előtt, a metódus visszatérési típusa. Ezzel később részletesebben foglalkozunk. Egyelőre csak annyit kell tudnunk, hogy a `void` azt jelenti, hogy a metódus nem ad vissza eredményt.

Minden metódusdeklaráció tartalmaz egy zárójelbe tett információhalmazt, amelyet a metódus használ. A `CountToTen`-nek nincs szüksége semmilyen információra a feladatának elvégzéséhez, ezért egyelőre üresen hagytuk a zárójeleket.

A deklaráció után következik a metódus törzse, amely tartalmazza az összes kódot, amelynek futnia kell, amikor meghívják. Ebben az esetben a törzs a kapcsos zárójelek és az azok közötti összes utasítás. A múltban használt összes kódot - ciklusok, `if`-ek, `Console.WriteLine` hívások stb. - használhatjuk bármelyik általunk létrehozott metódusban.

:::info Helyi függvények 
A fenti `CountToTen` definíciója a `Program` osztályon belül helyezkedik el. Amikor elkezdünk osztályokat készíteni, szinte minden metódusunk egy osztályban fog elhelyezkedni.
:::

## Metódus hívása

A fenti kódunk definiált egy `CountToTen` metódust, de nem használtuk. Javítsuk ki ezt. Már hívtunk metódusokat korábban, mint például a `Console.WriteLine`, így a szintaxis ismerős kell, hogy legyen:

```csharp
CountToTen();

static void CountToTen()
{
    for (int current = 1; current <= 10; current++)
        Console.WriteLine(current);
}
```

A legjelentősebb különbség, hogy nem tettünk osztálynevet, ahogy azt a `Console.WriteLine`-nál tettük. Mivel bárhonnan hivatkozhatunk rá a fő metódusban.

Fontos megjegyezni, hogy az, hogy a `CountToTen` definíciója a metódus végén található, nem jelenti azt, hogy akkor hívják meg. Csak egy tényleges metódus hívás indítja el a metódust. Egy definíció önmagában nem elegendő ehhez.

Természetesen többször is hívhatjuk az új metódusunkat. A kód újrafelhasználása az elsődleges ok a metódusok használatára.

```csharp
CountToTen();
CountToTen();

static void CountToTen()
{
    for (int current = 1; current <= 10; current++)
        Console.WriteLine(current);
}
```

Most már láthatjuk, hogy mennyire hasznosak a metódusok. Egy csomó utasítást össze tudunk csomagolni egy metódusba és elnevezni. Futtathatjuk, amikor szükségünk van rá. Újrahasználhatjuk anélkül, hogy másolnánk és beillesztenénk.

### A metódusok saját változókat kapnak

A metódusok saját változókat kapnak, amelyekkel dolgozhatnak. Ezáltal nem avatkoznak egy másik metódus adataiba. Több metódus is használhatja ugyanazt a változónevet és nem zavarják egymást:

```csharp
static void Main(string[] args) {
    int current = Convert.ToInt32(Console.ReadLine());

    CountToTen();
    CountToTwenty();
}


static void CountToTen()
{
    for (int current = 1; current <= 10; current++)
        Console.WriteLine(current);
}

static void CountToTwenty()
{
    for (int current = 1; current <= 20; current++)
        Console.WriteLine(current);
}
```

A `CountToTen`, `CountToTwenty` és a `Main` metódus mindegyike rendelkezik egy `current` változóval, de a három változó különbözik egymástól. Mindegyiknek saját memóriahelye van a változónak és nem befolyásolja a többit. Ez a szétválasztás lehetővé teszi, hogy egyszerre csak egy metóduson dolgozzunk anélkül, hogy aggódnánk amiatt, hogy mi történik a többi metódusban. Nem kell egyszerre az egész program működését a fejében tartania.

## Adatok átadása a metódusnak

Ha egy metódusnak adatra van szüksége a feladatához, akkor definiálhatunk speciális változókat, amelyeket paramétereknek nevezünk és ezekben tárolhatjuk az adatokat. A változóktól eltérően, a hívó metódus inicializálja ezeket a változókat, amikor a metódus meghívódik. (_Egyébként a változók, amelyek nem paraméterek - azokat használtuk eddig - helyi változóknak hívják._) A paraméterek rugalmasságot adnak a metódusoknak. 

Korábban definiáltunk egy `CountToTen` és egy `CountToTwenty` metódust. Paraméterekkel mindkettőt helyettesíthetjük egyetlen metódussá. A paramétereket a metódus zárójelei között határozzuk meg:

```csharp
static void Count(int numberToCountTo)
{
    for (int current = 1; current <= numberToCountTo; current++)
        Console.WriteLine(current);
}
```

Ezt a `numberToCountTo` paramétert a metóduson belül használhatjuk, mint bármely más változót. A paramétereket nem kell inicializálnunk a metóduson belül, a hívó metódus inicializálja őket, amikor a metódushívás elkezdődik, úgy, hogy az értékeket (_vagy kiértékelendő kifejezéseket_) zárójelek közé helyezi:

```csharp
Count(10);
Count(20);
```

A hívó metódus által a metódushívásban megadott érték egy argumentum. Tehát az első sorban a __10__ az egy argumentum a `numberToCountTo` paraméterhez. A második sorban a __20__ szintén argumentum. A programozók ezt úgy is nevezhetik, hogy adatokat adnak át a metódusnak. Azt mondhatnák, hogy „_Az első sorban átadjuk a 10-et, a második sorban pedig a 20-at._” Ezzel a kóddal a programunk először __10__-ig, majd utána __20__-ig fog számolni. Ez a `Count` metódus lehetővé teszi, hogy gyakorlatilag bármelyik pozitív számig számoljunk.

Már láttuk ezt a mechanizmust korábban. A `Console WriteLine` metódusának van egy érték paramétere. Amikor meghívjuk a `Console.WriteLine("Hello, World!")` metódust, akkor csak átadjuk a `"Hello, World!"` argumentumot.


### Több paraméter

Egy metódusnak annyi paramétere lehet, amennyire szükségünk van. Ha két darab információra van szükségünk egy feladat elvégzéséhez, akkor két paraméterünk lehet. Ha húsz darab információra van szükségünk, akkor húsz paraméterünk lehet. Ha 200 paraméterre van szükségünk... (_nos, valószínűleg szükségünk van valakire, aki felébreszt minket ebből az álmoból amiben most vagyunk, de meg tudjuk csinálni._) Több mint egy maroknyi paraméter általában azt jelenti, hogy másképpen kell felbontanunk a problémánkat. Elég nehéz megjegyezni, hogy mi mit csinál ennyi paraméterrel...


```csharp
static void CountBetween(int start, int end)
{
    for (int current = start; current <= end; current++)
            Console.WriteLine(current);
}
```

A több paramétert igénylő metódus hívása úgy történik, hogy az értékeket a zárójelben lévő megfelelő helyekre helyezzük, vesszővel elválasztva:

```csharp
CountBetween(20, 30);
```

## Adatok visszaadása

A paraméterek lehetővé teszik, hogy adatokat küldjünk át a meghívott metódusnak, a visszatérési értékek pedig lehetővé teszik, hogy a metódus adatokat küldjön vissza a hívó metódusnak. Egy visszatérési érték lehetővé teszi, hogy a metódus eredményt állítson elő, amikor befejeződik. A múltban már láttunk visszatérési értékeket. Például a két alábbi metódus visszatérési értékeit használjuk:

```csharp
string input = Console.ReadLine();
int number = Convert.ToInt32(input);
```

Ahhoz, hogy egy metódus visszaadjon egy értéket, két dolgot kell tennünk. Először is meg kell adnunk a az adattípusátt, másodszor pedig meg kell adnunk, hogy milyen váltózót adjon vissza:

```csharp
static int ReadNumber()
{
    string input = Console.ReadLine();
    int number = Convert.ToInt32(input);
    return number;
}
```

Ahelyett, hogy `void` visszatérési típus lenne, ez a metódus azt jelzi, hogy `int`-et ad vissza a befejezéskor. Ezután felhasználhatjuk a visszaadott értéket a `ReadNumber` meghívásakor, ahogy korábban is tettük:

```csharp
Console.Write("How high should I count?");
int chosenNumber = ReadNumber();
Count(chosenNumber);

static void Count(int numberToCountTo)
{
    for (int current = 1; current <= numberToCountTo; current++)
        Console.WriteLine(current);
}

static int ReadNumber()
{
    string input = Console.ReadLine();
    int number = Convert.ToInt32(input);
    return number;
}
```

### Adatok korai visszaadása

Egy `return` utasítás egy metódus utolsó sorában gyakori, de egy `return` utasítás bárhol előfordulhat egy metódusban. A metódus utolsó sora előtti visszatérést korai "_visszatérésnek_" vagy korai kilépésnek nevezzük. A korai visszatérés különösen gyakori, ha ciklusokat és elágazásokat használunk a kódodunkban. Az alábbi metódus ismételten kérni fog egy nevet, amíg a felhasználó nem ír be valamilyen tényleges szöveget a puszta _Enter_ leütése helyett:

```csharp
static string GetUserName()
{
    while (true)
    {
        Console.Write("What is your name? "); string name = Console.ReadLine();
        if (name != "") // Empty string
        return name;
        Console.WriteLine("Let's try that again.");
    }
}
```

Amikor egy `return` utasítás elérésre kerül, a végrehajtás folyamta azonnal elhagyja a metódust, attól függetlenül, hogy az a metódus utolsó sora-e vagy sem. Bár a `return` utasítások bárhol előfordulhatnak egy metódusban, minden útvonalnak meg kell határoznia a visszaadott értéket. Azzal, hogy egy nem-`void` visszatérési típust adsz meg, ígéretet teszel egy eredmény előállítására. Ezt az ígéretet be kell tartanod, bármilyen `if` utasításokkal és ciklusokkal is találkozol.

Egy olyan metódus, amelynek visszatérési típusa `void`, azt jelzi, hogy nem állít elő vagy nem ad vissza értéket. Ezek egyszerűen futnak a metódus végéig, `return` utasítások nélkül. Azonban a `void` metódusok is korán visszatérhetnek egy egyszerű `return` utasítással:

```csharp
static void Count(int numberToCountTo)
{
    if (numberToCountTo < 1)
        return;

    for (int index = 1; index <= numberToCountTo; index++) 
        Console.WriteLine(index);
}
```

### Több visszatérési érték?

A C#-ban, mint sok programozási nyelvben, egyszerre nem adhatsz vissza több dolgot. De ez a korlátozás rosszabbnak hangzik, mint amilyen. Többféle módon is kikerülhetjük. Hamarosan látni fogjuk, hogyan csomagolhatunk több adatot egyetlen változóba, kezdve a tuple-ökkel, folytatva az osztályokkal. Bár technikailag csak egyetlen elemet adhatunk vissza.

## Metódus túlterhelés

Minden metódusnak, amit létrehozol, egyedi nevet kell adnod, ami leírja, mit csinál. Azonban néha előfordul, hogy két metódus lényegében ugyanazt a feladatot végzi, csak kissé eltérő paraméterekkel. Két metódus neve megegyezhet, amíg a paraméterlistáik különbözőek. A név megegyezést __metódus túlterhelés__-nek nevezzük.

Egy jó példa a `Console` osztály `WriteLine` metódusa, amelynek sok túlterhelése van. Ez teszi lehetővé, hogy a következő működjön:

```csharp
Console.WriteLine("Welcome to my evil lair!");
Console.WriteLine(42);
```

Van egy `WriteLine` verzió, amelynek egy `string` paramétere és egy, amelynek egy `int` paramétere van.

Amikor a fordító egy túlterhelt metódus hívásával találkozik, ki kell találnia, hogy melyik túlterhelést kell használnia. Ezt a folyamatot túlterhelés feloldásnak nevezik. Ez egy bonyolult téma, tele árnyalatokkal a trükkös helyzetekhez, de az egyszerű verzió az, hogy általában meg tudja mondani, hogy melyiket akarod a típusok és az argumentumok száma alapján. Amikor írjuk a `Console.WriteLine(42)`-t, a fordító a `WriteLine` verziót választja, amelynek egyetlen `int` paramétere van.

A `Console.WriteLine`-nek összesen __18__ különböző túlterhelése van. A legtöbbnek egyetlen paramétere van, mindegyik más típusú (`string`, `int`, `float`, `bool`, _stb._), de van egy túlterhelés, amelynek nincs paramétere (`Console.WriteLine()`), ami csak a következő sorra lép. A metódusnév összes túlterhelésének halmazát metóduscsoportnak nevezzük.

## Metódusok kifejezésekkel

Néhány metódus olyan egyszerű, hogy a metódus lényege elveszik a meghatározásának módjában. Például nézzük meg ezt a `DoubleAndAddOne` metódust:

```csharp
static int DoubleAndAddOne(int value)
{
    return value * 2 + 1;
}
```

Ha egy metódust egy kifejezéssel le tudunk írni, akkor van egy egyszerűbb módja is annak megírásának:

```csharp
int DoubleAndAddOne(int value) => value * 2 + 1;
```

Ebben a formátumban nem kell kapcsos zárójelet és `return` utasítást használnunk, csak a `=>` jelet és a kifejezést, amit ki akarunk számolni és a végére egy pontosvesszőt. A `DoubleAndAddOne` két változata ugyanazt csinálja. Az első változatnak blokkteste van, a másodiknak meg kifejezésteste. A `=>` jel azt jelenti, hogy most jön egy kifejezés. Ezt a jelet már láttuk a `switch` kifejezéseknél is és még fogjuk is.

Ha több utasításra van szükségünk, akkor blokktestet kell használnunk. A következő példa bár rövid, de nem írható le kifejezéssel:

```csharp
static void PrintTwice(string message)
{
    Console.WriteLine(message);
    Console.WriteLine(message);
}
 
```

Sok C# programozó előnyben részesíti a kifejezéseket, ha lehetséges, mert rövidebbek és könnyebben érthetőek - _legalábbis ha már megbarátkoztál a kifejezésszintaxissal_.

## XML Dokumentáció

Az eddigiekben megtanultuk, hogyan adjunk hozzá megjegyzéseket a kódunkhoz a `//` és a `/* ... */` jelekkel. Most nézzük meg egy másik lehetőséget.

A metódusok segítenek nekünk olyan kódot írni, amit mások is könnyen használhatnak. Vannak olyan kódok, amiket sokan használnak, akár a világ másik felén is. A `Console` és a `Convert` ilyenek. Vannak olyan eszközök, amik átnézik a C# kódunkat és összegyűjtik a metódusainkhoz és más dolgokhoz tartozó megjegyzéseket, hogy dokumentációt készítsenek róluk. Ahhoz, hogy ezek az eszközök jól működjenek, a megjegyzéseinket egy bizonyos formában kell írnunk, amit az eszközök felismernek és megértenek. Erre valók az __XML__ dokumentációs megjegyzések.

Az __XML__ dokumentációs megjegyzések használatának legegyszerűbb módja az, ha a metódusunk neve előtti sorba beírunk három perjelet (`/`): `///`. Ha ezt megcsináljuk, a Visual Studio készít nekünk egy több soros megjegyzést, ami egy sablon, amit ki tudunk tölteni. Például így néz ki egy egyszerű __XML__ dokumentációs megjegyzés a `Count` metódushoz:

```csharp
/// <summary>
/// Counts to the given number, starting at 1 and including the number provided.
/// </summary>
static void Count(int numberToCountTo)
{
    for (int index = 1; index <= numberToCountTo; index++) 
        Console.WriteLine(index);
}
```

Ezek a dokumentációs megjegyzések __XML__ alapúak, ezért így néznek ki. Ha nem ismered az __XML__-t, érdemes utánanézned. Ha kitöltjük ezeket a megjegyzéseket, akkor az eszközök használni tudják őket a dokumentációhoz, beleértve a Visual Studio-t is.

