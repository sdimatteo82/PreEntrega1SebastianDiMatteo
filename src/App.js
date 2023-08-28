import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categry/:categoryId" element={<ItemListContainer />} />
        <Route path="item/:itemId" element={<ItemDetailContainer />} />
        <Route path="*" element={<h1>404 not found</h1>} />
      </Routes>
      {<ItemListContainer greeting={"Bienvenido"} />}

      <Footer />
    </BrowserRouter>
  );
}

export default App;
