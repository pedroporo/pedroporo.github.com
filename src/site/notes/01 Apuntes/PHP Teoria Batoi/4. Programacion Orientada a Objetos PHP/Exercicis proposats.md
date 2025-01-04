---
dg-publish: true
---
 
#### Exercici 1. Creació de la Classe Bàsica i Gestió de Propietats

* Crea una classe `Persona` amb les propietats privades `nom`, `cognoms`, i `edat`. Encapsula aquestes propietats mitjançant getters i setters. Afig els següents mètodes:

      - `getNomComplet(): string` – Retorna el nom complet de la persona.
      - `estaJubilat(): bool` – Retorna `true` si l'edat és major o igual a 65, `false` en cas contrari.

* Modifica la classe `Persona` afegint un constructor que assigna nom i cognoms. Si es proporciona un tercer paràmetre, assigna l'edat; en cas contrari, assigna una edat per defecte de 25 anys.

* Modifica la classe `Persona` per utilitzar una constant `LIMITE_EDAT` amb el valor de 66 anys i utilitza-la en el mètode `estaJubilat`.

#### Exercici 2. Herència i Polimorfisme

* Crea una classe `Empleado` que herete de `Persona`. Afig les següents propietats i mètodes:

    - `private float $sou`
    - `private array $telefons`
    - `anyadirTelefono(int $telefon): void` – Afig un número de telèfon a l'array.
    - `listarTelefonos(): string` – Retorna els números de telèfon separats per comes.
    - `vaciarTelefonos(): void` – Buida l'array de telèfons.
    - `debePagarImpuestos(): bool` – Retorna `true` si el sou és superior a 3333€, `false` en cas contrari.

* Afig un mètode estàtic `toHtml(Empleado $emp): string` que genere un codi HTML que mostre el nom complet de l'empleat dins d'un paràgraf i els seus telèfons dins d'una llista ordenada.
* Afig un mètode estàtic `toHtml(Persona $p)` a la classe Persona que mostre el nom complet de la persona dins d'un paràgraf. Modifica el mètode `toHtml` de `Empleado` per rebre una `Persona` com a paràmetre i comprovar si es tracta d'un `Empleado` amb `instanceof`.
* Transforma `Persona` en una classe abstracta. Redefineix el mètode estàtic `toHtml(Persona $p)` en totes les seues subclasses. Afig una classe `Worker` que siga també abstracta i que emmagatzeme els `telefonos`. Crea mètodes per calcular el sou en `Empleado` i `Gerent`, segons la descripció.

#### Exercici 3. Integració d'Espais de Noms, Autoloading, i Composer

* Crea una classe `Empresa` que incloga una propietat amb un array de `Workers`, ja siguen `Employees` o `Managers`. Implementa:

    - `public function addWorker(Worker $t)`
    - `public function listWorkersHtml(): string` – Genera la llista de treballadors en format HTML.
    - `public function getCosteNominas(): float` – Calcula el cost total de les nòmines.

* Configura un projecte PHP amb Composer que utilitze l'autoloading PSR-4. Afig un fitxer `composer.json` i defineix l'estructura de directoris `src/Models`, `src/Services`, etc. Crea una classe `Producte` dins de `src/Models` i verifica que l'autoloading funcione correctament instanciant la classe en un fitxer separat.

#### Exercici 4. Logger i Documentació

* Utilitza la llibreria `Monolog` per configurar un logger que escriga missatges a un fitxer `app.log`. Afig funcionalitat perquè el logger registre missatges d'informació i d'error en diferents arxius segons la gravetat.

* Configura un logger que escriga missatges de registre tant a un fitxer com a la consola. Prova el logger registrant missatges d'error i advertència.

* Documenta la classe `Producte` creada en exercicis anteriors utilitzant comentaris PHPDoc. Inclou la descripció de la classe, les propietats, i els mètodes. Utilitza una eina com `phpDocumentor` per generar documentació automàtica.

* Escriu proves unitàries per als mètodes de les classes `Persona`, `Empleado`, i `Empresa` utilitzant PHPUnit. Prova els mètodes `getNomComplet`, `estaJubilat`, `addWorker`, i `getCosteNominas`. Assegura't que les proves cobreixen diferents escenaris, incloent errors potencials.

* Escriu una prova unitària que comprove que el logger està registrant correctament els missatges d'error a l'arxiu corresponent. Utilitza un mock per assegurar-te que el logger funciona sense necessitat d'escriure en un fitxer real durant la prova.

#### Exercici 5. Generació de PDFs amb DomPDF

* Instal·la la llibreria `dompdf/dompdf` amb Composer. Crea un script PHP que genere un PDF senzill amb un títol i un paràgraf de text.

* Crea un PDF utilitzant DomPDF que incloga una taula amb dades i una imatge. Assegura't que el PDF es renderitze correctament i que la imatge s'incloga en el document.

* Utilitzant la classe `Empresa` i `Empleado`, genera un informe en PDF amb la llista de treballadors i el seu sou. Utilitza DomPDF per generar aquest informe.

#### Exercici 6. Serialització i JSON

* Crea una interfície `JSerializable` que incloga els mètodes:

    - `toJSON(): string` – Converteix l'objecte a un JSON utilitzant `json_encode()`.
    - `toSerialize(): string` – Serialitza l'objecte utilitzant `serialize()`.

* Modifica les classes `Persona`, `Empleado`, i `Empresa` per implementar aquesta interfície. Assegura't que les propietats privades es puguen serialitzar correctament.

* Escriu mètodes per deserialitzar un objecte a partir d'una cadena JSON o d'una cadena serialitzada. Prova aquests mètodes amb PHPUnit per assegurar-te que la deserialització funciona correctament.

#### Exercici 7. Separació del Model de Negoci i la Presentació (MVC)
 
Fins ara, has creat diverses classes que gestionen la lògica del joc i les dades (models), com `Persona`, `Empleado`, i `Empresa`, i has generat sortides HTML i PDFs amb DomPDF. Ara és el moment de refactoritzar la teua aplicació per assegurar una separació clara entre la lògica del negoci i la presentació, seguint el patró Model-Vista-Controlador (MVC).
  
* **Crear el Model**:
    - Refactoritza les classes `Persona`, `Empleado`, i `Empresa` per assegurar que només gestionen la lògica de negoci (per exemple, càlcul de nòmines, gestió d'empleats, etc.).
    - Assegura't que aquestes classes no contenen codi relacionat amb la presentació (HTML o PDF).

* **Crear les Vistes**:
    - Crea vistes separades per presentar la informació als usuaris:
        - Una vista HTML per mostrar la informació de `Empleado` i `Empresa` com a llistats.
        - Una vista PDF per generar informes amb DomPDF, basant-se en les dades proporcionades pel model.

* **Crear el Controlador**:
    - Implementa un controlador que reba les sol·licituds dels usuaris, interactue amb el model (`Persona`, `Empleado`, `Empresa`), i tria la vista adequada per mostrar els resultats (HTML o PDF).
    - El controlador ha d'encapsular tota la lògica necessària per a gestionar la interacció entre la vista i el model, assegurant que el model no estiga lligat a la capa de presentació.

#### Exercici 8. Creació de Proves Unitàries per al Patró MVC

Després de refactoritzar l'aplicació per separar la lògica del negoci de la presentació seguint el patró Model-Vista-Controlador (MVC), és fonamental assegurar-se que tots els components funcionen correctament i que la interacció entre ells es realitza tal com s'espera. Per això, has de crear una sèrie de proves unitàries utilitzant PHPUnit per verificar el funcionament del model, les vistes i els controladors.
  
* **Proves del Model**:
    - Escriu proves unitàries per verificar el funcionament dels mètodes de les classes `Persona`, `Empleado`, i `Empresa`.
    - Assegura't que els mètodes funcionen correctament, com ara:
        - `getNomComplet()`
        - `debePagarImpuestos()`
        - `addWorker()` i `getCosteNominas()`
    - Prova que els càlculs es realitzen correctament i que les dades es gestionen segons el que s'espera.

* **Proves del Controlador**:
    - Escriu proves unitàries per assegurar-te que els controladors interactuen correctament amb els models i que seleccionen la vista adequada per a cada situació.
    - Prova que les dades es passen correctament del model a la vista a través del controlador.
    - Implementa proves per verificar que el controlador respon correctament a diferents sol·licituds de l'usuari, per exemple:
        - Mostrar una llista d'empleats en HTML.
        - Generar un informe en PDF utilitzant DomPDF.

* **Proves de les Vistes**:
    - Escriu proves unitàries per comprovar que les vistes reben i mostren correctament la informació proporcionada pel controlador.
    - Prova que la generació de contingut HTML o PDF es realitza correctament a partir de les dades proporcionades pel model.
 