---
icon: fa-solid fa-6
category:
  - Spring Boot
  - RESTful API
---


# A Backend védelme

A backend biztonságának megteremtése kulcsfontosságú a fejlesztés folyamatában. Az érzékeny adatok védelme, a szabályok betartása és a jogosulatlan hozzáférés megakadályozása szempontjából. A backend gyakran kezeli a felhasználók azonosítását és jogosultságainak ellenőrzését. Ezeknek a részeknek a megfelelő védelme biztosítja, hogy csak engedélyezett felhasználók férjenek hozzá az alkalmazáshoz és végezzenek el konkrét műveleteket. 

Az alábbi témákat fogjuk tárgyalni:

- A Spring Security megértése
- A backend védelme JSON Web Token segítségével
- Szerep-alapú (role-based) biztonság

## A Spring Security megértése

A __Spring Security__ (https://spring.io/projects/spring-security) biztonsági szolgáltatásokat nyújt a Java alapú webalkalmazásokhoz. A __Spring Security__ projekt 2003-ban kezdődött, korábban _Acegi Security System for Spring_ néven futott.

A Spring Security a következő funkciókat valósítja meg:

- __AuthenticationManager__ egy _in-memory_ egyetlen felhasználóval. A felhasználónév a __user__, a jelszó pedig a konzol kimenetre kerül kiírásra.
- Egy alapértelmezett, automatikusan generált bejelentkezési oldal.
- Figyelmen kívül hagyott elérési utak a megszokott statikus erőforrások helyeihez, például __/css__ és __/images__. Az összes egyéb végpont számára _HTTP_ alapú hitelesítés.
- Általános alacsony szintű funkciók bekapcsolva, ideértve az __HTTP Strict Transport Security__ (_HSTS_), __cross-site scripting__ (_XSS_) és __cross-site request forgery__ (_CSRF_) védelmet.

A __Spring Security__-t a __pom.xml__ fájlba történő függőségek hozzáadásával integrálhatjuk az alkalmazásunkba.

Az első függőség az alkalmazáshoz:
```xml
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-security</artifactId>
</dependency>
```

A második pedig a teszteléshez:
```xml
<dependency>
  <groupId>org.springframework.security</groupId>
  <artifactId>spring-security-test</artifactId>
  <scope>test</scope>
</dependency>
```

Amikor elindítjuk az alkalmazást, a konzolon láthatjuk, hogy a __Spring Security__ létrehozott egy felhasználót __user__ felhasználónévvel. A felhasználó jelszava látható a konzol kimenetén:

![__1. ábra:__ Spring Security bekapcsolva.](/assets/images/vasvari/springboot/security1.webp)

:::info Ha nincs jelszó a konzolon, próbáljuk meg újraindítani a projektet a konzol piros Stop gombjának megnyomásával és futtassuk újra.
:::

Most, ha egy __GET__ kérést küldünk a __REST API__ végpontjára, látni fogjuk, hogy az védve van. Nyissuk meg a webböngészőnket és lépjünk a http://localhost:8080/api címre. Át leszünk irányítva a __Spring Security__ alapértelmezett bejelentkezési oldalára:

![__2. ábra:__ Védett REST API.](/assets/images/vasvari/springboot/security2.webp)

Ahhoz, hogy sikeres __GET__-kérést tudjunk végrehajtani, hitelesítenünk kell a __RESTful API__-nkat. A felhasználónév mezőbe írjuk be a __user__-t, a Jelszó mezőbe pedig másoljuk ki a konzolon generált jelszót. A hitelesítéssel láthatjuk, hogy a válasz tartalmazza az __API__-erőforrásainkat:

![__3. ábra:__ Alapszintű (basic) hitelesítés.](/assets/images/vasvari/springboot/security3.webp)

A viselkedés konfigurálásához létre kell hoznunk egy új konfigurációs osztályt a __Spring Security__ számára. A konfigurációs fájl segítségével meghatározhatjuk, mely __URL__-ek vagy __URL-minták__ érhetőek el illetve, hogy milyen felhasználók vagy szerepkörök számára. Emellett meghatározhatjuk az azonosítási mechanizmust, a bejelentkezési folyamatot, a munkamenetkezelést, stb.

Hozzunk létre egy új osztályt `SecurityConfig` néven az alkalmazás gyökércsomagjában (__org.vasvari.demo__). Az alábbi forráskód bemutatja a konfigurációs osztály szerkezetét:

```java
package org.vasvari.demo;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

}
```

A `@Configuration` és az `@EnableWebSecurity` annotációk kikapcsolják az alapértelmezett konfigurációt és saját konfigurációt definiálhatunk ebben az osztályban. A `filterChain(HttpSecurity http)` metóduson belül, amit később látni fogunk működni, meghatározhatjuk, mely végpontok legyenek védve az alkalmazásunkban és melyek nem.

__In-memory__ felhasználókat is hozzáadhatunk az alkalmazásunkhoz a __Spring Security__ `InMemoryUserDetailsManager` segítségével, amely megvalósítja a `UserDetailsService`-t. Ezután megvalósíthatjuk a __felhasználó/jelszó__ hitelesítést. Emellett a `PasswordEncoder`-t is használhatjuk a jelszavak kódolásához a __bcrypt__ algoritmus (https://en.wikipedia.org/wiki/Bcrypt) segítségével.

A következő forráskód létrehoz egy __in-memory__ felhasználót __user__ felhasználónévvel, __password__ jelszóval és __USER__ szerepkörrel:

```java
package org.vasvari.demo;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
    @Bean
    public InMemoryUserDetailsManager userDetailsService() {
        UserDetails user = User.builder().username("user")
                .password(passwordEncoder().encode("password"))
                .roles("USER").build();
        
        return new InMemoryUserDetailsManager(user);
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
```

Most indítsuk újra az alkalmazásunkat és tesztelhetjük a hitelesítést az __in-memory__ felhasználó használatával.

:::warning Az in-memory felhasználók használata elfogadható a fejlesztési fázisban, de egy a valóságnak helytálló alkalmazásnak a felhasználókat az adatbázisban kellene tárolnia.
:::

A felhasználók mentéséhez az adatbázisba létre kell hoznunk egy felhasználó __entitás__ és __repository__ osztályt. 

:::danger A jelszavakat ne mentsük el az adatbázisban sima szöveges formátumban. Ha egy adatbázis, amely tartalmazza a felhasználói jelszavakat, feltörik, a támadók közvetlenül hozzájuthatnak a jelszavakhoz szöveges formában. 
:::

A __Spring Security__ több kódolási algoritmust biztosít - _például a bcrypt_ - amelyeket használhatunk a jelszavak kódolásához. 

1. Hozzunk létre egy új osztályt `AppUser` néven a __org.vasvari.demo.entity__ csomagban. 

2. Lássuk el az `AppUser` osztályt az `@Entity` annotációval. Adjuk hozzá az `id`, `username`, `password` és `role` osztálymezőket. Végül adjuk hozzá a konstruktorokat, gettereket és settereket. Az összes mezőn beállítjuk nem `null` értékűre. Ez azt jelenti, hogy az adatbázis oszlopok nem tartalmazhat `null` értékeket. Emellett a felhasználónévnek egyedinek kell lennie, azaz `unique=true` értéket használjuk a `@Column` annotációjában.


```java
package org.vasvari.demo.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class AppUser {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false)
    private Long id;

    @Column(nullable = false, unique = true)
    private String username;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String role;

    public AppUser() {

    }

    public AppUser(String username, String password, String role) {
        this.username = username;
        this.password = password;
        this.role = role;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}
```

3. Hozzunk létre egy új interfészt `AppUserRepository` néven a __org.vasvari.demo.repository__ csomagban. A __repository__ osztály forráskódja hasonló a korábban látottakhoz, de van egy metódusa, a `findByUsername`, amire azért van szükségünk, hogy az azonosítási folyamatban megkeresse a felhasználót az adatbázisban. A metódus `Optional`-t ad vissza a `null` kivétel elkerülése érdekében. Az `AppUserRepository` forráskódja:

```java
package org.vasvari.demo.repository;

import org.springframework.data.repository.CrudRepository;
import org.vasvari.demo.entity.AppUser;

import java.util.Optional;

public interface AppUserRepository extends CrudRepository<AppUser, Long> {
    Optional<AppUser> findByUsername(String username);
}
```

4. Következő lépésként létrehozunk egy osztályt, amely megvalósítja a `UserDetailsService` interfészt, amit a __Spring Security__ biztosít a felhasználó hitelesítéséhez és az engedélyezéshez. Hozzunk létre egy új csomagot a gyökér csomagban __service__ néven. 

5. Hozzunk létre egy új osztályt `UserDetailsServiceImpl` néven a korábban létrehozott __service__ csomagban. 

6. Be kell injektálnunk az `AppUserRepository` osztályt a `UserDetailsServiceImpl` osztályba, mert szükség van rá, hogy a __Spring Security__ kezelje az azonosítást és lekérje a felhasználót az adatbázisból. A korábban megvalósított `findByUsername` metódus `Optional`-t ad vissza, így az `isPresent()` metódust használhatjuk a felhasználó létezésének ellenőrzésére. Ha a felhasználó nem létezik, `UsernameNotFoundException` kivételt kapunk. A `loadUserByUsername` metódus a `UserDetails` objektumot adja vissza, ami szükséges az azonosításhoz. A __Spring Security__ `UserBuilder` osztályát használjuk a felhasználó hitelesítésének létrehozásához. A __UserDetailsServiceImpl.java__ forráskódját:

```java
package org.vasvari.demo.service;

import java.util.Optional;

import org.springframework.security.core.userdetails.User.UserBuilder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.vasvari.demo.entity.AppUser;
import org.vasvari.demo.repository.AppUserRepository;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    private final AppUserRepository repository;

    public UserDetailsServiceImpl(AppUserRepository repository) {
        this.repository = repository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<AppUser> user = repository.findByUsername(username);
        UserBuilder builder = null;
        if (user.isPresent()) {
            AppUser currentUser = user.get();
            builder = org.springframework.security.core.userdetails.User.withUsername(username);
            builder.password(currentUser.getPassword());
            builder.roles(currentUser.getRole());
        } else {
            throw new UsernameNotFoundException("User not found.");
        }
        return builder.build();
    }
}
```

A konfigurációs osztályunkban meg kell határoznunk, hogy a __Spring Security__ az adatbázisban tárolt felhasználókat használja, nem pedig az __in-memory__ felhasználókat. Töröljük a `userDetailsService()` metódust a __SecurityConfig__ osztályból, hogy letiltsuk __in-memory__ felhasználókat. Adjunk hozzá egy új `configureGlobal` metódust a felhasználók adatbázisból történő kinyerésének engedélyezéséhez.

A jelszót soha ne mentsük el egyszerű szövegként az adatbázisba. Ezért a `configureGlobal` metódusban definiálunk egy jelszó hashing algoritmust. Ebben a példában a `bcrypt` algoritmust használjuk. Ez könnyen megvalósítható a __Spring Security__ `BCryptPasswordEncoder` osztályával, amely a hitelesítési folyamat során hasheli jelszót. Íme a __SecurityConfig.java__ forráskódja:

```java
package org.vasvari.demo;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.vasvari.demo.service.UserDetailsServiceImpl;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
    private final UserDetailsServiceImpl userDetailsService;

    public SecurityConfig(UserDetailsServiceImpl userDetailsService) {
        this.userDetailsService = userDetailsService;
    }

    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService)
                .passwordEncoder(new BCryptPasswordEncoder());
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
```

7. Végül néhány teszt felhasználót menthetünk az adatbázisba a `CommandLineRunner` interfész segítségével. Nyissuk meg a __DemoApplication.java__ fájlt és injektáljuk be az `AppUserRepository`-t a főosztályba:

```java
private final CarRepository repository;
private final OwnerRepository orepository;
private final AppUserRepository urepository;


public DemoApplication(CarRepository repository, 
                       OwnerRepository orepository, 
                       AppUserRepository urepository) {
  this.repository = repository;
  this.orepository = orepository;
  this.urepository = urepository;
}
```

8. Hozzunk létre két felhasználót az adatbázisba – __bcrypt__-tel hashelt jelszavakkal. 

::: note Bcrypt generátorokat találhatunk az interneten. Ezek a generátorok lehetővé teszik, hogy megadjunk egy sima szöveges jelszót és létrehozzák a hozzá tartozó bcrypt hasht.
:::

```java
@Override
public void run(String... args) throws Exception {
    
    // Add owner objects and save these to db
    Owner owner1 = new Owner("John", "Johnson");
    Owner owner2 = new Owner("Mary", "Robinson");
    orepository.saveAll(Arrays.asList(owner1, owner2));

    repository.save(new Car("Ford", "Mustang", "Red", "ADF-1121", 2023, 59000, owner1));
    repository.save(new Car("Nissan", "Leaf", "White", "SSJ-3002", 2020, 29000, owner2));
    repository.save(new Car("Toyota", "Prius", "Silver", "KKO-0212", 2022, 39000, owner1));
    
    // Fetch all cars and log to console
    for (Car car : repository.findAll()) {
        logger.info("brand: {}, model: {}", car.getBrand(), car.getModel());
    }

    // Username: user, password: user
    urepository.save(new AppUser("user", "$2a$10$NVM0n8ElaRgg7zWO1CxUdei7vWoPg91Lz2aYavh9.f9q0e4bRadue", "USER"));
    // Username: admin, password: admin
    urepository.save(new AppUser("admin", "$2a$10$8cjz47bjbR4Mn8GMg9IZx.vyjhLXR/SKKMSZ9.mP9vpMu0ssKi8GW", "ADMIN"));
}
```

:::tip A bcrypt egy biztonságos hashelési függvény, amit Niels Provos és David Mazières tervezett. 

Itt látható egy példa egy __bcrypt__ hashről, amit az __admin__-nak generáltunk:

`$2a$10$8cjz47bjbR4Mn8GMg9IZx.vyjhLXR/SKKMSZ9.mP9vpMu0ssKi8GW`

A `$2a` a hashelési algoritmus verzióját reprezentálja, a `$10` pedig az algoritmus erősségét jelöli. A __Spring Security__ `BcryptPasswordEncoder` osztálynak alapértelmezett erőssége __10__. A __bcrypt__ véletlenszerű sózást generál a hashelés során, így a hashelt eredmény mindig különböző.
:::

9. Az alkalmazás futtatása után látni fogjuk, hogy az adatbázisban van egy __app_user__ tábla és hogy két felhasználói rekord van elmentve hashelt jelszavakkal, ahogy azt a következő képernyőkép mutatja:

![__4. ábra:__ Felhasználók.](/assets/images/vasvari/springboot/security4.webp)

10. Indítsuk újra az alkalmazásunkat és egy __401 Unauthorized__ hibát kell kapnunk, ha megpróbálunk egy __GET__ kérést küldeni a http://localhost:8080/api útvonalra hitelesítés nélkül. Sikeres kérés küldéséhez hitelesítés szükséges. A különbség a korábbi példához képest az, hogy most az adatbázisban tárolt felhasználókat használjuk a hitelesítéshez.
Bejelentkezhetünk az __/api__ végpontra a böngészőből, vagy használhatjuk a __Postman__-t és az alapszintű (__basic__) hitelesítést.

![__5. ábra:__ GET kérés authentikációval.](/assets/images/vasvari/springboot/security5.webp)

11. Láthatjuk, hogy jelenleg az __api/appUsers__ végpont hívásával le kérhetjük a felhasználókat a __RESTful__ webszolgáltatásunkból, amit szeretnénk elkerülni. Ahogyan azt már tárgyaltuk a __Spring Data REST__ alapértelmezetten létrehoz egy __RESTful__ webszolgáltatást az összes nyilvános __repository__-ból. A `@RepositoryRestResource` annotáció `exported` peraméterét beállítjuk `false` értékre, ami azt jelenti, hogy az adott `repository`-t nem __REST__-erőforrásként jelenítjük meg:


```java
package org.vasvari.demo.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.vasvari.demo.entity.AppUser;

import java.util.Optional;

@RepositoryRestResource(exported = false)
public interface AppUserRepository extends CrudRepository<AppUser, Long> {
    Optional<AppUser> findByUsername(String username);
}
```

12. Ha újraindítjuk az alkalmazást és küldünk egy __GET__ kérést a __/api__ végpontra, látni fogjuk, hogy az __/appUsers__ végpont már nem látható.

![__6. ábra:__ __/appUsers__ végpont már nem látható.](/assets/images/vasvari/springboot/security6.webp)

Következő lépésként elkezdjük megvalósítani az azonosítást egy __JSON Web Token__ (JWT) segítségével.

## A backend védelme JSON Web Token segítségével

Az eddigiekben azt tárgyaltuk, hogy hogyan lehet alapszintű hitelesítést használni egy __RESTful__ webszolgáltatásnál. Viszont az alapvető hitelesítés nem biztosít módot a tokenek és munkamenetek kezelésére. 

![__7. ábra:__ A JWT.](/assets/images/vasvari/springboot/security7.webp)

Amikor egy felhasználó bejelentkezik, a hitelesítő adatokat minden egyes kéréssel együtt elküldi, ami munkamenetkezelési problémákat és potenciális biztonsági kockázatokat okozhat ezért ehelyett __JSON Web Token__ (_JWT_) hitelesítést fogunk használni (https://jwt.io/).

Ez által betekintést kapunk, hogy hogyan konfigurálhatjuk a __Spring Security__-t részletesebben.

A __JWT__-ket a __RESTful API__-kban gyakran használják hitelesítési és jogosultsági célokra. Kompakt módon valósítják meg a hitelesítést a modern webes alkalmazásokban. Egy __JWT__ igazán kis méretű, ezért elküldhető az __URL__-ben, a __POST__ paraméterben vagy a fejlécben. Emellett tartalmazza a felhasználóval kapcsolatos összes szükséges információt - _a felhasználónevét és a szerepét_.

A __JWT__ három különböző részt tartalmaz, amelyek pontokkal vannak elválasztva: __xxxxx.yyyyy.zzzzz__. Ezek a részek a következőképpen vannak felbontva:

![__8. ábra:__ JWT felépítése.](/assets/images/vasvari/springboot/security8.webp)

- Az első rész (__xxxxx__) a __fejléc__, amely meghatározza a token típusát és a hashelési algoritmust.
- A második rész (__yyyyy__) a __payload__, amely általában az azonosítás esetén felhasználói információkat tartalmaz.
- A harmadik rész (__zzzzz__) az __aláírás__, amely arra szolgál, hogy ellenőrizze, hogy a token nem változott meg útközben.


Íme egy példa a JWT-re:

```jwt
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
eyJzdWIiOiIxMjM0NTY3ODtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.
SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

A következő diagram bemutatja az authentikációs folyamatát a __JWT__-nek:

![__9. ábra:__ JWT authentikációs folyamat.](/assets/images/vasvari/springboot/security9.webp)

A sikeres azonosítás után a kliens által küldött kéréseknek mindig tartalmazniuk kell azt a __JWT__-t, amelyet az azonosítás során kapott.

A __jjwt__ (https://github.com/jwtk/jjwt) könyvtárat fogjuk használni, ami a __JWT__-k létrehozására és feldolgozására szolgál __Java__ és __Android__ platformon. Ezért hozzá kell adnunk a következő függőségeket a __pom.xml__ fájlhoz:

```xml
<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt-api</artifactId>
    <version>0.11.5</version>
</dependency>

<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt-impl</artifactId>
    <version>0.11.5</version>
    <scope>runtime</scope>
</dependency>

<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt-jackson</artifactId>
    <version>0.11.5</version>
    <scope>runtime</scope>
</dependency>
```

A következő lépések azt mutatják be, hogyan engedélyezzük a __JWT__-hitelesítést a backendünkben.

### A bejelentkezés biztonságossá tétele

Kezdjük a bejelentkezési funkcióval:

1. Először is létrehozunk egy olyan osztályt `JwtService` néven az __org.vasvari.demo.service__ csomagban, amely egy aláírt __JWT__-t generál és ellenőriz. 

    Az osztály elején definiálunk néhány konstans értéket: 
    - __EXPIRATIONTIME__: meghatározza a token lejárati idejét milliszekundumban, 
    - __PREFIX__: meghatározza a token előtagját és jellemzően a __Bearer__ sémát használjuk. 

    A __JWT__-t az __Authorization__ fejlécben küldjük el és a fejléc tartalma a __Bearer__ használata esetén a következőképpen néz ki:

    ```text
    Authorization: Bearer <token>
    ```
    
    A `JwtService` osztály forráskódja a következőképpen néz ki:
    
    ```java
    package org.vasvari.demo.service;


    import org.springframework.stereotype.Component;

    @Component
    public class JwtService {
        static final long EXPIRATIONTIME = 86400000;
        static final String PREFIX = "Bearer";
    }
    ```

2. Létrehozunk egy titkos kulcsot a __jjwt__ könyvtár `secretKeyFor` metódusával. Ez kizárólag demonstrációs célokra szolgál. Éles környezetben a titkos kulcsot az alkalmazás konfigurációs fájljából (__application.properties__) kellene beolvasnunk. A `getToken` metódus generál és visszaad egy tokent. 

    A `getAuthUser` metódus kinyeri a tokent a válasz __Authorization__ fejlécéből. Ezután a __jjwt__ könyvtár által biztosított `parserBuilder` metódust használjuk egy `JwtParserBuilder` példány létrehozásához. A `setSigningKey` metódust a titkos kulcs beállításához és a token ellenőrzéséhez. A `parseClaimsJws` metódus eltávolítja a __Bearer__ előtagot az __Authorization__ fejlécből. Végül a `getSubject` metódust használjuk a felhasználónév lekéréséhez. 

    A `JwtService` forráskód:

```java
package org.vasvari.demo.service;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

import java.security.Key;

import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Component;
import jakarta.servlet.http.HttpServletRequest;

import java.util.Date;

@Component
public class JwtService {

    static final long EXPIRATIONTIME = 86400000;
    static final String PREFIX = "Bearer";
    static final Key key = Keys.secretKeyFor(SignatureAlgorithm.HS256);

    public String getToken(String username) {
        String token = Jwts.builder()
                .setSubject(username)
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATIONTIME))
                .signWith(key)
                .compact();

        return token;
    }


    public String getAuthUser(HttpServletRequest request) {
        String token = request.getHeader(HttpHeaders.AUTHORIZATION);
        if (token != null) {
            String user = Jwts.parserBuilder()
                    .setSigningKey(key)
                    .build()
                    .parseClaimsJws(token.replace(PREFIX, ""))
                    .getBody()
                    .getSubject();
            
            if (user != null) 
                return user;
        }
        return null;
    }
}
```

3. Következő lépésként egy új osztályt adunk hozzá az azonosításhoz szükséges hitelesítő adatok tárolásához. Itt használhatunk egy __Java rekordot__, amelyet a _Java 14_-ben vezettek be. A rekord jó választás, ha olyan osztályra van szükségünk, amely csak adatokat tárol. Hozzunk létre egy új rekordot __New | Java Class | Record__, `AccountCredentials` néven a __org.vasvari.demo.entity__ csomagban:

![__9. ábra:__ Record létrehozása.](/assets/images/vasvari/springboot/security10.webp)

A rekordnak két mezője van: felhasználónév és jelszó. Itt van a rekord forráskódja. Mint láthatod, nem kell gettereket és settereket írnunk, amikor ezt használjuk:

```java
package org.vasvari.demo.entity;

public record AccountCredentials(String username, String password) {

}
```

4. Most implementálni fogjuk a bejelentkezésért felelős vezérlőosztályt. A __POST__ metódus használatával bejelentkezhetünk a __/login__ végponton, felhasználónév és jelszó a kérés törzsében (__request body__) kerül elküldésre. 

    Hozzunk létre egy osztályt `LoginController` néven a __org.vasvari.demo.controller__ csomagban. Egy `JwtService` példányt kell injektálnunk a vezérlőosztályba, mert az felelős a sikeres bejelentkezés esetén egy aláírt __JWT__ generálásáért.

```java
package org.vasvari.demo.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.vasvari.demo.entity.AccountCredentials;
import org.vasvari.demo.service.JwtService;

@RestController
public class LoginController {
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public LoginController(JwtService jwtService, AuthenticationManager authenticationManager) {
        this.jwtService = jwtService;
        this.authenticationManager = authenticationManager;
    }

    @PostMapping("/login")
    public ResponseEntity<?> getToken(@RequestBody AccountCredentials credentials) {
        return null;
    }
}
```

5. Következő lépésként implementálni fogjuk a `getToken` metódust, amely a bejelentkezés funkcionalitását kezeli.

    Az `AuthenticationManager`-t használjuk az azonosításhoz. Ez az azonosítás során a kérésből származó hitelesítő adatokat használja. Ezután a `JwtService` osztály `getToken` metódusát használjuk egy __JWT__ generálásához. Végül egy _HTTP_ választ építünk fel, amely tartalmazza a generált __JWT__-t az __Authorization__ fejlécben:

```java
package org.vasvari.demo.controller;

import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.vasvari.demo.entity.AccountCredentials;
import org.vasvari.demo.service.JwtService;

@RestController
public class LoginController {
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public LoginController(JwtService jwtService, AuthenticationManager authenticationManager) {
        this.jwtService = jwtService;
        this.authenticationManager = authenticationManager;
    }

    @PostMapping("/login")
    public ResponseEntity<?> getToken(@RequestBody AccountCredentials credentials) {
        UsernamePasswordAuthenticationToken creds =
                new UsernamePasswordAuthenticationToken(credentials.username(), credentials.password());
        Authentication auth = authenticationManager.authenticate(creds);
        String jwts = jwtService.getToken(auth.getName());
        
        return ResponseEntity.ok()
                .header(HttpHeaders.AUTHORIZATION, "Bearer " + jwts)
                .header(HttpHeaders.ACCESS_CONTROL_EXPOSE_HEADERS, "Authorization")
                .build();
    }
}
```

6. Beinjektáltuk az `AuthenticationManager`-t a `LoginController` osztályba is, ezért a `SecurityConfig` osztályba hozzá kell adnunk a következő kódot:

```java
package org.vasvari.demo;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.vasvari.demo.service.UserDetailsServiceImpl;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
    private final UserDetailsServiceImpl userDetailsService;

    public SecurityConfig(UserDetailsServiceImpl userDetailsService) {
        this.userDetailsService = userDetailsService;
    }

    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService)
                .passwordEncoder(new BCryptPasswordEncoder());
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authConfig) throws Exception {
        return authConfig.getAuthenticationManager();
    }
}
```

7. Ebben a lépésben be kell konfigurálnunk a __Spring Security__ funkcionalitást. A  `SecurityFilterChain` meghatározza, mely utak vannak védve és melyek nem.

    Adjuk hozzá a következő `filterChain` metódust a `SecurityConfig` osztályhoz. A metódusban meghatározzuk, hogy a __/login__ végpontra történő __POST__ metódusú kérések engedélyezettek hitelesítés nélkül, míg a többi végpont esetén az azonosítás szükséges. 
    
    Emellett meghatározzuk, hogy a __Spring Security__ sosem hoz létre munkamenetet (__session__) és ez által letilthatjuk a __cross-site request forgery__ (__csrf__) támadásokat. 
    
    A __JWT__-k úgy vannak kialakítva, hogy állapot mentesek legyenek, ami csökkenti a munkamenethez (__session__) kapcsolódó sebezhetőségek kockázatát. A _HTTP_ biztonsági konfigurációban Lambdákat (__λ__) fogunk használni:

```java
package org.vasvari.demo;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.vasvari.demo.service.UserDetailsServiceImpl;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
    private final UserDetailsServiceImpl userDetailsService;

    public SecurityConfig(UserDetailsServiceImpl userDetailsService) {
        this.userDetailsService = userDetailsService;
    }

    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService)
                .passwordEncoder(new BCryptPasswordEncoder());
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.csrf((csrf) -> csrf.disable())
                .sessionManagement((sessionManagement) ->
                        sessionManagement
                                .sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authorizeHttpRequests((authorizeHttpRequests) ->
                        authorizeHttpRequests
                                .requestMatchers(HttpMethod.POST, "/login")
                                .permitAll()
                                .anyRequest()
                                .authenticated());
        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authConfig) throws Exception {
        return authConfig.getAuthenticationManager();
    }
}
```

:::note Néhány más programozási nyelven a lambdák névtelen függvényeknek nevezik. A lambdák használata javítja a kód olvashatóságát és csökkenti a sablonkódokat.
:::

8. Végül készen állunk a bejelentkezési funkcionalitás tesztelésére. Nyissuk meg a __Postmant__ és küldjünk el egy __POST__ kérést a http://localhost:8080/login URL-címre.

    Adjunk meg egy érvényes felhasználót a kérés törzsében, például: 
    
    ```json
    {
        "username":"user",
        "password":"user"
    }
    ```
    
    és válasszuk ki a legördülő listából a __JSON__ formátumot. 

    A __Postman__ automatikusan beállítja a __Content-Type__ fejlécet __application/json__ típusra.

    Látnunk kell egy __Authorization__ fejlécet a válaszban, amely tartalmazza az aláírt __JWT__-t, hasonlóan ahhoz, amit a következő képernyőképen láthatunk:

![__11. ábra:__ Bejelentkezési helyes authentikációs adatokkal.](/assets/images/vasvari/springboot/security11.webp)

Tesztelhetjük a bejelentkezést a helytelen jelszó megadásával és megfigyelhetjük, hogy a válasz nem tartalmazza az __Authorization__ fejlécet.

### További kérések kezelésének védelme

A bejelentkezési kérést most már véglegesítettük és áttérünk a többi bejövő kérés hitelesítésének kezelésére. A hitelesítési folyamat során olyan szűrőket használunk, amelyek lehetővé teszik számunkra, hogy bizonyos műveleteket végezzünk el, mielőtt egy kérés eljutna a vezérlőhöz (__controller__), vagy mielőtt egy válasz eljutna a klienshez (__client__).

A következő lépések a hitelesítési folyamat többi részét mutatják be:

1. Egy szűrőosztályt fogunk használni az összes többi bejövő kérés hitelesítésére.

    Hozzunk létre egy új osztályt `AuthenticationFilter` néven a gyökércsomagban. Az `AuthenticationFilter` osztály kiterjeszti a  `OncePerRequestFilter` interfészét, amely biztosít egy `doFilterInternal` metódust, ahol megvalósítjuk a hitelesítésünket. 

    A szűrő osztályba be kell injektálnunk egy `JwtService` példányt, mert ez szükséges a __token__ ellenőrzéséhez a kérésből. A `SecurityContextHolder`-ben a __Spring Security__ tárolja a hitelesített felhasználó adatait.

```java
package org.vasvari.demo;

import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import org.vasvari.demo.service.JwtService;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;


@Component
public class AuthenticationFilter extends OncePerRequestFilter {
    private final JwtService jwtService;

    public AuthenticationFilter(JwtService jwtService) {
        this.jwtService = jwtService;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain)
            throws ServletException, java.io.IOException {

        String jws = request.getHeader(HttpHeaders.AUTHORIZATION);

        if (jws != null) {
            String user = jwtService.getAuthUser(request);
            Authentication authentication =
                    new UsernamePasswordAuthenticationToken(user, null, java.util.Collections.emptyList());
            SecurityContextHolder.getContext()
                    .setAuthentication(authentication);
        }

        filterChain.doFilter(request, response);
    }
}
```

2. Hozzá kell adnunk a szűrő osztályunkat a __Spring Security__ konfigurációhoz. Nyissuk meg a __SecurityConfig__ osztályt és injektáljuk be az imént implementált `AuthenticationFilter` osztályunkat. 

    Majd módosítsuk a __SecurityConfig__ osztály __filterChain__ metódusát és adjuk hozzá a következő kódsorokat:

```java{22,26,46,47}
package org.vasvari.demo;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.vasvari.demo.service.UserDetailsServiceImpl;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
    private final UserDetailsServiceImpl userDetailsService;
    private final AuthenticationFilter authenticationFilter;

    public SecurityConfig(UserDetailsServiceImpl userDetailsService, AuthenticationFilter authenticationFilter) {
        this.userDetailsService = userDetailsService;
        this.authenticationFilter = authenticationFilter;
    }

    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService)
                .passwordEncoder(new BCryptPasswordEncoder());
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.csrf((csrf) -> csrf.disable())
                .sessionManagement((sessionManagement) ->
                        sessionManagement
                                .sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authorizeHttpRequests((authorizeHttpRequests) ->
                        authorizeHttpRequests
                                .requestMatchers(HttpMethod.POST, "/login")
                                .permitAll()
                                .anyRequest()
                                .authenticated())
                .addFilterBefore(authenticationFilter,
                        UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authConfig) throws Exception {
        return authConfig.getAuthenticationManager();
    }
}
```

3. Most már készen állunk a tesztelésére. Miután elindítottuk az alkalmazást bejelentkezhetünk a __/login__ végpont meghívásával a __POST__ metódussal. 

    Sikeres bejelentkezést követően a többi __RESTful__ szolgáltatási végpontot a bejelentkezéskor kapott __JWT__ segítségével hívhatjuk meg az __Authorization__ fejléc használatával.

    ![__12. ábra:__ Authorization fejléc.](/assets/images/vasvari/springboot/security11header.webp)

    Másoljuk ki a __token__-t a bejelentkezés válaszából (__Bearer__ előtag nélkül), majd addjuk hozzá az __Authorization__ fejlécet. 

    ![__13. ábra:__ Authorization fejléc hozzáadása.](/assets/images/vasvari/springboot/security12.webp)
    
    Az alábbi képernyőképen látható példa mutatja be, ahol egy __GET__ kérés történik a __/cars__ végpont felé:

    ![__14. ábra:__ Sikeres __GET__ kérés a /cars végpontra.](/assets/images/vasvari/springboot/security13.webp)


:::warning Minden alkalommal, amikor az alkalmazást újraindítjuk újra be kell azonosítani magunkat.

A __JWT__-nek nem tart örökké az érvényessége, mivel lejárati időt rendeltünk hozzá. Mi demonstráció céljából hosszú lejárati időt állítottunk be. Azonban egy éles környezetben általában percekben mérjük az időt, a konkrét felhasználási esettől függően. Fontos, hogy az éles alkalmazásban az időkorlátot a felhasználás jellege és igényei szerint állítsuk be és mindig vegyük figyelembe a biztonsági szempontokat.
:::

### Kivételek kezelése

A hitelesítés során a kivételeket is kezelnünk kell. Jelenleg, ha rossz jelszóval próbálunk bejelentkezni, akkor minden magyarázat nélkül egy __403 Forbidden__ státuszt kapunk. A __Spring Security__ biztosít egy `AuthenticationEntryPoint` interfészt, amelyet a kivételek kezelésére használhatunk. Lássuk, hogyan működik.

1. Hozzunk létre egy új, `AuthEntryPoint` nevű osztályt a gyökércsomagban, amely az `AuthenticationEntryPointot` interfészt valósítja meg. Létrehozzuk a `commence` metódust, amely paraméterként egy kivételt kap. Kivétel esetén a válasz státuszát __401 Unauthorized__-re állítjuk és egy kivételüzenetet írunk a választestbe.

```java
package org.vasvari.demo;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.MediaType;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.io.PrintWriter;

@Component
public class AuthEntryPoint implements AuthenticationEntryPoint {
    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException) throws IOException, ServletException {
        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
        PrintWriter writer = response.getWriter();
        writer.println("Error: " + authException.getMessage());
    }
}
```

2. A __Spring Security__-t kell konfigurálnunk a kivételek kezeléséhez. Injektáljuk be az `AuthEntryPoint` osztályunkat a `SecurityConfig` osztályba, majd módosítsuk a `filterChain` metódust, ahogy az alábbi kódban láthatjuk:

```java
package org.vasvari.demo;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.vasvari.demo.service.UserDetailsServiceImpl;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
    private final UserDetailsServiceImpl userDetailsService;
    private final AuthenticationFilter authenticationFilter;
    private final AuthEntryPoint exceptionHandler;

    public SecurityConfig(UserDetailsServiceImpl userDetailsService, AuthenticationFilter authenticationFilter, AuthEntryPoint exceptionHandler) {
        this.userDetailsService = userDetailsService;
        this.authenticationFilter = authenticationFilter;
        this.exceptionHandler = exceptionHandler;
    }

    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService)
                .passwordEncoder(new BCryptPasswordEncoder());
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.csrf((csrf) -> csrf.disable())
                .sessionManagement((sessionManagement) ->
                        sessionManagement
                                .sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authorizeHttpRequests((authorizeHttpRequests) ->
                        authorizeHttpRequests
                                .requestMatchers(HttpMethod.POST, "/login")
                                .permitAll()
                                .requestMatchers( "/api-docs/**", "/swagger-ui/**")
                                .permitAll()
                                .anyRequest()
                                .authenticated())
                .addFilterBefore(authenticationFilter,
                        UsernamePasswordAuthenticationFilter.class)
                .exceptionHandling((exceptionHandling) ->
                        exceptionHandling
                                .authenticationEntryPoint(exceptionHandler));

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authConfig) throws Exception {
        return authConfig.getAuthenticationManager();
    }
}
```

3. Innentől kezdve, ha helytelen hitelesítő adatokkal próbálkozunk, akkor válaszként egy __401 Unauthorized__ hibát kapunk. A hibaüzenetet a __Body__ részében láthatjuk, mely az alábbi képernyőképen látható:

![__15. ábra:__ Error: Bad credentials.](/assets/images/vasvari/springboot/security14.webp)


### CORS szűrő hozzáadása

Hozzáadunk egy __cross-origin resource sharing__ (__CORS__) szűrőt a biztonsági konfigurációs osztályunkhoz. A __CORS__ olyan fejléceket (__headers__) vezet be, amelyek segítik az ügyfelet (__client__) és a kiszolgálót (__server__) eldönteni, hogy engedélyezve vagy megtagadva legyenek-e a __cross-origin__ kérések. A __CORS__ szűrőre a frontendnek van szüksége, amely más eredetű kéréseket küld. A __CORS__ szűrő elfogja a kéréseket és ha azokat cross-origin-ként azonosítja, megfelelő fejléceket ad a kéréshez. Ehhez a célhoz a __Spring Security__ `CorsConfigurationSource` interfészét fogjuk használni.

Ebben a példában engedélyezni fogjuk az összes _HTTP_-metódust és fejlécet.

1. Adjuk hozzá a következő importokat és metódusokat a `SecurityConfig` osztályához a __CORS__ szűrő engedélyezéséhez:

```java
@Bean
public CorsConfigurationSource corsConfigurationSource() {
    UrlBasedCorsConfigurationSource source =
            new UrlBasedCorsConfigurationSource();
    CorsConfiguration config = new CorsConfiguration();
    config.setAllowedOrigins(Arrays.asList("*"));
    config.setAllowedMethods(Arrays.asList("*"));
    config.setAllowedHeaders(Arrays.asList("*"));
    config.setAllowCredentials(false);
    config.applyPermitDefaultValues();
    source.registerCorsConfiguration("/**", config);
    return source;
}
```

Ha explicit módon szeretnénk meghatározni a forrást, azt a következő módon állíthatjuk be:

```java
// localhost:3000 is allowed
config.setAllowedOrigins(Arrays.asList ("http://localhost:3000"));
```

A `cors()` függvényt is hozzá kell adnunk a `filterChain` metódushoz, ahogy azt a következő kódrészletben láthatjuk:

```java{4}
@Bean
public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http.csrf((csrf) -> csrf.disable())
            .cors(withDefaults())
            .sessionManagement((sessionManagement) ->
                    sessionManagement
                            .sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .authorizeHttpRequests((authorizeHttpRequests) ->
                    authorizeHttpRequests
                            .requestMatchers(HttpMethod.POST, "/login")
                            .permitAll()
                            .requestMatchers( "/api-docs/**", "/swagger-ui/**")
                            .permitAll()
                            .anyRequest()
                            .authenticated())
            .addFilterBefore(authenticationFilter,
                    UsernamePasswordAuthenticationFilter.class)
            .exceptionHandling((exceptionHandling) ->
                    exceptionHandling
                            .authenticationEntryPoint(exceptionHandler));

    return http.build();
}
```

Most már biztonságossá tettük a backendünket. Csak a szerep-alapú biztonság alapjai vannak hátra, amelyet használhatunk a __Spring Boot__ alkalmazásunkban a részletesebb hozzáférési ellenőrzés érdekében.

## Szerep-alapú biztonság

A __Spring Security__-ben lehetőség van szerepkör alapú biztonság meghatározására, ahol a felhasználók egy vagy több szerepkörrel rendelkezhetnek. Ezek a szerepkörök gyakran hierarchikus struktúrával rendelkeznek, például __ADMIN__, __MANAGER__, __USER__.

Mi most egyszerű szerepköröket definiálunk a felhasználóink számára, __ADMIN__ és __USER__. A következő példakódban meghatározzuk, hogy mely végpontok eléréséhez milyen szerepkörökre van szükség. Például a `/admin/**` végponthoz az __ADMIN__ szerepkör szükséges a hozzáféréshez, a `/user/**` végponthoz pedig a __USER__ szerepkör. A `hasRole()` metódust használjuk, amely igazat ad vissza, ha a felhasználó rendelkezik a megadott szerepkörrel:

```java
@Bean
public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http.csrf((csrf) -> csrf.disable())
        .cors(withDefaults())
        .sessionManagement((sessionManagement) -> 
            sessionManagement
                    .sessionCreationPolicy(SessionCreationPolicy.STATELESS))
        .authorizeHttpRequests((authorizeHttpRequests) ->
            authorizeHttpRequests
                    .requestMatchers("/admin/**")
                    .hasRole("ADMIN")
                    .requestMatchers("/user/**")
                    .hasRole("USER")
                    .anyRequest().authenticated())
    
    return http.build();
}
```

A __Spring Security__ biztosítja a `@PreAuthorize`, `@PostAuthorize`, `@PreFilter`, `@PostFilter` és `@Secured` annotációkat, amelyek a metódus szintű biztonság alkalmazására szolgálnak. A metódus szintű biztonság alapértelmezés szerint nincs engedélyezve a __spring-boot-starter-security__-ben. Ezt a __Spring__ konfigurációs osztályában kell engedélyeznie az `@EnableMethodSecurity` annotáció használatával:

```java
@SpringBootApplication
@EnableMethodSecurity
public class DemoApplication implements CommandLineRunner {
}
```

A következő példában a __USER__ szerepkörrel rendelkező felhasználók az `updateCar()` metódust, az __ADMIN__ szerepkörrel rendelkező felhasználók pedig a `deleteOwner()` metódust hajthatják végre. A `@PreAuthorize` annotáció a metódus végrehajtása előtt ellenőrzi a szabályt. Ha a felhasználó nem rendelkezik a megadott szerepkörrel, a __Spring Security__ megakadályozza a metódus végrehajtását és egy `AccessDeniedException`-t dob:

```java
@Service
public class CarService {

    @PreAuthorize("hasRole('USER')")
    public void updateCar(Car car) {
        // This method can be invoked by user with USER role.
    }

    @PreAuthorize("hasRole('ADMIN')")
    public void deleteOwner(Car car) {
        // This method can be invoked by user with ADMIN role.
    }
}
```

## Összefoglaló

A __Spring Boot__ backendünk biztonságosabbá tételére koncentráltunk. Azzal kezdtük, hogy védelmet adtunk a __Spring Security__ segítségével. Ezután implementáltuk a __JWT__ hitelesítést. A __JWT__-ket általában a __RESTful API__-k biztonságossá tételére használják és ez egy könnyű hitelesítési módszer, amely megfelel a mi igényeinknek. 

![__16. ábra:__ 💪🏼](/assets/images/vasvari/springboot/success.webp)