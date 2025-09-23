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
import { ensureArray } from "@/helper-functions/use-formater";
import { useBanners } from "@/hooks/useBanners";
import axios from "axios";
import { DeleteIcon, Loader2, Upload, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const PORT = import.meta.env.VITE_BACKEND_BASEURL;

const Banners = () => {
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<any>(null);
  const { isLoading, handleGetBanners, handleDeleteBanner } = useBanners();
  const { bannersList } = useSelector((state: any) => state.Banners);

  useEffect(() => {
    handleGetBanners();
  }, []);

  const handleFileChange = async (e: any) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    if (files.length > 1) {
      console.warn("Please select only one image.");
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }

    const formData = new FormData();
    formData.append("banners_file", files[0]);

    try {
      setLoading(true);
      const res = await axios.post(
        `${PORT}/api/banners/upload-image`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (res.data.success) {
        handleGetBanners();
      } else {
        console.error("Upload failed:", res.data.message);
      }
    } catch (err) {
      console.error("Upload error:", err);
    } finally {
      setLoading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  const deleteBanner = async (id: string) => {
    if(id){
      handleDeleteBanner(id);
    }
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Banners</h1>
      </div>

      {/* Image uploader */}
      <div className="mb-10 flex items-center justify-center">
        <div className="border-2 border-dashed border-gray-300 rounded-2xl p-10 w-full max-w-lg bg-white shadow hover:shadow-md transition">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
          <div className="flex flex-col items-center space-y-4">
            <Upload className="w-10 h-10 text-gray-400" />
            <p className="text-gray-500">Drag & drop or click below to upload</p>
            <Button
              type="button"
              variant="default"
              disabled={loading}
              onClick={() => fileInputRef.current.click()}
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Uploading...
                </>
              ) : (
                "Upload Image"
              )}
            </Button>
          </div>
        </div>
      </div>

      {isLoading ? (
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-2 pb-4">
            {Array.from({ length: 6 }).map((_, idx) => (
              <div key={idx} className="px-2 py-2">
                <Skeleton className="w-full h-72 rounded-none" />
              </div>
            ))}
          </div>
        </div>
      ) : ensureArray(bannersList)?.length === 0 ? (
        <div className="flex justify-center items-center h-32 text-gray-500 text-lg">
          No banners added
        </div>
      ) : (
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-2 pb-4">
            {ensureArray(bannersList)?.map((banner: any) =>
              banner.images?.map((img: string, idx: number) => (
                <div key={idx} className="px-2 py-2 relative">
                  <img
                    src={img}
                    alt={`banner-${idx}`}
                    className="rounded-none shadow-md w-full h-72 object-cover"
                  />
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button className="absolute top-2 right-2 rounded-none" variant="destructive">
                        <X size={42} />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Delete banner?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This will permanently delete this banner.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={() => deleteBanner(banner?._id)}>Delete</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Banners;