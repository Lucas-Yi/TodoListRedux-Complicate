import React from "react";
import Input from "./components/Input";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <nav>
        <section>
          <h1>Redux Fundamentals Example</h1>
        </section>
      </nav>
      <main>
        <h2>Todos</h2>
        <div>
          <Input />
          <TodoList />
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;
