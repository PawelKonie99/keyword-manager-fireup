import { Layout } from "./layout/Layout";
import { Item } from "./components/Item/Item";
import { MainPage } from "./pages/MainPage";
import { getAll } from "./services/getAllData";
import { useEffect } from "react";

function App() {
  return (
    <Layout>
      <div className="App">
        <MainPage></MainPage>
      </div>
    </Layout>
  );
}

export default App;
