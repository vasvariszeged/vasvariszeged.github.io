---
icon: fa-solid fa-2
---

# IDE beszerzése

:::note Röviden
A programozás bonyolult dolog, de egy integrált fejlesztői környezet (_IDE_) segítségével könnyebbé tehetjük a programozói életetünket. A __Visual Studio__ a legelterjedtebb _IDE_ a __C#__ programozáshoz. A __Visual Studio Community__ ingyenes, számos funkcióval rendelkezik és kezdőknek ajánlott. Más __C#__ _IDE_-k is léteznek, például a _Visual Studio Code_ és a _JetBrains Rider_.
:::

A modernkori programozás összetett és kihívást jelentő feladat, de a programozónak nem kell egyedül küzdenie.
A programozók széles körű eszközgyűjteménnyel dolgoznak, hogy segítsék őket a munkájuk elvégzésében. Az integrált fejlesztőkörnyezet (_IDE_) olyan program, amely ezeket az eszközöket egyetlen alkalmazásban integrálja és a programozási folyamat egyszerűsítésére szolgál. Az _IDE_ a programozást úgy segíti, mint a _Microsoft Word_ a szövegszerkesztést vagy az _Adobe Photoshop_ a képszerkesztést. A legtöbb programozó egy _IDE_-t használ a munkája során.

Többféle __C#__ fejlesztőkörnyezet közül lehet választani (_vagy akár anélkül is dolgozhatunk, hogy közvetlenül a nyers eszközöket használjuk, de ezt nem javaslom..._). Most megnézzük a legnépszerűbb __C#__ _IDE_-ket és megbeszéljük azok előnyeit és hátrányait.

Sajnálatos módon minden _IDE_ más és mindegyiket nem tudom bemutatni. Mellesleg ez az anyag a __C#__ nyelvre összpontosít, nem egy adott IDE-re, a feladatokat a Visual Studio segítségével oldjuk majd meg. Viszont nyugodtan használhatsz más _IDE_-t is. A __C#__ nyelv maga ugyanaz, függetlenül attól, hogy melyik _IDE_-t választod, de némi különbséget tapasztalhatsz használat során. Általában az eljárás intuitív és ha a kísérletezés nem vezet eredményre, a _Google_ általában segíthet. :blush:


## Az IDE-k összehasonlítása

Több kiemelkedő IDE közül választhat.


### Visual Studio


A Microsoft _Visual Studio_ a legtöbb __C#__-fejlesztő által használt, jól bevált IDE. A _Visual Studio_ még a __C#__-nál is régebbi, bár azóta jelentősen sokat fejlődött.

Az itt tárgyalt IDE-k közül ez a legfunkciógazdagabb és leghatékonyabb, bár van egy jelentős hátránya: _Windows_-on működik, de _Mac_-en és _Linux_-on nem. :pensive:

A _Visual Studio_ három különböző kiadásban érhető el:

- Community, 
- Professional, 
- Enterprise. 

A _Community_ és a _Professional_ kiadások ugyanazzal a szolgáltatáskészlettel rendelkeznek, míg az _Enterprise_ kibővített funkciókkal rendelkezik néhány extra költség mellett.
A _Community Edition_ és a _Professional Edition_ között csak az árban és a licencben van különbség. A _Visual Studio Community Edition_ __ingyenes__ diákoknak, nyílt forráskódú projekteknek és magánszemélyeknek, akár kereskedelmi felhasználásra is.

:::info A nagyvállalatok nem tartoznak ebbe a kategóriába és meg kell vásárolni a Professional-t. Ha 250-nél több számítógéppel rendelkezik, éves szinten több mint 1 millió dollárt keres, vagy ötnél több Visual Studio felhasználója van, akkor a Professionalért kell fizetnie. De ez most szinte biztosan nem érinti minket.
:::

A __Visual Studio Community__ kiadása az általam ajánlott Windowst használó új __C#__ programozók számára.

### Visual Studio Code

A Microsoft __Visual Studio Code__ egy __lightweight__ szerkesztő (_nem teljes körű IDE_), amely _Windows_, _Mac_ és _Linux_ rendszereken egyaránt működik. A __Visual Studio Code__ ingyenes, viszont nem rendelkezik ugyanazzal a kiterjedt funkciókészlettel, mint a _Visual Studio_ és néhány helyen a korlátozott a funkciókészlete. A __Visual Studio Code__ valószínűleg a legjobb választás számodra, ha a _Visual Studio_ nem opció (például _Linux_-on és _Mac_-en), különösen, ha van tapasztalatod a parancssor használatában.

### JetBrains Rider

Az egyetlen _nem-Microsoft IDE_ ezen a listán a __JetBrains__ által készített _Rider IDE_. A _Rider_ viszonylag új, de a __JetBrains__ nagy tapasztalattal rendelkezik más nyelvekhez készült _IDE_-k készítésében. A _Rider_-nek nincs ingyenes verziója, a legolcsóbb opció évente mintegy 190 euróba kerül. Azonban gazdag funkciókkal rendelkezik és több platformon használható. Ha van pénzed rá, ez jó választás lehet bármely operációs rendszeren.

### Más IDE-k

Vannak más _IDE_-k is, de a legtöbb __C#__ programozó a fentiek egyikét használja. Más _IDE_-k általában sok funkciót nem tartalmaznak, nem jól támogatottak és kevesebb online segítséggel és dokumentációval rendelkeznek. De ha találsz egy másik _IDE_-t, ami tetszik, használd nyugodtan azt.

## Visual Studio telepítése

A _Visual Studio_ Community Edition letölthető a https://visualstudio.microsoft.com/downloads oldalról. A __Visual Studio 2022__-es vagy újabb verzióját érdemes letölteni ahhoz, hogy összes funkciót használni tudjuk majd. Vegyük figyelembe, hogy ez nem magát a _Visual Studio_-t, hanem a _Visual Studio_ telepítőjét tölti le. A __Visual Studio Installer__ segítségével testre szabhatjuk, hogy mely komponenseket telepítse. Ha bármikor módosítani szeretnénk a rendelkezésre álló funkciókat, futtassuk újra a telepítőt és végezzük el a kívánt módosításokat.

Amint elkezded telepíteni a _Visual Studio_-t, meg fogja kérdezni, hogy mely összetevőket szeretnéd telepíteni:

![](/assets/images/vasvari/csharp/vs-installer-workloads.png)

Miután mindent feltelepítettünk, a _Visual Studio_ egy hatalmas, mindenre képes óriás lesz. Nem szükséges az összes lehetséges _Visual Studio_ funkció. Valójában most még csak egy kis szeletre lesz szükségünk abból, amit a _Visual Studio_ kínál.

Telepíthetünk mindent is, ami érdekesnek tűnik, de most csak egy elemet kell telepítenünk. A __Workloads__ fülön keressük meg azt, amit __.NET desktop development__-nek hívnak és kattintsunk rá annak engedélyezéséhez. Ha elfelejtettük ezt megtenni, mindig újra futtathatjuk a _Visual Studio_ Installer-t és megváltoztathatjuk, hogy milyen összetevőket telepítsünk.

:::warning Figyelem! Ügyeljenünk arra, hogy a megfelelő Workloads-okat telepítsük. Ha nem így teszünk, nem fogjuk tudni használni az összes C# funkciót.
:::

Miután telepítettük a _Visual Studio_-t, nyissuk meg azt. A _Visual Studio_ meg fogja kérni, hogy jelentkezzünk be egy Microsoft-fiókkal, még az ingyenes _Community Edition_ esetében is. Nem muszáj bejelentkeznünk, de lehetővé tesz néhány funkciót - _például a beállítások szinkronizálását több eszközön keresztül_.

Ha először telepítjük a _Visual Studio_-t, akkor lehetőséget kapunk a fejlesztési beállítások - _billentyűparancsok és színtéma_ - kiválasztására is. Bármit is választunk, később is megváltoztathatjuk. Akkor tudjuk, hogy készen vagyunk, amikor elérjük az alábbi indítóképernyőt:

![](/assets/images/vasvari/csharp/vs-launch.png)