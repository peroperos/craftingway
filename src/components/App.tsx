import "./App.scss";

import { observer } from "mobx-react-lite";

import Header from "./Header";
import PlayerConfig from "./PlayerConfig";
import RecipeConfig from "./RecipeConfig";
import CraftStateDisplay from "./CraftStateDisplay";

const App = observer(function App() {
  return (
    <div className="App">
      <Header />

      <PlayerConfig />

      <RecipeConfig />

      <CraftStateDisplay />
    </div>
  );
});

export default App;
