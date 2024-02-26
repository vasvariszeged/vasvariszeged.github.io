---
icon: fa-solid fa-3
---

# Tuple


:::note Röviden
- A tuple-ök több elemet egyesítenek egy csomagba.
- Adhatunk neveket a tuple elemeinek, amelyekre később hivatkozhatunk.
- A tuple-öket használhatjuk típusként is.
:::

A tuple egy olyan eszköz, amely lehetővé teszi, hogy több változót egy csoportba rendezzünk. Ez hasznos lehet bizonyos esetekben, de hamarosan megismerünk más, hatékonyabb eszközöket is. 
:::danger A tuple-ok nem túl gyakoriak a C# programozásban.
:::

A tuple-ok előnye, hogy egyszerűen összekapcsolhatunk különböző adatokat, ahogy az alábbi ábra mutatja:

![Ez a kép nagyjából úgy néz ki, mint az eredeti __Tetris High Score__ táblázat. Hogyan tudnánk ezeket a pontszámokat ábrázolni a programunkban? Ezek a pontszámok több mint egyetlen `int` érték. Minden pontszám tartalmazza a játékos nevét, a játékos pontszámát és a játékos szintjét.](/assets/images/vasvari/csharp/tetris.png)


Elképzelhető, hogy három változót készítünk:
- `string name`, 
- `int points`,
- és `int level` 

egyetlen pontszámhoz. De a teljes táblázat elkészítéséhez mindegyikből háromra van szükségünk. Ezt akár tömbökkel is megtehetnénk:

```csharp
string[] names = new string[3] { "ROB", "JOHN", "JANE" };
int[] points = new int[3] { 12420, 8543, -1 };
int[] level = new int[3] { 15, 9, 1 };
```

De ez úgy nézki, mintha oldalra rendeztük volna az adatainkat. Ahelyett, hogy __ROB__-ot a pontszámával és a szintjével együtt helyeztük volna el, az összes nevet, pontot és szintet egy helyre tettük.

Ebben az esetben a pontszám olyan, mint egy saját koncepció vagy elképzelés. Tehát új típust kell létrehoznunk és szükségünk van valamilyen módszerre, hogy egy pontszám információját ábrázoljuk. Amikor több adatelemet ilyen módon kombinálunk, akkor ezt összetett típusnak nevezzük, mert a nagyobb dolog a kisebb darabokból áll össze.

## Tuple alapjai

A C# nyelvben az összetett típusok létrehozásának __nem túl gyakran használt__ eszköze a tuple. A tuple lehetővé teszi, hogy több darabot egyetlen elemmé kombináljunk. A név a matematika világából származik.

Egy új tuple érték létrehozása annyira egyszerű, mint kiválasztani azokat a darabokat, amelyekre szükségünk van. Majd ezeket zárójelbe tesszük és vesszővel elválasztjuk:

```csharp
(string, int, int) score = ("ROB", 12420, 15);
```

A változók típusa hasonlóan alakul, a típusok felsorolása zárójelben, vesszővel elválasztva. Ez egy hosszú típusnévhez vezet és bár az egyértelműség kedvéért kerültük a `var` használatát, de ez egy jó példa arra, hogy előnyben részesítsük azt:

```csharp
var score = ("ROB", 12420, 15);
```

A pontszám típusa egy 3-as tuple, amely egy `string`ből, egy `int`-ből és egy `int`-ből áll.
A tuple-ben lévő elemekhez így férhetünk hozzá:

```csharp
Console.WriteLine($"Name:{score.Item1} Level:{score.Item3} Score:{score.Item2}");
```

Ezek a nevek hagynak kívánnivalót maguk után. A pontszámot az `Item2` vagy az `Item3` tartalmazta? Könnyű összekeverni őket és még rosszabb a helyzet a sok elemű tuple-ökkel. Hamarosan megnézzük, hogy hogyan rendelhetünk alternatív neveket a tuple-ök elemeihez, de a háttérben a nevek valójában `Item1`, `Item2` és `Item3` marad.

## Tuple elemeinek a neve

A tuple elemeinek nevei a következők: `Item1`, `Item2`, stb. A színfalak mögött pontosan így működik de a fordító megengedi, hogy alternatív nevük legyen. Ez sokkal olvashatóbb kódot eredményezhet. Ha nem használunk `var`-t, akkor a tuple minden egyes eleméhez neveket rendelhetünk a következőképpen:

```csharp
(string Name, int Points, int Level) score = ("ROB", 12420, 15);
Console.WriteLine($"Name: {score.Name} Level: {score.Level} Score: {score.Points}");
```

Ha a változók deklarálásakor neveket helyezünk a típusok mellé, akkor hivatkozhatunk ezekre a típusokra. Nevekre később, ahogy a második sorban látható.

:::info Nem szükséges minden egyes tuple tagnak nevet adni.
Minden névtelen elem megtartja az eredeti __ItemN__ (_n = 1,2,3,..._) nevét.

```csharp
(string Name, int, int) score = ("ROB", 12420, 15);
Console.WriteLine($"Name:{score.Name} Level:{score.Item3} Score:{score.Item2}");
```
:::

Ha `var`-t használunk, elveszítjük a lehetőségét annak, hogy ilyen módon adjunk nevet az elemeknek. De annyira azért nem vagyunk szerencsétlenek mert neveket is adhatunk egy tuple-nek, amikor megalkotjuk:

```csharp
var score = (Name: "ROB", Points: 12420, Level: 15);
Console.WriteLine($"Name:{score.Name} Level:{score.Level} Score:{score.Points}");
```
Ha a `var`-t ily módon használjuk, akkor nem csak a tuple-t alkotó típusokra következtet, hanem a nevekre is.

Ezek a példák segítenek illusztrálni, hogy bár a nevek hozzáadása rugalmasságot és  tisztább kódot eredményezhet, de nem részei a tuple-nek magának. A tuple-ök esetében a nevek csak kozmetikaiak.

## Tuple-ök és metódusok

Bár a tuple típusok bonyolultabbak, gyakorlati szempontból csak egy másik típust jelentenek.

Például használhatjuk őket paramétertípusként vagy visszatérési értékként. Azokat a kódrészleteket, amivel eddig dolgoztunk, átalakíthatjuk egy olyan metódussá, amely tuple-t vár paraméterként és megjeleníti a pontszámokat:

```csharp
static void DisplayScore((string Name, int Points, int Level) score)
{
    Console.WriteLine($"Name:{score.Name} Level:{score.Level} Score:{score.Points}");
}
```

Alternatívaként elhagyhattuk volna a tuple elemek neveit és csak `Item1`, `Item2` és `Item3` elemeket használhattunk volna magában a metódusban. Viszont a paraméterek nem használhatnak `var`-t, ezért ebben az esetben kötelesek vagyunk felsorolni a tuple elemtípusokat.

:::danger A szintaxis itt trükkösebb, mert a tuple-ok és a metódus paraméterei egyaránt zárójelet és vesszőt használnak. Nagyon oda kell figyelni, ha így használjuk.
:::

Ha egy paraméter tuple típusú, akkor az ugyanolyan, mint bármely más paraméter és tetszőlegesen használhatjuk tuple és nem tuple (__hagyományos__) paraméterekkel együtt.

Ez vonatkozik a visszatérési típusokra is. Ha egy metódus tuple-t ad vissza, akkor a tuple elemeit zárójelben adjuk meg (__a nevek nem kötelezőek__) ott, ahol a visszatérési típusát írjuk le:

```csharp
static (string Name, int Points, int Level) GetScore()
{
    return ("ROB", 12420, 15);   
}

//static (string Name, int Points, int Level) GetScore() => ("ROB", 12420, 15);
```

A visszatérési érték által megadott neveknek azonban nem kell megegyezniük a változó nevével. Ez látható az alábbiakban, ahol minden más nevet használ:

```csharp
static void DisplayScore((string Name, int Points, int Level) score)
{
    Console.WriteLine($"Name:{score.Name} Level:{score.Level} Score:{score.Points}");
}

static (string N, int P, int L) GetScore()
{
    return ("ROB", 12420, 15);   
}

public static void Main(string[] args)
{
    var score = GetScore();
    DisplayScore(score);
}
```

Végül, nézzünk egy példát, amely visszaad egy `(string, int, int)` tuple-ökből álló tömböt, hogy létrehozzuk a __Tetris High Score__ táblázatot, amelyet az elején láthattunk:

```csharp
static (string Name, int Points, int Level)[] CreateHighScores()
{
    return new (string, int, int)[3]
    {
        ("ROB", 12420, 15),
        ("JOHN",  8543,  9),
        ("JANE",    -1,  1),
    }
};
```

A fenti kód a pontszámok végleges (__immutable__) listáját hozza létre, de egy valós helyzetben valószínűleg egy fájlban tárolnánk ezeket és onnan töltenénk be.

:::note A mutable és immutable kifejezések a programozásban használatosak és azt jelentik, hogy egy objektum vagy változó értéke megváltoztatható vagy nem. Például, ha egy mutable tömböt hozunk létre, akkor később hozzáadhatunk, törölhetünk vagy módosíthatunk elemeket benne. Ha viszont egy immutable tömböt hozunk létre, akkor az elemei állandóak és nem változtathatjuk meg őket. Immutable objektumokkal általában egyszerűbb és biztonságosabb programozni, mert nem kell aggódnunk az állapotváltozások miatt.
:::