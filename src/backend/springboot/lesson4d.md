---
icon: fa-solid fa-4
category:
  - Spring Boot
  - RESTful API
---

# A JPA használata

A __Jakarta Persistence API__ (_JPA_) használatát nézzük meg a Spring Boot segítségével valamint azt, hogy hogyan definiálhatunk adatbázist az entitás osztályok segítségével. Az első körben a __H2__ adatbázist fogjuk használni. A __H2__ egy memórián belüli __SQL__ adatbázis, amely gyors fejlesztésre vagy demonstrációs célokra jó. Második körben pedig a __CRUD repository__-k és a táblák közötti egy a többhöz (__one-to-many__) kapcsolat létrehozását nézzük meg.


## Az ORM, JPA és Hibernate alapjai

Az __ORM__ és a __JPA__ széles körben alkalmazott technikák a szoftverfejlesztésben, a relációs adatbázisok kezelésére. Nem kell bonyolult __SQL__ lekérdezéseket írnunk, helyette objektumokkal dolgozhatunk - ami természetesebb Java fejlesztőként. Így az __ORM__ és a __JPA__ felgyorsíthatja a fejlesztési folyamatot - az __SQL__ kód írására és hibakeresésére fordított idő csökkentésével. __JPA__ implementáció képes automatikusan létrehozni egy adatbázissémát a __Java entitás osztályok__ alapján. 

:::note Röviden
- Az __Object-Relational Mapping__ (_ORM_) olyan technika, amely lehetővé teszi egy adatbázisból történő adatlekérdezést és manipulációt objektumorientált programozási paradigma felhasználásával. Az __ORM__ kifejezetten előnyös a fejlesztők számára, mert az objektumorientált koncepciókra támaszkodik nem pedig az adatbázis-struktúrákra. Gyorsítja a fejlesztést és csökkenti a forráskód mennyiségét. Az __ORM__ túlnyomó részt független az adatbázisoktól és a fejlesztőknek nem kell aggódniuk a specifikus __SQL__ utasítások miatt.

- A __Jakarta Persistence API__ (_JPA_, korábban _Java Persistence API_) objektum-relációs leképezést biztosít a Java fejlesztők számára. A __JPA__ entitása egy olyan Java osztály, amely reprezentálja egy adatbázistábla struktúráját. Az entitás osztály mezői a táblák oszlopait reprezentálják.

- A __Hibernate__ a legnépszerűbb Java-alapú __JPA__ implementáció és a _Spring Boot_ alapértelmezetten használja. __Hibernate__ egy kiforrott termék és széles körben használják nagyméretű alkalmazásokban.
:::

A következő lépésben elkezdjük megvalósítani az első entitás osztályunkat az __H2__ adatbázis használatával.

## Entitás osztályok létrehozása

Az entitás osztály egy egyszerű Java osztály, amelyet a __JPA__ `@Entity` annotációval látunk el. Az entitás osztályok a szabványos elnevezési konvenciót használják és megfelelő _getter_ és _setter_ metódusokkal rendelkeznek. Az osztály mezői __privát__ láthatósággal rendelkeznek.

A __JPA__ az alkalmazás inicializálásakor létrehoz egy, az osztállyal azonos nevű adatbázis táblát. Ha más nevet szeretnénk használni az adatbázisunk táblájához, a __JPA__ `@Table` annotációját használva tehetjük meg.

Most pedig a __H2__ adatbázist fogjuk használni (https://www.h2database.com/), amely egy beágyazott memóriába épített adatbázis. Ahhoz, hogy a __JPA__-t és a __H2__ adatbázist használni tudjuk a következő függőségeket kell hozzáadnunk a `pom.xml` fájlhoz:

```xml
<dependency>
      <groupId>com.h2database</groupId>
      <artifactId>h2</artifactId>
      <scope>runtime</scope>
</dependency>

<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>
```

![__1. ábra:__ Miután frissítettük a `pom.xml` fájlt, frissítsük a függőségeket az __IntelliJ IDEA__-ban. (__Ctrl+Shift+O__)](/assets/images/vasvari/springboot/maven1.png)

vagy

![__2. ábra:__ Amennyiben megjelenik a `pom.xml`-ben.](/assets/images/vasvari/springboot/maven2.png)

A projekt függőségeit a __Project Explorer__-en belül az __External Libraries__ találhatjuk meg. Most már látnunk kell ott a _spring-boot-starter-data-jpa_ és a _h2_ függőségeket.


Nézzük meg a következő lépéseket az entitás osztályok létrehozásához:

1. Ahhoz, hogy entitási osztályt hozzunk létre a Spring Bootban, létre kell hoznunk egy csomagot az entitásunkk számára. A csomagot a gyökércsomag alatt kell létrehozni. A folyamat megkezdéséhez kattintsunk az __org.vasvari.demo__ csomagra a __Project Explorer__-ben, majd jobb egérgombbal kattintva megjelenik egy kontextusmenü.


2. Ebből a menüből válasszuk ki __New__ | __Package__. Az alábbi képernyőképen láthatjuk, hogy hogyan hozzunk létre egy csomagot entitás osztályok számára:

![__3. ábra:__ Új csomag létrehozása](/assets/images/vasvari/springboot/package.png)

3. A csomagunkat __org.vasvari.demo.entity__-nek fogjuk nevezni:

![__4. ábra:__ org.vasvari.demo.entity](/assets/images/vasvari/springboot/package_name.png)

4. Ezután létrehozzuk az entitás osztályunkat. Az __org.vasvari.demo.entity__ csomagra kattintsunk jobb egérgombbal és válasszuk ki a menüből a __New__ | __Class__ menüpontot.

![__5. ábra:__ Új osztály létrehozása](/assets/images/vasvari/springboot/class.png)

5. Mivel egy autós adatbázist fogunk létrehozni, az entitás osztály neve __Car__ lesz. Írjuk be a _Name_ mezőbe a __Car__ szót, majd nyomjuk meg az _Enter_ gombot, ahogy az a következő képernyőképen látható:

![__6. ábra:__ Car](/assets/images/vasvari/springboot/class_name.png)

6. Automatikusan megnyílik a létrehozott __Car__ osztály a szerkesztőben. Annotáljuk az `@Entity` annotációval. Az `@Entity` annotációt a `jakarta.persistence` csomagból importáljuk:

```java{3,5}
package org.vasvari.demo.entity;

import jakarta.persistence.Entity;

@Entity
public class Car {

}
```

:::info Automatikus importálás bekapcsolása

Azért, hogy a jövőben elkerüljük az egyesével történő importálást, rendelkezünk egy beállítási lehetőséggel, melyet aktiválnunk kell. A beállításoknál a keresőbe írjuk be, hogy "__auto import__" és megjelenik számunkra az "__Add unambiguous imports on the fly__" opciót.

![__7. ábra:__ Add unambiguous imports on the fly](/assets/images/vasvari/springboot/auto_import.png)
:::

7. Ezután hozzá kell adnunk néhány mezőt az osztályunkhoz. Az entitás osztály mezőit, az adatbázis tábla oszlopaihoz rendeljük. Az entitás osztálynak tartalmaznia kell egy egyedi azonosítót is, amelyet elsődleges kulcsként használunk az adatbázisban:


```java{4-6,10-12,14,16}
package org.vasvari.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Car {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;

    private String brand, model, color, registrationNumber;

    private int modelYear, price;
}
```

Az elsődleges kulcsot a `@Id` annotáció használatával határozzuk meg. A `@GeneratedValue` annotációval az azonosítót az adatbázisunkhoz automatikusan generáljuk. Itt lehetőségünk nyílik arra, hogy meghatározzuk a kulcsgenerálási stratégiánkat is. Az `AUTO` típus azt jelenti, hogy a __JPA__ választja ki a legjobb stratégiát az adott adatbázishoz és ez az alapértelmezett generálási típus is. Összetett elsődleges kulcsot úgy hozhatunk létre, hogy több attribútumot is annotálunk a `@Id` annotációval.

Az adatbázis oszlopai alapértelmezés szerint az osztálymezők elnevezési konvencióinak megfelelően vannak elnevezve. Ha más elnevezési konvenciót szeretnénk használni, használhatjuk a `@Column` annotációt. A `@Column` annotációval meghatározhatjuk az oszlop hosszát és azt, hogy az oszlop __null__ lehet-e. __Az alábbi kód egy példát mutat__ a `@Column` annotáció használatára. Ebben az esetben az oszlop neve az adatbázisban __explanation__ az oszlop hossza __512__ és nem lehet __null__:

```java
@Column(name="explanation", nullable=false, length=512)
private String description;
```

8. Végül hozzá kell adnunk gettereket, settereket, egy üres konstruktort, valamint egy konstruktorokat paraméterrel az entitás osztályhoz. Az automatikus azonosító generálás miatt nem szükséges az __ID__ mezőt felvennünk a konstruktorunkba. A `Car` entitás osztály konstruktorainak forráskódja a következő:

```java
package org.vasvari.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Car {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;
    private String brand, model, color, registrationNumber;
    private int modelYear, price;

    public Car() {
    }

    public Car(String brand, String model, String color, String registrationNumber, int modelYear, int price) {
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.registrationNumber = registrationNumber;
        this.modelYear = modelYear;
        this.price = price;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getRegistrationNumber() {
        return registrationNumber;
    }

    public void setRegistrationNumber(String registrationNumber) {
        this.registrationNumber = registrationNumber;
    }

    public int getModelYear() {
        return modelYear;
    }

    public void setModelYear(int modelYear) {
        this.modelYear = modelYear;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }
}
```

9. Az `application.properties` fájlhoz új tulajdonságokat is hozzá kell adnunk. Ez lehetővé teszi számunkra, hogy naplózzuk az __SQL__ utasításokat a konzolon. Emellett meg kell határoznunk az adatforrás __URL__-jét is. Nyissuk meg az `application.properties` fájlt, majd adjuk hozzá az alábbi két sort a fájlhoz:

```properties
spring.datasource.url=jdbc:h2:mem:testdb
spring.jpa.show-sql=true
```

:::info Az application.properties fájl szerkesztésekor ügyelnünk kell arra, hogy a sorok végén ne legyenek extra szóközök. Ellenkező esetben a beállítások nem fognak működni. Ez a beállítások másolásakor / beillesztésekor fordulhat elő.
:::


10. Most a __Car__ tábla létrejön az adatbázisban, amikor futtatjuk az alkalmazást. Ezen a ponton láthatjuk a konzolon a tábla létrehozására vonatkozó utasításokat:

![__8. ábra:__ Car tábla SQL utasításai](/assets/images/vasvari/springboot/car_jpa.png)

:::warning Ha a spring.datasource.url nincs definiálva az alkalmazásban.

Ha a `properties` fájlban nincs megadva, akkor a Spring Boot egy véletlenszerű adatforrás __URL__-t hoz létre, amelyet az alkalmazás futtatásakor a konzolon láthatjuk:

```console
H2 console available at '/h2-console'. Database available at 'jdbc:h2:mem:23789df5-13e5-4d76-b83c-2f90c8eaa1d6'
```
:::

11. A __H2__ adatbázis egy webalapú konzolt biztosít, amely az adatbázis áttekintésére és __SQL__ utasítások végrehajtására használhatunk. A konzol engedélyezéséhez a következő sorokat kell hozzáadnunk az `application.properties` fájlhoz. Az első beállítás engedélyezi a __H2__ konzolt, míg a második meghatározza annak elérési útvonalát:

```properties
spring.h2.console.enabled=true
spring.h2.console.path=/h2-console
```

A __H2__-konzolhoz úgy férhetünk hozzá, hogy elindítjuk az alkalmazást és a webböngészőnk segítségével a __localhost:8080/h2-console__ címre navigálunk. Használjuk a __jdbc:h2:mem:testdb__ JDBC URL-t és üresen hagyjuk a _Password_ mezőt a _Login_ ablakban. Nyomjuk meg a _Connect_ gombot a konzolba való bejelentkezéshez, ahogy azt a következő képernyőképen láthatjuk:

![__9. ábra:__ H2 console belépés](/assets/images/vasvari/springboot/h2_1.png)


:::warning A H2 adatbázisunk felhasználónevét és jelszavát az application.properties fájlban a következő beállításokkal is megváltoztathatjuk: spring.datasource.username és spring.datasource.password.
:::

Most már láthatjuk a __Car__ táblát az adatbázisban. Észrevehetjük, hogy bizonyos szavak között alsókötőjel található. Az alsókötőjel oka az attribútum (`registrationNumber`) kisbetűvel kezdődő elnevezési konvenciója, az úgynevezett _camel case_ elnevezés.

![__10. ábra:__ H2 console](/assets/images/vasvari/springboot/h2_2.png)

Most létrehoztuk az első entitás osztályunkat és megtanultuk, hogyan generálunk a __JPA__-val egy adatbázis táblát az entitás osztályból. Ezután létrehozunk egy `repository` osztályt, amely __CRUD__ műveleteket biztosítja.


## CRUD repositoryk létrehozása

A __Spring Boot Data JPA__ `CrudRepository` interfészt biztosítja a _Create_, _Read_, _Update_ és _Delete_ (__CRUD__) műveletekhez. Ez biztosítja a __CRUD__ funkciókat az entitás (__entity__) osztályunk számára.

Hozzunk létre egy új csomagot `repository` néven az __org.vasvari.demo__ csomagban az alábbiak szerint:

1. Hozzuk létre egy új `CarRepository` nevű interfészt az __org.vasvari.demo.repository__ csomagban és módosítsuk a fájlt az alábbi kódrészlet szerint:

```java
package org.vasvari.demo.repository;

import org.springframework.data.repository.CrudRepository;
import org.vasvari.demo.entity.Car;

public interface CarRepository extends CrudRepository<Car,Long> {

}
```

A `CarRepository` mostantól a __Spring Boot JPA__ `CrudRepository` interfészét bővíti ki. A `<Car, Long>` típusú argumentumok definiálják, hogy ez a `Car` entitás osztály repositoryja és hogy az __ID__ mező típusa `Long`.

A `CrudRepository` interfész több __CRUD__ metódust is biztosít, amelyeket most már elkezdhetünk használni. A következő táblázat a leggyakrabban használt metódusokat sorolja fel:



|                 Metódus                 |                 Leírás                     |
|:---------------------------------------:|:------------------------------------------:|
|              `long count()`             |       Visszaadja az entitások számát       |
|         `Iterable<T> findAll()`         | Visszaadja az adott típusú összes elemet   |
|        `Optional findById(ID Id)`       | Egy elemet ad vissza az ID alapján         |
|         `void delete(T entity)`         |              Egy entitás törlése           |
|           ` void deleteAll()`           |  Törli az összes entitást a repositoryból  |
|      `<S extends T> save(S entity)`     |               Egy entitás mentése          |
| `List<S> saveAll(Iterable<S> entities)` |           Több entitás mentése             |



Ha a metódus csak egy elemet ad vissza, akkor az `Optional<T>` lesz a visszaadott típus, nem pedig a __T__. Az `Optional` osztályt a _Java 8 SE_-ben vezették be és egy olyan típusú egyértékű tároló, amely vagy tartalmaz egy értéket, vagy nem. Ha van érték, akkor az `isPresent()` metódus _true_-t ad vissza és a `get()` metódus segítségével megkaphatjuk azt, ellenkező esetben _false_-t ad vissza. Az `Optional` használatával megelőzhetjük a _null pointer_ kivételeket. A _null pointerek_ váratlan és gyakran nem kívánatos viselkedéshez vezethetnek a Java programokban.

A `CarRepository` osztály hozzáadása után a projekt szerkezetének a következőképpen kell kinéznie:

![__11. ábra:__ Projekt struktúra](/assets/images/vasvari/springboot/project_status.png)

2. Most már készen állunk néhány adat hozzáadására az __H2__ adatbázisunkba. Ehhez a __Spring Boot__ `CommandLineRunner` interfészt fogjuk használni. A `CommandLineRunner` interfész lehetővé teszi számunkra, hogy további kódot hajtsunk végre, mielőtt az alkalmazás teljesen elindulna. Ezért jó pont ahhoz, hogy demonstrációs adatokat adjunk hozzá az adatbázisunkhoz. A __Spring Boot__ alkalmazás főosztálya implementálja a `CommandLineRunner` interfészt. Tehát meg kell valósítanunk a `run` metódust, ahogy azt az alábbi __DemoApplication.java__ kódban láthatjuk:


```java
package org.vasvari.demo;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication implements CommandLineRunner {

	private static final Logger logger = LoggerFactory.getLogger(
			DemoApplication.class
	);

	public static void main(String[] args) {
		// After adding this comment the application is restarted
		SpringApplication.run(DemoApplication.class, args);
		logger.info("Application started");
	}

	@Override
	public void run(String... args) throws Exception {

	}
}
```

Ezután be kell injektálnunk az `CarRepository`-t a főosztályba, hogy új autó objektumokat tudjunk menteni az adatbázisunkba. A `CarRepository` beinjektálásához konstruktor injection-t használunk:

```java{19,21-23}
package org.vasvari.demo;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.vasvari.demo.entity.Car;
import org.vasvari.demo.repository.CarRepository;

@SpringBootApplication
public class DemoApplication implements CommandLineRunner {

	private static final Logger logger = LoggerFactory.getLogger(
			DemoApplication.class
	);

	private final CarRepository repository;

	public DemoApplication(CarRepository repository) {
		this.repository = repository;
	}

	public static void main(String[] args) {
		// After adding this comment the application is restarted
		SpringApplication.run(DemoApplication.class, args);
		logger.info("Application started");
	}

	@Override
	public void run(String... args) throws Exception {
		
	}
}
```

Amint beinjektáltuk a __repository__ osztályt, használhatjuk a __CRUD__ (_Create_, _Read_, _Update_, _Delete_) metódusokat a `run` metódusban. Az alábbi példa kód bemutatja, hogyan lehet néhány autót beszúrni az adatbázisba a `save` metódus segítségével. Emellett a __repository__ `findAll()` metódusát is fel fogjuk használni, hogy az összes autót lekérjük az adatbázisból és a __logger__ segítségével kiírjuk őket a konzolra:

```java
package org.vasvari.demo;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.vasvari.demo.entity.Car;
import org.vasvari.demo.repository.CarRepository;

@SpringBootApplication
public class DemoApplication implements CommandLineRunner {

	private static final Logger logger = LoggerFactory.getLogger(
			DemoApplication.class
	);

	private final CarRepository repository;

	public DemoApplication(CarRepository repository) {
		this.repository = repository;
	}

	public static void main(String[] args) {
		// After adding this comment the application is restarted
		SpringApplication.run(DemoApplication.class, args);
		logger.info("Application started");
	}

	@Override
	public void run(String... args) throws Exception {
		repository.save(new Car("Ford", "Mustang", "Red","ADF-1121", 2023, 59000));
		repository.save(new Car("Nissan", "Leaf", "White","SSJ-3002", 2020, 29000));
		repository.save(new Car("Toyota", "Prius","Silver", "KKO-0212", 2022, 39000));
		// Fetch all cars and log to console
		for (Car car : repository.findAll()) {
			logger.info("brand: {}, model: {}",
					car.getBrand(), car.getModel());
		}
	}
}
```

A naplózások és az általunk beszúrt autók a konzolban láthatóak, miután az alkalmazás végrehajtásra került:

![__12. ábra:__ Beszúrási utasítások](/assets/images/vasvari/springboot/h2_insert_data.png)

Most már használhatjuk az __H2__ konzolt az autók lekérdezéséhez, ahogyan az alábbi képernyőképen látható:

![__13. ábra:__ H2 console: SELECT * FROM](/assets/images/vasvari/springboot/h2_console_select.png)

Lekérdezéseket definiálhatunk a Spring Data `repository`-kban. Egy lekérdezésnek el kell kezdődnie egy előtaggal, például a `findBy`-al. Az előtag után meg kell határoznunk az entitás osztály mezőit, amelyeket a lekérdezésben használunk. Az alábbiakban három egyszerű lekérdezéshez tartozó mintakódot láthatunk:

```java
package org.vasvari.demo.repository;

import org.springframework.data.repository.CrudRepository;
import org.vasvari.demo.entity.Car;

import java.util.List;

public interface CarRepository extends CrudRepository<Car,Long> {
    // Fetch cars by brand
    List<Car> findByBrand(String brand);

    // Fetch cars by color
    List<Car> findByColor(String color);

    // Fetch cars by model year
    List<Car> findByModelYear(int modelYear);
}

```

Több mező is lehet a __By__ kulcsszó után, amelyeket az __And__ és __Or__ kulcsszavakkal összefűzhetünk:


```java
package org.vasvari.demo.repository;

import org.springframework.data.repository.CrudRepository;
import org.vasvari.demo.entity.Car;

import java.util.List;

public interface CarRepository extends CrudRepository<Car,Long> {
    // Fetch cars by brand and model
    List<Car> findByBrandAndModel(String brand, String model);

    // Fetch cars by brand or color
    List<Car> findByBrandOrColor(String brand, String color);
}

```

Lekérdezéseket rendezhetünk az __OrderBy__ kulcsszó használatával a metódusban:

```java
package org.vasvari.demo.repository;

import org.springframework.data.repository.CrudRepository;
import org.vasvari.demo.entity.Car;

import java.util.List;

public interface CarRepository extends CrudRepository<Car,Long> {
    // Fetch cars by brand and sort by year
    List<Car> findByBrandOrderByModelYearAsc(String brand);
}
```

Lekérdezéseket is létrehozhatunk __SQL__ utasításokkal a `@Query` annotáció segítségével. Az alábbi példa bemutatja egy __SQL__ lekérdezés használatát a `CrudRepository`-ban:

```java
package org.vasvari.demo.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.vasvari.demo.entity.Car;

import java.util.List;

public interface CarRepository extends CrudRepository<Car,Long> {
    // Fetch cars by brand using SQL
    @Query("select c from Car c where c.brand = ?1")
    List<Car> findByBrand(String brand);
}
```

A `@Query` annotációval használhatunk összetettebb kifejezéseket is, például a __like__-ot. Az alábbi példa bemutatja a __like__ lekérdezés használatát a `CrudRepository`-ban:

```java
package org.vasvari.demo.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.vasvari.demo.entity.Car;

import java.util.List;

public interface CarRepository extends CrudRepository<Car,Long> {
    // Fetch cars by brand using SQL
    @Query("select c from Car c where c.brand like %?1")
    List<Car> findByBrandEndsWith(String brand);
}
```

A __Spring Data JPA__ továbbá biztosítja a `PagingAndSortingRepository`-t, amely a `CrudRepository`-t kiterjeszti. Metódusokat kínál az entitások rendezéssel és lapozással történő lekérdezésére. Ez jó választás, ha nagy adatmennyiséggel dolgozunk, mert nem kell visszaadni mindet a nagy eredményhalmazból. Emellett adatainkat értelmes sorrendbe rendezhetjük. A `PagingAndSortingRepository`-t hasonló módon hozhatjuk létre, ahogyan a `CrudRepository`-t létrehoztuk:

```java
package org.vasvari.demo.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.vasvari.demo.entity.Car;

public interface CarRepository extends PagingAndSortingRepository<Car, Long> {
    
}
```

Ebben az esetben most már rendelkezünk a `repository` által biztosított további két új metódussal:


|                 Metódus                 |                 Leírás                                                  |
|:---------------------------------------:|:-----------------------------------------------------------------------:|
|    `Iterable<T> findAll(Sort sort)`     | Visszaadja az összes entitást a megadott opciók szerint rendezve.       |
|    `Page<T> findAll(Pageable pageable)` | Visszaadja az összes entitást a megadott lapozási opciók szerint.       |

Ezen a ponton elkészült az első adatbázisunk és készen állunk a táblák közötti kapcsolatok hozzáadására.

## Táblák közötti kapcsolatok

Létre fogunk hozni egy új táblát, amit `Owner`-nek nevezünk el és ez __one-to-many__ kapcsolatban lesz a `Car` táblával. Ebben az esetben a __one-to-many__ kapcsolat azt jelenti, hogy egy tulajdonosnak több autója lehet, de egy autónak csak egy tulajdonosa lehet.

A következő __Unified Modeling Language__ (_UML_) diagram mutatja be a táblák közötti kapcsolatot:

![__14. ábra:__ UML diagram](/assets/images/vasvari/springboot/uml.png)

Az alábbi lépésekben megnézzük, hogyan hozzunk létre egy új táblát:

1. Először is létre kell hoznunk az `Owner` __entitás__ (_org.vasvari.demo.entity_) és __repository__ (_org.vasvari.demo.repository_) osztályokat a csomagokban. Az `Owner` entitás és repository hasonló módon készül, mint a `Car` osztály.

A következő a forráskód az `Owner` entitás és az `OwnerRepository` osztályhoz:

::: code-tabs

@tab Owner.java
```java
package org.vasvari.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Owner {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long ownerid;
    private String firstname, lastname;

    public Owner() {
    }

    public Owner(String firstname, String lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    public Long getOwnerid() {
        return ownerid;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }
}
```

@tab OwnerRepository.java
```java
package org.vasvari.demo.repository;

import org.springframework.data.repository.CrudRepository;
import org.vasvari.demo.entity.Owner;

public interface OwnerRepository extends CrudRepository<Owner, Long> {
    
}
```
:::

2. Most ellenőriznünk kell, hogy minden működik-e. Indítsuk el a programunkat és nézzük meg, hogy mindkét adatbázistábla létrejött-e és nincsenek-e hibák a konzolon. Az alábbi képernyőkép mutatja be a konzolüzeneteket, amikor a táblák létrejönnek:


![__15. ábra:__ A Car és az Owner táblák](/assets/images/vasvari/springboot/owner_console_log.png)


3. A __one-to-many__ kapcsolatot a `@ManyToOne` és `@OneToMany` (_jakarta.persistence_) annotációkkal lehet hozzáadni.

    A `Car` entitás osztályban, amely tartalmaz egy idegen kulcsot, meg kell határoznunk a kapcsolatot a `@ManyToOne` annotációval. Emellett létre kell hoznunk a gettert és settert metódusokat az `Owner` mezőhöz.

    Javasolom, hogy minden kapcsolathoz a `FetchType.LAZY`-t használjuk. A __toMany__ kapcsolatok esetében ez az alapértelmezett érték, de a __toOne__ kapcsolatok esetében meg kell határoznunk. A `FetchType` meghatározza az adatok lekérdezési stratégiáját az adatbázisból.

    Az érték lehet `EAGER` vagy `LAZY`. Az esetünkben a `LAZY` stratégia azt jelenti, hogy amikor a tulajdonost lekérjük az adatbázisból, a tulajdonoshoz kapcsolódó autókat csak szükség esetén kérjük le. Az `EAGER` pedig azt jelenti, hogy az autókat azonnal lekérjük a tulajdonostól. Az alábbi forráskód bemutatja, hogyan lehet definiálni a __one-to-many__ kapcsolatot a `Car` osztályban:


    ```java
    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="owner")
    private Owner owner;

    // Getter and setter

    public Owner getOwner() {
        return owner;
    }
    public void setOwner(Owner owner) {
        this.owner = owner;
    }
    ```

4. Az `Owner` entitásban a kapcsolatot a `@OneToMany` annotációval határozzuk meg. A mező típusa `List<Car>`, mivel egy tulajdonosnak több autója lehet. Addjuk hozzá a _gettert_ és _settert_ az alábbi módon:


    ```java
    @OneToMany(cascade=CascadeType.ALL, mappedBy="owner")
    private List<Car> cars;

    // Getter and setter

    public List<Car> getCars() {
        return cars;
    }

    public void setCars(List<Car> cars) {
        this.cars = cars;
    }
    ```

    A `@OneToMany` annotációnak két attribútuma van, amelyeket használunk. A `cascade` attribútum meghatározza, hogy törlés vagy frissítés esetén, hogyan terjedjen ki a hatása az entitásokra. Az `ALL` attribútum beállítása azt jelenti, hogy az összes művelet automatikusan érinti az entitásokat. Például, ha a tulajdonost töröljük, az ahhoz kapcsolódó autók is törlésre kerülnek. A `mappedBy="owner"` attribútum beállítása azt mondja meg nekünk, hogy a `Car` osztálynak van egy `Owner` nevű mezője, ami a kapcsolat idegen kulcsa.

    A projekt futtatásakor a konzolon látni fogjuk, hogy a kapcsolat létrejött:

![__16. ábra:__ A kapcsolat létrejött](/assets/images/vasvari/springboot/one_to_many_console.png)

5. Most hozzáadhatunk néhány tulajdonost az adatbázishoz a __CommandLineRunner__ segítségével. Módosítsuk a `Car` entitás osztály konstruktorát és adjunk hozzá egy `Owner` objektumot:

```java{3,10}
public Car(String brand, String model, String color,
              String registrationNumber, int modelYear,
              int price, Owner owner) {
      this.brand = brand;
      this.model = model;
      this.color = color;
      this.registrationNumber = registrationNumber;
      this.modelYear = modelYear;
      this.price = price;
      this.owner = owner;
  }
```

6. Először is létrehozunk két tulajdonos objektumot, majd elmentjük azokat az adatbázisba a `repository` `saveAll` metódusával, amelyet több entitás egyidejű mentésére használhatunk. A tulajdonosok mentéséhez be kell __injektálnunk__ az `OwnerRepository`-t a __főosztályba__. Ezután össze kell kötnünk a tulajdonosokat, az autókkal a `Car` osztály konstruktorának használatával. Módosítsuk a `CardatabaseApplication` osztályt az alábbi importok hozzáadásával:


```java
import org.vasvari.demo.entity.Owner;
import org.vasvari.demo.repository.OwnerRepository;
```

7. Most injektáljuk be az `OwnerRepository`-t a `CardatabaseApplication` osztályba konstruktor injection segítségével:

```java
private final CarRepository repository;
private final OwnerRepository orepository;

public DemoApplication(CarRepository repository, OwnerRepository orepository) {
  this.repository = repository;
  this.orepository = orepository;
}
```

8. Ebben a pontban módosítanunk kell a `run` metódust, hogy mentse és összekapcsolja a tulajdonosokat az autókkal:

```java
@Override
	public void run(String... args) throws Exception {
		// Add owner objects and save these to db
		Owner owner1 = new Owner("John" , "Johnson");
		Owner owner2 = new Owner("Mary" , "Robinson");
		orepository.saveAll(Arrays.asList(owner1, owner2));

		repository.save(new Car("Ford", "Mustang", "Red","ADF-1121", 2023, 59000, owner1));
		repository.save(new Car("Nissan", "Leaf", "White","SSJ-3002", 2020, 29000, owner2));
		repository.save(new Car("Toyota", "Prius","Silver", "KKO-0212", 2022, 39000, owner2));
		// Fetch all cars and log to console
		for (Car car : repository.findAll()) {
			logger.info("brand: {}, model: {}",
					car.getBrand(), car.getModel());
		}
	}
```

9. Ha most futtatjuk az alkalmazást és lekérdezzük az autókat az adatbázisból, látni fogjuk, hogy a tulajdonosok most már kapcsolódnak az autókhoz:

![__17. ábra:__ OneToMany kapcsolat](/assets/images/vasvari/springboot/h2_console_relationships.png)

Ha inkább egy __many-to-many__ kapcsolatot akarunk létrehozni, ami gyakorlatilag azt jelenti, hogy egy tulajdonosnak több autója lehet és egy autónak több tulajdonosa is lehet, akkor a `@ManyToMany` annotációt kell használnunk. 

A következő lépésben megtanuljuk, hogy hogyan lehet a kapcsolatot __many-to-many__-re módosítani. Ilyen típusú kapcsolatban __Hibernate__-ben javasolt a `Set` használata `List` helyett:

1. A `Car` entitás osztály __many-to-many__ kapcsolatban a _gettereket_ és _settereket_ az alábbi módon definiáljuk:

```java
@ManyToMany(mappedBy="cars")
private Set<Owner> owners = new HashSet<Owner>();

// Getter and setter

public Set<Owner> getOwners() {
    return owners;
}
public void setOwners(Set<Owner> owners) {
    this.owners = owners;
}
```

2. Az `Owner` entitás osztályban a __many-to-many__ kapcsolatot az alábbiak szerint kell definiálnunk:

```java
@ManyToMany(cascade = CascadeType.PERSIST)
@JoinTable(name = "car_owner",
        joinColumns = {
            @JoinColumn(name = "ownerid")
        },
        inverseJoinColumns = {
            @JoinColumn(name = "id")
        }
)
private Set<Car> cars = new HashSet<Car>();

// Getter and setter

public Set<Car> getCars() {
    return cars;
}

public void setCars(Set<Car> cars) {
    this.cars = cars;
}
```

3. Most ha futtatjuk az alkalmazást létrejön egy új kapcsolótábla, amit __car_owner__-nek nevez el a programunk (`Car` és `Owner` táblák). A kapcsolótábla egy speciális típusú tábla, amely kezeli a __many-to-many__ kapcsolatot két tábla között.

    A kapcsolótáblát a `@JoinTable` annotációval határozzuk meg. Ezzel az annotációval megadhatjuk a kapcsolótábla tábla nevét és a kapcsolódó oszlopokat. Az alábbi képernyőkép mutatja be az adatbázis struktúrát, amikor egy __many-to-many__ kapcsolatot használunk:

![__18. ábra:__ ManyToMany kapcsolat](/assets/images/vasvari/springboot/h2_console_many.png)

Most az adatbázis _UML_ diagramja a következőképpen néz ki:

![__19. ábra:__ UML diagram](/assets/images/vasvari/springboot/uml2.png)

## Összefoglaló

Összefoglalva, __JPA__-t használtunk a Spring Boot alkalmazásunk adatbázisának létrehozásához. Először létrehoztunk entitás osztályokat, amelyeket adatbázis táblákhoz képeztünk le.

Ezután létrehoztunk egy `CrudRepository`-t az entitás osztályunkhoz, amely __CRUD__ műveleteket biztosít. Ezt követően, néhány demó adatot adtunk hozzá az adatbázisunkhoz, a __CommandLineRunner__ segítségével. Emellett létrehoztunk __one-to-many__ és __many-to-many__ kapcsolatokat két entitás (`Car`, `Owner`) között.

A következőkben egy __RESTful__ web szolgáltatást fogunk létrehozni a backendünkhöz. Megvizsgáljuk továbbá, hogyan tesztelhetjük a __RESTful__ web szolgáltatást a __Postman__ segítségével.

![__20. ábra:__ 😮‍💨](/assets/images/vasvari/springboot/agh.png)