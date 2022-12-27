const App = () => {
  const [products, setProducts] = React.useState([]);

  const fetchProducts = () => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // setProducts(data);
      });
  };
  React.useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item">And a fifth one</li>
      </ul>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ReactDOM.render(<App />, document.getElementById("app"));
