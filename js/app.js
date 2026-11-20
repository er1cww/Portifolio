const Card = (props) => {
  return (
    <section className="card">
      <h2>{props.titulo}</h2>
      <p>{props.descricao}</p>
    </section>
  );
};

const App = () => {
  return (
    <main>
      <h1>Meus projetos em React</h1>
      <p>{projetos.length} projetos</p>
      {projetos.map((projeto) => (
        <Card
          key={projeto.titulo}
          titulo={projeto.titulo}
          descricao={projeto.descricao}
        />
      ))}
    </main>
  );
};

const raiz = ReactDOM.createRoot(document.querySelector("#raiz"));
raiz.render(<App />);