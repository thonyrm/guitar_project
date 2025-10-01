#  Guitar Project with React + TypeScript

Aplicación práctica de **ecomerce de Guitarras**, desarrollada con **React + TypeScript** para reforzar conceptos clave de hooks, patrones de estado y buenas prácticas en desarrollo frontend.
La app permite:

- **Listado de Guitarras**

- **Agregar guitarras al carrito**

- **Eliminar guitarras del carrito**

---

**Hooks de React aplicados:**
- 🗂️ `useState` → Manejo de estados locales (inputs, selección de categorias, etc).  
- 🧩 `useReducer` → Lógica del Guitarras (añadir, quitar, actualizar del carrito).  
- ⚡  `useMemo` → Optimización en cálculos de totales(totales).
  
---

## 📂 Estructura del proyecto

```
├─ components/ # Componentes reutilizables 
├─ Hooks/ # Custom hooks (useActivity)
├─ reducer/ # Reducer principal  (guitaryReducer)
├─ types/ # Definición de types (Category, Expenses, etc.)
├─ data/ # Data local.
└─ App.jsx # Punto de entrada principal
```
---

## 🔧 Setup del proyecto

1. Clonar el repositorio:
   ```
   git clone https://github.com/thonyrm/guitar_project_with_useReducer.git
   ```
2. Instalar dependencias:

    ```
    npm install
    ```

3. Ejecutar en modo desarrollo:
    ```
    npm run dev
    ```
