import { AddCategoryForm } from "./components/AddCategoryInput/AddCategoryForm";
import { Layout } from "./layout/Layout";
import { MainPage } from "./pages/MainPage/MainPage";
import { putNewCategory } from "./services/putNewCategory";

function App() {
  return (
    <Layout>
      <MainPage></MainPage>
    </Layout>
  );
}

export default App;
