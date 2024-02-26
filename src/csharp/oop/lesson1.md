---
icon: fa-solid fa-1
---

# Objektumorientált koncepció

:::note Röviden
- Az objektumorientált programozás lehetővé teszi, hogy a programunkat egyedi komponensekre osszuk szét, amelynek mindegyike a teljes program egy-egy kis szeletéért felelős.
- Az objektumok az azonos szerkezetű és képességű dolgok kategóriáját határozzák meg.
- Az egyéni típusok létrehozása hatékony eszköz a nagyméretű programok építéséhez.
:::

Az objektumorientált programozás segítségével a _C#_ nyelvben fontos kérdéseket tudunk megoldani. Ezek a kérdések a következő képen mutatkoznak be:

![Az Asteroids egy olyan arcade videojáték, amely a világűr témáját járja körül és több irányba lehet lövöldözni. Lyle Rains és Ed Logg tervezték és az Atari, Inc. kiadásában 1979 novemberében jelent meg.](/assets/images/vasvari/csharp/asteroids.jpg)

Hogyan hozzunk létre egy bonyolult programot, mint az Asteroids játék, amit a képen látsz? Hogyan használjuk fel azokat az alapvető elemeket, amiket már ismerünk és hogyan alakítsuk át őket valami olyasmivé, ami több száz vagy ezer változóból és több ezer metódusból álló programot eredményez?

Másrészt, hogyan adjunk meg olyan összetett dolgokat, mint a képen látható űrhajó, lövedék és aszteroida? Hogyan kezeljük az olyan dolgokat mint az évszakok, a dátumok és a pontok a legjobb eredmények listáján?

A válasz mindkét kérdésre az, hogy az objektumorientált programozás segítségével létrehozunk olyan objektumokat, amelyek osztályokba tartoznak és meghatározzák a dolgok szerkezetét és viselkedését.

---

Az objektumorientált programozás lényege az, hogy a programunkat nem egy nagy kódtömbként írjuk, hanem több kisebb egységre objektumokra osztjuk. Minden objektumnak van egy feladata és az objektumok együtt dolgoznak a probléma megoldásán.

Minden objektum a rendszerben végzi a feladatát a többi objektummal együttműködve.

Az objektumok létrehozhatóak a program futása közben, amelyek már nem szükségesek, eltávolíthatók.

Minden objektum tartalmaz egy sor metódust és változót. Az adatokat változókban tároljuk, a műveleteket pedig metódusokban írjuk le. A metódusok segítségével kommunikálhatnak az objektumok egymással. Az objektumok különböző számú és típusú változókat és metódusokat tartalmazhatnak. Vannak olyan objektumok, amelyek csak adatokat reprezentálnak és nincsenek metódusaik. Más objektumoknak pedig csak műveleteik vannak és nem tárolnak semmilyen adatot.

---

Ez a paradigma nem egyedülálló a programozásban. Például a vállalkozások és a csapatprojektek ugyanígy működnek. A feladatok túl nagyok egyetlen ember számára, ezért több ember között osztják fel.

A _C#_ nyelvben minden objektum egy adott osztályhoz vagy típushoz tartozik. Minden azonos osztályba tartozó objektumnak ugyanazok az adatelemei és metódusai vannak. Az azonos osztályba tartozó objektumokkal azonos módon lehet interakcióba lépni, de minden objektum független a többitől. Egy adott osztály objektumait az osztály példányainak nevezik.


---

Számos objektumosztály már létezik a __.NET__ részeként. A _C#_ azonban lehetővé teszi, hogy új osztályokat is definiáljunk.

Például __három egész számot__ használhatunk egy naptár dátumának reprezentálásához (_nap, hónap és év_), mindezt egy új osztályba csomagolva a dátumok ábrázolásához. Vagy definiálhatunk egy új osztályt az aszteroidák ábrázolásához, pozíciójukkal, forgásukkal és sebességükkel és adhatunk nekik metódusokat.

A _C#_ számos módszert kínál az új típusok definiálásához az alapvető típusokból, ideértve az _enumerációkat_, _tuple-öket_, struktúrákat és osztályokat, ahol az osztályok a legkifinomultabbak. Megismerjük, hogyan lehet új objektumokat létrehozni és hogyan lehet több objektumot együttműködésre bírni nagyobb programok megoldásához.

Miután definiáltunk egy új típust, képesek leszünk vele úgy dolgozni, mint egy összefüggő új, újrafelhasználható elemmel - egy új típussal, amelyet más változók is használhatnak. Ha létrehozunk egy új Hajó típust, akkor képesek leszünk arra, hogy a programunkban máshol is Hajó típusú változókat hozzunk létre anélkül, hogy minden alkalommal újra létrehoznánk a logikát és az adatokat, amelyeket egy hajó magába foglal.

Ez a koncepció a _C#_ programozás egyik alapvető szabályává válik: __Mindenhez, amit létrehozunk, a megfelelő típust használjuk. Ha a megfelelő típus nem létezik, először hozzuk létre.__