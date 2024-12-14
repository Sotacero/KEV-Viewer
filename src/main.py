import os
import requests
from jinja2 import Environment, FileSystemLoader

# Configuración de rutas
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
TEMPLATE_DIR = os.path.join(BASE_DIR, "templates")
OUTPUT_DIR = os.path.join(BASE_DIR, "../dist")
OUTPUT_FILE = os.path.join(OUTPUT_DIR, "index.html")

# URL del endpoint
json_url = "https://www.cisa.gov/sites/default/files/feeds/known_exploited_vulnerabilities.json"

# Descargar los datos del endpoint
response = requests.get(json_url)
if response.status_code != 200:
    print(f"Error al obtener los datos: {response.status_code}")
    exit()

data = response.json()

# Agrupar las vulnerabilidades por vendorProject
grouped_data = {}
for vuln in data["vulnerabilities"]:
    vendor = vuln["vendorProject"]
    if vendor not in grouped_data:
        grouped_data[vendor] = []
    grouped_data[vendor].append(vuln)

# Configuración de Jinja2
env = Environment(loader=FileSystemLoader(TEMPLATE_DIR))
template = env.get_template("index.html")

# Renderizar la plantilla
rendered_html = template.render(grouped_data=grouped_data)

# Crear directorio de salida si no existe
os.makedirs(OUTPUT_DIR, exist_ok=True)

# Escribir el archivo HTML generado
with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
    f.write(rendered_html)

print(f"Archivo HTML generado exitosamente: {OUTPUT_FILE}")
