import { Button } from '@/components/ui/button';
import { useSports } from '@/hooks/useSports';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CreatedSports from './create-sports';

const Sports = () => {
  const { isLoading, handleGetSports } = useSports();
  const { sportsData } = useSelector((state: any) => state.Sports);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    handleGetSports();

  }, [])

  return (
    <div className='bg-gray-50 min-h-screen'>
      <div className="px-4 py-6 flex w-full justify-between items-center">
        <h2 className='text-black font-semibold text-2xl'>Sports</h2>
        <Button onClick={() => setOpen(true)}>
          Add Sport
        </Button>
      </div>

      {open && <CreatedSports open={open} openChange={setOpen} />}
    </div>
  )
}

export default Sports;