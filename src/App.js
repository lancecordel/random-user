import { useEffect, useState } from 'react';
import './App.css';
import Button from './components/Button';
import UserSummary from './components/UserSummary';
import { fetchData } from './services/rando_user';


function App() {

  const [currentUser, setCurrentUser] = useState('')

  async function refreshUser(event){
    const userData = await fetchData();
    const { results } = userData.data;
    setCurrentUser(results)
    // console.log(currentUser)
    
  }
  return (
    <div className="App">
      {console.log(currentUser)}
      <UserSummary userData={currentUser[0]}  />
      <Button 
      onClick={(e) => refreshUser(e)}
      />
    </div>
  );
}

export default App;
