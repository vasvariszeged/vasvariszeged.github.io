---
icon: fa-solid fa-1
category:
  - JavaFX
---

# JavaFX

A __JavaFX__ egy Java nyelven írt nyílt forráskódú platform és eszközkészlet, amelyet a felhasználói felületek (__UI__) készítéséhez használnak. A __JavaFX__ célja a modern és interaktív grafikus felhasználói felületek létrehozása Java alkalmazásokhoz, beleértve asztali alkalmazásokat, mobilalkalmazásokat és webalkalmazásokat is.


A __JavaFX__ a __Java Standard Edition__ (__Java SE__) részeként elérhető, és számos eszközt és funkciót kínál a grafikus felhasználói felületek tervezéséhez és fejlesztéséhez.

:::danger  Java 11 verziót követően
Az Oracle bejelentette, hogy a JavaFX-et kivette a Java SE-ből és külön projektbe szervezte. A JavaFX azóta a `JavaFX SDK` részeként érhető el, és külön telepíteni vagy hozzáadni kell az alkalmazásokhoz.
:::

Ezek közé tartozik a színes szabványos vezérlők (pl. gombok, mezők, táblázatok), 2D és 3D grafika támogatása, animációk, médialejátszás, és sok más. A __JavaFX__ lehetővé teszi a fejlesztők számára, hogy személyre szabott és modern felhasználói élményt hozzanak létre az alkalmazásaikban.

Fontos megjegyezni, hogy használatakor az alkalmazást elindító gépen telepítve kell lennie a futtatókörnyezetnek. A fejlesztéshez a [JavaFX Scene Builder](https://github.com/gluonhq/scenebuilder) nevű grafikus eszközt is használhatják a fejlesztők, amely segít az _UI_ tervezésében és elrendezésében.

Mivel szerves része a Java ökoszisztémának, így a Java nyelvet és a JavaFX-t használó fejlesztők könnyen kezelhetik a Java alkalmazásaikat a grafikus felhasználói felülettel együtt.

## A JavaFX komponensei

A __JavaFX__ architektúrája úgy van felépítve, hogy a fejlesztőknek eszközök és erőforrások sorát kínálja a hatékony asztali alkalmazások létrehozásához. Következőkben látni fogjuk a __JavaFX__ architektúráját és megértjük, hogyan működnek együtt az egyes komponensek a grafikus alkalmazások létrehozásához.

A __JavaFX__ központi eleme a `Scene Graph`, egy hierarchikus struktúra, amely reprezentálja alkalmazásának vizuális elemeit. Ez a gráf a csomópontokból áll, amelyek mindegyike lehet egy alakzat, szöveg, kép vagy bármilyen más vizuális elem. A csomópontokat fastruktúrába rendezhetjük, ahol minden csomópont rendelkezhet szülő- és gyermekcsomópontokkal, lehetővé téve bonyolult vizuális elemek összeállítását. Ez a koncepció létfontosságú a rugalmas és dinamikus felhasználói felületek létrehozásához.


![Scene Graph példa](/assets/images/vasvari/sample_scene_graph.webp)

A hierarchia legfelsőbb pontján a `Stage` áll, mely egy natív ablakot reprezentál. A `Stage` egyszerre csak egy Scene-t tartalmazhat, mely a `Scene Graph` tárolója. A belső úgynevezett `Branch Node`-oknak lehetnek gyerekei, így ezek a `node`-ok `Parent` típusúak. Ennek a reprezentációnak az előnye például, ha eltolunk egy elemet, aminek vannak gyerekei is, akkor azok is el lesznek tolva a megadott transzformáció alapján.


A __JavaFX__ architektúra több kulcsfontosságú csomagot tartalmaz, amelyek mindegyike különböző aspektusokat kezel:

1. `javafx.animation`: Ez a csomag lehetővé teszi sima animációk létrehozását. Lehetővé teszi különböző áttűnések alkalmazását, például elhalványítást, nagyítást, forgatást és eltolást. Az animációk növelik az alkalmazás vonzerejét és reakcióképességét.

2. `javafx.application`: Ez a csomag kezeli az alkalmazás életciklusát. Tartalmazza az `Application` és `Platform` osztályokat, amelyek segítenek az alkalmazás inicializálásában és indításában. Ezenkívül kezelheti az alkalmazás eseményeit és az alkalmazás állapotát.

3. `javafx.css`: A stílusozás elengedhetetlen része a modern GUI-nak. Ez a csomag lehetővé teszi a fejlesztők számára a CSS-hez hasonló stílusok alkalmazását __JavaFX__ alkalmazásokhoz, ami segít a vizuálisan vonzó és összhangban lévő felhasználói felületek készítésében.

4. `javafx.event`: Az eseménykezelés alapvető fontosságú a GUI programozásban. Ez a csomag tartalmaz osztályokat és interfészeket események kezeléséhez, mint például egérkattintások, billentyűleütések és felhasználó által generált egyéni események. Biztosítja, hogy az alkalmazás hatékonyan reagáljon a felhasználói interakciókra.

5. `javafx.geometry`: Amikor 2D grafikával dolgozunk, szükségünk van alakzatok meghatározására és különböző műveletek végrehajtására rajtuk. Ez a csomag osztályokat biztosít 2D geometriai objektumok definiálásához és módosításához, segítve a precíz grafikák létrehozását.

6. `javafx.stage`: A __JavaFX__ alkalmazások felső szintű konténerosztályait ebben a csomagban találjuk. Ez lehetővé teszi az alkalmazás ablakainak kezelését és tulajdonságaik meghatározását, beleértve a méretüket, címüket és stílusukat.

7. `javafx.scene`: Ez a csomag a __JavaFX__ architektúra központi eleme. Osztályokat és interfészeket kínál a jelenetgráf létrehozásához és kezeléséhez. Ezenkívül különböző alkönyvtárakat is tartalmaz, mint például `canvas`, `chart`, `control`, `effect`, `image`, `input`, `layout`, `media`, `paint`, `shape`, `text`, `transform` és `web`. Ezek a segédcsomagok különféle területeken kínálnak szakosított eszközöket a grafikus és interaktív fejlesztéshez.


![A következő ábra a JavaFX API felépítését mutatja be. Itt láthatja a JavaFX API-t támogató komponenseket.](/assets/images/vasvari/architecture_of_javafx_api.webp)


A `Prism` -et grafikus hardveres gyorsításra használnak a `Scene Graph` megjelenítésére.

A `Glass Windowing Toolkit` natív módon végzi az ablakezelési feladatokat az operációs rendszertől függően, és az eseménykezelő kezeléséért is felelős. A __JavaFX__ alkalmazásokban az események a fő szálon, azaz az `Application Thread`-en kezelődnek. Fontos, hogy a `Scene Graph` módosításait is ezen a fő szálon keresztül kell végrehajtani.

A `Media Engine` lehetőséget nyújtva az _audio_ és _video_ tartalmak lejátszására.

__JavaFX__ alkalmazásokban webes tartalmat is megjeleníthetünk a `Web Engine` segítségével, amely a `WebKit` alapú.

A `Quantum Toolkit` az alkalmazás számára absztrakciós szintet kínál az alacsony szintű komponensek felett.

## Hello World JavaFX-ben

A következőkben megnézzük, hogy hogyan kell beállítani a projektünket, hogy képesek legyünk JavaFX alkalmazásokat írni. A projektek buildeléséhez `Maven`-t fogunk használni, így erre fókuszálunk.

__Új projekt létrehozása:__ Nyissuk meg az __IntelliJ IDEA__-t majd kattintsunk a `New Project` opcióra.

![Új projekt létrehozása](/assets/images/vasvari/intellij/step1.webp)


__Projekt beállítások:__ Először is válasszuk ki bal oldalt a `Generators` alatt a `JavaFX`-et. Itt adjuk meg a projekt nevét és a helyét a számítógépen. A nyelv értelem szerűen __Java__ és a buildeléshez ahogy már említettem `Maven`-t fogunk használni. A projekt csoport azonosítója (`group`) legyen `org.vasvari`, a projekt neve (`artifact`) pedig `helloworld`. Győződjünk meg róla, hogy a `JDK` helyes __Java__ verziót mutatja (_például jelen esetben a Java 17_). 

Kattintsunk a `Next` gombra.

![Projekt beállítások](/assets/images/vasvari/intellij/step2.webp)


__Projekt elkészítése:__ A következő ablakban olyan harmadik féltől származó könyvtárakat és keretrendszereket láthatunk, amelyek kibővítik a __JavaFX__ képességeit, valamint előre elkészített vezérlőket és komponenseket kínálnak a __JavaFX__ alkalmazások fejlesztéséhez.

Végül kattintsunk a `Create` gombra a projekt elkészítéséhez.

![Projekt elkészítése](/assets/images/vasvari/intellij/step3.webp)

Most már készen állsz egy __JavaFX__ alkalmazás fejlesztésére __Maven__ használatával __IntelliJ IDEA__-ban. Győződjünk meg arról, hogy a __JavaFX__ alkalmazásban a főosztály (jelnlegi példánkban a `HelloApplication.java`) tartalmazza a `public static void main` metódust. Ez az osztály lesz az, amelyből az alkalmazás elindul.

![IntelliJ IDEA - HelloApplication.java](/assets/images/vasvari/intellij/step4.webp)

__Konfiguráció beállítása pt. I.:__ Menjünk a `Run` menüpont alatt a `Edit Configurations` opcióra. Kattintsunk a `+` ikonra a bal felső sarokban, majd válasszuk az `Application` lehetőséget. Válasszuk ki a projektet, és a `Main class` mezőben adjuk meg a __JavaFX__ alkalmazás főosztályát.

![Új Run Configuration hozzáadása](/assets/images/vasvari/intellij/step5e.webp)

__Main Class beállítása:__ Válasszuk ki a `HelloApplication`-t mivel ez az egyetlen osztály amely a főosztályunk.

![Main Class kiválasztása](/assets/images/vasvari/intellij/step6.webp)

__Konfiguráció beállítása pt. II.:__ Adjuk meg a konfiguráció nevét (`HelloApplication`) ami igazából bármi lehet. Amennyiben az alkalmazásnak bemeneti paraméterekre van szüksége, adjuk meg azokat a `Program arguments` mezőben. Most viszont mi ezt üresen hagyjuk és menjünk tovább majd az `OK` gombra, hogy véglegesítsük a konfigurációnkat.

![Konfigurációk szerkesztése](/assets/images/vasvari/intellij/step5.webp)

__Futtatás:__ Kattintson `Run` gombra a konfiguráció elindításához.

![Futtatás](/assets/images/vasvari/intellij/step5r.webp)

__Végeredmény:__ Amennyiben nem kapunk hibaüzenetet akkor az __IntelliJ IDEA__ most elindítja a __JavaFX__ alkalmazást a megadott konfigurációval. Az alkalmazásablak megjelenik, és az alkalmazás futni fog.

![JavaFX GUI App](/assets/images/vasvari/intellij/step7.webp)


## Mi mit csinál?

Most megvizsgáljuk a programkódot és megnézzük, hogy milyen elemekből épül fel az alkalmazásunk.

### HelloApplication.java

```java
package org.vasvari.helloworld;

import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Scene;
import javafx.stage.Stage;

import java.io.IOException;

public class HelloApplication extends Application {
    @Override
    public void start(Stage stage) throws IOException {
        FXMLLoader fxmlLoader = new FXMLLoader(HelloApplication.class.getResource("hello-view.fxml"));
        Scene scene = new Scene(fxmlLoader.load(), 320, 240);
        stage.setTitle("Hello!");
        stage.setScene(scene);
        stage.show();
    }

    public static void main(String[] args) {
        launch();
    }
}
```


- `public class HelloApplication extends Application`: Itt definiáljuk az `HelloApplication` osztályt, amely kiterjeszti a JavaFX `Application` osztálytát, ami felelős az alkalmazás kezeléséért.

- `@Override public void start(Stage stage) throws IOException`: Ez egy `start` metódus felülírása, amelyet a JavaFX alkalmazás az indítás során automatikusan hív. A `Stage` objektumot paraméterként kapjuk, amely a fő ablakot reprezentálja.

- `FXMLLoader fxmlLoader = new FXMLLoader(HelloApplication.class.getResource("hello-view.fxml"));`: Ebben a sorban létrehozunk egy `FXMLLoader` objektumot, amely lehetővé teszi az FXML fájl betöltését. Az `HelloApplication.class.getResource("hello-view.fxml")` részlet a `hello-view.fxml` fájl elérési útját adja meg az osztály erőforrások között.

- `Scene scene = new Scene(fxmlLoader.load(), 320, 240);`: Itt létrehozunk egy `Scene` objektumot, amely a felhasználói felület tartalmát reprezentálja. Az `fxmlLoader.load()` metódus az FXML fájl betöltését jelenti, és a második és harmadik paraméterek a szélességet (320 pixel) és a magasságot (240 pixel) állítják be.

- `stage.setTitle("Hello!");`: Beállítjuk az alkalmazás ablakának címét __Hello!__-ra.

- `stage.setScene(scene);`:Beállítjuk az alkalmazás ablakának tartalmát a korábban létrehozott `scene`-re.

- `stage.show();`: Megjelenítjük az alkalmazás ablakát, amely tartalmazza az FXML fájlból betöltött felhasználói felületet.

- `public static void main(String[] args) {`: A `main` metódus (_minden_) alkalmazás belépési pontja.

- `launch();`: Itt hívjuk meg a `launch` metódust, amely elindítja az alkalmazást a JavaFX platformon.


### HelloController.java

```java
package org.vasvari.helloworld;

import javafx.fxml.FXML;
import javafx.scene.control.Label;

public class HelloController {
    @FXML
    private Label welcomeText;

    @FXML
    protected void onHelloButtonClick() {
        welcomeText.setText("Welcome to JavaFX Application!");
    }
}
```

- `public class HelloController {`: Itt definiáljuk a `HelloController` osztályt, amely felelős a felhasználói felület kezeléséért.

- `@FXML private Label welcomeText;`: Ebben a sorban az `@FXML` annotációval ellátott `welcomeText` nevű `Label` változót deklaráljuk. Ez a változó kapcsolódik az FXML fájlban definiált "welcomeText" ID-jű `Label` elemhez, és lehetővé teszi a szöveg módosítását.

- `@FXML protected void onHelloButtonClick() {`: Ebben a sorban definiáljuk a `onHelloButtonClick` metódust, amely az FXML fájlban definiált __Hello__ gomb eseménykezelője.

:::tip Az @FXML annotációval jelöljük, hogy az FXML fájlban található eseménykezelőkhez kapcsolódik.
:::

- `welcomeText.setText("Welcome to JavaFX Application!");`: Ebben a sorban beállítjuk a `welcomeText` `Label` szövegét __Welcome to JavaFX Application!__-re. Tehát amikor a __Hello__ gombra kattintanak, ez a szöveg jelenik meg a `Label`-en.


### hello-view.fxml

```xml
<?xml version="1.0" encoding="UTF-8"?>

<?import javafx.geometry.Insets?>
<?import javafx.scene.control.Label?>
<?import javafx.scene.layout.VBox?>

<?import javafx.scene.control.Button?>
<VBox alignment="CENTER" spacing="20.0" xmlns:fx="http://javafx.com/fxml"
      fx:controller="org.vasvari.helloworld.HelloController">
    <padding>
        <Insets bottom="20.0" left="20.0" right="20.0" top="20.0"/>
    </padding>

    <Label fx:id="welcomeText"/>
    <Button text="Hello!" onAction="#onHelloButtonClick"/>
</VBox>
```

- `<?xml version="1.0" encoding="UTF-8"?>`: Az XML fájl kezdetén meghatározza a dokumentum verzióját és karakterkódolását.

- `<VBox alignment="CENTER" spacing="20.0" xmlns:fx="http://javafx.com/fxml" fx:controller="org.vasvari.helloworld.HelloController">`: Egy `VBox` konténer elemet definiál, amely a felhasználói felület egy részét reprezentálja. Az `alignment` tulajdonság középre igazítja a gyermekeket, a `spacing` pedig a gyermekek közötti térközt állítja be. Az `xmlns:fx` az FXML névtér deklarációját tartalmazza, és a `fx:controller` attribútum a hozzárendelt vezérlő osztályt jelöli meg.

- `<padding>...</padding>`: Ebben a részben az `Insets` objektumot használják, hogy definiálják a térközöket a `VBox` konténer elem körül.

- `<Label fx:id="welcomeText"/>`: Egy `Label` elemet definiál, amely a szöveget tartalmazza. Az `fx:id` attribútum lehetővé teszi, hogy az elemet azonosítsuk az FXML fájlban, és a __Controller__ osztályból is hivatkozhassunk rá.

- `<Button text="Hello!" onAction="#onHelloButtonClick"/>`: Egy gombot definiál, amelynek felirata __Hello!__. Az `onAction` attribútum meghatározza az eseménykezelő metódus nevét (`onHelloButtonClick`), amelyet hívni fognak, amikor a gombra kattintanak.


Most, miután részleteiben megnéztük a JavaFX fájl felépítését, érdemes továbblépnünk és megismerkednünk a __Model-View-Controller__ (`MVC`) modell elvével, amely egy fontos tervezési minta az alkalmazások felépítéséhez. 

![👉👆👇👈](/assets/images/vasvari/mvc_meme.webp)

Később pedig részletesebben is szemügyre vesszük a JavaFX keretrendszer által kínált komponenseket, amelyek segítségével létrehozhatunk interaktív felhasználói felületeket.

## Model-View-Controller

A __Model-View-Controller__ (`MVC`) egy olyan tervezési minta, amelyet szoftvertervezés során alkalmaznak a felhasználói felületek és az alkalmazáslogika elkülönítésére. Az `MVC` eléggé népszerű és gyakran alkalmazzák szoftverfejlesztés során, különösen akkor, amikor szükség van a felhasználói felület és az alkalmazáslogika szétválasztására illetve a kód újrafelhasználhatóságára. Az `MVC` három fő komponenst tartalmaz: a _Modellt_, a _Nézetet_ és a _Vezérlőt_.

1. **Model:**
   A `Model` adataink és alkalmazásunk üzleti logikájának központi részét képezi. Ide tartoznak az adatstruktúrák, az adatbázis-kezelők, az üzleti szabályok és minden olyan rész, amely az alkalmazás állapotát és logikáját kezeli. A `Model` felelős az adatok karbantartásáért, módosításáért amelyek informálják a többi komponenst az állapotváltozásokról.

2. **View:**
   A `View` felelős a felhasználói felület kialakításáért és a felhasználóval való kommunikációért. Ez a komponens megjeleníti a Modell által tartalmazott adatokat a felhasználó számára, és lehetővé teszi a felhasználói interakciót, például a felhasználói felület eseményeinek (_pl. gombok lenyomása_) érzékelését. A `View` továbbítja az eseményeket a `Controller`-nek, hogy azokat kezelje.

3. **Controller:**
   A `Controller` a központi vezérlő egység, amely összekapcsolja a `Model`-t és a `View`-t. A `Controller` felelős az események (pl. gombnyomások, egérkattintások) fogadásáért a `View`-ból, majd a megfelelő műveletek végrehajtásáért a Modellben. A `Controller` irányítja az alkalmazáslogikát és biztosítja, hogy a `Model` és a `View` ne kommunikáljon közvetlenül egymással.

Az `MVC` tervezési minta előnyei:

- **Kódújrafelhasználás:** A `Model` és a `View` elkülönítése lehetővé teszi a kódújrafelhasználást. Például ugyanazt a `Model`-t és Vezérlőt használhatja több különböző `View`-ban.

- **Könnyű karbantarthatóság:** A kód elkülönítése révén könnyen lehet módosítani vagy kicserélni a különböző komponenseket anélkül, hogy az egész alkalmazást újraírni kellene.

- **Tesztelhetőség:** Az elkülönített komponensek könnyen tesztelhetők, mivel a `Model` és a `Controller` függetlenek a felhasználói felülettől.

:::warning Azonban fontos megjegyezni, hogy a pontos implementáció és működési részletek változhatnak a különböző programozási nyelvek és keretrendszerek esetében. Az MVC alapelvei azonban általánosságban alkalmazhatók, és segíthetnek a szoftvertervezési feladatok egyszerűsítésében és szervezésében.
:::


### Hogyan alkalmazzuk JavaFX-ben?

A fentiekben megbeszéltük az `MVC`-t és a __JavaFX__ alapvetően erre épül - _olyan hasonló mintákkal együtt, mint az `MVP` és az `MVVM`_.  Az eseménytámogatása, a tulajdonságok, a kötés és az __FXML__-dokumentumok mind ezt segítik elő. Ezek lehetővé teszik az üzleti logika és a felhasználói felület szétválasztását.

:::info
A __JavaFX MVC__ minta minden elemét egy vagy több Java-objektum határozza meg. Valójában az __MVC__ a __JavaFX__-ben __FXML__ használatával és anélkül is megvalósítható.
:::

Én személy szerint jobban szeretem az __FXML__-t használni a __View__ objektumok strukturálására és létrehozására, az egyszerűsége, a __Controller__ és __CSS__ fájlok beépített hivatkozásai és az __FXMLLoader__ kényelme miatt. A memóriába betöltés után azonban a __View__ még mindig csak Java objektumok gyűjteménye.

![A JavaFX MVC](/assets/images/vasvari/mvc_javafx.webp)

Ezt szem előtt tartva, megmutatom, hogyan lehet az MVC mintát hibrid (Java/FXML) és csak Java rendszerekben megvalósítani.

Az MVC alkalmazásához a JavaFX-ben három alapelvet kell alkalmaznunk:

- A __View__ logikát a __Controller__ kell tartalmaznia, és meg kell határoznia, hogyan jelenjen meg az információ és hogyan lépjen kapcsolatba vele.

- Az üzleti logikának a __Model__-ben kell szerepelnie, és meg kell határoznia, hogy hogyan lehet az adatokat elérni, létrehozni, tárolni és módosítani.

- Minden egyes nézetnek egy egyszerű és következetes céllal kell rendelkeznie. Sok összetett alkalmazásban akár több nézet is lehet egy ablakon belül. Valójában ez gyakran segít a függőségek felosztásában, és lehetővé teszi a kód újrafelhasználását a programban máshol.


Az MVC-mintának összességében meg kell könnyítenie a kód újrafelhasználását a moduláris elemek módosítása nélkül.

__MVC nélkül__ hajlamosak vagyunk arra, hogy szorosabb kapcsolatot alakítsunk ki az __üzleti és nézeti logika__ között. Ez azt jelenti, hogy ha a viselkedéstől az adatérvényesítésig bármit is meg kell változtatnunk, jelentős refaktorálást kell elvégeznünk.


Oké oké folyamatosan említem őket... __de mi az az üzleti logika és a nézeti logika?__

Ez egy jogos kérdés, és lehet némi átfedés (ahol a nézeti logika valamilyen magasabb elvet valósít meg az üzleti szabályokon vagy logikán alapulva), de itt van néhány példa mindegyikre:

### Üzleti logika

- Milyen formátumban kell megadni a felhasználó lakcímét?
- Mi történik, ha két felhasználó regisztrál, akik egyszerre foglalják el az utolsó helyet?
- Lehetővé kell tenni a felhasználók számára, hogy frissíthessék e-mail címüket, és hogyan kell azt érvényesíteni?

### Nézeti logika

- Mi történik, amikor a felhasználó az 'OK' gombra kattint?
- Hány rekordot jelenítsek meg egyszerre a táblázatban?
- Mely mezőknek kell kitöltve lenniük az OK gomb aktiválása előtt? <i class="fa-solid fa-asterisk"></i>

<i class="fa-solid fa-asterisk"></i> A nézeti logika egy része üzleti logikán (_és üzleti szabályokon_) fog alapulni, például _"a felhasználóknak rendelkezniük kell e-mail címmel és irányítószámmal is"_.

Az __MVC__ tervezési minta zavarosnak tűnhet, mert amint megemlítjük, akár elkezdhetnénk beszélni a domain modellekről[^first], az aggregált gyökerekről[^second] és a repository mintákról[^third].


[^first]: A domain model a valós világbeli objektumok strukturált vizuális megjelenítése, amely magában foglalja az összes entitás viselkedését és kapcsolatait. Ez segít a szoftvertervezés során az objektumokat és szolgáltatásokat összekapcsolni, és biztosítja, hogy a szoftver a területre vonatkozó szabályokat és követelményeket megfelelően kezelje.

[^second]: Az aggregált gyökér olyan entitás vagy objektum, amely csoportosítja és vezeti az összetartozó objektumokat egy területen, meghatározva, hogyan lehet hozzájuk hozzáférni és módosítani az alkalmazásban.

[^third]: A repository minta, amely elszigeteli az adatréteget az alkalmazás többi részétől. Az adatréteg az alkalmazásnak a felhasználói felülettől elkülönített részét jelenti, amely az alkalmazás adatait és üzleti logikáját kezeli.