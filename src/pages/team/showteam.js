import React, { useState } from "react";
import useStickyState from "../../components/Hooks";

export const Showteam = ({ count, setCount }) => {
  const [sorteddata, setsorteddata] = useState([]);

  const sorted = () => {
    let o = {};
    count.map((i, j) => {
      o[i.team] = count.map((k, l) => {
        if (k.team == i.team) {
          return k.player;
        }
        return "";
      });
    });
    //console.log(o);
  };

  sorted();

  const cars = Array.from(new Set(count.map(({ team }) => team)));

  console.log(cars);
  function RemoveNode(team, player) {
    let data = [...count];
    return data.filter(function (emp) {
      if (emp.team == team && emp.player == player) {
        return false;
      }
      return true;
    });
  }

  function RemoveTeam(team, player) {
    let data = [...count];
    return data.filter(function (emp) {
      if (emp.team == team) {
        return false;
      }
      return true;
    });
  }

  const deleteteam = (key, team) => {
    const tmp_del = RemoveTeam(team);
    setCount(tmp_del);
  };

  const deletekey = (key, team, player) => {
    const tmp_del = RemoveNode(team, player);
    setCount(tmp_del);
  };
  return (
    <div className="text-center">
      {cars.map((i) => (
        <section class="m-2 font-sans leading-normal flex">
          <div class="max-w-lg shadow-lg rounded overflow-hidden m-4 sm:flex">
            <div
              class="h-48 sm:h-auto sm:w-48 md:w-64 flex-none bg-cover bg-center rounded rounded-t sm:rounded sm:rounded-l text-center overflow-hidden"
              style={{"background-image": "url('https://unsplash.it/804/800')"}}
            ></div>

            <div class="px-6 py-4">
              <h2 class="mb-2 font-black">Team Name: {i}</h2>
              <h2 class="mb-2 font-black">Players</h2>
              {count.map((k, v) => (
                <>
                  {k.team == i && (
                    <>
                      <p class="mb-4 text-grey-dark text-sm">
                        {k.player}
                        <button
                          onClick={() => deletekey(0, i, k.player)}
                          className="text-red-400"
                        >
                          X
                        </button>
                      </p>
                    </>
                  )}
                </>
              ))}
            </div>
                                <button
            onClick={() => deleteteam(0, i)}
            className="bg-red-400 mx-2"
          >
            delete team
          </button>
          </div>
        </section>
      ))}
    </div>
  );
};
