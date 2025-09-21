import React, { useEffect, useState } from "react";
import CreateGames from "./create-games";
import { useGames } from "@/hooks/useGames";
import { useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { ensureArray } from "@/helper-functions/use-formater";
import { useNavigate } from "react-router-dom";

const Games = ({ games }: { games?: any[] }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { isLoading, handleGetGames } = useGames();
  const { gamesList } = useSelector((state: any) => state.Games);

  useEffect(() => {
    handleGetGames();

  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-black">Popular Games</h1>
        <Button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700" onClick={() => setOpen(true)}>
          Create Game
        </Button>
      </div>

      {gamesList && gamesList.length === 0 ? (
        <div className="flex justify-center items-center h-32 text-gray-500 text-lg">
          No games added
        </div>
      ) : (
        <section className="py-12">
          <div className="max-w-7xl mx-auto ">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {ensureArray(gamesList)?.map((game: any) => (
                <div
                  key={game?._id}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow cursor-pointer group overflow-hidden"
                  onClick={() => navigate("/live-casino")}
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <img src={game?.image ?? ""} alt={game?.name ?? ""}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-blue-600">
                      {game?.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-3">{game?.category}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium text-gray-800">
                          {game.rating}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500">
                        {game.users}k players
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <CreateGames open={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default Games;