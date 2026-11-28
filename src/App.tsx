import NavBar from "./components/NavBar/AdminNavBar"
import { Route, Routes } from "react-router-dom";
import VideoSearchPage from "./pages/VideoSearchPage/VideoSearchPage";
import VideoUploadPage from "./pages/VideoUploadPage/VideoUploadPage";
import '@mantine/core/styles.css'
import { MantineProvider } from "@mantine/core";
import './assets/App.css';

function App() {

  return (
     <MantineProvider>
    <div className="container">
        <NavBar />
        <Routes>
          <Route path="/search" element={<VideoSearchPage />} />
          <Route path="/upload" element={<VideoUploadPage />} />
        </Routes>
    </div>
    </MantineProvider>
  );
}

export default App
