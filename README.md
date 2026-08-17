# Pelisfree

Pelisfree es una biblioteca de películas en la que puedas almacenar tus películas favoritas con detalles tales como: título, año de lanzamiento, nombre del director, duración de la película, género, puntuación de la película e imagen del póster de la película. También incluye una breve sección de la historia del cine y también una sección de páginas recomendadas para ver películas.

## 🛠️ Tecnologías

* HTML
* CSS
* MongoDB - Versión 8.3
* JavaScript (ES2025)
* Express V5
* NodeJS v26.7.0

## 📁 Estructura del proyecto

Respecto a la estructura del proyecto es monolitica y con diseño modular.  Con una separación de preocupaciones claras. El proyecto esta dividido en dos carpetas concisas, front y back.
Por el lado del back esta dividido en middlewares y src. Dentro de src tenemos las carpetas de controllers, models, routes, service y la respectiva config.
Por el lado del front tenemos los assets, pages, public, scrips y styles. Dentro de la carpeta assets tenemos las respectivas imagenes para el proyecto, dentro de la carpeta pages tenemos todos los archivos HTML del proyecto, scripts todos los modulos JS para el funcionamiento del lado del front y por ultimo la carpeta styles en la cual contiene todos los estilos CSS de la app.

## ⚙️ Instalación y uso local

Pasos para correr el proyecto localmente.

## 🔌 Endpoints de la API

> Base URL: `http://localhost:3000` (local) — próximamente desplegado

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/movies` | Obtiene todas las películas |
| GET | `/movies/search?title=&director=&genre=` | Busca por título, director o género |
| POST | `/movies` | Crea una nueva película |
| PUT | `/movies?id=` | Edita una película por ID |
| DELETE | `/movies?title=` | Elimina una película por título |

## 📸 Capturas de pantalla

<img width="1897" height="779" alt="imagen" src="https://github.com/user-attachments/assets/cd3a11ab-9c1b-41f8-b3b5-c9f167fe6320" />
<img width="1916" height="793" alt="imagen" src="https://github.com/user-attachments/assets/fadca3f6-bfce-4ca4-938f-5fc1ca6394b4" />
<img width="1913" height="804" alt="imagen" src="https://github.com/user-attachments/assets/87fb0988-ce5b-43eb-9030-b8d1cb77b3c8" />
<img width="1913" height="760" alt="imagen" src="https://github.com/user-attachments/assets/8b12f65a-be22-4098-9562-f31c68c1550b" />
<img width="1897" height="801" alt="imagen" src="https://github.com/user-attachments/assets/88ddb7fb-2b5a-4426-a64f-031052fa02e4" />
<img width="1899" height="784" alt="imagen" src="https://github.com/user-attachments/assets/32c17e7e-9d40-4857-8a9f-614e684b178d" />

## 🚀 Próximas funcionalidades

Lo que planeás agregar a futuro.
