---
icon: fa-solid fa-5
category:
  - Spring Boot
  - RESTful API
---

# RESTful webes szolgáltatás létrehozása

Webes szolgáltatások olyan alkalmazások, amelyek az interneten keresztül kommunikálnak az _HTTP_ protokoll segítségével. Számos különböző típusú webes szolgáltatás-architektúra létezik, de az alapvető ötlet az összes tervezés során ugyanaz. Ezért létre fogunk hozni egy __RESTful__ webes szolgáltatást ami manapság egy igazán népszerű tervezés.

Először egy vezérlő (__controller__) osztály segítségével fogunk létrehozni egy __RESTful__ webes szolgáltatást, majd később a __Spring Data REST__ segítségével létrehozunk egy olyan __RESTful__ webes szolgáltatást amely automatikusan biztosítja az összes __CRUD__ funkciót és dokumentáljuk azt az __OpenAPI 3__ segítségével.

Az alábbi témákat fogjuk tárgyalni:
- REST alapjai
- RESTful webes szolgáltatás létrehozása a Spring Boot segítségével
- Spring Data REST használata
- RESTful API dokumentálása


## A REST alapjai

A REST (__Representational State Transfer__) egy stratégia webes szolgáltatások létrehozására. A __REST__ sem a programozási nyelvektől, sem a platformoktól nem függ. Különböző programok, mint mobilalkalmazások, böngészők és egyéb szolgáltatások képesek egymással kommunikálni. A __RESTful__ szolgáltatások könnyen skálázhatók, hogy kielégítsék a növekvő keresletet.


A __REST__ nem egy szabvány, hanem a Roy Fielding által meghatározott irányelvek összessége. A irányelvek a következők:
- __Állapotmentesség:__ A szervernek nem szabad információval rendelkeznie a kliens állapotáról.
- __Kliens-szerver függetlenség:__ A kliens és a szerver függetlenül kell működjenek egymástól. A szerver nem küldhet információt a kliens kérése nélkül.
- __Gyorsítótárazhatóság:__ Sok kliens gyakran ugyanazokat a erőforrásokat kéri le, ezért a gyorsítótárazás alkalmazandó az erőforrásokra a teljesítmény javítása érdekében.
- __Egységes interfész:__ Különböző kliensek kéréseinek hasonlónak kell kinézzenek. A kliensek lehetnek például böngészők, Java alkalmazások és mobilalkalmazások.
- __Réteges felépítés:__ Az összetevők hozzáadhatók vagy módosíthatók úgy, hogy az ne befolyásolja az egész szolgáltatást. Ez a megkötés pozitívan hat a rendszer skálázhatóságára.
- __Igényelt kód:__ Ez egy opcionális korlát. A szerver általában statikus tartalmat küld JSON vagy XML formájában. Ez a korlát lehetővé teszi, hogy a szerver végrehajtható kódot küldjön, ha szükséges.


Az egységes interfész, melyet minden __REST__ interfésznek biztosítania kell, alapvetőnek tekinthető minden __REST__ szolgáltatás tervezésekor:
- __Erőforrások azonosítása:__ Az erőforrásokat egyedi azonosítók, például __URI__-k (_Uniform Resource Identifiers_) alapján kell azonosítani webes REST-szolgáltatások esetén.
- __Erőforrás manipuláció reprezentáció által:__ Ha egy kliens rendelkezik egy erőforrás-reprezentációval, beleértve minden csatolt metaadatot, akkor elegendő információnk van az erőforrás módosításához vagy törléséhez a szerverről, feltéve, ha van engedélyünk hozzá. A reprezentáció formátuma általában JSON vagy XML.
- __Önleíró üzenetek:__ Az üzeneteknek tartalmazniuk kell elegendő információt ahhoz, hogy a szerver tudja, hogyan dolgozza fel őket.
- __Hibrid média mint az alkalmazás állapotának motorja (HATEOAS):__ A válaszoknak tartalmazniuk kell linkeket a szolgáltatás más területeire.

## RESTful webes szolgáltatás létrehozása

A Spring Boot keretrendszerben az összes _HTTP_ kérés egy-egy vezérlőosztály (__controller__) által kezelt. Ahhoz, hogy létrehozzunk egy RESTful web szolgáltatást, először létre kell hoznunk egy vezérlőosztályt (__controller__-t). Ezért most egy csomagot fogunk létrehozni a vezérlő (__controller__) számára:

1. A csomagot a gyökércsomag alatt kell létrehozni. A folyamat megkezdéséhez kattintsunk a __org.vasvari.demo__ csomagra a __Project Explorer__-ben, majd jobb egérgombbal kattintva megjelenik egy kontextusmenü. Ebből a menüből válasszuk ki __New | Package__. Az alábbi képernyőképen láthatjuk, hogy hogyan hozzuk létre egy csomagot __controller__ osztályunk számára:

![__1. ábra:__ Új csomag.](/assets/images/vasvari/springboot/controller.png)

2. Ezután létrehozzuk a vezérlő (__controller__) osztályunkat. Az __org.vasvari.demo.controller__ csomagra kattintsunk jobb egérgombbal és válasszuk ki a menüből a __New | Class__ menüpontot.

![__2. ábra:__ Új osztály.](/assets/images/vasvari/springboot/carcontroller.png)

3. Most a projekt struktúrájának a következőképpen kell kinéznie:

![__3. ábra:__ Projekt struktúra.](/assets/images/vasvari/springboot/controller_structure.png)


:::info Ha tévedésből rossz csomagban hozzuk létre osztályainkat, könnyedén áthúzhatjuk a fájlokat a Project Explorerben található csomagok között.
:::

4. Nyissuk meg a vezérlő (__controller__) osztályt és adjuk hozzá a `@RestController` annotációt az osztály definíciója előtt. A `@RestController` annotáció azonosítja, hogy ez az osztály lesz a __RESTful__ szolgáltatás vezérlője:

```java
package org.vasvari.demo.controller;

import org.springframework.web.bind.annotation.RestController;

@RestController
public class CarController {

}
```

5. Ezután hozzáadunk egy új metódust a vezérlő osztályunkon belül. A metódus a `@GetMapping` annotációval látjuk el, amely meghatározza a metódushoz tartozó végpontot. A következő kódrészletben láthatjuk hogy a példában, amikor egy felhasználó __GET__-kérést küld a __/cars__ végpontra, a `getCars()` metódus végrehajtásra kerül:


```java
package org.vasvari.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.vasvari.demo.entity.Car;

@RestController
public class CarController {
    @GetMapping("/cars")
    public Iterable<Car> getCars() {
        //Fetch and return cars
    }
}
```

A `getCars()` metódus visszaadja az összes autóobjektumot, amelyeket a _Jackson_ könyvtár (https://github.com/FasterXML/jackson) automatikusan __JSON objektumok__-ká alakít. A `getCars()` metódus csak a `/cars` végpontról érkező __GET__ kéréseket kezeli, mivel a `@GetMapping` annotációt használjuk. A különböző _HTTP_-metódusokhoz más annotációk is léteznek, mint például a `@GetMapping`, `@PostMapping`, `@DeleteMapping` és így tovább.


6. Ahhoz, hogy vissza tudjuk adni az autókat az adatbázisból, be kell injektálnunk (__injection__) a `CarRepository`-t a vezérlőbe (__controller__). Használhatjuk a `findAll()` metódust, amelyet a __repository__ biztosít az összes autó lekérdezéséhez. A `@RestController` annotációnak köszönhetően az adatok most már __JSON__ formátumban vannak. A következő forráskód mutatja a vezérlő kódját:

```java
package org.vasvari.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.vasvari.demo.entity.Car;
import org.vasvari.demo.repository.CarRepository;

@RestController
public class CarController {
    private final CarRepository repository;
    public CarController(CarRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/cars")
    public Iterable<Car> getCars() {
        return repository.findAll();
    }
}
```

7. Most már készen állunk az alkalmazásunk futtatására és navigáljunk a __localhost:8080/cars__ címre. 
Láthatjuk, hogy valami baj van és az alkalmazás végtelen ciklusba kerülni látszik. Ennek elkerülésére különböző megoldások léteznek. Az egyik lehetőség a `@JsonIgnore` annotáció használata a `Owner` osztály `cars` mezőjén, ami figyelmen kívül hagyja a `cars` mezőt a folyamat során. Emellett a __Hibernate__ által generált mezőket is kihagyhatjuk a `@JsonIgnoreProperties` annotációval:

```java
package org.vasvari.demo.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

import java.util.List;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer","handler"})
public class Owner {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long ownerid;
    private String firstname, lastname;

    @JsonIgnore
    @OneToMany(cascade=CascadeType.ALL, mappedBy="owner")
    private List<Car> cars;

    ...
}
```

8. Most, amikor futtatjuk az alkalmazást és a __localhost:8080/cars__ címre navigálunk, minden a tervezett módon kell, hogy működjön és az összes autót __JSON__ formátumban kell megkapnunk az adatbázisból, ahogyan az alábbi képernyőképen láthatjuk:

![__4. ábra:__ A _GET_ kérés a http://localhost:8080/cars címre.](/assets/images/vasvari/springboot/get_cars_request.png)

:::note A kimeneti képernyőkép eltérhet.
Ha a __Chrome__ böngészőt és a __JSON Viewer__ kiegészítőt használjuk akkor az megkönnyíti a __JSON__ kimenet olvashatóságát. A __JSON Viewer__ ingyenesen letölthető a Chrome Web Áruházból.
:::

Megírtuk az első __RESTful__ webes szolgáltatásunkat. A __Spring Boot__ képességeit kihasználva gyorsan megvalósítottunk egy olyan szolgáltatást, amely visszaadja az adatbázisunkban lévő összes autót. Ez azonban csak a kezdete annak, amit a __Spring Boot__ kínál a robusztus és hatékony __RESTful__ webszolgáltatások létrehozásához.

## Spring Data REST használata

A __Spring Data REST__ (https://spring.io/projects/spring-data-rest) a __Spring Data__ projekt része. Egyszerű és gyors módját kínálja a __RESTful__ webszolgáltatások Spring segítségével történő megvalósításának. A __Spring Data REST__ biztosítja a __HATEOAS__ (_Hypermedia as the Engine of Application State_) támogatást, egy olyan architektúrális elvet, amely lehetővé teszi az ügyfelek (__client__) számára, hogy a __REST API__-ban dinamikusan, hipermédia linkek segítségével navigáljanak. A __Spring Data REST__ olyan eseményeket is biztosít, amelyek segítségével testre szabhatjuk a __REST API__ végpontok üzleti logikáját.

A __Spring Data REST__ használatának megkezdéséhez a következő függőséget kell hozzáadni a __pom.xml__ fájlhoz:

```xml
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-data-rest</artifactId>
</dependency>
```


:::info Ne felejtsük el frissítse a Maven projektünket, miután módosítottuk a pom.xml fájlt.
:::

A __Spring Data REST__ megtalálja az alkalmazás összes nyilvános __repository__-ját és automatikusan létrehozza az entitásainkhoz a __RESTful__ webes szolgáltatásokat. A mi esetünkben két __repository__-nk van: `CarRepository` és `OwnerRepository` ezért a __Spring Data REST__ automatikusan létrehozza a __RESTful__ webszolgáltatásokat ezekhez a __repository__-khoz.

A szolgáltatás végpontját a következőképpen definiálhatjuk az `application.properties` fájlban. Lehet, hogy újra kell indítanunk az alkalmazást a változások életbe lépéséhez:

```properties
spring.data.rest.basePath=/api
```

Most már hozzáférhetünk a __RESTful__ web szolgáltatáshoz a __localhost:8080/api__ végponton keresztül. A szolgáltatás gyökér végpontjának (__/api__) meghívásával visszaadja az elérhető erőforrásokat. A __Spring Data REST__ __JSON__ adatokat ad vissza a __Hypertext Application Language__ (_HAL_) formátumban. A __HAL__ formátum egy konvenciókészletet biztosít a hiperhivatkozások __JSON__-ban történő kifejezésére és megkönnyíti a __RESTful__ webszolgáltatás használatát a _frontend_ fejlesztők számára:

![__5. ábra:__ Spring Boot Data REST erőforrásai.](/assets/images/vasvari/springboot/spring_data_rest1.png)

Láthatjuk, hogy vannak hivatkozások a gépjármű- és tulajdonos-entitás szolgáltatásokra. A __Spring Data REST__ szolgáltatás elérési útja az entitás osztály nevéből származik. A név ezután kisbetűssé válik. Például a gépjármű entitás szolgáltatás elérési útja a `cars` lesz. A `profile` hivatkozás a __Spring Data REST__ által generált és alkalmazás-specifikus metaadatokat tartalmaz. Ha más elérési útnevet szeretnénk használni, a következő példában látható módon használhatjuk a `@RepositoryRestResource` annotációt a __repository__ osztályában:

```java
package org.vasvari.demo.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.vasvari.demo.entity.Car;

@RepositoryRestResource(path="vehicles")
public interface CarRepository extends CrudRepository<Car,Long> {

}
```

Most, ha megnyitjuk a __localhost:8080/api__ végpontot, láthatjuk, hogy a végpont __/cars__-ról __/vehicles__-re változott.

![__6. ábra:__ `/car`-ról `/vehicles`-re.](/assets/images/vasvari/springboot/spring_data_rest2.png)



:::danger Eltávolíthatjuk a különböző elnevezéseket!
Folytassuk az eddigi végpontnévvel, __/cars__.
:::

Most pedig részletesebben megvizsgáljuk a szolgáltatásokat. Több eszköz is rendelkezésre áll a __RESTful__ web szolgáltatások tesztelésére. Mi a __Postman__ (https://www.postman.com/downloads/) asztali alkalmazást használjuk, de használhatnánk olyan eszközt is mint például a __cURL__-t. A __Postman__, asztali alkalmazás vagy böngésző-bővítményként szerezhető be. A __cURL__ is elérhető Windows rendszerre a __Windows Ubuntu Bash__ (_Windows Subsystem for Linux, WSL_) használatával.

Ha a __/cars__ végpontra (http://localhost:8080/api/cars) a __GET__ kérést küldünk, akkor az összes autót lista formájában kapjuk meg, ahogy az a következő képernyőképen látható:

![__7. ábra:__ Autók lekérése.](/assets/images/vasvari/springboot/spring_data_rest3.png)

A __JSON__ válaszból látható, hogy van egy autók tömb és mindegyik autó tartalmaz autóspecifikus adatokat. Az összes autónak van egy `_links` attribútuma is, amely hivatkozások gyűjteménye és ezekkel a hivatkozásokkal hozzáférhetünk az autóhoz vagy az autó tulajdonosához. 

Egy konkrét autóhoz való hozzáféréshez az elérési útvonal http://localhost:8080/api/cars/{id} lesz.

A http://localhost:8080/api/cars/3/owner címre küldött __GET__ kérés visszaadja az __3__-as azonosítójú autó tulajdonosát. 

A válasz most tartalmazza a tulajdonos adatait, egy linket a tulajdonoshoz, valamint linkeket a tulajdonos más autóihoz. A __Spring Data REST__ szolgáltatás biztosítja az összes __CRUD__ műveletet. 

A következő táblázat bemutatja, hogy mely _HTTP_ metódusokat használhatunk különböző __CRUD__ műveletekhez:

| HTTP Method |  CRUD  |
|:-----------:|:------:|
|     POST    | Create |
|     GET     |  Read  |
|  PUT/PATCH  | Update |
|    DELETE   | Delete |

Most megnézzük, hogy hogyan törölhetünk egy autót az adatbázisból a __RESTful__ webszolgáltatás segítségével. A törlési műveletben a __DELETE__ metódust és a törlendő autóra mutató linket (http://localhost:8080/api/cars/{id}) kell használnunk.

A következő képernyőkép azt mutatja, hogy __Postman__ asztali alkalmazás segítségével hogyan törölhetünk. A __Postman__-ben ki kell választanunk a megfelelő _HTTP_-metódust a legördülő listából, meg kell adnunk a kérés __URL__-címét, majd a __Send__ gombra kell kattintanunk:

![__8. ábra:__ DELETE kérés az autó törlésére.](/assets/images/vasvari/springboot/postman1.png)

A __Postman__-ben látni fogjuk a válasz státuszát, amely __200 OK__. A sikeres __DELETE__ kérés után azt is észrevehetjük, hogy most már csak két autó van az adatbázisban, ha __GET__ kérést küldünk a http://localhost:8080/api/cars/ végpontra. 

:::danger 404 Not Found
Ha a __DELETE__ válaszban a __404 Not Found__ státuszkódot kapjuk, ellenőrizzük, hogy olyan azonosítót használunk-e, amely még létezik az adatbázisunkban.
:::

Amikor új autót szeretnénk hozzáadni az adatbázishoz, a __POST__ metódust kell használnunk és a kérés __URL__-je http://localhost:8080/api/cars lesz. A fejlécnek tartalmaznia kell a __Content-Type__ mezőt az __application/json__ értékkel és az új autó objektumot a __Request Body__ kell beágyazni __JSON__ formátumban.

Itt van egy autó példa:

```json
{
  "brand":"Toyota",
  "model":"Corolla",
  "color":"silver",
  "registrationNumber":"BBA-3122",
  "modelYear":2023,
  "price":38000
}
```

Ha a __Postman__ alkalmazásban a __Body__ fülre kattintunk és ott kiválasztjuk a __raw__ lehetőséget, akkor a __Body__ fül alatt begépelhetjük az új autót (_JSON formátumban_). Válasszuk ki a lenyíló menüből a __JSON__ lehetőséget. 

![__9. ábra:__ JSON formátum.](/assets/images/vasvari/springboot/postman2_0.png)

:::note A Headers beállítása, ha nem történne meg automatikusan...

A fejlécet is be kell állítanunk a __Postman__ __Headers__ fülére kattintva. A __Postman__ automatikusan hozzáad néhány fejlécet a kérés kiválasztása alapján. Ellenőrizzük, hogy a __Content-Type__ fejléc szerepel-e a listában és az értéke helyes-e (__application/json__). Ha nem létezik, akkor kézzel kell hozzáadnunk. Az automatikusan hozzáadott fejlécek alapértelmezés szerint elrejtve lesznek, de ezeket a _hidden_ gombra kattintva láthatóvá tehetjük. 

![__10. ábra:__ POST kérés fejlécei.](/assets/images/vasvari/springboot/postman2_1.png)

:::

A válasz egy újonnan létrehozott autó objektumot küld vissza és a státusz kódja __201 Created__ lesz, ha minden rendben ment. 

![__11. ábra:__ POST kérés az új autó hozzáadásához.](/assets/images/vasvari/springboot/postman2.png)

Most, ha újra __GET__ kérést küldünk a http://localhost:8080/api/cars útvonalra, látni fogjuk, hogy az új autó létezik az adatbázisban.

Az entitások frissítéséhez használjuk a __PATCH__ metódust és a frissíteni kívánt autóra mutató linket (http://localhost:8080/api/cars/{id}). A fejlécnek tartalmaznia kell a __Content-Type__ mezőt __application/json__ értékkel, a __Body__-n belül pedig a módosított adatokat tartalmazó autó objektumot adjuk meg.


:::info Ha PATCH-et használunk, csak a frissíteni kívánt mezőket kell elküldenünk. Ha viszont PUT-ot használunk, akkor az összes mezőt el kell küldenünk.
:::

Szerkesszük meg az előző példában létrehozott autót és változtassuk meg a színét fehérre. __PATCH__-et használunk, így csak a szín tulajdonságot tartalmazza:

```json
{
  "color": "white"
}
```

A __Postman__ kérését a következő képernyőképen láthatjuk (__megjegyzés:__ _a fejlécet a POST példájához hasonlóan állítottuk be és az autó azonosítóját használjuk az URL-ben_):

![__12. ábra:__ PATCH kérés a meglévő autó frissítésére.](/assets/images/vasvari/springboot/postman3.png)

Ha a frissítés sikerült, a válasz státusz kódja __200 OK__ lesz. Ha most lekérjük a frissített autót egy __GET__ kérés segítségével, látni fogjuk, hogy a szín frissítésre került.

Következő lépésként egy tulajdonost fogunk hozzárendelni az új autóhoz, amit éppen létrehoztunk. Ehhez használjuk a __PUT__ metódust és a http://localhost:8080/api/cars/{id}/owner elérési utat.
Ebben a példában az új autó azonosítója __4__, tehát a hivatkozásunk így néz ki: http://localhost:8080/api/cars/4/owner. __Body__ tartalma most egy tulajdonoshoz lesz kapcsolva, például http://localhost:8080/api/owners/1.

![__13. ábra:__ PUT kérés az Owner frissítésére.](/assets/images/vasvari/springboot/postman4.png)

A fejlécek __Content-Type__ értéke ebben az esetben __text/uri-list__ kell, hogy legyen. Ezután kattintsunk a __Send__ gombra:

![__14. ábra:__ Content-Type beállítása.](/assets/images/vasvari/springboot/postman5.png)


:::danger Ha nem tudnánk módosítani az automatikusan hozzáadott fejlécet, akkor letilthatjuk azt a jelölőnégyzet segítségével. Ezután adjunk hozzá egy újat, ahogy a fenti képen látható.
:::

Végül __GET__ kérés segítségével látnunk kell, hogy a tulajdonos kapcsolódik az autóhoz.

Korábban lekérdezéseket hoztunk létre az __repository__-hoz. Ezeket a lekérdezéseket bele is foglalhatjuk a szolgáltatásunkba. A lekérdezések létrehozásához hozzá kell adnunk a `@RepositoryRestResource` annotációt a __repository__ osztályhoz. A lekérdezési paramétereket a `@Param` annotációval látjuk el. Az alábbi forráskód a `CarRepository`-t mutatja be ezekkel az annotációkkal:

```java
package org.vasvari.demo.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.vasvari.demo.entity.Car;

import java.util.List;

@RepositoryRestResource
public interface CarRepository extends CrudRepository<Car,Long> {
    // Fetch cars by brand
    List<Car> findByBrand(@Param("brand") String brand);
    // Fetch cars by color
    List<Car> findByColor(@Param("color") String color);
}
```

Most, ha __GET__ kérést küldünk a http://localhost:8080/api/cars útvonalra, láthatjuk, hogy van egy új végpont, ami a __/search__ nevet viseli. A http://localhost:8080/api/cars/search útvonal hívása az alábbi választ adja vissza:

![__15. ábra:__ REST lekérdezések.](/assets/images/vasvari/springboot/spring_data_rest4.png)

A válaszból látható, hogy mindkét lekérdezés most elérhető a szolgáltatásunkban. A következő __URL__ bemutatja, hogyan lehet lekérdezni az autókat márkájuk szerint: http://localhost:8080/api/cars/search/findByBrand?brand=Ford. Az eredmény csak a __Ford__ márkájú autókat fogja tartalmazni.

Ennek a fejezetnek a kezdetén bemutattuk a __REST__ elveket és láthattuk, hogy __RESTful API__-nk több aspektusban is megfelel a __REST__ specifikációnak. __Állapotmentes__ és különböző kliensekből érkező kérések ugyanúgy néznek ki (__Egységes interfész__). A válasz tartalmaz hivatkozásokat, amelyekkel lehet navigálni a kapcsolódó erőforrások között. __RESTful API__-nk __URI__-struktúrát biztosít, amely tükrözi az adatmodellt és az erőforrások közötti kapcsolatot. Tehát létrehoztuk a __RESTful API__-t a backendünkhöz.

## RESTful API dokumentálása

A __RESTful API__-t megfelelően dokumentálni kell, hogy a fejlesztők megértsék annak funkcionalitását és viselkedését. A dokumentációnak tartalmaznia kell, hogy mely végpontok érhetők el, milyen adatformátumokat fogad el, valamint hogyan lehet az __API__-val interakcióba lépni.

Az __OpenAPI 3__ könyvtárat fogjuk használni a __Spring Boot__-hoz (https://springdoc.org) az automatikus dokumentáció generálásához. Az __OpenAPI Specification__ (_korábban Swagger Specification_) egy __API__ leírási formátum a __RESTful API__-khoz. 

:::note Más alternatívák is léteznek,
például a RAML (https://raml.org/), amit szintén lehet használni.
:::

Dokumentálhatjuk __REST API__-inkat más eszközökkel is, de több manuális munkát igényelnek. Az __OpenAPI__ könyvtár használata automatizálja ezt a munkát, így Mi a fejlesztésre összpontosíthatunk.

A következő lépések bemutatják, hogyan készíthetünk dokumentációt a __RESTful API__-hoz:

1. Először is hozzá kell adnunk az __OpenAPI__ könyvtárat a __pom.xml__ fájlunkhoz:

```xml
<dependency>
    <groupId>org.springdoc</groupId>
    <artifactId>springdoc-openapi-starter-webmvc-ui</artifactId>
    <version>2.3.0</version>
</dependency>
```

2. Következő lépésként létrehozunk egy konfigurációs osztályt a dokumentációnkhoz. Hozzunk létre egy új osztályt `OpenApiConfig` néven az alkalmazás __org.vasvari.demo__ csomagjában. Az alábbiakban látható a konfigurációs osztály kódja, ahol például beállíthatjuk a __REST API__ _címét_, _leírását_ és _verzióját_. A `info()` módszert használhatjuk ezeknek az értékeknek a meghatározásához:

```java
package org.vasvari.demo;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;

@Configuration
public class OpenApiConfig {
    @Bean
    public OpenAPI carDatabaseOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("Car REST API")
                        .description("My car stock")
                        .version("1.0"));
    }
}
```

Az `application.properties` fájlban definiálhatjuk a dokumentációnk útvonalát. Emellett engedélyezhetjük a __Swagger UI__-t (https://swagger.io/tools/swagger-ui/), egy felhasználóbarát eszközt a __RESTful API__-k vizualizálására. Adjuk hozzá a következő beállításokat az `application.properties` fájlhoz:

```properties
springdoc.api-docs.path=/api-docs
springdoc.swagger-ui.path=/swagger-ui.html
springdoc.swagger-ui.enabled=true
```

Most már készen állunk a programunk futtatására. Amikor az alkalmazás fut, navigáljunk a http://localhost:8080/swagger-ui.html oldalra és ott látni fogja a __Swagger UI__ által megjelenített dokumentációt, ahogyan az alábbi képernyőképen látható:

![__16. ábra:__ Car RESTful API dokumentációja.](/assets/images/vasvari/springboot/swagger.png)


Láthatjuk az összes elérhető végpontot a __RESTful API__-ban. Ha bármelyik végpontot megnyitjuk, akár ki is próbálhatjuk azokat a __Try it out__ gomb megnyomásával. A dokumentáció elérhető ___JSON___ formátumban is a http://localhost:8080/api-docs címen.

Most, hogy dokumentációt biztosítottunk a __RESTful API__-hoz, a fejlesztők számára sokkal könnyebb lesz használni azt.

:::warning Hamarosan biztonságossá tesszük a RESTful API-nkat, ami megakadályozza a Swagger UI-hoz való hozzáférést. A hozzáférés engedélyezhető a biztonsági konfiguráció módosításával (/api-docs/** és /swagger-ui/** utak engedélyezésével).
:::

## Összefoglaló

Összefoglalva, egy __RESTful__ web szolgáltatást hoztunk létre a __Spring Boot__ segítségével. Először létrehoztunk egy vezérlőt és egy olyan metódust, amely az összes autót __JSON__ formátumban adja vissza. Ezután a __Spring Data REST__-et használtuk egy webes szolgáltatás létrehozásához az összes __CRUD__ funkcionalitással. Bemutattuk a különböző típusú kéréseket, amelyekre szükség van a létrehozott szolgáltatás __CRUD__ funkcióinak használatához. Beleértve saját lekérdezéseinket is a __RESTful__ web szolgáltatásban. Végül megtanultuk, hogyan dokumentálhatjuk megfelelően az __API__-t az __OpenAPI 3__ segítségével. A következőkben programunkat a __Spring Security__ használatával biztonságossá tesszük. Megtanuljuk, hogyan védhetjük meg az adatainkat az azonosítás implementálásával. Ezután csak azonosított felhasználók fognak hozzáférni a __RESTful API__ erőforrásaihoz.

![__17. ábra:__ 😧](/assets/images/vasvari/springboot/surprised.jpg)