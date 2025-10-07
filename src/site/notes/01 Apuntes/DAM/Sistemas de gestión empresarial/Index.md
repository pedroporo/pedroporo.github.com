---
{"dg-publish":true,"permalink":"/01-apuntes/dam/sistemas-de-gestion-empresarial/index/"}
---


 - ### Profesora:
    
    _Cristina Balaguer Seguí_
    
    c.balaguersegui@edu.gva.es

- ### Normas para la entrega de actividades
    - **Normas para la entrega de actividades**
        Con el objetivo de mantener un estándar uniforme y facilitar la evaluación de las actividades del curso, todas las entregas deberán realizarse **exclusivamente en formato PDF**. Este formato garantiza la correcta visualización del contenido y evita problemas de compatibilidad.
        
        Cada actividad entregada deberá respetar la siguiente **estructura obligatoria**:
        1. **Portada:** Debe incluir el nombre del curso, el título de la actividad, el nombre del estudiante y la fecha de entrega.
        2. **Índice:** Presentar un listado claro de los contenidos y apartados incluidos en la actividad, con la correspondiente numeración de páginas.
        3. **Desarrollo:** Contenido principal de la actividad, redactado de manera ordenada, clara y coherente, siguiendo las indicaciones específicas de cada tarea.
        4. **Webgrafía:** Listado de todas las fuentes consultadas para la realización de la actividad, respetando normas básicas de citación académica.
El cumplimiento de esta estructura será considerado un criterio dentro de la evaluación, por lo que se solicita a los estudiantes entregar sus actividades siguiendo estas pautas de manera rigurosa


<h1><span>Sistemas de gestión empresarial</span></h1><h2><span>Tema 1</span></h2><h3><span>Temario</span></h3><div><ul class="dataview list-view-ul"><li><span><a data-tooltip-position="top" aria-label="01 Apuntes/DAM/Sistemas de gestión empresarial/Tema 1/Temario/Tema 1.md" data-href="01 Apuntes/DAM/Sistemas de gestión empresarial/Tema 1/Temario/Tema 1.md" href="01 Apuntes/DAM/Sistemas de gestión empresarial/Tema 1/Temario/Tema 1.md" class="internal-link" target="_blank" rel="noopener nofollow">Tema 1</a></span></li></ul></div><h3><span>Actividades</span></h3><p><span><a data-tooltip-position="top" aria-label="Ejercicio" data-href="Ejercicio" href="Ejercicio" class="internal-link" target="_blank" rel="noopener nofollow">Ejercicio</a></span></p><p><span><a data-tooltip-position="top" aria-label="Actividad 2" data-href="Actividad 2" href="Actividad 2" class="internal-link" target="_blank" rel="noopener nofollow">Actividad 2</a></span></p><h2><span>Tema 2</span></h2><p><span>No hay temario</span></p><h3><span>Actividades</span></h3><p><span><a data-tooltip-position="top" aria-label="Actividad" data-href="Actividad" href="Actividad" class="internal-link" target="_blank" rel="noopener nofollow">Actividad</a></span></p>



```mermaid
erDiagram

CUSTOMER ||--o{ ORDER : places

ORDER ||--|{ ORDER_ITEM : contains

PRODUCT ||--o{ ORDER_ITEM : includes

CUSTOMER {

string id

string name

string email

}

ORDER {

string id

date orderDate

string status

}

PRODUCT {

string id

string name

float price

}

ORDER_ITEM {

int quantity

float price

}
```

```mermaid
erDiagram

CUSTOMER ||--o{ ORDER : places

ORDER ||--|{ ORDER_ITEM : contains

PRODUCT ||--o{ ORDER_ITEM : includes

CUSTOMER {

string id

string name

string email

}

ORDER {

string id PK "Hola"

date orderDate

string status

}

PRODUCT {

string id

string name

float price

}

ORDER_ITEM {

int quantity

float price

}

```
