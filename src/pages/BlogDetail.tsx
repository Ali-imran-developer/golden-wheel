// import { useLocation, Link, useNavigate, useParams } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Calendar, Clock, User, ArrowLeft, Share2, Bookmark, ThumbsUp, ChevronLeft, ChevronRight, BookOpen } from "lucide-react";
// import { useEffect, useState } from "react";
// import { useBlogs } from "@/hooks/useBlogs";
// import { useSelector } from "react-redux";
// import { formatDate } from "@/helper-functions/use-formater";

// const BlogDetail = () => {
//   const { id } = useParams();
//   const { isLoading, handleGetBlogDetail } = useBlogs();
//   const { blogDetails } = useSelector((state: any) => state.Blogs);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     if (id) {
//       handleGetBlogDetail(id);
//     }
//   }, [id]);

//     const calculateReadTime = (content: any) => {
//     const wordsPerMinute = 200;
//     let wordCount = content?.description?.split(' ')?.length;
//     content?.detail?.forEach(section => {
//       wordCount += section?.subParagraph?.split(' ')?.length;
//       wordCount += section?.points?.join(' ')?.split(' ')?.length;
//     });
//     return Math.ceil(wordCount / wordsPerMinute);
//   };

//   const nextImage = () => {
//     setCurrentImageIndex((prev) => 
//       prev === blogDetails.images.length - 1 ? 0 : prev + 1
//     );
//   };

//   const prevImage = () => {
//     setCurrentImageIndex((prev) => 
//       prev === 0 ? blogDetails.images.length - 1 : prev - 1
//     );
//   };

//   const handleShare = async () => {
//     if (navigator.share) {
//       try {
//         await navigator.share({
//           title: blogDetails.heading,
//           text: blogDetails.description,
//           url: window.location.href,
//         });
//       } catch (error) {
//         console.log('Error sharing:', error);
//       }
//     } else {
//       navigator.clipboard.writeText(window.location.href);
//       alert('Link copied to clipboard!');
//     }
//   };

//   if (isLoading) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
//           <p className="text-gray-600">Loading blog post...</p>
//         </div>
//       </div>
//     );
//   }

//   const relatedPosts = [
//     {
//       id: blogDetails?._id + 1,
//       title: "Advanced Blackjack Card Counting Techniques",
//       excerpt: "Take your blackjack game to the next level with professional card counting methods.",
//       category: "Strategy",
//       readTime: "6 min read",
//     },
//     {
//       id: blogDetails?._id + 2,
//       title: "Understanding Casino House Edge",
//       excerpt: "Learn how casino house edge works and how to choose games with better odds.",
//       category: "Education",
//       readTime: "4 min read",
//     },
//     {
//       id: blogDetails?._id + 3,
//       title: "Bankroll Management for Serious Players",
//       excerpt: "Essential bankroll management strategies that every serious casino player should know.",
//       category: "Strategy",
//       readTime: "7 min read",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-background">
//       <section className="bg-casino-accent py-8">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <Link to="/blogs">
//             <Button variant="casino-ghost" size="sm" className="mb-4">
//               <ArrowLeft className="mr-2 h-4 w-4" />
//               Back to Blog
//             </Button>
//           </Link>
          
//           <div className="flex items-center space-x-4 mb-4">
//             <Badge variant="secondary" className="bg-primary/10 text-primary">
//               {blogDetails?.category ?? "Admin"}
//             </Badge>
//             <div className="flex items-center text-sm text-muted-foreground">
//               <Calendar className="h-4 w-4 mr-1" />
//               {formatDate(blogDetails?.createdAt) ?? ""}
//             </div>
//             <div className="flex items-center text-sm text-muted-foreground">
//               <Clock className="h-4 w-4 mr-1" />
//               {calculateReadTime(blogDetails) ?? ""}
//             </div>
//           </div>
          
//           <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
//             {blogDetails?.heading}
//           </h1>
          
//           <div className="flex items-center justify-between">
//             <div className="flex items-center space-x-4">
//               <div className="flex items-center text-muted-foreground">
//                 <User className="h-4 w-4 mr-1" />
//                 <span className="font-medium">{blogDetails?.author ?? "Admin"}</span>
//               </div>
//             </div>
            
//             <div className="flex items-center space-x-2">
//               <Button variant="casino-outline" size="sm">
//                 <Share2 className="h-4 w-4 mr-1" />
//                 Share
//               </Button>
//               <Button variant="casino-outline" size="sm">
//                 <Bookmark className="h-4 w-4 mr-1" />
//                 Save
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         {blogDetails?.images && blogDetails?.images?.length > 0 && (
//           <div className="mb-12">
//             <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
//               <div className="aspect-video relative">
//                 <img 
//                   src={blogDetails?.images[currentImageIndex]} 
//                   alt={`Blog image ${currentImageIndex + 1}`}
//                   className="w-full h-full object-cover"
//                   onError={(e: any) => {
//                     e.target.src = 'https://via.placeholder.com/800x450/e5e7eb/9ca3af?text=Image+Not+Available';
//                   }}
//                 />
                
//                 {blogDetails?.images?.length > 1 && (
//                   <>
//                     <button onClick={prevImage} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-all duration-200 shadow-lg">
//                       <ChevronLeft className="w-5 h-5 text-gray-700" />
//                     </button>
//                     <button onClick={nextImage} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-all duration-200 shadow-lg">
//                       <ChevronRight className="w-5 h-5 text-gray-700" />
//                     </button>
//                   </>
//                 )}
//               </div>
//             </div>
//           </div>
//         )}

//         <article className="prose prose-invert max-w-none">
//           <div className="text-lg text-muted-foreground mb-8 leading-relaxed">
//             {blogDetails?.description}
//           </div>
//           <div className="bg-foreground rounded-2xl shadow-lg p-8 md:p-12">
//             {blogDetails?.detail && blogDetails?.detail?.map((section, index) => (
//               <section key={section?._id} className={`${index !== 0 ? 'mt-12' : ''}`}>
//                 <div className="flex items-center mb-6">
//                   <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-4">
//                     {index + 1}
//                   </div>
//                   <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
//                     {section?.subheading}
//                   </h2>
//                 </div>

//                 <p className="text-lg text-gray-700 leading-relaxed mb-6 pl-12">
//                   {section?.subParagraph}
//                 </p>

//                 {section?.points && section?.points?.length > 0 && (
//                   <div className="pl-12">
//                     <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
//                       <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
//                       Key Points:
//                     </h3>
//                     <div className="space-y-3">
//                       {section?.points?.map((point, pointIndex) => (
//                         <div key={pointIndex} className="flex items-start">
//                           <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5 flex-shrink-0">
//                             ✓
//                           </div>
//                           <p className="text-gray-700 leading-relaxed">{point}</p>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </section>
//             ))}
//           </div>
//         </article>

//         <div className="mt-8 pt-8 border-t border-border">
//           <h4 className="text-sm font-semibold text-foreground mb-3">Tags:</h4>
//           <div className="flex flex-wrap gap-2">
//             {blogDetails?.tags?.map((tag: string, index: number) => (
//               <Badge key={index} variant="outline" className="text-muted-foreground">
//                 {tag}
//               </Badge>
//             ))}
//           </div>
//         </div>

//         {/* Engagement Section */}
//         <div className="mt-8 pt-8 border-t border-border">
//           <div className="flex items-center space-x-4">
//             <Button variant="casino-outline" size="sm">
//               <ThumbsUp className="h-4 w-4 mr-1" />
//               Like (24)
//             </Button>
//             <Button variant="casino-outline" size="sm">
//               <Share2 className="h-4 w-4 mr-1" />
//               Share
//             </Button>
//             <Button variant="casino-outline" size="sm">
//               <Bookmark className="h-4 w-4 mr-1" />
//               Bookmark
//             </Button>
//           </div>
//         </div>

//         {/* Author Bio */}
//         <Card className="mt-12 game-card">
//           <CardContent className="p-6">
//             <div className="flex items-start space-x-4">
//               <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
//                 <User className="h-8 w-8 text-primary" />
//               </div>
//               <div>
//                 <h4 className="text-lg font-semibold text-foreground mb-2">
//                   About {blogDetails?.author}
//                 </h4>
//                 <p className="text-muted-foreground mb-4">
//                   {blogDetails?.author} is a gaming industry expert with over 10 years of experience in casino operations and strategy development. They specialize in game theory and player education.
//                 </p>
//                 <Button variant="casino-outline" size="sm">
//                   View Profile
//                 </Button>
//               </div>
//             </div>
//           </CardContent>
//         </Card>

//         <section className="mt-16">
//           <h3 className="text-2xl font-bold text-foreground mb-8">Related Articles</h3>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {relatedPosts?.map((relatedPost: any) => (
//               <Card key={relatedPost?._id} className="game-card">
//                 <CardContent className="p-6">
//                   <Badge variant="secondary" className="bg-primary/10 text-primary mb-3">
//                     {relatedPost.category}
//                   </Badge>
//                   <h4 className="text-lg font-semibold text-foreground mb-3 line-clamp-2">
//                     {relatedPost.title}
//                   </h4>
//                   <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
//                     {relatedPost.excerpt}
//                   </p>
//                   <div className="flex items-center justify-between">
//                     <span className="text-sm text-muted-foreground">
//                       {relatedPost.readTime}
//                     </span>
//                     <Button variant="casino-ghost" size="sm">
//                       Read More
//                     </Button>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </section>

//         {/* CTA Section */}
//         <Card className="mt-16 game-card bg-gradient-to-r from-casino-dark to-casino-accent">
//           <CardContent className="p-8 text-center">
//             <h3 className="text-2xl font-bold text-foreground mb-4">
//               Ready to Put These Strategies to the Test?
//             </h3>
//             <p className="text-muted-foreground mb-6">
//               Join Baji Live Casino and experience premium gaming with our extensive collection of games.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Button variant="casino" size="lg">
//                 Start Playing Now
//               </Button>
//               <Button variant="casino-outline" size="lg">
//                 Explore More Articles
//               </Button>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default BlogDetail;

import { useLocation, Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowLeft, Share2, Bookmark, ThumbsUp, ChevronLeft, ChevronRight, BookOpen, Eye, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useBlogs } from "@/hooks/useBlogs";
import { useSelector } from "react-redux";
import { formatDate } from "@/helper-functions/use-formater";

const BlogDetail = () => {
  const { id } = useParams();
  const { isLoading, handleGetBlogDetail } = useBlogs();
  const { blogDetails } = useSelector((state: any) => state.Blogs);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    if (id) {
      handleGetBlogDetail(id);
    }
  }, [id]);

  const calculateReadTime = (content: any) => {
    const wordsPerMinute = 200;
    let wordCount = content?.description?.split(' ')?.length || 0;
    content?.detail?.forEach(section => {
      wordCount += section?.subParagraph?.split(' ')?.length || 0;
      wordCount += section?.points?.join(' ')?.split(' ')?.length || 0;
    });
    return Math.ceil(wordCount / wordsPerMinute);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === (blogDetails?.images?.length - 1 || 0) ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? (blogDetails?.images?.length - 1 || 0) : prev - 1
    );
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: blogDetails.heading,
          text: blogDetails.description,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-foreground flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto mb-4"></div>
          <p className="text-gray-300">Loading blog post...</p>
        </div>
      </div>
    );
  }

  if (!blogDetails) {
    return (
      <div className="min-h-screen bg-foreground flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-300">Blog post not found.</p>
          <Link to="/blogs">
            <Button variant="outline" className="mt-4 border-gray-600 text-gray-50 hover:bg-gray-800">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = [
    {
      id: 1,
      title: "Advanced Blackjack Card Counting Techniques",
      excerpt: "Take your blackjack game to the next level with professional card counting methods.",
      category: "Strategy",
      readTime: "6 min read",
      views: "2.4k",
    },
    {
      id: 2,
      title: "Understanding Casino House Edge",
      excerpt: "Learn how casino house edge works and how to choose games with better odds.",
      category: "Education",
      readTime: "4 min read",
      views: "1.8k",
    },
    {
      id: 3,
      title: "Bankroll Management for Serious Players",
      excerpt: "Essential bankroll management strategies that every serious casino player should know.",
      category: "Strategy",
      readTime: "7 min read",
      views: "3.2k",
    },
  ];

  return (
    <div className="min-h-screen bg-foreground text-gray-50">
      {/* Hero Section */}
      <section className="bg-background py-12 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blogs">
            <Button 
              variant="outline" 
              size="sm" 
              className="mb-6 border-gray-600 text-gray-50 hover:bg-gray-800 hover:border-gray-500 transition-all duration-200"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
          
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <Badge 
              variant="secondary" 
              className="bg-blue-600/20 text-blue-400 border border-blue-600/30 px-3 py-1"
            >
              {blogDetails?.category || "General"}
            </Badge>
            <div className="flex items-center text-sm text-gray-400">
              <Calendar className="h-4 w-4 mr-2" />
              {formatDate(blogDetails?.createdAt) || "Just now"}
            </div>
            <div className="flex items-center text-sm text-gray-400">
              <Clock className="h-4 w-4 mr-2" />
              {calculateReadTime(blogDetails)} min read
            </div>
            <div className="flex items-center text-sm text-gray-400">
              <Eye className="h-4 w-4 mr-2" />
              2.1k views
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-50 mb-6 leading-tight">
            {blogDetails?.heading}
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-4xl">
            {blogDetails?.description}
          </p>
          
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center">
                <User className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="font-medium text-gray-50">Admin</p>
                <p className="text-sm text-gray-400">Content Creator</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setIsLiked(!isLiked)}
                className={`border-gray-600 hover:bg-gray-800 transition-all duration-200 ${
                  isLiked ? 'bg-red-600/20 border-red-500 text-red-400' : 'text-gray-50'
                }`}
              >
                <ThumbsUp className={`h-4 w-4 mr-2 ${isLiked ? 'fill-current' : ''}`} />
                24
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleShare}
                className="border-gray-600 text-gray-50 hover:bg-gray-800 hover:border-gray-500 transition-all duration-200"
              >
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`border-gray-600 hover:bg-gray-800 transition-all duration-200 ${
                  isBookmarked ? 'bg-yellow-600/20 border-yellow-500 text-yellow-400' : 'text-gray-50'
                }`}
              >
                <Bookmark className={`h-4 w-4 mr-2 ${isBookmarked ? 'fill-current' : ''}`} />
                Save
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="px-4 sm:px-6 lg:px-8 py-12 bg-background">
        {/* Image Gallery */}
        {blogDetails?.images && blogDetails?.images?.length > 0 && (
          <div className="mb-16 max-w-5xl mx-auto">
            <div className="relative bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-800">
              <div className="aspect-video relative">
                <img 
                  src={blogDetails?.images[currentImageIndex]} 
                  alt={`Blog illustration ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e: any) => {
                    e.target.src = 'https://via.placeholder.com/800x450/374151/9ca3af?text=Image+Not+Available';
                  }}
                />
                
                {blogDetails?.images?.length > 1 && (
                  <>
                    <button 
                      onClick={prevImage} 
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 backdrop-blur-sm rounded-full p-3 transition-all duration-200 shadow-lg border border-gray-700"
                    >
                      <ChevronLeft className="w-5 h-5 text-white" />
                    </button>
                    <button 
                      onClick={nextImage} 
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 backdrop-blur-sm rounded-full p-3 transition-all duration-200 shadow-lg border border-gray-700"
                    >
                      <ChevronRight className="w-5 h-5 text-white" />
                    </button>
                    
                    {/* Image indicators */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {blogDetails?.images?.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full transition-all duration-200 ${
                            index === currentImageIndex ? 'bg-white' : 'bg-white/40 hover:bg-white/60'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )}

        <article className="prose prose-invert max-w-5xl mx-auto">
          <div className="rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-800">
            {blogDetails?.detail && blogDetails?.detail?.map((section, index) => (
              <section key={section?._id} className={`${index !== 0 ? 'mt-16' : ''}`}>
                <div className="flex items-start mb-8">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-xl flex items-center justify-center font-bold text-lg mr-6 flex-shrink-0 shadow-lg">
                    {index + 1}
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-50 mb-4">
                      {section?.subheading}
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      {section?.subParagraph}
                    </p>
                  </div>
                </div>

                {section?.points && section?.points?.length > 0 && (
                  <div className="ml-16">
                    <h3 className="text-xl font-semibold text-gray-50 mb-6 flex items-center">
                      <BookOpen className="w-6 h-6 mr-3 text-blue-400" />
                      Key Points
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {section?.points?.map((point, pointIndex) => (
                        <div 
                          key={pointIndex} 
                          className="flex items-start p-4 bg-gray-800 rounded-xl border border-gray-700 hover:border-gray-600 transition-colors duration-200"
                        >
                          <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4 mt-0.5 flex-shrink-0">
                            ✓
                          </div>
                          <p className="text-gray-300 leading-relaxed">{point}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </section>
            ))}
          </div>
        </article>

        <div className="mt-12 pt-8 border-t border-gray-800 max-w-5xl mx-auto">
          <h4 className="text-lg font-semibold text-gray-50 mb-4">Related Topics</h4>
          <div className="flex flex-wrap gap-3">
            {blogDetails?.tags?.map((tag: string, index: number) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500 cursor-pointer transition-all duration-200 px-4 py-2"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 max-w-5xl mx-auto">
          <div className="rounded-2xl p-6 border border-gray-800">
            <h4 className="text-lg font-semibold text-gray-50 mb-4">Engage with this article</h4>
            <div className="flex flex-wrap items-center gap-4">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setIsLiked(!isLiked)}
                className={`border-gray-600 hover:bg-gray-800 transition-all duration-200 ${
                  isLiked ? 'bg-red-600/20 border-red-500 text-red-400' : 'text-gray-50'
                }`}
              >
                <ThumbsUp className={`h-4 w-4 mr-2 ${isLiked ? 'fill-current' : ''}`} />
                Like (24)
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                className="border-gray-600 text-gray-50 hover:bg-gray-800 hover:border-gray-500 transition-all duration-200"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Comment (8)
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleShare}
                className="border-gray-600 text-gray-50 hover:bg-gray-800 hover:border-gray-500 transition-all duration-200"
              >
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`border-gray-600 hover:bg-gray-800 transition-all duration-200 ${
                  isBookmarked ? 'bg-yellow-600/20 border-yellow-500 text-yellow-400' : 'text-gray-50'
                }`}
              >
                <Bookmark className={`h-4 w-4 mr-2 ${isBookmarked ? 'fill-current' : ''}`} />
                Bookmark
              </Button>
            </div>
          </div>
        </div>

        <Card className="mt-16 border-gray-800 shadow-2xl max-w-5xl mx-auto">
          <CardContent className="p-8">
            <div className="flex items-start space-x-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                <User className="h-10 w-10 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold text-gray-50 mb-3">
                  About Admin
                </h4>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Our content team consists of gaming industry experts with over 10 years of combined experience in casino operations, strategy development, and player education. We specialize in game theory, risk management, and creating educational content for players of all levels.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-gray-600 text-gray-50 hover:bg-gray-800 hover:border-gray-500 transition-all duration-200"
                  >
                    View Profile
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-gray-600 text-gray-50 hover:bg-gray-800 hover:border-gray-500 transition-all duration-200"
                  >
                    Follow
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <section className="mt-20 max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-50 mb-8">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts?.map((relatedPost: any) => (
              <Card key={relatedPost?.id} className="border-gray-800 hover:border-gray-700 transition-all duration-200 shadow-xl hover:shadow-2xl group">
                <CardContent className="p-6">
                  <Badge 
                    variant="secondary" 
                    className="bg-blue-600/20 text-blue-400 border border-blue-600/30 mb-4"
                  >
                    {relatedPost.category}
                  </Badge>
                  <h4 className="text-xl font-semibold text-gray-50 mb-3 line-clamp-2 group-hover:text-blue-400 transition-colors duration-200">
                    {relatedPost.title}
                  </h4>
                  <p className="text-gray-300 text-sm mb-6 line-clamp-3 leading-relaxed">
                    {relatedPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {relatedPost.readTime}
                      </span>
                      <span className="flex items-center">
                        <Eye className="h-3 w-3 mr-1" />
                        {relatedPost.views}
                      </span>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-gray-600 text-gray-50 hover:bg-gray-800 hover:border-gray-500 transition-all duration-200"
                    >
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Card className="mt-20 shadow-2xl max-w-5xl mx-auto">
          <CardContent className="p-12 text-center">
            <h3 className="text-3xl font-bold text-gray-50 mb-6">
              Ready to Put These Strategies to the Test?
            </h3>
            <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
              Join our premium gaming platform and experience the difference with our extensive collection of games and professional tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-200">
                Start Playing Now
              </Button>
              <Button  variant="outline"  size="lg" className="border-gray-600 text-gray-50 hover:bg-gray-800 hover:border-gray-500 transition-all duration-200">
                Explore More Articles
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BlogDetail;