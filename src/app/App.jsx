import React from 'react';
import DragonList from '../Components/dragons/DragonList';
import MissionList from '../Components/missions/MissionList';
import MyProfile from '../Components/profiles/MyProfile';
import Navbar from '../Components/navbar/Navbar';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

const App = () => {
  return (
      <>
      <Navbar />
      <h1>NavBar ends here! Onwards! there is API data!!</h1>
      <MissionList />
      <DragonList />
      <MyProfile />
      </>
  );
};

export default App;
