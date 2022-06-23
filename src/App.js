import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Layout from "./layout";
import GlobalCovid from "./pages/Global";
import IndoCovid from "./pages/covid/Indo";
import ProvinceCovid from "./pages/covid/Province";
import theme from "./utils/constants/theme";
import About from "./pages/covid/About";

function App() {
  return (
    <div>
      {/*
       * Render Halaman Home
       * Jika ingin diubah, maka ubah di Halaman Home.
       */}
       <ThemeProvider theme={theme}>
       <Layout>
       <Routes>
      <Route path="/" element = {<GlobalCovid/>}></Route>
      <Route path="/covid/indo" element = {<IndoCovid/>}></Route>
      <Route path="/covid/province" element = {<ProvinceCovid/>}></Route>
      <Route path="/covid/about" element = {<About/>}></Route>
      </Routes>
      </Layout>
      </ThemeProvider>
    </div>
  );
}

export default App;
