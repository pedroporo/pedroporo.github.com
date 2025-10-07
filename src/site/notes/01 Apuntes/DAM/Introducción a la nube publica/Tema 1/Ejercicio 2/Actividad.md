---
{"dg-publish":true,"permalink":"/01-apuntes/dam/introduccion-a-la-nube-publica/tema-1/ejercicio-2/actividad/"}
---

Ultima Modificacion: NaN
Curso: Desarollo de aplicaciones multiplataforma segundo
Pedro Guill Ferri
Fecha de entrega: 2025-10-07T00:00:00.000+02:00

1. Define cada uno de los servicios presentados en el diagrama:

Internet Gateway:
Un Internet Gateway es un componente de la Private Subnet que es escalable, y permite la comunicación entre una subnet y Internet. Actúa como un puente entre la VPC y Internet, facilitando que los recursos dentro de subredes públicas (como instancias EC2) se conecten a Internet si tienen una dirección IPv4 pública o una dirección IPv6.

**Bucket**:

Es un contenedor de objetos y tablasque se almacenan en Amazon S3, osea un servicio de almacenamiento de objetos en la nube. 

**Virtual Private Cloud**:

Es un servicio de redes que se usa para seleccionar servicios web y usarlos juntos.

**Public subnet**:

Es una subred que tiene una ruta en su tabla de enrutamiento hacia el Internet Gateway. Esta configuración permite que las instancias dentro de la subred se comuniquen directamente con Internet. Para que esta comunicación funcione, las instancias en una subred pública deben tener direcciones IP públicas o direcciones IP elásticas asignadas. La presencia de una ruta para el destino 0.0.0.0/0 que apunta a una puerta de enlace de Internet es el criterio clave para determinar si una subred es pública.

**Private Subnet**:

Una subred privada  se define principalmente por su configuración de enrutamiento en la tabla de enrutamiento asociada, específicamente por la ausencia de una ruta hacia una puerta de enlace de Internet. Si una subred está asociada a una tabla de enrutamiento que no tiene ninguna ruta hacia una puerta de enlace de Internet, se considera una subred privada. Esto significa que los recursos dentro de una subred privada no pueden comunicarse directamente con Internet, incluso si tienen direcciones IP públicas asignadas.

**Instancia de EC2:**

Son como maquinas virtuales que podemos contratas y son escalables

**Instancia DB**:

Es donde se guardan los datos

**Network Access Control List**:

Un Network Access Control List  es una capa que actúa como un firewall para controlar el tráfico de red entrante y saliente a nivel de subred dentro de una VPC. Cada subred debe tener asociada una NACL(Me daba pereza escribir todo), y estas se aplican a todas las instancias dentro de la subred a la que están asociadas. Las NACLs son stateless, lo que significa que el tráfico de retorno debe ser permitido explícitamente mediante reglas de salida, a diferencia de los grupos de seguridad que son stateful.


2. Calculo de costos:
![[My Estimate - Calculadora de precios de AWS.pdf#page=1]]
![[My Estimate - Calculadora de precios de AWS.pdf#page=2]]