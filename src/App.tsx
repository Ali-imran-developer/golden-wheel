import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import FAQ from "@/pages/FAQ";
import LiveCasino from "@/pages/LiveCasino";
import Sports from "@/pages/Sports";
import Tournaments from "@/pages/Tournaments";
import Contact from "@/pages/Contact";
import Blogs from "@/pages/Blogs";
import BlogDetail from "@/pages/BlogDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/live-casino" element={<LiveCasino />} />
              <Route path="/sports" element={<Sports />} />
              <Route path="/tournaments" element={<Tournaments />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blog/:id" element={<BlogDetail />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/faq" element={<FAQ />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;