---
icon: fa-solid fa-mug-hot
category:
  - Java alapjai
---

# Java alapjai

A Java megjelenése óta a világ egyik leggyakrabban alkalmazott és legnépszerűbb programnyelvévé nőtte ki magát, a szoftverfejlesztés egyik legnépszerűbb platformja, amelyet számos területen használnak. Ez főként annak köszönhető, hogy egy jól átgondolt, gondosan felépített, és azóta is állandóan bővített és fejlesztett nyelvről van szó, mellyel elkészített programjaink tetszőleges operációs rendszeren módosítás nélkül futnak. A keretrendszerek többsége nyíltforráskódú és ez is hozzájárul a széleskörű elterjedéséhez.

A Java nyelv ismerete ma már az informatikai alapműveltség része. Az óra célja, hogy bemutassa a nyelv legfontosabb elemeit és szolgáltatásait, és segítse azok elsajátítását. Az óraszám korlátozása miatt csak a legfontosabb témákat érintjük.

A Java nyelv bemutatását az alapoktól kezdjük ezért nem szükséges semmilyen előismeret. A fejezeteket úgy választottam meg, hogy folyamatos gondolatmenetet kövessen és építsen egymásra. Az órai anyag GitHub weboldalról tölthető majd le és könnyedén az Eclipse fejlesztő környezetbe importálható.

::: tip AZ ÓRA CÉLJA
Bemutassa a nyelv legfontosabb elemeit és szolgáltatásait és segítse azok elsajátítását!
:::

## A Java technológia, a Java nyelv jellemzői

### A Java technológia

A Java programozási nyelvet a **Sun Microsystems** fejlesztette ki, majd dobta piacra az 1990‑es évek
közepén. **James Gosling** – a projekt indítója a Sunnál, akit a Java atyjának is tekintenek – eredetileg
az Oak (tölgy) nevet szerette volna az új nyelvnek adni, ám ilyen nevű programozási nyelv akkor már
létezett. Mivel a nyelv kifejlesztői a projekt során igen jelentős mennyiségű kávét megittak, az elfogyasztott
babkávé pedig Jáva szigetéről származott, a legenda szerint a nyelvet végül a sziget után nevezték
el.

A Java szó azonban nemcsak egy programozási nyelvet, hanem egy Java programot ír meg
és futtatásához szükséges szoftverkörnyezetet, vagyis egy **Java platformot**. A platform része a Java
program, Java fordító és a programokat futtató virtuális gép. A programokat egy **JVM(Java
Virtual Machine)** futtatja a számítógépet, így biztosítja a hardvertől és az operációs rendszer rendszertől
függetlenséget.

A platform részét képezi továbbá egy igen bő és sokoldalú fejlesztői programcsomag, a **Java SDK (Software Development Kit)**, vagy ahogy újabban hívják: **JDK (Java Development Kit)** is, melyben előre
kidolgozott és szabadon felhasználható komponenseket és könyvtárakat találunk.

Gyakran találkozhatunk olyan kifejezésekkel, amelyek tartalmazzák a Java szót - ezek egy része valóban
a Java rész, mások azonban csak névrokonok. **JavaScript** egy a **Netscape** által kifejlesztett script nyelv, és bár ez egy böngésző értelmezi, ez semmi köze a Java-hoz technológiához.

### A Java nyelv jellemzői

A Java egy **magas szintű**, teljesen **objektumorientált nyelv** - alapjaitól eszerint építették fel. A
Javában néhány beépített egyszerű típusról eltekintve **minden objektum**: karakterlánc, programhiba,
maga a Java program. Nincsenek globális változók és függvények: *minden adat és művelet valamilyen objektumhoz kötődik.*

A Java egy másik fontos tulajdonsága a **platformfüggetlenség**. Ez azt jelenti más és más operációs rendszeren is változtatás nélkül képes futni. Ezt úgy oldották meg, hogy a fordítóprogram csak ún. **Java bájtkód**ra fordítja le a forráskódot ezt kapja meg a **virtuális gép (JVM)**, és csak ő fordítja le azt gépi kódra. Mivel a programból csak futás közben lesz gépi kód, a **Java interpretált nyelv.**

Szintaktikája a C++-t követi, de sok figyelmet fordítottak arra, hogy biztonságos és megbízható nyelvet építsenek. Így a Javában nincs **goto** (ugrás) utasítás, nincsenek **mutatók** (pointerek), nincs **többszörös öröklődés**, nincs **rekordtípus**, és az operátorok nem felüldefiniálhatóak *(operator overloading)*.

Van benne viszont automatikus szemétgyűjtés *(Garbage Collector)*: a nyelv automatikusan felszabadítja a már nem használt erőforrásokat. **Támogatja** a többszálú, illetve a hálózati programozást, és távoli gépeken is képes biztonságosan futni. A **JDK** implementál számos gyakran használt adatszerkezetet *(halmaz, lista, verem, hashtábla)*, hasznos algoritmusokat *(rendezések, minimumkeresés)*, és szinte minden műveletet, amire például matematikai számítások elvégzéséhez vagy sztringek és dátumok feldolgozása során szükségünk lehet.

## A Java program szerkezete, elemi output

### Első Java programunk: Hello World

A **Java főprogram** kódja mindig egy speciális osztály **main metódusának** kidolgozása lesz. A forráskódot egy **.java** kiterjesztésű állományba mentjük, mely állomány neve meg kell, hogy egyezzen a benne található osztály nevével.

::: tip INFO
Egy nyelvvel való ismerkedést a „Hello World” alkalmazás megírásával szokás kezdeni, amely semmi egyebet nem csinál, mint kiírja a képernyőre az üdvözlőüzenetet.
:::

Nézzük meg, hogyan néz ki Javában a „Hello World” program, amelyet a **HelloWorld.java** fájlba mentünk el.

#### HelloWorld.java

```java
public class HelloWorld {

	public static void main(String[] args) {
		// Prints "Hello, World" to the terminal window.
		System.out.println("Hello, World");
	}

}
``` 

A main metódus azonosítója mögött zárójelben az alábbi kifejezés található: **String[] args**. Ez egy
karakterláncokat tartalmazó, args nevű tömböt jelöl. Az args tömb segítségével kapjuk meg azon **paramétereket**,
melyekkel a felhasználó a programot elindította.

Egy program paramétereit parancssorból indításkor a futtatandó állomány neve mögé kell gépelni, egymástól szóközzel elválasztva. A program pedig egyetlen sorból áll: **System.out.println("Hello, World!");**. A println metódussal
tudunk tehát üzenetet megjeleníteni a képernyőn; a println metódus a szöveg kiírása után sort is emel.


## Összefoglaló

::: tip Mi a különbség a Java nyelv és a Java platform között?

A Java szó azonban nem csak egy programozási nyelvet jelöl, hanem a Java programok megírásához és futtatásához szükséges szoftverkörnyezetet, azaz a Java platformot is.
A platform része a Java program, a Java fordító, és a programokat futtató virtuális gép is.
A platform részét képezi továbbá egy igen bő és sokoldalú fejlesztői programcsomag, a Java SDK (Software Development Kit), vagy ahogy újabban hívják: JDK (Java Development Kit) is, melyben előre kidolgozott és szabadon felhasználható komponenseket és könyvtárakat találunk.
:::

::: tip Mi a JVM, és mi a szerepe?

A Java egy másik fontos tulajdonsága a platformfüggetlenség, más néven hordozhatóság. ez azt jelenti, hogy ugyanaz a program különböző hardveren, más és más operációs rendszeren is változtatás nélkül képes futni. A Java esetében ezt úgy oldották meg, hogy a fordítóprogram csak ún. Java bájtkódra fordítja le a forráskódot – ezt kapja meg a virtuális gép (JVM), és csak ő fordítja le azt gépi kódra (értelemszerűen az adott „gép” által értelmezhető gépi kódra). mivel a programból csak futás közben lesz gépi kód, a Java interpretált nyelv.
:::

::: tip Java programozási nyelv legfontosabb jellemzőit!

- magas szintű, teljesen objektumorientált nyelv platformfüggetlen
- megbízható, avagy robusztus
- biztonságos
- szintaktikája a C++-t követi
:::

## Azonosítók, egyszerű típusok

### Azonosítók

Azonosítónak nevezzük egy Java programban a változók, metódusok, osztályok, stb. egyedi elnevezéseit. Az azonosítók meghatározásánál pár egyszerű szabályt be kell tartanunk.

::: tip SZABÁLYOK

Az azonosítónak betűvel kell kezdődnie. Betű alatt az angol ábécé betűit és a _ és $ karaktereket értjük.
Az azonosítók a második karaktertől a fentiek mellett számokat is tartalmazhatnak.
Az azonosító nem lehet foglalt szó.
:::

Bár a Java megengedi a magyar ékezetes karakterek használatát is, azonosítóinkban ezeket inkább ne használjuk. **Foglalt** szónak nevezzük azokat az azonosítókat, melyeket a nyelv írói saját kulcsszavaik elnevezésére használtak.

::: tip JAVA FOGLALT SZAVAI

abstract, boolean, break, byte, case, catch, char, class, const, continue, default, do, double, else, extends, final, finally, float, for, goto, if, implements, import, instanceof, int, interface, long, native, new, package, private, protected, public, return, short, static, super, switch, synchronized, this, throw, throws, transient, try, void, volatile, while
:::

Az azonosító hossza tetszőleges lehet, ezért használjunk beszédes neveket. Szintaktikai hibát ugyan nem okoz, ha ezt az íratlan szabályt nem tartjuk be, de a beszédes nevekkel segítjük a program érthetőségét és olvashatóságát. Bár a nyelv maga igen nagy szabadságot enged az azonosítók meghatározásánál, bizonyos konvenciókat valamennyi Java fejlesztő be szokott tartani. Így például a konstansok azonosítóit csupa nagybetűvel szokás írni. Az ilyen elnevezési konvenciókat a megfelelő helyen részletezzük majd.

### Egyszerű típusok

Az **adattípus** meghatározza, hogy egy adat milyen értékeket vehet fel, és milyen műveleteket végezhetünk el vele. **Egyszerű típus**nak nevezzük azokat az adattípusokat, melyek nem bonthatók további részekre. Ilyenek például a logikai, karakteres, egész és valós szám típusok. Ezzel szemben az **összetett adattípus**ok egyszerű típusokból épülnek fel. Ilyenek a tömbök, a különböző listatípusok.

Mint a legtöbb programozási nyelvben, a Javában is léteznek egyszerű típusok. Egy karakternek is értékül adhatunk számkaraktert (pl. a 2-es szám karaktermegfelelőjét), ám ebben az esetben karakterként viselkedik. Tehát matematikai műveleteket nem végezhetünk rajta, pl. nem szorozhatjuk meg egy másik számmal.

| **egyszerű típus** | **Leírása** | **Lehetséges értékei** |
| --- | --- | --- |
| **boolean** | Logikai típus | **true** (igaz), **false** (hamis) |
| **char** | Karakter típus | a, b, C, é, 2, $, \*, @, ... |
| **byte** | 1 bájton tárolt egész szám típus | -128 ... 127 |
| **short** | Rövid egész szám típus | -32768 .. 32767 |
| **int** | Egész szám típus | -2\*109 .. 2\*109 |
| **long** | hosszú egész szám típus | -1019 .. 1019 |
| **float** | Lebegőpontos valós szám típus | 2.5, 3.14 |
| **double** | Lebegőpontos valós szám típus | 2.5, 3.14 |

## Változódeklaráció, inicializálás és literálok, konstansok

### Változódeklaráció

Egy programban az egyes adatainkat **változókban** tároljuk. A programban használt változók felsorolását **deklarációnak** nevezzük. Egy változó deklarációjánál meg kell adnunk annak típusát és azonosítóját. Javában előbb kell megadnunk a típus nevét, majd ezt követi a deklarálandó változó neve vagy változók nevei – mivel egy utasításban több változót is létrehozhatunk. Ilyenkor az azonosítókat vesszővel választjuk el egymástól.

Az utasításokat – így a változódeklarációt is – pontosvesszővel zárjuk.
```java
int i;
int szam1, szam2; 
char ch1, ch2, ch3;
```
A fenti példában a *szam1* és *szam2* változókat két utasításban is deklarálhattuk volna, az eredmény ugyanaz lenne.

::: tip VÁLTOZÓK

Az egyszerű típusú változókat kisbetűsen szokás elnevezni.
:::

A Java programban nincs a változók deklarálására kijelölt blokk, a program bármelyik pontján felvehetünk újabbakat. Az áttekinthetőség kedvéért azonban érdemes pár szabályt betartanunk.

### Inicializálás és literálok, konstansok

Változóink deklarálásakor azok kezdőértékét is meghatározhatjuk, mégpedig úgy, hogy a deklaráció utasításában értékadást hajtunk végre. Ezt nevezzük inicializálásnak.
A Javában az értékadás operátora az ’=’, mely után a változó új értékét kell megadnunk; ez lehet konkrét érték vagy másik változó.

Ha egy utasításban több változót is definiálunk, azok közül bármelyiknek adhatunk kezdőértéket.

```java
int i = 1;
int szam1, szam2 = 100;
char ch1 = 'a', ch2, ch3 = 'B';
```
Minden változót külön kell inicializálni, tehát példánkban a **szam2** kezdőértéke 100 lesz, a **szam1**-nek azonban nincs még értéke. A programban előforduló konkrét értékeket a Javában literálnak nevezzük. Az inicializálásban megadott kezdőértékek (pl. 1, ’B’) is literálok.

Vizsgáljuk meg, milyen lehetséges literálokat használhatunk programjainkban.

| **Literál** | **Magyarázat** |
| --- | --- |
| null | Üres érték, pl. inicializálatlan objektumok vagy változók értéke. |
| true, false | logikai értékek |
| 0, 3, 255 | Pozitív egész számok |
| -10, -12580 | negatív egész számok |
| 0377 | Oktális (nyolcas) számrendszerben megadott szám, azaz 377(8), melynek értéke 255. Az oktális számrendszert a kezdőnulla jelöli. |
| 0xff | hexadecimális számrendszerben megadott szám, azaz FF(16), melynek decimális értéke: 255. A hexadecimális számrendszert a bevezető &#39;0x&#39; jelöli. |
| 123l, 123L | Long típusú szám, melynek értéke 123. A long típust a szám után írt l vagy L betű jelöli. Byte és short típushoz nincs hasonló jelölés. |
| 3.141592, -15.8d  | Lebegőpontos számok, melyek double típusúként értendők. A d jelző kiírása nem kötelező. |
| 3.141592f | Float típusúként értelmezett lebegőpontos szám. A float típust a szám után írt f betű jelzi. |
| &#39;a&#39;, &#39;B&#39;, &#39;\n&#39;  | Karakterliterálok. A &#39;\n&#39; a sortörés ún. escape szekvenciája. |
| &quot;alma&quot;, &quot;B&quot; | Szövegliterálok. A szövegként megadott betű nem azonos a karakterként megadott betűvel. |

::: warning FONTOS

A fenti példában megadott karakter **’B’** és szöveges **”B”** nem azonos típusúak, így például össze nem hasonlíthatók, és karakteres változónak az utóbbi értékül nem adható.
Hasonlóképpen megkülönböztetendő a szám: **3**, a karakteres **’3’** vagy szöveges **”3”** értékek. Ez utóbbi kettő aritmetikai kifejezésben (pl. összeadás tagjaként) sem használható, és szám típusú változónak sem adható értékül.
:::

Azon változónkat, melynek értéke a program futása során nem változhat, **konstansnak** nevezzük. Javában a **final** módosítószó jelzi egy változóról, ha az konstans, melyet a típus neve előtt kell megadni. Mivel a konstansok értéke a program során nem változhat, így értelemszerűen ezeket inicializálni szoktuk.

```java
final int SZAZ = 100;
final char ABETU = 'a';
final float PI = 3.141592;
```

::: tip KONSTANS

A konstansok azonosítóit Javában csupa nagybetűvel szokás írni, ezáltal a kódban is jól megkülönböztethetőek a változóktól. A Java beépített konstansait is hasonlóképpen nevezték el a nyelv megalkotói.
:::

## Kifejezések, operátorok

A műveletet más néven **operátornak**, azokat az adatok pedig, melyekkel az operátor a műveletet végzi, **operandusoknak** nevezzük. Operátorokból és operandusokból tetszőleges bonyolultságú **kifejezést** építhetünk. Az egy operandusú műveleteket **unáris**, a két operandusú műveleteket **bináris** operátoroknak nevezzük. Nézzük meg a legfontosabb operátorokat.

### Logikai és összehasonlító operátorok

A logikai és összehasonlító operátorokban az a közös, hogy az ezekből alkotott kifejezések logikai eredményt adnak.

| **Operátor** | **Magyarázat** |
| --- | --- |
| ! | Logikai tagadás operátora (unáris) |
| &amp;&amp; | Logikai ÉS operátor |
| \|\| | Logikai VAGY operátor |
| == , != | Egyenlőségvizsgálat operátorok (egyenlő, nem egyenlő) |
| \<,  \<=,   \>,  \>= | összehasonlító operátorok |

Nézzünk néhány példát a fenti operátorok alkalmazására!

```java
boolean igaz = true;
boolean hamis = false;
boolean eredmeny;

eredmeny = !igaz; // eredmeny: false
eredmeny = igaz && hamis; // eredmeny: false
eredmeny = igaz || hamis; // eredmeny: true

int i=1, j=1, k=5;
eredmeny = (i < j); // eredmeny: false
eredmeny = (i <= j); // eredmeny: true
eredmeny = (i == k); // eredmeny: false
eredmeny = (i != k); // eredmeny: true
```

::: warning FONTOS

Ne tévesszük össze az értékadás (=) operátort az egyenlőségvizsgálat (==) operátorával!
:::

### Aritmetikai operátorok

Az aritmetikai operátorokat egész vagy valós szám típusú operandusokkal használhatjuk.

| **Operátor** | **Magyarázat** |
| --- | --- |
| +, - | unáris: előjel (pozitív és negatív) |
| +, - | Bináris: összeadás és kivonás operátorok |
| \*, /, % | Szorzás, osztás és osztási maradék (modulo) operátorok |

Nézzünk meg néhány példát a matematikai operátorok alkalmazására!

```java
int i=1, j=2, k=5;
int eredmeny;
eredmeny = i + j; // eredmeny: 3
eredmeny = k * k; // eredmeny: 25
eredmeny = k % 2; // eredmeny: 1
float hanyados = k / 2; // eredmeny: 2.0
```
A példa utolsó sorában láthatjuk, hogy hiába definiáltunk egy hányados float típusú változót, a hányados mégis a kerekített érték lett. Ennek oka, hogy a Javában ilyenkor automatikus típuskonverzió hajtódik végre.

Mivel a **k / 2** kifejezésben a k egész szám, a kifejezés értéke is egész szám lesz. Ha ezt értékül adjuk egy float típusú változónak, annak típusa ugyan megváltozik, értéke azonban nem. Ilyenkor alkalmazhatjuk az explicit típuskonverziót: azaz megmondhatjuk, hogy a jobb oldali kifejezésnek mi legyen a típusa. Az explicit típuskonverzió esetében a megfelelő típus nevét a kifejezés elé kell írni zárójelek között.

```java
int j = 2, k = 5;
float hanyados = (float)k / 2; // eredmeny: 2.5
byte hanyados = (byte)k / 2; // eredmeny: 2
double hanyados = (double)k / 2; // eredmeny: 2.5
```

### Értékadó operátorok

Java nyelv nem csupán egyféle értékadó operátort kínál. A különféle speciális értékadó utasítások alapgondolata a valt = valt + 1 típusú kifejezések egyszerűsítése, azaz amikor egy változó eredeti értékét módosítjuk az utasításban. Az értékadásban szereplő operátort összevonhatjuk az értékadással, így az előbbi értékadást így is írhatjuk: valt += 1. Az alábbi utasítások egyenértékűek a sor végén kommentben megadottal.

```java
int valt = 1; 
valt += 1; // valt = valt + 1;
valt -= 1; // valt = valt - 1;
valt *= 5; // valt = valt * 5;
valt /= 2; // valt = valt / 2;
valt %= 3; // valt = valt % 3;
```

### Prefix és postfix operátorok

A speciális értékadó operátorokkal már egyszerűbbé tettük egy változó értékének eggyel való növelését vagy csökkentését, ám erre a célra a Javában egy még egyszerűbb mód is a rendelkezésünkre áll.
A ++ és – – unáris operátorok eggyel növelik vagy csökkentik az operandusként megadott változó értékét. Az alábbi utasítások egyenértékűek a sor végén kommentben megadottal.

```java
int valt = 1;
valt++; // valt = valt + 1; 
valt--; // valt = valt – 1;
```

Az eggyel csökkentő vagy növelő operátort kifejezésbe is ágyazhatjuk, mégpedig kétféleképpen. Ha **prefix** operátorként alkalmazzuk (pl. ++valt), akkor előbb módosul a változó értéke, és csak utána értékelődik ki a kifejezés, amely már az új értéket használja fel. **Postfix** operátor esetén előbb kiértékelődik a kifejezés, mely a változó eredeti értékét használja fel, majd csak ezután módosul a változó értéke.

```java
int i = 2, j = 10
int pre = ++i + j; // pre: 13
pre = i; // pre: 3
pre = j; // pre: 10
int post = i++ + j++; // post: 13; i: 4; j: 11
int post = i + j; // post: 15
int post = --i + j--; // post: 14
int post = i; // post: 3
int post = j; // post: 10
```
### Operátorok kiértékelése

::: tip OPERÁTOROK

Az operátorok között a matematikában és egyéb programozási nyelvekben megszokott módon precedencia, azaz erősorrend érvényesül, vagyis egy összetett műveletsorban előbb mindig a nagyobb precedenciájú műveletek hajtódnak végre. A végrehajtás sorrendje zárójelezéssel befolyásolható.
:::

Az eddig áttekintett operátorok precedencia-sorrendjét a következő táblázat mutatja lefelé csökkenően (az 1-es prioritású operátor értékelődik ki elsőnek):

| **Prioritás** | **Operátor** | **Megnevezés** |
| --- | --- | --- |
| **1** | ++, -- | Prefix vagy postfix növelés és csökkentés |
|  | +, - | Előjelek (unáris operátorként |
|  | ! | logikai tagadás |
| **2** | \*, /, % | Szorzás, osztás, modulo |
| **3** | +, - | összeadás, kivonás (bináris operátorként) |
| **4** | \<,  \<=,   \>,  \>=  | összehasonlító operátorok |
| **5** | ==, != | Egyenlő és nem egyenlő |
| **6** | &amp;&amp; | Logikai ÉS |
| **7** | \|\| | Logikai VAGY |
| **8** | =, +=, -=, \*=, /=, %= | értékadás operátorok |


## Utasítás és blokk

Az utasítás lehet deklaráció, értékadás, postfix vagy prefix operátorokkal képzett értéknövelés vagy csökkentés, illetve metódushívás. Az előző fejezetben láttunk példát deklaráció típusú utasításra.
Utasítások egybefüggő sorozatát nevezzük **blokknak**.

::: warning FONTOS

Az utasítást pontosvesszővel ( ; ) zárjuk. A blokkot { és } jelek közé írjuk.
:::

Minden olyan esetben, amikor utasítás írható: blokk is írható. Így ciklus magja, utasítás valamely ága is lehet egyszerű utasítás vagy ezekből képzett blokk.
A blokkban létrehozott változó csak a blokk végéig létezik. Az ilyen változót lokális változónak nevezzük.


Nézzük meg az alábbi példában az utasítás, blokk, illetve a lokális változó használatát!

```java
{
  int i; // i lokalis
  i = 1;
  int j = i + b // j lokalis; b a blokkban nem lokalis
}
```

::: tip FONTOS

Blokkok egymásba ágyazásánál különösen figyeljünk oda a kód megfelelő tagolására! A blokknyitó és záró kapcsos zárójeleket mindig írjuk egy oszlopba, a blokk utasításait pedig kezdjük beljebb, egyvonalban.
:::

## Elágazás típusai, alkalmazása

Utasítások egymás után írásával képezhetünk azokból szekvenciát. Ez azonban még nem elég tetszőleges probléma megoldásának programozásához. Szükségünk lehet arra, hogy utasítások egy csoportja csak bizonyos feltétel teljesülése esetén hajtódjon végre. Az ilyen programozási struktúrát nevezzük **elágazásnak**.


### Egyszerű elágazás

**Egyszerű elágazásnak** nevezzük a legfeljebb két lehetséges végrehajtási ággal rendelkező elágazástípust. Egyszerű elágazás esetén meg kell adnunk egy logikai kifejezést (**feltételt**), illetve egy vagy két utasítást vagy blokkot: az **igaz és hamis ág** utasításait. Ha a feltételben megadott kifejezés teljesül, az igaz ág hajtódik végre – ennek megadása kötelező. Ha a feltétel nem teljesül, akkor a hamis ágra kerül a vezérlés, amennyiben megadtunk ilyet; ellenkező esetben a program futása az elágazást követő utasítással folytatódik.

Az egyszerű elágazás **szintaktikája** a következő:

```java
if (feltetel) { 
    ... // Igaz ag
} else {
    ... // Hamis ag 
}
```

*Bár a Java szintaktikai szabályai alapján, ha az elágazás valamelyik ága egyszerű utasítás (fenti példánkban mindkettő), úgy a blokknyitó és záró kapcsos zárójel elhagyható. A jobb olvashatóság érdekében azonban minden esetben ki szoktuk tenni azokat.*

::: danger FONTOS

Az elágazás végére **tilos** az utasítászáró pontosvesszőt kitenni!
:::

Nézzünk egy **példát** az egyszerű elágazásra:

```java
if (b >= 100 && b < 1000) { // Feltetel
    // Igaz ag 
    System.out.println("Haromjegyu");
} else {
    // Hamis ag
    System.out.println("Nem haromjegyu");
}
```

::: warning FONTOS

Egyszerű elágazás esetén kövessük a fenti példa tagolását! Az elágazás feje, az `else` és a záró kapcsos zárójel azonos oszlopban kezdődjön, az egyes ágak utasításait kezdjük beljebb, egyvonalban!
:::

Az `else` kulcsszó után újabb egyszerű elágazás írható, így növelhetjük a vizsgált feltételek számát és az azokhoz tartozó utasításokat.

```java
if (b >= 100) { // Feltetel
    // (b >= 100) Igaz ag
    System.out.println("Haromjegyu");
} else if (b >= 10) {
    // (b >= 100) Hamis ag es (b >= 10) Igaz ag
    System.out.println("Ketjegyu");
} else {
    // (b >= 100) Hamis ag es (b >= 10) Hamis ag
    System.out.println("Egyjegyu");
}
```

Amennyiben **egyszerű elágazásokat** ágyazunk egymásba a fenti módon, az egyes ágak közül legfeljebb **egy futhat le**. Ha valamelyik feltétel igaz, a hozzá tartozó utasítások végrehajtása után az elágazás utáni első kódsorra kerül a vezérlés. Előfordulhat, hogy az elágazások feltételei közül egy sem igaz – ilyenkor **semelyik ág nem** fog végrehajtódni.

### Összetett elágazás

**Összetett elágazás**nak nevezzük a több végrehajtási ággal rendelkező elágazást. Az összetett elágazást az különbözteti meg az egyszerű elágazások egymásba ágyazásával nyert, szintén több végrehajtási ággal rendelkező szerkezettől, hogy itt egyetlen kifejezés kerül kiértékelésre, melynek eredménye alapján kerül az egyes ágakra a vezérlés.

Az **összetett elágazás**ok képzéséhez a switch kulcsszó áll a rendelkezésünkre, amely azonban – más nyelvbeli előfordulásával ellentétben – igen korlátozott a Javában. A kiértékelendő kifejezés értéke ugyanis csak megszámlálható típusú (szám vagy karakter) lehet.
Az összetett elágazás szintaktikája a következő:

```java
switch (kifejezes) { 
    case cimke1:
        utasitasok1;
    break; 
    case cimke2: 
    case cimke3:
        utasitasok2;
    break; 
    ...
    default: 
        utasitasok3;
}
```

A **switch** fejében megadott kifejezés értékelődik ki először, és azon ág kerül majd végrehajtásra, amelyhez tartozó címke megegyezik a kifejezés értékével.

::: danger FONTOS

Ha nem írjuk ki az egyes ágak végére a **break** utasítást, a végrehajtás a következő ágon folytatódik. A **break** hatására azonban kiugrunk az elágazás blokkjából, és az utána szereplő első utasításra kerül a vezérlés.
:::

Az újabb címke nem szakítja meg tehát a végrehajtást. A fenti példában például a 2-essel és 3-assal jelzett címkék esetén is az **utasítások2** kerül majd végrehajtásra.

A **default** ágban adhatjuk meg azt az utasítást vagy blokkot, amely akkor kerül végrehajtásra, ha a kifejezés egyik megadott címkeértékkel sem egyezik meg. Ezen ág megadása nem kötelező. Az összetett elágazást a kulcsszavak megfelelő tagolásával, és nem a blokkok elejét és végét jelző kapcsos zárójelek kiírásával tesszük olvashatóvá.
Nézzünk egy példát összetett elágazásra:

```java
switch (szam) { 
    case 0:
        System.out.println("Nulla"); // szam == 0
    break; 
    case 1:
        System.out.println("Egesz pici szam"); // szam == 1 
    case 2:
        System.out.println("Egy vagy ketto"); // szam == 1,2
    break; 
    default:
        System.out.println("Legalabb harom"); // szam == 3,4,5... 
}
```

A **switch** elágazás különlegességét az adja, hogy a **break** utasítással mi magunk szabályozhatjuk az ágak egymás utáni kiértékelésének módját és sorrendjét. Ha azonban minden ág végére kitesszük a blokkból kiugró utasítást, úgy az elágazás könnyedén átírható egymásba ágyazott egyszerű elágazásokból képzett szerkezetre.

## Ciklus típusai, alkalmazása

A szekvencia és elágazás mellett olyan programozási struktúrára is szükségünk lesz, amely egy adott utasítást vagy azokból képzett blokkot többször végrehajt egymás után – ezt nevezzük ciklusnak. Az egymás után többször végrehajtandó utasítás vagy blokk a ciklusmag. A ciklusmag végrehajtása, illetve annak befejezése függhet egy feltétel kiértékelésétől, de az ismétlések számát is meghatározhatjuk.

::: tip FONTOS

A szekvencián, elágazáson és cikluson kívül nincs szükség más vezérlési szerkezetekre programjaink megírásához.
:::

### Elöltesztelő ciklus

Elöltesztelő ciklusnak nevezzük azt a ciklust, melyben a ciklusmag addig hajtódik végre, ameddig a ciklusfeltétel teljesül. Ha a ciklusfeltétel sosem teljesül, a vezérlés sosem kerül rá a ciklusmag utasításaira.
Az elöltesztelő ciklus formája a következő:

```java
while (feltetel) { 
    // Ciklusmag
    ...
}
```

Ha a ciklusmag egyetlen utasításból áll, a blokkot jelző kapcsos zárójelek kiírása nem lenne kötelező, a jobb olvashatóság miatt azt mégis mindig kitesszük. Pontosvesszővel csak a ciklusmagban szereplő utasításokat kell lezárnunk. Nézzük meg, hogyan írhatjuk ki elöltesztelő ciklussal a számokat 1-től 10-ig a képernyőre!

```java
int i = 0;

while (i < 10) {
    i+=1;
    System.out.println(i);
}
```

A fenti megoldás a klasszikus megoldáshoz hasonlít. Prefix operátorral azonban tovább egyszerűsíthetjük.

```java
int i = 0;

while (i < 10) {
    System.out.println(++i);
}
```
### Hátultesztelő ciklus

A hátultesztelő ciklus esetén a ciklus szintén addig fut, míg a megadott feltétel teljesül – ám a feltétel kiértékelése a ciklusmag végrehajtása után következik. Így a ciklusmag legalább egyszer lefut. A hátultesztelő ciklus formája a következő:

```java
do {
    // ciklusmag
    ...
} while(feltetel);
```

Ha a ciklusmag egyetlen utasításból áll, a blokkot jelző kapcsos zárójelek kiírása nem lenne kötelező, a jobb olvashatóság miatt azt mégis mindig kitesszük. A ciklust lezáró feltétel után a pontosvesszőt ki kell tennünk! Most nézzük meg, hogyan írhatók ki a számok 1-től 10-ig hátultesztelő ciklussal!

```java
int i = 0;

do {
    System.out.println(++i);
} while (i < 10);
```

Amennyiben a prefix értéknövelést postfixszé változtatjuk, módosítanunk kell a ciklusfeltételt is.

```java
int i = 1;

do {
    System.out.println(i++); 
} while (i <= 10);
```

Mivel itt a szám kiírása után kapja meg az i a következő értéket, a ciklusfeltételben azt is engednünk kell, hogy 10-es érték esetén még egyszer belépjünk a ciklusmagba.

### For-ciklus

Egy harmadik típusú ciklust, az ún. **for-ciklus**t, mellyel nagyon egyszerűen írhatunk számlálót léptető ciklusokat. A for-ciklus esetén annak fejében van lehetőségünk a számlálóváltozó deklarálására, értékének növelésére, illetve a ciklusfeltétel megadására.

A for-ciklus formája a következő:

```java
for (utasitas1; feltetel; utasitas2) {
    // Ciklusmag
    ...
}
```
A for-ciklus valójában minden esetben átírható egy vele ekvivalens elöltesztelő ciklussá.

```java
utasitas1;
while (feltetel) {
    // Ciklusmag
    ...
    utasitas2;
}
```
A for-ciklus esetén is mindig kitesszük a ciklusmag elejét és végét jelző kapcsos zárójeleket! Nézzük meg, hogyan írható szokásos példánk (számok kiírása 1-től 10-ig) for-ciklussal!

```java
for (int i = 0; i < 10; i++) { 
    System.out.println(i);
}
```

::: danger FONTOS

A for-ciklus fejében deklarált változó csak a ciklusmagban érvényes, a ciklus után már nem használható.
:::

::: tip
Ciklusok írásánál, különösképpen azok egymásba ágyazásánál ügyeljünk a kód tagolására! A ciklus feje és a ciklusmagot lezáró kapcsos zárójel kerüljön mindig egy vonalba, a ciklusmag utasításait kezdjük beljebb, azonos oszlopban.
:::

## Kivételkezelés

### Hiba, biztonságos program

A programhibák két fő csoportját szokás megkülönböztetni. **Szintaktikai hibának** nevezzük azon programhibákat, melyek esetén az általunk írt program valamely része nem felel meg a nyelv szabályainak, azaz szintaktikájának.

```java
imt i = 0;
system.out.println("alma");
for(int i = 0, i<= 10, i++)...
```

Az első példában kulcsszó elgépelését láthatjuk. A második példa azért fog szintaktikai hibát adni, mivel a Java megkülönbözteti a kis és nagybetűket, a System osztály azonosítója pedig nagy kezdőbetűvel írandó. A harmadik esetben pedig a for-ciklus fejében pontosvessző helyett vesszővel választottuk el a ciklusfej részeit.

Szemantikai hibának nevezzük azon kódrészleteket, melyek bár megfelelnek a nyelv szabályainak, mégsem értelmezhetők avagy nem adnak jó megoldást. Példák szemantikai hibákra:

```java
int a=0, b=10/a;
x1=(-b+Math.sqrt(b*b-4*a*c))/2*a;
args[++i]
```

Az első példában egyértelmű a szemantikai hiba: nullával osztani Javában sem lehet. A másik két példa azonban nem okoz minden esetben hibát megfelelő diszkriminánsból vonhatunk gyököt, ahogy ha van még feldolgozatlan paraméterünk, a megnövelt indexszel hozzáférhetünk. Azonban a kifejezésekben szereplő együtthatók bizonyos értékeinél hibás működés áll elő – a Java pedig ilyen esetben is megkövetelheti az esetleg előforduló hibák kezelését.

A Java nyelv megírásánál ugyanis elsődleges szempont volt a nyelv biztonságossága. Egy biztonságos program szemantikai hibáknál nem áll meg, hanem megpróbálja kezelni azokat a belőlük következő hibákkal együtt. A Java nyelv a kivételkezeléssel biztosítja számunkra biztonságos programok írásának lehetőségét.

## Kivétel

### A kivételek kezelése

A program futása során bekövetkező hibát a Java **exceptionnek**, magyarul **kivételnek** nevezi. Ez egy olyan – kivételes – eseményt jelent, amely megszakítja az utasítások végrehajtásának normális menetét. Ezért a program futása kivételes módon folyik tovább – ezt valósítja meg a kivételkezelés.

Amikor hiba keletkezik, automatikusan létrejön egy **kivételobjektum**.
Ezen kivételobjektum addig él, míg nem kezeljük azt – a kezelés után pedig automatikusan megszűnik. A **kivétel kiváltódásának** nevezzük azt, amikor a hiba hatására létrejön az objektum. Kivételt kiválthat egy hibás művelet, egy előre megírt Java csomag vagy osztály, de a programozó maga is definiálhat és kiválthat saját kivételeket.

Amikor az adott kivételről értesülünk, lehetőségünk van az adott **kivétel elkapására**. A kivételt azon blokk végén szokták elkapni, amelyben kiváltódtak. A **kivétel kezelésének** nevezzük azt a programrészletet, melyben az adott hibát orvosoljuk.

| **Kivételosztály** | **Leírása** |
| --- | --- |
| **IOException** | Ki és bemeneti hibák esetén váltódik ki, pl. konzolról való beolvasáskor. |
| **FileNotFoundException**   | Az IOException egyik alkivételosztálya. Akkor kapjuk például, ha nem létező fájlba próbálunk írni. |
| **EOFException**   | Fájl végét jelző kivétel. Szintén az IOException alosztálya. |

A Java nyelvben azon kivételeket, melyek kezelése minden esetben kötelező, ellenőrzött kivételeknek nevezzük. Az ellenőrzött kivételek nem kezelése szintaktikai hibát eredményez, és a program fordítása sikertelen lesz.

Azon kivételeket, melyek kezelése nem kötelező, **nem ellenőrzött kivételeknek** nevezzük. Ezek kiváltódásának ellenőrzése nem kötelező, ám minden esetben ajánlott.
Vegyünk sorra néhány gyakori nem ellenőrzött kivételt:

| **Kivételosztály** | **Leírása** |
| --- | --- |
| **RuntimeException**   | valamennyi futásidejű kivétel ősosztálya. |
| **NullPointerException**   | Olyan esetben kapjuk, ha null értékű, azaz inicializálatlan változóra vagy objektumra hivatkozunk. |
| **IndexOutOfBoundsException**   | Túlindexelést jelző kivétel. Akkor kapjuk, ha egy tömb, karakterlánc vagy más indexelhető szerkezet nem létező indexére hivatkozunk. |
| **ArithmeticException**   | Aritmetikai műveletek hibájakor kapjuk, például nullával való osztáskor. |
| **NumberFormatException**   | Akkor kapjuk például, ha nem megfelelő számot tartalmazó karakterláncot próbálunk szám típusúvá konvertálni. |
| **IllegalArgumentException**   | Akkor váltódik ki, ha egy metódust nem megfelelő paraméterekkel hívunk. |

Ha a kivételt nem kezeljük abban a blokkban, ahol keletkezett, úgy a tartalmazó blokknak adódik át. Ez egészen addig folytatódik, míg valahol nincs egy olyan kivételkezelő blokk, mely az adott kivételt kezelné. Ha a kivételt egyik blokkban sem kezeljük, és feljut a legfelsőbb szintre: a program **terminál**.

Azon műveleteket, melyek kivételt dobhatnak try-blokkba kell szerveznünk, melynek végén kezeljük az adott blokkban keletkezhető kivételeket.
A kivételkezelés szintaktikája:

```java
try {
    //kritikus műveletek;
} catch (KivetelTipus1 e1) { 
    //hibakezelés
} catch (KivetelTipus2 e2) {
    //hibakezelés
}
```

A következő példa olyan kódrészletet tartalmaz, amely kivételt dobhat.

```java
public class Osztas {
    public static void main(String[] args){
        int szam = Integer.parseInt(args[0]);
        int eredmeny = 1/szam;
        System.out.print("A szám reciproka: ");
        System.out.print(eredmeny);
    } 
}
```

Az egyik lehetséges hibaforrás a felhasználó által adott paraméter számmá alakítása, hiszen ha az karakteres típusú érték vagy a szám az ezreseknél szóközzel tagolt úgy a számmá alakítás nem fog sikerülni. Ilyenkor `NumberFormatException` fog dobódni. hasonló veszélyt rejt a számmal való osztás, hiszen ha a szám nulla, úgy az osztás `ArithmeticException` kivételt fog dobni.

A fenti példa biztonságos változata a következő:

```java
public class Osztas {
    public static void main(String[] args){
        try {
            int szam = Integer.parseInt(args[0]); 
            int eredmeny = 1/szam; 
            System.out.print("A szam reciproka: ");
            System.out.print(eredmeny);
        } catch (NumberFormatException e) { 
            System.err.println("Hibas szamformatum!");
        } catch (ArithmeticException e) { 
            System.err.println("Osztasi hiba!");
        } 
    }
}
```

Ha a paraméterként megadott értéket nem lehet számmá konvertálni, a vezérlés a `NumberFormatException` kivételt kezelő ágra ugrik, majd a program futása befejeződik. Így az osztás művelete nem hajtódik végre, és nem is írjuk ki az eredményt. Ha az osztás közben kapjuk a kivételt, a konzolra való írás helyett az `ArithmeticExceptiont` elkapó ágba lépünk, majd a program végrehajtása befejeződik, mivel a kivételkezelő blokk után nincs utasítás.

::: tip FONTOS

Ha kivétel keletkezik, a program vezérlése az adott blokkhoz tartozó kivételkezelő részre ugrik, és a kivétel kezelése után sem tér vissza a kivételt kiváltó utasításra. A kivétel keletkezése után a vezérlés abban a blokkban folytatódik, ahol a kivételt sikeresen kezeltük, mégpedig a kivételkezelő részt követő első utasítással.
:::

A `finally` ág segítségével pedig olyan kódrészletet is írhatunk, amely normál programműködés és kivétel keletkezése esetén is mindenképpen lefut. Ez a blokk akkor is végrehajtódik, amennyiben a kapott kivételt az adott blokkban nem kezeljük, azaz nem írtunk hozzá catch-ágat. Ilyenkor a finally ág lefutása után a kivétel a tartalmazó blokknak adódik tovább.

A `finally` ág a try-catch blokkban a kivételek kezelése után következik.

```java
try {
    //kritikus műveletek
} catch (KivetelTipus1 e1) {
    //hibakezelés
} 
finally {
   //befejező műveletek
}
```

A finally ágban általában a kritikus műveletekhez szükséges erőforrások felszabadítását, az ott megnyitott fájlok bezárását szokás megvalósítani – azaz minden olyan műveletet, amelyet kivétel keletkezése esetén is végre szeretnénk hajtatni.

## Egy- és többdimenziós tömbök definiálása és alkalmazása

### Egydimenziós tömbök

A **tömb** egy olyan összetett adattípus, amely meghatározott alaptípusú változókat fog össze oly módon, hogy azokra indexszel hivatkozhatunk. A tömb létrehozásakor meg kell határoznunk annak dimenzióját – ettől függően az egyes elemekre egy vagy több indexszámmal hivatkozhatunk. Az egydimenziós tömböt **vektornak**, a többdimenziós tömböt **mátrixnak** is szokás nevezni.


Mint minden egyéb, a Javában a tömb is egy objektum. Ezért a tömb változóknak számos metódusát használhatjuk majd kezelésükhöz. A szögletes zárójelek (**[]**) segítségével definiálhatunk **egydimenziós tömböt**. Tömb definiálásakor meg kell határozunk a tömb elemeinek típusát és a tömb azonosítóját. Hasonlóan egyszerű típusú változók definíciójához egy utasításban több tömböt és létrehozhatunk.

A szögletes zárójelet írhatjuk az alaptípus vagy a tömbváltozó azonosítója után.

```java
int[] v, w; // v es w egydimenzios tombok
int x[], y; // x integervektor, y integer tipusu szam
```

A fenti példában csak definiáltuk a tömb típusú változóinkat, de a hosszuk egyelőre 0, melyet **üres tömbnek** szokás hívni. A tömb hosszát egy speciális értékadó utasítással adhatjuk meg, hosszát pedig a **length** tulajdonság segítségével kérdezhetjük le.

```java
int[] v; // v vektor
v = new int[20]; // v vektor 20 elemet tartalmazhat
System.out.print("Tomb hossza: ");
System.out.print(v.length); // v vektor hossza
```
::: warning FONTOS

A Java a tömb elemeit 0-tól indexeli, így az első elem indexe 0, az utolsó elemé pedig hossz-1, azaz tömb.length-1.
:::

Ha tehát egy ciklusban kívánjuk feldolgozni egy tömb elemeit, azt a következőképpen tehetjük meg:

```java
for (int i = 0; i < v.length; i++) {
    v[i] = i; // minden vektorelem erteke az indexe lesz
}
```

Ha egy tömbben érvénytelen indexre hivatkozunk (pl. v[-2], v[v.length] stb.), akkor **IndexOutOfBoundsException** nevű kivétel keletkezik. Ennek kezelése csak abban az esetben szükséges, ha nem vagyunk biztosak a vektor elemeinek számában vagy a hivatkozott elem létezésében. A tömbindexek megfontolt kezelése esetén ez a kivétel elkerülhető.

Ha futás közben mégis ezt a kivételt kapjuk, akkor ellenőrizzük a kód azon részeit, ahol a tömb elemeire hivatkozunk. Az eddigiekhez hasonlóan a tömb definiálásakor is adhatunk neki kezdőértéket. Ekkor a tömb hossza az inicializáló értékadásban megadott elemek számával fog megegyezni.

```java
int[] primszamok = { 2, 3, 5, 7, 11 };
char[] abc = {'a', 'b', 'c', 'd', 'e'};
```

A program paraméteres kezelésénél használt **String[] args** tulajdonképpen egy karakterlánc típusú változókból álló, tetszőleges hosszúságú tömb.

::: tip FONTOS

Bár a tömb összetett adattípus, a tömb változójának azonosítóját is kisbetűvel szokás kezdeni.
:::

### Többdimenziós tömbök

Amennyiben több kapcsos zárójelet írunk a tömb definiálásánál, **többdimenziós tömböt** kapunk. Így valójában vektorokból álló vektort hozunk létre. A kapcsos zárójelpárok száma adja a tömb dimenzióját.

```java
int[] v, w[]; // v egydimenzios, w ketdimenzios tomb int[][] y; // y ketdimenzios tomb
int [][][] x; // x haromdimenzios tomb
```

A többdimenziós mátrixokat is inicializálhatom, az egyes sorok száma és hossza a megadott értékeknek megfelelő lesz.

```java
int[][] y = {{ 1, 2, 3 }, { 4, 5, 6 }}; // y 2x3-as tomb
char[][] ch = {{ 'a' }, { 'b', 'c' }}; // szabalytalan tomb
```

Az egydimenziós tömbhöz hasonlóan meghatározhatom az egyes dimenziók fix méretét – így az egyes sorok és oszlopok száma azonos lesz, azaz **szabályos mátrixot** kapunk. Mivel azonban az egyes vektorelemek által tartalmazott vektorok méretét külön-külön is megadhatom, **változó méretű tömböket** (pl. kesztyűmátrixot) is létrehozhatok....

A következő példában definiálunk egy szabályos mátrixot és egy kesztyűmátrixot, melyet fel is töltünk számokkal:

```java
int[][] tomb1 = new int[3][4]; // 3x4-es szabalyos matrix 
int[][] tomb2 = new int [3][]; // 3 elemu , tombokbol allo tomb

for (int i = 0; i < tomb2.length; i++) { 
    tomb2[i] = new int[i + 1];
    for (int j = 0; j < tomb2[i].length; j++) {
        tomb2[i][j] = i + j + 1; 
        System.out.print(tomb2[i][j] + " ");
    }
    System.out.println();
}
```

## Típusosztályok

### Csomagolóosztály

A **típusosztály** olyan Java osztály, melynek egyetlen adattulajdonsága van az adat tárolására, és melynek metódusai az adott típuson elvégezhető típusműveletek. Egy típusosztályhoz létrehozott példány pedig az adott típusú változónak megfelelő, ám azzal nem egyenlő objektum. Javában minden elemi típusnak van egy **csomagolóosztálya** azaz egy olyan típusosztály, amely az adott alaptípusnak felel meg. Ennek azonosítója általában a típus nagybetűs változata (**Javában az osztályokat nagy kezdőbetűvel szokás elnevezni**), de néhány esetben az adott rövidítéshez tartozó teljes kifejezés.

A **void** a Javában a típus nélküliséget jelző kulcsszó. Ezzel a kulcsszóval jelezzük például, ha egy metódus nem tér vissza semmilyen értékkel. A **void** kulcsszónak megfelelő csomagolóosztály a **Void**, amely nem példányosítható.


| **Alaptípus** | **Csomagolóosztály** |
| --- | --- |
| byte | **Byte** |
| short | **Short** |
| int | **Integer** |
| long | **Long** |
| float | **Float** |
| double | **Double** |
| char | **Character** |
| boolean | **Boolean** |
| void | **Void** |



Amennyiben egy adattal csak egyszerű műveleteket kívánunk elvégezni, úgy nem szükséges a típusosztály használata – elegendő magát az alaptípust használnunk. Ha azonban szükségünk van a típusosztály nyújtotta műveletekre, netán objektumként kell az adatra hivatkoznunk – úgy használjuk a csomagolóosztályokat.
Javában a **karakterláncot** nem tudjuk elemi adattípussal megvalósítani, csak típusosztállyal. A sztringek kezelésére a **String** típusosztály áll a rendelkezésünkre.

### Konstruktor és inicializálás

Ha egy típusosztályból kívánunk létrehozni egy példányt, meg kell hívnunk annak konstruktorát. A konstruktorok általában inicializálnak is; paraméterként adhatjuk meg a változó kezdőértékét.

::: tip FONTOS

A típusobjektumok esetén a konstruktorral inicializálás kötelező, mivel ezen objektumok értéke nem módosítható.
:::

Nézzünk példát inicializáló konstruktorhívásra:

```java
Integer ii = new Integer(3); // kezdoerteke 3
String s = new String("123"); // kezdoerteke "123"
Integer ij = new Integer(s); // kezdoerteke: 123
Character cd = new Character('a'); // kezdoerteke: a
```
Mint azt a fenti példában láthatjuk, egy típusosztály több konstruktorral is rendelkezhet. Az **Integer** típusú változót létrehozásakor inicializálhatjuk szám és karakterlánc típusú értékkel is; ez utóbbi esetben azonban kezelnünk kell az esetleg kiváltódó **NumberFormatException** kivételt.

### Típuskonverzió

A típusosztályok segítségével **típuskonverziót** is végezhetünk, azaz egy adott értéket konvertálhatunk valamilyen más típusúvá. Ilyenkor hivatkozhatunk a típusosztályból példányosított változó metódusára, de a típusosztály metódusaként is hívhatjuk.

```java
int i = Integer.parseInt("123"); // tipusosztaly metodusakent
int par1 = Integer.parseInt(args[0]); // tipusosztaly metodusakent
Integer ii = new Integer (100);
String s = ii.toString(); // ii objektum metodusakent
```
Az egyes típusobjektumok értékeit pedig más típusúként is lekérdezhetjük:

```java
Integer ii = new Integer (100);
byte b = ii.byteValue(); // erteke: 100
float f = ii.floatValue(); // erteke: 100.0 lebegopontos szam
int i = ii.intValue();
```

## Osztályok, objektumok definiálása és alkalmazása

### Osztályok definiálása, objektumok

Az **osztály** azonos jellegű dolgok (pl. emberek, tárgyak, adatszerkezetek) modelljét leíró önálló egység. Az osztályokból **példányokat** hozunk létre, melyeket **objektumoknak** is nevezünk – ezt nevezzük **példányosításnak**.

Az osztályok definíciója Javában két részből áll: meg kell határoznunk az osztály példányainak állapotát leíró **változókat** (más néven **tulajdonságokat**), illetve definiálnunk kell az osztály viselkedését, műveleteit meghatározó **metódusokat**.

Javában egy osztályt a class kulcsszóval kezdődő szerkezettel definiálhatunk. Az alábbi példában létrehozunk egy Tanulo osztályt, melynek három tulajdonsága lesz: a tanuló neve, évfolyamának száma (pl. 13) és az osztály betűjele (pl. 'B'). Definiálunk egy metódust is, mellyel léptethetjük a tanuló aktuális évfolyamának számát év végén.

```java
class Tanulo { 
    String nev;
    int evfolyam; 
    char osztaly;

    void evfolyamotLep() {
        evfolyam += 1;
    }
}
```

Az `evfolyamotLep` metódusnak `void` a típusa, mivel nincs visszatérési értéke, és bemenő paramétere sincs, mivel értelemszerűen eggyel növeli az évfolyam aktuális értékét.

::: warning FONTOS

Egy Java fájlban több osztályt is definiálhatunk, de ha másik Java fájlban is el szeretnénk azt érni, akkor csak egyet tartalmazhat, melynek neve meg kell, hogy egyezzen az őt tartalmazó fájl nevével.
:::

Amikor létrehozunk egy Java projektet, mindig létrejön egy Main osztály, és `Main.java` lesz az őt tartalmazó fájl neve is.

::: danger FONTOS

Az osztályok azonosítóit nagybetűvel szokás kezdeni. Amennyiben összetett kifejezés szerepel benne, úgy minden egyes új szót is nagybetűvel írunk (pl. EgyetemiHallgato). A tulajdonságok és metódusok neveit kisbetűvel szokás kezdeni.
:::

A `class` kulcsszó előtt **módosítót** is megadhatunk, mely az osztály láthatóságát vagy viselkedését befolyásolja. Ha az osztálydefiníciót a `public` módosítóval kezdjük, úgy az osztály másik csomagban, fájlban is látható lesz, enélkül az osztályt csak az adott csomagban használhatjuk. Az alábbi példában nézzük meg, hogyan példányosíthatjuk a fent definiált osztályt, és hogyan hivatkozhatunk a tulajdonságaira és metódusaira.

```java
Tanulo tan1; // objektumvaltozo definialasa
tan1 = new Tanulo(); // objektum letrehozasa , peldanyositas
tan1.nev = "Nagy Lajos"; // nev tulajdonsag inicializalas
tan1.evfolyam = 13; // evfolyam tulajdonsag inicializalas
tan1.osztaly = 'B'; // osztaly tulajdonsag inicializalas
tan1.evfolyamotLep(); // evfolyamotLep metodus hivas
```

Az osztály definiálása során megadott tulajdonságokat rögtön inicializálhatjuk is a szokásos módon. ha egy tulajdonságot nem inicializálunk, annak kezdőértéke szám típusú változó esetén nulla, karakter esetén `/u0000`, logikai típus esetén `false`, minden egyéb esetben pedig `null` lesz. Egy osztálynak lehet konstans tulajdonsága is.

```java
public class Tanulo {
    
    final String ISKOLANEVE = "Unknown School"; // konstans tag int evfolyam, 
    iskolakezdesEve = 2017; // inicializalas 
    String nev;
    char osztaly;

    void evfolyamotLep() { 
        evfolyam += 1;
    }
}
```

### Tulajdonságok és metódusok láthatósága

Egy osztály tulajdonságaira és metódusaira is alkalmazhatunk módosítókat, mellyel meghatározhatjuk, hogy azokat más osztályok elérhetik illetve hívhatják vagy sem. Ha egy tulajdonságot vagy metódust módosító nélkül definiálunk, akkor ezeket az adott csomagban definiált osztályok elérik – ezeket **félnyilvános tagoknak** nevezzük.

Amennyiben az egyes tagok definíciója elé a public kulcsszót írjuk, úgy ezek a tagok kívülről elérhetők azaz minden olyan objektum hozzájuk fér, amelyik az osztályt is láthatja. Az ilyen tulajdonságokat és metódusokat **nyilvános tagoknak** nevezzük.

Ha pedig egy tagot el szeretnénk rejteni, azt a private módosítóval érhetjük el. A **privát tagok** más osztályból nem hivatkozhatók, de az adott osztályon belül természetesen elérhetők maradnak.

::: tip INFO

A gyakorlatban az osztályok tulajdonságait privát tagként szoktuk megadni, azok értékének lekérdezését és módosítását metódusok segítségével valósítjuk meg. Ha egy osztályban definiálunk egy Name tulajdonságot, az ő értékét visszaadó metódust getName-ként, az értékét beállító metódust pedig setName-ként szokás elnevezni. Ezeket nevezzük getter és setter metódusoknak.
:::

```java
public class Tanulo {

	private String nev;
	private String ISKOLANEVE = "Unknown School";
	private int evfolyam, iskolakezdesEve = 2017;
	private char osztaly;
	
	public String getNev() {
		return nev;
	}
	
	public int getEvfolyam() {
		return evfolyam;
	}
	
	public char getOsztaly() {
		return osztaly;
	}

    public void setNev(String nev) {
		this.nev = nev;
	}

	public void setEvfolyam(int evfolyam) {
		this.evfolyam = evfolyam;
	}
	
	public void setOsztaly(char osztaly) {
		this.osztaly = osztaly;
	}
	
	public void evfolyamotLep() {
		evfolyam += 1;
	}
}
```

Mint azt a fenti példa is mutatja, egy metódusban a **this** kulcsszóval hivatkozhatunk az osztály aktuális példányára. Erre akkor lehet szükség például, ha egy metódus paramétere megegyezik az osztály egy tagjának nevével – ilyenkor a formális paraméter elfedi az osztály tulajdonságát, így arra csak a `this` kulcsszó segítségével hivatkozhatunk.

:::tip INFO

A metódusok visszatérési értékét a return kulcsszó után írjuk. Az adott visszatérési érték lehet összetett kifejezés is.
:::

Egy osztálynak több azonos nevű metódusa is lehet, amennyiben azok különböző szignatúrával, azaz különböző nevű vagy típusú paraméterekkel rendelkeznek. Ilyenkor ugyanis a metódus hívásakor a megadott paraméterek száma és típusa meghatározza, hogy az adott metódus melyik példányát hívjuk. Ezt nevezzük az adott **metódus túlterhelésének**. Egy osztály konstruktorát is túlterhelhetjük. Mindkettőre láttunk már példát az egyes típusosztályoknál: a `String` típusnak többféle szignatúrával rendelkező konstruktora adott; a `valueOf` metódus pedig tetszőleges típusú paraméterrel hívható.

Az `evfolyamotLep` metódus túlterhelésére mutat példát az alábbi kódrészlet.

```java
public class Tanulo {
	
    private int evfolyam, iskolakezdesEve = 2017;
	private char osztaly;
	
	public void evfolyamotLep() {
		evfolyam += 1;
	}
	
	public void evfolyamotLep(int evfolyam) {
		this.evfolyam = evfolyam;
	}
	
	public void evfolyamotLep(int evfolyam, char osztaly) {
		this.evfolyam = evfolyam;
		this.osztaly = osztaly;
	}
}
```

### Konstruktor definiálása

Az osztály konstruktora az a programkód, amely az osztály példányosításakor automatikusan lefut. A konstruktorban szokás inicializálni a legfontosabb tulajdonságokat. A konstruktor nem metódus, nem is tekinthető tagnak, hiszen nem öröklődik.

:::tip FONTOS

A konstruktor neve meg kell egyezzen az osztály nevével, és közvetlenül nem hívható, csak példányosításkor. A konstruktornak nincs visszatérési értéke, de a `void` kulcsszót sem kell kiírnunk. A konstruktort `public` módosítóval szoktuk létrehozni.
:::

Konstruktora tulajdonképpen minden osztálynak van, akkor is, ha mi nem hozunk létre. Ilyenkor egy nyilvános, paraméter nélküli ún. **implicit konstruktor** jön létre, amelynek a törzse üres, és a programkódban nem jelenik meg.

Egészítsük ki a Tanulo osztályt egy konstruktorral, amely beállítja a név, évfolyam és osztály tulajdonságok értékeit!

```java
public class Tanulo {
	private String nev;
	private final String ISKOLANEVE = "Unknown School";
	private int evfolyam, iskolakezdesEve = 2017;
	private char osztaly;

	public Tanulo(String nev, int evfolyam, char osztaly) {
		this.nev = nev;
		this.evfolyam = evfolyam;
		this.osztaly = osztaly;
	}
	...
}
...
Tanulo tan2 = new Tanulo("Nagy Lajos", 13, 'B');
```

A kódrészlet utolsó sora azt mutatja, hogyan hívjuk meg a fent definiált konstruktort.

::: tip INFO

Mivel a java automatikus szemétgyűjtő mechanizmusa (garbage Collector) révén a már nem használt objektumok automatikusan törlődnek a memóriából, nincs szükség destruktorra – a nyelv nem is rendelkezik ilyen szerkezettel.
:::

Osztályváltozónak nevezzük azt a tulajdonságot, amely nem az osztály egyes példányaihoz, hanem az osztály egészéhez kapcsolódik. Míg a példányváltozókból minden az adott osztályból létrehozott objektumnak lesz egy példánya, addig az osztályváltozókból csak egyetlen egy létezik. Osztályváltozót abban az esetben szokás létrehozni, ha az osztálynak is van olyan állapota, melyet ebben tárolni szeretnénk. 
Hasonlóképpen osztályszintű metódusokat is létrehozhatunk az adott osztály műveleteinek megvalósítására. Az osztálymetódusokra azonban vonatkozik pár szabály.

::: tip FONTOS

Az osztálymetódusok csak az osztályváltozókhoz férhetnek hozzá. Az osztálymetódusban nem használhatjuk a this kulcsszót, hiszen osztályszinten nincs értelme az osztály aktuális példányára hivatkozni.
:::

Az osztálymetódusok akkor is végrehajthatók, ha az osztálynak nincs még egyetlen példánya sem. Osztályváltozót, illetve osztálymetódust a `static` kulcsszóval definiálhatunk. A `Tanulo` osztályban vezessünk be egy olyan osztályváltozót, amely a már létrehozott példányok számát tárolja. Ez az érték nyilvánvalóan nem lehet példányváltozó, hiszen az egyes példányok nem tudnak egymás létezéséről – az osztály azonban értesül egy-egy újabb példány létrejöttéről: a konstruktor hívásakor.

Hozzunk létre egy osztálymetódust is a példányok aktuális számának lekérdezésére.

```java
public class Tanulo {
		...
		private static int tanulokSzama = 0; // osztalyszintu tag
		...
	
		public Tanulo(String nev, int evfolyam, char osztaly) {
			this.nev = nev;
			this.evfolyam = evfolyam;
			this.osztaly = osztaly;
			tanulokSzama += 1;
		}
	
		public static int getTanulokSzama() {
			return tanulokSzama;
		}
	}
	...
	int db = Tanulo.getTanulokSzama();
```

A fenti kódrészlet utolsó sora azt mutatja, hogyan hivatkozhatunk az osztályváltozókra (nyilvános tag esetén) és az osztálymetódusokra másik osztályból: az osztály azonosítóján keresztül. Egy osztályváltozót is inicializálhatunk – ez az értékadás természetesen csak egyetlen egyszer hajtódik végre: az osztály definiálásakor. Az egyes objektumok példányosításakor csak a példányváltozók kapnak kezdőértéket.

### A Java főprogram mint osztályszintű metódus

Számtalan Java programot elkészítettünk már, de vizsgáljuk most meg, mi is egy Java program.

```java
public class Main {
    public static void main(String[] args) {
        // program
    } 
}
```

Valójában tehát egy `Main` nevű osztály statikus, azaz osztályszintű, nyilvános és visszatérési értékkel nem rendelkező metódusát implementáljuk a főprogram megírásakor, amely egy `String` alaptípusú tömb paraméterrel rendelkezik. Ez a metódus a `Main` osztály példányosítása nélkül is hívható, hiszen osztályszintű.

:::tip FONTOS

Ha a `Main` osztályon belül szeretnénk egy műveletet kiszervezni egy másik metódusba, annak osztályszintű metódusnak kell lennie, hiszen a `Main` osztály nincs példányosítva.
:::

## Öröklődés

### Öröklődés

Osztályt létrehozhatunk úgy, hogy teljesen újként definiáljuk, de egy már meglevő osztályból is **származtathatjuk** - ezt nevezzük **öröklődésnek**. A Javában nincs többszörös öröklődés, azaz minden osztálynak csupán egyetlen őse lehet.

:::tip INFO

Javában az `Object` osztály minden osztály ősosztálya, azaz a legáltalánosabb osztály.
:::


Amikor egy osztályt egy már meglevőből származtatunk, kiegészíthetjük azt új tagokkal, azaz új tulajdonságokkal és metódusokkal. A származtatást az `extends` kulcsszóval tehetjük meg.

```java
public class VegzosTanulo extends Tanulo { 
    private double erettsegiAtlag;
    String egyetem;
    String szak;
    
    public double getErettsegiAtlag() { 
        return erettsegiAtlag; 
    }

    public void setTovabbTanulas(String egyetem, String szak) { 
        this.egyetem = egyetem;
        this.szak = szak;
    }
}
```

A fenti `vegzosTanulo` osztály tehát a `Tanulo` osztály **leszármazottja** vagy **gyermeke**, a `Tanulo` pedig a `vegzosTanulo` **szülője**, vagyis **őse**.
Javában a `public` és `protected` módosítókon kívül egy harmadik is a rendelkezésünkre áll: ha egy tulajdonságot vagy metódust a `protected` módosítóval hozunk létre, úgy azt csak az adott csomagban definiált osztályokból érhetjük el, illetve minden belőle származtatott osztályból.

A gyermekosztály örökli a szülőosztály valamennyi publikus, `protected` és félnyilvános, valamint összes osztályszintű tagját. A `private` tulajdonságokat is eléri a hozzá definiált nyilvános metódusokon keresztül – például lekérdezheti az értékét a getter, és módosíthatja a setter metódusokat használva. A privát metódusok nem öröklődnek.

A konstruktort a gyermekosztály nem örökli, azonban a gyermekosztály konstruktorából meghívhatjuk a szülőosztály konstruktorát a `super` kulcsszó használatával.

```java
public class VegzosTanulo extends Tanulo {
    private double erettsegiAtlag;
    ...
    public VegzosTanulo(String nev, char osztaly, double erettsAtlag) {
        super(nev, 13, osztaly);
        erettsegiAtlag = erettsAtlag;
    }
    ...
} 
...
VegzosTanulo vtan = new VegzosTanulo("Nagy Lajos", 'B', 4.235);
```

A fenti kódrészletben az új osztály konstruktorából meghívjuk tehát a `Tanulo` osztály konstruktorát, amely beállítja a név, évfolyam és osztály változók értékeit, és megnöveli a tanulók számát nyilvántartó osztályváltozó értékét is.

A `this` kulcsszót pedig arra is használhatjuk, hogy az adott osztályban definiált másik konstruktort hívjuk vele.

```java
public class VegzosTanulo extends Tanulo {
    private double erettsegiAtlag;
    ...
    public VegzosTanulo(String nev, char osztaly) { 
        super(nev, 13, osztaly);
    } 
    
    public VegzosTanulo(String nev, char osztaly, double erettsAtlag) { 
        this(nev, osztaly);
        erettsegiAtlag = erettsAtlag;
    }
   ... 
}
```

A fenti példában az első konstruktor meghívja a `Tanulo` osztályban definiált konstruktort, a második konstruktor pedig előbb meghívja az első konstruktort, majd inicializálja az érettségi átlagot tároló példányváltozót. Bármelyik konstruktort hívjuk is utána a példányosításkor, a szülőosztály konstruktora le fog futni.

### Statikus és dinamikus típus

Mivel a `VegzosTanulo` a `Tanulo` osztály leszármazottja, egy `Tanulo` típusú változónak értékül adható egy `VegzosTanulo` típusú objektum is, hiszen az annak kiterjesztése csupán: minden olyan tulajdonsággal és metódussal rendelkezik, amivel az őse.

```java
Tanulo tan = new Tanulo("Kiss Piroska", 12, 'B');
VegzosTanulo vtan = new VegzosTanulo("Nagy Lajos", 'B');
tan = vtan;
vtan = (VegzosTanulo)tan;
```

Az értékadó utasítás után a tan objektumváltozó **statikus típusa** `Tanulo` lesz, a **dinamikus típusa** viszont `VegzosTanulo`. Egy változó statikus típusa a program futása alatt végig változatlan – ez az a típus, amit a változó deklarációjakor megadtunk; dinamikus típusa viszont a program futása során változhat.

A `vtan` változónak pedig értékül adhatjuk a `tan` objektumot, hiszen annak dinamikus típusa `VegzosTanulo`. Ilyenkor az objektumváltozó előtt zárójelben meg kell adnunk a dinamikus típust – ezt javában **típuskényszerítésnek** vagy **explicit típuskonverziónak** hívják.

Ha például egy tömbben kívánjuk tárolni az objektumainkat, úgy ha a tömb alaptípusa `Tanulo`, abba a `VegzosTanulo` típusú objektumainkat is tárolhatjuk. hasonlóképpen az általánosabb típusú paraméterrel rendelkező metódus hívható speciálisabb típusú objektummal is.

```java
public class Iskola {
    static boolean egyOsztalybaJarnak(Tanulo tan1, Tanulo tan2) {
        return (tan1.getEvfolyam() == tan2.getEvfolyam() && 
                tan1.getOsztaly() == tan2.getOsztaly());
    }
}
...
Tanulo tan1 = new Tanulo("Tóth Brúnó", 12, 'B');
Tanulo tan2 = new Tanulo("Kiss Piroska", 12, 'B');
VegzosTanulo vtan = new VegzosTanulo("Nagy Lajos", 'B');
boolean b = Iskola.egyOsztalybaJarnak(tan1, tan2); // érték: true 
b = Iskola.egyOsztalybaJarnak(tan1, vtan); // érték: false
```

Látjuk, hogy a fenti Iskola osztályban definiált osztálymetódusnak bár két `Tanulo` típusú paramétere van, `VegzosTanulo` típusú értékkel is hívható. Az ilyen metódusokban azonban nyilvánvalóan csak olyan tagokra hivatkozhatunk, melyeket a `Tanulo` osztályban definiáltunk.

:::warning FONTOS

`Object` típusú változónak tetszőleges objektum értékül adható.
:::

### Metódusok felüldefiniálása

A gyermekosztály hozzáfér a szülőosztályban definiált publikus, `protected` és félnyilvános metódusokhoz, és azokat felül is definiálhatja. Amennyiben a gyermekosztály egy öröklött metódushoz saját implementációt készít, úgy az adott metódust **felüldefiniálja**. Ilyenkor a gyermekosztály metódusának hívásakor az új implementáció fog lefutni. Az eredeti kód csak a felüldefiniálás során érhető el a `super` kulcsszó használatával. A privát metódusokat nem tudjuk felüldefiniálni, mivel azok nem öröklődnek.

Az alábbi példában a havi osztálypénz kiszámítását végző metódust definiáljuk felül a `vegzosTanulo` osztály definíciójában. A felüldefiniáló metódus kidolgozásából azonban meghívjuk az eredetit.

```java
public class Tanulo { 
    ...
    private int evesOsztalypenz = 10000; 
    ...
    public int szamolHaviOsztalypenz() {
        return evesOsztalypenz / 10;  
    } 
} 

public class VegzosTanulo extends Tanulo { 
    ...
    private int ballagasKoltsegek;
    ...
    public int szamolHaviOsztalypenz() {
        return super.szamolHaviOsztalypenz() + ballagasKoltsegek / 10;
    } 
    ... 
}
```
Futási időben, ha egy objektum valamely metódusát hívjuk, mindig az objektum dinamikus típusához tartozó metódus fog lefutni.

:::warning INFO

A felüldefiniáló metódust ugyanúgy kell elneveznünk, mint az eredeti metódust és a szignatúrájuknak is egyezni kell. A visszatérési értékük típusának szintén azonosnak kell lennie és a felüldefiniáló metódus láthatósági kategóriája nem lehet szűkebb mint az eredeti metódusé.

Ha egy túlterhelt metódust definiálunk felül, úgy csak a vele pontosan egyező szignatúrájút írjuk felül.
:::

Az osztálymetódusokat nem lehet felüldefiniálni, csak elfedni – futási időben ugyanis az objektum statikus típusának megfelelő osztálymetódusa fog lefutni. Egy osztályban definiált osztálymetódus elfedi a vele megegyező nevű és szignatúrájú, szülőosztályban definiált osztálymetódust. Példánymetódust osztálymetódussal nem szabad elfedni.

Az osztály tulajdonságai szintén elfedhetők a belőle származtatott osztályban.

### Absztrakt és végleges osztályok

Amikor komplett osztályhierarchiát valósítunk meg Javában, szükségünk lehet olyan osztályok definiálására is, melyeket nem kívánunk példányosítani, csak származtatni belőle más osztályokat. Az ilyen osztályokban tulajdonképpen a belőle származtatott osztályok közös tulajdonságait és kidolgozandó metódusait írjuk le. Az ilyen osztályokat **absztrakt osztályoknak** nevezzük, és az `abstract` kulcsszóval jelöljük. Az absztrakt osztálynak pedig azon metódusait, melynek konkrét megvalósítását a gyermekosztályokra hagyjuk, **absztrakt metódusoknak** nevezzük.

Az alábbi példában definiálunk egy absztrakt `Negyszog` osztályt, melynek lesz egy megvalósított kerületet számító és egy absztrakt területet számító metódusa. Ebből származtatjuk a `Teglalap` és `Paralelogramma` osztályokat, melyekben implementáljuk az absztrakt `teruletSzamit` metódust.

```java
abstract class Negyszog {
	protected double aOldal, bOldal;

	protected double keruletSzamit() {
		return 2 * (aOldal + bOldal);
	}

	protected abstract double teruletSzamit();
}

class Teglalap extends Negyszog {
	public Teglalap(double aOldal, double bOldal) {
		this.aOldal = aOldal;
		this.bOldal = bOldal;
	}

	protected double teruletSzamit() {
		return aOldal * bOldal;
	}
}

class Paralelogramma extends Negyszog {
	protected double aMagassag, bMagassag;

	public Paralelogramma(double aOldal, double bOldal, double aMag, double bMag) {
		this.aOldal = aOldal;
		this.bOldal = bOldal;
		this.aMagassag = aMag;
		this.bMagassag = bMag;
	}

	protected double teruletSzamit() {
		return aOldal * aMagassag;
	}
}

public class Main {
	public static void main(String[] args) {
		Teglalap t = new Teglalap(12, 9);
		Paralelogramma p = new Paralelogramma(10, 12.5, 5, 4);
		double tKer = t.keruletSzamit(); // ertek: 42
		double tTer = t.teruletSzamit(); // ertek: 108
		double pKer = p.keruletSzamit(); // ertek: 45
		double pTer = p.teruletSzamit(); // ertek: 50
	}
}
```

**Végleges osztálynak** nevezzük azt az osztályt, amely nem örökíthető – azaz belőle származtatással nem hozhatunk létre új osztályt. Egy osztály metódusa pedig akkor végleges metódus, ha azt származtatás során nem lehet felüldefiniálni. A véglegességet osztályok és metódusok esetén is a **final** kulcsszóval adhatjuk meg.
Az **abstract** és **final** módosítók kizárják egymást.

## Saját kivételosztály

Gyakran előfordul, hogy a beépített kivételosztályok helyett saját kivétel létrehozására van szükség. 

### Saját kivételosztály

Mivel a kivétel is egy objektum, az osztályok definiálását ismerve kivételosztályt is létre tudunk már hozni.

:::tip INFO

Minden kivételosztály ősosztálya az Exception, tehát ebből kell származtatnunk. Az általunk definiált kivételosztály mindig ellenőrzött.
:::

Készítsünk saját kivételosztályt, amelyet akkor fogunk kiváltani, ha a felhasználó olyan oldalakkal definiál egy háromszöget, hogy azok alapján a háromszög nem szerkeszthető.

```java
public class NemSzerkeszthetoException extends Exception {
	  public NemSzerkeszthetoException(String uzenet) {
		    super(uzenet);
}
```

A kivételosztályunk csak egy konstruktorral rendelkezik, melynek kidolgozása az `Exception` osztály konstruktorának hívása. A kivételt egy sztring típusú üzenet paraméter megadásával példányosíthatjuk.

:::danger FONTOS

Ha egy metódus implementációjában valamilyen beépített vagy általunk létrehozott kivételt dobunk, úgy a metódus fejében fel kell sorolnunk ezen kivételosztályokat. Ez a felsorolás a metódus azonosítója után, a `throws` kulcsszóval kezdve tehető meg.
:::

Készítsünk most egy haromszog osztályt, amely a konstruktorban bekéri a háromszög oldalait, és a fent létrehozott kivételt dobja amennyiben a háromszög nem szerkeszthető.

A kivételt az osztály konstruktorában fogjuk dobni, ám a kezelést arra a blokkra bízzuk, ahonnan a példányosítástörténik. Ezért a metódusfejében jeleznünk kell, hogy a metódus NemSzerkeszthetoException-t dobhat.

```java
public class Haromszog {
    private double a, b, c;
    
    public Haromszog(double a, double b, double c) throws NemSzerkeszthetoException {
        if(a+b>c && a+c>b && b+c>a) {
            this.a = a;
            this.b = b;
            this.c = c;
        } else {
            throw new NemSzerkeszthetoException("Nem szerkesztheto!");
        }
    }
}
```

Nézzük még meg, hogyan történik a `Haromszog` osztály példányosítása!

```java
try {
	Haromszog h = new Haromszog(1, 2, 10);
} catch (NemSzerkeszthetoException e) {
	System.err.println(e.getMessage());
}
```

A catch-ág fejében létrehozunk egy `e` objektumváltozót, melybe a kivételobjektum kerül annak elkapásakor. A kivétel kezelése annyiból áll, hogy kiírjuk a hibakonzolra azt az üzenetet, mellyel a kivételt létrehozták – ezt pedig a kivételobjektum `getMessage` metódusa adja meg. Ezt a metódust az általunk definiált kivételosztály az `Exception` osztálytól örökölte.

## Collection interfész

### Az interfész fogalma

A Java programok alapvető építőkövei az osztályok, de van egy másik fontos fogalom, amely nem azonos az osztállyal: az interfész. Az **interfész** absztrakt metódusdeklarációk és konstansok gyűjteménye. Hasonlít egy absztrakt osztályhoz, de az interfésznek nincsenek adattagjai, és egyik metódusa sincs implementálva. Az interfész csak egy absztrakt felületet definiál, később kidolgozandó műveletek halmazát. Egy interfészt csak akkor tudunk használni, ha implementálja őt egy osztály. **Egy osztály implementál egy interfészt**, ha valamennyi, az interfészben definiált metódust implementálja. Az interfész hasonló absztrakciós szerepet tölt be, mint egy absztrakt ősosztály: minden olyan helyen, ahol egy adott interfész szerepel típusként, az interfészt implementáló bármely osztály példánya használható. Az interfészek között is van **öröklődés**, sőt, interfészeknél van **többszörös öröklődés**: egy interfésznek lehet több szülőinterfésze is. Az interfészeknek nincs ősinterfésze.

A **Collections Framework** egy olyan keretrendszer, amely összetett adatszerkezeteken, azaz gyűjteményeken alkalmazható műveleteket definiáló interfészekből; ezeket implementáló osztályokból és a gyűjteményeken alkalmazható algoritmusokból (pl. rendezés) áll.

A *Collection* interfész a gyűjteményhierarchia egyik gyökere, a legáltalánosabb interfész. Tulajdonképpen absztrakt interfész, mivel közvetlenül egyetlen osztály sem implementálja.

A *Collection* interfész leszármazottjai a `Set`, azaz halmaz interfész; a `SortedSet`, azaz rendezett halmaz interfész és a `List`, azaz lista interfész.


:::tip INFO!
A Collection interfészt a `java.util` csomagban definiálták.
:::

### Iterátor

A gyűjtemények feldolgozásában segít az iterátor objektum, amely a gyűjtemény elemeit járja be. Minden gyűjteményhez adott egy iterátor, amely az `iterator()` metódussal kérhető le. Valójában az `Iterator` is egy interfész a **Collections Frameworkben**.

Nézzük meg, hogyan lehet iterátor segítségével kiírni egy tetszőleges gyűjtemény elemeit a képernyőre!

```java
Iterator<Long> it = halmaz.iterator();
Long elem = null;
while (it.hasNext()) {
	elem = it.next();
	System.out.println(elem);
}
```

Az iterátor használata olvashatóbbá teszi a kódot, és egyszerűbbé is, hiszen nem kell lekérdeznünk az adott gyűjtemény hosszát, sem indexszel vagy más módon hivatkozni az elemeire.

### Halmaz interfész

A `Set` interfész a `Collection` interfész leszármazottja, és a halmaz adattípust valósítja meg. Ugyanazokat a metódusokat implementálja, mint amelyek a `Collection` interfészben adottak. Ám a halmaz jellemzőjéből adódóan bizonyos műveletek másképpen működnek: ha például egy olyan elemet teszünk az `add()` metódussal a halmazba, amely már szerepel benne, az nem kerül bele ismét.

A tömeges műveletek segítségével pedig az egyes halmazműveletek is megvalósítottak, hiszen az `addAll()`-lal két halmaz uniója képezhető, a `retainAll()` segítségével metszetet készíthetünk, a `removeAll()` használatával pedig két halmaz különbségét vehetjük. Két halmaz akkor egyenlő, ha ugyanazokat az elemeket tartalmazzák.

A `Set` halmaz egyik implementáló osztálya a `HashSet` osztály. A `HashSet` osztály rendelkezik egy kezdeti kapacitással, amelyet úgy érdemes megadni, hogy a tényleges elemszám kétszerese legyen (ez befolyásolhatja a halmaz feldolgozásának futási idejét). Ha nem tudjuk a halmaz tényleges elemszámát, úgy a kezdeti kapacitás állítását bízzuk a rendszerre.

Az alábbi példában 0 és 10 közé eső véletlenszámokat generálunk, melyeket egy halmazba pakolunk, majd kiírjuk őket a képernyőre.

```java
HashSet<Long> halmaz = new HashSet<Long>();

for (int i = 0; i < 10; i++) {
	Long rand = new Long(Math.round(Math.random() * 10));
	halmaz.add(rand);
}

for (Iterator<Long> it = halmaz.iterator(); it.hasNext();) {
	Long l = (Long) it.next();
	System.out.println(l);
}
```

### Rendezett halmaz interfész

A rendezett halmaz a `Set` halmazzal szemben az elemeit rendezve tárolja. Ha a `HashSet` halmazba egyszerű számokat teszünk, úgy előfordulhat, hogy elemeit egy iterátorral bejárva rendezetten kapjuk meg. Azonban ha a halmazba sztringeket rakunk, azokat rendezve csak egy rendezett halmaz fogja visszaadni. A rendezett halmazt a `SortedSet` interfész írja le, amely a `Set` interfész leszármazottja.
A `SortedSet` interfészt implementáló osztály a `TreeSet`. A rendezett halmaz segítségével könnyedén kereshetjük meg egy adathalmaz legkisebb és legnagyobb elemét. Az alábbi példában karakterláncokat olvasunk be a képernyőről, majd kiírjuk az ábécében legelöl és leghátul állót.


```java
TreeSet<String> rHalmaz = new TreeSet<String>();

System.out.println("Adj meg ot szot!");
try {
	for(int i = 0; i<5; i++) {
		 String szo = r.readLine();
		 rHalmaz.add(szo);
	}
} catch(IOException e) {
	  System.err.println(e.getMessage());
}

System.out.println("ABC legelso elem: " + rHalmaz.first());
System.out.println("ABC legutolso elem: " + rHalmaz.last());
```

### Lista interfész


A `List` interfész a lista vagy sorozat adattípust írja le. A `List` interfész is a Collection leszármazottja. A lista egy elemet többször is tartalmazhat, elemeit azok pozíciója szerint is el lehet érni, és keresni is lehet közöttük.

A listának nem csak iterátora, hanem listaiterátora is van. Mivel a lista nem csak az elejétől a vége felé, hanem fordítva is bejárható, a listaiterátor nem csak `hasNext()` és `next()`, hanem `hasPrevious()` és `previous()` metódusokkal is rendelkezik. Kiegészítették továbbá a `nextIndex()` és `previousIndex()` műveletekkel, melyek a soronkövetkező elem indexét adják meg.

A lista tartalmaz néhány új metódust a Collection-ben definiáltakhoz képest, illetve néhány metódus működése megváltozott a lista működéséből adódóan. Az alábbi táblázat csak az új vagy módosult működésű metódusokat tartalmazza. A Collection interfésznél ismertetett valamennyi művelet alkalmazható a lista esetében is.

A `List` interfészt implementáló egyik osztály az `ArrayList`. Az alábbi példában a képernyőről olvasott karakterláncokat írjuk ki fordított sorrendben:

```java
ArrayList<String> lista = new ArrayList<String>();
System.out.println("Adj meg ot szot!");
try {
		for(int i = 0; i<5; i++) {
			String szo = r.readLine();
			lista.add(szo);
	}
} catch(IOException e) {
		System.err.println(e.getMessage());
}

ListIterator<String> lit = lista.listIterator(lista.size());
while(lit.hasPrevious()) {
		String str =  lit.previous();
		System.out.println(str);
}
```