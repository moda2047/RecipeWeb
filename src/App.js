import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";
import Mypage from "./pages/Mypage";
import UpdatePage from "./pages/UpdatePage";
import Ingredient from "./components/Ingredient";
import Recipe from "./components/Recipe";
import RecipeDetail from "./pages/RecipeDetail";
import RecipeSearch from "./pages/RecipeSearch";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Register" element={<Register />}></Route>
        <Route path="/Mypage" element={<Mypage />}></Route>
        <Route path="/ingredient" element={<Ingredient />}></Route>
        <Route path="/UpdateMember" element={<UpdatePage />}></Route>
        <Route path="/Recipe" element={<Recipe />}></Route>
        <Route path="/RecipeDetail" element={<RecipeDetail />}></Route>
        <Route path="/RecipeSearch" element={<RecipeSearch />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
