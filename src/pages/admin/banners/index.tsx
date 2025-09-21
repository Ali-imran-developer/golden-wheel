import { Button } from "@/components/ui/button";
import { ensureArray } from "@/helper-functions/use-formater";
import { useBanners } from "@/hooks/useBanners";
import axios from "axios";
import { Loader2, Upload } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PORT = import.meta.env.VITE_BACKEND_BASEURL;

const Banners = () => {
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<any>(null);
  const { handleGetBanners } = useBanners();
  const { bannersList } = useSelector((state: any) => state.Banners);

  useEffect(() => {
    handleGetBanners();
  }, []);

  const handleFileChange = async (e: any) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("banners_file", files[i]);
    }

    try {
      setLoading(true);
      const res = await axios.post(
        `${PORT}/api/banners/upload-image`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (res.data.success) {
        handleGetBanners(); // refresh banners after upload
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

  // Slider settings
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
            multiple
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
                "Upload Images"
              )}
            </Button>
          </div>
        </div>
      </div>

      {ensureArray(bannersList)?.length === 0 ? (
        <div className="flex justify-center items-center h-32 text-gray-500 text-lg">
          No banners added
        </div>
      ) : (
        <div className="max-w-3xl mx-auto">
          <Slider {...sliderSettings}>
            {ensureArray(bannersList)?.map((banner: any) =>
              banner.images?.map((img: string, idx: number) => (
                <div key={idx} className="px-2">
                  <img
                    src={img}
                    alt={`banner-${idx}`}
                    className="rounded-2xl shadow-md w-full h-72 object-cover"
                  />
                </div>
              ))
            )}
          </Slider>
        </div>
      )}
    </div>
  );
};

export default Banners;