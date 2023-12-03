---
icon: fa-solid fa-5
category:
  - JavaFX
---

# FXML Dependency Injection

Mint minden másban, itt is vannak különböző típusú függőség injektálások, és ha manuálisan szeretnéd irányítani a folyamatot a reflexió használatával, az bonyolulttá válhat. De ez még nem jelenti azt, hogy ezt kötelezően meg kell tenni. Valójában hatalmas funkcionalitásnövekedést érhetünk el a reflexió egyáltalán való használata nélkül is.

A függőségi injektálás nehéznek tűnik, de valójában egyáltalán nem az. Tulajdonképpen a JavaFX-ben van pár beépített függőségi injektálás, ha tudod, hogyan kell használni.

Mint bármi másnál, a függőségi injektálásnak is vannak különböző típusai, és ha kézzel akarod irányítani a folyamatot a reflexió segítségével, akkor ez bonyolulttá válhat. De ez nem jelenti azt, hogy muszáj is. Valójában hatalmas funkcionalitásnövekedést érhetünk el úgy is, hogy egyáltalán nem használunk reflexiót.


### Mi az a Dependency Injection?

A __Dependency Injection__ egy olyan tervezési minta, amely az objektum létrehozásának felelősségét eltávolítja a hívó osztálytól. Ezt azzal éri el, hogy létrehoz egy második osztályt - az Injektort -, amely képes átadni az objektumnak azt, amire szüksége van.

A függőség injektálása a __JavaFX__ nézet létrehozásában úgy valósítható meg, hogy egy `FXMLLoader` objektumot ellátunk egy egyéni metódussal vagy erőforrással, amelyet a vezérlők létrehozásához használhatunk. A `FXMLLoader` beinjektálja a szükséges függőségeket a `Controller`-be, és visszaadja azt a hívó osztálynak. Ezeket a metódusokat és erőforrásokat az `FXMLLoader` meghívásakor, vagy előre betöltött kezelőosztályokkal lehet biztosítani.

Végig fogunk menni két módszeren, hogy testre szabhassuk a FXMLLoader-t, és lehetőséget adjunk neki az információ "_beinjektálására_" a vezérlőinkbe:

1. **Konstruktor injektálás (Constructor Injection):** Testre szabhatjuk a vezérlőnket azzal, hogy az adatokat beinjektáljuk a konstruktorba, amikor létrejön.

2. **Mezőinjektálás (Field Injection):** Mezőket injektálhatunk a vezérlőbe a gépen található resource fájlok alapján.

Végül mindent beállítunk az alkalmazás életcikluskezelő osztályaként. Valójában ennek az anyagnak a végére képesek leszünk egy `Controller` és egy `View` beállítására egyetlen sor kóddal.

```java
Parent root = InjectionManager.load("/sample.fxml");
```

### Ha `Dependency Injection` nehéz, miért csináljuk mégis?

Csak egy pillanatra álljunk meg, hogy átbeszéljük, miért jó ötlet ez (_ha már meggyőztelek, ugorj tovább_). Arra kérlek, hogy tegyél a kódodba most egy kis bonyolultságot és bízz bennem, hogy ez javítani fogja az alkalmazásodat.

Szóval, hogy fogjuk ezt csinálni?!

Gyakran vannak különböző nézetek különböző okokból - felhasználói bejelentkezések, ügyfélinformációk, bevásárlókosarak, stb.
Bármi legyen is, azt szeretnénk, hogy a felhasználóink nagyszerű élményben részesüljenek, lehetővé téve számukra, hogy könnyedén váltogathassanak a különböző nézetek között.

Például egy jó használati eset lehetőséget ad nekik arra, hogy a bevásárlókosárból elindíthassanak egy másik felhasználói nézetet.

A `shoppingCart.java` - _a hívó osztály_ - segítségével tudjuk betölteni és kitölteni a létrehozott felhasználói részletek nézetét. Tehát betöltjük a nézetet, megkapjuk a vezérlőt, és gyorsan írunk néhány kódot a `shoppingCart.java` fájlba annak érdekében, hogy lekérdezzük a felhasználó adatait az adatbázisból.

![Amennyiben még nem találkoztál korábban szekvenciadiagrammal, a legfelső résztől halad egyre lejebb. Először meghívjuk a `load()` metódust a `FXMLLoader`-en, ami létrehozza az alapértelmezett vezérlőt, majd megkapjuk a vezérlőt vissza, és így tovább.](/assets/images/vasvari/View-Loading-Without-Dependency-Injection.webp)

Két nappal később a `wishList.java` fájlt kódoljuk, amely egy kívánságlistát jelenít meg, és azt szeretnénk, ha ez a felhasználói nézetet is betöltené. Hirtelen kénytelenek vagyunk az összes adatbázis kódot bemásolni és beilleszteni a `wishList.java` fájlba.

Minden új nézetnél, amelynek szüksége van erre a funkcióra, újra be kell másolnunk és be kell illesztenünk a kódot.


### Egységbe zárás felelősége (Encapsulating responsibility)

A jobb megközelítés az, hogy biztosítjuk a `FXMLLoader` számára a szükséges eszközöket, amelyekkel képes a `Controller` (és a `View`) maga kitölteni. Őszintén szólva, a hívó osztálynak eleve nem kellett volna a felelősségét viselnie a felhasználói adatok betöltésére. Ezután létrehozhatjuk a felhasználói nézetet számos módon, és nem kell ezt a kódot másolnunk.


Itt létrehoztunk egy `Callback` függvényt. Ez egy végrehajtható kód, amely felépíti a felhasználói nézetünket - ami némileg összetettebbé teszi az alkalmazásunkat. A fontos különbség azonban az, hogy a `shoppingCart.java`-nak már nem kell tudnia a felhasználói adatbázisról. És a `wishList.java` vagy bármely más általunk létrehozott vezérlő sem.

És miután az összes kódot egy `Injection Managerbe` rendeztük, beállíthatjuk az alkalmazás elején, és soha többé nem kell aggódnunk miatta.
