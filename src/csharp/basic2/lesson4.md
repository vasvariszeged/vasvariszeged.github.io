---
icon: fa-solid fa-4
---

# Ciklusok

:::note Röviden
- A ciklusok ismétlik a kódot.
- `while` ciklus
- `do/while` ciklus
- `for` ciklus
- `break` kilép a ciklusból. A `continue` azonnal a következő iterációra ugrik.
:::

Megtanultuk, hogy az utasítások egymás után történő írása azt eredményezi, hogy azok a megadott sorrendben futnak le. Ahogy haladtunk tovább megtanultuk, hogy az `if` és `switch` utasítások alkalmazásával elérhetjük, hogy bizonyos részek kihagyásra kerüljenek valamint több lehetőség közül kiválaszthassuk a szükséges műveletet.

A procedurális programozás három alapvető eszköze közül az utolsót, a ciklusokat fogjuk most részletesebben megvizsgálni. A C#-ban __négyféle__ ciklus létezik. Itt __háromról__ lesz most szó, a negyediket a következő részre tartogatom.

## A `while` ciklus

Az első ciklustípus a `while` ciklus. A `while` ciklus addig ismétli meg a kódot, amíg egy adott feltétel igazra nem értékelődik ki. Struktúrája nagyon hasonlít egy `if` utasításra:

```csharp
while ( condition )
{
    // This code is repeated as long as the condition is true.
}
```

Az alábbi kód egy `while` ciklust mutat be, amely kiírja az 1-től 5-ig terjedő számokat:


```csharp
int x = 1;

while (x <= 5)
{
    Console.WriteLine(x);
    x++;
}
```

Nézzük meg lépésről lépésre ezt a kódot, hogy lássuk, hogyan kezeli a számítógép a `while` ciklust. Mielőtt elkezdenénk, biztosítjuk, hogy legyen egy hely a memóriában az `x` számára és inicializáljuk ezt a helyet az __1__-es értékkel. 

Amikor elérjük a `while` ciklust, kiértékelődik annak kifejezése. Ha ez hamis, akkor átugorjuk a ciklust és folytatjuk a program többi részével. 

Ebben az esetben az `x <= 5` kifejezés igaz, tehát belépünk a ciklus magjába és végrehajtjuk azt. A ciklus mag megjeleníti az `x` aktuális értékét (__1__), majd növeli az `x` értékét, amivel __2__-re növeljük azt.

Ez a folyamat ismétlődik, amíg néhány ciklus után az `x` értéke __6__ lesz. Ezen a ponton a ciklus feltétele már nem igaz.

A ciklus egy olyan szerkezet, amely lehetővé teszi számunkra, hogy egyszerű logika segítségével összetett programokat írjunk. Ha például szeretnénk megjeleníteni __1__-től __100__-ig a számokat egy ciklus nélkül, akkor __100__ db `Console.WriteLine` lenne szükség! Ciklus használatával csak egyetlen `Console.WriteLine` szükséges.

:::info Itt van néhány fontos részlet a while ciklusokkal kapcsolatban, amelyeket érdemes észben tartani
1. Ha a ciklus feltétele kezdetben hamis, a ciklus magba egyáltalán nem fog belépni, ezáltal nem fog lefutni se.

2. Lehet olyan ciklust létrehozni, amelynek feltétele soha nem válik hamissá. Például ha elfelejtjük a `x++;` részt a fenti ciklusban, akkor az folyamatosan futna és nem lenne kilépési pont. Ezt nevezzük végtelen ciklusnak.
:::

Nézzünk meg egy másik példát, mielőtt továbblépnénk. Ez a kód arra kéri a felhasználót, hogy adjon meg egy számot __0__ és __10__ között. Ezt addig kéri, amíg olyan számot nem adunk meg, ami ebbe a tartományba esik:

```csharp
int playersNumber = -1;

while (playersNumber < 0 || playersNumber > 10)
{
    Console.Write("Enter a number between 0 and 10: "); 
    string playerResponse = Console.ReadLine(); 
    playersNumber = Convert.ToInt32(playerResponse);
}
```


Ez a kód a `playersNumber` változót __-1__ értékre inicializálja. Miért? Először is, minden változót inicializálni kell, mielőtt használnánk, tehát valamit rendelnünk kellett a `playersNumber` változóhoz. A __-1__, egy olyan szám, amely biztosítja, hogy a ciklus legalább egyszer lefut. Ha __0__-ra inicializáltuk volna, a ciklus feltétele az első alkalommal hamis lett volna, a ciklus magjába egyáltalán nem lépett volna be és soha nem kérdeztük volna meg a felhasználót, hogy adjon meg egy értéket.

Ez a kód azt is mutatja, hogy egy ciklus feltétele lehet bármilyen logikai kifejezés és használhatunk itt olyan dolgokat is, mint pl. `<`, `!=`, `&&` és `||`.

## A `do...while` ciklus

A második ciklus egy enyhe variációja a `while` ciklusnak. A `do...while` ciklus a ciklus végén értékeli ki a feltételét, nem pedig az elején. Ez biztosítja, hogy a ciklus legalább egyszer lefut. Az alábbi kód a korábbi `while` ciklus `do...while` változata:

```csharp
int playersNumber;

do {
    Console.Write("Enter a number between 0 and 10: "); 
    string playerResponse = Console.ReadLine(); 
    playersNumber = Convert.ToInt32(playerResponse);
}
while (playersNumber < 0 || playersNumber > 10);
```

A ciklust a `do` kulcsszóval kezdjük. A ciklus magja után `while` és a feltétele követi. Ne hagyjuk el a pontosvesszőt a sor végéről ez elengedhetetlen.

Mivel ennek a ciklusnak a magja mindig legalább egyszer lefut, már nem szükséges inicializálni a változót __-1__-re. A `playersNumber` a cikluson belül lesz inicializálva annak értékével, amit a játékos választ.

### Változók deklarálása blokkokban és ciklusokban

A ciklusban használt blokkok még mindig csak blokkok. Mint bármely más blokk, a ciklus blokkjában deklarált változók elérhetetlenné válnak, amint elhagyjuk a blokkot. Létrehozhatunk egy változót a cikluson belül, de ezek a változók nem lesznek elérhetők a cikluson kívül, még a ciklus feltételében sem. A fenti kódban a `playersNumber` változót a cikluson kívül kellett deklarálnunk, hogy használhassuk a ciklus feltételében.

## A `for` ciklus

A harmadik ciklusunk a `for` ciklus. Visszatérünk az első példához ezen a szinten: az __1__-től __5__-ig történő számoláshoz. A `while` ciklus megoldása így nézett ki:

```csharp
int x = 1;

while (x <= 5)
{
    Console.WriteLine(x);
    x++; 
}
```

Az összes kód közül csak egyetlen sor tartalmaz érdemi kódot: a `Console.WriteLine` utasítást. A többi a ciklus kezelését végzi. Az első sor deklarálja és inicializálja az `x`-et. A második sor jelzi a ciklus kezdetét és meghatározza a ciklus feltételét. Az ötödik sor a következő elemre ugrik.

Ez a cikluskezelési felesleg zavaró lehet a kód fő céljától. A for ciklus lehetővé teszi a cikluskezelési kód egyetlen sorba sűrítését. Így néz ki a struktúrája:

```csharp
for (initialization statement; condition to evaluate; updating action)
{
// ...
}
```

Ha ezt a kódot átírjuk egy `for` ciklussá, a következőt kapjuk:

```csharp
for (int x = 1; x <= 5; x++)
    Console.WriteLine(x);
```

A `for` ciklus zárójelében három utasítás található, amelyeket pontosvesszők választanak el:

- Az első rész, `int x = 1`, ez elvégzi a ciklus indításához szükséges beállításokat. Majdnem mindig egy változó deklarálását és kezdőértékre való inicializálását jelenti.

- A második rész a ciklus minden egyes futásakor kiértékelendő feltétel. A `for` ciklus inkább hasonlít a `while` ciklushoz, mint a `do...while` ciklushoz - ha a feltétele kezdetben hamis, a `for` ciklus teste egyáltalán nem fut le.

- Az utolsó rész határozza meg, hogyan változtassuk meg a ciklus feltételében használt változót. Ez a változtatás egyszerűsítette a dolgokat, így a blokk utasításra már nincs szükség. 

Bizonyos típusú ciklusok esetén a `for` ciklusnak jobban kiemelhető a ciklus lényege, mint a `while` vagy a `do...while` ciklusoknál, de mindegyiknek megvan a helye.

Bár a legtöbb `for` ciklus mindhárom utasítást használja, bármelyiküket ki lehet hagyni, ha semmi sem szükséges. 

:::info Néha találkozhatunk olyan ciklussal
Amely úgy néz ki, mint a `for (;;) { ... }`, hogy egy olyan `for` ciklust jelentsen, amelynek nincs feltétele és örökké fog futni, bár én inkább a `while (true) { ... }` formátumot részesítem előnyben.
:::

## Hogyan lépjünk ki a ciklusból illetve folytassuk az következő iterációval

A `break` és a `continue` utasításokkal jobban szabályozhatjuk a ciklusok kezelését.

A `break` utasítás a ciklus azonnali befejezésére kényszeríti, feltételének újraértékelése nélkül. Ez lehetővé teszi, hogy kilépjünk egy olyan ciklusból, amelyet már nem akarunk tovább futtatni. A ciklus feltétele nem kerül újraértékelésre, így a ciklusból kiléphetünk, amíg a feltétel technikailag még mindig igaz.

A ciklus minden egyes futásakor ellenőrzi a feltételt és ha az igaz, akkor végrehajtja a ciklusmagot. Ha a ciklusmagban találkozik a `continue` utasítással, akkor a ciklus nem folytatja a ciklusmag további részét, hanem rögtön a következő futásra ugrik. A `continue` tehát azt jelenti, hogy “_ugorjunk át a ciklusmag maradék részén és kezdjük elölről a ciklust_”.

Az alábbi kód szemlélteti mindezen mechanikákat egy egyszerű programban, amely a felhasználótól számot kérdez, majd a számhoz fűz némi megjegyzést, mielőtt visszamegy az elejére és újrakezdi az egészet:

```csharp
while (true)
{
    Console.Write("Think of a number and type it here: "); 
    string input = Console.ReadLine();
    
    if (input == "quit" || input == "exit")
        break;
    
    int number = Convert.ToInt32(input);
    
    if (number == 12)
    {
        Console.WriteLine("I don't like that number. Pick another one.");
        continue;
    }

    Console.WriteLine($"I like {number}. It's the one before {number + 1}!"); 
}
```

Ennek a ciklusnak feltétele `true` és sosem fejeződne be egy `break` nélkül. De ha a felhasználó beírja a __quit__ vagy az __exit__ szót, akkor a `break` utasításra kerül sor. Ez azt eredményezi, hogy a kilépünk a ciklusból és folytatódik a program többi részével.

Ha a felhasználó beír egy 12-t, akkor a `continue` utasítás elérhetővé válik. Ahelyett, hogy a szöveg megjelenne, hogy a szám jó, a program azt mondja a felhasználónak, hogy válasszon egy másikat. Ez által vissza kerülünk ciklus kezdetére, az állapotát újraellenőrzi és a ciklus újra lefut.

A legtöbb ciklusnak nincs szüksége `break` és `continue` utasításokra. De a finomított irányítás néha hasznos lehet.

## Ciklusok egymásba ágyazása

Láttuk, hogy az `if` utasításokat más `if` utasításokon belül egymásba ágyazhatjuk. Ciklust is beágyazhatunk más ciklusba. Az `if` utasításokat ciklusba, a ciklusokat pedig `if` utasításokba is beilleszthetjük.

A beágyazott ciklusok gyakoriak, amikor két halmaz minden kombinációjával kell valamit tennünk. Az alábbiakban például egy alapvető szorzótáblát jelenítünk meg, amely az __1__-től __10__-ig terjedő számokat szorozza meg ugyanezzel a számhalmazzal:

```csharp
for (int a = 1; a <= 10; a++)
    for (int b = 1; b <= 10; b++)
        Console.WriteLine($"{a} * {b} = {a * b}");
```

Ez a kód egy __*__-okból álló rácsot jelenít meg a sorok és oszlopok száma alapján, amelyet a `totalRows` és `totalColumns` határozz meg.

```csharp
int totalRows = 5;
int totalColumns = 10;

for (int currentRow = 1; currentRow <= totalRows; currentRow++)
{
    for (int currentColumn = 1; currentColumn <= totalColumns; currentColumn++)
            Console.Write("*");
    
    Console.WriteLine();
}
```