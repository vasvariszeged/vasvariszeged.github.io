---
icon: fa-solid fa-6
---

# Tulajdonságok

:::note Röviden
- A tulajdonságok (_properties_) mezőszerű hozzáférést biztosítanak, miközben megvédik az adatokat a metódusokkal.
- Az automatikus tulajdonságok akkor használatosak, ha nincs szükség extra logikára.
- A tulajdonságok lehetnek csak olvashatóak.
- A mezők is lehetnek csak olvashatóak.
- A tulajdonságokkal az objektumok inicializálhatóak az objektum inicializáló szintaxis segítségével.
:::

## Tulajdonságok alapjai

Bár az információ elrejtése jelentős előnyökkel jár, bonyolultabbá teszi a kódunkat. Egy egyszerű osztály helyett, három nyilvános mezővel és egy konstruktorral, ezt kaptuk:

```csharp
class Rectangle 
{
    private float width;
    private float height;

    public Rectangle(float width, float height)
    {
        this.width = width;
        this.height = height;
    }
    
    public float GetWidth() 
    {
        return width;
    }
    
    public float GetHeight() 
    {
        return height;
    }
    
    public float GetArea() 
    {
        return width * height;
    }

    public void SetWidth(float value)
    {
        width = value;
    }

    public void SetHeight(float value)
    {
        height = value;
    }    
}
```

A C# nyelvben azonban van egy olyan eszköz, amellyel az információ elrejtésének és az absztrakciónak az előnyeit is kihasználhatjuk, miközben a kódunk egyszerű marad: __a tulajdonságok__ (_properties_). A tulajdonságok egy közös név alatt egy `gettert` és egy `settert` párosítanak, mezőszerű hozzáféréssel.

Tekintsük meg a fenti három elemet, amelyek a téglalap szélességével foglalkoztak:


```csharp
private float width;

public float GetWidth() 
{
    return width;
}

public void SetWidth(float value)
{
    width = value;
}
```

Ha ezeket tulajdonságokra (_properties_) cserélnénk, a következő kódot írnánk:


```csharp
public float Width
{
    get
    {
        return width;
    } 

    set 
    {
        width = value;
    }
}
```

A tulajdonságok (_properties_) olyan tagok amelyek rendelkeznek saját hozzáférési szinttel és beilleszthetjük egy osztályba. A `Width` tulajdonságot publikussá tettük, mert a hozzá tartozó `GetWidth` és `SetWidth` metódusok is nyilvánosak. Minden tulajdonságnak meg kell határoznia a típusát, ebben az esetben a `float`-ot használja. A tulajdonság neve (itt `Width`) a láthatóság és a típus után jön. Érdemes megjegyezni, hogy a tulajdonságnevek általában nagybetűvel kezdődnek (__UpperCamelCase__). A tulajdonságok blokktesteket egy sor szögletes zárójelben definiáljuk. Ezen belül definiálhatunk egy __gettert__ (a `get` kulcsszóval) és egy __settert__ (a `set` kulcsszóval), mindegyiknek saját teste van. 

A fenti kód __blokktesteket__ használt, de használhat __kifejezéstesteket__ is:

```csharp
private float width;

public float GetWidth() => width;

public void SetWidth(float value) => width = value;

/* --------------------------------------------- */

private float width;

public float Width
{
    get => width;
    set => width = value; 
}
```

Ebben az esetben a __kifejezéstest__ használata egyszerűbb.

A __getternek__ vissza kell adnia a tulajdonsággal (`property`) megegyező típusú értéket (`float`). A __setter__ a törzsében hozzáférhet a speciális `value` változóhoz. Bár nem határoztunk meg `value` paramétert, de alapértelmezetten van ilyen a tulajdonságok setterben.

Sok tulajdonság (_property_) logikát biztosít egyetlen mező eléréséhez, ahogy a `Width` teszi a `width`-tel.
A tulajdonságoknak nem szükséges hogy legyen mindkét (_getter, settter_) metódusuk. Lehet olyan tulajdonságunk, amely csak __getterrel__ vagy csak __setterrel__ rendelkezik. Egy __getterrel__ rendelkező tulajdonságnak akkor van értelme, ha valami olyat szeretnénk ami nem változtatható meg. A téglalap területe pont ilyen. Készíthetünk egy __getterrel__ rendelkező tulajdonságot hozzá:

```csharp
public float Width
{
    get
    {
        return width * height;
    } 
}

/*
public float Area
{
    get => _width * _height;
}
*/
```

Ha egy tulajdonság csak __get-only__, és a __getter__ egy kifejezéstesttel rendelkezik, tovább egyszerűsíthetjük:

```csharp
public float Area => width * height;
```

Így a `Rectangle` osztály tulajdonságokkal való létrehozásá így nézhet ki:


```csharp
public class Rectangle {

  private float width;
  private float height;

  public Rectangle(float width, float height) {
    this.width = width;
    this.height = height;
  }

  public float Width {
    get => width;
    set => width = value;
  }

  public float Height {
    get => height;
    set => height = value;
  }

  public float Area => width * height;
}
```

A legjelentősebb előnye abban jelentkezik, hogy most már a tulajdonságokhoz való hozzáférés mezőjellegű, nem pedig metódusjellegű.

```csharp
Rectangle r = new Rectangle(2, 3);
r.Width = 5;
Console.WriteLine($"A {r.Width}x{r.Height} rectangle has an area of {r.Area}.");
```

A fenti kódban a `r.Width = 5;` sor meghívja a `Width` tulajdonság __setterét__, és a változó érték 5 lesz, amikor a __setter__ kód lefut. Az utolsó sorban a `Width`, `Height` és `Area` tulajdonságokra való hivatkozás meghívja az egyes tulajdonságok __gettereit__.

## Automatikusan implementált tulajdonságok

Van olyan tulajdonság, amelynek a __gettere__, a __settere__ vagy mindkettő bonyolult műveleteket végez. De vannak olyanok is, amelyeknek nincs szükségük semmilyen extra dologra:

```csharp
public class Player
{
    private string name;

    public string Name
    {
        get => name;
        set => name = value;
    }
}
```

Mivel ezek gyakoriak, van egy tömör módja az ilyen jellegű tulajdonságok definiálásának, amit __auto-implementált__ tulajdonságnak vagy __auto__ tulajdonságnak nevezünk:


```csharp
public class Player
{
    public string Name { get; set; }
}
```

Nem definiálunk törzset sem a getternek, sem a setternek. Csak pontosvesszővel be fejezzük a `get` és a `set` szavakat. 
Ha egy kezdőértékkel szeretnénk inicializálni ezt is megoldhatjuk egy automatikus tulajdonságnál, így:

```csharp
public string Name { get; set; } = "Player";
```

Ne felejtsük el a pontosvesszőt a sor végén! Nem fog lefordulni, ha elfelejtjük. A `Rectangle` osztály automatikus tulajdonságokat használó változata így nézhet ki:

```csharp
public class Rectangle
{
    public float Width { get; set; }
    public float Height { get; set; }
    public float Area =>  Width * Height;

    public Rectangle(float width, float height)
    {
        Width = width;
        Height = height;
    }
}
```

## Megváltoztathatatlan mezők és tulajdonságok

Ha egy tulajdonság csak olvasható, attól még értéket lehet hozzárendelni, de csak egy konstruktoron keresztül. Ezért ezeket csak olvasható tulajdonságoknak nevezzük. Ha egy tulajdonság változhatatlan (__immutable__), akkor a viselkedése olyan, mint a beton vagy a tetoválás. Teljes irányításunk van az objektum létrehozásakor, de nem lehet megváltoztatni, miután az objektum létrejött.

:::tip Immutable
Az __im-__ azt jelenti, hogy __nem__, a __mutable__ pedig azt, hogy __változtatható__.
:::

Tekintsük meg a `Player` osztály ezen verzióját, amelyben a `Name`-et megváltoztathatatlanná tesszük:


```csharp
public class Player
{
    public string Name { get; } = "Player 1";

    public Player(string name)
    {
        Name = name;
    } 
}
```

A __getter__ nyilvános, így mindig lekérdezhetjük a `Name` aktuális értékét. És még __setter__ nélkül is hozzárendelhetünk értéket a `Name`-hez egy inicializálóban vagy konstruktorban. De a létrehozás után nem tudjuk megváltoztatni a `Name`-t az osztályon belül vagy kívül.

Bár ez elsőre korlátozónak tűnik, az idővel kiderül, hogy sok előnye van a változhatatlanságnak. Például sok időt töltöttünk azzal, hogy aggódtunk a `Rectangle` osztályunk területének összefüggéséért a szélességgel és a magassággal. Ha az összes `Rectangle` tulajdonságát változhatatlanná tennénk, és csak a konstruktorban adnánk nekik értéket, nincs lehetőség arra, hogy az adatok később összefüggéstelenek legyenek.

Ha a tulajdonságok előnyösek, mi a helyzet a mezőkkel? Ha van olyan mező, amit nem szeretnénk megváltoztatni a létrehozás után, akkor rá alkalmazhatjuk a `readonly` kulcsszót módosítóként:

```csharp
public class Player
{
    private readonly string name;

    public Player(string name)
    {
        this.name = name;
    }
}
```

A megváltoztathatatlan tulajdonságokhoz hasonlóan ez is kaphat értéket inline inicializátorként vagy konstruktorban, de sehol máshol.

Ha egy osztály összes tulajdonsága és mezője megváltoztathatatlan, akkor az egész objektum megváltoztathatatlan. Nem minden objektumot kell megváltoztathatatlanná tenni.