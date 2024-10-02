import {
  HashRouter,
  Route,
  Routes
} from "react-router-dom";
import { CodePreview } from "./pages/CodePreview";
import MainCV from "./pages/MainCV";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" index={true} element={<MainCV />} />
        <Route path="/code-preview" index={true} element={<CodePreview />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
