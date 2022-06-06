
# Dependencias
La única dependencia para este proyecto es tener instalado alguna versión de Node. Para este proyecto se usa la siguiente:
- Node v17.2.0 (https://nodejs.org/es/).
- Git.
- PostgreSQL 14.3

# Estructura
```
tcit-challenge
│   README.md   
└───back
└───front
```
# Ejecución

En primer lugar, clonar el repositorio con:
```
git clone https://github.com/RaimundoVU/tcit-challenge.git
```

Es recomendable para ejecutar este proyecto tener dos pestañas de terminal abiertas en la carpeta raíz del proyecto. 


En la primera pestaña de la terminal ejecutamos los siguientes comandos:
```
cd back
psql -U <USUARIO_DE_POSTGRES> -f src/database/database.sql -a 
```
Esto creara la base de datos, donde el propietario sera el <USUARIO_DE_POSTGRES> que utilicemos en el comando.

Para el ejecutar backend, dentro de la misma carpeta `back`
```
npm install
node index.js
```

Para el frontend en la siguiente terminal, se deben ejecutar los siguientes comandos:
```
cd front
npm install
npm start
```

Cabe destacar que el comando `npm install` podría tardar unos minutos ( tanto front como back).


