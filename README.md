# 📘 React Hooks: useState y useEffect

Este proyecto contiene ejemplos prácticos y explicaciones detalladas sobre el uso de los **React Hooks** `useState` y `useEffect`, dos herramientas fundamentales en el desarrollo moderno con componentes funcionales en React.

---

## 🚀 ¿Qué son los Hooks?

Los **Hooks** son funciones especiales que introdujo React a partir de la versión 16.8 para permitir el uso de **estado**, **ciclo de vida** y otras características de React **sin necesidad de usar clases**.

Los dos hooks más comunes y utilizados son:

- `useState`: permite agregar estado local a un componente funcional.
- `useEffect`: permite manejar efectos secundarios, como llamadas a APIs, suscripciones, temporizadores, entre otros.

---

## 🧠 ¿Para qué sirven?

### `useState`
Sirve para **crear y manejar variables de estado** dentro de un componente funcional. Cada vez que el estado cambia, el componente se vuelve a renderizar con el nuevo valor.

#### Sintaxis básica:
```jsx
const [estado, setEstado] = useState(valorInicial);

````
## useEffect
Sirve para ejecutar efectos secundarios en un componente, como:

Peticiones HTTP

Manipulación del DOM

Suscripciones

Timers

Sintaxis básica:

useEffect(() => {
  // Código del efecto

  return () => {
    // Código de limpieza (opcional)
  };
}, [dependencias]);


🛠️ Buenas prácticas
No llames hooks dentro de condicionales o bucles. Siempre deben estar en el nivel superior del componente.

Agrupa los efectos por propósito. Si haces dos cosas diferentes (por ejemplo, una llamada a una API y un setInterval), usa dos useEffect distintos.

Usa dependencias correctamente en useEffect. Si las omites, el efecto puede no comportarse como esperas.

