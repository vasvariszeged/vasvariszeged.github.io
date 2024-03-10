---
icon: fa-solid fa-7
---

# Delegate 

:::note Röviden
- A `delegate` jelentősen növelheti a kódrészek rugalmasságát. 
- Lehetővé teszi, hogy algoritmusokat definiáljunk cserélhető elemekkel.
:::

A `delegate` egy olyan változó, amely egy metódusra vagy függvényre való hivatkozást tartalmaz. Ez a funkció lehetővé teszi, hogy a végrehajtható kóddarabokat úgy adjuk át, mintha egyszerű adatok lennének. Ez talán nem tűnik nagy dolognak, de sok mindent megváltoztat. A `delegate`-ek önmagukban is nagy teljesítményűek, de számos más nagy teljesítményű C#-funkció alapjául is szolgálnak.

Nézzük meg, milyen típusú problémákat segítenek megoldani. Tegyük fel, hogy van ez a metódus, amely egy számokat tartalmazó tömböt vár és egy új tömböt hoz létre, amelyben minden elemet megnöveltünk. Ha az __[1, 2, 3, 4, 5]__ tömböt adjuk meg, akkor az eredmény __[2, 3, 4, 5, 6]__ lesz.


```csharp
static int[] AddOneToArrayElements(int[] numbers)
{
    int[] result = new int[numbers.Length];
    for (int index = 0; index < result.Length; index++)
        result[index] = numbers[index] + 1;
    return result;
}
```

Mi van akkor, ha szükségünk van egy olyan metódusra is, amely helyettünk kivon egyet? Nem nagy ügy:

```csharp
static int[] SubtractOneFromArrayElements(int[] numbers)
{
    int[] result = new int[numbers.Length];
    for (int index = 0; index < result.Length; index++)
        result[index] = numbers[index] - 1;
    return result;
}
```

Ez a két metódus azonos, kivéve a kódot, amely az eredeti értékből kiszámítja az új tömb értékét. Létrehozhatnánk mindkét metódust így de ez nem ideális. Ez egy nagy darab duplikált kód lenne. 

Ha hibát kellene javítanunk, azt két helyen kellene megtennünk. Talán hozzáadhatnánk egy másik paramétert, amely jelzi, hogy mennyire változtassuk meg a számot:

```csharp{1,5}
static int[] ChangeArrayElements(int[] numbers, int amount)
{
    int[] result = new int[numbers.Length];
    for (int index = 0; index < result.Length; index++)
        result[index] = numbers[index] + amount;
    return result;
}
```

Az összeadáshoz és kivonáshoz hívhatjuk a `ChangeArrayElements(numbers, +1);` és a `Change ArrayElements(numbers, -1);` parancsokat de csak ennyi rugalmasságot kaphatunk. Mi lenne, ha egy hasonló metódust szeretnénk, amely minden elemet megduplázna vagy kiszámítaná minden elem négyzetgyökét?

A metódusnak a lehető legnagyobb rugalmasságot biztosítjuk, megkérhetjük, hogy egy konkrét szám hozzáadása helyett kérjen egy használandó metódust.

Ezt könnyebb egy példával szemléltetni. Kezdjük az `AddOne`, `SubtractOne` és `Double` metódusok definiálásával:


```csharp
static int AddOne(int number) 
{
    return number + 1;
} 

static int SubtractOne(int number) 
{
    return number - 1;
} 

static int Double(int number) 
{
    return number * 2;
}
```

Ezeknek a metódusoknak ugyanaz a paraméterlistája (_egyetlen `int` paraméter_) és ugyanaz a visszatérési típusa (_szintén `int`_). Ez a hasonlóság lényeges ez teszi őket felcserélhetővé.

A következő lépés az, hogy nevet adunk ennek a mintának egy `delegate` típus definiálásával:


```csharp
public delegate int NumberDelegate(int number);
```

Ez egy új típust definiál. Egy új `delegate` típus definiálásához szükség van egy visszatérési típusra, egy névre és egy paraméterlistára. Ebben az értelemben úgy néz ki, mint egy metódusdeklaráció, eltekintve a `delegate` kulcsszótól.

A `delegate` típusokat használó változók tárolhatnak metódusokat. A metódusnak azonban meg kell egyeznie a `delegate` visszatérési típusával és paramétertípusaival ahhoz, hogy működjön. Egy `NumberDelegate` típusú változó bármely `int` visszatérési típusú és egyetlen `int` paraméterű metódust tárolhat. Szerencsénkre az `AddOne`, `SubtractOne` és a `Double` mind megfelel ezeknek a feltételeknek. Ez azt jelenti, hogy létrehozhatunk egy olyan változót, amely bármelyik hivatkozást tárolhat.

Készíthetünk egy metódust egy olyan paraméterrel, amelynek típusa `NumberDelegate`, ami lehetővé teszi a metódus hívás számára, hogy egy másik metódust adjunk meg:

```csharp
static int[] ChangeArrayElements(int[] numbers, NumberDelegate operation) 
{  
    // ...
}
```

Nézzük meg, hogyan használja a `ChangeArrayElements` ezt a `delegate` típusú változót.

```csharp{5}
static int[] ChangeArrayElements(int[] numbers, NumberDelegate operation)
{
    int[] result = new int[numbers.Length];
    for (int index = 0; index < result.Length; index++)
        result[index] = operation(numbers[index]);
    return result;
}
```

Ha megnézzük ezt a kódot, láthatjuk, miért használjuk így a `delegate`-et. A `ChangeArrayElements` tudja, hogyan iteráljon a tömbön és építsen fel egy új tömböt, de nem érti, hogyan számítsa ki az új értékeket a régi értékekből. Azt várja, hogy valaki más végezze el ezt a munkát és amikor eljön az ideje, ezt a feladatot a `delegate`-re bízza.

```csharp
public delegate int NumberDelegate(int number);

public class HelloWorld
{
    public static void Main(string[] args)
    {
        int[] array = new int[] { 1, 2, 3, 4, 5 };
        array = ChangeArrayElements(array, new NumberDelegate(AddOne));
    }
    
    static int[] ChangeArrayElements(int[] numbers, NumberDelegate operation)
    {
        int[] result = new int[numbers.Length];
        for (int index = 0; index < result.Length; index++)
            result[index] = operation(numbers[index]);
        return result;
    }

    static int AddOne(int number) 
    {
        return number + 1;
    } 
    
    static int SubtractOne(int number) 
    {
        return number - 1;
    } 
    
    static int Double(int number) 
    {
        return number * 2;
    }

}
```