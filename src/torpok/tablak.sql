CREATE TABLE kozetek (
  id INT(11) NOT NULL AUTO_INCREMENT,
  nev VARCHAR(50) DEFAULT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE torpek (
  id INT(11) NOT NULL AUTO_INCREMENT,
  nev VARCHAR(50) DEFAULT NULL,
  klan VARCHAR(50) DEFAULT NULL,
  nem VARCHAR(50) DEFAULT NULL,
  suly INT(11) DEFAULT NULL,
  magassag INT(11) DEFAULT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE tarnak (
  id INT(11) NOT NULL AUTO_INCREMENT,
  nev VARCHAR(50) DEFAULT NULL,
  kozet_id INT(11) DEFAULT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE kihol (
  torpe_id INT(11) NOT NULL,
  tarna_id INT(11) NOT NULL,
  kitermelt_mennyiseg INT(11) DEFAULT NULL,
  PRIMARY KEY (torpe_id, tarna_id)
);