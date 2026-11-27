import NavBar from "./components/NavBar/AdminNavBar"
import VideoSearchPage from "./pages/VideoSearchPage/VideoSearchPage";
import '@mantine/core/styles.css'
import { MantineProvider } from "@mantine/core";
import './assets/App.css';

function App() {

  return (
    <div className="container">
      <MantineProvider>
        <NavBar />
        <VideoSearchPage />
      </MantineProvider>
    </div>
  );
}

export default App
