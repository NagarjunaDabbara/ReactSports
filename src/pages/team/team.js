import React, { useState } from "react";
import useStickyState from "../../components/Hooks";
import { Showteam } from "./showteam";
const Team = () => {
  const [count, setCount] = useStickyState([], "count");
  const [team, setteam] = useState("");
  const [player, setplayer] = useState("");

  const team_data = () => {
      if(team!=='' && player!==''){
    let val = [...count];
    const tmp = { team: team, player: player };
    val.push(tmp);
    setCount(val);
    console.log(count);
      }else{
          alert('one of the fields are empty');
      }
  };
  return (
    <>
    <div className="flex w-full gap-40">
    <div className="mt-40 mx-10">
      <span className="text-3xl lg:text-4xl text-gray-700 font-extrabold mx-1"> ADD PLAYER</span>
      <div class="w-full pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
        <div class="bg-yellow-700 text-black rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
          Player-Name:
          <input
            type="text"
            className="mx-5 bg-gray-200"
            value={player}
            onChange={(e) => {
              setplayer(e.target.value);
            }}
          />
          <br />
          Team-Name:
          <input
            type="text"
            className="mx-5 bg-gray-200 mt-2"
            value={team}
            onChange={(e) => {
              setteam(e.target.value);
            }}
          />
          <br />
          <button
            onClick={team_data}
            class="rounded-full bg-gray-800 text-white hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none w-10 h-10 flex ml-auto transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="stroke-current m-auto"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </button>
        </div>
        </div>
      </div>
      <Showteam count={count} setCount={setCount} />
    </div>
    </>
  );
};

export default Team;
