---
icon: fa-solid fa-3
category:
  - JavaFX
---

# Events

A __JavaFX__ felhasználói felületei szinte teljesen eseményvezéreltek. A legtöbb ember ismeri a műveleti eseményeket, a billentyű- és egéreseményeket, de a felhasználói felület szinte minden összetett frissítése valamilyen esemény segítségével történik. És mégis, az események a __JavaFX__ egyik legkevésbé kihangsúlyozott része.

## A JavaFX események útmutatója

Általános szabályként elmondható, hogy ha egyszerű érték alapú változtatást kell végrehajtani, akkor ezt Property kötéssel lehet elérni. Minden egyéb esetben érdemes eseményeket használni. Az események sokoldalúak és stabil módot biztosítanak a változások vezérlésére az alkalmazásban.

Eseménynek számít bármely állapotváltozás egy bemeneti eszközön (_például egér vagy érintőképernyő_), egy felhasználói művelet (`ActionEvent`) vagy egy háttérfeladat során.  Az események összetett csomópontok, például `TableView`-ben és `ListView`-ben történő görgetés vagy szerkesztés eredményeként is kiválthatunk.


Nagyon alapszinten az `Event` objektum egy osztály, meglepően kevés paraméterrel. Nem tartalmaz semmilyen futtatható kódot, és nem is futtat semmilyen kódot. Ez egy jelzés a rendszernek, hogy valami megváltozott.

A JavaFX jelentős támogatást nyújt a végrehajtható kódok futtatásához, amelyeket külön az `EventHandler` osztályon keresztül definiálnak, minden állapotváltozás esetén.A JavaFX _90_ különálló eseménytípust támogat, és lehetőség van az `Event` osztály kiterjesztésére és további egyéni funkciók definiálására.


### Hogyan működnek az események?

Nem hazudok, ha azt mondom, hogy egy `Event` rendkívül egyszerű. Ami bonyolult, az a háttérben futó folyamatok, amelyek megvalósítják az eseménykezelő rendszert. Ebben a szakaszban áttekintjük, mi határozza meg egy `Event`-et, és hogyan állíthatjuk be a kódunkat, hogy minden alkalommal végrehajtsa, amikor egy bizonyos eseményt észlel.

## Az Event osztály

A JavaFX-ben egy Eseménynek négy tulajdonsága van:

- Forrás (`Source`)
- Cél (`Target`)
- Típus (`Type`)
- Felhasználva (`consumed`)


### Source

JavaFX a `Node`-ot rendeli hozzá az esemény forrásaként a létrehozásnál, ami az esemény okának megfelelően van meghatározva. (_egér, billentyű, művelet stb._).

A Java natívan támogatja az eseményeket az `EventObject` osztállyal. Még mielőtt a __JavaFX__ a saját `Target` és `Type` attribútumait is rárakná, az esemény alapvető része a forrás. A `Target`, a `Type` és a `Consumed` a __JavaFX__ által bevezetett konstrukciók, de minden eseményt valaminek ki kell váltania.

Az eseményforrás az az objektum, amely az eseményt okozza. Sokféle állapotváltozás okozhat eseményt:

- Az egér mozgása, kattintás, húzás
- gesztusok, érintőképernyő bevitele, nagyítás.
- Egy gomb aktiválása
- Egy feladat elindulása, befejezése vagy állapotváltozása.

Még akkor is, ha egy bemeneti eszközről van szó, amelynek állapota megváltozott, a __JavaFX__ hozzárendeli a saját forrását, amely gyakran egy csomópont.

E rugalmasság érdekében az esemény forrása `Object`-ként tárolódik, és a `getSource()` metóduson keresztül érhető el.

### Target

A __JavaFX__ kiterjeszti a `java.util` fájlban szereplő `EventObject`-et, hogy további paramétereket adjon hozzá. Ezek közül az első a `target`, amely azt a `Node`-ot határozza meg, amelyre az esemény hatott. Például, amikor egy `TextField` mezőbe gépelünk, minden billentyűleütés `KeyEvent`-ként regisztrálódik, és minden ilyen esemény célpontja a `TextField` mező lesz.

![A JavaFX kiterjeszti a Java `EventObject` osztályt a specifikus eseménytípusok és az `EventTarget` paraméter hozzáadásához.](/assets/images/vasvari/InputEvents.webp)

Az `EventObject` kiterjesztése rugalmasságot biztosít a __JavaFX__ számára az esemény céljának __JavaFX__-specifikus módon történő tárolásához és megadásához. Ebben az esetben a __JavaFX__-ben bármely esemény céljának implementálnia kell az `EventType` interfészt. Ez az interfész egyetlen metódust tartalmaz, amely paraméterként egy `EventDispatchChain`-t fogad, és egy `EventDispatchChain`-t ad vissza.

```java
EventDispatchChain buildEventDispatchChain(EventDispatchChain tail);
```

Ez áll a __JavaFX__ eseménykezelési módjának középpontjában. Rengeteg __JavaFX__ objektum bővíti az `EventTarget` interfészt:

- __Nodes, Panes and Controls__ <i class="fa-solid fa-window-maximize"></i>
- __Transforms__ <i class="fa-solid fa-rotate"></i>
- __Charts__ <i class="fa-solid fa-chart-line"></i>
- __Lights and Cameras__ <i class="fa-solid fa-lightbulb"></i>
- __Mesh data__ <i class="fa-solid fa-layer-group"></i>
- __Shapes__ <i class="fa-solid fa-shapes"></i>
- __Skins__ <i class="fa-regular fa-file-code"></i>

Ez lehetővé teszi a __JavaFX__ számára, hogy a felhasználói felület bármely elemén eseményeket indítson, de nekünk, fejlesztőknek is lehetővé teszi, hogy ezeket az eseményeket indítsuk.

Mivel az eseményeket a __JavaFX__ így kezeli, azt is biztosítja, hogy az általunk megadott végrehajtható kódot az `Application` szálon küldjük el. Ez egy hihetetlenül stabil módja az olyan összetett elemek, mint a diagramok és a vizuálisan bonyolult vezérlők frissítésének.


### Type

A JavaFX az eseménytípust az esemény eredete (_egér, billentyű, művelet stb._) és az állapotváltozás jellege (_billentyű elengedése, egérkattintás, feladat elindítása stb._) alapján jelöli ki.

Az eseménytípusok az `EventType` osztály által meghatározott __JavaFX__-specifikus paraméterek. Tudomásom szerint a JavaFX két okból definiálja az eseménytípusokat az `EventType` osztály segítségével:

#### Típusbiztonság

Egy `EventType` meghatározásakor meg kell adnia az eseményt, amelyre a típust definiálja, és meg kell adnia az esemény nevét. A __JavaFX__ `90` előre definiált eseménytípussal rendelkezik, amelyek az `Event` és az `al-Event` osztályok statikus tagváltozóiként érhetők el.

:::note Különbség az AWT-től
#### 

A __Java__ másik ablakkezelő megoldása az absztrakt ablakkezelő eszközkészlet (`AWT`). Az események típusbiztonságát ebben az eszközkészletben úgy érték el, hogy az eseményeket egész számokként adták meg.

Ez nem tökéletes típusbiztonság, de statikus tagváltozóként lettek definiálva, mint például `MOUSE_CLICKED = 500`, így legalább könnyen lehetett rájuk hivatkozni.

Ha a __JavaFX__ is ezt tette volna, a `MouseEvent.MOUSE_CLICKED` (`AWT import`) és a `MouseEvent.MOUSE_CLICKED` (`JavaFX import`) elég nehezen lenne észrevehető. Ha a statikus változók mögötti számok különbözőek lennének, talán észre sem vennéd, amíg a kódod össze nem omlik, és kézzel kell hibátkeresned.
:::

### consumed

Bármely ponton ebbe a folyamatban, beleértve azt is, mielőtt az esemény elérte volna a célját, az eseményt kezelni lehet.

A __JavaFX__ eseménykezelésének alapvető része, hogy az események a `SceneGraph`-on haladnak. Egy `Node` csomóponton bekövetkező esemény a tetején lévő __Window__-tól halad lefelé a csomópontig, majd vissza felfelé.

Az eseményt végrehajtásának egy részénél dolgozzuk fel (`.consume()`), akkor az azonnal leáll, és további események nem hívódnak meg.

Lehetőség van egy esemény leállítására, mielőtt az elérné a célcsomópontot. Ez az eseményszűrők gyakori felhasználási módja.

Az eseményeket a `consume()` metódussal lehet felhasználni.

```java
package org.vasvari.helloworld;

import javafx.application.Application;
import javafx.scene.control.Alert;
import javafx.scene.control.Alert.AlertType;
import javafx.scene.control.ButtonType;
import javafx.stage.Stage;

import java.util.Optional;

public class Main extends Application {
    @Override
    public void start(Stage primaryStage) {

        primaryStage.setOnCloseRequest(e -> {
            Alert confirm = new Alert(AlertType.CONFIRMATION, null, ButtonType.YES, ButtonType.NO);
            confirm.setTitle("Biztosan ki akar lépni?");
            confirm.setHeaderText("Biztosan ki akar lépni?");

            Optional<ButtonType> answer = confirm.showAndWait();

            if (answer.isPresent() && answer.get() == ButtonType.NO) {
                e.consume();
            }
        });

        primaryStage.setWidth(400);
        primaryStage.setHeight(400);
        primaryStage.show();

    }

    public static void main(String[] args) {
        launch(args);
    }
}
```

## Eseménykiváltódási fázisok

Amikor egy esemény kiváltódik a __JavaFX__-ben, az a jelenettől (`Scene`) a csomópontig (`Node`), majd a csomóponttól vissza a jelenetig utazik. 

Ehhez három dologra van szükség:

1. Tudni, hogy az eseménynek melyik csomópontba kell eljutnia.
2. Azonosítani a `Window`-ot, többablakos alkalmazásokban.
3. Tudni, milyen útvonalon kell végigmennie a jelenet és a csomópont között.

Ezek a lépések az esemény kiváltásában. Az első lépést __Target Selection__-nek (_Cél kiválasztásnak_) nevezik. A második és harmadik lépést együtt hajtják végre egy folyamatban, amit __Route Construction__-nek (_Útvonal építés_) neveznek.

Ezek mindegyikén végigmegyünk, majd befejezésül végigmegyünk az események indításának módján.

### Cél kiválasztása

A JavaFX a bekövetkezett esemény típusa és az eseményt létrehozó bemeneti eszköz alapján választja ki az esemény célpontját. Mivel a célpont kiválasztása típusfüggő, az alábbiakban áttekinthetjük az egyes eseménytípusok célpont-kiválasztását.

### Útvonal építés

Új események esetén a cél csomópont létrehoz egy útvonalat Önmaga és az `Window` között.

A logika valami ilyesmit követ:

- Szerezd be az összes csomópontot innen a `Scene`:
- A célcsomópont hozzáadása az útvonalhoz végpontként.
- Ha a célnak van szülője, fűzzük hozzá a szülőcsomópontot az útvonalhoz.
- Folytassuk a szülők hozzáadását, amíg el nem érek egy olyan csomóponthoz, amelynek nincs szülője.
- Ez a gyökércsomópont.
- Használjuk a gyökércsomópontot a `Scene` megszerzéséhez.

### Esemény rögzítése

A folyamat most az események lánca, ahol az esemény a lánc első elemenél kezdődik, majd fokozatosan halad végig minden csomóponton, mígnem elérjük a csomópontját.

Itt válik fontossá az esemény szűrők (`EventFilter`) és az eseménykezelők (`EventHandler`) közötti különbség. Ha még nem hallottál az esemény szűrőkről, azokat hozzá lehet adni bármely `EventTargethez` (csomópontok, jelenet, diagramok, feladatok stb.) az `addEventFilter()`-t.

Az esemény szűrők remekül használhatók a `Node`-ok viselkedésének irányítására, mivel a `SceneGraph` bejárása során a szülők először hajtják végre azokat.

![](/assets/images/vasvari/EventFiltersFiring.webp)

Eseményszűrők bármely `EventTargethez` hozzáadhatók az `addEventFilter()` meghívásával a megfelelő `EventType` és `EventHandler` megadásával.

## Futtatható kód definiálása egy `EventHandler`-ben

Amikor egy eseményre adott választ szeretnénk definiálni, akkor egy `EventHandler` objektumot kell használnunk.

### EventHandler létrehozása

Ezt úgy tehetjük meg, hogy az `EventHandler`-t névtelen belső osztályként vagy `lambda`-kifejezésként definiáljuk.


### EventHandler definiálása

Az `EventHandler` egy objektum egyetlen metódussal, amelyet felül kell írnunk, amikor példányosítjuk. Mivel az `EventHandler` interfész paraméterezett, meg kell adnunk, hogy milyen típusú eseményt kezelünk. Ebben az esetben egy `MouseEventet` fogunk használni.

```java
EventHandler<MouseEvent> eventHandler = new EventHandler<>() {
    @Override
    public void handle(MouseEvent event) {
        //executable code
    }
};
```

### Az eseménykezelő definíciójának cseréje egy lambda kifejezéssel

Az `EventHandler` egy funkcionális interfész (egy interfész egyetlen metódussal). A kényelem érdekében az `EventHandler` interfész `handle()` metódusa egy lambda kifejezéssel is megadható.

```java
EventHandler<MouseEvent> eventHandler = event -> {
    //executable code
};
```

### Eseményszűrők, eseménykezelők hozzáadása és eltávolítása

Amikor eseménykezelőt definiálunk és adunk hozzá egy csomóponthoz, meghatározzuk, hogy az adott eseménynek milyen típusától szeretnénk, ha a kódunk kiváltódna. Például, ha azt szeretnénk, hogy a kódunk a jelenetünk gyökércsomópontjának bármely egéreseményétől elinduljon, használhatjuk a `MouseEvent.ANY` eseménytípust.

Ha egy eseménykezelőt a kód egy későbbi pontján majd el akarunk távolítani, akkor meg kell tartanunk a létrehozott `EventHandler` objektumra való hivatkozást.


```java
//define the handler
EventHandler<MouseEvent> eventHandler = event -> {
    //executable code
};
//add the handler
rootNode.addEventHandler(MouseEvent.ANY, eventHandler);

//later remove the handler 
//this should be the same as defined above
rootNode.removeEventHandler(MouseEvent.ANY, eventHandler);
```

Ugyanilyen egyszerű az eseményszűrők definiálása és eltávolítása az `addEventFilter()` és `removeEventFilter()` metódusok segítségével.

Néhány egyszerű dolgot azonban nem szabad elfelejteni:

- Ha egy eseménykezelőt adtál hozzá, akkor egy eseménykezelőt kell eltávolítanod (nem pedig egy szűrőt), és fordítva.
- Az esemény típusának ugyanaznak kell lennie, amikor eltávolítod, mint amikor hozzáadod.


Példa kód:

```java
package org.vasvari.helloworld;

import javafx.application.Application;
import javafx.event.EventHandler;
import javafx.scene.Group;
import javafx.scene.Scene;
import javafx.scene.control.Label;
import javafx.scene.control.TextField;
import javafx.scene.input.KeyEvent;
import javafx.scene.paint.Color;
import javafx.stage.Stage;

public class JavaFX_EventFilter extends Application {

    @Override
    public void start(Stage primaryStage) throws Exception {
        // Címkék és szövegmezők hozzáadása a jelenethez
        Label label1 = new Label("Nyomja meg a billentyűt ");
        TextField textfield1 = new TextField();
        Label label2 = new Label("Esemény szűrés ");
        TextField textfield2 = new TextField();

        // Elrendezés
        label1.setTranslateX(100);
        label1.setTranslateY(100);
        label2.setTranslateX(100);
        label2.setTranslateY(150);
        textfield1.setTranslateX(250);
        textfield1.setTranslateY(100);
        textfield2.setTranslateX(250);
        textfield2.setTranslateY(150);

        // Eseménykezelő objektum létrehozása
        EventHandler<KeyEvent> eventHandler = new EventHandler<>() {
            @Override
            public void handle(KeyEvent event) {
                textfield2.setText(event.getEventType().toString());
                textfield1.setText(event.getText());
                event.consume();
            }
        };

        // Esemény szűrő regisztrálása a szövegmezőn generált eseményhez
        textfield1.addEventFilter(KeyEvent.ANY, eventHandler);

        // Jelenet beállítása
        Group root = new Group();
        root.getChildren().addAll(label1, label2, textfield1, textfield2);
        Scene scene = new Scene(root, 500, 300, Color.WHEAT);
        primaryStage.setScene(scene);
        primaryStage.setTitle("Esemény szűrő hozzáadása");
        primaryStage.show();
    }

    public static void main(String[] args) {
        launch(args);
    }

}
```

## Eseménytípusok

Az események általában bemeneti eseményekre és JavaFX-specifikus eseményekre oszthatók. Az `ActionEvents` bemenetet igényelnek, de a bemeneti típusokat is átfogják, és a __JavaFX__ belsőleg hozza létre őket, ezért ezeket nem a bemeneti, hanem a JavaFX-specifikus események közé soroljuk.

### Az operációs rendszer által generált (bemeneti) események

A bemeneti események, például az egér-, billentyűzet- és gesztusesemények az alkalmazás szintje felett történnek, és az operációs rendszer továbbítja őket az alkalmazásunknak. A __JavaFX__ háttérfolyamatai ezeket az információkat arra használják, hogy azonosítsák a megfelelő csomópontot, amelyen az eseményt végrehajtják.

![](/assets/images/vasvari/MouseEventJavaFXv2.webp)

### Billentyűesemények

A billentyűeseményeket az operációs rendszer generálja, amikor egy billentyű állapotát megváltoztatja - vagyis, lenyomják vagy felengedik. Ha egy billentyű hosszú ideig lenyomva marad, az operációs rendszer további billentyűeseményeket kezdeményezhet.

### Egeresemények

A `MouseEvent` osztály meghatározza az egérkurzor pozíciójának vagy gombállapotainak bármilyen változását. Ahogyan a billentyűesemények esetében, ezeket az operációs rendszer szolgáltatja az alkalmazásnak, a felhasználó által beállított alapértelmezett egérviselkedési várakozások mellett.

## JavaFX-eredetű események

A JavaFX képes saját események létrehozására és küldésére is. Ezeknek az eseményeknek három típusa van:

- Action Events
- Worker Events
- Edit, Modification and Sorting Events

Minden típus lehetővé teszi a JavaFX számára, hogy funkcionalitást helyezzen a felhasználói felület fölé.

### Action Events

A `Action Events` eseményeket úgy tervezték, hogy több bemeneti típusra is kiterjedjenek, és egyetlen végrehajtható kódot határozzanak meg, amelyet egy adott felhasználói művelet esetén használnak. Az olyan vezérlőelemek, mint a `TextField` és a gombok rendelkeznek `Action Event`-el.

Ez a funkcionalitás rétegezést biztosít a felhasználói felület felett egy olyan módon, amely több felhasználói bevitelt is felölel. Az akció a JavaFX rendszer nézőpontjából nézve egyfajta megerősítő felhasználói művelet. Példák erre:

1. Gombra kattintás
2. Az Enter lenyomása, amikor a gomb van fókuszban
3. Az Enter lenyomása egy TextField-ben
4. Egy kapcsológomb felfegyverezése vagy lefegyverezése (billentyűzettel vagy egérrel)
5. Menügombra kattintás (vagy Enter leütése)


Mindezekben az esetekben a __JavaFX__ támogatja a következetes felhasználói elvárásokon alapuló műveletek végrehajtását, például egy űrlap elküldését az űrlap utolsó szövegmezőjének Enter billentyűjének megnyomásával, ahelyett, hogy a gombra kellene kattintani. Ily módon ugyanazt a végrehajtható kódot - ugyanazt az `EventHandler`-t - használhatjuk a szövegmező és a `Submit` gomb kezelésére is az alkalmazásunkban.

### Hogyan használjuk az Action Eventeket

Leggyakrabban az `Action Event`-kezelőket a `setOnAction()` módszerrel adják hozzá. Ritkán van szükség több funkcionalitásra, ezért más eseménykezelők felülírása kevésbé fontos.

```java
textField.setOnAction(event -> {
    //event action defined with lambda
});
```

Mint bármely eseménnyel, azokat beállíthatjuk az `addEventHandler()` és `addEventFilter()` metódusokkal.

Végül ezeket az __FXML__-ben a következő szintaxissal lehet definiálni:

```xml
<TextField onAction="#handleTextCommit" fx:id="textField"/>
```

A __"#"__ szimbólum a `FXMLLoader`-nek azt az utasítást adja, hogy injektálja a `handleTextCommit(ActionEvent event)` metódust a `TextField` `onAction` tulajdonságába. A `handleTextCommit()` metódusnak jelen kell lennie a vezérlőben (a megfelelő `ActionEvent` argumentummal), különben betöltési kivétel (_load exception_) keletkezik.