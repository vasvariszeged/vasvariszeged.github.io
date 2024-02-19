---
icon: fa-solid fa-2
---

# Tervezzünk és építsünk fel egy adatbázist

:::note Ennek a témakörnek az a célja, hogy
- megtervezzünk egy adatbázist
- létrehozzunk egy minta adatbázist
- adatbázisokat hozzunk létre
:::

Az adatbázisok létrehozásának első lépése a tervezés. Az adatbázist jóval azelőtt megtervezed, hogy akár csak egy ujjal is hozzányúlnál a billentyűzethez és létrehoznád az adatbázist - jó esetben :roll_eyes:. A tervezés a legfontosabb lépés. Nagyon fájdalmas élmény, ha akkor fedezed fel, hogy az adatbázisban nincs meg minden adat, vagy az adatok között hiányzik valamilyen kapcsolat, melyre szükséged lenne, mikor már felépítetted az adatbázist és elkezdted használni. 

Ha kész vagy az adatbázisod tervezésével akkor készen állsz arra, hogy fel is építsd azt. A terv alapján hozhatod majd létre az adatbázisodat és annak tábláit, melyet magad alakítottál ki. Ha már felépítetted lesz egy használható, üres adatbázisod mely csak arra vár, hogy feltöltsd adatokkal. 

### Tervezzünk adatbázist

Adatbázisok tervezése során azonosítanod kell, hogy milyen adatokra lesz szükséged és ezeket az adatokat az adatbázisszoftver követelményeinek megfelelően kell rendezned. Ahogy megalkotod az adatbázis tervedet minden táblához meg kell adnod egy elsődleges kulcsot is, hogy tudjanak kapcsolódni egymáshoz. Azt is meg kell fontolnod továbbá, hogy a táblákban milyen típusú adatokat fogsz tárolni.

### Adatok kiválasztás

Egy adatbázis megtervezése során először meg kell határoznod, hogy milyen információk kerüljenek bele. Az adatbázisnak minden szükséges adatot tartalmaznia kell ahhoz, hogy elérhesse a célját.

Nézzük a következő példákat:

- Egy online katalógushoz egy olyan adatbázis kell, mely termékek információit tartalmazza.
- Egy online rendelőalkalmazáshoz olyan adatbázisra lesz szükséged, mely tárolni tudja a vásárlók és rendeléseik információit.
- Egy utazási weboldalhoz olyan adatbázis szükséges, mely a célpontok, a foglalások, a díjak, az időbeosztások adatait tartalmazzák.

Az alkalmazásunk sok esetben tartalmazhat egy olyan feladatot is mely során a felhasználótól gyűjt be információkat. Az olyan vásárlóknak például, akik termékeket vásárolnak a weboldalról, meg kell adniuk a címüket, telefonszámukat, bankkártya információikat és más egyéb adataikat is ahhoz, hogy elküldhessék a rendelésüket. Ezeket az információkat pedig legalább addig tárolnod kell, amíg nem teljesíted a rendelést. A weboldalak gyakran megtartják a vásárlói információkat, hogy elősegítsék később rendelések elküldését mert így a vásárlónak nem kell majd ismét beírnia minden adatát, amikor leadja a következő rendelését.

Egy vásárlói adatbázis például a következő adatokat gyűjtheti be:
- Név
- Cím
- Telefonszám
- Email cím

:::note Szánd rá az időt, hogy összeállíts egy átfogó listát azokról az információkról melyeket tárolnod kell az adatbázisodban! Bár az adatbázisod adatait azután is módosíthatod vagy bővítheted, hogy kialakítottad azt sokkal könnyebb, ha az elejétől fogva felveszed az információkat és így valószínűleg az azzal járó pluszmunkát is elkerülheted, hogy később módosítsd az adatbázisodat. Ha később veszel fel információkat az adatbázisodba - amikor már használod azt - akkor azok az adatok amik szerepelnek benne hiányosak lesznek. Például, ha úgy módosítasz egy űrlapot, hogy most már szükséged van a felhasználók életkorára is akkor akik már kitöltötték az űrlapot azoknak a koráról nem fogsz tudni. 
:::

### Adatok szervezése

Az MySQL egy relációs adatbáziskezelő rendszer (RDBMS - Relational Database Management System), ami azt jelenti, hogy az adatokat táblákba szervezi. Az RDBMS táblák ugyanúgy vannak szervezve, mint bármilyen más táblázat, melyekkel találkozhatsz - sorokból és oszlopokból állnak, ahogy azt a következő táblázatban is láthatod.

|        | 1. oszlop | 2. oszlop | 3. oszlop | 4. oszlop |
|--------|-----------|-----------|-----------|-----------|
| 1. sor |           |           |           |           |
| 2. sor |           |           |           |           |
| 3. sor |           |           |           |           |
| 4. sor |           |           |           |           |

Azokat az egyedi cellákat, melyek egy adott sor és egy adott oszlop metszetében vannak, mezőknek nevezzük. 

Minden tábla egy olyan objektumra koncentrál, amelyről szeretnél információkat tárolni. Nézzünk néhány példát ilyen objektumokra:
- Vásárlók
- Termékek
- Könyvek
- Számítógépek
- Alakzatok
- Városok

:::tip Minden objektumhoz létre kell hoznod egy táblát. A tábla nevének egy beszédes szóval vagy kifejezéssel kell meghatároznia, hogy milyen objektumokat tartalmaz, a következő irányelveknek megfelelően. 

- A nevének egy karaktersztringnek kell lennie, mely betűket, számokat, aláhúzásokat tartalmazhat, de szóközöket nem.
- A táblákat egyes számban szokás elnevezni. Így a vásárlóid táblája lehet `Vasarlo`, a vásárlóid megrendeléseit tartalmazó tábla pedig lehet `VasarloiRendeles`.
- UNIX-on lényeges a kis és nagybetűk közötti különbség, Windows-on viszont nem. Ennek tudatában a legjobb, ha figyelsz a kis és nagybetűk különbségeire abban az esetben, ha esetleg a kiszolgáló környezetet kell cserélgetned. 
:::

Adatbázisos nyelven szólva az objektumok **entitások**, az entitásoknak pedig **attribútumaik** vannak. A táblákban minden sor egy entitást képvisel és az oszlopok tartalmazzák az egyes entitások attribútumait. A vásárlók táblájában például minden sor egy adott vásárló adatait tartalmazza. Az oszlopokban tárolt attribútumok között olyasmik fordulhatnak elő mint a vezetéknév, keresztnév telefonszám vagy az életkor. 

A következő lépésekkel eldöntheted, hogyan szervezed az adataidat táblákba:

1. **Nevezd el az adatbázisodat!**

Adj meg egy nevet az adatbázisnak, melyet használni szeretnél az alkalmazásodhoz. 

2. **Azonosítsd az objektumokat!**

Nézd végig azon információk listáját, melyeket tárolni szeretnél az adatbázisodban. Elemezd a listádat és határozd meg az objektumokat.

3. Minden objektumhoz definiálj és nevezz el egy táblát!

Például egy `Bolt` nevű adatbázisban egy `Vasarlo` és egy `Termekek` táblára lesz szükséged.

4. **Azonosítsd az egyes objektumok attribútumait!**

Elemezd az információid listáját és keresd meg, hogy az egyes objektumoknak milyen attribútumokat kell tárolniuk. A tárolni kívánt információkat bontsd le a lehető legkisebb ésszerű csoportokba. Ha például egy személy nevét tárolod egy táblában akkor a nevet vezetéknévre és keresztnévre bonthatod. Ha így teszel, akkor tudsz majd keresztnév szerint is rendezni, amely kissé nehéz lenne, ha a vezeték- és keresztnevet együtt tárolnád. A nevet akár még vezetéknév, keresztnév és második név részekre is bonthatod, habár nem sok helyen kell külön kezelned az emberek második keresztnevét.

5. **Definiálj egy oszlopot és add meg az oszlopnevet minden egyes attribútumhoz melyet meghatároztál!**

Minden egyes oszlopnak olyan nevet adj, mely világosan bemutatja hogy milyen információt tárol az adott oszlop. Az oszlop neve egyszavas legyen, szóközök nélkül. Az oszlopod neve lehet például `vezeteknev` és `keresztnev` vagy `vezetek_nev` és `kereszt_nev`.

Az SQL-ben van néhány foglalt szó melyeket használnak és így mi nem használhatjuk azokat oszlopnévként. Ezek a szavak az SQL utasításokban vannak jelenleg is használatban vagy pedig későbbi használatra vannak fenntartva. Nem használhatod például az `ADD`, `ALL`, `AND`, `CREATE`, `DROP`, `GROUP`, `ORDER`, `RETURN`, `SELECT`, `SET`, `TABLE`, `USE`, `WHERE` szavakat és még sok-sok más szót oszlopnévként.

6. **Határozd meg az elsődleges kulcsot!**

Egy táblában minden sornak kell, hogy legyen egy egyedi azonosítója. Egy táblán belül nem lehet két olyan sor, melyek teljesen egyformák. Amikor megtervezed a tábládat, el kell döntened, hogy melyik oszlopban legyen az egyedi azonosító, az úgynevezett **elsődleges kulcs**.

Az elsődleges kulcs egynél több érték kombinációja is lehet. Sok esetben az objektumaid attribútumai nem adnak egyedi azonosítót. Ha például van egy vásárló táblád akkor abban lehet, hogy nincs egyedi azonosító mert két vásárlót hívhatnak ugyanúgy. Ha nincs egyedi azonosító oszlopod akkor létre kell hoznod egyet kifejezetten azért, hogy elsődleges kulcs legyen. Erre a célra gyakran egy sorszámokat tartalmazó oszlopot használnak. A következő táblázatban például az elsődleges kulcs a `vasarlo_azon` mező, mivel minden vásárlónak egyedi azonosítószáma van.

| vasarlo_azon | vezeteknev | keresztnev | telefon |
|--------------|------------|------------|---------|
| 27863        | Kovács     | János      | 555-555 |
| 44532        | Lugosi     | Béla       | 555-553 |
| 22312        | Csongrádi  | Judit      | 555-554 |
| 11296        | Szabó      | Júlia      | 555-552 |

7. **Határozd meg az alapértelmezett értékeket**

Meghatározhatsz olyan alapértelmezett értékeket, melyeket az SQL hozzárendel az egyes mezökhöz, ha az adott mezőhöz nem adsz meg adatot. Nem kötelező alapértelmezett értéket megadnod, de ez gyakran hasznos lehet.

### Kapcsolatok létrehozása táblák között

Egy adatbázis egyes táblái kapcsolódhatnak egymáshoz. Legtöbbször egy tábla egy sora egy másik tábla több sorához kapcsolódik. Szükséged lesz egy oszlopra, mellyel összekapcsolhatod az egymáshoz kötődő sorokat a különböző táblákban. Sok esetben kell majd szúrnod egy oszlopot az egyik táblába, hogy olyan adatokat tárolj benne, melyek illeszkednek egy másik tábla elsődleges kulcs értékeire.

Elég elterjedtek például a vásárlók rendeléseit kezelő alkalmazások melyekhez két egymáshoz kapcsolódó táblára lesz szükséged. Az egyik tábla tárolhatja a vásárlók információit, például a nevüket, címüket és a telefonszámukat. Minden vásárlónak lehet nulla vagy akár rengeteg rendelése. A rendelések információit tárolhatnád a vásárlói adatokkal egy táblában is, de ebben minden egyes alkalommal amikor egy felhasználó lead egy megrendelést, létrejönne egy új sor és minden új sor tartalmazná a vásárló összes információját is. Ennél sokkal hatékonyabban tárolhatod a rendelések információit egy különálló táblában melyeknek lehet a neve mondjuk `VasarloiRendeles`. A `VasarloiRendeles` táblában megadhatsz egy olyan oszlopot mely a `Vasarlo` tábla elsődleges kulcsait tartalmazza és így a rendeléseket a `Vasarlo` tábla megfelelő sorához kapcsolhatod.

Minden vásárlónak van egy egyedi `vasarlo_azon` értéke. Az ehhez kapcsolódó `VasarloiRendeles` táblában láthatod, hogy megtalálod `vasarlo_azon` oszlopot mely a `Vasarlo` táblában is szerepel.
A rendeléseknek a `VasarloiRendeles` táblában szereplő információi ezen az oszlopon keresztül kapcsolódnak a vásárló nevéhez és telefonszámához a `Vasarlo` táblában. 

| rendeles_azon | vasarlo_azon | termeknev | ar |
|---------------|--------------|-----------|----|
| 87-222        | 27863        | póló      | 20 |
| 87-223        | 44532        | cipő      | 40 |
| 87-224        | 22312        | kalap     | 35 |
| 87-225        | 11296        | sál       | 15 |

Ebben a példában a `Vasarlo` táblát és a `VasarloiRendeles` táblát összekötő oszlopok neve megegyezik. A nevük lehetne különböző is, ha az oszlopok ugyanazokat az adatokat tartalmazzák.


### Adattípusok

Az SQL különböző formátumokban tárolja az adatokat attól függően, hogy milyen információtípusok érkezésére készíted fel. Az SQL-ben különböző adattípusokat különböző módokon használhatjuk. A fő adattípusok a karakter, a szám, a dátum és az időadatok. A következőkben ezekről és más adattípusokról olvashatsz majd pedig azt is megnézzük, hogy egyes oszlopokhoz milyen adattípust fogunk használni.

#### Karakter adattípus

Az adatok legelterjedtebb típusa a karakteres adatok ezeket csak sztringekként kezelheted. A legtöbb információ karakteres adatként van tárolva például a vásárlók neve, címe, telefonszáma. A karakteres adatokat mozgathatod és kiírathatod. Két karaktersztringet összeilleszthetsz, kivághatsz egy hosszabb sztringből egy részsztringet és egy sztringet behelyettesíthetsz egy másik helyére.


#### Numerikus adattípus

Az adatok másik gyakori típusa a numerikus adatok - azok az adatok melyeket számokként tárolhatsz. Tárolhatsz tizedes törteket és egész számokat. Amikor számként tárolsz el egy adatot akkor az adataidat felhasználhatod numerikus műveletekben, például összeadhatod, kivonhatod vagy négyzetre emelheted. Ha nem tervezed numerikus műveletekben használni az adataidat akkor viszont inkább karaktersztringként tárold őket, mert a programozó karaktersztringként fogja használni és így nem lesz szükség konverzióra. 

#### Dátum és idő adattípus

A harmadik gyakori adattípus a dátum és idő adatok. A dátumként tárolt adatok számos különböző dátumformátumban megjelenítheted. Ezen adatok segítségével meghatározhatod az időt, amely eltelt két dátum vagy két időpont között.


#### Az SQL adattípusok nevei

Amikor egy adatbázist hozol létre meg kell adnod milyen típusú adatokra számíthat egyes oszlopban az SQL. Számos más adattípust is használhatsz azok mellett amelyeket a lenti táblában láthatsz. Jelen esetben a gyakran használt adattípusokat mutatom be neked! 

| Adattípus  | Leírás                                               |
|------------|------------------------------------------------------|
| `CHAR`     | Rögzített hosszúságú karakter sztring.               |
| `VARCHAR`  | Változó hosszúságú karakter sztring 1 és 255 között. |
| `INT`      | - 2 147 483 648 és 2 147 483 648 közötti egész szám. |
| `DECIMAL`  | Tizedes tört.                                        |
| `DATE`     | Dátumérték, évvel, hónappal és nappal. `YYYY-MM-DD`  |
| `DATETIME` | Dátum és idő együtt tárolva. `YYYY-MM-DD HH:MM::SS`  |

### Adatbázis megtervezése

Most megnézzük, hogyan tervezünk adatbázist amely a vásárlók információit tartalmazza. Írd le azon információk listáját melyeket tárolni szeretnél minden vásárló esetén az alábbiak szerint: **Név, Cím, Telefonszám, Email.**


Emellett, az információkat arról is be kell gyűjtened, hogy a vásárlók milyen termékeket rendelnek meg. Minden egyes rendeléshez be kell gyűjtened a következő információkat: **rendelés leadásának ideje, adott rendelésben szereplő egyes termékinformációi.**
Ebben a példában a termékek pólók. Így a következő információkra lesz szükséged minden egyes cikkhez: **Termék azonosító, Méret, Ár, Szín.**

A `Vasarlo` adatbázist a következő lépésekben alakíthatod ki:

1. **Nevezd el az adatbázisodat**

A rendelések információit tároló adatbázis neve legyen `VasarloiRendelesInformaciok`

2. **Azonosítsd az objektumokat**

Az információk listája a következő:
- Vásárló neve
- Vásárló címe
- Vásárló telefonszáma
- Vásárló email címe
- Rendelés leadásának ideje
- Konkrét terméket azonosító szám
- Méret
- Szín
- Ár

Az első öt információelem a vásárlókhoz tartozik, szóval az egyik objektumod a `Vasarlo` lesz. A rendelés ideje a teljes rendeléshez tartozik szóval egy másik objektum a `VasarloiRendeles` lesz.
A fennmaradó négy adat a rendelésekhez tartozó egyes tételek sajátja, tehát az utolsó objektum a `RendelesiTetel` lesz. 

3. **Minden objektumhoz definiálj és nevezz el egy táblát**

A `VasarloiRendelesInformaciok` adatbázisban a következő táblákra lesz szükséged:

- `Vasarlo`
- `VasarloiRendeles`
- `RendelesiTetel`

4. **Azonosítsd az egyes objektumok attribútumait**

Tekintsd az információid listáját részletesebben is: 

- Vásárló azonosítója: Attribútum - egyedi azonosító minden vásárlóhoz
- Vásárló neve: Két attribútum - vezetéknév és keresztnév
- Vásárló címe: Négy attribútum - megye, irányítószám, város, utca neve
- Vásárló telefonszáma: egy attribútum
- Vásárló email címe: egy attribútum
- Rendelés száma: egy attribútum - egyedi azonosító minden rendeléshez
- Rendelés leadásának ideje: egy attribútum
- Konkrét termékazonosító szám: egy attribútum
- Méret: egy attribútum
- Szín: egy attribútum
- Ár: egy attribútum

5. **Definiálj és nevezd el az oszlopokat**

A `Vasarlo` tábla minden egyes vásárlóhoz egy sort tartalmaz. A `Vasarlo` tábla oszlopai a következők:

- `vasarlo_azon`
- `vezeteknev`
- `keresztnev`
- `utca`
- `varos`
- `megye`
- `iranyitoszam`
- `email`
- `telefon`

A `VasarloiRendeles` tábla minden egyes rendeléshez tartalmaz egy sort melyek a következő oszlopokat foglalják magukba:

- `vasarlo_azon` - *Ez az oszlop kapcsolja össze ezt a táblát a `Vasarlo` táblával. Ez az érték egyedi a `Vasarlo` táblában, ebben a táblában viszont nem az!*
- `rendeles_azon`
- `rendelesidatum`

A `RendelesiTetel` tábla minden egyes rendelés tételhez, tartalmaz egy sort melyek a következő oszlopokat tartalmazzák:

- `katalogus_azon`
- `rendeles_azon` - *Ez az oszlop kapcsolja össze ezt a táblát a `VasarloiRendeles` táblával. Ez az érték egyedi a `VasarloiRendeles` táblában, ebben a táblában viszont nem az!*
- `meret`
- `szin`
- `ar` 

6. **Határozd meg az elsődleges kulcsot**

A `Vasarlo` tábla elsődleges kulcsa a `vasarlo_azon` oszlop. Így a `vasarlo_azon` értéke egyedi kell, hogy legyen. A `VasarloiRendeles` tábla elsődleges kulcsa a `rendeles_azon` oszlop.
A `RendelesiTetel` tábla elsődleges kulcsa a `katalogus_azon` és a `rendeles_azon` oszlopok együttese lesz.

7. **Határozd meg az alapértelmezett értékeket**

Ezekben a táblákban nem adunk meg semmilyen alapértelmezett értéket. 

8. **Határozd meg, hogy mely oszlopok kitöltése kötelező**

A következő oszlopok soha nem lehetnek üresek:
- `vasarlo_azon`
- `rendeles_azon`
- `katalogus_azon`

Ez a három oszlop adja az elsődleges kulcsokat. Soha ne engedd, hogy ezen értékek nélkül kerüljön be egy sor a táblákba.

9. **Döntsd el, hogy az egyes attribútumok tárolásához milyen adattípusokat fogsz használni**

- Numerikus: A `vasarlo_azon` és a `renedles_azon` numerikus típusú.
- Dátum: A `rendelesidatum` dátum típusú
- Karakteres: Minden más mező karakteres adattípusú.


### Adatbázis terv leírása

Valószínűleg rengeteg időt töltöttél azzal, hogy meghoztad a tervezési döntéseket az adatbázisodhoz. A döntéseid most már véglegesek.
Valószínűleg nem hiszed, hogy elfelejtenéd őket. Tegyük fel azonban, hogy valami halaszthatatlan jön közbe ezzel a projekttel nem tudsz foglalkozni két hónapig.
Újra elemezheted az adataidat és minden tervezési döntést is újra meg kell hoznod, ha az eredetileg meghozott döntéseidet nem írtad le.

Írd le a táblák elrendezését az oszlopneveket és minden más tervezési döntésedet is. A dokumentumodban minden táblát táblázat formájában írj le, melyben minden oszlophoz van egy sorod és 
minden tervezési döntéshez van egy oszlop. Az oszlopaid lehetnek például a következők: `oszlop neve`, `adattípus` és `leírás`.

### Adatbázis létrehozása

Ha egy új adatbázist akarsz létrehozni az első lépésben létre kell hoznod egy üres adatbázist és el kell nevezned. Az adatbázisod neve legfeljebb 64 karakter hosszú lehet. Néhány kivételtől eltekintve használhatsz betűket, számokat és írásjeleket. Általánosan elmondható, hogy olyan karaktereket nem használhatsz melyek az operációs rendszered könyvtárneveiben sem megengedettek. 

A következő SQL utasítást használod egy új adatbázis létrehozásához:

```sql
CREATE DATABASE adatbazisnev
```

Ebben az utasításban az `adatbazisnev` helyére azt a nevet írd, melyet adni szeretnél az adatbázisodnak. Például azt az adatbázist, melyet ebben a fejezetben terveztünk meg, a következő SQL utasítással hozhatod létre:

```sql
CREATE DATABASE VasarloiRendelesInformaciok
```

Ha egy adatbázis már létezik azon a néven melyet megadtál, akkor egy hibaüzenetet fogsz látni. Ezt a hibaüzenetet elkerülheted, ha egy `IF` kifejezést használsz az utasításodban a következőképpen:

```sql
CREATE DATABASE IF NOT EXISTS VasarloiRendelesInformaciok
```

Ezzel az utasítással létrehozhatod az adatbázist, ha az még nem létezik, az utasítás azonban nem okoz hibát, ha az adatbázis már létezik. Ekkor egyszerűen csak nem hozza létre az új adatbázist. Miután létrehoztad az üres adatbázist elhelyezhetsz benne táblákat.

### Adatbázis törlése

Bármely adatbázist törölheted, ha olyan fiókot használsz mely rendelkezik `DROP` jogosultságokkal. Amikor törölsz egy adatbázist, vele együtt törlődik az összes táblája és az azokban lévő összes adat is.

A következő SQL utasítással törölhetsz egy adatbázist:

```sql
DROP DATABASE adatbazisnev
```

A `DROP` utasítást nagyon óvatosan használd, mert nem lehet visszavonni. Miután eltávolítottál egy adatbázist, az örökre odalesz. Vele együtt eltűnik minden benne lévő adat is.

Ha az adatbázis nem létezik akkor egy hibaüzenet fog megjelenni. A következő utasítással kerülheted el, hogy hibaüzenet jelenjen meg:

```sql
DROP DATABASE IF NOT EXISTS adatbazisnev
```

Ezzel az utasítással eltávolíthatod az adatbázist, ha az adott adatbázis létezik, ha pedig nem létezik az utasítás nem okoz hibát. Az utasítás csak csendben lefut.

### Táblák létrehozása és az elsődleges kulcsok meghatározása

Bármely adatbázisba szúrhatsz be táblákat attól függetlenül, hogy új üres adatbázisról van-e szó melyet épp most hoztál létre vagy egy már meglévőről melyben már vannak táblák és adatok. 
Amikor létrehozol egy táblát meg kell adnod a tábla definícióját is. Meg kell határoznod minden egyes oszlopát elnevezed őket, adattípust rendelsz hozzájuk és megadsz bármilyen egyéb szükséges definíciót. 

:::tip A következőkben néhány olyan definíciót láthatsz melyeket gyakran adunk meg oszlopokhoz:
`NOT NULL`: Ebben az oszlopban kell lennie értéknek nem lehet üres.

`DEFAULT ertek`: Ez az `ertek` kerül be az oszlopba, ha úgy hozol létre sort, hogy nem adsz meg más értéket az adott oszlophoz.

`AUTO_INCREMENT`: Ez a definíció egy számsorozatot hoz létre. Ahogy beszúrod az egyes sorokat, az oszlop értéke mindig egy adott egész számmal nő a legutóbb megadott sor értékéhez képest. Az automatikus számokat felül is írhatod, ha egy megadott értéket rendelsz hozzá az adott oszlophoz.

`UNSIGNED`: Ez a definíció azt jelzi, hogy az adott numerikus mező értékei soha nem lesznek negatívak.
:::

Minden sorhoz meg kell határoznod az egyedi azonosítót - *az elsődleges kulcsot* - is. A táblának kell, hogy legyen egy olyan mezője vagy a mezőinek egy olyan kombinációja, melynek értéke minden sorban eltérő. Nem lehet két olyan sor melyben az elsődleges kulcs értéke ugyanaz. Ha megpróbálsz beszúrni egy olyan sort, melynek ugyanaz az elsődleges kulcsa mint egy olyan sornak mely már létezik a táblában akkor egy hibaüzenetet fogsz kapni és a sort nem fogod tudni beszúrni.

Időnként előfordulhat, hogy olyan táblákat szeretnél létrehozni melyek felépítése megegyezik egy meglévő tábláéval. Létrehozhatsz olyan táblát, mely egy üres másolat.

A `CREATE` utasítás segítségével szúrhatsz be táblákat adatbázisokba. Az utasítás a `CREATE TABLE` kulcsszavakkal kezdődik a következőképpen:

```sql
CREATE TABLE tablanev
```

Ezután kell megadnod az oszlopok neveit és definícióit. Minden oszlop információit vesszővel válaszd el a rákövetkező oszlop információitól. A teljes listát zárójelek között add meg. Minden oszlop neve után add meg annak adattípusát és minden szükséges definíciót.

A `CREATE TABLE` utasítás utolsó eleme azt adja meg, hogy melyik oszlop vagy mely oszlopok kombinációja az elsődleges kulcs. Az elsődleges kulcsot a következő formátumban adhatod meg:

```sql
PRIMARY KEY(oszlopnev)
```

Az oszlopnév meghatározását zárójelek között add meg. Ha oszlopok együttesét használod elsődleges kulcsként, akkor minden oszlop nevét add meg vesszőkkel elválasztva egymástól. Meghatározhatod például az elsődleges kulcsot úgy, hogy `PRIMARY KEY(oszlopnev1, oszlopnev2)`.

A teljes `CREATE TABLE` utasítás alakja a következő:

```sql
CREATE TABLE tablanev (
 oszlopnev adattipus
 oszlopnev adattipus
PRIMARY KEY(oszlopnev) );
```

A következő kódrészletben a `VasarloiRendelesInformaciok` adatbázisban a `Vasarlo` táblájának létrehozásához használt SQL utasítást láthatod. 

```sql
CREATE TABLE Vasarlo(
 vasarlo_azon INT(4),
 vezeteknev VARCHAR(50),
 keresztnev VARCHAR(50),
 utca VARCHAR(50),
 varos VARCHAR(50),
 megye VARCHAR(50),
 iranyitoszam VARCHAR(50),
 email VARCHAR(50), 
 telefon VARCHAR(50),
 PRIMARY KEY(vasarlo_azon) );
```

Ha megpróbálsz létrehozni egy olyan táblát mely már létezik akkor egy hibaüzenetet fogsz látni. Elkerülheted, hogy ez a hibaüzenet megjelenjen, ha a következő `CREATE` utasítást használod:

```sql
CREATE TABLE IF NOT EXISTS tablanev
```

Ha a tábla nem létezik akkor az utasítás létrehozza. Ha a tábla már létezik akkor az utasítás nem hozza létre, de hibaüzenetet sem ad vissza.

Létrehozhatsz olyan új táblát is mely egy meglévő tábla pontos mása, és ugyanolyan a felépítése a következőképpen:

```sql
CREATE TABLE tablanev LIKE regitablanev
```

Az új `tablanev` úgy jön létre, hogy ugyanolyan mezői és definíciói lesznek mint a `regitablanev` táblának. Az új táblában azonban akkor sem lesznek adatok, ha a régi táblában voltak, csak a struktúrát veszi át.

Miután létrehoztad a táblát lekérdezheted és így ellenőrizheted a felépítését, vagy törölheted. 

:::tip Ha meg szeretnéd nézni az adatbázisodban szereplő táblákat, használd a következő lekérdezést:

```sql
SHOW TABLES
```

Ha szeretnéd egy tábla felépítését látni, használd a következő lekérdezést:

```sql
EXPLAIN tablanev
```
:::

### Táblák eltávolítása

Attól függetlenül törölhetsz táblákat, hogy üresek-e vagy vannak bennük adattok. Mielőtt valóban törölnél, egy táblát fontold meg, hogy tényleg törölni szeretnéd-e.
A táblák törlését nem lehet visszavonni. Ha eltávolítasz egy táblát akkor a tábla örökre odalesz. Emellett az összes adat is odavész, amelyek benne voltak.

Ha szeretnél törölni egy táblát, akkor használd a következő utasítást:

```sql
DROP TABLE tablanev
```

### Adatbázis felépítésének módosítása

Az adatbázis szerkezete nincs kőbe vésve. Bármely tábla nevét módosíthatod bármely táblába felvehetsz új oszlopokat és törölheted vagy átnevezheted a meglévő oszlopokat illetve bármely oszlop adattípusát vagy más tulajdonságát is módosíthatod. 
Tegyük fel például hogy van egy adatbázisod melyben definiáltál egy `vezeteknev` nevű oszlopot `VARCHAR(20)` adattípussal. Akkor még elegendőnek tűnt a 20 karakter a vezetéknév tárolásához, de ez most már kevés és több karakterre lesz szükséged. 

Az adatbázis struktúráját az `ALTER` utasítás segítségével módosíthatod. Ennek az utasításnak az alapvető formája az `ALTER TABLE tablanev` melyet a meghatározott módosítások követnek.

| Módosítás                           | Leírás                                          |
|-------------------------------------|-------------------------------------------------|
| `ADD oszlopnev`                     | Új oszlopot szúr be.                            |
| `ALTER oszlopnev SET DEFAULT ertek` | Módosítja egy oszlop alapértelmezett értékét.   |
| `ALTER oszlopnev DROP DEFAULT`      | Eltávolítja egy oszlop alapértelmezett értékét. |
| `CHANGE oszlopnev ujoszlopnev`      | Módosítja egy oszlop definícióját.              |
| `DROP oszlopnev`                    | Töröl egy oszlopot az összes adattal együtt.    |
| `MODIFY oszlopnev`                  | Módosítja egy oszlop definícióját.              |
| `RENAME ujtablanev`                 | Átnevezi a táblát.                              |

A következő utasítással például `Ujvasarlo` névre nevezheted át a `Vasarlo` táblát:

```sql
ALTER TABLE Vasarlo RENAME Ujvasarlo
```

Egy másik példaként a következő utasítással a megadott oszlopot a megadott adattípusra és hosszra tudod módosítani:

```sql
ALTER TABLE Vasarlo MODIFY vezeteknev VARCHAR(50)
```
