# 📊 KEV Viewer

**KEV Viewer** es una herramienta que ayuda a visualizar el catálogo de vulnerabilidades conocidas (KEV) de CISA. Este proyecto organiza, filtra y resalta las vulnerabilidades de forma interactiva.

---

## 🚀 Características Principales

- **Filtrado dinámico:**  
  Filtra las vulnerabilidades por:
  - Campañas de ransomware conocidas (`Sí` o `No`).
  - Búsqueda precisa por `CVE ID`.

- **Datos siempre actualizados:**  
  Descarga automáticamente el JSON más reciente desde el catálogo KEV de CISA.

---

## 📁 Estructura del Proyecto

```plaintext
kev-viewer/
│
├── src/                      # Código fuente
│   ├── main.py               # Script principal de Python
│   └── templates/            # Plantillas HTML
│       └── index.html        # Plantilla HTML principal
│
├── static/                   # Archivos estáticos (CSS, JS)
│   ├── css/                  # Archivos de estilos
│   │   └── styles.css        # Hoja de estilos principal
│   └── js/                   # Archivos JavaScript
│       └── scripts.js        # Lógica JS para interactividad
│
├── data/                     # Archivos de datos (opcional)
│   └── vulnerabilities.json  # JSON local con vulnerabilidades (pruebas)
│
├── dist/                     # Archivos generados (HTML estático)
│   └── index.html            # Archivo HTML final generado
│
├── requirements.txt          # Dependencias del proyecto
└── README.md                 # Documentación del proyecto

🛠️ Instalación y Configuración

1️⃣ Requisitos Previos
Python 3.8 o superior instalado.
Gestor de paquetes pip.

2️⃣ Clonar el Repositorio
git clone https://github.com/Sotacero/kev-viewer.git
cd kev-viewer

3️⃣ Instalar Dependencias
pip install -r requirements.txt

4️⃣ Ejecutar el Proyecto
Genera el archivo HTML ejecutando el script principal:
python src/main.py

5️⃣ Abrir el Archivo Generado
Dirígete al directorio dist/ y abre el archivo index.html:
dist/index.html

🤝 Créditos
Este proyecto fue desarrollado por Luismi :^)
