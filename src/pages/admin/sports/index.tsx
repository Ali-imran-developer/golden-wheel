import React, { useEffect, useState } from "react";
import CreatedSports from './create-sports';
import { useSports } from '@/hooks/useSports';
import { useSelector } from 'react-redux';
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
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
import { Pencil, Trash2, TrendingUp } from "lucide-react";
import { ensureArray } from "@/helper-functions/use-formater";

const Sports = () => {
  const [open, setOpen] = useState(false);
  const [selectedSport, setSelectedSport] = useState<any | null>(null);
  const { isLoading, handleGetSports, handleDeleteSports } = useSports();
  const { sportsData } = useSelector((state: any) => state.Sports);

  useEffect(() => {
    handleGetSports();
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-black">Sports Betting</h1>
        <Button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700" onClick={() => { setSelectedSport(null); setOpen(true); }}>
          Create Sport
        </Button>
      </div>

      {isLoading ? (
        <section className="py-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {Array.from({ length: 8 }).map((_, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden">
                  <Skeleton className="h-32 w-full" />
                  <div className="p-4 space-y-3">
                    <Skeleton className="h-5 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                    <div className="flex items-center justify-between">
                      <Skeleton className="h-4 w-16" />
                      <Skeleton className="h-4 w-20" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : sportsData && sportsData.length === 0 ? (
        <div className="flex justify-center items-center h-32 text-gray-500 text-lg">
          No sports added
        </div>
      ) : (
        <section className="py-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {ensureArray(sportsData)?.map((sport: any) => (
                <div key={sport?._id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow cursor-pointer group overflow-hidden">
                  <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 h-32 flex items-center justify-center">
                    <TrendingUp className="w-16 h-16 text-white opacity-50" />
                    <div className="absolute top-2 right-2 flex gap-2">
                      <Button size="icon" variant="secondary" className="rounded-full" onClick={(e) => { e.stopPropagation(); setSelectedSport(sport); setOpen(true); }}>
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
                            <AlertDialogTitle>Delete sport?</AlertDialogTitle>
                            <AlertDialogDescription>
                              This action cannot be undone. This will permanently delete this sport.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={() => handleDeleteSports(sport?._id)}>Delete</AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-blue-600">
                      {sport?.sport}
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">{sport?.league}</p>

                    <div className="mb-3 text-sm">
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-600">{sport?.homeTeam}</span>
                        <span className="font-semibold text-green-600">{sport?.homeOdds}</span>
                      </div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-600">Draw</span>
                        <span className="font-semibold text-yellow-600">{sport?.drawOdds}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">{sport?.awayTeam}</span>
                        <span className="font-semibold text-red-600">{sport?.awayOdds}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t">
                      <span className={`text-xs px-2 py-1 rounded ${sport?.status === 'live' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                        {sport?.status}
                      </span>
                      <span className="text-sm text-gray-500">
                        {sport?.betCount || 0} bets
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <CreatedSports open={open} openChange={setOpen} selectedSport={selectedSport} />
    </div>
  );
};

export default Sports;