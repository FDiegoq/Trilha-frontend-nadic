import { useState } from "react";
import Button from "./Button";
import {MapPin, Clock, Calendar, Check, Trash } from "react-feather";

const Main = () => {

  const [games, setGames] = useState([
    { id: 1, name: "Game 1", isEnrolled: false },
    { id: 2, name: "Game 2", isEnrolled: false},
    { id: 3, name: "Game 3", isEnrolled: false},
    { id: 4, name: "Game 4", isEnrolled: false},
    { id: 5, name: "Game 5", isEnrolled: false},
    { id: 6, name: "Game 6", isEnrolled: false},
    { id: 7, name: "Game 7", isEnrolled: false},
  ]);

  function onGameEnrolled(gameId){
    const newGames = games.map((game) =>{
      if(game.id === gameId){
        return {...game, isEnrolled: !game.isEnrolled}
      }
      return game;
    })
    setGames(newGames);

  }

  function onDelete(gameId){
    const newGgames=games.filter((game) => game.id !== gameId);
    setGames(newGgames);
  }

  return (
    <main className="text-violet-950 flex flex-col justify-center items-center mt-8 gap-8">
      <h1 className="text-7xl text-center">Press the <br/>
        button <br /> to enroll
      </h1>

        <section className="flex gap-2 px-24">
            <div className="flex gap-1">
              <MapPin size={24} className="animate-bounce "/>
              <p className="text-md font-bold">Campus IFRN</p>
            </div>
            <div className="flex gap-1">
              <Clock size={24} className="animate-spin" />
              <p className="text-md font-bold">14h-22h</p>
            </div>
            <div className="flex gap-1">
              <Calendar size={24} className="animate-pulse"/>
              <p className="text-md font-bold">11/04/2025</p>
            </div>
        </section>
        <Button string="Play"/>

        <section className="mt-48 bg-violet-950 w-full px-24 py-16 mb-4">
          <h2 className="font-bold text-6xl text-white text-center">Games</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 mt-8">
            {
              games.map((game) => (
                <div key={game.id} className="bg-white flex flex-col items-center justify-center gap-2 rounded-lg shadow-lg p-4 w-64 text-center">
                  <h3 className="text-xl font-bold">{game.name}</h3>
                  <p className="text-gray-600">Description of {game.name}</p>
                  <Button onGameEnrolled={()=> onGameEnrolled(game.id)} string={game.isEnrolled ? "Unenroll" : "Enroll"} />
                    {
                      game.isEnrolled ? (<div className="flex gap-2 transition-transform"> <Check size={24} /> <p>Enrolled</p></div>)
                      : (<p className="text-gray-600">Not enrolled</p>)
                    }
                  <button onClick={()=> onDelete(game.id)} className="bg-red-400 p-2 rounded-md hover:bg-red-500 transition-colors cursor-pointer">
                    <Trash/>
                  </button>
                </div>
              )
              )
            }
          </div>
        </section>
    </main>
  );
}
export default Main;