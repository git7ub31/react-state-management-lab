import './App.css';
import { useState } from "react";

const App = () => {
  const [team, setTeam] = useState([])
  const [money, setMoney] = useState(100) 
  const [zombieFighters, setZombieFighters] = useState([
    {
      id: 1,
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
    },
    {
      id: 2,
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
    },
    {
      id: 3,
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
    },
    {
      id: 4,
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
    },
    {
      id: 5,
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
    },
    {
      id: 6,
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
    },
    {
      id: 7,
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
    },
    {
      id: 8,
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
    },
    {
      id: 9,
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
    },
    {
      id: 10,
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
    },
  ]
  )

  const handleAddFighter = (chosenZombieFighter) => {
    if (money >= chosenZombieFighter.price) {
      setTeam([...team, chosenZombieFighter]);
      setZombieFighters(zombieFighters.filter(zombieFighter => zombieFighter.id !== chosenZombieFighter.id));
      setMoney(money - chosenZombieFighter.price);
    } else {
      alert("not enough money!")
      console.log("Not enough money");
    }
  }
  
  const handleRemoveFighter = (chosenZombieFighter) => {
    setTeam(team.filter(zombieFighter => zombieFighter.id !== chosenZombieFighter.id));
    setZombieFighters([...zombieFighters, chosenZombieFighter]);
    setMoney(money + chosenZombieFighter.price);
  };

  const totalStrength = team.reduce((acc, zombieFighter) => acc + zombieFighter.strength, 0);
  const totalAgility = team.reduce((acc, zombieFighter) => acc + zombieFighter.agility, 0);

  return (
    <>
   <div>
        <h2>Current Value of Money: ${money}</h2>
        <h3>List of Fighters</h3>
        <ul>
          {zombieFighters.map((zombieFighter) => (
            <li key={zombieFighter.id}>
              <img src={zombieFighter.img} alt={zombieFighter.name} width="50" />
              <p>{zombieFighter.name}</p>
              <p>Price: {zombieFighter.price}</p>
              <p>Strength: {zombieFighter.strength}</p>
              <p>Agility: {zombieFighter.agility}</p>
              <button onClick={() => handleAddFighter(zombieFighter)}>Add to Team</button>
            </li>
          ))}
        </ul>
        </div>

        <div>
          <h1>My Zombie Fighters Team</h1>
          {team.length === 0 ? (
            <h2>Pick Some Team Members!</h2>
          ):(
            <ul>
            {team.map((zombieFighter) => (
              <li key={zombieFighter.id}>
                <img src={zombieFighter.img} alt={zombieFighter.name} width="50" />
                <p>{zombieFighter.name}</p>
                <p>Price: {zombieFighter.price}</p>
                <p>Strength: {zombieFighter.strength}</p>
                <p>Agility: {zombieFighter.agility}</p>
                <button  onClick={() => handleRemoveFighter(zombieFighter)}>Remove Character</button>
              </li>
            ))}
          </ul>
          ) 
          }
           <p>Total Strength: {totalStrength}</p>
           <p>Total Agility: {totalAgility}</p>
        </div>
    </>
  );
}

export default App
