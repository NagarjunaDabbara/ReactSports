import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Player from './pages/player/player'
import Team from './pages/team/team'
function App() {

  return (
    <>
   
      <BrowserRouter>
        <Switch>
          <Route path="/player">
            <Player/>
          </Route>
          <Route path="/team">
          <Team />
          </Route>
          <Route path="/">
          <div className="text-center m-10">
                          <a href="/team" className="text-blue-300"> <button class="rounded bg-blue-500 hover:bg-blue-700 py-2 px-4 text-white"> GET TEAM STATS</button></a><br/>
  <br/>
             <a href="/player" className="text-blue-300"> <button class="rounded bg-blue-500 hover:bg-blue-700 py-2 px-4 text-white"> GET PLAYER STATS</button></a><br/>
             </div>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
