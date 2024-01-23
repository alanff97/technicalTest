import './App.css';

function App() {
  const handleSubmit = () => {};

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
      </section>
    </main>
  );
}

export default App;
