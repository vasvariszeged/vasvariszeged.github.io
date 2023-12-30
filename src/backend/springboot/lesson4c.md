---
icon: fa-solid fa-3
category:
  - Spring Boot
  - RESTful API
---



# A Dependency Injection

Megnézzük, mi az a __Dependency Injection__ (_DI_) és hogyan használhatjuk a Spring Boot keretrendszerrel. A Spring Boot keretrendszer biztosítja a __DI__-t ezért jó ha megismerjük az alapokat. A __DI__ lehetővé teszi a komponensek közötti laza csatolást, így a kód rugalmasabbá, karbantarthatóbbá és tesztelhetőbbé válik.

Az alábbi témákat fogjuk tárgyalni:
- A __Dependency Injection__ bemutatása
- A __Dependency Injection__ használata a Spring Bootban


## Bevezetése

A __Dependency Injection__ egy olyan szoftverfejlesztési technika, amellyel olyan objektumokat hozhatunk létre amelyek más objektumoktól függenek. A __DI__ segít az osztályok közötti interakcióban, ugyanakkor az osztályok függetlenségét is megőrzi.

A __Dependency Injection__-ben háromféle osztály létezik:

- A szolgáltatás (__service__) egy olyan osztály, amelyet használhatunk (_ez a függőség - dependency_).
- A kliens (__client__) egy olyan osztály, amely használja a függőséget (__dependency__-t).
- Az injektor átadja a függőséget (__a szolgáltatást - service__) a függő osztálynak (__a kliens - client__).


![__1. ábra:__ A Dependency Injection összekapcsolja az osztályokat.](/assets/images/vasvari/springboot/dependency_injection.png)

Nézzünk meg egy egyszerűsített példát a __Dependency Injection__ használatára Java kóddal. A következő kódban nincs __Dependency Injection__, mert a `Car` kliens (__client__) osztály egy objektumot hoz létre a szolgáltatás (__service__) osztályból :

```java
public class Car { 
  private Owner owner; 

  public Car() { 
    owner = new Owner(); 
  } 
} 
```

A következő kódban a szolgáltatás (__service__) objektum nem közvetlenül a kliens (__client__) osztályban jön létre. Az osztály konstruktorában paraméterként kerül átadásra:

```java
public class Car { 
  private Owner owner; 

  public Car(Owner owner)  { 
    this.owner = owner; 
  } 
}
```

A __Dependency Injection__-nek különböző típusai vannak. Nézzünk meg közülük kettőt:

- __Constructor injection:__ Függőségek átadása a kliens (__client__) osztály konstruktorának. A Constructor injection egy példáját már láthattuk az előző `Car` osztály kódjában. Kötelező függőségek esetén ajánlott használni. Minden függőséget az osztály konstruktorával adunk meg és egy objektum nem hozható létre a szükséges függőségek nélkül.
- __Setter injection:__ Függőséget setter metóduson keresztül biztosítjuk. A következő kód egy példát mutat a _setter injection_-re:

```java
public class Car { 
  private Owner owner; 

  public void setOwner(Owner owner) { 
    this.owner = owner; 
  } 
} 
```

Itt a függőséget most paraméterként adjuk át a _setter_-nek. A _setter injection_ rugalmasabb, mert az objektumok létrehozhatók az összes függőségük nélkül is. Ez a megközelítés lehetővé teszi az opcionális függőségek használatát.

A __DI__ csökkenti a függőségeket a kódban és újrafelhasználhatóbbá teszi a kódot. Emellett javítja a kód tesztelhetőségét is. Most megismertük a __DI__ alapjait. Ezután megnézzük hogyan használják a __DI__-t a Spring Bootban.


## DI Spring Bootban

A Spring keretrendszerben az _ApplicationContext_ felelős az objektumok és függőségeik létrehozásáért és kezeléséért. A Spring Boot regisztrálja az annotációkkal (`@Service`, `@Repository`, `@Controller`, stb.) ellátott osztályokat melyeket aztán __Dependency Injection__-nel lehet használni.

A Spring Boot több __Dependency Injection__ típust támogat és a leggyakrabban használtak közé tartoznak a következők:

- __Constructor injection:__

  A _constructor injection_-nel már korábban találkoztunk így jelenlegi kontextusban sem hoz számunkra újdonságot.

  ```java
  // Constructor injection
  public class Car {
    private final CarRepository carRepository;

    public Car(CarRepository carRepository) {
      this.carRepository = carRepository;
    }
        
    // Fetch all cars from db 
    carRepository.findAll();
  }
  ```

  __Viszont__, ha több konstruktor van az osztályban akkor a `@Autowired` megjegyzést kell használnunk annak meghatározására, hogy melyik konstruktort használjuk a __DI__-hez:

  ```java
  // Constructor to used for dependency injection
  @Autowired  
  public Car(CarRepository carRepository) {
    this.carRepository = carRepository;
  }
  ```

- __Setter injection:__

  A __DI__ a setter metódusokon keresztül történik. A _setter injection_ akkor hasznos, ha opcionális függőségek vannak vagy ha a függőségeket futás közben akarjuk módosítani. Az alábbiakban egy példa a _setter injectionre_:

  ```java
  // Setter injection
  @Service
  public class AppUserService {
      private AppUserRepository userRepository;

      @Autowired
      public void setAppUserRepository(AppUserRepository userRepository) {
          this.userRepository = userRepository;
      }

      // Other methods that use userRepository
  }
  ```

- __Field injection:__

  A __DI__ közvetlenül a mezőkbe kerülnek befecskendezésre. A _field injection_ előnye az egyszerűsége, de van néhány hátránya is. Futásidejű hibákat okozhat, ha a függőség nem áll rendelkezésre. Íme egy példa:

  ```java
  // Field injection
  @Service
  public class CarDatabaseService implements CarService {
    // Car database services
  }

  public class CarController {
    @Autowired
    private CarDatabaseService carDatabaseService;
    //...
  }
  ```

  A következő részben megvizsgáljuk, hogyan lehet használni a __Java Persistent API__ (_JPA_)-t a Spring Boot alkalmazással, valamint hogyan lehet beállítani egy __H2__ adatbázist. Továbbá megismerjük a __CRUD__ repository-k létrehozását és a táblák közötti kapcsolatot.