import NavBar from "./components/NavBar/AdminNavBar"
import VideoSearchPage from "./pages/VideoSearchPage/VideoSearchPage";
import '@mantine/core/styles.css'
import { MantineProvider } from "@mantine/core";
import "./assets/App.css"

function App() {

  return (
    <main>
      <MantineProvider>
      <NavBar />
      <VideoSearchPage />
      </MantineProvider>
    </main>
  );
}

export default App
