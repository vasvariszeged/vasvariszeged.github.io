---
icon: fa-solid fa-7
---

# Matematika

:::note Röviden
- Az összeadás (`+`), kivonás (`-`), szorzás (`*`), osztás (`/`) és maradék (`%`) mind használható matematikai kifejezésekhez: `int a = 3 + 2 / 4 * 6;`
- A `+` és `-` operátorok előjelek jelölésére (_vagy egy érték negálására_) is használhatók: _+3_, _-2_ vagy _-a_.
- A műveletek sorrendje megfelel a matematikai világnak.
- A sorrendet úgy változtathatja meg, hogy zárójelek segítségével csoportosítja azokat a dolgokat, amelyeket először szeretne elvégezni.
- Az összetett hozzárendelési operátorok (`+=`, `-=`, `*=`, `/=`, `%=`) olyan rövidítések, amelyek egy változót egy matematikai művelettel állítanak be. `a += 3;` ugyanaz, mint `a = a + 3;`
- A növelő és csökkentő operátorok: `a++;` `b--;`
- A numerikus típusok mindegyike definiál speciális értékeket a tartományaikhoz (`int.MaxValue`, `double.MinValue`, stb.), a lebegőpontos típusok pedig `PositiveInfinity`, `NegativeInfinity` és `NaN` értékeket is definiálnak.
- Az egész számok osztása elhagyja a maradékokat, míg a lebegőpontos osztás nem.
- A típusok között átváltással konvertálhatunk: `int x = (int)3.3;`
- A `Math` és `MathF` osztályok tartalmaznak egy sor segédmetódust a gyakori matematikai műveletek kezelésére.
:::

A számítógépeket a matematika céljából építették fel, és itt az ideje, hogy megnézzük, hogyan lehet a számítógépet néhány alapvető számításra felhasználni.

## Műveletek és operátorok

