import React, { useEffect, useState } from "react";
import CreateTournament from './create-tournament';
import { useTournaments } from '@/hooks/useTournaments';
import { useSelector } from 'react-redux';
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Pencil, Trash2, Trophy, Users, Calendar, Clock, DollarSign } from "lucide-react";
import { ensureArray } from "@/helper-functions/use-formater";

const Tournaments = () => {
  const [open, setOpen] = useState(false);
  const [selectedTournament, setSelectedTournament] = useState<any | null>(null);
  const { isLoading, handleGetTournaments, handleDeleteTournaments } = useTournaments();
  const { tournamentsData } = useSelector((state: any) => state.Tournaments);

  useEffect(() => {
    handleGetTournaments();
  }, []);

  const getStatusColor = (status: string) => {
    switch (status?.toLowerCase()) {
      case "live":
        return "bg-red-600";
      case "starting_soon":
        return "bg-orange-500";
      case "registering":
      case "registration open":
        return "bg-green-600";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-black">Tournaments</h1>
        <Button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700" onClick={() => { setSelectedTournament(null); setOpen(true); }}>
          Create Tournament
        </Button>
      </div>

      {isLoading ? (
        <section className="py-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {Array.from({ length: 8 }).map((_, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden">
                  <Skeleton className="h-48 w-full" />
                  <div className="p-4 space-y-3">
                    <Skeleton className="h-5 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                    <Skeleton className="h-4 w-2/3" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : tournamentsData && tournamentsData.length === 0 ? (
        <div className="flex justify-center items-center h-32 text-gray-500 text-lg">
          No tournaments added
        </div>
      ) : (
        <section className="py-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {ensureArray(tournamentsData)?.map((tournament: any) => (
                <div key={tournament?._id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow cursor-pointer group overflow-hidden">
                  <div className="relative h-48">
                    <img
                      src={tournament?.image ?? ""}
                      alt={tournament?.name ?? ""}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                    <div className="absolute top-2 left-2">
                      <Badge className={getStatusColor(tournament?.status)}>
                        {tournament?.status}
                      </Badge>
                    </div>

                    <div className="absolute top-2 right-2 flex gap-2">
                      <Button size="icon" variant="secondary" className="rounded-full" onClick={(e) => { e.stopPropagation(); setSelectedTournament(tournament); setOpen(true); }}>
                        <Pencil className="w-5 h-5" />
                      </Button>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button size="icon" variant="destructive" className="rounded-full" onClick={(e) => e.stopPropagation()}>
                            <Trash2 className="w-5 h-5" />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Delete tournament?</AlertDialogTitle>
                            <AlertDialogDescription>
                              This action cannot be undone. This will permanently delete this tournament.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={() => handleDeleteTournaments(tournament?._id)}>Delete</AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>

                    <div className="absolute bottom-2 left-2 right-2">
                      <div className="flex items-center justify-between text-white text-sm">
                        <div className="flex items-center gap-1 bg-black/70 px-2 py-1 rounded">
                          <Trophy className="h-4 w-4 text-yellow-400" />
                          <span>{tournament?.prizePool}</span>
                        </div>
                        <div className="flex items-center gap-1 bg-black/70 px-2 py-1 rounded">
                          <DollarSign className="h-4 w-4 text-green-400" />
                          <span>{tournament?.buyIn}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-blue-600">
                      {tournament?.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-3">{tournament?.game}</p>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-gray-600">
                          <Users className="h-4 w-4 mr-1" />
                          <span>Players</span>
                        </div>
                        <span className="text-gray-900">
                          {tournament?.players || 0}/{tournament?.maxPlayers}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-gray-600">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>Start</span>
                        </div>
                        <span className="text-gray-900">
                          {tournament?.startDate}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-gray-600">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>Duration</span>
                        </div>
                        <span className="text-gray-900">
                          {tournament?.duration}
                        </span>
                      </div>
                    </div>

                    <div className="mt-3 pt-3 border-t">
                      <Badge variant="secondary" className="text-xs">
                        {tournament?.type}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <CreateTournament open={open} openChange={setOpen} selectedTournament={selectedTournament} />
    </div>
  );
};

export default Tournaments;