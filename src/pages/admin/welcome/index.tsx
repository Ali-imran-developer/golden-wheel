import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";
import { Pencil, Trash2 } from "lucide-react";
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
import { useWelcome } from "@/hooks/useWelcome";
import { useSelector } from "react-redux";
import CreateWelcome from "./create-welcome";

const Welcome = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedWelcome, setSelectedWelcome] = useState<any | null>(null);
  const { isLoading, handleGetWelcome, handleDeleteWelcome } = useWelcome();
  const { welcomeData } = useSelector((state: any) => state.Welcome);

  useEffect(() => {
    handleGetWelcome();
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Welcome Data</h1>
        {welcomeData && (
          <Button 
            onClick={() => { setSelectedWelcome(null); setIsOpen(true); }} 
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
          >
            Create Welcome
          </Button>
        )}
      </div>

      {isLoading ? (
        <div className="max-w-4xl mx-auto">
          <Card className="p-8">
            <div className="space-y-6">
              <div className="space-y-3">
                <Skeleton className="h-8 w-1/3" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Array.from({ length: 4 }).map((_, idx) => (
                  <Card key={idx} className="p-6">
                    <div className="space-y-3">
                      <Skeleton className="h-6 w-3/4" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-2/3" />
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </Card>
        </div>
      ) : !welcomeData ? (
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 text-center">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-600">No Welcome Data</h2>
              <p className="text-gray-500">No welcome data exists. Create one to get started.</p>
              <Button 
                onClick={() => { setSelectedWelcome(null); setIsOpen(true); }} 
                className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
              >
                Create Welcome Data
              </Button>
            </div>
          </Card>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 relative">
            <div className="absolute top-4 right-4 flex gap-2">
              <Button 
                size="icon" 
                variant="secondary" 
                className="rounded-full" 
                onClick={() => { setSelectedWelcome(welcomeData); setIsOpen(true); }}
              >
                <Pencil className="w-4 h-4" />
              </Button>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button size="icon" variant="destructive" className="rounded-full">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Delete welcome data?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete the welcome data.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => handleDeleteWelcome()}>Delete</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold text-gray-50">{welcomeData.title}</h2>
                <p className="text-lg text-gray-200 leading-relaxed">{welcomeData.description}</p>
              </div>

              {welcomeData.cards && welcomeData.cards.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {welcomeData.cards.map((card: any, index: number) => (
                    <Card key={index} className="p-6">
                      <div className="space-y-3">
                        <h3 className="text-xl font-semibold text-gray-50">{card.subTitle}</h3>
                        <p className="text-gray-200 leading-relaxed">{card.subDescription}</p>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </Card>
        </div>
      )}

      <CreateWelcome 
        initialData={selectedWelcome} 
        open={isOpen} 
        onOpenChange={setIsOpen}
      />
    </div>
  );
};

export default Welcome;
