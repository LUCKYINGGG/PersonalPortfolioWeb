import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toast } from "radix-ui";

function App()
{
  return (
    <>
      {/* <Toast /> */}
      <BrowserRouter>
        <Routes>
          <Route index element={ <Home /> } />

          <Route path="*" element={ <NotFound /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
