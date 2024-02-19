---
icon: fa-solid fa-1
---

# Ismerkedjünk meg az SQL-lel

:::note Ennek a témakörnek az a célja, hogy

- megtudjuk, hogyan működik a SQL
- kommunikálunk a SQL-lel
- biztonságba helyezzük a SQL-ben tárolt adatokat
:::

Sok dinamikus weboldalhoz és alkalmazáshoz szükség van valamilyen adatbázisra. Az adatbázis olyan információkat tartalmazhat, melyeket a weboldal vagy alkalmazás megjelenít a felhasználó számára.
Az SQL a weboldalakon és alkalmazásokban leggyakrabban használt adatbázis, arra tervezték, hogy kicsi és gyors legyen, kimondottan a weboldalak és alkalmazások számára.

Mint ahogy említettem is ebben a témakörben megtanulod, hogy hogyan működik az SQL és megtudhatod, hogy hogyan kommunikálhatsz vele. 

### Ismerjük meg az SQL működését

Az SQL szerverből, adatbázisból épül fel. A szerver irányítja az adatbázis rendszert. Ez kezeli az összes adatbázis utasítást. Például ha szeretnél létrehozni egy új adatbázist akkor küldened kell egy üzenetet az SQL szervernek melyben megmondod, hogy csinálj egy új adatbázist `ujadatbazis` néven. Ekkor az SQL szerver létrehoz egy alkönyvtárat az adatkönyvtárban, az alkönyvtárat ellátja az `ujadatok` névvel és elhelyezi benne a szükséges fájlokat a megfelelő formátummal. Ha adatokat szeretnénk beszúrni ebbe az adatbázisba akkor ugyanígy egy üzenetet kell küldeni a szervernek melyben megmondod neki az adatokat és hogy hová szeretnéd elhelyezni azokat.

Ahhoz, hogy utasításokat tudj adni a szervernek futnia kell és várnia a kéréseket. A szerver általában úgy van beállítva, hogy elindul, amikor elindítod az XAMPP-ot - ha nem indulna el akkor manuálisan indítsuk el - és ezután fut. 

### Ismerkedjünk meg az adatbázisok struktúrájával!

Az SQL egy relációs adatbázis-kezelő rendszer - RDBMS vagyis Relational Database Management System. Az SQL szerver rengeteg adatbázist tud kezelni egyszerre. Valójában az is előfordulhat, hogy sok-sok ember különböző adatbázisait kezeli egyetlen SQL szerver. Minden adatbázis tartalmaz egy olyan szerkezetet mely arra szolgál, hogy az adatokat tárolja benne, illetve tartalmazza magukat az adatokat. Létezhetnek adatbázisok adatok nélkül is csak a teljesen üres struktúrával - melyek malmoznak és alig várják már, hogy adatokat tároljanak bennük. :D

Egy adatbázisban egy vagy több táblában tárolhatsz adatokat. Mielőtt az adatokat elhelyezhetnéd bennük, létre kell hoznod az adatbázist és a táblákat is. Először egy üres adatbázist hozol létre. Ezután helyezheted el az adatbázisodban az üres táblákat.

Az adatbázistáblák olyan elrendezésűek, mint a táblázatok melyeket már megszokhattál hiszen sorokból és oszlopókból állnak. Minden **sor** az adatbázis egy egyedét képviseli, például egy számítógépet, egy könyvet vagy egy projektet. Minden **oszlop** egy információelemet tartalmaz az adott egyedről, például egy számítógép nevét, egy könyv címét vagy egy projekt kezdési dátumát. Azt a helyet, ahol egy adott sor és egy adott oszlop metszi egymást, a tábla egyedi celláját mezőnek nevezzük. 

Az adatbázisok táblái között kapcsolatok is lehetnek. Egy tábla egyik sora gyakran kapcsolódik egy másik tábla több sorához. Lehet például egy olyan adatbázisod melyben a könyveidet tárolod. Ekkor lesz egy könyv táblád és egy szerző táblád. A szerző tábla egy rekordja egy olyan íróról is tárolhat információkat, aki a könyvtáblában szereplő könyv szerzője. Amikor kapcsolatban állnak egymással a tábláid az egyik táblában szerepeltetned kell egy olyan oszlopot, melynek adatai egy másik tábla oszlopában szereplő adatokhoz illeszkednek. Csak azután szúrhatsz be adatokat, ha ezt a szerkezetet létrehoztad.

### Hogyan kommunikáljunk az SQL-lel?

Az adatbázissal kizárólag azokon az üzeneteken keresztül kommunikálhatsz, melyeket elküldesz az SQL szervernek. A szervernek értenie kell az utasításokat, melyeket elküldesz neki.
A kommunikációhoz a `strukturált lekérdezőnyelvet` - Structured Query Language azaz SQL - használhatod melyet, mint szabványos programozási nyelvet a legtöbb adatbázis-kezelő rendszer megért.

Ahhoz, hogy olyan kérést írhass a szervernek melyet megért, egy SQL utasítást kell összeállítanod, és el kell küldened az SQL szervernek. A következő részekben arról olvashatsz, hogy ezt hogyan teheted meg.

### Hogyan írjunk SQL lekérdezéseket?

Az SQL nagyon közel áll az angol nyelvhez nagyrészt angol szavakból áll melyeket olyan szóláncokká kell összefűznöd melyek hasonlítanak egy angol mondathoz. Általában nem kell semmilyen "misztikus" szakszót ismerned ahhoz, hogy megírhass egy működő SQL lekérdezést. ;) 

Minden utasítás első szava a neve, mely egy tevékenységet jelölő szó, - *egy ige* - amely megmondja az SQL-nek, hogy mit kell tennie. Az utasítások melyekről szót ejtünk:
- `CREATE` - létrehoz
- `DROP` - eltávolít
- `ALTER` - módosít
- `SHOW` - mutat
- `INSERT` - beszúr
- `LOAD` - betölt
- `SELECT` - lekérdez
- `UPDATE` - frissít
- `DELETE` - töröl

Ezek az alapvető szavak elegendőek ahhoz, hogy adatbázisokat hozz létre és kommunikálj velük. 

Az utasítások neveit más szavak és kifejezések követik - ezek közül néhányat kötelező használnod néhányat nem - melyek azt mondják meg az SQL-nek, hogyan végezze el az adott tevékenységet. Azt például minden esetben meg kell mondanod az SQL-nek, hogy mit hozzon létre és azt is mindig meg kell mondanod neki, hogy melyik táblába szúrjon be vagy melyikből kérdezzen le adatokat.

Alább egy mindennapi SQL utasítást láthatsz, mely angol szavakat használ:

```sql
SELECT vezeteknev 
FROM Tag
```

Ha egy utasításban a `SELECT` szót használod, azt lekérdezésnek nevezzük, mert ilyenkor információkat kérsz le az adatbázisból. A lekérdezés ekkor visszaad minden, a `Tag` nevű táblában tárolt vezetéknevet. Az alábbi példában egy olyan összetett lekérdezést látsz, ami kevésbé hasonlít egy angol mondatra:

```sql
SELECT vezeteknev, keresztnev 
FROM Tag 
WHERE megye = "BAZ" AND varos = "Miskolc" 
ORDER BY vezeteknev
```

Ez a lekérdezés azoknak az embereknek a keresztnevét adja vissza, akik Miskolcon laknak, és a vezetéknevük szerint ábécésorrendben rendezi őket - habár ez a lekérdezés kevésbé hasonlít egy mondatra azért elég egyértelmű.



:::tip Most pedig olvashatsz néhány általános dolgot melyeket észben kell tartanod, amikor SQL utasításokat készítesz, ahogy azt az előző egyszerű lekérdezésekben is láthattad:

**Nagybetűk használata:** az SQL nyelvben szavakat nagybetűkkel írjuk. A változó elemek általában kisbetűkből állnak. Ezt azért csináljuk így, hogy az utasítások könnyebben olvashatók legyenek számunkra.
Az SQL szavai nem érzékenyek a kis és nagybetűkre, ha például azt írod le, hogy `select` az  ugyanazt jelenti, mint a `SELECT` . A `from` is megegyezik azzal, hogy `FROM`, az SQL nem tesz köztük különbséget.

Másrészt viszont a táblanevek, oszlopnevek és más változók nevei érzékenyek a kis és nagybetűkre. Ha UNIX-ot használsz, az SQL-nek pontosan kell egyeztetnie az oszlopneveket, szóval az oszlopnevek kis és nagybetűit megfelelően kell használnod - így például a `vezeteknev` nem ugyanaz, mint a `vezetekNev`. A Windows azonban nem olyan válogatós, mint a UNIX, az ő szemszögéből a `vezeteknev` és a `vezetekNev` ugyanaz. 

**Szóközök:** Az SQL szavait egy vagy több szóközzel kell elválasztanod egymástól. Teljesen mindegy, hogy hány szóközt használsz, a két szó között lehet akár 20 is, vagy csak 1. Az SQL emellett a sorok végével sem törődik. Az SQL utasításokat bármely pontján kezdhetsz új sort vagy beírhatod az egész utasítást egyetlen sorba is.


**Idézés:** Figyeld meg, hogy az előző lekérdezésben a `BAZ` és a `Miskolc` idézőjelek között szerepelnek ("). A `BAZ` és a `Miskolc` karaktersorozatok, melyeket szöveges sztringeknek vagy karakter sztringeknek nevezünk. Itt azt kérjük az SQL-től, hogy az SQL lekérdezésben szereplő szöveges sztringet hasonlítsa össze azokkal a sztringekkel, melyeket már eltároltál az adatbázisban. 
Amikor számokat hasonlítasz össze, a számokat ne tedd idézőjelek közé. 
:::

### Hogyan védjük meg a SQL adatbázisunkat?

Az adatbázisodban található információkhoz való hozzáférést szabályoznod kell. El kell döntened, hogy ki láthatja az adataidat és ki módosíthatja azokat. Ha valaki megszerzi a vásárlóid privát információinak listáját, akkor nagy gondban leszel. Vigyáznod kell az adataidra! 

Az SQL különböző védelmi eszközöket biztosít, hogy megvédhesd az adataidat.

:::tip A következőket találhatod a rendszerben:
**SQL-fiókok:** Senki nem férhet hozzá az adatokhoz az adatbázisodban ha nincs fiókja hozzá. Minden fióknak van egy neve, melyeket a felhasználónak használnia kell. A fiókhoz tartozik egy jelszó is, melyet a felhasználónak meg kell adnia ahhoz, hogy beléphessen a fiókjába. Emellett minden egyes fiók meghatározza, hogy honnan lehet hozzáférni az adataihoz. Például csak az aktuális számítógépről vagy egy meghatározott tartományból.

**Jogosultságok:** Az SQL a fiókokhoz jogosultságokat határoz meg és ezekkel szabályozza, hogy ki mit tehet. Bárki, aki egy érvényes fiókot használ kapcsolódhat az SQL szerverhez de csak azokat a dolgokat teheti meg melyeket a fiókja jogosultságai lehetővé tesznek számára. Beállíthatsz például egy fiókot úgy, hogy a felhasználók lekérdezhessék az adatokat, de ne szúrhassanak be új információkat vagy frissíthessék a meglévőket. Úgy is beállíthatsz egy fiókot, hogy egy adott táblában módosíthassa az adatokat, viszont az összes többi táblában viszont csak olvashassa az adatokat. 
:::

Az SQL parancsok segítségével felhasználói fiókokat hozhatsz létre és törölhetsz, felvehetsz hozzájuk jelszót vagy módosíthatod azt. Jogosultságokat adhatsz nekik vagy vehetsz el tőlük. Ezeket a parancsokat az előző részben leírt mindkét módszerrel elküldheted. Az SQL fiókjaidat a **phpMyAdmin** funkcióinak segítségével kezelheted.

## SQL adminisztrálása

:::tip Ennek a témakörnek az a célja, hogy

- adminisztráljuk az SQL-t
- felépítjük és felügyeljük a hozzáférést az adatokhoz
- felhasználói fiókokat hozunk létre és kezelünk
:::

Ahogy arról már korábban volt szó az phpMyAdmin egy adatbáziskezelő szoftver. Olyan adatbázisokat kezel melyek azokat az adatokat tartalmazzák, amelyekre szüksége van az alkalmazásod felépítéséhez.
Az a cél, hogy adatokat tárolj az adatbázisban vagy pedig, hogy lekérj belőle. 

A továbbiakban az SQL adminisztrációjával fogunk foglalkozni és megnézzük, hogyan szabályozhatod a hozzáférést az adataidhoz felhasználónevekkel és jelszavakkal, hogyan hozhatsz létre fiókokat és módosíthatod a jelszavakat és a jogosultságokat. 

### Az adminisztrátori feladatok

Az SQL adminisztrátori feladatoknak az a funkciója, hogy az SQL hatékonyan és biztonságosan láthassa el az adatbáziskezelés feladatát.
Ha egy webtárhely szolgáltató cég számítógépén használod az SQL-t akkor a legtöbb adminisztratív feladatot a tárhely szolgáltató látja el, viszont ha a saját számítógépeden használod akkor te vagy az adminisztrátor és teljes egészében te felelsz az adatbázisod adminisztrációjáért.

:::warning 

Nézzük pontokba szedve az adminisztrátor feladatait:

- SQL telepítése
- SQL szerver elindítása és leállítása
- SQL felhasználói fiókok létrehozása és karbantartása
- Biztonsági mentések készítése az adatokról.
- SQL frissítése
:::

### Alapértelmezett hozzáférés az adatokhoz

Az SQL telepítése során egy alapértelmezett `root` nevű fiókot kapsz. Ez a fiók néha jelszó nélkül van létrehozva. Éles környezetben sose használd a `root` fiókot jelszó nélkül!
Ha telepítés során egy olyan fiók jött létre, melyhez nem tartozik jelszó akkor azonnal adj meg hozzá egy jelszót. A `root` fiók úgy van beállítva, hogy minden lehetséges jogosultsággal rendelkezik. Ezt a fiókot használhatod az adatbázisod adminisztrációjához. Nem lesz szükséged arra a fiókra mely minden jogosultsággal rendelkezik, hogy hozzáférj az adatbázisodhoz vagy adatokat tárolj és kérj le. Így legtöbb esetben szükséged lesz egy olyan fiókra melynek kevesebb jogosultsága van és amellyel hozzáférhetsz az adataidhoz.

### Adatokhoz való hozzáférés szabályozása

El kell döntened, hogy ki láthatja és módosíthatja az adatokat. Képzeld el, hogy mi történne, ha bárki módosítani tudná az információkat az adatbázisodban vagy le tudnák másolni azt - pillanatok alatt tönkremenne a munkád. Nyilvánvaló, hogy az adataidra vigyáznod kell!

:::warning Ezért kell használnod az SQL biztonsági rendszerét. Minden fiók rendelkezik a következő tulajdonságokkal:
- felhasználónév,
- számítógépnév, amelyről az adott fiókkal hozzá lehet férni az SQL szerverhez
- jelszó,
- jogosultságok listája.
:::

Ahhoz, hogy valaki hozzáférhessen az adatokhoz, érvényes fiókkal kell rendelkeznie és tudnia kell az ehhez a fiókhoz tartozó jelszót, illetve arról a számítógépről kell csatlakoznia, 
melynek engedélyezve van, hogy csatlakozzon az adatbázishoz. 

Minden fiók esetén megadható, hogy elvégezhet-e az adatbázison olyan műveleteket, mint például a `SELECT`, `DELETE`, `INSERT`, `CREATE`, `DROP` vagy ezek közül egyiket sem.

:::tip
Amikor egy felhasználó megpróbál csatlakozni az adatbázishoz majd lefuttat egy utasítást akkor két szinten szabályozza a hozzáférést az adatokhoz:

1. **Kapcsolat ellenőrzése:** Ellenőrzi, hogy a felhasználónév és a jelszó érvényes-e és azt is megnézi, hogy olyan számítógépről jön-e a kapcsolódási kísérlet melyről engedélyezett a csatlakozás az adatbázis szerverhez. Ha minden rendben van akkor megkísérli a csatlakozást.

2. **A kérés ellenőrzése:** Megkísérel csatlakozni ellenőrzi, hogy az adott fiók rendelkezik-e megfelelő jogosultságokkal ahhoz, hogy végrehajtsa a megadott utasítást. Ha igen akkor végrehajtja az utasítást.
:::

Bármely utasításnak, melyet elküldesz lehet sikertelen a futása azért mert már az első lépésben visszautasítják a kapcsolatot vagy mert a második lépésben kiderül, hogy nincs jogosultságod az utasítás végrehajtásához. Ekkor egy hibaüzenetet kapsz vissza mely segít azonosítani a probléma forrását.

### Felhasználó és számítógépnevek

A felhasználónév és a számítógépnév együtt azonosítanak egy egyedi fiókot. Az SQL szerver csak akkor fogadja a kéréseket ha egy fiókról és számítógépnévről csatlakozik.
Amikor a `GRANT` *- engedélyez -* vagy a `REVOKE` *- visszavon -* parancsokat használod akkor a fiókot felhasználónév és számítógépnév együttesével azonosítod, melynek a formátuma: `felhasznalonev@szamitogepnev` - például `root@localhost`.

:::danger Az SQL fiók neve semmilyen módon nem függ össze a UNIX-os vagy Windows-os felhasználónevekkel. 

Ha a `root` nevű adminisztrátori fiókot használod ennek a fióknak semmi köze a UNIX-os root felhasználódhoz. Ha módosítod a fiókodat az nem lesz hatással a **UNIX**-os vagy a **Windows**-os felhasználódra.
:::

A SQL felhasználónevek és számítógépnevek a következő jellemzőkkel rendelkeznek:

- Egy fiók neve maximum 16 karakter hosszú lehet.
- A felhasználónév lehet üres.
- A számítógépnév lehet név vagy IP-cím.
- A számítógépnév tartalmazhat *joker* karaktereket.
- A számítógépnév lehet üres.

Létrehozhatsz olyan fiókot is melynek a felhasználóneve és számítógépneve is üres. Egy ilyen fiókkal bármilyen felhasználónévvel bármelyik számítógépről bárki csatlakozhat a MySQL szerverhez. Ilyen fiókot biztosan nem szeretnél. ;) 

Ha nem mondtam volna még amikor telepíted az SQL-t automatikusan létrehoz egy fiókot, mely az összes jogosultsággal rendelkezik, ez a `root@localhost` fiók. 

### Fiók jogosultságok

| Jogosultság | Leírás                                            |
|-------------|---------------------------------------------------|
| `ALL`       | Minden jogosultság                                |
| `ALTER`     | Módosíthatja a táblák szerkezetét                 |
| `CREATE`    | Létrehozhat új adatbázisokat és táblákat          |
| `DELETE`    | Törölheti a táblák sorait                         |
| `DROP`      | Eltávolíthat adatbázisokat és táblákat            |
| `FILE`      | A szerveren beolvashat fájlokat és írhat fájlokba |
| `GRANT`     | Módosíthatja egy fiók jogosultságait              |
| `INSERT`    | Új sorokat szúrhat be táblákba                    |
| `SELECT`    | Olvashatja a táblák adatait                       |
| `SHUTDOWN`  | Leállíthatja a szervert                           |
| `UPDATE`    | Módosíthatja egy tábla meglévő adatait            |
| `USAGE`     | Nem tartozik hozzá jogosultság                    |

::: danger ALL jogosultság
`ALL` jogosultságokat bizonyára nem szeretnél adni senkinek, mivel ez tartalmazza az olyan adminisztratív műveletek jogosultságait is, mint például a szerver leállítása.
:::


Az összes fiók neve a `mysql` nevű adatbázisban a `user` táblában van eltárolva. Ha szeretnéd látni a fiókok információit, lefuttathatod a következő lekérdezést a `mysql` adatbázison:

```sql
SELECT * FROM user
```

Ekkor a fiókok egy listáját kell látnod. Ha azonban a szolgáltatódnál férsz hozzá akkor valószínűleg nincsenek meg a megfelelő jogosultságaid ehhez. Ebben az esetben egy a következőhöz hasonló hibaüzenetet fogsz kapni.

```sql
No Database Selected
```

Az üzenet annyit jelent, hogy a fiókodból nem kérdezhetsz le a `mysql` adatbázisból. Esetleg kaphatsz egy olyan hibaüzenetet is, mely azt mondja, hogy nincs jogosultságod a `SELECT` utasítás futtatásához.

### Fiókok létrehozása

A megfelelő módszer az adatbázisod eléréséhez egy fiók létrehozása külön erre a célra azokkal a jogosultságokkal, melyekre szükséged van. Ha egy vagy több fiókot szeretnél létrehozni és megvannak hozzá a szükséges jogosultságaid akkor használd a `CREATE USER` parancsot a következőképpen: 

```sql
CREATE USER felhasznalonev@szamitogepnev IDENTIFIED BY 'jelszo'
```

Ez az utasítás létrehozza a megadott felhasználói fiókot a hozzá meghatározott jelszóval és jogosultságok nélkül. Ha kihagyod az `IDENTIFIED BY 'jelszo'` részt a fiók jelszó nélkül jön létre. Később bármikor megadhatsz egy jelszót a fiókhoz vagy módosíthatod a meglévő jelszavát.

:::tip Karakterkészletek és magyar ékezetes karakterek kezelése
Az SQL alapértelmezés szerint **ASCII** karakterkódolást használ, mely nem támogatja a magyar ékezetes betűk használatát, ezért ha az alapbeállítások mellett ékezetes felhasználóneveket adsz meg, az ékezetes betűk helyén `?` karakterek fognak megjelenni.

Ezt orvosolhatod, ha olyan karakterkészletet állítasz be mely támogatja a magyar ékezetes karaktereket, például az **UTF-8**. 
:::

### Fiókjelszavak módosítása

A jelszavak nincsenek "kőbe vésve". A meglévő fiókokban is adhatsz meg vagy módosíthatsz jelszót. Mint bármely más eljárásnál a jelszavak megadásához vagy módosításához is használhatsz SQL utasítást a következőképpen: 

```sql
SET PASSWORD FOR felhasznalonev@szamitogepnev = PASSWORD('jelszo')
```

Ezzel a `felhasznalonev@szamitogepnev` fiókhoz a `jelszo` jelszót állítottad be. Ha a fiók már rendelkezik jelszóval, akkor lecseréled vele a meglévőt. Ha nem adod meg a `FOR` kulcsszót akkor a jelszó ahhoz a fiókhoz kerül beállításra, amelyet éppen használsz.

Úgy távolíthatsz el meglévő jelszót, ha a `SET PASSWORD` utasítást üres jelszóval adod ki:

```sql
SET PASSWORD FOR felhasznalonev@szamitogepnev = PASSWORD('')
```

:::danger Amikor jelszavakat módosítasz, frissítened kell a jogosultságokat ahhoz, hogy érzékelje a változásokat.
Ezt a `FLUSH PRIVILEGES` utasítással oldhatod meg.
:::

### Fiók jogosultságok módosítása

Minden fiók rendelkezik egy jogosultsági körrel, mely meghatározza, hogy a fiók használója mit tehet és mit nem. A jogosultságokat akkor állíthatod be amikor létrehozod a fiókot, de később is bármikor módosíthatod őket. A fiókok aktuális jogosultságait a következő utasítással kérheted le:

```sql
SHOW GRANTS ON felhasznalonev@szamitogepnev
```

Ennek a kimenete egy `GRANT` utasítás lesz, mely létrehozná a fiókot az aktuális állapotában. A kimeneten láthatod az összes jogosultságot. Ha nem adod meg az `ON` kulcsszót akkor annak a fióknak fogod látni az aktuális jogosultságait mellyel kiadtad a `SHOW GRANTS` utasítást.

Egy fiók jogosultságait a `GRANT` utasítás segítségével módosíthatod, melynek a következő az általános formátuma:

```sql
GRANT jogosultsag (oszlopok) ON tablanev 
TO felhasznalonev@szamitogepnev IDENTIFIED BY 'jelszo'
```

Mint minden jogosultságokhoz kötődő módosítás esetén a jogosultságokat a módosítások után itt is frissítened kell, a `FLUSH PRIVILEGES` segítségével.

A `GRANT` utasítás segítségével egy új fiókot is létrehozhatsz vagy módosíthatsz egy jelszót. Használatához a következő információkat kell megadnod:

- **Jogosultság:** Legalább egy jogosultságot meg kell adnod. Minden jogosultságot korlátozhatsz egy vagy több oszlopra is, ha megadod az oszlopneveket zárójelek között a jogosultság megadása után. Ha nem adsz meg oszlopnevet, akkor a jogosultság a tábla vagy táblák összes oszlopára ki lesz adva. Annyi jogosultságot és oszlopot adhatsz meg, amennyire csak szükséged van, vesszőkkel elválasztva.

- **Táblanév:** Azon tábla (vagy táblák) neve (vagy nevei), melyekre megadod a jogosultságot. Legalább egy táblát meg kell adnod. Számos táblát megadhatsz, vesszőkkel elválasztva. A táblanév lehetséges értékei a következők:
    - `táblanév`: Az egész `táblanév` nevű tábla az aktuális adatbázisban. Használhatsz csillagot is *(\*)*, mely az aktuális adatbázis összes táblájára hivatkozik. Ha csillagot használsz, és nincs kiválasztva adatbázis, akkor a jogosultságot az összes adatbázis összes táblájára adod ki.
    - `adatbázisnév.táblanév`: Az egész, `táblanév` nevű tábla az `adatbázisnév` nevű adatbázisban. Használhatsz csillagot is *(\*)* az adatbázis vagy a tábla neve helyett is az összes adatbázisra, vagy az összes táblára hivatkozva. A \* . \* jelöléssel a jogosultságot az összes adatbázis összes táblájára adhatod ki.

- **felhasznalonev@szamitogepnev:** Ha a felhasználói fiók már létezik, akkor megkapja a megadott jogosultságokat. Ha a fiók még nem létezik, akkor létrejön. A fiókot a `felhasználónév` és
`számítógépnév` pár azonosítja. Ha már létezik fiók a megadott felhasználónévvel, de más számítógépnévvel, akkor a meglévő fiók nem módosul és egy új fog létrejönni.

- **Jelszó:** A jelszó, melyet megadsz vagy módosítasz. Nem kötelező jelszót megadnod. Ha nem akarsz jelszót megadni vagy a meglévő jelszót módosítani az adott fiókhoz akkor hagyd ki az `IDENTIFIED BY 'jelszo'` részt. 

Az a `GRANT` utasítás amellyel létrehozol egy új felhasználót ahhoz, hogy egy `Termekek` nevű adatbázist használhassa a következőképpen nézhet ki:

```sql
GRANT SELECT ON Termekek.* TO felhasznalonev@localhost IDENTIFIED BY 'jelszo'
```

Ha jogosultságokat szeretnél visszavonni, akkor használd a `REVOKE` utasítást. Ennek általános formátuma a következő:

```sql
REVOKE jogosultsag ON tablanev FROM felhasznalonev@szamitogepnev
```

Meg kell adnod a megfelelő információkat.

A következő `REVOKE` utasítással minden jogosultságot visszavonhatsz egy fióktól:

```sql
REVOKE ALL ON *.* FROM felhasznalonev@szamitogepnev
```

### Fiók törlése

Elképzelhető, hogy a jövőben törölnöd kell majd egy fiókot, ezért a legtöbb esetben, ha van egy olyan fiók már amit senki sem használ akkor a törlés nem árt senkinek se. Ha azonban úgy gondolod, hogy egy fiókot feltörtek, akkor lehet, hogy biztonsági okokból törölni szeretnéd.

Felhasználói fiókokat a `DROP USER` utasítás segítségével törölhetsz a következőképpen:

```sql
DROP USER felhasznalonev@szamitogepnev
```

Ehhez olyan fiókot kell használnod, mely rendelkezik `DELETE` jogosultsággal a `mysql` adatbázisban, mert csak az tudja lefuttatni a `DROP USER` utasítást.

