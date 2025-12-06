# Portafolio Full Stack Profesional - Carlos Navas

Este es el repositorio del portafolio profesional de **Carlos Navas**. Una plataforma diseñada para exhibir servicios, proyectos y facilitar el contacto directo a través de un backend seguro.

---

## 🛠️ Stack Tecnológico

Este proyecto está construido como una aplicación *Full Stack* dividida en dos módulos (Frontend y Backend), interconectados por peticiones HTTP.

### 🌐 Frontend (Cliente)

| Tecnología | Propósito |
| :--- | :--- |
| **Vue 3** | Framework principal para la construcción de la interfaz de usuario. |
| **Vite** | Herramienta de construcción (bundler) de alto rendimiento. |
| **TypeScript** | Para tipado estático y mejor escalabilidad. |
| **Less** | Estilizado y manejo de diseño responsivo. |

### ⚙️ Backend (Servidor)

| Tecnología | Propósito |
| :--- | :--- |
| **Node.js / Express** | Entorno de ejecución y framework minimalista para la API. |
| **Nodemailer** | Gestión segura del envío de correos electrónicos desde el formulario de contacto. |
| **TypeScript** | Lenguaje principal de desarrollo del servidor. |
| **dotenv** | Gestión de variables de entorno para credenciales seguras. |
| **Axios** | Para gestionas las peticiones HTTP al servidor |

---

## Aspectos de Seguridad y Calidad

* **Sanitización de Contenido (XSS):** El servidor implementa saneamiento en todos los *inputs* del formulario de contacto para limpiar y eliminar código malicioso, previniendo ataques **Cross-Site Scripting (XSS)** dirigidos al buzón del propietario.
* **Gestión de Credenciales:** Las credenciales de Nodemailer se manejan exclusivamente a través de variables de entorno.
* **Validación de Datos:** Uso de validadores de expresiones regulares robustos para asegurar la integridad de los datos de entrada.

---

## Licencia

Este proyecto está liberado bajo la **Licencia MIT**.
