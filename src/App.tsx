import { useState } from 'react';
import './App.css';

export type ItemId = `${string}-${string}-${string}-${string}-${string}`;
export interface Item {
  id: ItemId;
  text: string;
  timestamp: number;
}
const INITIAL_ITEMS: Item[] = [
  {
    id: crypto.randomUUID(),
    text: 'Videojuegos',
    timestamp: Date.now(),
  },
  {
    id: crypto.randomUUID(),
    text: 'Libros',
    timestamp: Date.now(),
  },
];

function App() {
  const [items, setItems] = useState(INITIAL_ITEMS);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { elements } = event.currentTarget;

    const input = elements.namedItem('item');
    const isInput = input instanceof HTMLInputElement;
    if (!isInput || input == null) return;

    const newItem: Item = {
      id: crypto.randomUUID(),
      text: input.value,
      timestamp: Date.now(),
    };

    setItems((prevItems) => {
      return [...prevItems, newItem];
    });

    input.value = '';
  };

  const createHandleRemoveItem = (id: ItemId) => () => {
    setItems((prevItems) => {
      return prevItems.filter((currentItem) => currentItem.id != id);
    });
  };

  return (
    <main>
      <aside>
        <h1>Prueba Tecnica React</h1>
        <h2>Añadir y elimar elementos de una lista</h2>

        <form onSubmit={handleSubmit} aria-label="Añadir elementos a la lista">
          <label>
            Elemento a introducir:
            <input
              name="item"
              required
              type="text"
              placeholder="Videojuegos 🎮"
            />
          </label>
          <button>Añadir elemento a la lista</button>
        </form>
      </aside>
      <section>
        <h2>Lista de elementos</h2>
        <ul>
          {items.length == 0 ? (
            <p>
              <strong>No hay elementos en la lista</strong>
            </p>
          ) : (
            items.map((item) => {
              return (
                <li key={item.id}>
                  {item.text}
                  <button onClick={createHandleRemoveItem(item.id)}>
                    Eliminar Elemento
                  </button>
                </li>
              );
            })
          )}
        </ul>
      </section>
    </main>
  );
}

export default App;
