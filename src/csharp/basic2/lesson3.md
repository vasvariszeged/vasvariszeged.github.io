---
icon: fa-solid fa-3
---

# Switch

:::note Röviden
- A `switch`-ek egy alternatívája a többrészes if utasításoknak.
:::

Az `if` utasítások egyszerűek, de néha hosszú elágazásokkal és sok lehetséges útvonallal rendelkeznek ezért ez úgy nézhet ki, mint egy vasúti pályaudvar. Az előbb említett hasonlat nem véletlen a C#-ban.

Van egy `switch` parancsunk, amelyet éppen erről a vasúti pályaudvar hasonlatról neveztek el. Olyan esetekre készült, amikor  egy adott érték jellemzői alapján választunk egy lehetséges útvonalat a sok közül.

Minden `switch`-et írhatnánk `if` és `else` utasítással is. A helyzettől függ, hogy épp melyiket használjuk.

## A switch utasítás

A `switch` működésének bemutatásához tekintsük példának egy menürendszert, ahol a felhasználó kiválasztja a kívánt menüpont számát, majd a program végrehajtja a kiválasztott feladatot:

```console
Avast, matey! What be ye desire?
1 – Rest
2 – Pillage the port
3 – Set sail
4 – Release the Kraken
What be the plan, Captain?
```

Így egyszerűnek tünhet. A megvalósítása valahogy így nézne ki:

```csharp
int choice = Convert.ToInt32(Console.ReadLine());

if (choice == 1)
    Console.WriteLine("Ye rest and recover your health.");
else if (choice == 2)
    Console.WriteLine("Raiding the port town get ye 50 gold doubloons.");
else if (choice == 3)
    Console.WriteLine("The wind is at your back; the open horizon ahead.");
else if (choice == 4)
    Console.WriteLine("'Tis but a baby Kraken, but still eats toy boats.");
else
    Console.WriteLine("Apologies. I do not know that one.");
```

Ezt akár megvalósíthatjuk a `switch` használatával is:

```csharp
switch (choice)
{
    case 1:
        Console.WriteLine("Ye rest and recover your health.");
        break;
    case 2:
        Console.WriteLine("Raiding the port town get ye 50 gold doubloons.");
        break;
    case 3:
        Console.WriteLine("The wind is at your back; the open horizon ahead.");
        break;
    case 4:
        Console.WriteLine("'Tis but a baby Kraken, but still eats toy boats.");
        break;
    default:
        Console.WriteLine("Apologies. I do not know that one.");
        break; 
}
```

A fenti kód bemutatja a `switch` utasítás alapstruktúráját. A `switch` kulcsszóval kezdődik. A zárójelek között szerepel az érték, amely alapján a döntések születnek. A kapcsoszárójelek jelölik a `switch` blokk kezdetét és végét.

A `switch` utasítás minden lehetséges ága a `case` kulcsszóval kezdődik, amelyet az ellenőrizendő érték követ. Ezután következnek azok a utasítások, amelyek lefutnak, ha a jelenlegi ág feltétele igaz. Minden ágon belül itt a `Console.WriteLine`-t használjuk, hogy megfelelő üzenetet írjunk ki. Több utasítás is bekerülhet minden ágba (_kapcsos zárójelek nélkül_).

Minden ágnak egy `break` utasítással kell végződnie. A `break` utasítás azt jelzi, hogy a végrehajtás folyamata ezen a ponton leáll. A `default` kulcsszó egy általános érték, ha nincs más passzoló feltétel. A `default` ág használata gyakori, de opcionális. Ha a helyzet nem igényli, akkor hagyjuk ki.

A fenti kód az `int` típust használja a `switch` feltételében, de bármilyen típust használhatunk.

## Switch mint kifejezés <Badge text="opcionális" type="tip" vertical="middle" />

A `switch` kifejezések formájában is létezik. Ebben a formában minden ág egy kifejezés és az egész `switch` is egy kifejezés. A menünk így nézne ki, ha `switch` kifejezésként van megfogalmazva:

```csharp
string response;

response = choice switch
{
    1 => "Ye rest and recover your health.",
    2 => "Raiding the port town get ye 50 gold doubloons.",
    3 => "The wind is at your back; the open horizon ahead.",
    4 => "'Tis but a baby Kraken, but still eats toy boats.", 
    _ => "Apologies. I do not know that one."
};

Console.WriteLine(response);
```

A `switch` kifejezés szerkezetében sok közös van, de számos különbség is: 

- A `case` címkék eltűntek, helyettük csak az adott érték maradt meg, amelyet ellenőrizni szeretnénk. 
- Minden ágnak van egy nyíl operátora (`=>`), amely szétválasztja az ág feltételét az kifejezésétől. 
- A `break` utasítások is eltűntek minden ágnak csak egy kifejezése lehet, így a végét jelző `;` szükségesség is megszűnt.
- A `default` kulcsszó is eltűnt, helyette egyetlen alsóvonallal - a __wildcarddal__ - lett helyettesítve. 

::: note switch utasítás vs switch kifejezés
A `switch` __utasítás__ használatakor, ha egyik ág sem egyezik meg a feltétellel, akkor a program nem hajt végre semmilyen műveletet. Ez nem okoz gondot.

A `switch` __kifejezések__ viszont mindig vissza kell, hogy adjanak egy értéket és ha egyik ág sem illeszkedik a feltételre, akkor a program hibát jelez és leáll.
:::

Mindkét `switch` és az `if/else` utasításnak is megvannak a saját alkalmazási területük. Egyik sem feltétlenül jobb, mint a másik. Általában azt fogjuk választani, ami a legegyszerűbb és legtisztább kódot eredményezi a feladathoz.