# Hackathon Samsung CIN

## Started

yarn install


## TODO

http://petstore.swagger.io/#/

## Model

* Pet
** /pets (POST/GET)
** /pets/{petId} (GET/PUT/DELETE)

* Order
** /orders (GET)
** /orders/params={} < Plus
** /orders/findByStatus (GET)
** /orders/{orderId} (GET/PUT/DELETE)

* Pet Order
** /pets/{petId}/orders/ (GET/POST)

Pet
  hasmany  Order
   
  name string
  photo: string
  tags: string

Order
  belongs_to Pet
  id        integer($int64)
  quantity	integer($int32)
  shipDate	string($date-time)
  status	string
  Order Status
    Enum:
    Array [ placed, approved, delivered, :completed]
    default: placed


## TODO Backend

### Requisitos

* Criar todos os modelos (Order, Pet)
* Integração com banco de dados Postgres
* API com express
* env em todas as configurações
* Banco de dados com docker-compose
* jslint
* yarn
* nvm
* lint
* sequelize
* Makefile

### Bônus
  * Utilizar docker-compose para aplicação
  * webpack para build
  * Execução de build, run, start, down, up com Makefile

## TODO Front

### Requisitos
* 




