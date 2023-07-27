import logo from './logo.svg';
import rocket from './rocket.png';
import schedules from './Schedules.png';
import members from './Members.png';
import frame from './Frame.png';
import './header.css';

function App() {
  return (
    <header className='App-header'>
  <div class="button-container">
    <img src={rocket} class='rocket_img'/>
    <button class="my-button">Missions</button>
    <img src={schedules} class='schedules_img'/>
    <button class="my-button">Leaderbord</button>
    <img src={members} class='members_img'/>
    <button class="my-button">Rewards</button>
    <img src={frame} class='frame_img'></img>
  </div>
</header>
  );
}

export default App;

