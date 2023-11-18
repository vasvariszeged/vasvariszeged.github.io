---
icon: fa-solid fa-cubes
category:
  - Maven
---

# Maven projektkezelés

Egy alkalmazás fejlesztésekor általában nem érdemes minden programrészt teljesen saját magunknak létrehozni. Sokszor találhatunk olyan jól bevált megoldásokat más fejlesztők által készített könyvtárak vagy keretrendszerek formájában, amelyek segíthetnek a projektünk során. Ezeket az eszközöket általában függőségekként, vagyis az alkalmazásunk függőségeiként kezeljük, és beépítjük őket a projektünkbe. Például egy Java projekt esetében ezek a függőségek gyakran `JAR` fájlok formájában vannak jelen.

Hosszú időkkel ezelőtt, egy sötétebb korszakban, amikor egy új projektbe kapcsolódtunk be vagy mi magunk indítottunk egy újat, a függőségeket saját magunknak kellett manuálisan letölteni és beállítani az __IDE__ alkalmazásunkban. Ez rengeteg bosszúságot okozhatott. Egykoron az __Apache Ant__ eszköz szolgált a konfigurációs problémák megoldására, de ma már elavultnak számít a bonyolult scriptnyelve miatt. Ráadásul __Ant__ használata során is saját magunknak kellett letölteni a függőségeket, így gyakran előfordulhatott, hogy kollégáink különböző verziójú függőségekkel dolgoztak, ami pedig súlyos következményekkel járhatott.

Jelenleg az Apache Maven eszközt alkalmazzuk projektjeink létrehozásához és kezeléséhez. Maven használatával a projekt összes szükséges információját egyszerűen egy `XML` fájlban határozhatjuk meg. A különböző függőségek kezelése sem jelent többé problémát, mivel a Maven automatikusan letölti őket egy __repositoryból__ az `XML` fájlban megadott információk alapján. 

A `Maven Central Repository` egy hatalmas gyűjteményt kínál különböző projektekhez, de emellett más `repository`-k is elérhetők, például a gyártók által létrehozottak, illetve akár saját `repository`-t is hozhatunk létre.

## Maven története

Az Apache Maven projekt 2002-ben indult, és a fejlesztés során az alapvető cél az volt, hogy egy nyílt forráskódú, szabványos projektkezelő eszközt hozzanak létre a Java közösség számára. A Maven azóta nagy népszerűségnek örvend a szoftvertervezés és -fejlesztés területén. A projektet aktívan karbantartja az Apache Software Foundation, és folyamatosan fejlesztik, hogy a fejlesztők igényeinek megfeleljen.

### Maven alapelvei

A Maven tervezésekor alapelvek mentén haladtak, amelyek meghatározzák az eszköz működését és tervezését. Megalkotja a projekt struktúráját és fájlrendezését melynek köszönhetően a fejlesztőknek nem kell túl sok időt tölteniük a konfigurációval, mivel alapértelmezett beállításokat használ, amelyeket könnyen felül lehet írni, ha szükséges. Lehetővé teszi a projekt függőségeinek deklaratív megadását egy `pom.xml` (__Project Object Model__) fájlban. Ez a fájl tartalmazza a projekt leírását, a függőségeket, a build beállításokat és a pluginok konfigurációját. Továbbá támogatja a teljes projektéletciklust, beleértve a projekt generálását, fordítását, tesztelését, csomagolását, telepítését és más feladatokat.

![](/assets/images/vasvari/maven.webp)

### Maven fő funkciói

1. **Build menedzsment:** Maven kezeli a projekt build folyamatát, amely magában foglalja a forráskód fordítását, a tesztelést és a csomagolást. A build folyamatot XML-alapú konfigurációs fájl, a `pom.xml` vezérli.

2. **Függőségek kezelése:** A Maven lehetővé teszi a külső függőségek egyszerű deklarálását és kezelését. A függőségeket központi repository-kből letölti, így nem kell manuálisan letölteni és hozzáadni őket a projekthez.

3. **Projekt generálás:** Maven képes új projektstruktúrák generálására, például egy alapvető Java alkalmazást vagy webalkalmazást. Ez segít a projekt kezdeti beállításában.

4. **Tesztelés és dokumentáció generálás:** Maven automatizálja a projekt tesztelési folyamatát és lehetővé teszi a dokumentáció generálását is.

5. **Pluginok támogatása:** Maven pluginok segítségével bővíthető és testreszabható. Számos beépített plugin áll rendelkezésre, például a Java Compiler plugin, a JUnit tesztelés plugin és a site generálás plugin.

### Az alkalmazása és az iparágban betöltött szerepe

Az Apache Maven alkalmazása sokszínű, és számos iparágban és projekt típusban használják. Néhány példa:

1. **Java fejlesztés:** A Maven az egyik legelterjedtebb projektkezelő eszköz a Java közösségben. A Java projektek gyakran használják a Maven-t a build folyamat automatizálásához, a függőségek kezeléséhez és a projekt struktúrájának egységesítéséhez.

2. **Webalkalmazások:** A webalkalmazások fejlesztésekor a Maven hasznos lehet a projektstruktúra és a függőségek kezelésében. A Maven lehetővé teszi a Java EE alkalmazások könnyű konfigurációját is.

3. **Open Source projektek:** Az open source projektek és könyvtárak fejlesztői gyakran használnak Maven-t a könnyű hozzáférhetőség és a függőségek dokumentálásának lehetősége miatt.

4. **CI/CD (Continuous Integration/Continuous Deployment) rendszerek:** A Maven integrálható különböző CI/CD rendszerekkel, például a Jenkins-szel, a Travis CI-vel vagy a CircleCI-vel, így automatizálható a projekt fordítása, tesztelése és elterjesztése.

5. **Keretrendszerek és platformok:** Néhány keretrendszer, például a Spring Framework, szorosan együttműködik a Maven-nel, hogy egyszerűsítse a projektfejlesztést.


## `pom.xml`

Az Apache Maven projektkezelő rendszerben a `pom.xml` (__Project Object Model__) fájl a projekt konfigurációjának és leírásának központi eleme. Ebben a fájlban definiálják a projekt struktúráját, a függőségeket, a build folyamatot és a pluginokat. A `pom.xml` fájl alapvetően az Apache Maven működésének szívét képezi. 

A `pom.xml` fájl feladatai és részei:

1. **Projekt metaadatok:** A fájl elején találhatóak olyan projektmetaadatok, mint a projekt neve, azonosítója, verziója, csomagnév (package name), fejlesztő neve és elérhetősége, valamint a projekt címe. Ezek az adatok azonosítják és leírják a projektet.

2. **Függőségek deklarációja:** A `dependencies` vagy `dependencyManagement` szekciókban deklarálják a projekt külső függőségeit. Ezek a függőségek olyan könyvtárak vagy modulok, amelyekre a projekt épít, és amelyeket a Maven központi repository-ból automatikusan letölt.

3. **Build konfiguráció:** A `build` szekció tartalmazza a projekt build folyamatának konfigurációját. Például itt találhatóak a forráskód helye, a fordítási beállítások, a tesztelési konfiguráció és a csomagolás beállításai.

4. **Pluginok konfigurációja:** A `build/plugins` szekcióban találhatóak a Maven pluginok konfigurációi. Ezek a pluginok a build folyamat különböző szakaszaiban végzik el a különböző feladatokat, például a forráskód fordítását vagy a tesztelést.

5. **Verziókezelés:** A `scm` szekcióban lehetőség van a projekt verziókezelési információinak _(például Git vagy Subversion repository URL)_ megadására.

A `pom.xml` fájl felépítése __XML__ formátumú, és az Apache Maven követi a Maven Pluginok és az Apache Maven Build Lifecycle alapján. A fájl tartalmazhat további szekciókat és beállításokat is, amelyek a projekt specifikus igényeinek megfelelnek.

Az alábbi egy példa egy egyszerű `pom.xml` fájlra:

```xml
<!-- Kezdet a POM fájlnak -->
<project>
    <!-- A POM modell verziója -->
    <modelVersion>4.0.0</modelVersion>
    <!-- A projekt csoport azonosítója (általában a projekt szervezeti neve) -->
    <groupId>com.example</groupId>
    <!-- A projekt neve (artifact id) -->
    <artifactId>my-project</artifactId>
    <!-- A projekt verziója -->
    <version>1.0.0</version>

    <!-- Függőségek szekciója, itt megadhatók a projekt függőségei -->
    <dependencies>
        <dependency>
            <!-- A függőség csoport azonosítója -->
            <groupId>org.example</groupId>
            <!-- A függőség neve (artifact id) -->
            <artifactId>library</artifactId>
            <!-- A függőség verziója -->
            <version>1.0.0</version>
        </dependency>
    </dependencies>

    <!-- A projekt felépítési konfigurációja (pl. forrásfájlok helye) -->
    <build>
        <!-- A forrásfájlok elérési útja -->
        <sourceDirectory>src/main/java</sourceDirectory>
        <!-- Build pluginek konfigurációja -->
        <plugins>
            <!-- Ide kerülhetnek Maven pluginok konfigurációi -->
        </plugins>
    </build>
</project>
<!-- Vége a POM fájlnak -->

```

:::tip
Ez a példa bemutatja a legfontosabb elemeket, de a valóságban a `pom.xml` fájl sokkal részletesebb lehet a projekt igényeinek megfelelően. A fájl tartalmazza a projekt struktúrát, a függőségeket, a build folyamat beállításait és a további konfigurációs információkat a projekt hatékony kezeléséhez és build folyamatához.
:::


A Maven-t konzolból lehet futtatni, miután a szükséges környezeti változókat beállítottuk a telepítés során az alábbi formában: `mvn <utasítás1> [<utasítás2>]`.

Maven projektjeink során build életciklus a következők:

1. `validate`: Ebben a fázisban ellenőrizzük a Maven projektet, hogy megfelelő-e formailag, és hogy rendelkezünk-e minden szükséges információval a build folyamathoz.

2. `compile`: Ez a fázis a forráskód fordításáért felelős.

3. `test`: A fordított kódot tesztekkel ellenőrizzük egy adott egységteszt keretrendszer segítségével. Fontos megjegyezni, hogy ezek a tesztek nem szükségesek a kész csomagoláshoz.

4. `package`: Ebben a fázisban a fordított kódot valamilyen terjeszthető formátumba csomagoljuk, például jar-fájl formájában.

5. `verify`: Integrációs teszteket futtatunk.

6. `install`: Az elkészült csomagot a lokális repository-ba helyezzük el, hogy más projektben is felhasználható legyen függőségként.

7. `deploy`: A build befejezéseként a végső csomagot a távoli repository-ba másoljuk, így megosztható lesz más fejlesztőkkel és projektekkel.

További fontos fázisok közé tartozik a tisztítás (`clean`), ami törli a korábbi build során generált fájlokat.

Fontos megjegyezni, hogy egy adott életciklus fázis futtatásakor az előző fázisok is lefutnak. Például, ha `mvn package` parancsot adunk ki, akkor lefutnak a `validate`, `compile`, `test` és `package` fázisok is.

Hasznos gyakorlat lehet a build fázisokat a `clean` paranccsal kombinálni, mivel így töröljük a korábban generált fájlokat a friss fordítás előtt. Például: `mvn clean package`, vagy `mvn clean install`.


## Összefoglaló

Az Apache Maven a modern szoftverfejlesztés terén, amely hatékony projektkezelést, build folyamat automatizálást és függőségkezelést kínál. A Maven a konvenciók és az egységes projektstruktúra alapján működik, és számos előnnyel jár a fejlesztők és a fejlesztői közösségek számára. Ugyanakkor fontos megjegyezni, hogy nem minden projekt vagy helyzet igényel a Maven használatát, és fontos az eszköz korlátainak és kritikáinak tudatában lenni. Az Apache Maven azonban továbbra is fontos szerepet tölt be a szoftverfejlesztésben, és aktívan hozzájárul a projektkezelés és a build folyamat hatékonyságához a fejlesztők számára.