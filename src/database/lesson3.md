---
icon: fa-solid fa-3
---

# Adatbázis használata

:::note Ennek a témakörnek az a célja, hogy 
- megtanuljuk az adatok tárolását az adatbázisban
- megtanuljuk az adatok megjelenítése és kinyírését az adatbázisból
- megtnauljuk az adatok frissítését és törlését
:::

Ha az adatbázisod üres az olyan mintha lenne egy üres süteményes dobozod - semmit nem nyersz vele :D. Emellett egy üres adatbázisban keresni sem érdekesebb vagy hasznosabb, mint az üres sütisdobozban kotorászni. Az adatbázisodnak csak a benne lévő információkkal együtt veheted hasznát.

Az adatbázisoknak tudniuk kell fogadni az adatokat, hogy eltárolhassák azokat és tudniuk kell kérésre adatokat szolgáltatni. A `VasarloiRendelesInformaciok` adatbázisnak például melyről a korábbi fejezetekben már olvashattál tudnia kell fogadni a vásárlók és rendeléseik információit és amikor azokat lekéred tőle át kell tudnia adni a benne tárolt információkat. Ha például tudni szeretnéd egy konkrét vásárló címét vagy hogy mikor adtak le egy konkrét rendelést, az adatbázisnak át kell tudnia adni ezeket az információkat, amikor lekéred őket.



:::warning Az SQL adatbázisod négyféle kérésre válaszol:

**Információk beszúrása:** Új sor hozzáadása egy táblához.

**Információk lekérése:** Az adatok megjelenítése. Ezzel a kéréssel az adatbázisból nem távolítod el az adatokat.

**Információk frissítése:** Egy meglévő sor információinak módosítása. Ezzel egy meglévő sor üres mezőibe is szúrhatsz be információkat.

**Információk törlése:** Adatok törlése az adatbázisból.
:::

### Információk beszúrása az adatbázisba

Minden adatbázisba kellenek adatok. Elhelyezheted például az adataidat az adatbázisodban azért, hogy a felhasználóid láthassák őket vagy létrehozhatsz üres adatbázist, hogy a felhasználóid feltöltsék adatokkal. Ha az adataid még csak papíron vannak meg akkor közvetlenül is beszúrhatod őket egy adatbázisba SQL utasításban. Ha azonban rengeteg adatod van akkor ez a folyamat felettébb unalmas lehet és rengeteget kell gépelned hozzá. Tegyük fel, hogy 1000 olyan termékről vannak információid melyeket fel kell venned az adatbázisodba.
Ha feltesszük, hogy úgy tudsz gépelni, mint a villám és így percenként be tudsz szúrni egy sort ez még akkor is 16 órányi szélsebes gépelést jelent - vagyis szélsebes szerkesztést, de mindegy :man_shrugging:. Meg lehet csinálni, de nem túl szívderítő. Másrészt viszont tegyük fel, hogy egy szervezet 5000 tagját kell felvinned egy adatbázisba, és hogy minden egyes tagot öt percig tart beszúrni :roll_eyes:. Ez így már több mint 400 órányi gépelés - erre meg kinek van ideje :eyes: ?

A `LOAD` SQL utasítással egy nagyméretű szöveges fájlból olvashatsz be adatokat. Szóval, ha már megvannak az adataid egy fájlban akkor nem kell mindent újra begépelned! Még ha az adatok nem is olyan szöveges fájl formátumban vannak - *Excel, Access* - általában átalakíthatod őket, melyet aztán beolvashatsz az adatbázisodba. 

### Adatok beszúrása soronként

Ha kevés adatod van akkor beszúrhatod a sorokat a tábládba egyesével. Az `INSERT` utasítással adhatsz hozzá egy sort az adatbázisodhoz. Ez az utasítás megmondja az SQL-nek, hogy melyik táblába vegye fel az új sort, és hogy milyen értékeket tegyen az egyes mezőkbe az új sorban.

```sql
INSERT INTO tablanev (oszlopnev1, oszlopnev2, ..., oszlopnevN)
VALUES (ertek1, ertek2, ..., ertekN)
```



:::tip Az INSERT utasításra a következő szabályok vonatkoznak:

**Az értékeket ugyanabban a sorrendben kell megadnod, amelyben az oszlopneveket megadtad.** Az értékek listájában szereplő első értéket abba az oszlopba szúrja be, mely első helyen szerepel az oszlopok listájában, a második érték az értékek listájában a másodikként említett oszlopba kerül és így tovább.

**Használhatsz teljes vagy részleges oszloplistát.** Nem kell felsorolnod az összes oszlopot. Az olyan oszlopokba, melyek nem szerepelnek a listán az alapértelmezett értékük kerül, vagy pedig üresen maradnak, ha nincs hozzájuk alapértelmezett érték megadva.

**Nem kötelező megadnod az oszloplistát.** Ha minden egyes oszlophoz adsz meg értéket, akkor egyáltalán nem kell felsorolnod az oszlopokat. Ha nem adsz meg oszloplistát akkor az SQL minden egyes oszlophoz várni fog egy értéket, abban a sorrendben melyben megjelennek a táblában.

**Az oszloplistának és az értéklistának egyeznie kell.** Minden egyes oszlophoz melyet felsorolsz meg kell adnod egy értéket, különben egy ehhez hasonló hibaüzenetet fogsz kapni: `Column count doesn't match value count`.
:::

### Adatbázis adatainak megnézése

Miután felvitted az adatokat az adatbázisodba, lehet, hogy végig szeretnéd böngészni azokat és ellenőrizni szeretnéd, hogy a felvitt adatok megfelelőnek tűnnek-e vagy tudni szeretnéd, milyen típusú adatok vannak az adatbázisban. Az adatok áttekintésével egyszerű információkat is megtudhatsz az adatbázisodról, például hogy hány rekordot tartalmaz. A következő lekérdezéssel egy tábla összes adatát lekérdezheted:

```sql
SELECT * FROM tablanev
```
Ezzel a lekérdezéssel minden adatot kinyerhetsz egy táblából. Így megtudhatod, hogy mennyi rekord van a táblában és ha végig böngészed a kimenetét, kapsz egy általános képet az adatokról. Azt, hogy pontosan hány adatrekord van egy táblában a következő lekérdezéssel határozhatod meg:

```sql
SELECT COUNT(*) FROM tablanev
```

Ez a lekérdezés az adott táblában lévő rekordok számát adja vissza.


Az egyetlen ok, amiért információkat tárolsz egy adatbázisban, hogy elérhetőek legyenek amikor szükséged van rájuk. Az adatbázisnak az a célja, hogy megválaszolja a kérdéseidet. Milyen termékeket lehet megvásárolni? Kik a vásárlók? Hány vásárló él Zala megyében? Mit visznek a vásárlók?

Sok kérdést válaszolhatsz meg úgy, hogy adatokat nyersz ki az adatbázisodból. Ha például meg szeretnéd tudni, hogy hány vásárlód él Zalában, kinyerheted az összes olyan vásárló rekordját akiknél a `megye` nevű mező értéke `Zala`. Ha konkrét kérdéseket szeretnél megválaszolni, használd a `SELECT` lekérdezést. A `SELECT` lekérdezés segítségével pontos, összetett és részletes kérdéseket is feltehetsz. A lehető legegyszerűbb `SELECT` lekérdezés a következő:

```sql
SELECT * FROM tablanev
```

Ez a lekérdezés minden információt kinyer az adott táblából. A csillag (*) egy *Joker* karakter, mely azt jelenti, hogy minden oszlop. A `SELECT` lekérdezést ennél sokkal érzékenyebben is beállíthatod. A `SELECT` lekérdezésben megadott SQL szavak és kifejezések segítségével megjelenítheted pontosan azokat az információkat, melyek választ adnak a kérdésedre. 

:::tip A következő néhány trükkel elérheted, hogy a SELECT lekérdezésed jól teljesítsen:
**Lekérdezheted kizárólag azokat az információkat (oszlopokat), melyekre szükséged van ahhoz, hogy megválaszold a kérdésedet.** Lekérheted például csak a vezeték és keresztneveket és így létrehozhatod a vásárlóid listáját.

**Az információkat lekérdezheted meghatározott sorrendben is.** Kérheted például azt, hogy az információk legyenek rendezve. 

**Az információkat lekérdezheted a táblád meghatározott objektumaiból is.** Lekérdezheted például csak azoknak a vásárlóidnak a vezeték és keresztnevét akiknek a címe Békés megyei.
:::

:::warning A SELECT lekérdezéseket beágyazhatod egy másik lekérdezésbe is.

A beágyazott lekérdezést *allekérdezésnek* is nevezzük. Használhatsz allekérdezéseket a `SELECT`, az `INSERT`, az `UPDATE` és `DELETE` utasításokban illetve a `SET` kulcsszavakban. Egy allekérdezés visszaadhat egyetlen értéket egy sor vagy egy oszlopot vagy egy táblát melyet a külső lekérdezésben felhasználhatsz. A `SELECT` lekérdezések minden lehetőségét kihasználhatod allekérdezésekben is.
:::

### Konkrét információk kinyerése az adatbázisból

Ha konkrét információkat szeretnél lekérdezni, sorold fel azokat az oszlopokat, melyek tartalmazzák az információkat, amelyekre szükséged van. Például így:

```sql
SELECT oszlopnev1, oszlopnev2, ..., oszlopnevN 
FROM tablanev
```

Ez a lekérdezés az összes sorból visszaadja az információkat de csak a megjelölt oszlopaikból. A következő lekérdezéssel például kinyerheted az összes a `Vasarlo` táblában megjelenő vásárlód vezeték és keresztnevét a `vezeteknev` és a `keresztnev` oszlopból:

```sql
SELECT vezeteknev, keresztnev 
FROM Vasarlo
```

Az oszlopokkal matematikai műveleteket is végezhetsz amikor lekérdezed őket. A következő `SELECT` lekérdezés segítségével például összeadhatsz két oszlopot:

```sql
SELECT oszlop1 + oszlop2 FROM tablanev
```

vagy használhatod a következő lekérdezést is:

```sql
SELECT ar, ar * 1.27 FROM Leltart
```

Az eredményben az árat, illetve a 27 százalékos áfával növelt árat láthatod. Az oszlopokat át is nevezheted a következőképpen:

```sql
SELECT ar, ar * 1.27 AS bruttoAr FROM Leletar
```

Az `AS` azt mondja meg az SQL-nek, hogy a második lekért oszlopnak adja a `bruttoAr` nevet. Így a lekérdezés a következő két adatoszlopot adja vissza: `ar` és `bruttoAr`. Néhány esetben nem az oszlopban lévő értékekre vagy kíváncsi, hanem magáról az oszlopról szeretnél megtudni valamit. Lehet például, hogy szeretnéd tudni egy oszlop legkisebb vagy legnagyobb értékét. A következő táblázatban láthatsz néhány olyan információt melyeket elérhetsz az egyes oszlopokról.

| SQL formátum | Az információ leírása                                                             |
|--------------|-----------------------------------------------------------------------------------|
| `AVG`        | Az `oszlopnev` oszlopban lévő értékek átlagát adja vissza.                        |
| `COUNT`      | Az olyan sorok darabszámát adja vissza, melyekben az `oszlopnev` oszlop nem üres. |
| `MAX`        | Az `oszlopnev` oszlopban előforduló legnagyobb értéket adja vissza.               |
| `MIN`        | Az `oszlopnev` oszlopban előforduló legkisebb értéket adja vissza.                |
| `SUM`        | Az `oszlopnev` oszlopban előforduló összes érték összegét adja vissza.            |

Ha például meg szeretnéd keresni a legmagasabb árat a `Leltart` táblában, azt a következő lekérdezéssel teheted:

```sql
SELECT MAX(ar) FROM Leltart
```

Az olyan SQL szavakat, mint például a `MAX()` vagy a `SUM()`, melyek neve után zárójelpár áll, függvényeknek nevezzük. Az SQL-ben számos függvényt használhatsz azok mellett melyeket a táblázatban is láthatsz. A `SELECT` lekérdezésekben több mint 100 féle függvényt használhatsz. Vannak függvények melyek a lekérdezett értéket módosítják ilyen például az `SQRT()` függvény az adott oszlop minden értékének a négyzetgyökét adja vissza.

### Adatok kinyerése meghatározott sorrendben

Lehet, hogy az adatokat egy adott sorrendben szeretnéd megkapni. A `Vasarlo` táblában például lehet, hogy szeretnéd a vásárlóidat vezetéknevük szerint ábécésorrendben rendezni vagy esetleg a `Leltart` táblában szeretnéd a különböző termékeket kategóriák szerint csoportosítani. 



:::tip A SELECT lekérdezésekben az ORDER BY és GROUP BY a sorrendre vannak kihatással, melyben megkapod az adatokat:

`ORDER BY`: Ezt a kifejezést vedd fel a `SELECT` lekérdezésedben, ha szeretnéd rendezni az információkat:

```sql
ORDER BY oszlopnev
```

Ekkor az adatokat az `oszlopnev` szerint rendezheted növekvő sorrendbe. Ha például az `oszlopnev` a `vezeteknev`, akkor az adatokat a vezetéknév szerinti ábécésorrendben fogod megkapni.

Az adatokat csökkenő sorrendbe is rendezheted, ha elhelyezed a `DESC` kulcsszót az oszlop neve előtt például így: 

```sql
SELECT * FROM Vasarlo ORDER BY DESC vezeteknev
```

`GROUP BY`: Ha az információkat csoportosítani szeretnéd, a következő kifejezést használd:

```sql
GROUP BY oszlopnev
```

Ekkor azokat az adatokat, melyeknél az `oszlopnev` értéke megegyezik, csoportba foglalod. A következő lekérdezéssel például csoportosíthatod azokat a sorokat, melyek ugyanazzal a `kategoria` értékkel rendelkeznek:

```sql
SELECT * FROM Leltart GROUP BY kategoria
```
:::

A `GROUP BY` és az `ORDER BY` -t használhatod egyazon lekérdezésben is.

### Adatok kinyerése meghatározott sorokból

Gyakran előfordul, hogy nem vagy kíváncsi minden információra, mely a tábládban megtalálható, csak meghatározott sorok információit szeretnéd látni. 

::: tip Az információk forrásának meghatározására három SQL kulcs szót alkalmaznak gyakran:

`WHERE`: Ennek segítségével lekérheted csak azoknak az adatbázis objektumoknak az információit, melyek meghatározott jellemzőkkel rendelkeznek. Lekérheted például azon vásárlók neveit, akik Hajdú-Bihar megyeiek, vagy kilistázhatod csak azokat a termékeket, melyek egy meghatározott ruhakategóriába tartoznak.

`LIMIT`: Segítségével korlátozhatod azon sorok számát melyekből visszakapod az információkat. Lekérdezheted például csak a tábla első három rekordjának információit.

`DISTINCT`: Ez azt teszi lehetővé, hogy egyforma sorok közül csak egyetlen sorból kérje le az információkat. Ha például van egy `Bejelentkezés` táblád akkor lekérheted a `felhasznalonev` oszlopot, de az ismétlődő értékek kizárásával és így a választ tagonként egyetlen rekordra korlátozhatod.
:::

#### `WHERE` használata

A `SELECT` utasítás `WHERE` kulcsszó azt teszi lehetővé számodra, hogy összetett lekérdezéseket valósíthass meg. Tegyük fel például, hogy a főnököd tudni szeretné, hogy hány olyan vásárlód van akiknek a vezetékneve B-vel kezdődik, Debrecenben laknak és a telefonszámukban szerepel 8-as. Ezt a listát egy olyan `SELECT` utasítással készítheted el a főnöködnek, mely a `WHERE` kulcsszót tartalmazza.

A `WHERE` alapvető formája a következő:

```sql
WHERE kifejezes1 AND|OR kifejezes2 AND|OR kifejezes3 ...
```

Itt a `kifejezes` egy értéket határoz meg, melyet össze kell hasonlítani az adatbázisban tárolt értékekkel. Ekkor csak azok a sorok kerülnek lekérdezésre, melyekben a kifjezésre illeszkedő érték szerepel. Annyi kifejezést használhatsz amennyire csak szükséged van, és mindegyiküket `AND` vagy `OR` operátorral kell elválasztanod egymástól. Amikor az `AND` operátort használod mindkét `AND` operátorral összekötött kifejezésnek igaznak kell lennie ahhoz, hogy kiválasszunk egy rekordot. Ha pedig az `OR` operátort használod akkor ahhoz, hogy kiválasszunk egy rekordot elég ha az `OR` operátorral összekötött kifejezések közül az egyik igaz.

| Kifejezés                           | Példa                                  | Eredmény                                                                                                    |
|-------------------------------------|----------------------------------------|-------------------------------------------------------------------------------------------------------------|
| oszlop `=` ertek                      | iranyitoszam `=` "1234"                  | Csak azokat a sorokat válogatja ki, melyekben az iranyitoszam oszlopban az 1234 szerepel.                   |
| oszlop `>` ertek                      | iranyitoszam `>` "4000"                  | Csak azokat a sorokat válogatja ki, melyekben az iranyitoszam értéke 4001 vagy annál nagyobb.               |
| oszlop `>=` ertek                     | iranyitoszam `>=` "4000"                 | Csak azokat a sorokat válogatja ki, melyekben az iranyitoszam értéke 4000 vagy annál nagyobb.               |
| oszlop `<` ertek                      | iranyitoszam `<` "4000"                  | Csak azokat a sorokat válogatja ki, melyekben az iranyitoszam értéke 3999 vagy annál kisebb.                |
| oszlop `<=` ertek                     | iranyitoszam `<=` "4000"                 | Csak azokat a sorokat válogatja ki, melyekben az iranyitoszam értéke 4000 vagy annál kisebb.                |
| oszlop `BETWEEN` ertek1 `AND` ertek2    | iranyitoszam `BETWEEN` "2000" `AND` "3000" | Csak azokat a sorokat válogatja ki, melyekben az iranyitoszam értéke nagyobb mint 1999 és kisebb mint 3001. |
| oszlop `IN` (ertek1, ertek2, ...)     | iranyitoszam `IN` ("4027","8008")        | Csak azokat a sorokat válogatja ki, melyekben az iranyitoszam értéke 4027 vagy 8008.                        |
| oszlop `NOT IN` (ertek1, ertek2, ...) | iranyitoszam `NOT IN` ("4027","8008"     | Csak azokat a sorokat válogatja ki, melyekben az iranyitoszam értéke bármi lehet ami nem 4027 vagy 8008.    |
| oszlop `LIKE` ertek                   | iranyitoszam `LIKE` "9%"                 | Csak azokat a sorokat válogatja ki, melyekben az iranyitoszam értéke 9-essel kezdődik.                      |
| oszlop `NOT LIKE` ertek               | iranyitoszam `NOT LIKE` "9%"             | Csak azokat a sorokat válogatja ki, melyekben az iranyitoszam értéke nem 9-essel kezdődik.                  |

A táblázatban szereplő kifejezések közül bármelyeket kombinálhatod `AND` és `OR` operátorok segítségével. Néhány esetben zárójelekre is szükséged lesz, hogy egyértelműsítsd a lekérdezés feltételeit. A következő lekérdezéssel például kielégítheted a főnököd sürgős igényét arra, hogy megtaláld az összes olyan vásárlót, akinek a neve B-vel kezdődik, Debrecenben él és a telefonszámában van egy 8-as.


```sql
SELECT vezeteknev, keresztnev
FROM Vasarlo
WHERE vezeteknev LIKE "B%"
    AND varos = "Debrecen"
    AND telefon LIKE "%8%"
```

#### `LIMIT` használata

A `LIMIT` kulcsszó azt határozza meg, hogy hány rekordot lehet visszaadni. A `LIMIT` kulcsszó formátuma a következő:

```sql
LIMIT szam
```

Ha az első három olyan vásárlót szeretnéd lekérdezni akik Békés megyében élnek a következő lekérdezést használhatod:

```sql
SELECT * FROM Vasarlo 
WHERE megye = "Bekes" LIMIT 3
```

#### `DISTINCT` használata

A tábla soraiban egy vagy több oszlopban is előfordulhatnak egyforma értékek. Néhány esetben azonban amikor, lekérdezel egy oszlopot, nem szeretnél minden olyan oszlopot kinyerni, melyek ugyanazt az értéket tartalmazzák. Egy értéket csak egyszer szeretnél kinyerni. Mondjuk van egy táblád, mely termékeket tartalmaz és ebben az egyik mező neve `kategoria`. Az adatok között nyilván minden kategóriában rengeteg termék szerepel. Tegyük fel, hogy meg szeretnéd jeleníteni az adatbázisban szereplő összes kategória listáját. Egy olyan listát szeretnél melyben minden kategória csak egyszer szerepel. A `DISTINCT` kulcsszót pont erre a célra találták ki:

```sql
SELECT DISTINCT kategoria FROM Termek
```

### Több tábla adatainak egyesítése

:::tip Két szót használhatsz, ha a SELECT lekérdezésedben két vagy több táblát szeretnél összekapcsolni:

`UNION`: A sorokat egy vagy több táblából adja vissza, és együtt tárolja őket egymás után egyetlen eredménytáblában. Ha például a lekérdezésed 6 sort ad vissza az egyik táblából és 5 sort egy másik táblából akkor az eredményedben 11 sor lesz. 

`JOIN`: A táblákat egymás mellé helyezi és így kapcsolja össze őket, az információkat pedig mindkét táblából lekérdezi.
:::


#### `UNION` használata

Az `UNION` kulcsszót akkor használhatod, ha két vagy több lekérdezés eredményét szeretnéd egyesíteni. Minden lekérdezés eredményét hozzáadja az eredménytáblához az azt megelőző lekérdezés eredménye után. A `UNION` lekérdezés formátuma a következő:

```sql
SELECT lekerdezes UNION ALL SELECT lekerdezes
```

Annyi `SELECT` lekérdezést kapcsolhatsz össze, amennyire csak szükséged van. A `SELECT` utasítás bármely érvényes `SELECT` kulcsszót tartalmazhat, például `WHERE`, `LIMIT` és így tovább. 
A lekérdezések szabályai a következők:

:::warning Minden SELECT utasításban egyforma mennyiségű oszlopot kell lekérdezned.

Az egyes lekérdezésekben kiválasztott oszlopoknak ugyanolyan adattípusai kell legyenek.
:::

Az eredménytábla tartalmazza az első lekérdezés összes sorát, majd ezután a második lekérdezés összes sorát és így tovább. Az eredmény táblában az oszlopok neveit az első `SELECT` utasítás oszlopnevei adják.

A `SELECT` utasítások sorozatával lekérdezheted ugyanannak a táblának a különböző oszlopait az azonban elég ritka, hogy úgy akarsz létrehozni egy új táblát, hogy elhelyezel benne egy oszlopot egy táblából majd egy másik oszlopot ugyanabból a táblából. Sokkal valószínűbb, hogy különböző táblák oszlopait szeretnéd összeilleszteni. Tegyük fel például, hogy van egy táblád melyben azokat a tagokat tartod számon, akik kiléptek egy klubból (`RegiTag`) és egy másik táblád melyben az aktuális tagok szerepelnek (Tag). Az összes tagot beleértve a korábbi és a jelenlegi tagokat is úgy kaphatod meg, ha a következő lekérdezést használod:

```sql
SELECT vezeteknev, keresztnev
FROM Tag 
UNION ALL SELECT vezeteknev, keresztnev
FROM RegiTag
```

A lekérdezés eredménye az összes jelenlegi tag vezeték és keresztneve majd ezt követően az összes már kilépett tag vezeték és keresztneve lesz.

Attól függően, hogyan szervezed az adataidat, lehet, hogy lesznek olyan nevek melyek kétszer is előfordulnak. Lehet esetleg, hogy egy tag már kilépett és a neve bekerült a `RegiTag` táblába - viszont ismét csatlakozott és a neve így bekerült a `Tag` táblába is. Ha nem szeretnéd, hogy ilyen duplikált értékek forduljanak elő, használd az `ALL` kulcsszót. Ha megadod, akkor az ismétlődő sorok nem kerülnek bele az eredményedbe.

Az `ORDER BY` -t használhatod az egyes SELECT utasításokban, ahogy azt már láttad. Ha azt szeretnéd, hogy az `ORDER BY` az egész eredményhalmazra érvényes legyen és ne csak arra a lekérdezésre melynek a végén szerepel, akkor használj zárójeleket a következőképpen:

```sql
(SELECT vezeteknev, keresztnev
FROM Tag 
UNION ALL SELECT vezeteknev, keresztnev
FROM RegiTag) ORDER BY vezeteknev
```

#### Összekapcsolás

Ha egymás mellé helyezve egyesítesz táblákat, azt összekapcsolásnak nevezzük. A táblákat az egy oszlopukban lévő adataik egyezése alapján kapcsolhatod össze - magyarul az alapján az oszlop alapján mely mindkettőjükben megvan. Az egyesített eredménytábla melyet egy összekapcsolásból kapsz mindkét tábla minden oszlopát tartalmazza. 
Ha például van egy `tabla1` táblád, melynek két oszlopa van (`tag_azon` és `magassag`) és van egy `tabla2` táblád melynek szintén két oszlopa van (`tag_azon` és `suly`) akkor egy összekapcsolással egy a következő négy oszloppal rendelkező táblát kaphatsz: `tag_azon`, `magassag`, `tag_azon` és `suly`.

Az összekapcsolás két gyakori típusa a belső összekapcsolás és a külső összekapcsolás.  

:::tip A belső és külső összekapcsolás közötti különbség az eredménytáblában megjelenő rekordok számában van.

**Belső összekapcsolás:** A belső összekapcsolással létrehozott egyesített táblában csak azok a sorok jelennek meg, melyek mindkét táblában megtalálhatóak.

**Külső összekapcsolás:** A külső összekapacsolással létrehozott egyesített táblában minden sor megjelenik amelyik legalább az egyik táblában megvan és azon sorok helyén melyek a másik táblában nem léteznek üres mezők lesznek. 
:::

Ha például a `tabla1` táblában van Józsinak egy rekordja és Sárinak egy rekordja, a `tabla2` táblában pedig van Sárinak egy rekordja, akkor egy belső összekapcsolásnál csak egyetlen sor jelenik meg: Sári rekordja. Külső kapcsolás esetén azonban két rekord jelenik meg - egy sor Józsihoz és egy sor Sárihoz - habár Józsi sorában üresen marad a `suly` mező.

A külső kapcsolás eredménytáblája az egyik tábla minden rekordját tartalmazza. Ha az adott tábla bármely sora hiányzik a másik táblából, akkor a másik táblához tartozó oszlopok üresek lesznek. Az eredmény tábla tartalmát nyilvánvalóan az határozza meg, hogy melyik táblából kerül be az összes sor, melyre a második tábla sorainak illeszkedniük kell. A külső kapcsolás két fajtája határozza meg, hogy melyik tábla állítja be a sorokat, és melyik táblának kell ezekre illeszkednie: ezek a `LEFT JOIN` és a `RIGHT JOIN`. 

A belső kapcsoláshoz, illetve két féle külső kapcsoláshoz különböző `SELECT` utasításokat használhatsz. A következő lekérdezés egy belső kapcsolás:

```sql
SELECT oszlopnevek_listaja 
FROM tabla1, tabla2
WHERE tabla1.oszlop1 = tabla2.oszlop2
```

Ezek a lekérdezések pedig külső kapcsolások.

```sql
SELECT oszlopnevek_listaja
FROM tabla2 LEFT JOIN tabla2 ON
tabla1.oszlop1 = tabla2.oszlop2

SELECT oszlopnevek_listaja
FROM tabla1 RIGHT JOIN tabla2 ON
tabla1.oszlop1 = tabla2.oszlop2
```

A `tabla1` és `tabla2` mindhárom lekérdezésben az összekapcsolt táblákat jelöli. Kettőnél több táblát is összekapcsolhatsz. Az `oszlop1` és az `oszlop2` azoknak az oszlopoknak a nevei, melyek értékeit összehasonlítjuk a táblák összekapcsolásához. A táblák összekapcsolását ezeknek az oszlopoknak az adatai alapján végezhetjük el. Ennek a két oszlopnak megegyezhet a neve vagy különböző neveik is lehetnek, de mindenképpen ugyan olyan típusú adatokat kell tartalmazni. 

A belső és külső kapcsolásokra vegyünk egy példának egy ruhakatalógust mely két táblából áll. Az egyik tábla neve `Termek`, melyek két oszloppal rendelkezik, ezek a `Nev` és a `Tipus` melyekben a következő adatokat találod:

| Nev          | Tipus  |
|--------------|--------|
| Póló         | ing    |
| Öltönying    | ing    |
| Farmernadrág | nadrág |

A második tábla a `Szin`, mely két oszloppal rendelkezik, ezek a `Nev` és a `Szin`, melyekben a következő adatokat találod: 

| Nev    | Szin   |
|--------|--------|
| Póló   | fehér  |
| Póló   | piros  |
| Papucs | fekete |

Fel kell tenned egy olyan kérdést, melyhez mindkét táblából szükséged van információkra. Ha a következő lekérdezéssel végrehajtasz egy belső összekapcsolást:

```sql
SELECT * FROM Termek, Szin WHERE Termek.Nev = Szin.Nev
```

akkor a következő táblát fogod kapni, melyben négy oszlop szerepel, a `Nev` (a `Termek` táblából), a `Tipus`, a `Nev` (a `Szin` táblából) és a `Szin`.

| Nev  | Tipus | Nev  | Szin  |
|------|-------|------|-------|
| Póló | Ing   | Póló | fehér |
| Póló | Ing   | Póló | piros |

Figyeld meg, hogy csak a `Póló` jelenik meg az eredménytáblában - ennek az az oka, hogy csak a `Póló` van meg mindkét eredeti táblában az összekapcsolás előtt. Ha viszont egy bal oldali külső kapcsolást végzel el a következő lekérdezéssel:

```sql
SELECT * FROM Termek LEFT JOIN Szin ON Termek.Nev = Szin.Nev
```

akkor a következő eredménytáblát fogod kapni ugyanazzal a négy oszloppal - a `Nev` (a `Termek` táblából), a `Tipus`, a `Nev` (a `Szin` táblából) és a `Szin` -. de más sorokkal:

| Nev          | Tipus  | Nev  | Szin  |
|--------------|--------|------|-------|
| Póló         | Ing    | Póló | fehér |
| Póló         | Ing    | Póló | piros |
| Öltönying    | Ing    | NULL | NULL  |
| Farmernadrág | Nadrág | NULL | NULL  |

Ebben a táblában négy rekord szerepel. Az első két sora megegyezik a belső összekapcsolás első két sorával, de két további sora is van - ezek azok a rekordok melyek a `Termek` táblában a bal oldalon szerepelnek, a `Szin` táblában viszont nem. Figyeld meg, hogy a `Szin` táblából származó oszlopok üresek az utolsó két rekordban.

Harmadrészt tekintsük azt az esetet, amelyben egy jobb oldali külső kapcsolást hajtasz végre a következő utasítással:

```sql
SELECT * FROM Termek RIGHT JOIN Szin ON Termek.Nev = Szin.Nev
```

Ekkor a következő eredménytáblát fogod kapni, ismét ugyanazzal a négy oszloppal, de megint más sorokkal:

| Nev          | Tipus  | Nev  | Szin  |
|--------------|--------|------|-------|
| Póló         | Ing    | Póló | fehér |
| Póló         | Ing    | Póló | piros |
| NULL         | NULL   | Papucs | fekete  |

Figyeld meg, hogy ezen eredmények között a jobb oldalon a `Szin` tábla összes rekordja szerepel viszont a `Termek` tábla esetén ez nincs így.
Figyeld meg, hogy a `Termek` tábla oszlopaiban üres mezők szerepelnek, mivel abban nincs a `Papucs` értékhez tartozó rekord.

Azokban az összekapcsolásokban, melyekről eddig szó volt a táblákban egyező bejegyzéseket kerestünk. Néha azonban az is hasznos lehet, ha olyan rekordot keresel, melyekhez nem tartozik megfelelő bejegyzés egy másik táblában. Tegyük fel például, hogy tudni szeretnéd, kik azok akik még soha nem jelentkeztek be egy alkalmazásba. Tegyük fel, hogy van egy táblád melyben a tagjaid felhasználónevét tárolod (`Tag`) és egy másik táblád, melyben a bejelentkezési dátumokat(`Bejelentkezés`). Felteheted a kérdést úgy, hogy ebből a két táblából kérsz le adatokat. A következő lekérdezés segítségével megtudhatod, hogy mely felhasználóneveknek nincs egyetlen bejegyzése sem a `Bejelentkezes` táblában:

```sql
SELECT felhasznalonev 
FROM Tag LEFT JOIN Bejelentkezes ON Tag.felhasznalonev = Bejelentkzes.felhasznalonev 
WHERE Bejelentkezes.felhasznalonev IS NULL
```

Ezzel a lekérdezéssel megkaphatod azoknak a `Tag` táblában szereplő felhasználóneveknek a listáját, melyek nem fordulnak elő a `Bejelentkezes` táblában. 

### Adatok frissítése az adatbázisban

Ha módosítod egy adatbázis meglévő információit, azt az információk frissítésének nevezzük. Lehet például, hogy módosítanod kell egy vásárló címét, mert elköltözött vagy fel kell venned egy telefonszámot, mert amikor eredetileg megadtad azt az információt ezt a mezőt üresen hagytad.

Az `UPDATE` utasítás elég egyértelmű:

```sql
UPDATE tablanev 
SET oszlop=ertek
WHERE feltetel
```

A `SET` -ben fel kell sorolnod az oszlopokat, melyeket frissíteni akarsz és meg kell adnod az új értékeket, melyeket be szeretnél szúrni. Egy utasításban add meg az összes olyan oszlopot, melyet módosítani szeretnél. `WHERE` záradék nélkül az oszlop vagy oszlopok értéke minden egyes rekordban módosulna. Ha viszont megadsz egy `WHERE` záradékot, akkor ezzel meghatározhatod, hogy mely rekordokat szeretnéd frissíteni. Ha például szeretnél egy címet frissíteni a `Vasarlo` táblában, használd a következő utasítást:

```sql
UPDATE Vasarlo SET utca="Budapesti krt. 123"
                   telefon="555-555-555"
              WHERE vezeteknev="Ceglédi"
```

### Adatok törlése az adatbázisból

Ahhoz, hogy naprakészen tarthasd az adatbázisodat, törölnöd kell azokat az adatokat, melyek fölött eljárt az idő. Légy azonban nagyon óvatos az információk törlésével. Ha törlöd az adatokat, akkor örökre elvesznek. Nem tudod visszaállítani őket. Egy táblából törölhetsz egy sort vagy egy oszlopot, de törölheted az egész táblát vagy adatbázist is és kezdhetsz minden elölről.

A következő utasítással törölhetsz egy sort egy táblából a `DELETE` utasítás segítségével:

```sql
DELETE FROM tablanev WHERE feltetel
```

Ha `WHERE` feltétel nélkül használod a `DELETE` utasítást akkor a tábla minden adatát törölni fogod. Egy táblából a következőképpen törölhetsz egy oszlopot az `ALTER` utasítással:

```sql
ALTER TABLE tablanev DROP oszlopnev
```

Egy egész táblát vagy adatbázist pedig a következőkkel távolíthatsz el:

```sql
ALTER TABLE tablanev DROP oszlopnev

DROP DATABASE adatbazisnev
```