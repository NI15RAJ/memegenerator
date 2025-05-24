    import { Routes, Route } from "react-router-dom";
    import './App.css';
    import 'bootstrap/dist/css/bootstrap.min.css';
    import Homepage from "./pages/home";
    import EditPage from "./pages/edit"; // Capitalized to match component convention

    function App() {
      return (
        <div className="Container">
          <h1>
            Meme Generator
          </h1>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/edit" element={<EditPage />} />
          </Routes>
        </div>
      );
    }

    export default App;
