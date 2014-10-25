CREATE (pr1:Modul { id: 'pr1', name : 'Programmieren 1'})
CREATE (mg:Modul { id: 'mg', name : 'Mathematische Grundlagen'})
CREATE (gi:Modul { id: 'gi', name : 'Grundlagen der Informatik'})
CREATE (bw1:Modul { id: 'bw1', name : 'Betriebswirtschaft 1'})

CREATE (rmp:Modul { id: 'rmp', name : 'Rechnerstrukturen und Maschinennahe Programmierung'})
CREATE (pr2:Modul { id: 'pr2', name : 'Programmieren 2'})
CREATE (lb:Modul { id: 'lb', name : 'Logik und Berechenbarkeit'})
CREATE (db:Modul { id: 'db', name : 'Datenbanken'})
CREATE (af:Modul { id: 'af', name : 'Automatentheorie und formale Sprachen'})

CREATE (se1:Modul { id: 'se1', name : 'Software Engineering 1'})
CREATE (gka:Modul { id: 'gka', name : 'Graphentheoretische Konzepte und Algorithmen'})
CREATE (bw2:Modul { id: 'bw2', name : 'Betriebswirtschaft 2'})
CREATE (bs:Modul { id: 'bs', name : 'Betriebssysteme'})
CREATE (ad:Modul { id: 'ad', name : 'Algorithmen und Datenstrukturen'})

CREATE (wp1:Modul { id: 'wp1', name : 'Das Softwareprojekt'})
CREATE (se2:Modul { id: 'se2', name : 'Software Engineering 2'})
CREATE (rn:Modul { id: 'rn', name : 'Rechnernetze'})
CREATE (ci:Modul { id: 'ci', name : 'Compiler und Interpreter'})

CREATE (wp2:Modul { id: 'wp2', name : 'IT Sicherheit'})
CREATE (vs:Modul { id: 'vs', name : 'Verteilte Systeme'})
CREATE (ais:Modul { id: 'ais', name : 'Seminar'})
CREATE (ai:Modul { id: 'ai', name : 'Architektur von Informationssystemen'})

CREATE (is:Modul { id: 'is', name : 'Intelligente Systeme'})
CREATE (wp3:Modul { id: 'wp3', name : 'NoSQL und Big Data'})



CREATE (bw1)-[:VORLEISTUNG]->(bw2)
CREATE (mg)-[:VORLEISTUNG]->(lb)
CREATE (pr1)-[:VORLEISTUNG]->(pr2)
CREATE (pr1)-[:VORLEISTUNG]->(rmp)
CREATE (pr1)-[:VORLEISTUNG]->(db)
CREATE (gi)-[:VORLEISTUNG]->(af)

CREATE (lb)-[:VORLEISTUNG]->(gka)
CREATE (pr2)-[:VORLEISTUNG]->(ad)
CREATE (pr2)-[:VORLEISTUNG]->(bs)
CREATE (pr2)-[:VORLEISTUNG]->(se1)
CREATE (rmp)-[:VORLEISTUNG]->(se1)
CREATE (db)-[:VORLEISTUNG]->(se1)

CREATE (ad)-[:VORLEISTUNG]->(ci)
CREATE (bs)-[:VORLEISTUNG]->(rn)
CREATE (se1)-[:VORLEISTUNG]->(se2)

CREATE (rn)-[:VORLEISTUNG]->(vs)
CREATE (se2)-[:VORLEISTUNG]->(ai)

CREATE (ci)-[:VORLEISTUNG]->(is)

CREATE (pr2)-[:VORLEISTUNG]->(wp1)
CREATE (db)-[:VORLEISTUNG]->(wp1)

CREATE (ad)-[:VORLEISTUNG]->(wp2)

CREATE (pr2)-[:VORLEISTUNG]->(wp3)
CREATE (db)-[:VORLEISTUNG]->(wp3)