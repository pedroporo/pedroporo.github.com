---
{"dg-publish":true,"permalink":"/01-apuntes/daw/desarollo-web-en-entorno-servidor/desarollo-web-en-entorno-servidor/"}
---


[Pagina de github de los apuntes](https://github.com/cipfpbatoi/dwes2324)

```
php artisan route:list
```
```
php artisan make:resource JugadoraResource
php artisan make:component Pacient
php artisan make:model Pacient
php artisan make:seeder ZoneSeeder

php artisan make:factory ZoneFactory -m Zone

php artisan make:migration add_role_to_users_table --table=users
php artisan make:middleware RoleMiddleware
php artisan make:policy PatientPolicy --model=Patient
php artisan make:request PatientRequest
php artisan make:resource PatientResource


php artisan make:controller Api/JugadoraController --api --model=Jugadora

```
Ejecutar los comandos de db `php artisan migrate:fresh --seed`


```
php artisan make:resource ContactResource
php artisan make:component Contact
php artisan make:model Contact
php artisan make:seeder ContactSeeder
php artisan make:factory ContactFactory -m Contact
php artisan make:migration create_table_contacts --create=contacts
php artisan make:policy ContactPolicy --model=Contact
php artisan make:request ContactRequest
php artisan make:resource ContactResource
php artisan make:controller Api/ContactController --api --model=Contact










php artisan make:resource ContactResource
php artisan make:component Contact
php artisan make:model Contact
php artisan make:seeder ContactSeeder
php artisan make:factory ContactFactory -m Contact
php artisan make:migration create_table_contacts --create=contacts
php artisan make:policy ContactPolicy --model=Contact
php artisan make:request ContactRequest

php artisan make:resource CallResource
php artisan make:component Call
php artisan make:model Call
php artisan make:seeder CallSeeder
php artisan make:factory CallFactory -m Call
php artisan make:migration create_table_calls --create=calls
php artisan make:policy CallPolicy --model=Call
php artisan make:request CallRequest

php artisan make:resource AlertResource
php artisan make:component Alert
php artisan make:model Alert
php artisan make:seeder AlertSeeder
php artisan make:factory AlertFactory -m Alert
php artisan make:migration create_table_alerts --create=alerts
php artisan make:policy AlertPolicy --model=Alert
php artisan make:request AlertRequest

php artisan make:resource ReportResource
php artisan make:component Report
php artisan make:model Report
php artisan make:seeder ReportSeeder
php artisan make:factory ReportFactory -m Report
php artisan make:migration create_table_reports --create=reports
php artisan make:policy ReportPolicy --model=Report
php artisan make:request ReportRequest

php artisan make:controller Api/ContactController --api --model=Contact
php artisan make:controller Api/CallController --api --model=Call
php artisan make:controller Api/AlertController --api --model=Alert
php artisan make:controller Api/OperatorController --api --model=User
php artisan make:controller Api/ReportController --api --model=Report

php artisan make:component User

php artisan make:resource UserResource
php artisan make:policy UserPolicy --model=User


```