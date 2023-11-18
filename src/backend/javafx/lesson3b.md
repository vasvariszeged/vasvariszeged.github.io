---
icon: fa-solid fa-4
category:
  - JavaFX
---


# Properties and Bindings
_avagy Tulajdonságok és Kötések_

A JavaFX használatának egyik előnye a tulajdonságok és a kötések átfogó támogatása. A tulajdonságok segítségével többek között a __Jelenetet__ (`Scene`) úgy kötheti össze, hogy a __Nézet__ (`View`) automatikusan frissüljön, ha módosítja a mögötte lévő adatokat.

A tulajdonságok __Megfigyelhető__ (`Observable`) objektumok, amelyek lehetnek írhatóak vagy csak olvashatóak. A JavaFX-ben __30__ típusú `Property` objektum létezik, köztük a `StringProperty`, a `SimpleListProperty` és a `ReadOnlyObjectProperty`. Mindegyik tulajdonság egy meglévő Java-objektumot csomagol be (`wrap`), hozzáadva a megfigyelés (`Event Listener`) és a kötés (`Bindings`) funkcionalitását.

![A `SimpleDoubleProperty` a JavaFX __kötések__, __tulajdonságok__ és __csomagok__ jelentős részéből örököl. Mindegyik csomag hozzáad egy-egy aspektust a JavaFX tulajdonságai által mutatott esetleges funkcionalitáshoz.](/assets/images/vasvari/SimpleDoubleProperty.webp)

A kötés egy olyan mechanizmus az objektumok közötti kapcsolatok érvényesítésére, amelyben egy vagy több megfigyelhető objektumot használnak egy másik objektum értékének frissítésére. A kötések egy vagy mindkét irányba hathatnak egymásra, és létrehozhatók közvetlenül a tulajdonságokból (`Fluent API`) vagy a `Bindings` segédosztály segítségével (`Bindings API`).

Egyéni kötésű objektumok kézzel is létrehozhatók, ha extra testreszabásra vagy teljesítményre van szükség. Ezt nevezzük alacsony szintű API-nak (_Low-Level API_).

:::info Properties and Bindings
A tulajdonságok és kötések interfészek és osztályok egy csoportja, amelyek célja, hogy jelentősen megkönnyítsék a fejlesztői életét. Ennek ellenére __61__ tulajdonsággal és __249__ metódussal a `Bindings` osztályban ez túlterhelő és nehezen kezelhető.

A __JavaFX__ korai szakaszában számos probléma abból eredet, hogy például a jelenet nem frissítette magát, amikor megváltoztattak valamit. Ennek az oka az volt, hogy a jelenetet helytelenül kötötték össze a tulajdonságokkal. A JavaFX jelenetet úgy tervezték, hogy a tulajdonságok és események alapján frissüljön.
:::

### Mi az a Property?



Amennyiben nem számítástechnikai háttérrel rendelkezel, a tulajdonságok elsőre elég ijesztőnek tűnnek. A motorháztető alatt azonban nincs semmi varázslatos. A __JavaFX__ `Property` objektumok többsége két kulcsfontosságú interfészt terjeszt ki: 

- `ReadOnlyProperty<T>` 
- `WriteableValue<T>`

![](/assets/images/vasvari/WhatIsAProperty.webp)

Néhányuk azonban nem... A JavaFX csak __10__ olvasható tulajdonsággal rendelkezik, amelyek kiterjesztik a `ReadOnlyProperty<T>`-t, de nem kiterjesztik a `WriteableValue<T>`-t.

### Property létrehozása

A JavaFX tíz beépített osztállyal rendelkezik, amelyek jelentősen megkönnyítik a tulajdonságok létrehozását. Ezek minden szükséges funkciót megvalósítanak, a figyeléstől a kötésig.

- `SimpleBooleanProperty`
- `SimpleDoubleProperty`
- `SimpleFloatProperty`
- `SimpleIntegerProperty`
- `SimpleListProperty`
- `SimpleLongProperty`
- `SimpleMapProperty`
- `SimpleObjectProperty`
- `SimpleSetProperty`
- `SimpleStringProperty`

Az egyszerű tulajdonságobjektumok (`Simple...Property`) bármelyikét definiálhatja kezdeti értékkel vagy anélkül. Ha alapértelmezett érték nélkül definiáljuk őket, akkor a tulajdonság az alapértelmezett értékét kapják - 0, false, "" vagy egy üres gyűjteményt.

```java
SimpleIntegerProperty()
SimpleIntegerProperty(int initialValue)
```

Létrehozhatók egy névvel és egy olyan objektummal is, amelyet a JavaFX a tulajdonság "`bean`"-jeként említ. Ez semmilyen módon nem zárja egységbe be a tulajdonságot, hanem egy szimbolikus linket hoz létre egy objektumhoz, amely a tulajdonság "tulajdonosát" reprezentálja.

:::info Egységbezárás 
avagy `Encapsulation`
Az adatok és a metódusok osztályba való összezárását jelenti. Tulajdonképpen az objektum egyéségbezárja az állapotot (_adattagok értékei_) a viselkedésmóddal (_műveletekkel_). Következmény: az objektum állapotát csak a műveletein keresztül módosíthatjuk.

```java
public class BankAccount {
    // Privát mező, nem érhető el közvetlenül kívülről
    private String accountNumber;
    // Privát mező, nem érhető el közvetlenül kívülről
    private double balance; 
    

    public BankAccount(String accountNumber) {
        this.accountNumber = accountNumber;
        this.balance = 0.0;
    }

    // Getter metódus az accountNumber lekérdezéséhez
    public String getAccountNumber() {
        return accountNumber;
    }

    // Getter metódus az egyenleg lekérdezéséhez
    public double getBalance() {
        return balance;
    }

    // Metódus a pénz befizetéséhez
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }

    // Metódus a pénz kivételéhez
    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
        }
    }
}
```

A `BankAccount` osztály két privát mezőt tartalmaz (`accountNumber` és `balance`), amelyek nem érhetők el közvetlenül kívülről. Ehelyett a mezőkhöz két _getter_ metódust készítettünk (`getAccountNumber` és `getBalance`), amelyek segítségével az értéküket lekérdezhetjük, de nem módosíthatjuk őket közvetlenül.

Az osztály továbbá biztosít metódusokat a pénz befizetésére (`deposit`) és kivételére (`withdraw`), amelyek ellenőrzik a bemeneti értékeket és csak érvényes műveleteket hajtanak végre. Tehát az `encapsulation` segít abban, hogy az osztály belső állapotát ellenőrzött módon kezeljük, és ne lehessen káros végrehajtásokat rajta eszközölni.
:::

```java
SimpleIntegerProperty(Object bean, String name)
SimpleIntegerProperty(Object bean, String name, int initialValue)
```

Sem a `name`, sem a `bean` attribútumok nem változtatják meg a tulajdonság viselkedését, de hasznos keresési lehetőségként szolgálhat. Ez akkor hasznos, ha ugyanazt a figyelőt több tulajdonsághoz csatoljuk - különösen generált tulajdonságokhoz. Ezután, ha változás történik, a `bean` és a `name` attribútumok segítségével ellenőrizhetjük, hogy melyik tulajdonság változott meg éppen.

Minden __JavaFX__ tulajdonság rendelkezik olyan beépített funkciókkal, amelyek segítik az alábbiakat:

- Lehetőség van figyelni és értesülni a tulajdonság értékének változásairól.
- A tulajdonságokat egymáshoz lehet kötni, így automatikusan frissülnek, ha az egyik megváltozik.
- Lehetőség van lekérdezni és beállítani a tulajdonság értékét, feltéve, hogy a tulajdonság írható.

### Hogyan kell megfigyelni a tulajdonságokat

Ahogy fentebb láttuk, a __JavaFX__ `Property` objektumok különböző implementált interfészek összevisszasága. Ez itt azért fontos, mert ez azt jelenti, hogy kétféle módon biztosítják a változásokra való figyelést: `invalidation` és `change`.

![](/assets/images/vasvari/PropertyListenerOptions.webp)


`InvalidationListeners`: Minden JavaFX tulajdonság megvalósítja az `Observable` interfészt, ami azt jelenti, hogy mindegyik képes regisztrálni olyan _listenereket_, amelyek akkor aktiválódnak, amikor a tulajdonság érvénytelenítve lett. 

:::info Érvénytelenítve
avagy `invalidation`
Az érvénytelenítés azt jelzi, hogy a tulajdonság állapota megváltozott, de az aktuális értékét nem kapjuk meg a figyelőn keresztül. Használata akkor lehet hasznos, ha egy tulajdonság frissítése nem igényel azonnali újraszámítást, de értesítést akarunk kapni a változásról.

```java
import javafx.beans.InvalidationListener;
import javafx.beans.Observable;

public class InvalidationListenerExample {

    public static void main(String[] args) {
        MyProperty myProperty = new MyProperty();

        InvalidationListener listener = new InvalidationListener() {
            @Override
            public void invalidated(Observable observable) {
                System.out.println("A tulajdonság érvénytelenítve lett.");
            }
        };

        myProperty.addListener(listener);

        myProperty.setValue(10);
        // Itt meg kell adni a listener objektumot
        myProperty.removeListener(listener);
    }
}

class MyProperty implements Observable {
    private int value;
    private InvalidationListener listener;

    @Override
    public void addListener(InvalidationListener listener) {
        this.listener = listener;
    }

    @Override
    public void removeListener(InvalidationListener listener) {
        if (this.listener == listener) {
            this.listener = null;
        }
    }

    public void setValue(int newValue) {
        if (value != newValue) {
            value = newValue;
            if (listener != null) {
                listener.invalidated(this);
            }
        }
    }
}
```
:::

Azoknál a tulajdonságoknál, amelyek bonyolult vagy költséges számításokat igényelnek, ez egy hasznos eszköz lehet, de nem tapasztalom, hogy annyira gyakran használnák, mint a `ChangeListeners`-t.

`ChangeListeners`: A JavaFX tulajdonságok az `ObservableValue<T>` interfészt is kiterjesztik, ami azt jelenti, hogy olyan _listenereket_ is regisztrálhatunk, amelyek csak akkor hívódnak meg, ha egy objektum ténylegesen megváltozott.

A _listenerek_ lehetővé teszik számunkra, hogy értesüljünk egy változásról, és előre meghatározott kódot biztosítsunk, amely az új és régi tulajdonságértékeken alapul.

### Változásokról való értesülés

Egy tulajdonsághoz az `addListener()` metódus meghívásával regisztrálhatunk egy figyelőt, amely vagy egy `InvalidationListener` (kevésbé gyakori), vagy egy `ChangeListener` (gyakoribb).

Használatához elegendő implementáláni a `ChangeListener` interfész  - ez egy funkcionális interfész egy metódussal: `changed()`.

```java
DoubleProperty magassag = new SimpleDoubleProperty(2500);

ChangeListener<Number> changeListener = new ChangeListener<Number>() {
        @Override
        public void changed(ObservableValue<? extends Number> observable, Number oldValue, Number newValue) {
            if (newValue.doubleValue() < 1500) {
                ejtoernyoKinyitasa();
            }
        }
    };

magassag.addListener(changeListener);
```

Az összes számértékű tulajdonság (`double`, `float`, `int` és `long`) esetében olyan `ChangeListener`-ek szükségesek, amelyek paraméterként `Number` típust várnak. 


:::info lambda
Természetesen, mivel ezek funkcionális interfészek, lehetőség van rá, hogy __Java 8 vagy annál újabb__ verzióiban azonnal létrehozzuk őket lambda kifejezések segítségével.

```java
magassag.addListener((observable, oldValue, newValue) -> {
        if (newValue.doubleValue() < 15000) {
            deployParachute();
        }
});
```
:::

Minden alkalommal, amikor a tulajdonság értéke megváltozik, a `listener` egyszer működésbe lép.

### Mi az a kötés?

A kötésekkel az objektumokat összeköthetjük, és olyan kapcsolatot hozunk létre, amelyben az egyik objektum függ legalább egy másik objektumtól. A tulajdonságok natív módon, valamint `Expression` és `Binding` objektumok létrehozásával köthetők.

A `Expression` és a `Binding` megfigyelhető objektumok, amelyek legalább egy másik megfigyelhető objektum értékétől is függnek (_de potenciálisan több is lehet_). Ez lehetővé teszi, hogy több számítást tartalmazó kifejezésláncokat hozzon létre: szuperegyszerű módja a karakterlánc- vagy számkonverziók összekapcsolásának.

Most csak két tulajdonságot fogunk egymáshoz kötni, további osztályok nélkül.

### Hogyan kössünk össze Property-ket

Háttérben a kötés (`binding`) egy speciális használati módja a változásfigyelésnek. Az összes __JavaFX Binding API__ tartalmaz sablonkódot, amely figyeli (__legalább__) egy tulajdonság változását, és minden változást alkalmaz az adott kötés értékének frissítéséhez.

Míg a `ChangeListner`-ek lehetővé teszik előre definiált kód megadását, a kötés lehetővé teszi két tulajdonság egyszerű összekapcsolását anélkül, hogy aggódnánk a konkrét érték frissítésének a megvalósítása miatt.

A legegyszerűbb és leggyakrabban használt módszerek azok, amelyek a `Property` objektumokhoz vannak csatolva: `bind()` és `bindBidirectional()`. Ezek a legegyszerűbb lehetőségek az egyirányú és kétirányú kötések létrehozásához.

### Egyirányú kötés

Amikor meghívod a `bind()` módszert egy tulajdonságon, átadsz neki egy második tulajdonságot _argumentumként_ - ez a kötés forrása.

```java
StringProperty sourceProperty = new SimpleStringProperty("First Value");
StringProperty targetProperty = new SimpleStringProperty("Second Value");
targetProperty.bind(sourceProperty);
```

A háttérben a tulajdonság egy hivatkozást tárol, ahol az új tulajdonságnak figyeli a változásait. Amikor a forrás (`sourceProperty`) értéke megváltozik, automatikusan frissíti a célt (`targetProperty`), amikor változást észlel.


![](/assets/images/vasvari/SimplePropertyBinding.webp)


Ebben az esetben a `targetProperty` követni fogja a `sourceProperty` értékét. Néhány megjegyzés a módszerhez tartozó további részekről:

- Ha a tulajdonság jelenleg kötve van, a jelenlegi kötése megszűnik, és az új kötés lép a helyére.
- Ha `null` értéket adunk át argumentumként, a metódus `NullPointerException` kivételt dob.
- A metódus azonnal másolja a megfigyelt tulajdonság értékét, így az aktuális `targetProperty` értéke elveszik.

### Kétirányú kötés

Ha két tulajdonságot szeretnénk összekötni úgy, hogy mindig ugyanaz legyen az értékük, akkor használhatjuk a `bindBidirectional()` függvényt, amelynek argumentumaként átadjuk a forrás tulajdonságot.

```java
StringProperty sourceProperty = new SimpleStringProperty("First Value");
StringProperty targetProperty = new SimpleStringProperty("Second Value");
targetProperty.bindBidirectional(sourceProperty);
```

Ha a tulajdonságok értéke különböző, akkor a metódus hívásának sorrendje fontos a kötés kezdőértékének meghatározásában.

A `targetProperty` alkalmazott tulajdonság azonnal frissíti a `targetProperty` értékét, mielőtt a `sourceProperty`-vel azt összekötnénk. Ez azt jelenti, hogy a kétirányú kötés után mindkét tulajdonság az argumentumként átadott tulajdonság értékével fog rendelkezni.

![](/assets/images/vasvari/SimplePropertyBidirectionalBinding.webp)

A __JavaFX__ nemcsak az alapvető, egyszerű másoláson alapuló kötést támogatja, hanem lehetőséget nyújt a tulajdonságok bonyolultabb összekapcsolására is: több tulajdonság összekapcsolására vagy egy tulajdonságnak bonyolult manipulációja a másik tulajdonságának a frissítésére.

A következő részekben áttekintjük a bonyolultabb kötéseket.


## Haladó kötési technikák

Három módszer áll rendelkezésre bármely tulajdonság manipulálására és a manipulált érték kötésére:

- A `Fluent API` - olyan módszerek, mint a `myProperty.bind(otherProperty).multiply(2)`
- A `Bindings API` - olyan módszerek, mint a `Bindings.add(myProperty, otherProperty)`
- Az `Low-Level API` - saját `Bindings` objektumok létrehozása, mint például a `DoubleBinding`

Ezek közül kettő előre meghatározott implementációkkal rendelkező sablon módszereket biztosít a tulajdonságok összekapcsolásához. Ezek a módszerek a tulajdonságkötések többségének lefedésére elegendőek, mivel hatalmas rugalmasságot biztosítanak.

### Fluent API

![](/assets/images/vasvari/ExpressionChaining.webp)

A __Fluent API__ az `expression` objektumok létrehozására támaszkodik, melyek hasonlóak a tulajdonságokhoz (_figyelhető értékek_), de extra kényelmi metódusokkal rendelkeznek a további manipulációk támogatásához.

A tulajdonságokat is össze lehet kötni kifejezésekkel, ami azt jelenti, hogy a manipulációk eredményét fel lehet használni egy tulajdonság frissítéséhez, éppen úgy, mint fentebb. Ennek a funkcionalitásnak - a megfigyelhetőségnek és egy értéktől való függésnek - az az eredménye, hogy láncolás lehetséges.


Például karakterláncok esetében ezt arra használhatjuk, hogy a karakterláncok láncolatát hozzuk létre, amelyeket egymáshoz fűzünk. Amint a `sourceProperty` frissül, a `targetProperty` automatikusan frissül a kifejezésen keresztül.

```java
StringProperty sourceProperty = new SimpleStringProperty("It doesn't matter how slowly you go");
StringExpression expression = sourceProperty.concat(" as long as you don't stop");
StringProperty targetProperty = new SimpleStringProperty("");
targetProperty.bind(expression);
System.out.println(targetProperty.get());
//Output: It doesn't matter how slowly you go as long as you don't stop
```

Ezt mind megtehetjük egy sorban, így a bonyolult kódot viszonylag tömörebben írhatjuk. Ebben az esetben létrehozzuk a `StringExpression`-t, miközben meghívjuk a bind metódust.

```java
targetProperty.bind(sourceProperty.concat(" as long as you don't stop"));
System.out.println(targetProperty.get());
//Output: It doesn't matter how slowly you go as long as you don't stop
```

Ez egy kicsit zavaró lehet, de ne felejtsük el, hogy a `targetProperty` valójában a `concat()` metódus által létrehozott `StringExpression`-hez van kötve. Ez az anonim kifejezés az, ami a `sourceProperty`-hez lesz kötve.

Lefedi a legtöbb manipulációt, amire szükségünk lehet. A `Fluent API`-t számokkal is használhatjuk. Számsorok esetén manipulációkat fűzhetünk egymáshoz, hogy egyszerű, olvasható kódot hozzunk létre, amely tükrözi a reprodukálni kívánt képletet. Például fokból radiánba váltáshoz meg kell szorozni Pi értékével és elosztani 180-tal. 

```java
DoubleProperty degrees = new SimpleDoubleProperty(180);
DoubleProperty radians = new SimpleDoubleProperty();
radians.bind(degrees
                .multiply(Math.PI)
                .divide(180)
        );
```

:::info 
A kód rendkívül olvasható jelenleg.

Azonban teljesítmény szempontjából minden kifejezés egy láncszem, amelyet minden változáskor frissíteni kell az eredeti tulajdonságban. Ebben a példában, ahol fokokból radiánba váltunk, két megfigyelhető értéket hozunk létre csak azért, hogy frissítsük a radián tulajdonságunkat.
:::

Bonyolult átalakítások esetén, vagy olyan helyzetekben, ahol sok kötést végezünkk, érdemes fontolóra venni a `Bindings API` használatát (`az rugalmasságot nyújt, amire szükséged van`), vagy a `Low-Level API`-t.

### Binding API

A Bindings osztály a __JavaFX__-ben egy segédosztály, amely __249__ metódust tartalmaz a tulajdonságkötésekhez. Lehetővé teszi a különböző típusú megfigyelhető (`observable`) objektumok közötti kötések létrehozását. Összekötheted tulajdonságokat értékekkel, például karakterláncokkal és számokkal, a kötéstől függően.


![](/assets/images/vasvari/HowAPropertyOrBindingUpdates.webp)

Az JavaFX-ben 10 általános kötési stratégia létezik, amelyeket a két fő részterület osztottam, ezek a "__műveletek értékeken__" (_values_) és "__műveletek gyűjteményeken__" (_collections_). Néhány nem illeszkedik bele, ezért van egy "__egyéb__" nevű kevésbé elegáns kategóriánk is.

__Értékek__ (_values_):
- Matematika (`+, - ÷, ×`)
- A maximum vagy a minimum kiválasztása
- Érték-összehasonlítás (`=, !=, <, >, <=, >=`)
- String formázás


__Gyűjtemények__ (_collections_):
- Két gyűjtemény összekapcsolása (listák (_list_), map-ek, set-ek (_halmazok_))
- Értékek kötése objektumokhoz a gyűjtemény egy bizonyos pozíciójában lévő objektumokhoz.
- Kötés a gyűjtemény méretéhez
- Egy gyűjtemény üres-e


__Egyéb kötések__:
- Több objektumhoz kötődések
- Boolean operátorok (és, nem vagy) - (és ha!)
- Értékek kiválasztása


### Értékeken végzett műveletek

A __Bindings API__ támogatást nyújt négy egyszerű matematikai művelethez: __összeadás__, __kivonás__, __szorzás__ és __osztás__. Különféle metódusokat biztosít ezek használatához `double`, `int` és `Long` értékekkel, valamint két `ObservableNumberValue` objektum között (például egy `DoubleProperty` esetén).


```java
DoubleBinding add(double op1, ObservableNumberValue op2)
NumberBinding add(float op1, ObservableNumberValue op2)
NumberBinding add(int op1, ObservableNumberValue op2)
NumberBinding add(long op1, ObservableNumberValue op2)
DoubleBinding add(ObservableNumberValue op1, double op2)
NumberBinding add(ObservableNumberValue op1, float op2)
NumberBinding add(ObservableNumberValue op1, int op2)
NumberBinding add(ObservableNumberValue op1, long op2)
NumberBinding add(ObservableNumberValue op1, ObservableNumberValue op2)
```



### Low-level API

A `Low-Level API` egy 10 absztrakt `Binding` osztály gyűjteménye, melyeket az összes kötés nehézkes részének végrehajtására terveztek (_például hallgatók hozzáadása és eltávolítása_). Az osztály `observable` értékeket vesz fel, és átalakítja őket egy kimenetre. A __Fluent__ és a __Bindings API__-khoz hasonlóan a __Low-level API__ is támogatja a `boolean`, `string`, `számok`, `gyűjtemények` és `objektumok` használatát.


#### Low-Level API kötés létrehozása

Olyan egyszerű lehet, mint egy absztrakt belső osztály definiálása (_egy osztály, amit más kóddal együtt definiálsz_). Mivel az absztrakt `Bindings` osztályoknak csak egy absztrakt metódusa van, csak akkor kell a `computeValue()` metódust felülírnod, amikor definiáljuk.

Amint definiáljuk a kötést, az hivatalos tanács az, hogy használjunk inicializációs blokkot, amely összeköti a forrás tulajdonságokat a kötés létrehozása során. Az összhatás pontosan ugyanaz - _a fordító amúgy is beilleszti a kódot az inicializációs blokkokba_ - viszont a konstruktor megközelítés alkalmasabb, ha egy olyan konkurens osztályt hozol létre, amit többször is használni fogsz.

```java
//Inside your binding object at the top
{
    super.bind(cost, itemCount);
}
```

Ezután csak meg kell határoznod a `computeValue()` metódust. Ebben az esetben egészen egyszerű, de a számítást akár bonyolultabbá is teheted, ahogyan csak szeretnéd.

```java
DoubleProperty cost = new SimpleDoubleProperty(25);
IntegerProperty itemCount = new SimpleIntegerProperty(15);
DoubleBinding totalCost = new DoubleBinding() {
    
    {
        super.bind(cost, itemCount);
    }
    
    @Override
    protected double computeValue() {
        return itemCount.get() * cost.get();
    }
};
```


Ettől a ponttól kezdve a `totalCost` kötés értéke mindig tükrözi a `cost` és `itemCount` tulajdonságok szorzatát.

Ha szeretnéd, hogy a `totalCost` objektumot továbbadhassa és később visszakaphassa a függőségeket, extra funkcionalitást adhatsz hozzá az alapértelmezett `getDependencies()` metódus felülírásásával.

#### További funkcionalitás hozzáadása a Low-Level API kötésekhez

Az `Low-Level API` minden osztálya bővíthető a `getDependencies()` és `dispose()` metódusok felülírásásával.

- `getDependencies()`: visszatérhet az összes függőséggel, ha szükséges őket tárolni és később visszakapni.
- `dispose()`: leiratkozhat az összes kötés függőségére regisztrált `listener`-ről.



##### `getDependencies()` felülírása

A `getDependencies()` metódus felülírása fontos, ha szeretnéd átadni a kötés objektumot egy másik osztálynak, vagy tárolni és később visszakapni a függőségeket.

```java
DoubleBinding totalCost = new DoubleBinding() {
    {
        super.bind(cost, itemCount);
    }
    @Override
    protected double computeValue() {
        return itemCount.get() * cost.get();
    }
    @Override
    public ObservableList<?> getDependencies() {
        return FXCollections.observableList(Arrays.asList(cost, itemCount));
    }
};
```

Érdemes észben tartani, mielőtt nekiesnénk felülírni ezt a metódust, hogy a `Low-Level API` összes alapértelmezett implementációja __weak listenereket__ használ. Ez azt jelenti:

:::warning Ha a Low-Level API-t az alapértelmezett implementációval használjuk, akkor erős referenciákat kell fenntartania a `observable` (_megfigyelhető_) objektumokra, különben azok szemétgyűjtésre (`garbage collected`) kerülnek, és a hivatkozás elveszik.
:::

Ezzel együtt, ha erős __listenerekkel__ implementáltad a kötést, akkor érdemes lesz a `dispose()` metódust is felülírnod. Ez megakadályozza a memóriaszivárgásokat, amelyek akkor jelentkezhetnek, ha egy kötést nem törölnek le az `observable` objektumról, miután már használták.


```java
@Override
public void dispose() {
    unbind(cost, itemCount);
}
```

Ez a példa kód azt mutatja be, ahol egy `SimpleDoubleProperty` objektumot és egy `DoubleBinding` osztályt használunk. Az alkalmazás automatikusan számolja ki és frissíti egy szám négyzetgyökét, amikor az eredeti szám értéke megváltozik, és a _binding_ feloldása is implementálva van.

```java
package org.vasvari.helloworld;

import javafx.beans.binding.DoubleBinding;
import javafx.beans.property.SimpleDoubleProperty;

public class SquareRootBindingExample {

    public static void main(String[] args) {
        // Létrehozunk egy SimpleDoubleProperty-t kezdeti értékkel
        SimpleDoubleProperty number = new SimpleDoubleProperty(256);

        // Létrehozunk egy DoubleBinding példányt a négyzetgyök kiszámítására
        DoubleBinding squareRoot = new DoubleBinding() {
            {
                // Az összekötés (binding) inicializálása a number property-vel
                this.bind(number);
            }

            // Az örökölt computeValue metódus felülírása a négyzetgyök kiszámítására
            @Override
            protected double computeValue() {
                double n = number.get();
                return Math.sqrt(n);
            }
        };

        // Kiírjuk az eredeti értéket és annak négyzetgyökét
        System.out.println("Eredeti érték: " + number.getValue());
        System.out.println("Négyzetgyök: " + squareRoot.getValue());

        // Megváltoztatjuk az eredeti értéket, és megfigyeljük a négyzetgyök értékének változását
        number.setValue(64);
        System.out.println("Eredeti érték: " + number.getValue());
        System.out.println("Négyzetgyök: " + squareRoot.getValue());

        // Feloldjuk a bindinget, amikor már nem szükséges
        squareRoot.dispose();
    }
}
```

## Konklúzió

A __JavaFX__-ben a tulajdonságok lehetnek csak olvashatóak vagy írhatóak, de mindig észlelhetőek. 

Minden tulajdonság megvalósítja a funkcionalitást a

- `javafx.beans.binding`
- `javafx.beans.value` 
- és `javafx.beans.property` 

csomagokból.

Minden tulajdonságot meg lehet figyelni `InvalidationListener` vagy `ChangeListener` objektumokkal. Mindkettőt el lehet érni az `addListener()` metódus meghívásával, mert minden tulajdonságnak van `addListener()` metódusa mind az `Invalidation` (_érvénytelenség_), mind a `Change` (_változás_) esetére.

A `property listening` (_tulajdonságfigyelés_) kiterjesztése a `property binding` (_tulajdonságkötés_), amely lehetőséget nyújt a tulajdonságok összekapcsolására, így azok automatikusan frissülnek egy vagy több változás alapján.

Ezen felül a __JavaFX__ támogatást nyújt a kötéseket `Expression` és `Bindings` objektumokon keresztül való kiterjesztéséhez. Ezekhez a legegyszerűbb hozzáférni a `Fluent` és `Bindings API`-kon keresztül. Azonban ha teljesítményre vagy testreszabhatóságra van szükségünk, a `Low-Level API` lehetővé teszi számunkra, hogy teljesen egyedi kötéseket hozzunk létre.