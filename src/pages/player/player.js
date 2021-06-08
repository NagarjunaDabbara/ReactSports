import React, { useState } from "react";
import SearchField from "react-search-field";
import useStickyState from "../../components/Hooks";

const Player = () => {
  const [count, setCount] = useStickyState([], "count");
  const [seach, setseach] = useState("");
  return (
    <div className="text-center mt-5">
      <input
        type="text"
        className="bg-gray-200 text-black px-5 py-2"
        value={seach}
        placeholder="Player Name"
        onChange={(e) =>{setseach(e.target.value)}}
      />
      <br />
      <br />
      <div className="flex-col mx-5">
      {count.map((i, j) => (
          <>
          {(i.player.includes(seach) || seach == "") && (
              <div style={{"margin-left":"35rem"}} class="bg-white my-4  rounded shadow border p-6 w-64">
                  <h5 class="text-3xl font-bold mb-4 mt-0">Player : {i.player}</h5>
                  <p class="text-gray-700 text-sm">Team->{i.team}</p>
                 </div>
          )}
        </>
      ))}
      </div>
    </div>
  );
};

export default Player;
