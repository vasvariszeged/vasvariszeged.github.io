---
icon: fa-solid fa-4
---

# Adatok típusai

- **Egyszerű (atomi) adat**: szám, string, dátum, logikai érték.

- **Összetett adat**: egyszerű adatokból képezhető. Változatai:
    - *halmaz*: egynemű elemek halmaza.
        - Példa: egy vállalat osztályai.
    - *lista*: egynemű elemek rendezett sorozata. 
        - Példa: könyv szerzői.
    - *struktúra*: különféle elemek rendezett sorozata. 
        - Példa: lakcím = (helység, utca, házszám).

- **NULL**: definiálatlan adat.

### Felépítése

- **Adatbázis** (= DB = database): *adott formátum és rendszer szerint tárolt adatok együttese.*
- **Adatbázis-kezelő rendszer** (= DBMS = Database Management System): *az adatbázist kezelő szoftver.*
- **Rekord** (= feljegyzés): *az adatbázis alapvető adategysége. Általában struktúra felépítésű.*

### A DBMS fő feladatai

- adatstruktúra (adatbázisséma) definiálása,
- adatok aktualizálása (új felvétel, törlés, módosítás), lekérdezési lehetőségek,
- fejlesztő környezet biztosítása célalkalmazások létrehozásához.

### Néhány ismertebb DBMS

- **Access** (Microsoft): könnyen kezelhető grafikus felület, kisebb
alkalmazásokhoz.
- **MySQL**: nyílt forráskódú adatbázis-szerver, közepes méretű (pl. webes) alkalmazásokhoz.

## Adatmodellek áttekintése

Az adatbázisséma az adatbázis struktúrájának leírása. Erre különféle adatmodellek használatosak.

### Hierarchikus modell

A feldolgozás fabejáró és egyéb fastruktúra kezelő algoritmusok segítségével történik. Ma már csak történeti jelentősége van.

### Hálós modell

A pointerek ciklikusan körbefutnak egy összetartozó rekordcsoporton, egy ilyen csoportot setnek neveznek. Ma már szintén csak történeti jelentőséggel bír.

### Relációs modell

Az adatok kétdimenziós táblákban tárolódnak, a rekordok közötti kapcsolatot pointerek helyett táblázatok valósítják meg. A relációs modellre épülő adatbáziskezelőket RDBMS-nek nevezzük. Szabványos leíró/lekérdező nyelvük az SQL. Jelenleg a legszélesebb körben használatos.


### Egyed-kapcsolat modell

Grafikus leíró eszköz, diagram segítségével szemléletesen adja meg az adatbázis struktúráját.
Tegyük fel, hogy egy könyvtár kölcsönzési nyilvántartását szeretnénk adatbázissal megoldani. 

Ehhez nyilvántartást kell vezetni
- a könyvekről,
- az olvasókról,
- a kikölcsönzési és visszahozási időpontokról.

A modell megalkotásához néhány alapfogalmat meg kell ismernünk. 

**Egyednek** nevezünk egy, a valós világban létező dolgot, amit tulajdonságokkal akarunk leírni. Esetünkben egyed lehet egy *könyv* a könyvtárban, illetve egy adott *olvasó*. 

**Tulajdonságnak** nevezzük az egyed egy jellemzőjét. Például: A *könyv*, mint egyed legfontosabb tulajdonságai a címe, és a szerző neve.

::: tip A tulajdonságokat úgy célszerű megválasztani, hogy azok egyértelműen meghatározzák az egyedet.
:::

Mivel egy szerző könyve több kiadásban is megjelenhet, sőt kiadásból is több példány lehet a könyvtárban, így minden könyvhöz egy egyedi azonosítót, könyvszámot *(könyvtári számot)* célszerű felvenni.

Ekkor a "*könyv*" egyed tulajdonságai: könyvszám, szerző, cím. Hasonlóan az olvasó tulajdonságai: olvasószám, név, lakcím tulajdonságokat rendelhetünk.

::: warning KÖNYVTÁRI NYILVÁNTARTÁSUNK AZONBAN EZZEL MÉG NINCS KÉSZ!

A könyv és olvasó egyedek között ugyanis egy sajátos kapcsolat léphet fel, amelyet kölcsönzésnek nevezünk. Ezen kapcsolathoz a kivétel és visszahozás időpontját rendelhetjük tulajdonságként.
:::

A valós világ jelenségeit *egyedekkel*, *tulajdonságokkal* és *kapcsolatokkal* leíró modellt **egyed-kapcsolat modellnek**, az ezt ábrázoló diagramot egyed-kapcsolat diagramnak nevezik.

![EK Könyvtár](/assets/images/vasvari/ek_konyvtar.png)

Az egyed-kapcsolat diagramoknak sajátos jelölésrendszerük van:

- az egyedeket téglalappal,
- az attribútumokat ellipszissel, 
- a kapcsolatokat rombusszal


### Kapcsolatok típusai

Két egyed közötti **kapcsolat**, mint a könyvtári példa esetében. 

Ennek három altípusa lehetséges (*E és F jelöli a két egyedtípust*):

1. 1:1 kapcsolat, amikor minden E-egyedhez csak legfeljebb egy F-egyed tartozhat, és fordítva. 

    (pl.: Férj &leftarrow; Házasság &rightarrow; Feleség)

2. 1:N kapcsolat, amikor egy E-egyedhez több F-egyed tartozhat, de ez fordítva nem igaz, vagyis egy F-egyedhez csak legfeljebb egy E-egyed tartozhat. 

    (pl.: Anya &leftarrow; Gyermeke — Gyerek)

3. N:M kapcsolat, amikor mindkét fajta egyedhez tetszőleges számú másik fajta egyed tartozhat. 

    (pl.: Hallgató — Részt vesz — Kurzus)

::: tip A könyvtári nyilvántartás mindhárom típusra példával szolgálhat.
:::

1. Tételezzük fel, hogy a könyvtáros egy olvasónak egyszerre csak egy könyvet hajlandó kiadni és csak azt kívánja nyilvántartani, hogy egy adott könyv éppen kinél van, azt nem, hogy korábban kinél volt. A fenti feltételezések mellett a **könyv és olvasó egyedek között 1:1 kapcsolat lép fel**, hiszen egy könyv egyszerre csak egy olvasónál lehet, illetve egy olvasó egyszerre csak egy könyvet vihet ki.

2. Most tételezzük fel, hogy a könyvtáros eltekint az első feltételtől, és egy olvasónak egyszerre több könyvet is hajlandó kiadni. Ekkor a **könyv és olvasó egyedek között N:1 kapcsolat lép fel**, ugyanis egy olvasónál egyszerre több könyv lehet, viszont egy könyv egyszerre csak egy olvasónál tartózkodhat.

3. Tegyük fel, hogy a könyvtáros eltekint az utolsó feltételtől is, és azt is nyilván akarja tartani, hogy egy adott könyv korábban mely olvasóknál mettől meddig volt kint. Ekkor már egy könyv több könyv-olvasó kapcsolatban is részt vehet, ezért a **két egyed között N:M kapcsolat áll elő.**

## SQL

SQL = **Structured Query Language** (= struktúrált lekérdező nyelv). A relációs adatbáziskezelés szabványos nyelve.

Az SQL utasításait két fő csoportba szokták sorolni:
- **DDL** (= Data Definition Language): adatstruktúra definiáló utasítások.
- **DML** (= Data Manipulation Language): adatokon műveletet végző utasítások.

Az alábbi csoportokban tárgyaljuk az SQL utasításokat: 
- adatbázisséma definiálása (**DDL**),
- adatok aktualizálása (**DML**),
- lekérdezési lehetőségek (**DML**).

### Szintaxis

- **Kisbetű** és **nagybetű** a nyelv alapszavaiban **egyenértékű**.
- Utasítások s**orfolytonosan írható**k, lezárás pontosvesszővel.
- **Változó nincs**, csak tábla és oszlopnevekre lehet hivatkozni. Kifejezésben hivatkozás egy tábla adott oszlopára: **tábla.oszlop**
- Alias név: név **AS** másodnév
- Relációjelek: =, <=, >=, !=
- Logikai műveletek: **AND**, **OR**, **NOT**. 
    
    Az SQL rendszerek "háromértékű logikát" használnak, vagyis a **TRUE** és **FALSE** mellett a **NULL** (definiálatlan) érték is felléphet. Ha egy kifejezés valamelyik eleme **NULL**, akkor a kifejezés értéke is **NULL** lesz.

### Speciális logikai kifejezések
Igaz, ha az x mező értéke NULL.

```sql
x IS NULL
```
*Igaz, ha a <= x <= b*

```sql
x BETWEEN a AND b
```
*Igaz, ha x a halmaz minden elemével a megadott relációban van.*

**Példa**: fizetés != ALL (81000, 136000, 118000)

```sql
x != ALL fizetesek 
```
*Igaz, ha a halmaznak van olyan eleme, amellyel x a megadott relációban van. *

**Példa**: fizetés < ANY (81000, 136000, 118000)

```sql
x < ANY fizetesek 
```

*Igaz, ha a halmaz nem üres. *

**Például** egy "EXISTS lekérdezés" kifejezés értéke igaz, ha a lekérdezés legalább egy elemet ad vissza.

```sql
EXISTS halmaz
```
*Igaz, ha az x karaktersorozat megfelel a megadott mintának. *

**Példa**: lakcím LIKE "%Vár u.%" igaz minden olyan lakcímre, amelyben szerepel a "Vár u." részlet.

```sql
x LIKE "minta"
```

### Relációsémák definiálása (DDL)

Relációséma létrehozására a **CREATE TABLE** utasítás szolgál, amely egyben egy üres táblát is létrehoz a sémához. Az attribútumok definiálása mellett a kulcsok és külső kulcsok megadására is lehetőséget nyújt:
 
```sql 
CREATE TABLE kolcsonzes --tablanev 
(
    id int(11) NOT NULL, --[oszlopnev] [adatipus] [feltetel]
    kivetel timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ,
    visszahozas timestamp NOT NULL DEFAULT ’0000-00-00 00:00:00’,
    olvaso_id int(11) NOT NULL,
    konyv_id int(11) NOT NULL
) --[tablafeltetelek]
ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;
```

Az adattípushoz **DEFAULT** érték megadásával alapértelmezett érték definiálható. Ha ilyet nem adunk meg, az alapértelmezett érték **NULL**.

A tábla módosításakor a definiált kulcsfeltételek automatikusan ellenőrzésre kerülnek. **PRIMARY KEY** esetén ez azt jelenti, hogy a rendszer nem enged olyan módosítást illetve új sor felvételét, amely egy már meglévő kulccsal ütközne.

Relációséma törlése: **DROP TABLE** táblanév; hatására a séma és a hozzá tartozó adattábla törlődik.

### Adattábla aktualizálása (DML)

A táblába új sor felvétele az

```sql
INSERT INTO táblanév [(oszloplista)] VALUES (értéklista);
```

Ha oszloplista nem szerepel, akkor valamennyi oszlop értéket kap a **CREATE TABLE**-ben megadott sorrendben. 
Egyébként, az oszlopnév-listában nem szereplő mezők **NULL** értéket kapnak.

Például:
```sql
INSERT INTO konyv
VALUES (’ ’,’ ’,’ ’);
```
vagy
```sql
INSERT INTO konyv (szerzo, cim)
VALUES (’William Shakespeare’, ’Romeo es Julia’);
```

::: danger A táblába adatokat tölthetünk át másik táblából is, ha a VALUES (értéklista) helyére egy alkérdést írunk.
:::

Sor(ok) módosítása az 
```sql
UPDATE táblanév SET oszlop = kifejezés [ WHERE feltétel ];
```
utasítással történik. Az értékadás minden olyan soron végrehajtódik, amely eleget tesz a **WHERE** feltételnek. Ha **WHERE** feltétel nem szerepel, akkor az értékadás az összes sorra megtörténik.

Példul:

```sql
UPDATE olvaso
SET nev = ’Nagy Ferenc Jozsef’ 
WHERE olvasoszam = 2; 
```

### Lekérdezés (DML)

Lekérdezésre a **SELECT** utasítás szolgál, amely egy vagy több adattáblából egy eredménytáblát állít elő. Az eredménytábla a képernyőn listázásra kerül, vagy más módon használható fel.

A **SELECT** utasítás alapváltozata:
```sql
SELECT oszloplista FROM táblanévlista [WHERE feltétel];
```

A **SELECT** után megadott oszloplista valójában nem csak oszlopneveket, hanem tetszőleges kifejezéseket is tartalmazhat, és az eredménytábla oszlopainak elnevezésére **alias** neveket adhatunk meg:

pl.: a Raktár(cikkszám, név, egységár, mennyiség) táblából egy E(áru, érték) tábla létrehozása:

```sql
SELECT nev AS aru, egysegar*mennyiseg AS ertek
FROM Raktar;
```

pl.: a Személy(adószám, név, születésiév) táblából egy E(név, életkor) tábla létrehozása:

```sql
SELECT nev, 2007-szuletesiev AS eletkor 
FROM Szemely;
```

Egy oszlop értékeiből egyetlen értéket hoznak létre (például átlag). 

Általános alakjuk: függvénynév ( [DISTINCT] oszlopnév )
Ha **DISTINCT** szerepel, akkor az oszlopban szereplő azonos értékeket csak egyszer kell figyelembe venni.
- **AVG**: átlagérték.
- **SUM**: összeg.
- **MAX**: maximális érték.
- **MIN**: minimális érték.
- **COUNT**: elemek száma. Ennél a függvénynél oszlopnév helyére * is írható, amely valamennyi oszlopot együtt jelenti.

::: tip PÉLDÁK
:::

Az eredménytábla egyetlen elemből áll, amely az átlagfizetést adja:
```sql
SELECT AVG(fizetes) FROM Dolgozo 
```
A fizetések összege:
```sql
SELECT SUM(fizetes) FROM Dolgozo
```
A Dolgozó tábla sorainak száma, vagyis a dolgozók száma.
```sql
SELECT COUNT(*) FROM Dolgozo
```
Az osztályok száma.
```sql
SELECT COUNT(DISTINCT osztkod) FROM Dolgozo
```

### Csoportosítás

#### GROUP BY

Ha a tábla sorait csoportonként szeretnénk összesíteni, akkor a **SELECT** utasítás a **GROUP BY** oszloplista alparanccsal bővítendő. Egy csoportba azok a sorok tartoznak, melyeknél oszloplista értéke azonos. Az eredménytáblában egy csoportból egy rekord lesz. Az összesítő függvények csoportonként hajtódnak végre. A *Dolgozó* táblából osztályonként az átlagfizetést számoljuk. Az eredménytáblának annyi sora lesz, ahány osztály van:

```sql
SELECT osztkod, AVG(fizetes) FROM Dolgozo
GROUP BY osztkod;
```

A PROJORA(dolgozó, projekt, óra) táblából dolgozónkénti és projektenkénti óraszám összegzés:

```sql
SELECT dolgozo, SUM(ora) FROM Projora GROUP BY dolgozo;
```

```sql
SELECT projekt, SUM(ora) FROM Projora GROUP BY projekt;
```

Csoportosítási szabály: A **SELECT** után összesítő függvényen kívül csak olyan oszlopnév tüntethető fel, amely a **GROUP BY**-ban is szerepel.

A **GROUP BY** által képezett csoportok közül válogathatunk a **HAVING** feltétel alparancs segítségével: csak a feltételnek eleget tevő csoportok kerülnek összesítésre az eredménytáblába.


Azon osztályok listája, ahol az átlagfizetés > 180 000 Ft:

```sql
SELECT osztkod, AVG(fizetes) FROM Dolgozo GROUP BY osztkod
HAVING AVG(fizetes) > 180000;
```

#### ORDER BY

Bár a relációs modell nem definiálja a rekordok sorrendjét, a gyakorlatban
rendszerint valamilyen rendezettségben kívánjuk látni az eredményt. 

Dolgozók és fizetéseik listája fizetés szerint csökkenő sorrendben:

```sql
SELECT nev, fizetes FROM Dolgozo ORDER BY fizetes DESC;
```

::: danger A végrehajtási sorrend határozza meg, hogy melyik alparancsban mire lehet hivatkozni. 

Például **ORDER BY** után csak olyan oszlop adható meg, amely a **SELECT**-ben szerepel, összesítő függvény csak a **GROUP BY** után végrehajtott alparancsokban adható meg, stb.
:::


Ábécé sorrendben azon osztályok listája, ahol a legkisebb fizetés is nagyobb, mint 200 000:

```sql
SELECT osztalynev, MIN(fizetes)
FROM Dolgozo, Osztaly
WHERE Dolgozo.osztkod=Osztaly.osztkod
GROUP BY Dolgozo.osztkod, osztalynev
HAVING MIN(fizetes)>200000
ORDER BY osztalynev;
```

### Alkérdések

Az **SQL** nyelv ismertetésének elején láttunk halmazokat tartalmazó logikai kifejezéseket. Egy ilyen halmaz **SELECT** utasítással is előállítható, például a
```sql 
'Toth Pal' IN (SELECT nev FROM Dolgozo WHERE osztalykod='015') 
``` 
logikai kifejezés akkor igaz, ha Tóth Pál a 015 kódú osztály dolgozója, vagy
```sql 
EXISTS (SELECT * FROM Dolgozo WHERE fizetes < 80000) 
``` 
akkor igaz, ha van 80000 Ft-nál kisebb fizetésű dolgozó.

Ha egy **SELECT** utasítás **WHERE** vagy **HAVING** feltételében olyan logikai kifejezés szerepel, amely **SELECT** utasítást tartalmaz, ezt alkérdésnek vagy belső **SELECT**-nek is nevezik. Általában, valamely **SQL** utasítás belsejében szereplő **SELECT** utasítást alkérdésnek nevezzük.

Az alábbi utasítás azon dolgozók listáját adja, amelyek fizetése kisebb, mint az átlagfizetés:

```sql
SELECT nev, fizetes
FROM Dolgozo
WHERE fizetes < ( SELECT AVG(fizetes) FROM dolgozo );
```
Ebben a példában az alkérdést elég csak egyszer kiértékelni, hiszen a *Dolgozó* tábla minden egyes sorára ugyanazt az eredményt kapjuk. Ha viszont a belső **SELECT**-ben a külső **SELECT**-beli táblák oszlopnevei szerepelnek, akkor a külső **SELECT** minden egyes rekordjára kiértékelődik a belső **SELECT**. Egy kiértékelés során a külső változónevek konstansnak tekintendők.

A Dolgozó(név, cím, osztálykód, fizetés) táblából azon dolgozók listáját kérjük, akiknek az osztályon belül a legnagyobb a fizetése. A *Dolgozó* tábla két példányát a **D1** és **D2** alias nevek különböztetik meg:

```sql
SELECT osztalykod, nev, fizetes 
FROM Dolgozo AS D1 
WHERE fizetes = ( SELECT MAX(fizetes)
                  FROM Dolgozo AS D2
                  WHERE D1.osztalykod = D2.osztalykod);
```

::: danger Ügyeljünk a típuskompatibilitásra! Hibás például az alábbi lekérdezés WHERE feltétele, mert az alkérdés rekordhalmazt ad vissza, amely nem hasonlítható össze a fizetés értékkel.
:::

```sql
SELECT adaszam, nev
FROM Dolgozo
WHERE fizetes = (SELECT * FROM Dolgozo
                 WHERE nev="Kovacs");
```

Bizonyos esetekben az alkérdés join-műveletet helyettesít, például a

Könyv (**könyvszám**, szerző, cím, olvasószám, kivétel)

Olvasó (**olvasószám**, név, lakcím)

sémák esetén az alábbi két lekérdezés egyaránt a pécsi olvasók által kikölcsönzött könyvek listáját adja:

```sql
SELECT szerzo, cim FROM Konyv
WHERE olvasoszam IN
                (SELECT olvasoszam FROM Olvaso
                 WHERE lakcim
                 LIKE "%Pecs%");
```

```sql
SELECT szerzo, cim
FROM Konyv, Olvaso
WHERE Konyv.olvasoszam = Olvaso.olvasoszam 
AND lakcim LIKE "%Pecs%";
```

Nem csak **SELECT** utasításban alkalmazható alkérdés:

Dolgozó (**adószám**, név, fizetés)

Projekt (**adószám**, pkód, óraszám)

Az alábbi utasítás fizetésemelést hajt végre az *A12* projekt dolgozóinál:

```sql
UPDATE Dolgozo
SET fizetes=fizetes+10000
WHERE adoszam IN ( SELECT adoszam 
                   FROM Projekt 
                   WHERE pkod='A12' );
```