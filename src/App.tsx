import NavBar from "./components/NavBar/AdminNavBar"
import VideoSearchPage from "./components/StreamSearchView/StreamSearchView";
import '@mantine/core/styles.css'
import { MantineProvider } from "@mantine/core";
import './App.css'

function App() {

  return (
    <div>
      <MantineProvider>
      <NavBar />
      <VideoSearchPage />
      </MantineProvider>
    </div>
  );
}

export default App
