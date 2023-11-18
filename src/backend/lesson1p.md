---
icon: fa-regular fa-clipboard
category:
  - Java alapjai
---

# Tervezési minták

A tervezési minták a szoftvertervezésben gyakran előforduló problémák tipikus megoldásai. Olyanok, mint előre elkészített tervrajzok, amelyeket testre szabhatsz, hogy megoldj egy visszatérő tervezési problémát a kódodban.

Nem találhatsz csak úgy egy mintát, és másolhatod be a programodba, ahogyan azt a készen kapható függvények vagy könyvtárak esetében megteheted. A minta nem egy konkrét kódrészlet, hanem egy általános koncepció egy adott probléma megoldására. Követheti a minta részleteit, és olyan megoldást implementálhat, amely megfelel a program realitásának.

A mintákat gyakran összekeverik az algoritmusokkal, mivel mindkét fogalom bizonyos ismert problémák tipikus megoldásait írja le. Míg egy algoritmus mindig olyan műveletek egyértelmű halmazát határozza meg, amelyekkel valamilyen célt lehet elérni, addig egy minta egy megoldás magas szintű leírása. Ugyanannak a mintának a kódja két különböző programra alkalmazva eltérő lehet.

Az algoritmus analógiája akár egy recept: mindkettőnek egyértelmű lépései vannak a cél eléréséhez. Ezzel szemben egy minta inkább olyan, mint egy tervrajz: látható, hogy mi az eredmény és annak jellemzői, de a végrehajtás pontos sorrendje már csak rajtunk múlik.


## Miből áll a minta?

A legtöbb mintát nagyon formálisan írják le, hogy az emberek sokféle kontextusban reprodukálni tudják őket. Itt vannak azok a szempontok, amelyek általában szerepelnek egy minta leírásában:

- A minta szándéka röviden leírja a problémát és a megoldást.
- A motiváció tovább magyarázza a problémát és a megoldást, amelyet a minta lehetővé tesz.
- Az osztályok szerkezete bemutatja a minta egyes részeit és azok kapcsolatát.
- Kódpélda valamelyik népszerű programozási nyelven, amely megkönnyíti a minta mögötti gondolat megértését.

Egyes mintakatalógusok egyéb hasznos részleteket is felsorolnak, például a minta alkalmazhatóságát, a megvalósítás lépéseit és a más mintákkal való kapcsolatokat.

## A minták története

Ki találta fel a mintákat? Ez egy jó, de nem túl pontos kérdés. A tervezési minták nem homályos, kifinomult fogalmak - épp ellenkezőleg. A minták tipikus megoldások az objektumorientált tervezés gyakori problémáira. Amikor egy megoldás újra és újra megismétlődik különböző projektekben, valaki végül nevet ad neki, és részletesen leírja a megoldást. Alapvetően így fedeznek fel egy mintát.

A minták fogalmát először __Christopher Alexander__ írta le A _Pattern Language_ című könyvében: Towns, Buildings, Construction. A könyv a városi környezet tervezésének "nyelvét" írja le. Ennek a nyelvnek az egységei a minták. Ezek leírhatják, hogy milyen magasak legyenek az ablakok, hány szintje legyen egy épületnek, mekkora zöldterületeknek kell lenniük egy környéken, és így tovább.

Az ötletet négy szerző vette fel: __Erich Gamma__, __John Vlissides__, __Ralph Johnson__ és __Richard Helm__. 1994-ben kiadták a __Design Patterns: Elements of Reusable Object-Oriented Software__ (_Programtervezési ​minták: Újrahasznosítható elemek objektumközpontú programokhoz_) című könyvükben, amelyben a tervezési minták koncepcióját a programozásra alkalmazták. A könyv 23 mintát tartalmazott, amelyek az objektumorientált tervezés különböző problémáit oldották meg, és nagyon gyorsan bestsellerré vált. Hosszú neve miatt az emberek "a négyes banda könyvének" kezdték nevezni, amit hamarosan egyszerűen _"a GoF[^first]-könyvre"_ rövidítettek.

Azóta több tucat más objektumorientált mintát is felfedeztek. A _"minta-megközelítés"_ más programozási területeken is nagyon népszerűvé vált, így ma már rengeteg más minta is létezik.


## Miért tanuljak mintákat?

Az igazság az, hogy akár évekig is dolgozhatsz programozóként anélkül, hogy egyetlen mintát is ismernél. Sokan éppen ezt teszik. De még ebben az esetben is előfordulhat, hogy úgy valósítasz meg néhány mintát, hogy nem is tudsz róla. Akkor miért töltenél időt a megtanulásukkal?

- A tervezési minták olyan eszköztárat jelentenek, amely a szoftvertervezés során felmerülő gyakori problémákra kínál kipróbált és tesztelt megoldásokat. Még ha soha nem is találkozik ezekkel a problémákkal, a minták ismerete akkor is hasznos, mert megtanítja, hogyan oldhat meg mindenféle problémát az objektumorientált tervezés elveinek felhasználásával.

- A tervezési minták olyan közös nyelvet határoznak meg, amelyet Ön és csapattársai a hatékonyabb kommunikáció érdekében használhatnak. Mondhatod, hogy _"Ó, erre használj egy Singletont"_, és mindenki meg fogja érteni a javaslatod mögött rejlő ötletet. Nem kell elmagyarázni, mi az a `singleton`, ha ismeri a mintát és a nevét.



## A minták kritikája

Úgy tűnik, csak a lusta emberek nem kritizálták még a tervezési mintákat. Nézzük meg a legjellemzőbb érveket a minták használata ellen.

### A tervezési minták hiányzó nyelvi jellemzők

Általában akkor merül fel a minták iránti igény, amikor az emberek olyan programozási nyelvet vagy technológiát választanak, amelyből hiányzik a szükséges absztrakciós szint.

Például a _Stratégia_ minta a legtöbb modern programozási nyelvben egy egyszerű névtelen (_lambda_) függvénnyel megvalósítható.

### Hatástalan megoldások

A minták olyan megközelítéseket próbálnak rendszerezni, amelyeket már széles körben használnak. Ezt az egységesítést sokan dogmának tekintik, és _"betű szerint"_ implementálják a mintákat, anélkül, hogy a projektjük kontextusához igazítanák őket.

### Indokolatlan használat

:::warning Ha csak egy kalapácsod van, minden szögnek tűnik.

:::

Ez a probléma sok kezdőt kísértenek, akik csak most ismerkednek a mintákkal. Miután megismerték a mintákat, megpróbálják mindenhol alkalmazni őket, még olyan helyzetekben is, ahol egyszerűbb kód is megfelelne.


## A minták osztályozása

A tervezési minták összetettségük, részletességük és a tervezett rendszer egészére való alkalmazhatóságuk mértéke alapján különböznek egymástól. Szeretem az útépítés analógiáját: egy kereszteződést biztonságosabbá lehet tenni néhány közlekedési lámpa telepítésével, vagy egy teljes többszintes csomópont építésével, földalatti átjárókkal a gyalogosok számára.

A legalapvetőbb és legalacsonyabb szintű mintákat gyakran idiómáknak[^second] nevezik. Ezek általában csak egyetlen programozási nyelvre vonatkoznak.

A legáltalánosabb és legmagasabb szintű minták az architektúrális minták. A fejlesztők gyakorlatilag bármilyen nyelven megvalósíthatják ezeket a mintákat. Más mintákkal ellentétben ezek a minták egy egész alkalmazás architektúrájának megtervezésére használhatók.

Ezenkívül minden minta kategorizálható a szándékuk vagy céljuk szerint. Ez a könyv a minták három fő csoportját tárgyalja:

Az __alkotási minták__ olyan objektumalkotási mechanizmusokat biztosítanak, amelyek növelik a rugalmasságot és a meglévő kód újrafelhasználását.

A __strukturális minták__ elmagyarázzák, hogyan lehet objektumokat és osztályokat nagyobb struktúrákba összerakni, miközben ezek a struktúrák rugalmasak és hatékonyak maradnak.

A __viselkedési minták__ gondoskodnak a hatékony kommunikációról és az objektumok közötti felelősségek kiosztásáról.


### Alkotói tervezési minták

A kreatív tervezési minták különböző objektum létrehozási mechanizmusokat biztosítanak, amelyek növelik a rugalmasságot és a meglévő kód újrafelhasználását.

## Prototype (Prototípus)
_Más néven: Clone_

### Célkitűzés

A prototype egy olyan tervezési minta, amely lehetővé teszi a meglévő objektumok másolását anélkül, hogy a kódod függne annak osztályaitól.

### Probléma

Tegyük fel, hogy van egy objektumunk, és pontos másolatot szeretnénk készíteni róla. Hogyan csinálnád? Először is létre kell hoznod egy új objektumot ugyanabból az osztályból. Ezután végig kell menned az eredeti objektum összes mezőjén, és át kell másolnod az értékeiket az új objektumba.

Szép! De van egy bökkenő. Nem minden objektum másolható így, mert az objektum néhány mezője privát lehet, és az objektumon kívülről nem látható.

![Egy objektum "kívülről" történő másolása nem mindig lehetséges.](/assets/images/vasvari/prototype-comic-1-en.webp)

Van még egy probléma a közvetlen megközelítéssel. Mivel a duplikátum létrehozásához ismerned kell az objektum osztályát, a kódod függővé válik az osztálytól. Ha az extra függőség nem ijeszt meg, van egy másik csapda is. Néha csak azt az interfészt ismerjük, amelyet az objektum követ, de a konkrét osztályát nem, amikor például egy metódus paramétere minden olyan objektumot elfogad, amely valamilyen interfészt követ.

:::info Interface

A Java nyelvben az interfész (`interface`) egy absztrakt osztályokat definiáló szerkezet, amely csak metódus szignatúrákat tartalmaz, de nincs bennük konkrét implementáció. Az interfészek lehetővé teszik, hogy egy vagy több osztály implementálja őket, és így megvalósítsa az interfészben meghatározott metódusokat. Az interfészek segítenek a kód újrafelhasználhatóságban, a többszörös öröklődés problémáinak elkerülésében és a rugalmasabb programozásban.

Az interfész definiálása a következőképpen történik a Java-ban:

```java
interface MyInterface {
    // Metódus szignatúrák (nincs implementáció)
    void method1();
    int method2(int num1);
}
```

Az interfész definíciója az `interface` kulcsszóval kezdődik, majd a benne deklarált metódusok követik. Az interfészen belül csak metódusokat és konstansokat (alapértelmezett vagy `static final` változókat) lehet deklarálni. Az interfészek nem tartalmaznak attribútumokat (adattagokat).

Az interfészt implementáló osztályok a `implements` kulcsszóval implementálhatják az interfészt:

```java
class MyClass implements MyInterface {

    @Override
    public void method1() {
        // Implementáció
    }

    @Override
    public int method2(int num1) {
        // Implementáció
        return 0;
    }
}
```

Egy osztály több interfészt is implementálhat, és minden interfészben meghatározott metódust meg kell valósítania. Az interfészek segítenek a Java-ban a többes öröklődés szimulálásában, mivel egy osztály csak egy szülőtől örökölhet, de több interfészt is implementálhat.

Az interfészek hasznosak az olyan helyzetekben, amikor több osztály között közös viselkedést szeretnénk definiálni. Az interfészek elősegítik a kód újrafelhasználhatóságát és a programok kiterjeszthetőségét.
:::

### Megoldás

A prototípus minta a klónozási folyamatot a klónozandó objektumokhoz delegálja. A minta egy közös interfészt deklarál minden olyan objektum számára, amely támogatja a klónozást. Ez az interfész lehetővé teszi egy objektum klónozását anélkül, hogy a kódot az adott objektum osztályához kötnénk. Általában egy ilyen interfész csak egyetlen klónozási metódust tartalmaz.

A klónozó metódus végrehajtása minden osztályban nagyon hasonló. A metódus létrehoz egy objektumot az aktuális osztályból, és a régi objektum összes mezőértékét átviszi az újba. Még a privát mezőket is át lehet másolni, mivel a legtöbb programozási nyelv lehetővé teszi, hogy az objektumok hozzáférjenek más, ugyanahhoz az osztályhoz tartozó objektumok privát mezőihez.

A klónozást támogató objektumot prototípusnak nevezzük. Ha az objektumok több tucat mezővel és több száz lehetséges konfigurációval rendelkeznek, a klónozás az alosztályozás alternatívájaként szolgálhat.

![Az előre elkészített prototípusok az alosztályozás alternatívája lehet.](/assets/images/vasvari/prototype-comic-2-en.webp)

A következőképpen működik: létrehozol egy sor objektumot, amelyeket különböző módon konfigurálhatsz. Amikor szükséged van egy olyan objektumra, mint amilyet konfiguráltál, egyszerűen klónozol egy prototípust ahelyett, hogy a semmiből építenél egy új objektumot.

### Való világbeli analógia

A való életben a prototípusokat különböző tesztek elvégzésére használják, mielőtt egy termék sorozatgyártását megkezdenék. Ebben az esetben azonban a prototípusok nem vesznek részt a tényleges gyártásban, ehelyett passzív szerepet játszanak.

![Egy sejt osztódása.](/assets/images/vasvari/prototype-comic-3-en.webp)

Mivel az ipari prototípusok nem igazán másolják önmagukat, a mintához sokkal közelebbi analógia a mitotikus[^third] sejtosztódás folyamata (biológia, emlékszik?). A mitotikus osztódás után egy pár azonos sejt jön létre. Az eredeti sejt prototípusként működik, és aktív szerepet vállal a másolat létrehozásában.

### Hogyan kell megvalósítani?

:::info Ennek a mintának a célja az objektumok klónozása, amikor egy objektumot többször is használni szeretnénk, de nem akarjuk újra és újra létrehozni.
:::

Ebben a példában létrehozunk egy egyszerű osztályt, amit klónozni szeretnénk, és implementáljuk a `Cloneable` interfészt, valamint felülírjuk a `clone` metódust:

```java
public class PrototypeExample implements Cloneable {
    private String data;

    public PrototypeExample(String data) {
        this.data = data;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }

    @Override
    public PrototypeExample clone() {
        try {
            return (PrototypeExample) super.clone();
        } catch (CloneNotSupportedException e) {
            return null;
        }
    }

    public static void main(String[] args) {
        PrototypeExample original = new PrototypeExample("Eredeti adat");
        PrototypeExample clone = original.clone();

        System.out.println("Eredeti objektum adat: " + original.getData());
        System.out.println("Klónozott objektum adat: " + clone.getData());
    }
}
```

Ebben a példában létrehoztuk az `PrototypeExample` osztályt, amely tartalmaz egy `data` nevű adattagot. Az osztály implementálja a `Cloneable` interfészt, majd felülírjuk a `clone` metódust, amely segítségével klónozni tudjuk az objektumot.

A `main` metódusban létrehozunk egy eredeti objektumot, majd klónozunk egy másolatot belőle. Mindkét objektumnak ugyanaz az adattagja, és miután lefuttatjuk a programot, meggyőződhetünk róla, hogy a klónozott objektum az eredeti objektum másolata.


### Előnyök és hátrányok

<i class="fa-solid fa-plus" style="color:green;"></i> Lehetőség van objektumok klónozására anélkül, hogy szorosan kapcsolódnának a konkrét osztályokhoz.

<i class="fa-solid fa-plus" style="color:green;"></i> Megszabadulhatunk a ismétlődő objektum inicializációs kódoktól.

<i class="fa-solid fa-plus" style="color:green;"></i> Kényelmesebben állíthat elő összetett objektumokat.

<i class="fa-solid fa-plus" style="color:green;"></i> Alternatívát kap az öröklés helyett.

<i class="fa-solid fa-minus" style="color:red;"></i> Összetett objektumok klónozása nehézségeket okozhat, ha azok kölcsönösen egymásra hivatkoznak.


## Singleton

![](/assets/images/vasvari/singleton.webp)

### Célkitűzés

A `singleton` egy olyan tervezési minta, amely lehetővé teszi, hogy egy osztálynak csak egy példánya legyen, miközben globális hozzáférést biztosít ehhez a példányhoz.

### Probléma

A `Singleton` minta egyszerre két problémát old meg, ami sérti az [Egyetlen felelősség elvét](https://hu.wikipedia.org/wiki/Egyetlen_felelősség_elve):

1. __Biztosítja, hogy egy osztálynak csak egyetlen példánya legyen.__ Miért akarja bárki is ellenőrizni, hogy hány példánya van egy osztálynak? A leggyakoribb ok erre az, hogy ellenőrizni akarjuk a hozzáférést valamilyen megosztott erőforráshoz - például egy adatbázishoz vagy egy fájlhoz.

_Ez így működik:_ képzeljük el, hogy létrehoztunk egy objektumot, de egy idő után úgy döntöttünk, hogy létrehozunk egy újat. Ahelyett, hogy egy új objektumot kapna, azt kapja, amit már létrehozott.

Vegye figyelembe, hogy ezt a viselkedést lehetetlen egy hagyományos konstruktorral megvalósítani, mivel egy konstruktorhívásnak eleve mindig egy új objektumot kell visszaadnia.

![Az ügyfelek talán észre sem veszik, hogy állandóan ugyanazzal az objektummal dolgoznak.](/assets/images/vasvari/singleton-comic-1-en.webp)

2. __Biztosít egy globális hozzáférési pontot az adott példányhoz.__ Emlékszel azokra a globális változókra, amelyeket néhány alapvető objektum tárolására használtál? Bár nagyon praktikusak, de nagyon nem biztonságosak is, mivel bármely kód felülírhatja a változók tartalmát, és összeomolhat az alkalmazás.

A globális változókhoz hasonlóan a `Singleton` minta is lehetővé teszi, hogy a program bármely pontjáról elérjen egy objektumot. Ugyanakkor megvédi ezt a példányt attól, hogy más kód felülírja.

Ennek a problémának van egy másik oldala is: nem akarjuk, hogy az #1. problémát megoldó kód szétszóródjon a programban. Sokkal jobb, ha egy osztályon belül van, különösen, ha a kód többi része már függ tőle.


:::info Manapság a Singleton minta annyira népszerűvé vált, hogy az emberek akkor is singletonnak neveznek valamit, ha az csak a felsorolt problémák egyikét oldja meg.
:::


### Megoldás

A `Singleton` minden implementációjában közös ez a két lépés:

- Az alapértelmezett konstruktort priváttá kell tenni, hogy más objektumok ne használhassák a new operátort a `Singleton` osztállyal.
Hozzon létre egy statikus metódust, amely konstruktorként működik. A motorháztető alatt ez a metódus meghívja a privát konstruktort, hogy létrehozzon egy objektumot, és egy statikus mezőbe menti azt. A metódus minden következő hívása visszaadja a tárolt objektumot.

- Ha a kódja hozzáfér a `Singleton` osztályhoz, akkor képes meghívni a `Singleton` statikus metódusát. Így amikor ezt a metódust meghívja, mindig ugyanazt az objektumot kapja vissza.

### Való világbeli analógia

A kormány kiváló példája a `Singleton` mintának. Egy országnak csak egy hivatalos kormánya lehet. Függetlenül a kormányt alkotó személyek személyazonosságától, a _"X kormány"_ cím egy globális hozzáférési pont, amely azonosítja a felelős személyek csoportját.


### Hogyan kell megvalósítani?


1. Adjunk hozzá egy privát statikus mezőt az osztályhoz a `singleton` példány tárolására.

2. Deklaráljunk egy nyilvános statikus metódust a `singleton` példány kinyeréséhez.

3. Implementáljuk a "lusta inicializálást"[^fourth] a statikus metóduson belül. Az első híváskor egy új objektumot kell létrehoznia, és azt a statikus mezőbe helyeznie. A metódusnak minden további híváskor mindig ezt a példányt kell visszaadnia.

4. Az osztály konstruktora legyen privát. Az osztály statikus metódusa továbbra is képes lesz meghívni a konstruktort, de a többi objektum nem.

5. Menjünk át az kódon, és a `singleton` konstruktorának minden közvetlen hívását cseréljük le a statikus létrehozási metódus hívására.


Az adatbázis kapcsolat kezelése egy gyakori példa a `Singleton` tervezési minta használatára. Íme egy példa egy `Singleton` osztályra az adatbázis kapcsolat létrehozásához Java-ban:

```java
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DatabaseConnection {
    private static DatabaseConnection instance;
    private Connection connection;

    private DatabaseConnection() {
        try {
            // Adatbázis kapcsolat inicializálása
            String url = "jdbc:mysql://localhost:3306/mydatabase";
            String username = "username";
            String password = "password";
            connection = DriverManager.getConnection(url, username, password);
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public static DatabaseConnection getInstance() {
        if (instance == null) {
            instance = new DatabaseConnection();
        }
        return instance;
    }

    public Connection getConnection() {
        return connection;
    }
}
```

Ebben a példában a `DatabaseConnection` osztály felelős az adatbázis kapcsolat létrehozásáért és az egyetlen példányt tartalmazza. A `Singleton` osztály, így garantált, hogy csak egyetlen adatbázis kapcsolat példány jön létre az alkalmazásban.

Az adatbázis kapcsolat eléréséhez az alkalmazásban a következőképpen lehet használni ezt a `Singleton` osztályt:

```java
DatabaseConnection dbConnection = DatabaseConnection.getInstance();

try {
    Connection connection = dbConnection.getConnection();

    // Itt már használhatod az adatbázis kapcsolatot a lekérdezések végrehajtására
} catch (SQLException e) {
    e.printStackTrace();
}
```

Ezzel elkerülhető, hogy több kapcsolat példány jöjjön létre, és biztosítva van, hogy az alkalmazás egésze ugyanazt a kapcsolatot használja.


### Előnyök és hátrányok

<i class="fa-solid fa-plus" style="color:green;"></i> Biztos lehetsz benne, hogy egy osztálynak csak egyetlen példánya van.

<i class="fa-solid fa-plus" style="color:green;"></i> Globális hozzáférési pontot kapunk ehhez a példányhoz.

<i class="fa-solid fa-plus" style="color:green;"></i> A singleton objektum csak akkor inicializálódik, amikor először kérik.


<i class="fa-solid fa-minus" style="color:red;"></i>  Megsérti az egységes felelősség elvét. A minta egyszerre két problémát old meg.

<i class="fa-solid fa-minus" style="color:red;"></i> A minta speciális kezelést igényel többszálas környezetben, hogy több szál ne hozzon létre többször egy singleton objektumot.


## Builder

![](/assets/images/vasvari/builder-en.webp)

### Célkitűzés

A `Builder` egy olyan tervezési minta, amely lehetővé teszi, hogy lépésről lépésre összetett objektumokat építsen fel. A minta lehetővé teszi, hogy egy objektum különböző típusait és reprezentációit ugyanazzal a konstrukciós kóddal hozza létre.

### Probléma

Képzeljünk el egy összetett objektumot, amely számos mező és egymásba ágyazott objektum fáradtságos, lépésről lépésre történő inicializálását igényli. Az ilyen inicializálási kód általában egy konstruktorban van elrejtve, rengeteg paraméterrel. Vagy ami még rosszabb: szétszórva a kódban.

![Azzal, hogy minden lehetséges objektumkonfigurációhoz egy-egy alosztályt hozol létre, túlságosan bonyolulttá teheted a programot.](/assets/images/vasvari/problem1.webp)


Gondoljunk például egy `House` objektum létrehozására. Egy egyszerű ház megépítéséhez négy falat és egy padlót kell építenünk, be kell szerelnünk egy ajtót, be kell szerelnünk egy pár ablakot, és meg kell építenünk a tetőt. De mi van akkor, ha egy nagyobb, fényesebb házat szeretnél, hátsó udvarral és egyéb extrákkal (például fűtési rendszerrel, vízvezetékkel és elektromos vezetékekkel)?

A legegyszerűbb megoldás az alap `House` osztály kiterjesztése és egy sor alosztály létrehozása a paraméterek összes kombinációjának lefedésére. De végül jelentős számú alosztály lesz a végeredmény. Minden új paraméter, például a tornác stílusa, még tovább növeli ezt a hierarchiát.

Van egy másik megközelítés, amely nem jár alosztályok létrehozásával. Létrehozhatsz egy hatalmas konstruktort közvetlenül az alap `House` osztályban az összes lehetséges paraméterrel, amely a ház objektumot vezérli. Bár ez a megközelítés valóban kiküszöböli az alosztályok szükségességét, egy másik problémát is okoz.

![A sok paraméterrel rendelkező konstruktornak megvan a maga hátránya: nem minden paraméterre van mindig szükség.](/assets/images/vasvari/problem2.webp)

A legtöbb esetben a paraméterek többsége nem lesz felhasználva, ami a __konstruktorhívásokat elég csúnyává teszi__. Például a házaknak csak egy töredéke rendelkezik medencével, így a medencékkel kapcsolatos paraméterek tízből kilencszer használhatatlanok lesznek.


### Megoldás

A `Builder` minta azt javasolja, hogy az objektum kódját vonja ki a saját osztályából, és helyezze át különálló objektumokba, úgynevezett építőkbe.

![A Builder mintával lépésről lépésre építhetünk fel összetett objektumokat. A Builder nem engedi, hogy más objektumok hozzáférjenek, amíg az épül.](/assets/images/vasvari/solution1.webp)

A minta az objektumok építését lépések sorozatába szervezi (`buildWalls`, `buildDoor`, stb.). Egy objektum létrehozásához ezeknek a lépéseknek a sorozatát hajtja végre egy `Builder` objektumon. A fontos rész az, hogy nem kell az összes lépést meghívni. Csak azokat a lépéseket hívhatja meg, amelyek az objektum adott konfigurációjának létrehozásához szükségesek.

Néhány építési lépés eltérő végrehajtást igényelhet, ha a termék különböző reprezentációit kell megépítenie. Például egy faház falait lehet fából építeni, de a várfalakat kőből kell építeni.


Ebben az esetben több különböző `Builder` osztályt hozhatsz létre, amelyek ugyanazokat az építési lépéseket valósítják meg, de különböző módon. Ezután ezeket használhatja az építési folyamatban (_azaz az építési lépések hívásainak rendezett halmazában)_ különböző típusú objektumok előállítására.

![A különböző builderek ugyanazt a feladatot különböző módon hajtják végre.](/assets/images/vasvari/builder-comic-1-en.webp)

Képzeljünk el például egy építészt, aki mindent fából és üvegből épít, egy másikat, aki mindent kőből és vasból épít, egy harmadikat pedig, aki aranyat és gyémántot használ. Ha ugyanazt a lépéssort hívjuk fel, akkor az első építésztől kapunk egy átlagos házat, a másodiktól egy kis kastélyt, a harmadikatól pedig egy palotát. Ez azonban csak akkor működne, ha az építési lépéseket hívó klienskód képes lenne egy közös interfész segítségével interakcióba lépni az építőkkel.


### Director

Tovább is mehetünk, és a termék létrehozásához használt építő lépések hívássorozatát egy külön osztályba, a directorba helyezhetjük. A `director` osztály határozza meg az építési lépések végrehajtásának sorrendjét, míg a builder biztosítja a lépések végrehajtását.

![A Director tudja, hogy milyen építési lépéseket kell végrehajtania ahhoz, hogy működőképes terméket kapjunk.](/assets/images/vasvari/builder-comic-2-en.webp)

Nem feltétlenül szükséges, hogy a programban legyen egy `Director` osztály. Az építési lépéseket mindig meghívhatja egy adott sorrendben közvetlenül a klienskódból. A `Director` osztály azonban jó hely lehet a különböző építési rutinok elhelyezésére, hogy újra felhasználhassa őket a programjában.

Ráadásul a `director` osztály teljesen elrejti a terméképítés részleteit a klienskód elől. Az ügyfélnek csak egy építőprogramot kell társítania egy Directort, elindítani a konstrukciót a Directorra majd megkapni magát az eredményt.


### Hogyan kell megvalósítani?

A Builder tervezési minta segít létrehozni és konfigurálni objektumokat lépésről lépésre, különválasztva az objektum összeállítását az objektum tulajdonságainak beállításától. Itt van egy egyszerű példa egy `PizzaBuilder` osztályra, amely segít egy pizzát készíteni:

```java
public class Pizza {
    private String dough;
    private String sauce;
    private String topping;

    public Pizza(String dough, String sauce, String topping) {
        this.dough = dough;
        this.sauce = sauce;
        this.topping = topping;
    }

    // Getterek a tulajdonságokhoz [...]

    @Override
    public String toString() {
        return "Pizza with " + dough + " dough, " 
                + sauce + " sauce, and " + topping + " topping.";
    }
}

public class PizzaBuilder {
    private String dough;
    private String sauce;
    private String topping;

    public PizzaBuilder setDough(String dough) {
        this.dough = dough;
        return this;
    }

    public PizzaBuilder setSauce(String sauce) {
        this.sauce = sauce;
        return this;
    }

    public PizzaBuilder setTopping(String topping) {
        this.topping = topping;
        return this;
    }

    public Pizza build() {
        return new Pizza(dough, sauce, topping);
    }
}

public class PizzaExample {
    public static void main(String[] args) {
        Pizza pizza = new PizzaBuilder()
            .setDough("Thin")
            .setSauce("Tomato")
            .setTopping("Cheese")
            .build();

        System.out.println(pizza);
    }
}
```

Ebben a példában a `Pizza` osztályt egy `PizzaBuilder` osztály segítségével hozzuk létre. A `PizzaBuilder` lehetővé teszi a pizzatészta, szósz és feltét beállítását, majd a `build` metódussal elkészíti és visszaadja a kívánt pizzát. Ez a tervezési minta segít elkerülni az összetett konstruktorokat, és könnyen konfigurálható objektumok létrehozását teszi lehetővé.


### Előnyök és hátrányok

<i class="fa-solid fa-plus" style="color:green;"></i>  Objektumok létrehozása fokozatosan, lépésről lépésre történhet.
<i class="fa-solid fa-plus" style="color:green;"></i>  Ugyanazt a kódot újra használhatja fel különféle termékábrázolások elkészítésekor.
<i class="fa-solid fa-plus" style="color:green;"></i>  Az Egyetlen Felelősség Elve segít elkülöníteni a komplex kódot a termék üzleti logikájától.

<i class="fa-solid fa-minus" style="color:red;"></i> A kód általános összetettsége növekszik, mivel a minta több új osztály létrehozását igényli.


[^first]: _Gang of Four_
[^second]: _Olyan nyelvi kifejezés, amely állandó, rögzített elemekkel fordul elő minden szövegben és szövegkörnyezetben._
[^third]: _A mitotikus alak olyan sejt, amely osztódási folyamatban van, és két új sejt jön létre. Ezt a folyamatot mitózisnak nevezik._
[^fourth]: _Azt jelenti, hogy egy erőforrást vagy objektumot csak akkor hozunk létre, amikor valóban szükség van rá, azaz _"lustán"_, későbbi időpontban inicializáljuk. A lényege, hogy az erőforrás vagy az objektum inicializálását elhalasztjuk addig, amíg valamilyen művelet, hívás vagy kérés történik, amely valójában használja az adott erőforrást._

