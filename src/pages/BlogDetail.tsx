import { useLocation, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowLeft, Share2, Bookmark, ThumbsUp } from "lucide-react";
import { useEffect } from "react";

const BlogDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const post = location.state?.post;

  useEffect(() => {
    if (!post) {
      navigate('/blogs');
    }
  }, [post, navigate]);

  if (!post) {
    return null;
  }

  const relatedPosts = [
    {
      id: post.id + 1,
      title: "Advanced Blackjack Card Counting Techniques",
      excerpt: "Take your blackjack game to the next level with professional card counting methods.",
      category: "Strategy",
      readTime: "6 min read",
    },
    {
      id: post.id + 2,
      title: "Understanding Casino House Edge",
      excerpt: "Learn how casino house edge works and how to choose games with better odds.",
      category: "Education",
      readTime: "4 min read",
    },
    {
      id: post.id + 3,
      title: "Bankroll Management for Serious Players",
      excerpt: "Essential bankroll management strategies that every serious casino player should know.",
      category: "Strategy",
      readTime: "7 min read",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-casino-accent py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blogs">
            <Button variant="casino-ghost" size="sm" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
          
          <div className="flex items-center space-x-4 mb-4">
            <Badge variant="secondary" className="bg-primary/10 text-primary">
              {post.category}
            </Badge>
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 mr-1" />
              {post.date}
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="h-4 w-4 mr-1" />
              {post.readTime}
            </div>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            {post.title}
          </h1>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-muted-foreground">
                <User className="h-4 w-4 mr-1" />
                <span className="font-medium">{post.author}</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button variant="casino-outline" size="sm">
                <Share2 className="h-4 w-4 mr-1" />
                Share
              </Button>
              <Button variant="casino-outline" size="sm">
                <Bookmark className="h-4 w-4 mr-1" />
                Save
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Image */}
        <div className="aspect-video mb-8 rounded-xl overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Content */}
        <article className="prose prose-invert max-w-none">
          <div className="text-lg text-muted-foreground mb-8 leading-relaxed">
            {post.excerpt}
          </div>
          
          <div className="text-foreground leading-relaxed space-y-6">
            <p className="text-lg">
              {post.content}
            </p>
            
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              Key Strategies and Tips
            </h2>
            
            <p>
              The world of casino gaming is complex and ever-evolving. Whether you're a beginner looking to learn the basics or an experienced player seeking to refine your skills, understanding the fundamental principles is crucial for success.
            </p>
            
            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              Understanding the Basics
            </h3>
            
            <p>
              Before diving into advanced strategies, it's essential to master the fundamentals. This includes understanding game rules, basic odds, and house edge calculations. Each game has its unique characteristics and optimal strategies.
            </p>
            
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Study the game rules thoroughly before playing</li>
              <li>Understand the house edge for different bets</li>
              <li>Practice with free games to build confidence</li>
              <li>Set clear bankroll limits and stick to them</li>
              <li>Learn when to take breaks and walk away</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              Advanced Techniques
            </h3>
            
            <p>
              Once you've mastered the basics, you can explore more advanced techniques. These strategies require discipline, practice, and a deep understanding of game mechanics. Remember that no strategy can guarantee wins, but they can help optimize your play.
            </p>
            
            <p>
              Professional players emphasize the importance of emotional control and bankroll management. These skills often matter more than technical knowledge when it comes to long-term success in casino gaming.
            </p>
          </div>
        </article>

        {/* Tags */}
        <div className="mt-8 pt-8 border-t border-border">
          <h4 className="text-sm font-semibold text-foreground mb-3">Tags:</h4>
          <div className="flex flex-wrap gap-2">
            {post.tags?.map((tag: string, index: number) => (
              <Badge key={index} variant="outline" className="text-muted-foreground">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Engagement Section */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex items-center space-x-4">
            <Button variant="casino-outline" size="sm">
              <ThumbsUp className="h-4 w-4 mr-1" />
              Like (24)
            </Button>
            <Button variant="casino-outline" size="sm">
              <Share2 className="h-4 w-4 mr-1" />
              Share
            </Button>
            <Button variant="casino-outline" size="sm">
              <Bookmark className="h-4 w-4 mr-1" />
              Bookmark
            </Button>
          </div>
        </div>

        {/* Author Bio */}
        <Card className="mt-12 game-card">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <User className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  About {post.author}
                </h4>
                <p className="text-muted-foreground mb-4">
                  {post.author} is a gaming industry expert with over 10 years of experience in casino operations and strategy development. They specialize in game theory and player education.
                </p>
                <Button variant="casino-outline" size="sm">
                  View Profile
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Related Posts */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-8">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
              <Card key={relatedPost.id} className="game-card">
                <CardContent className="p-6">
                  <Badge variant="secondary" className="bg-primary/10 text-primary mb-3">
                    {relatedPost.category}
                  </Badge>
                  <h4 className="text-lg font-semibold text-foreground mb-3 line-clamp-2">
                    {relatedPost.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {relatedPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {relatedPost.readTime}
                    </span>
                    <Button variant="casino-ghost" size="sm">
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <Card className="mt-16 game-card bg-gradient-to-r from-casino-dark to-casino-accent">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Put These Strategies to the Test?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join Baji Live Casino and experience premium gaming with our extensive collection of games.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="casino" size="lg">
                Start Playing Now
              </Button>
              <Button variant="casino-outline" size="lg">
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