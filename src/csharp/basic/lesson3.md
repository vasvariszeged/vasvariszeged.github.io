---
icon: fa-solid fa-3
---

# Hello World: Az első programunk

:::note Röviden
Az új projektek általában egy sablonból generálódnak.
- Egy C# program belépési pontján vagy __main__ metódusánál kezdi meg a futását.
- Egy teljes __Hello World__ program így néz ki: `Console.WriteLine("Hello, World!");`
- Az utasítások egyszerű parancsok a számítógép számára, egymás után futnak le.
- Kifejezések lehetővé teszik, hogyan definiálj egy értéket, amelyet a program futása közben más elemekből számol ki.
- Változók lehetővé teszik, hogy adatokat tároljunk későbbi használatra.
- A `Console.ReadLine()` amit a felhasználó a konzolablakban gépel, visszaadja.
:::

Amikor elkészítjük első programunkat C# nyelven, egy egyszerű programmal kezdünk, amit __Hello World__-nek hívnak. Ez a klasszikus első program minden új nyelvben és a legkisebb értelmes program, amit készíthetünk. Egy pillantást enged a nyelv szerkezetére és megerősíti, hogy az _IDE_ telepítve van és működik. 

:::info A Hello World a klasszikus első program, amit el kell készítenünk és ha bárhol máshol kezdenénk, a programozás istenei mérgesértődnének. Mi ezt nem akarjuk! 
:::


## Új projekt létrehozása

Egy C# projekt két dolog kombinációja. Az első, a C# forráskód - _a C# nyelven írt utasítások, amelyeket a számítógépnek kell futtatnia._ A második, a konfiguráció - a számítógépnek adott utasítások, amelyek segítségével a számítógép tudja, hogy hogyan fordítsa le a C# kódot a számítógép által futtatható bináris utasítássá. 
Mindkettő egyszerű szövegfájlokban található a számítógépen. A C# forráskódfájlok a `.cs` kiterjesztést használják. A projekt konfigurációja a `.csproj` kiterjesztést használja.

De a legtöbb C# program egy sablonból történő generálással kezdődik. A sablonok szabványos kiindulópontok, segítenek a konfiguráció helyes beállításában az adott projekttípusokhoz és adnak némi kezdő kódot. Mi egy sablont fogunk használni a projektjeink létrehozásához.

:::warning Ha most kísértésbe esnénk, hogy ezt a részt átugorjuk és majd valahogy kitaláljuk, inkább ne! Itt számos buktató lehet, ezért érdemes figyelmet fordítanunk erre a részre is.
:::

Nyissuk meg a Visual Studiot, hogy láthassuk az alábbi indítóképernyőt:

![](/assets/images/vasvari/csharp/vs-launch.png)


Kattintsunk a jobb alsó sarokban található __Create a new project__ gombra. Ezzel az új projekt létrehozása oldalra lép:

![](/assets/images/vasvari/csharp/create-new-project.png)

Sokféle sablon közül választhatunk és lehet, hogy a listánk nem pontosan egyezik a fentiekkel. Ezért keressünk olyan C# sablont, hogy __Console Application__.


:::warning Figyelem! A C# projekt neve Console Application legyen. Győződjünk meg róla, hogy nem a Visual Basic projektet kapjuk (ellenőrizzük a leírás alatti címkéket). Győződjünk meg arról is, hogy nem a Console Application (.NET Framework) projektet kapjuk, amely egy régebbi sablon. Amennyiben nem találjuk a fent pirosan keretezett sablont, futtassuk újra a telepítőt és adjuk hozzá a megfelelő Workload-ot.
:::

Mi jelenleg mindig ezt a __Console Application__ sablont fogjuk használni, de ahogy haladunk a C# világában, más sablonokat is fogunk használni. Miután kiválasztottuk a C# __Console Application__ sablont, kattintsunk a __Next__ gombra, hogy továbblépjünk arra a lapra, ahol megadhatjuk az új program részleteit:

![](/assets/images/vasvari/csharp/configure-new-project.png)

Mindig adjunk a projektünknek beszédes nevet. Két hét múlva már nem fogunk emlékezni arra, hogy mit csinált a `ConsoleApp12`.

A hely kiválasztásánál válasszunk egy olyan helyet, amit később is könnyen megtalálunk. (_Az alapértelmezett hely is jó, de nem egy könnyű elérésű hely, ezért jegyezzük meg, hogy hol van_).

Van egy jelölőnégyzet is, a _programok és a projekt_ ugyanabba a könyvtárba való helyezéséhez is __"Place solution and project in the same directory"__. Kis projektek esetén javaslom ennek a jelölését. Nagyobb programok (_solution-ök_) több projektből állhatnak.

Nyomjuk meg a __Next__ gombot az aktuális keretrendszer kiválasztásához az utolsó oldalon:

![](/assets/images/vasvari/csharp/additional-information.png)

:::warning Figyelem! Győződjünk meg róla, hogy a .NET 6.0 (vagy újabb) verziót választottuk, hogy kihasználhassuk az összes bemutatott C# funkciót.
:::

Miután kiválasztottuk a keretrendszert, kattintsunk a __Create__ gombra a projekt létrehozásához.


## A Visual Studio rövid bemutatása

Egy új projekt létrehozása után először a Visual Studio ablakába pillanthatunk be:

![](/assets/images/vasvari/csharp/hello-world.png)

A Visual Studio rendkívül sok lehetőségeket kínál, így sok mindent felfedezhetünk. Nem fogunk a Visual Studio minden részletébe belemenni, de néhány alapvető elemet tárgyalunk majd.

Jelenleg három dolgot kell tudnunk ahhoz, hogy elkezdhessük:

- Először is, a bal oldali nagy szövegszerkesztő a Kódszerkesztő (__Code Editor__). A legtöbb időt itt fogjuk tölteni a munkával.

- Másodszor, a jobb oldalon található a __Solution Explorer__. Ez egy nézetet mutat a kódunkról és az ahhoz szükséges konfigurációiról. Kezdetben csak kevés időt fogunk itt tölteni, de ahogy elkezdünk nagyobb programokat készíteni, egyre többet fogjuk majd használni.

- Harmadszor, a programjainkat az alábbi __Standard Toolbar__ látható részével fogjuk futtatni:

![](/assets/images/vasvari/csharp/standard-toolbar.png)

## A program fordítása és futtatása

Az új projekt létrehozása a sablonból, egy teljes programot eredményezett. Mielőtt elkezdenénk elemezni, futassuk le.

A számítógép áramköre nem képes közvetlenül futtatni a C# kódot. Csak alacsony szintű bináris utasításokat futtat, amelyek 1-ekből és 0-ákból állnak. Tehát mielőtt a számítógép futtatná a programunkat, azt valamivé kell átalakítanunk, amit képes lefuttatni. Ezt az átalakítást fordításnak hívjuk és egy speciális program a fordító végzi. A fordító átveszi a C# kódodat és a projekt konfigurációját, majd létrehozza a végleges bináris utasításokat, amelyeket a számítógép közvetlenül futtatni tud. Az eredmény vagy egy __.exe__, vagy egy __.dll__ fájl, amit a számítógép le tud futtatni.

A Visual Studio megkönnyíti a program lefordítását, majd az azonnali futtatását a következők bármelyikével: 
- (a) válasszuk a főmenüben a __Debug > Start Debugging__ lehetőséget, 
- (b) nyomjuk meg az __F5__ billentyűt, vagy 
- (c) nyomjuk meg az eszköztáron a lentebb látható zöld start gombot:

![](/assets/images/vasvari/csharp/standard-toolbar.png)

A program futtatásakor egy fekete-fehér konzolablak jelenik meg:

![](/assets/images/vasvari/csharp/overview-console-window.png)

Nézzük meg az első sort:

```prompt
Hello, World!
```

Ez az, amit a programunknak kellett tennie! (_A szöveg többi része csak arról tájékoztat, hogy a program befejeződött és utasításokat ad arra, hogyan ne jelenítsük meg a jövőben. Ezt a szöveget egyelőre figyelmen kívül hagyhatjuk._)


## Szintaxis és szerkezet

Most, hogy elkészítettük és futtattuk első C# programunkat, itt az ideje, hogy megvizsgáljuk a C# programok alapvető elemeit. Ebben a részben számos dolgot érintünk, de mindegyikre részletesebben is kitérünk a későbbiekben. 

Minden programozási nyelvnek megvan a maga különálló struktúrája - saját szabályrendszere, amely leírja, hogyan kell az adott nyelven működő programot készíteni. Ezt a szabályrendszert nevezzük a nyelv szintaxisának.

Nézzük meg a kódszerkesztő ablakban az alábbi szöveget:

```csharp
Console.WriteLine("Hello, World!");
```

:::info // 
Lehet, hogy egy zöld szöveges sort is láthatunk, amely két perjellel (`//`) kezdődik. Ez egy megjegyzés. A kommentekről később fogunk beszélni, de egyelőre figyelmen kívül hagyhatjuk vagy akár törölhetjük is ezt a sort.
:::

Ezt az egysoros programot most alaposan elemezni fogjuk. Bármilyen rövid is, nagyon sokat elárul a C# programozás működéséről.

### Stringek és Literálok

Először is, a __"Hello, World!"__ rész a megjelenített szöveg. Megváltoztatjuk ezt a szöveget, hogy a program valami mást jelenítsen meg helyette.

A programozás világában gyakran használjuk a `string` szót a szövegre való utaláshoz. Ezt literálnak, pontosabban `string` literálnak nevezzük. A literal egy olyan kódrészlet, amely valamilyen konkrét értéket határoz meg, pontosan úgy, ahogyan az le van írva. Minden idézőjelbe tett szöveg `string` literál lesz. Az idézőjelek nem részei a szövegnek. Csak azt jelzik, hogy hol kezdődik és hol végződik a `string` literál. Később látni fogjuk, hogyan lehet más típusú literálokat, például szám literálokat létrehozni.

### Azonosítók

A kódban található két másik fontos dolog a `Console` és a `WriteLine`. Ezeket hivatalosan azonosítóknak - _vagy lazábban, neveknek_ - nevezzük. Az azonosító lehetővé teszi, hogy hivatkozzunk egy már létező kódelemre. A `Console` és a `WriteLine` mindkettő már létező kódelemre utal.

### Hierarchikus felépítés

A `Console` és a `WriteLine` között egy pont (`.`) karakter található. Ezt a hozzáférési operátornak vagy pont operátornak nevezik. A `Console` és a `WriteLine`-hoz hasonló kódelemek hierarchikusan vannak szervezve. Néhány kódelem más kódelemek belsejében található. A pont operátor lehetővé teszi, hogy lefelé haladjunk a hierarchiában.

Ezt a hierarchikus szerveződést az alábbi diagram szemlélteti:

![](/assets/images/vasvari/csharp/diagram1.png)

A kódtérképek segíthetnek átlátni program átfogó szerkezetét. Ugyanígy segíthet megérteni, hogy egy adott azonosítót mikor használhatunk. A fordítónak meg kell határoznia, hogy egy azonosító melyik kódelemre utal. Ezt a folyamatot névkötésnek nevezzük. Habár `Console`-t igen, a `WriteLine`-t nem használhatjuk önállóan. A `WriteLine` azonosító csak akkor érhető el, ha a hozzá tartozó `Console`-lal együtt használjuk.

### Osztályok és metódusok

Lehet észrevetted már, hogy a fenti kódtérképen más ikonokat használtam a `Console` és a `WriteLine` esetében. A kódelemek különböző típusúak lehetnek például: a `Console` egy osztály, míg a `WriteLine` egy metódus. A későbbiekben hosszasan fogunk beszélni mind a metódusokról, mind az osztályokról, de kezdjük néhány alapvető definícióval, hogy el tudjunk indulni.

Egyelőre gondoljunk az osztályokra úgy, mint olyan entitásokra, amelyek egyetlen problémát oldanak meg, vagy egy adott feladatot/szerepet látnak el. Olyan, mint egy személy egy csapatban. A teljes munkaterhelés sok emberre oszlik és mindegyikük elvégzi a saját feladatát és másokkal együtt dolgozik az átfogó cél elérése érdekében. A `Console` osztály feladata a konzol ablakkal való interakció. Ezt jól végzi, de ne kérjünk tőle semmi mást - _mert csak a konzolablakkal tud dolgozni_.

Az osztályok elsősorban két dologból állnak:

- _(1)_ a munkájukhoz szükséges adatokból és, 
- _(2)_ az általuk elvégezhető feladatokból. 

Ezek a feladatok metódusok formájában jelennek meg és a `WriteLine` pont egy jó példa erre. A metódus egy névvel rendelkező, újrafelhasználható kódblokk, amelynek futtatását kérhetjük. A `WriteLine` feladata az, hogy szöveget a konzolablakban saját sorában jelenítse meg.

Egy metódus futtatásának kérését metódushívásnak nevezzük. Ezeket a metódushívásokat úgy hajtjuk végre, hogy a metódus neve után zárójeleket használunk.

Egyes metódusoknak feladatuk elvégzéséhez adatokra van szüksége. A `WriteLine` pont így működik. Tudnia kell, hogy milyen szöveget jelenítsen meg. Ezt az adatot a metódushíváshoz úgy adjuk meg, hogy a zárójelek közé helyezzük, ahogyan azt a `WriteLine("Hello, World!")` esetében láttuk. 

Egyes metódusoknak viszont nincs szükségük semmilyen extra adatra, míg másoknak több adatra van szükségük. Ezekre hamarosan példákat fogunk látni. Néhány metódus a befejezéskor adatot is visszaadhat, lehetővé téve az adatok áramlását a metódus hívása és végrehajtása között.

### Namespaces (névterek)

Minden metódus olyan tárolókban van jelen, mint egy osztály, de még a legtöbb osztály is más tárolókban, úgynevezett névterekben van benne. A névterek pusztán kódszervezési eszközök, de hasznosak, ha több száz vagy több ezer osztállyal van dolgunk. A `Console` osztály a `System` nevű névtérben él. Ha ezt hozzáadjuk a kódtérképünkhöz, az így néz ki:

![](/assets/images/vasvari/csharp/diagram2.png)

A kódban hivatkozhattunk volna a `Console`-ra a névtér nevén keresztül. A következő kód funkcionálisan megegyezik a korábbi kódunkkal:

```csharp
System.Console.WriteLine("Hello, World!");
```

A C# 10 funkcióit és az általunk választott projektsablont használva kihagyhatjuk a `System`-et. A C# régebbi verzióiban viszont figyelembe kellett volna vennünk. A második mód egy speciális sorral történik, amit `using` direktívának nevezünk. Ha régebbi C# kóddal találkozol az interneten vagy máshol észreveheted, hogy a legtöbb régi C# kód fájl így kezdődik:

```csharp
using System;
```

Ezek a sorok azt mondják a fordítónak: _"Ha egy azonosítóval találkozol, keresd meg ebben a névtérben."_. Ez lehetővé teszi, hogy egy osztálynevet használjunk anélkül, hogy a névtér nevét elé tennénk. A C# 10-ben azonban a fordító automatikusan keresni fog a `System` és egy maroknyi más, rendkívül gyakori névtérben anélkül, hogy ezt le kellene írnunk.

Rövid távon szinte teljesen figyelmen kívül hagyhatjuk a névtereket. A névterek a kódszerkezet fontos elemei, de most még egy ideig nem kell közvetlenül ezekkel foglalkoznunk.

### Az alaposztály könyvtár

A kódtérképünk messze nem teljes. A `System`, a `Console` és a `WriteLine` csak egy apró szelete a teljes kódgyűjteménynek, amelyet `Base Class Library`-nek (`BCL`) nevezünk. A `Base Class Library` sok névteret tartalmaz, sok osztállyal és sok taggal. Az alábbi kódtérkép ezt egy kicsit jobban kifejti:

![](/assets/images/vasvari/csharp/diagram3.png)

Hatalmas! Ha lerajzolnánk a teljes diagramot, az hosszabb lenne, mint ez az egész tananyag!

Az alaposztály-könyvtár minden C#-programot alapvető építőelemekkel lát el. Nem fogunk az alaposztály-könyvtár minden egyes metódusával és osztályával foglalkozni, de a leglényegesebb részeit fogjuk majd tárgyalni.

### Program és Main

Az általunk írt kód is új kódelemeket ad hozzá. Még a mi egyszerű __Hello World__ programunk is új kódelemeket ad hozzá, amelyeket egy kódtérképen mutathatunk meg:

![](/assets/images/vasvari/csharp/diagram4.png)

A fenti kódtérképen a `Main` ikonján egy kis fekete nyíl is jelzi, hogy a `Main` a program belépési pontja. A belépési pont vagy `Main` metódus az a kód, amely automatikusan lefut, amikor a számítógép futtatja a programot. Más metódusok csak akkor futnak, ha a `main` metódus hívja meg őket, mint ahogyan a __Hello World__ programunk teszi a `WriteLine` segítségével.

:::info A C# korai időszakában kódot kellett írni a Program és a Main meghatározásához. Ma már ritkán van erre szükség, de ha akarod, megteheted.
:::

### Utasítások

A __Hello World__ programunkban minden karaktert figyelembe vettünk, kivéve a pontosvesszőt (`;`) a végén. A teljes `Console.WriteLine("Hello, World!");` sort utasításnak nevezzük. Az utasítás egyetlen lépés vagy parancs, amelyet a számítógép futtat. A legtöbb C# utasítás pontosvesszővel végződik.

Ez a konkrét utasítás arra utasítja a számítógépet, hogy kérje meg a `Console` osztályt, hogy futtassa le a `WriteLine` metódusát és adja meg a __"Hello, World!"__ szöveget extra információként. Ez a _"kérj egy dolgot, hogy csináljon egy dolgot"_ típusú utasítás gyakori, de nem az egyetlen. 

Az utasítások a C# programok alapvető építőkövei. Arra utasítjuk a számítógépet, hogy utasítások sorozatát hajtsa végre egymás után. A legtöbb program sok utasításból áll, amelyek felülről lefelé és balról jobbra haladva kerülnek végrehajtásra.

Valami, ami meglepheti az új programozókat, az az, hogy mennyire pontosnak kell lennünk, amikor utasításokat adunk a számítógépnek. Az emberek többsége képes homályos utasításokat megérteni és a hiányosságokat kiküszöbölni. A számítógépek nem rendelkeznek ilyen képességgel.

Tehát ha valami váratlant csinálna a számítógép, az nem azt jelenti, hogy hibázott. Inkább azt, hogy amit elképzeltünk és amit ténylegesen parancsoltunk, nem egyezett meg. Új programozóként könnyű azt gondolni: _"A számítógép nem azt csinálja, amit mondtam neki!"_.  Ehelyett próbáld meg arra képezni a gondolkodásmódodat, hogy: _"Miért ezt csinálta a számítógép ahelyett, amit vártam?"_. Ezzel a gondolkodásmóddal jobb programozóvá válsz.

### Whitespace

A C# figyelmen kívül hagyja a whitespace karaktereket (szóközök, tabulátorok, újsorok), amíg meg tudja állapítani, hol végződik és hol kezdődik a következő kód. Ez egy kritikus pont a kód írásával kapcsolatban törekedj arra, hogy a kódod érthető legyen.

## A Hello World-ön túl

Az alapok megértése után készítsünk néhány összetettebb programokat.

### Több utasítás

Egy C# program egyszerre egy utasítást futtat le a fájlban megjelenő sorrendben. Ha több utasítást is beillesztünk a programba, akkor az több dolgot is végrehajt. A következő kód három sornyi szöveget jelenít meg:

```csharp
Console.WriteLine("Hi there!");
Console.WriteLine("My name is Dug.");
Console.WriteLine("I have just met you and I love you.");
```

Minden egyes sor a `Console` osztályt kéri, hogy más adatokkal hajtsa végre a `WriteLine` metódust. Ha a programban szereplő összes utasítás befejeződött, a program véget ér.

### Kifejezések

A kifejezések olyan kódrészletek, amelyeket a programnak fel kell dolgoznia vagy ki kell értékelnie, hogy meghatározza az értéküket. A matematika világában ugyanezt a szót használjuk olyan kifejezésekre, mint például __3 + 4__ vagy __-2 × 4.5__. A kifejezések leírják, hogyan állíthatunk elő egy értéket kisebb elemekből. A számítógép egy kifejezés segítségével futás közben kiszámíthat egy értéket.

A C# programok nagy mértékben használják a kifejezéseket. Bárhol, ahol egy értékre van szükségünk, oda helyezhetünk egy kifejezést is. Nézzünk egy példát, ahol ezt használjuk:

```csharp
Console.WriteLine("Hi User");
```

De helyette használhatunk kifejezést is ami így nézne ki:

```csharp
Console.WriteLine("Hi " + "User");
```

A `"Hi " + "User"` kód egy kifejezés, nem egyetlen érték. Amint a program fut, ki fogja értékelni a kifejezést annak értékének meghatározásához. Ez a kód azt mutatja, hogy a `+` jelet hogyan használhatod két szöveg összekombinálásához `("Hi User")`.

### Változók

A változók az adatok tárolói. Azért hívjuk őket változóknak, mert tartalmuk a program futása közben változhat. A változók lehetővé teszik az adatok tárolását későbbi felhasználásra.
Mielőtt egy változót használnánk, jeleznünk kell, hogy szükségünk van rá. Ezt nevezzük a __változó deklarálásának__. Ennek során nevet kell adnunk a változónak és meg kell adnunk a típusát. Ha már létezik egy változó, akkor a változóban elhelyezhetünk adatokat a későbbi felhasználás céljából. Ezt nevezzük __hozzárendelésnek__, vagyis értéket rendelünk a változóhoz. Ha ezt megtettük, akkor a változót később kifejezésekben használhatjuk. Mindez az alábbiakban látható:

```csharp
string name;
name = "User";
Console.WriteLine("Hi " + name);
```

Az első sorban deklaráljuk a változót egy típussal és egy névvel. A változó típusa `string`, a neve pedig `name`. Ez a sor biztosítja, hogy legyen egy hely a szöveg tárolására, amelyre a `name` azonosítóval hivatkozhatunk.

A második sor a `"User"` értéket adja hozzá.

A változót az utolsó sorban használjuk. A program futása során a `"Hi " + name` kifejezést úgy értékeli ki, hogy lekérdezi a `name` változó aktuális értékét, majd kombinálja azt a `"Hi "` értékével. 

Bármi, aminek neve van, megjeleníthető a kódtérképen és ez alól ez a változó sem kivétel. A következő kódtérkép megmutatja ezt a változót a `Main` függvényen belül, egy doboz ikon használatával:

![](/assets/images/vasvari/csharp/diagram5.png)

A későbbiekben megnézzük, miért lehet hasznos, ha vizualizáljuk, hogy a változók hol helyezkednek el a kódtérképen.

Észreveheted, hogy amikor `string`-et írsz be a szerkesztőbe, az más színűre változik. Ez azért van, mert a `string` egy kulcsszó. A kulcsszó egy olyan szó, amelynek különleges jelentése van a programozási nyelvben. A C# nyelvnek több mint 100 kulcsszava van! Idővel mindet meg fogjuk nézni, ahogy haladunk.

### Szöveg beolvasása a konzolról

Néhány metódus eredményt állít elő annak a feladatnak a részeként, amire tervezték. Ez az eredmény tárolható egy változóban vagy felhasználható egy kifejezésben. Például a `Console` rendelkezik egy `ReadLine` metódussal, amely szöveget kér be a felhasználótól, amíg az __Enter__ billentyűt meg nem nyomja. Így használják:

```csharp
Console.ReadLine();
```

A `ReadLine` nem igényel semmilyen információt a munkájához, ezért a zárójelek üresek. A visszaküldött szöveg azonban tárolható egy változóban, vagy felhasználható egy kifejezésben:

```csharp
string name;
Console.WriteLine("What is your name?");
name = Console.ReadLine();
Console.WriteLine("Hi " + name);
```

Ez a kód már nem jeleníti meg mindig ugyanazt a szöveget. Megvárja, amíg a felhasználó beírja a nevét, majd név szerint köszönti.
Amikor egy metódus értéket állít elő, a programozók azt mondják, hogy visszaadja az értéket. Így mondhatjuk, hogy a `Console.ReadLine()` azt a szöveget adja vissza, amelyet a felhasználó beírt.

## Fordító: hibák és figyelmeztetések

Van néhány dolog amivel érdemes tisztába lennünk, mielőtt továbblépünk: _fordítóhibák_, _hibakeresés_ és _build_ konfigurációk. Ezek inkább arról szólnak, hogy a programozók hogyan építik fel a C# programokat, mint magáról a nyelvről.

C# programok írása közben néha véletlenül olyan kódot is írhatunk, amelyet a fordító nem tud értelmezni. A fordító nem lesz képes a kódunkat átalakítani olyanná, amit a számítógép megértene.

Amikor ez történik, két dolgot fogunk látni. Ha megpróbáljuk futtatni a programunkat, megjelenik a __Hibalista__ ablak, amely felsorolja a fordító által észlelt problémákat. Egy hibára duplán kattintva a problémás sorba juthatunk. A hibás kódot piros szaggatott vonallal aláhúzva is látni fogjuk. Lehet, hogy ez még gépelés közben is megjelenik.

Néha a probléma és annak megoldása is nyilvánvaló de van amikor nem. Ha figyelemmel kísérjük a kódunkat, már találkozhattunk a fordítóhiba kevésbé ijesztő testvérével: __a fordító figyelmeztetésével__ (_compiler warning_). A fordító figyelmeztetése azt jelenti, hogy a fordító képes működésre bírni a kódot, de gyanítja, hogy hibás lehet. 

Például amikor olyasmit teszünk, mint `string name = Console.ReadLine();` észrevehetünk egy figyelmeztetést, amely így hangzik: _"Converting null literal or possible null value to a non-nullable type."_ A kódnak még egy zöld hullámos jelzése is van, hogy kiemelje a potenciális problémát.

Ez konkkrétan arra próbál figyelmeztetni, hogy a `ReadLine` nem feltétlenül ad vissza semmilyen választ. A hiányzó értékekkel való foglalkozást majd később fogjuk megtanulni. Most figyelmen kívül hagyhatjuk ezt a konkrét fordítói figyelmeztetést.

### Hibakeresés (Debugging)

A fordító számára érthető kód megírása csak az első lépés. Fontos, hogy a program ne csak szintaktikailag helyes legyen, hanem azt is tegye, amit elvárunk tőle. Amikor a program nem viselkedik úgy, ahogy vártuk és megpróbáljuk kitalálni, mi lehet az oka, majd módosítunk rajta, azt hibakeresésnek nevezzük.


### Build konfigurációk

A fordító a forráskódot és a konfigurációs adatokat használja fel a számítógép által futtatható szoftver előállításához. A C# világában a konfigurációs adatok különböző build konfigurációkba vannak rendezve. Minden egyes konfiguráció más-más információt szolgáltat a fordítónak arról, hogy hogyan építse fel a dolgokat. Alapértelmezés szerint két konfiguráció van definiálva és ritkán van szükség többre. Ezek a konfigurációk a `Debug` konfiguráció és a `Release` konfiguráció. A kettő többnyire ugyanaz.

A fő különbség az, hogy a `Release` konfigurációban be vannak kapcsolva az optimalizációk, amelyek lehetővé teszik a fordító számára, hogy bizonyos beállításokat végezzen, hogy a kód gyorsabban fusson anélkül, hogy megváltoztatná a kód működését. Ha például deklarálsz egy változót, de soha nem használod, az optimalizált kód ki fogja törölni. Az optimalizálatlan kód viszont benne hagyja. A `Debug` konfigurációban ez ki van kapcsolva. 

A kód hibakeresése során ezek az optimalizálások megnehezíthetik a problémák felkutatását. A program készítésekor általában jobb, ha a `Debug` konfigurációval futattjuk. Amikor készen állunk arra, hogy megosszuk a programunkat másokkal, fordítsuk le helyette a `Release` konfigurációval.

Azt, hogy melyik konfigurációt használjuk, a legördülő listából kell kiválasztanunk, ami a zöld nyíl gomb mellett található a programunk futtatásakor:

![](/assets/images/vasvari/csharp/standard-toolbar.png)