---
icon: fa-solid fa-2
category:
  - JavaFX
---

# SceneBuilder

A _SceneBuilder_ egy olyan grafikus eszköz, amelyenek segítségével könnyen tervezhetünk és szerkeszthetünk a JavaFX alkalmazások felhasználói felületeit anélkül, hogy kódolnunk kellene az összes felhasználói felületi elemet.

![SceneBuilder](/assets/images/vasvari/scenebuilder/sblogo.webp)

A _SceneBuilder_ lehetővé teszi számunkra, hogy felhasználói felületi elemeket hozzunk létre, például gombokat, szövegdobozokat, címkéket, táblázatokat stb., majd ezeket egyszerűen elrendezzük és testre szabhassuk elképzeléseinek megfelelően. A felület létrehozása után a _SceneBuilder_ lehetővé teszi az exportálását __FXML__ formátumban, amely a JavaFX alkalmazásban használt __XML__-alapú leíró nyelv. Az elkészült __FXML__ fájlt az alkalmazásba lehet betölteni és kóddal vezérelni.

A _SceneBuilder_ használata gyorsíthatja az alkalmazások fejlesztését, különösen, ha fontos a felhasználói felület vizuális tervezése és finomhangolása.

![SceneBuilder program elindítás után](/assets/images/vasvari/scenebuilder/scenebuilder1.webp)

1. **Menüsor (Menu Bar):** A felső részen található menüsor tartalmazza a fájlkezelő funkciókat, például az új projekt létrehozását, a projekt megnyitását, mentését és nyomtatását.

2. **Bal oldali eszköztár (Left-hand Sidebar):** A bal oldalon található eszköztár tartalmazza a komponensek kategóriáit, amelyek között választhatsz a tervezés során. Például, itt találod a _Containers_, _Controls_, _Layouts_, _Shapes_, stb. kategóriákat.

3. **Document Tree (Dokumentum fa):** Itt látható __FXML dokumentumot__ reprezentáló hierarchia. A különböző felhasználói felületi komponensek és konténerek a fán belül szerveződnek. Ezen a panelen hozzáadhatod, eltávolíthatod és szerkesztheted ezeket a komponenseket, valamint megváltoztathatod azok hierarchiáját.

4. **Controller (Vezérlő):** Amennyiben egy __Java__ osztályt használsz a projektedben, akkor itt láthatod az osztályhoz tartozó metódusokat és eseménykezelőket. Ezen a panelen konfigurálhatod az eseménykezelőket és kötheted a komponenseket az osztály metódusaihoz.

5. **Központi munkaterület (Central Workspace):** A középső részen található munkaterület az, ahol tervezheted és elrendezheted az alkalmazásod felhasználói felületét. Ide húzhatod és ejtheted a különböző komponenseket, például gombokat, címkéket, szövegmezőket, táblázatokat stb.

6. **Szerkesztő ablak (Inspector):** A jobb oldali panelen található szerkesztő ablakban konfigurálhatod és testre szabhatod a kiválasztott komponenst. Itt adhatsz meg tulajdonságokat, például szöveget egy címkéhez vagy hozzárendelheted eseménykezelőket egy gombhoz.

Ez egy gyors áttekintés a Scene Builder felépítéséről és funkcióiról. A valóságban a program sok részletet kínál, amelyek segít az alkalmazások felhasználói felületének hatékony tervezésében és szerkesztésében.

### UI elemek

Nézzük meg a leggyakrabban használt *Felhasználói felületi* elemeket:

1. **Button (Gomb):**
   - Leírás: A gomb egy olyan felhasználói felületi elem, amely lehetővé teszi a felhasználók számára egy művelet kiválasztását vagy aktiválását egy kattintással. Például egy gombot lehet használni egy űrlap elküldéséhez vagy egy funkció indításához.

   ![Button](/assets/images/vasvari/scenebuilder/button.webp)

2. **Label (Címke):**
   - Leírás: A címke egy statikus szöveges elem, amelyet általában a felhasználói felületen információ megjelenítésére használnak. Például szöveg megjelenítésére használható egy űrlapon vagy egy kép alatt a leírás megadására.
   
   ![Label](/assets/images/vasvari/scenebuilder/label.webp)

3. **TextField (Szövegmező):**
   - Leírás: A szövegmező egy olyan beviteli mező, ahol a felhasználók szöveget vagy számokat írhatnak be. Ez a mező lehetővé teszi a felhasználók számára adataik megadását vagy kiválasztását.

   ![TextField](/assets/images/vasvari/scenebuilder/textfield.webp)

4. **TableView (Táblázat):**
   - Leírás: A táblázat egy olyan komponens, amely lehetővé teszi a táblázatos adatok megjelenítését és szerkesztését. Általában használják listák, táblázatok vagy adatbázisok tartalmának megjelenítésére.
   
   ![TableView](/assets/images/vasvari/scenebuilder/tableview.webp)

5. **ComboBox (Legördülő lista):**
   - Leírás: A legördülő lista egy olyan felhasználói felületi elem, amely egy választási lehetőségek listát tartalmaz, és a felhasználók egyet választhatnak ki belőle. Ez ideális olyan helyzetekben, amikor több lehetőség közül lehet választani.
   
   ![ComboBox](/assets/images/vasvari/scenebuilder/combobox.webp)

6. **CheckBox (Jelölőnégyzet):**
   - Leírás: A jelölőnégyzet egy olyan elem, amellyel a felhasználók egyetlen választási lehetőséget kijelölhetnek vagy kikapcsolhatnak. Általában igaz/hamis típusú beállításokhoz használják.
   
   ![CheckBox](/assets/images/vasvari/scenebuilder/checkbox.webp)

7. **RadioButton (Rádiógomb):**
   - Leírás: A rádiógomb olyan felhasználói felületi elem, amely hasonló a jelölőnégyzethez, de csoportokban jelenik meg. Egy csoporton belül a rádiógombok közül csak egy választható ki. Olyan helyzetekben használják, amikor egyetlen opciót kell kiválasztani egy csoportból.
   
   ![RadioButton](/assets/images/vasvari/scenebuilder/radiobutton.webp)

8. **MenuBar (Menüsor):**
   - Leírás: A menüsor egy olyan felületi elem, amely menük és almenük listáját tartalmazza. A felhasználók itt találják az alkalmazás különböző funkcióit és lehetőségeit.
   
   ![MenuBar](/assets/images/vasvari/scenebuilder/menubar.webp)

9. **TabPane (Lapozó):**
   - Leírás: A lapozó egy olyan konténer, amely több lapot (flipek) tartalmaz, és a felhasználók közötti váltáshoz használható. Minden lap különböző tartalmat jeleníthet meg.

   ![TabPane](/assets/images/vasvari/scenebuilder/tabpane.webp)

10. **ImageView (Képnézet):**
    - Leírás: A képnézet egy olyan felhasználói felületi elem, amely egy képet vagy grafikát jelenít meg az alkalmazásban. Használható képek, logók vagy más vizuális elemek megjelenítésére.

    ![ImageView](/assets/images/vasvari/scenebuilder/imageview.webp)

Ezek a gyakran használt elemek a JavaFX alkalmazásokban. A Scene Builder segítségével könnyen hozzáadhatók és testreszabhatók a felhasználói felület kialakításához.

### Elrendezési elemek

![Elrendezési elemek](/assets/images/vasvari/scenebuilder/control_elements.webp)

Nézzük meg az elrendezési elmeket, amelyek a JavaFX Scene Builderben gyakran használtak a felhasználói felületek kialakításához:

1. **BorderPane:**
   - A `BorderPane` a középen lévő tartalom körül négy zónát definiál: _felső_, _alsó_, _bal_ és _jobb_. A középső területet általában a fő tartalomnak használják, míg a peremterületeken lehetőség van a további elemek (_például menüsor_) elhelyezésére.

   ![BorderPane](/assets/images/vasvari/scenebuilder/borderpane.webp)

2. **HBox (Horizontális doboz):**
   - Az `HBox` a benne elhelyezett elemeket vízszintesen egymás után helyezi el. Ideális vízszintes gombok, címkék vagy vezérlők elrendezéséhez.

   ![HBox](/assets/images/vasvari/scenebuilder/hbox.gif)

3. **VBox (Vertikális doboz):**
   - A `VBox` hasonló az `HBox`-hoz, de a tartalmazott elemeket függőlegesen egymás alá helyezi. Segít a felhasználói felület függőleges elrendezésében.

   ![VBox](/assets/images/vasvari/scenebuilder/vbox.gif)

4. **StackPane:**
   - A `StackPane` az összes benne lévő elemet egymásra helyezi. Jól használható akkor amikor például egy képre szeretnénk szöveget írni. Amennyiben megváltoztatjuk az elemek pozicionálását, akkor az az összes belerakott elemre hatással lesz.

   ![StackPane](/assets/images/vasvari/scenebuilder/stackpane.webp)

   ![Demo](/assets/images/vasvari/scenebuilder/stackpane_demo.gif)

5. **GridPane:**
   - A `GridPane` táblázatos elrendezés, amely sorokat és oszlopokat definiál. Az elemeket a rács celláiban rendezhetjük.

    ![GridPane](/assets/images/vasvari/scenebuilder/gridpane.webp)

6. **FlowPane:**
   - A `FlowPane` egy olyan elrendezés, amely az elemeket az elérhető helyhez igazítja, így vízszintesen vagy függőlegesen is rendezheti őket. Ez ideális dinamikusan változó méretű elrendezéséhez.

   ![FlowPane](/assets/images/vasvari/scenebuilder/flowpane.webp)

   ![Demo](/assets/images/vasvari/scenebuilder/flowpane_demo.gif)

7. **TilePane:**
   - A `TilePane` hasonló a `FlowPane`-hoz, de a benne lévő elemek egyenletesen oszlanak el, és az összes sor és oszlop azonos méretű. Ez különösen hasznos olyan alkalmazásoknál, ahol az elemeknek szabályos elrendezésre van szükség.

   ![](/assets/images/vasvari/scenebuilder/tilepane1.webp)

   ![TilePane](/assets/images/vasvari/scenebuilder/tilepane2.webp)

8. **AnchorPane:**
   - Az `AnchorPane` az elemeket rögzített távolságra legyenek az ablak szélétől vagy más elemektől. Ez segíthet a precíz elhelyezésben és pozícionálásban.

   ![AnchorPane](/assets/images/vasvari/scenebuilder/anchorpane.webp)


Ezek az elrendezések segítenek a felhasználói felületek struktúrájának és elrendezésének meghatározásában. Attól függően, hogy milyen típusú felhasználói felületet tervezel, kiválaszthatod a megfelelő elrendezést a projekt igényeinek kielégítéséhez.

## FXML

Az __FXML__ egy __XML__ alapú leíró nyelv, amely lehetővé teszi, hogy __JavaFX__ alkalmazásokban a felhasználói felületek struktúráját leírjuk anélkül, hogy a kódban definiálnánk őket. __FXML__ segítségével meghatározhatjuk, hogy mit tartalmaz egy felület, azonban a viselkedését Java kódban határozzuk meg.


Ez a példa egy egyszerű __JavaFX__ alkalmazást mutat be, amely egy ablakban egy gombot tartalmaz, és amikor rákattintunk, kiírja a __Hello, JavaFX!__ üzenetet a konzolra.

Itt van egy a __JavaFX API__ segítségével létrehozott felület:

```java
import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.layout.StackPane;
import javafx.stage.Stage;

public class JavaFXApp extends Application {

    @Override
    public void start(Stage primaryStage) {
        primaryStage.setTitle("JavaFX Példa");

        Button button = new Button("Kattintás");
        button.setOnAction(e -> System.out.println("Hello, JavaFX!"));

        StackPane root = new StackPane();
        root.getChildren().add(button);

        primaryStage.setScene(new Scene(root, 300, 200));
        primaryStage.show();
    }

    public static void main(String[] args) {
        launch(args);
    }
}
```


Az __FXML__ megfelelője ennek a felületnek így néz ki:

```xml
<?xml version="1.0" encoding="UTF-8"?>

<?import javafx.scene.control.Button?>
<?import javafx.scene.layout.StackPane?>

<StackPane xmlns:fx="http://javafx.com/fxml" fx:controller="SampleController">
    <Button text="Kattintás" fx:id="button" onAction="#handleButtonClick" />
</StackPane>
```

```java
import javafx.fxml.FXML;
import javafx.scene.control.Button;

public class SampleController {

    @FXML
    private Button button;

    @FXML
    private void handleButtonClick() {
        System.out.println("Hello, JavaFX FXML!");
    }
}
```

Az FXML fájlok `*.fxml` kiterjesztéssel rendelkeznek. A fájl első sora az _XML prolog_, amelyet követnek az _importok_, majd pedig maguk a _grafikus komponensek_ leírásai láthatóak.

A példában két helyen használja az `fx` prefixet:

   1. `fx:controller`: Ezt az attribútumot a legfelső szintű XML elemen használjuk, hogy megadjuk, mely vezérlő osztállyal dolgozzon együtt az __FXML__ állomány futás közben. Itt tudjuk beállítani az eseménykezelő metódusokat az egyes elemekhez, vagyis azokat a metódusokat, amelyek a kódban végzik majd a műveleteket. Fontos megjegyezni, hogy az itt megadott vezérlő osztályt a `FXMLLoader` példányosítja.

   2. `fx:id`: Minden egyes `XML` elemhez hozzárendelhetünk egy egyedi azonosítót, amely az `fx:id` attribútummal kerül megadásra. Ez az azonosító lehetővé teszi, hogy a __Java__ kódból is elérjük a betöltött _UI elemeket_ (`Node`) a nevük alapján. Ha nem tervezünk a kódban hivatkozni az adott _UI elemre_, akkor az `fx:id` attribútum használata elhagyható.

Az __XML__-alapú fájlok manuális szerkesztése bonyolult lehet, és a __JavaFX API__ használata kézenfekvőbb megoldás lenne ebben a példában. Azonban a könnyen érthető formátuma miatt lehetőség van olyan eszközök használatára, amelyek grafikusan segítenek létrehozni felhasználói felületeket - erre célra használjuk a __SceneBuilder__-t.

:::info
A __SceneBuilder__-t az __IntelliJ__ alapból felkínálja az __*.fxml__ kiterjesztésű fájlok szerkesztéséhez, de a program futtatható fájlját be kell állítani a __Settings -> Languages & Frameworks__
__-> JavaFX -> Path to SceneBuilder__ segítségével. Ezután az __FXML__ fájlon jobb kattintás, és a legalsó menüpont a __SceneBuilder__, ami végül megnyitja a vizuális szerkesztőt.
:::

```java
<Button text="Kattintás" fx:id="button" onAction="#handleButtonClick" />
```

Az __FXML__ lehetővé teszi az eseménykezelők megadását, amelyeket a `Controller` osztályban kell definiálni. Az eltérés a __JavaFX API__-tól, hogy az eseménykezelő metódusok nevét az __FXML__-ben az `onAction` attribútum segítségével adhatjuk meg. Az attribútumban egyszerűen meg kell adni az eseménykezelő metódus nevét.

### FXML betöltése

Az __FXML__-ben definiált felhasználói felületeket a __Java__ alkalmazás kódjában be kell tölteni annak érdekében, hogy a megjelenítéshez szükséges `SceneGraph` létrejöjjön. Ezt a folyamatot a __Java__ kódban az `FXMLLoader` segítségével végezzük el. Miután a felület betöltődött, a `SceneGraph` létrehozása és megjelenítése a megszokott módon történik egy `Stage` tartalmaként.

```java
@Override
public void start(Stage stage) throws IOException {
   FXMLLoader fxmlLoader = new FXMLLoader(HelloApplication.class.getResource("hello-view.fxml"));
   Scene scene = new Scene(fxmlLoader.load(), 320, 240);
   stage.setTitle("Hello!");
   stage.setScene(scene);
   stage.show();
}
```

A betöltött __FXML__ tartalmat teljes egészében felhasználhatjuk mint Scene Graph (_amely valójában az is_), és lehetőségünk van azt használni például egy Scene gyökérelemként is, vagy akár csak egy részét betölthetjük egy __FXML__-ből, amely később része lehet egy összetettebb felületnek (_ez hasznos lehet újrafelhasználásnál_). Fontos megjegyezni, hogy az __FXML__ állományokat az `FXMLLoader` futás közben tölti be, így csak abban a pillanatban derül ki, hogy az adott állomány megfelel-e az __FXML__ specifikációjának.

```java
public class HelloController implements Initializable {
    @FXML
    private Label welcomeText;

    @FXML
    protected void onHelloButtonClick() {
        welcomeText.setText("Welcome to JavaFX Application!");
    }

    @Override
    public void initialize(URL url, ResourceBundle resourceBundle) {
        
    }
}
```

Amikor az `FXMLLoader` segítségével betöltünk egy `FXML` dokumentumot, gyakran előfordul, hogy szeretnénk kezdőértékeket beállítani a __FXML__-ben definiált grafikus elemeknek. Ha a konstruktorban próbáljuk ezt megtenni, akkor valószínűleg `NullPointerException` hibával találjuk magunkat szemben, mert a mezőinjektálás még nem történtek meg. Azonban ennek a problémának egyszerű megoldása van: az `FXMLLoader` automatikusan meghívja az `initialize()` nevű metódust, amikor a mezőinjektálás már megtörténtek. A `initialize()` metódus felülírásához a `javafx.fxml.Initializable` interfészt kell implementálnunk. Ezen a ponton már biztosak lehetünk benne, hogy a grafikus elemek _inicializálása_ megfelelően megtörtént.

Az `initialize` metódus paraméterei között található `URL` és `ResourceBundle`, amelyek lehetővé teszik a szükséges erőforrásokhoz és lokalizációs információkhoz való hozzáférést.

1. `URL`: A `URL` objektum segítségével hivatkozhatunk erőforrásokra, például képekhez, hangfájlokhoz vagy más külső erőforrásokhoz. Ezen keresztül tudjuk megadni a forrásfájlok elérési útját vagy az erőforrásokhoz vezető hivatkozást.

2. `ResourceBundle`: A `ResourceBundle` egy lokalizált erőforrások gyűjteményét tartalmazza. Használhatjuk például a szövegek nyelvfüggő megjelenítéséhez. A `ResourceBundle` segít az alkalmazás szövegeinek lokalizációjában és annak kezelésében, hogy a megfelelő nyelven vagy környezeten megjelenjenek a felhasználói felületen.


### FXML Controller

Az __FXML__-ben kialakított felhasználói felület elemeihez való hozzáférést biztosítani Java kódból az `@FXML` annotáció segítségével lehet megoldani. Ennek a megközelítésnek a lényege, hogy az __FXML__ fájlban található elemeket a Java kódban deklarált változókhoz kötjük. Az `@FXML` annotáció segít azonosítani az elemeket a megfelelő nevük és az __FXML__ fájlban található `fx:id` alapján. Ez lehetővé teszi a __SceneBuilder__ segítségével a vizuális tervezőben kezelni ezeket az elemeket, és eseménykezelőket is hozzárendelni.

:::info
A `@FXML` annotáció alkalmazása lehetővé teszi, hogy a privát láthatóságú mezőket és metódusokat is láthatóvá tegyük az FXML-ben, nem szükséges, hogy a változók vagy metódusok publikus láthatósággal rendelkezzenek ahhoz, hogy működjenek.
:::

Az FXML és a kód közötti kapcsolatot az annotáció teremti meg, és annak érdekében, hogy a rendszer automatikusan megtalálja, melyik FXML-ben deklarált pl. __Button__-t kell a változóval összekapcsolni, a változó __nevének__ és az __FXML__-ben deklarált elem `fx:id` attribútumának egyeznie kell.


Az __FXML__ annotáció használatához ráadásul egy függőséget is használunk a `POM.xml`-ben:

```xml
<dependency>
   <groupId>org.openjfx</groupId>
   <artifactId>javafx-fxml</artifactId>
   <version>17.0.6</version>
</dependency>
```



## Dailógus ablakok

![AnchorPane](/assets/images/vasvari/scenebuilder/alert.webp)

Az `Alert` osztály a `Dialog` osztály alosztálya, és számos előre elkészített dialógustípust tartalmaz, amelyek könnyen megjeleníthetők a felhasználóknak, hogy infromációt jelenítsünk meg. Ezért sok felhasználó számára az `Alert` osztály a legmegfelelőbb osztály az igényeiknek (szemben a `Dialog` közvetlen használatával). Alternatívaként azoknak, akik szöveges bevitelre vagy döntést várnak a felhasználót, jobban járnak a `TextInputDialog`, illetve a `ChoiceDialog` használatával.

Az alábbiakban részletezem az `Alert` típusokat.

### Error Alert

Az `Error Alert` egy olyan ablak, amely hibaüzenetek vagy problémák esetén jelenik meg a felhasználó számára. Ez a típusú ablak rendszerint piros színnel és egy megfelelő hibaüzenettel rendelkezik. Például, ha egy alkalmazásban hibás adatot ad meg a felhasználó, az `Error Alert` jelenhet meg a következőképpen:

_"Hiba! Hibás adatokat adott meg. Kérem ellenőrizze az input mezőket."_

Az `Error Alert` hasznos lehet a felhasználók számára, hogy tudomást szerezzenek az esetleges hibákról, és segítsen nekik megérteni a problémát.

### Information Alert

Az `Information Alert` olyan ablak, amely informatív üzeneteket tartalmaz, amelyek segítenek a felhasználónak megérteni vagy észlelni valamilyen fontos információt. Ez általában zöld vagy kék színű, és például egy folyamat sikerességére lehet használni:

_"Művelet sikeresen végrehajtva. Az új adatok el lettek mentve."_

Az `Information Alert` segít a felhasználónak észlelni, hogy az alkalmazás vagy a rendszer sikeresen teljesítette a feladatot.

### Warning Alert

A `Warning Alert` egy olyan ablak, amely a felhasználót figyelmezteti olyan potenciálisan problémás vagy kockázatos helyzetekre, amelyek megkövetelik a figyelmet vagy a cselekvést. Ez általában narancssárga vagy sárga színű lehet, és például az alábbi módon jelenhet meg:

_"Figyelem! Az adatok elveszhetnek, ha nem menti el őket. Szeretne menteni most?"_

A `Warning Alert` segít a felhasználónak felismerni a potenciális problémákat, és lehetőséget nyújt a döntés meghozatalára vagy a további cselekvésre.

Ezen Alert típusok használata segít a felhasználók számára világos és érthető visszajelzést nyújtani vagy a rendszerben történő eseményekről. Azoknak az eseményeknek megfelelően használjuk őket, amelyekkel a felhasználónak tisztában kell lennie, és amelyek segítik őket a helyes döntések meghozatalában vagy a problémák azonosításában.


### Minta kód

A __"HelloWorld FXML"__-es programunk eddigi változatának módosításához használjuk a __SceneBuilder__ -t. Ezen módosítások során hozzáadunk a felhasználói felületünkhöz három gombot (`Button`) és három címkét (`Label`).

Az alábbi kódot használjuk fel az `HelloController` nevű osztályunk tartalmának módosításához:

__HelloController.java__

```java
package org.vasvari.alertsjavafx;

import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.scene.control.Alert;

public class HelloController {
    @FXML
    void errorButton(ActionEvent event) {
        Alert alert = new Alert(Alert.AlertType.ERROR);
        alert.showAndWait();
    }

    @FXML
    void infoButton(ActionEvent event) {
        Alert alert = new Alert(Alert.AlertType.INFORMATION);
        alert.showAndWait();
    }

    @FXML
    void warningButton(ActionEvent event) {
        Alert alert = new Alert(Alert.AlertType.WARNING);
        alert.showAndWait();
    }
}
```

__hello-view.fxml__

```xml
<?xml version="1.0" encoding="UTF-8"?>

<?import javafx.scene.control.Button?>
<?import javafx.scene.control.Label?>
<?import javafx.scene.layout.Pane?>
<?import javafx.scene.layout.VBox?>

<Pane maxHeight="-Infinity" maxWidth="-Infinity" minHeight="-Infinity" minWidth="-Infinity" prefHeight="300.0" prefWidth="300.0" xmlns="http://javafx.com/javafx/17" xmlns:fx="http://javafx.com/fxml/1" fx:controller="org.vasvari.alertsjavafx.HelloController">
   <children>
      <VBox layoutX="230.0" layoutY="58.0" prefHeight="200.0" prefWidth="56.0" spacing="30.0">
         <children>
            <Button mnemonicParsing="false" onAction="#infoButton" text="Show" />
            <Button mnemonicParsing="false" onAction="#warningButton" text="Show" />
            <Button mnemonicParsing="false" onAction="#errorButton" text="Show" />
         </children>
      </VBox>
      <VBox layoutX="65.0" layoutY="65.0" prefHeight="200.0" prefWidth="170.0" spacing="30.0">
         <children>
            <Label text="AlertType.INFORMATION" />
            <Label text="AlertType.WARNING" />
            <Label text="AlertType.ERROR" />
         </children>
      </VBox>
   </children>
</Pane>
```

Ha ezzel megvagyunk akkor a következő eredményt láthatjuk a program futtatásakor:


![A program](/assets/images/vasvari/scenebuilder/dialog_app.webp)

Így most ha bármelyik gombra rá is kattintunk abban az esetben megjelenik a számunkra szükséges `Alert` ablak.

![Error](/assets/images/vasvari/scenebuilder/dialog_error.webp)

![Warning](/assets/images/vasvari/scenebuilder/dialog_warning.webp)

![Information](/assets/images/vasvari/scenebuilder/dialog_information.webp)

Azonban észrevehetjük, hogy jelenleg egyik sem tartalmaz szöveges üzenetet a felhasználó számára, csupán a piktogram alapján sejtethetjük, hogy valamilyen figyelmeztetést kaptunk. Továbbá azt is megfigyelhetjük, hogy a program fejlécében megjelenik az `Alert` ablak típusa.


### Címsor, fejléc, tartalom

Most pedig bemutatom, hogy az `Alert` ablakokhoz hogyan tudunk szöveges tartalmat hozzáadni illetve fejléc szövegét módosítani:

1. **Címsorának módosításához:**
   Az `Alert` ablak címének módosításához használd a `setTitle(String text)` metódust. Például:

   ```java
   Alert alert = new Alert(Alert.AlertType.INFORMATION);
   alert.setTitle("Információ");
   alert.showAndWait();
   ```

2. **Fejléc szöveg módosítása**:
   A fejléc szövegét a `setHeaderText(String text)` metódussal változtathatjuk meg. Például:

   ```java
   Alert alert = new Alert(Alert.AlertType.INFORMATION);
   alert.setTitle("Információ");
   alert.setHeaderText("Művelet sikeresen végrehajtva.");
   alert.showAndWait();
   ```

3. **Szöveges tartalom hozzáadása**:
   A szöveges tartalmat a `setContentText(String text)` metódus segítségével adhatjuk hozzá az `Alert` ablakhoz. Például:

   ```java
   Alert alert = new Alert(Alert.AlertType.INFORMATION);
   alert.setTitle("Információ");
   alert.setHeaderText("Művelet sikeresen végrehajtva.");
   alert.setContentText("Az új adatok el lettek mentve.");
   alert.showAndWait();
   ```


Így lehetőségünk van személyre szabni az `Alert` ablakokat, hogy megjelenítsék a szükséges információkat és figyelmeztetéseket a felhasználó számára.

Módosítás után így néznek ki az alábbi `Alert` ablakok:

![Error w/ title, header, content](/assets/images/vasvari/scenebuilder/dialog_error_content.webp)

![Warning w/ title, header, content](/assets/images/vasvari/scenebuilder/dialog_warning_content.webp)

![Information w/ title, header, content](/assets/images/vasvari/scenebuilder/dialog_information_content.webp)

:::info Fejléc elrejtése
Az `alert.setHeaderText(null)` meghívása azt eredményezi, hogy a fejléc teljesen eltűnik, vagyis nem lesz megjelenítve a felhasználónak.

![Fejléc elrejtve](/assets/images/vasvari/scenebuilder/dialog_header_null.webp)
:::

Most, hogy megismerkedtünk ezzel a három `Alert` ablakkal, nézzük meg a negyedik ablakunkat a `Confirmation`-t.

### Confirmation Alert

A `Confirmation` típusú `Alert` ablakot általában arra használják, hogy olyan helyzetekben jelenítsen meg üzenetet a felhasználónak, amikor megerősítést vagy elutasítást kérünk egy adott művelet előtt. Például, amikor a felhasználó szeretne egy fontos műveletet végrehajtani, az alkalmazás egy `Confirmation` ablakot jeleníthet meg, amely tartalmaz egy kérdést és gombokat, például __OK__ és __Cancel__, hogy a felhasználó dönthessen a művelet végrehajtásáról.

Egy példa ennek az ablaknak használatára:

```java
@FXML
void confirmationButton(ActionEvent event) {
   Alert alert = new Alert(Alert.AlertType.CONFIRMATION);
   alert.setTitle("Fájl törlése");
   alert.setHeaderText("Biztos át akarja helyezni ezt a fájlt a Lomtárba?");
   alert.setContentText("C:/Downloads/python_installer.exe");
   alert.showAndWait();
}
```

![Confirmation](/assets/images/vasvari/scenebuilder/dialog_confirmation.webp)

Szuper! Azonban feltételezem, hogy mindenki felvetette már azt a kérdést, hogy ha már rendelkezünk __Cancel__ és __OK__ gombokkal, akkor szükséges lenne valamilyen logikai folyamatban használni ezeket, hogy a programunk valódi funkcionalitást nyerjen.


Tehát ezért a programom úgy módosítom, hogy egy új `Label`-t adok hozzá az alkalmazás felületéhez és amikor döntést hozunk a __Cancel__ vagy a __OK__ gomb megnyomásával, a `Label` választásunknak megfelelően fogja frissíteni az információt.

```java
@FXML
void confirmationButton(ActionEvent event) {
   Alert alert = new Alert(Alert.AlertType.CONFIRMATION);
   alert.setTitle("Fájl törlése");
   alert.setHeaderText("Biztos, hogy át akarja helyezni ezt a fájlt a Lomtárba?");
   alert.setContentText("C:/Downloads/python_installer.exe");
   Optional<ButtonType> option = alert.showAndWait();

   if (option.isPresent()) {
      if (option.get() == ButtonType.OK) {
            this.confirmationLabel.setText("Fájl törölve!");
      } else if (option.get() == ButtonType.CANCEL) {
            this.confirmationLabel.setText("Fájl mégsem törölve!");
      } else {
            this.confirmationLabel.setText("-");
      }
   } else {
      this.confirmationLabel.setText("Az Optional értéke null.");
   }
}
```

Az `Optional<ButtonType> option = alert.showAndWait();` kódsor egy `Confirmation` ablakot jelenít meg, és várja a felhasználó válaszát, majd az ablak bezárása után visszaadja a válaszát egy `Optional` típusú változóban. Ezt követően ellenőrzi, hogy az `Optional` tartalmaz-e értéket (`option.isPresent()`), és ha igen, akkor megnézi, hogy melyik gombra kattintott a felhasználó. A választástól függően beállítja a `confirmationLabel` címke szövegét:

- Ha a felhasználó az __OK__ gombot választotta, akkor a címke szövege __Fájl törölve!__ lesz.
- Ha a felhasználó a __Cancel__ gombot választotta, akkor a címke szövege __Fájl mégsem törölve!__ lesz.
- Minden egyéb esetben a címke szövege __kötőjel (-)__ lesz.
- Ha az `Optional` nem tartalmaz értéket (tehát `null`), akkor a címke szövege __Az Optional értéke null.__ lesz.

:::info Optional&lt;T&gt;
Az `Optional<T>` egy olyan osztály a Java nyelvben, amelyet arra terveztek, hogy kezelje az érték jelenlétét (`present`) vagy hiányát (`null`) egy bizonyos típusú objektum (`<T>`) esetén. Az `Optional` osztály lehetővé teszi a programozók számára, hogy elegánsan kezeljék az olyan helyzeteket, ahol egy érték jelen van vagy éppen hiányzik (`null`), anélkül, hogy a `null` ellenőrzésekkel kellene foglalkozniuk.

Néhány alapvető információ az `Optional` osztályról:

Ennek az objektumoknak két fő állapota van:
   - `present`: Amikor az `Optional` tartalmaz egy értéket (nem `null`).
   - `empty`: Amikor az `Optional` nincs kitöltve, és nem tartalmaz értéket.


Az osztály számos hasznos metódust kínál az érték jelenlétének ellenőrzésére, az érték elérésére, és a hiányzó érték esetén történő kezelésére, például `isPresent()`, `get()`, `ifPresent()`, `orElse()` stb. Segít elkerülni a `null` ellenőrzések sorozatát, amelyekkel gyakran találkozhatunk, ha egy érték `null` lehet, és biztonságosabbá teszi a kódot. Magát ezt az osztályt nem csak null értékek kezelésére használják, hanem bármilyen érték jelenlétét és hiányát lehet vele kezelni.
Az `Optional` paraméterként megadja, hogy milyen típusú értéket tartalmaz, például `Optional<Integer>`, `Optional<String>`, stb.

Példa arra, hogyan használható az `Optional`:

```java
String someNullableValue = null; //null or "Hello"
Optional<String> optionalValue = Optional.ofNullable(someNullableValue);

if (optionalValue.isPresent()) {
   String value = optionalValue.get();
   System.out.println("The value: " + value);
} else {
   System.out.println("Empty value.");
}
```

Ebben a példában az `Optional` segítségével ellenőrizzük, hogy egy adott érték jelen van-e vagy hiányzik, és ennek megfelelően járunk el. Ennek használatával a kód olvashatóbb és kevésbé hajlamos hibákra.
:::

Az `Alert` ablak lehetőséget biztosít arra, hogy testre szabott gombokat jelenítsünk meg a lábléc területén.

```java{3,4}
   ...
   alert.setContentText("C:/Downloads/python_installer.exe");
   alert.getButtonTypes().clear();
   alert.getButtonTypes().addAll(new ButtonType("Nem"), new ButtonType("Igen"), new ButtonType("Talán"));
   Optional<ButtonType> option = alert.showAndWait();
   ...
```

Az alábbiakban a elmagyarázom ennek a két sornak a működését:

3. `alert.getButtonTypes().clear();`: Ez a sor először törli az összes alapértelmezett gombot az ablakból.

4. `alert.getButtonTypes().addAll();`: Ez a sor új gombokat ad hozzá az ablakhoz. Az új gombok jelen lesznek az ablak alján a lábléc területén, és a felhasználó választhat közöttük.

Ebben a példában a felhasználó most __Nem__, __Igen__ és __Talán__ lehetőségek közül választhat, és az alkalmazás a válasz alapján további műveleteket végezhet el.

Ezek a különböző típusú `Alert` ablakok hasznos eszközök az alkalmazásokban a felhasználóval történő kommunikációhoz és az információ megjelenítéséhez, hibák jelzéséhez és felhasználói döntések megerősítéséhez. Az ilyen `Alert` ablakok segítik a felhasználókat az alkalmazás használatában és az esetleges problémák kezelésében.
