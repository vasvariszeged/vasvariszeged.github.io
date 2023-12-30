---
icon: fa-solid fa-2
category:
  - Spring Boot
  - RESTful API
---


# Backend környezet és az eszközök beállítása

A backend fejlesztést fogjuk megismerni a __Spring Boot__ használatával. A backend programozáshoz szükséges környezetet és eszközöket állítjuk be a __Spring Boot__ segítségével. A __Spring Boot__ egy modern Java-alapú backend-keretrendszer, amely gyorsabbá teszi a fejlesztést, mint a hagyományos Java-alapú keretrendszerek. A __Spring Boot__ segítségével önálló webalkalmazást készíthetünk, amely beágyazott alkalmazáskiszolgálóval rendelkezik.

## Spring Initializr használata

Backend projektünket a __Spring Initializr__ segítségével fogjuk létrehozni, amely egy webes eszköz, amit a __Spring Boot__ projektek létrehozására használunk. Ezután megtanuljuk, hogyan futtassuk __Spring Boot__ projektünket az __IntelliJ IDEA__ segítségével.

## Projekt létrehozása

A __Spring Initalizr__ segítségével a következő lépéseket kell végrehajtanunk:

1. Nyissuk meg a __Spring Initializr__-t a https://start.spring.io oldalra navigálva a böngészőnk segítségével. A következő oldalnak kell megjelennie:

![__1. ábra:__ Spring Boot Initializr](/assets/images/vasvari/springboot/springinitializr0.png)


2. Egy __Maven projektet__ fogunk generálni Javával és a __Spring Boot__ legújabb stabil __3.2.x__ verziójával. Ha egy újabb _major_ vagy _minor_ verziót használsz, akkor nézd meg a kiadási megjegyzésekben, hogy mi változott. A __Group__ mezőben definiáljuk a csoport azonosítónkat (__org.vasvari__), ami a Java projektünkben is alapcsomag lesz. Az __Artifact__ mezőben definiáljuk a projektünk azonosítóját (__demo__), amely egyben a projektünk neve is lesz az __IntelliJ__-ben.

![__2. ábra:__ Spring Boot projekt létrehozása](/assets/images/vasvari/springboot/springinitializr1.png)

::: details Mi a Group, Artifact, Name, Description, Package Name?

_A Maven egy népszerű projektkezelő eszköz a Java alkalmazások fejlesztéséhez, amely segít a projektek strukturálásában, függőségek kezelésében és az alkalmazások építésének automatizálásában. A Maven projektjeit XML alapú konfigurációs fájlok segítségével írják le, amelyekben több fontos elemet kell definiálni._ 

- **Group:**
   A Maven projekt csoportját vagy szervezetét reprezentálja. Ez a névteret definiálja, amely alatt a projekt elérhető lesz. Általában a vállalat, szervezet vagy fejlesztőcsoport neveként használják. Például: `com.example`.

- **Artifact:**
   Az elkészített alkalmazás vagy könyvtár nevét jelöli. Ez egy konkrét projekt egyedi azonosítója. Általában a projekt kódjának vagy alkalmazás nevének rövidítése. Például: `my-application`.

- **Name:**
   Az alkalmazás vagy projekt nevét jelenti. Ez egy ember által olvasható név, amely leírja az alkalmazás célját vagy funkcióját. Például: `My Application`.

- **Description:**
   A projekt rövid leírását tartalmazza. Ez segít más fejlesztőknek vagy felhasználóknak megérteni, hogy mi a projekt célja és funkciói. Például: `Egy egyszerű Java alkalmazás, amely bemutatja a Maven projektstruktúrát`.

- **Package Name:**
   Az alkalmazás Java kódjának elhelyezési helyét vagy névterét határozza meg. A Maven általában a __Group__ és az __Artifact__ értékeket használja, hogy létrehozza a csomagnév struktúrát. Például, ha a __Group__ `com.example` és az __Artifact__ `my-application`, akkor a csomagnév lehet `com.example.myapplication`.

_Ezek az elemek együtt segítenek az egyértelmű azonosításban, a függőségek kezelésében és a Maven projekt struktúrájának kialakításában. A Maven által definiált konvenciók segítik a fejlesztőket a következetes és könnyen karbantartható projektek létrehozásában._
:::

:::info FONTOS MEGJEGYZÉS
Válasszuk ki a megfelelő Java verziót a __Spring Initializr__-ben. Ebben az anyagban a __Java 17__-es verzióját használjuk. A __Spring Boot 3__-ban a Java alapértelmezett verziója a __Java 17__-es.
:::

3. Az __ADD DEPENDENCIES...__ gombra kattintva kiválaszthatjuk azokat a függőségeket, amelyekre szükségünk van. A __Spring Boot__ olyan _starter_ csomagokat biztosít, amelyek leegyszerűsítik a Maven konfigurációját. A __Spring Boot__ starterek tulajdonképpen függőségek készletei. A projektünket egy függőséggel kezdjük aminek a neve __Spring Web__. A függőségeket beírhatjuk a keresőmezőbe, vagy kiválaszthatjuk a megjelenő listából, ahogyan azt a következő képernyőképen láthatjuk:

![__3. ábra:__ Add dependencies...](/assets/images/vasvari/springboot/springinitializr2.png)

A __Spring Web__ starter csomag a full stack fejlesztés alapját képezi és beágyazott __Tomcat__ szervert biztosít. Miután hozzáadtuk a függőségeket, a __Spring Initializr__ függőségek szakaszának így kell kinéznie:

:::info Tomcat
_Apache Tomcat_ egy nyílt forráskódú szoftver, amely egy Java-szerver alkalmazás konténerként működik. A __Tomcat__ fejlesztése az _Apache Software Foundation_ által történik és a Java Servlet, JavaServer Pages (JSP) és más Java alapú technológiák futtatására szolgál. Ezt a konténert __gyakran használják webalkalmazások hosztolására és futtatására__.
:::

![__4. ábra:__ Dependencies](/assets/images/vasvari/springboot/springinitializr3.png)

4. Végül kattintsunk a __GENERATE__ gombra, amely egy __*.zip__ csomagot generál számunkra.

![__5. ábra:__ Generate](/assets/images/vasvari/springboot/springgenerate.png)

Most pedig megnézzük, hogyan futtassuk a projektünket az __IntelliJ IDEA__ segítségével.


## A projekt futtatása

A következő lépéseket kell végrehajtani a Maven projekt futtatásához az __IntelliJ IDEA__-ban:

1. Csomagoljuk ki a projekt __*.zip__ csomagját, amelyet nem rég töltöttünk le és indítsuk el az __IntelliJ IDEA__-t.

![__6. ábra:__ Kicsomagolás](/assets/images/vasvari/springboot/unzip.png)

2. Importáljuk a projektünket az __IntelliJ IDEA__-ba. Az importálási folyamat elindításához válasszuk a __Open__ menüpontot és megnyílik a fájl böngésző. Keressük meg a kicsomagolt mappánkat majd vállaszuk ki és nyissuk meg azt - szintén __Open__.

![__7. ábra:__ IntelliJ IDEA - Projekt importálása](/assets/images/vasvari/springboot/idea1.png)

Minden alkalommal, amikor először nyitunk meg egy projektet, az __IntelliJ IDEA__ megjeleníti a __Trust Project__ párbeszédpanelt. 

![__8. ábra:__ Csak nyomjuk meg a Trust Project gombot.](/assets/images/vasvari/springboot/idea2.png)

3. A __Project Explorer__ a projektünk csomagszerkezetét is megmutatja. Kezdetben csak egy csomag van, amit `org.vasvari.demo`-nak hívnak. Ez a csomag tartalmazza a fő alkalmazásosztályunkat is, amit `DemoApplication.java` néven nevezték el.

![__9. ábra:__ Project explorer.](/assets/images/vasvari/springboot/idea3.png)

4. Most még nincs funkcionalitása az alkalmazásunknak, de le tudjuk futtatni, hogy lássuk, minden sikeresen elindult-e. A projekt futtatásához nyissuk meg a fő osztályt dupla kattintással (`DemoApplication.java`), ahogy azt a következő képernyőképen láthatjuk, majd kattintsunk a futtatás gombra (_a lejátszás ikonra_) az __IntelliJ IDEA__ eszköztárában. Vagy alternatívaként választhatjuk a _Run_ menüt, majd kattintsunk a _Run 'DemoApplication.java'_ lehetőségre:

![__10. ábra:__ Spring Boot projekt elindítása.](/assets/images/vasvari/springboot/idea4.png)

5. Az __IntelliJ IDEA__-ban megnyílik a _Run_ nézet, amely fontos információkat tartalmaz a programunk állapotáról. Ahogyan azt már korábban megbeszéltük, ez az a nézet, ahol az összes naplózási szöveg és hibaüzenet megjelenik, ezért nagyon fontos, hogy ellenőrizzük a tartalmát, ha valami hibásan működne.
Ha a program sikeresen lefordult, akkor a konzol végén lévő szövegben látnunk kell az elindított `DemoApplication` osztályt. A következő képernyőképen az __IntelliJ IDEA__ konzol tartalma látható a __Spring Boot__ projektünk elindítása után:

![__11. ábra:__ Spring Boot konzol.](/assets/images/vasvari/springboot/idea5.png)


## Spring Boot - Maven

A projektünk gyökerében található a `pom.xml` fájl, amely a __Maven__ konfigurációs fájlja. Ha megnézzük a fájlon belül a függőségeket, akkor láthatjuk, hogy most már vannak olyan függőségek, amelyeket a __Spring Initializr__ oldalon kiválasztottunk. 

Adjunk hozzá egy tesztfüggőséget is, ahogyan azt a következő kódrészlet mutatja:

```xml{7-12}
	<dependencies>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-web</artifactId>
		</dependency>

    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-devtools</artifactId>
      <scope>runtime</scope>
      <optional>true</optional>
    </dependency>

		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-test</artifactId>
			<scope>test</scope>
		</dependency>
	</dependencies>
```

Fejlesztői eszközök le vannak tiltva, amikor végső (_production_) verziót készítünk az alkalmazásunkból. Az automatikus újraindítást tesztelheted, ha hozzáadsz egy megjegyzéssort a fő osztályhoz, a következő módon:

```java
package org.vasvari.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
    // After adding this comment the application is restarted
		SpringApplication.run(DemoApplication.class, args);
	}

}
```

:::danger Az automatikus újraindítás IntelliJ IDEA-ban
A fenti funkció megfelelő működéséhez két különböző helyen kell aktiválnunk a szükséges beállításokat. 

_Lásd lent. 👇🏻_
:::

::: tabs

@tab Advanced Settings 

![Allow auto-make to start even if developed application is currently running.](/assets/images/vasvari/springboot/idea_advanced_settings1.png)

@tab Complier

![Build project automatically.](/assets/images/vasvari/springboot/idea_advanced_settings2.png)

:::

### Naplózás és problémamegoldás

A naplózás használható az alkalmazás folyamatának megfigyelésére és ez egy jó módja annak, hogy rögzítsük a programkódban bekövetkező váratlan hibákat.



A __Spring Boot__ starter csomag a `Logback`-et biztosítja, amelyet naplózásra használhatunk bármilyen konfiguráció nélkül. Az alábbi mintakód bemutatja, hogyan lehet használni a naplózást. A `Logback` a __Simple Logging Facade for Java__ (__SLF4J__) -t használja natív interfészként:

```java{3-4,11-13,18}
package org.vasvari.demo;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication {

	private static final Logger logger = LoggerFactory.getLogger(
			DemoApplication.class
	);

	public static void main(String[] args) {
		// After adding this comment the application is restarted
		SpringApplication.run(DemoApplication.class, args);
		logger.info("Application started");
	}

}
```


A `logger.info()` metódus egy naplóüzenetet ír ki a konzolra. A naplóüzeneteket a konzolon a projekt futtatása után, ahogy az a következő képernyőképen láthatjuk:


![__12. ábra:__ Spring Boot konzol log.](/assets/images/vasvari/springboot/idea6.png)


Hét különböző naplózási szint létezik: `TRACE`, `DEBUG`, `INFO`, `WARN`, `ERROR`, `FATAL` és `OFF`. A naplózási szintet konfigurálhatjuk a __Spring Boot__ `application.properties` fájlban. A fájlt a projekt `/resources` mappájában találjuk, ahogyan az alábbi képernyőképen láthatjuk:

![__13. ábra:__ application.properties fájl.](/assets/images/vasvari/springboot/idea7.png)

Ha a naplózási szintet `DEBUG`-ra állítjuk, akkor a `DEBUG` vagy annál magasabb szintű naplóüzeneteket láthatjuk (__azaz DEBUG, INFO, WARN és ERROR__). A következő példában a naplózási szintet a root számára állítottuk be, de beállíthatjuk a csomagok szintjén is:

```properties
logging.level.root=DEBUG
```

Most, amikor futtatjuk a projektet, már nem látjuk a `TRACE` üzeneteket. A `TRACE` szint minden részletet tartalmaz, ami nem szükséges, hacsak nincs szükségünk teljes átláthatóságra az alkalmazásunkban történő eseményekkel kapcsolatban. Ez akár lehet egy jó beállítás az alkalmazás fejlesztési verziójához. Az alapértelmezett naplózási szint az `INFO`, ha nem adsz meg más értéket.


Egy gyakori hiba léphet fel, amikor egy __Spring Boot__ alkalmazást futtatunk. A __Spring Boot__ alapértelmezetten az __Apache Tomcat__ (http://tomcat.apache.org/) alkalmazásszervert használja, amely alapértelmezés szerint a `8080`-as porton fut. A portot megváltoztathatjuk az `application.properties` fájlban. A következő beállítás a __Tomcat__-et a `8081`-es porton indítja el:


```properties
server.port=8081
```

Ha a port foglalt, az alkalmazás nem indul el és a következő __APPLICATION FAILED TO START__ üzenetet fogjuk látni a konzolon:

![__14. ábra:__ port foglalt.](/assets/images/vasvari/springboot/idea8.png)

Ha ez történik, akkor le kell állítanunk a `8080`-as porton figyelő folyamatot, vagy más portot kell használnunk a __Spring Boot__ alkalmazásban.


## Összefoglaló

Eddigiekben telepítettük azokat az eszközöket, amelyek a __Spring Boot__ segítségével történő backend-fejlesztéshez szükségesek. A Java fejlesztéshez az __IntelliJ IDEA__-t, egy széles körben használt programozási IDE-t állítottuk be. Létrehoztunk egy új __Spring Boot__ projektet a __Spring Initializr__ oldal segítségével. A projekt létrehozása után importáltuk az __IntelliJ IDEA__-ba és futtattuk. Kitértünk arra is, hogyan lehet megoldani a __Spring Boot__ gyakori problémáit és hogyan lehet megtalálni a fontos hiba- és naplóüzeneteket.
