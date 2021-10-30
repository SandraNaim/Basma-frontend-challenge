import './App.css';
import CreativeWay from './components/section1/CreativeWay';
import CodeChallenge from './components/section2/CodeChallenge';
import WorkFaster from './components/section3/WorkFaster';
import SharePhotos from './components/section4/SharePhotos';
import ColoredCodeChallenge from './components/section5/ColoredCodeChallenge';
import BasmaChallenge from './components/section6/BasmaChallenge';
import BasmaIsAvailable from './components/section7/BasmaIsAvailable';
import Subscribe from './components/section8/Subscribe';
import StayTuned from './components/section9/StayTuned';
import NavBar from './components/widgets/NavBar';


function App() {
  return (
    // we should add dir = 'rtl' so it can switch to arabic mode
     <div className="App container-fluid">
       <div>
         <NavBar />
       </div>
       <div className="App-padding">
         <CreativeWay />
         <CodeChallenge />
       </div>
       <div style={{backgroundColor:"#CFE2FD"}}>
         <WorkFaster />
       </div>
       <div className="App-padding">
         <SharePhotos />
       </div>
       <div style={{backgroundImage: "linear-gradient(to bottom right, blue, purple)", color:'white'}}>
         <ColoredCodeChallenge />
       </div>
       <BasmaChallenge />
       <BasmaIsAvailable />
       <div className="App-padding">
         <Subscribe />
         <StayTuned />
       </div>
     </div>
   );
 }

 export default App;
