---
icon: fa-solid fa-4
---

# Megjegyzések

:::note Röviden
- A megjegyzések lehetővé teszik, hogy szövegeket helyezzünk el a programban, amelyeket a számítógép figyelmen kívül hagy. Segíthet megérteni vagy emlékezni arra, mit csinál a kód.
- Azok a szövegrészletek, amelyek két perjellel kezdődnek (`//`) megjegyzések, ahogyan azok is, amelyek a `/*` és `*/` között vannak.
:::

A megjegyzések olyan szövegrészletek a programkódunkban, amelyeket embereknek - tehát nekünk és más programozóknak - szántak, mint a kódhoz tartozó magyarázatok. A fordító figyelmen kívül hagyja a megjegyzéseket. A megjegyzéseknek számos felhasználási módjuk van:

- Hozzáadhatunk egy leírást arról, hogyan működik egy kódrészlet, hogy később ne kelljen megpróbálnunk visszafejteni.
- Emlékeztetőket hagyhatunk a kódban a még elvégzendő dolgokról. Ezeket __TODO__ megjegyzéseknek nevezzük.
- Hozzáadhatsz dokumentációt arról, hogy egy adott dolgot hogyan kell használni vagy hogyan működik. Az ilyen típusú dokumentációs megjegyzések hasznosak lehetnek, mert valaki ránézhet a kód egy részletére és megtudhatja, hogyan működik anélkül, hogy minden kódsorát tanulmányoznia kellene.
- Néha arra használjuk, hogy a kódot ideiglenesen kivegyük a fordító látóköréből. Tegyük fel például, hogy egy kód nem működik. A kódot átmenetileg megjegyzésé (_kommenté_) alakíthatjuk, amíg készen nem áll arra, hogy visszarakjuk. Ez csak ideiglenes lehet! Ne hagyjunk kikommentált kódot a programunkban.

Kommentet bárhol kezdhetünk a kódon belül, két perjel (`//`) elhelyezésével. E két perjel után minden, ami a sorban van, megjegyzéssé válik, amit a fordító úgy tesz, mintha nem is létezne. Például:

```csharp
// This is a comment where I can describe what happens next.
Console.WriteLine("Hello, World!");
Console.WriteLine("Hello again!");
// This is also a comment.
```


Egy `/*` és `*/` közé helyezett megjegyzéssel is tehetünk megjegyzést:

```csharp
Console.WriteLine("Hello"); /* This is a comment that ends here... */
```

Ezzel többsoros és beágyazott megjegyzéseket is készíthetünk:

```csharp
/* This is a multi-line comment. 
    It spans multiple lines. 
    Isn't it neat? 
*/

Console.WriteLine("Hi " /* Here comes the good part! */ + name);
```

Ez a második példa kicsit körülményes, de megvan a maga haszna, például amikor olyan kódot kommentelünk ki, amelyet ideiglenesen figyelmen kívül akarunk hagyni. Természetesen többsoros megjegyzéseket is készíthetünk dupla perjeles megjegyzésekkel csak a perjeleket minden sorba ki kell tennünk. 

:::info Sok C# programozó jobban kedveli a dupla perjeles megjegyzéseket, mint a többsoros /* és */ megjegyzéseket, de mindkettő gyakori.
:::

## Hogyan lehet jó megjegyzéseket készítenni?

A megjegyzések hozzáadásának mechanizmusa elég egyszerű. Az igazi kihívást, hogy értelmes megjegyzéseket tegyünk bele.

Az első javaslatom az, hogy ne hagyjuk a __TODO__ vagy emlékeztető megjegyzéseket túl hosszúra nyúlni. Második javaslatom pedig, ne írjunk olyan dolgokat, amelyek magából a kódból gyorsan kiderülnek. 

Az alábbi első megjegyzés nem ad hozzáadott értéket, míg a második igen:

```csharp
// Uses Console.WriteLine to print "Hello, World!"
Console.WriteLine("Hello, World!");
// Printing "Hello, World!" is a common first program to make. 
Console.WriteLine("Hello, World!");
```

Harmadszor, találjuk meg az egyensúlyt, hogy mennyit kommentelünk. Lehet, hogy túl kevés vagy éppen túl sok magyarázatot fűzünk hozzá. Ha nem tudjuk értelmezni a kódunkat, amikor néhány hét múlva újra megnézzük, akkor valószínűleg nem kommentelünk eleget.

Új programozóként a túl kevés megjegyzés következményei általában rosszabbak, mint a túl sok megjegyzésé. Ne használjuk a megjegyzéseket olvashatatlan kód elmagyarázásra. Tegyük a kódot könnyen érthetővé, majd csak annyi megjegyzést fűzzünk hozzá, hogy tisztázzuk a fontos, de nem nyilvánvaló részleteket.

