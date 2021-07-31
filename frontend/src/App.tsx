import { Layout } from "./layout/Layout";
import { Item } from "./components/Item/Item";
import { MainTable } from "./components/MainTable/MainTable";

function App() {
  return (
    <Layout>
      <div className="App">
        <header className="App-header"></header>
        <Item text={"test"}></Item>
        <Item text={"Audi"}></Item>
        <Item text={"Audi"}></Item>
        <MainTable></MainTable>
      </div>
    </Layout>
  );
}

export default App;
