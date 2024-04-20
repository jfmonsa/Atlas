import Header from "./components/common/header/Header.jsx"
import Footer from "./components/common/footer/Footer.jsx"
// import "./app.sass"
import { Login } from "./components/common/login/Login.jsx";

const App = () => {
  return(
    <>

      <Header ></Header>
      <Login/>
      <Footer></Footer>

    </>
  );
}

export default App
