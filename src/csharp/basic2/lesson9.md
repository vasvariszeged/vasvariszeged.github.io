---
icon: fa-solid fa-9
---

# Fájlok

:::note Röviden
- A fájlokkal kapcsolatos típusok mind a `System.IO` névtérben találhatóak.
- A `File` osztály segítségével fájlokat olvashatunk és írhatunk.
- A `File` végez manipulációt: fájlok létrehozása, törlése, mozgatása.
- A `File` osztály létfontosságú része minden fájl I/O-nak.
:::


Számos program számára előnyös az információk fájlba mentése és későbbi visszatöltése. Például egy program beállításait egy konfigurációs fájlba menthetjük vagy egy játék pontszámainak elmentése egy fájlba - _hogy a játékosaink korábbi eredményei megmaradjanak_, _amikor bezárjuk és újra megnyitjuk a játékot._
A __Base Class Library__ több ilyen osztályt tartalmaz, amelyek megkönnyítik ezt a folyamatot. Megvizsgáljuk, hogyan lehet adatot olvasni és írni egy fájlba. Az összes osztály a `System.IO` __namespace__-ben található és ez automatikusan szerepel már a modern C# projektekben - _régen nem így volt_.


## A `File` osztály

A `File` osztály a fájlok kezelésének legfontosabb osztálya. Lehetővé teszi számunkra, hogy információt kapjunk egy fájlról, valamint hogy elolvassuk és kiírjuk a tartalmát. A `File` osztály működésének illusztrálására nézzünk meg egy kis __Message in a Bottle__ programot, amely a felhasználótól kér egy üzenetet, amelyet a program következő futásakor megjelenít. Ezt az üzenetet egy fájlban helyezi el. Amikor a program elindul, megjeleníti az előző üzenetet, ha talál ilyet.


Kezdhetjük azzal, hogy megkapjuk a szöveget a felhasználótól. Ehhez csak a számunkra ismerős dolgokat használjuk:

```csharp
Console.Write("What do you want me to tell you next time? "); 
string message = Console.ReadLine();
```

A `File` osztály statikus és így csak statikus metódusokat tartalmaz. A `WriteAllText` fog egy karakterláncot és kiírja egy fájlba. Megadjuk a célfájl elérési útvonalát, valamint magát a szöveget:

```csharp
Console.Write("What do you want me to tell you next time? ");
string message = Console.ReadLine();
File.WriteAllText("message.txt", message);
```

Ez önmagában egy működő programot hoz létre, még akkor is, ha nem tesz meg mindent, amit kitűztünk célként. Ha futtatjuk, a programunk szöveget kér, létrehoz egy __message.txt__ nevű fájlt és abba helyezi el a felhasználó szövegét.


__Pontosan hol jön létre ez a fájl?__ A `WriteAllText` - és a `File` osztály minden olyan metódusa, amely elérési utat kér - abszolút és relatív elérési utakkal egyaránt képes dolgozni. Az abszolút elérési út leírja a teljes könyvtárszerkezetet a root-tól (gyökértől) a fájlig. Például így írhatunk az asztalunkon lévő fájlba:

```csharp
File.WriteAllText("C:/Users/RB/Desktop/Message.txt", message);
```

Ha meg akarjuk nyitni ezt a fájlt és megjeleníteni az utolsó üzenetet akkor tegyük ezt:

```csharp
string previous = File.ReadAllText("Message.txt");
Console.WriteLine("Last time, you said this: " + previous);
Console.Write("What do you want me to tell you next time? ");
string message = Console.ReadLine();
File.WriteAllText("Message.txt", message);
```

A `ReadAllText` megnyitja a megadott fájlt és beolvassa a benne lévő szöveget, majd egy karakterláncot ad vissza. A fenti kód ezt megjeleníti a konzolablakban.

A fenti kóddal van egy probléma. Ha így futtatjuk és a __message.txt__ fájl nem létezik, a program összeomlik. 

Ellenőrizzük, hogy létezik-e a fájl, mielőtt megpróbáljuk megnyitni:

```csharp
if (File.Exists("message.txt"))
{
string previous = File.ReadAllText("Message.txt");
    Console.WriteLine("Last time, you said this: " + previous);
}
```

Ez egy megbízhatóbb programot hoz létre, amely akkor is működik, ha a fájl még nem létezik.

A `ReadAllText` és `WriteAllText` egyszerű, de hatékony. Ezzel a két metódussal szinte bármilyen adatot elmenthetünk egy fájlba és később elővehetjük. Csak arra van szükségünk, hogy a kívánt adatokat stringgé alakítsuk.

Nézzünk meg egy összetettebb problémát: egy pontszámgyűjtemény mentése. Tegyük fel, hogy van egy ilyen rekordunk:

```csharp
public record Score(string Name, int Points, int Level);
```

És ez a metódus a pontszámok kezdeti listájának létrehozására:

```csharp
List<Score> MakeDefaultScores()
{
    return new List<Score>()
    {
        new Score("ROB", 12420, 15),
        new Score("JOHN", 8543, 9),
        new Score("JANE", -1, 1)
    }; 
}
```

__Miután meghívtuk ezt a metódust, hogy megkapjuk a pontszámokat, hogyan írjuk ki ezeket az adatokat egy fájlba?__ 

A `WriteAllText`-nek egy karakterláncra van szüksége, nekünk pedig egy `List<Score>`-unk van, amely sok pontszámot tartalmaz.

:::note szerializáció/deszerializációnak
Szükségünk van egy módszerre, hogy átalakítsunk egy bonyolult objektumot vagy objektumhalmazt olyanná, amelyet egy fájlba lehet helyezni. Ezt az átalakítást __szerializációnak__ nevezzük. A visszafelé történő átalakítást __deszerializációnak__ hívjuk. Ha képesek vagyunk a pontszámainkat egy karakterláncba szerializálni, akkor már ismerjük a további lépéseket.
:::

Nincs hiány olyan módszerekből, amelyekkel a pontszámokat szerializálhatjuk. Itt van egy egyszerű módszer: a __CSV__ formátum. A __CSV__ rövidítése a „__comma-separated values__” (_vesszővel elválasztott értékek_ - magyar megfelelője), egy egyszerű formátum, amely minden elemet önálló sorba helyez. Vesszők választják el az elem tulajdonságait. Egy __CSV__ fájlban a pontszámaink így nézhetnének ki:

```csv
ROB,12420,15
JOHN,8543,9
JANE,-1,1
```

A `File` rendelkezik egy `WriteAllLines` metódussal, amely megkönnyítheti a munkánkat. Ez egy karakterlánc gyűjteményt igényel egyetlen karakterlánc helyett. Ha minden egyes pontszámot stringgé tudunk alakítani, akkor a `WriteAllLines` segítségével bele tudjuk írni őket egy fájlba:

```csharp
void SaveScores(List<Score> scores)
{
    List<string> scoreStrings = new List<string>();

    foreach (Score score in scores)
    {
        scoreStrings.Add($"{score.Name},{score.Points},{score.Level}");
    }

    File.WriteAllLines("scores.csv", scoreStrings);
}
```

A `foreach` cikluson belüli sor a nevet, a pontszámot és a szintet egyetlen karakterlánccá egyesíti, vesszővel elválasztva. Ezt minden egyes pontszámra elvégezzük és a végén pontszámonként egy karakterláncot kapunk.

A `File.WriteAllLines` innen átveheti, így átadjuk neki a fájlnevet és a stringgyűjteményt és a feladatot elvégeztük. :)

A fájl visszaalakítása egy pontszámok listájává nehezebb. Van egy `File.ReadAllLines` metódus, ami jó kiindulópont. Egy `string[]`-et ad vissza, ahol minden `string` egy sor volt a fájlban.

```csharp
string[] scoreStrings = File.ReadAllLines("scores.csv");
```

Ahhoz, hogy újra létrehozzunk egy `Score` objektumot, szükségünk van arra, hogy fel daraboljunk minden karakterláncot. Mivel az adatelemeket vesszőkkel választottuk el, a karakterlánc `Split` metódusát használhatjuk a sorok darabolásához:

```csharp
string scoreString = "ROB,12420,15";
string[] tokens = scoreString.Split(",");
```

A `Split(",")` egy olyan stringekből álló tömböt ad, amelyben az első elem az "__ROB__", a második elem a "__12420__", a harmadik elem pedig a "__15__". Ha az értékek elválasztására __;__ vagy __|__ jelet használtunk volna, akkor más paramétert adhattunk volna át a `Split` metódusnak. 

Fontos megjegyezni, hogy a elválasztó karakter - _az a karakter, amely megjelöli az elemek közötti elválasztási pontot_ - nem marad meg, amikor a fent látható módon használjuk a `Split` függvényt.

Hozzuk létre ezt a metódust, hogy betöltsük az összes pontszámot a fájlból:

```csharp
List<Score> LoadHighScores()
{
    string[] scoreStrings = File.ReadAllLines("scores.csv");
    
    List<Score> scores = new List<Score>();
    
    foreach (string scoreString in scoreStrings)
    {
        string[] tokens = scoreString.Split(",");
        Score score = new Score(tokens[0], Convert.ToInt32(tokens[1]), Convert.ToInt32(tokens[2]));
        scores.Add(score);
    }
    return scores;
}
```

## Fájlrendszer kezelése

A fájlok olvasásán és írásán kívül a `File`, `Path` és `Directory` osztály rendelkezik egy maroknyi más metódussal is a fájlrendszer kezelésére. Nézzük meg ezeket.

A `File` metódus rendelkezik fájlok másolására, áthelyezésére és törlésére szolgáló metódusokkal. Ezek mind eléggé maguktól értetődőek:

```csharp
File.Copy("Scores.csv", "Scores-Backup.csv");
File.Move("Scores.csv", "Backup/Scores.csv");
File.Delete("Scores.csv");
```

### A `Directory` osztály

Amit a `File` a fájlokkal, azt a `Directory` a könyvtárakkal - __a könyvtár és a mappa szinonimák__ - teszi. Ezek a metódusok például egy könyvtárat mozgatnak, létrehoznak és törölnek:

```csharp
Directory.Move("Settings", "BackupSettings");
Directory.CreateDirectory("Settings2");
Directory.Delete("Settings2");
```

A törlés előfeltétele, hogy a könyvtár üres legyen a törlés előtt. Ellenkező esetben kivétel keletkezik (`System.IO.IOException`). Írhatnál kódot annak eltávolítására, hogy minden fájlt egy könyvtárban magad törölj, de létezik egy olyan túlterhelés, amely lehetővé teszi az összes benne lévő elem _kényszerített_ törlését (__force delete__):

```csharp
Directory.Delete("Settings2", true); // Óvatosan!
```

:::danger Óvatosan!
__Ez rendkívül veszélyes lehet. Rosszul megírt `Directory.Delete();` esetén az egész fájlrendszert azonnal törölheted. Nagyon óvatosan használd!__
:::

### A `Path` osztály

A `Path` osztály rendelkezik a fájlrendszer elérési útvonalaival való munkához szükséges metódusokkal, beleértve az elérési utak kombinálását, a fájl nevének vagy kiterjesztésének megagadását, valamint az abszolút és relatív elérési utak közötti konverziót. Az alábbi kód mindezeket szemlélteti:

```csharp
Console.WriteLine(Path.GetFileName("C:/Users/john/Desktop/GrumpyCat.gif"));
Console.WriteLine(Path.GetFileNameWithoutExtension("C:/Users/john/Desktop/GrumpyCat.gif"));
Console.WriteLine(Path.GetExtension("C:/Users/john/Desktop/GrumpyCat.gif"));
Console.WriteLine(Path.GetFullPath("ConsoleApp1.exe"));
Console.WriteLine(Path.GetRelativePath(".", "C:/Users/john/Desktop"));
```

A `File`, `Directory` és `Path` mindegyiknek sokkal több képessége van mint amennyit itt lefedtünk, de ez egy jó kiindulópontot adhat.