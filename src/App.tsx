import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ProtectedRoute from "./config/ProtectedRoute";
import { lazy, Suspense } from "react";
import ClientLayout from "./pages/client/layout";
import MainLoader from "./components/ui/loader";

const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));
const Login = lazy(() => import("@/pages/Login"));
const Register = lazy(() => import("@/pages/Register"));
const FAQ = lazy(() => import("@/pages/FAQ"));
const LiveCasino = lazy(() => import("@/pages/LiveCasino"));
const Sports = lazy(() => import("@/pages/Sports"));
const Tournaments = lazy(() => import("@/pages/Tournaments"));
const Events = lazy(() => import("@/pages/Events"));
const Promotions = lazy(() => import("@/pages/Promotions"));
const HelpCenter = lazy(() => import("@/pages/HelpCenter"));
const Contact = lazy(() => import("@/pages/Contact"));
const Blogs = lazy(() => import("@/pages/Blogs"));
const BlogDetail = lazy(() => import("@/pages/BlogDetail"));
const NotFound = lazy(() => import("@/pages/NotFound"));

const AdminLayout = lazy(() => import("@/pages/admin/layout"));
const AdminWelcome = lazy(() => import("@/pages/admin/welcome"));
const AdminBlogs = lazy(() => import("@/pages/admin/blogs"));
const AdminBlogDetail = lazy(() => import("@/pages/admin/blogs/blogs-detail"));
const AdminBanners = lazy(() => import("@/pages/admin/banners"));
const AdminGames = lazy(() => import("@/pages/admin/games"));
const AdminSports = lazy(() => import("@/pages/admin/sports"));
const AdminTournaments = lazy(() => import("@/pages/admin/tournaments"));

const AuthLogin = lazy(() => import("@/pages/Login"));

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
        <Suspense fallback={<MainLoader className="bg-black" />}>
          <Routes>
            <Route path="/" element={<ProtectedRoute><ClientLayout /></ProtectedRoute>}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="live-casino" element={<LiveCasino />} />
              <Route path="sports" element={<Sports />} />
              <Route path="events" element={<Events />} />
              <Route path="tournaments" element={<Tournaments />} />
              <Route path="promotions" element={<Promotions />} />
              <Route path="help-center" element={<HelpCenter />} />
              <Route path="contact" element={<Contact />} />
              <Route path="blogs" element={<Blogs />} />
              <Route path="blogs/:id" element={<BlogDetail />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="faq" element={<FAQ />} />
            </Route>

            <Route path="/admin" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
              <Route path="welcome" element={<AdminWelcome />} />
              <Route path="blogs" element={<AdminBlogs />} />
              <Route path="blogs/:id" element={<AdminBlogDetail />} />
              <Route path="banners" element={<AdminBanners />} />
              <Route path="games" element={<AdminGames />} />
              <Route path="sports" element={<AdminSports />} />
              <Route path="tournaments" element={<AdminTournaments />} />
            </Route>

            <Route path="/auth/login" element={<AuthLogin />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
  </BrowserRouter>
);

export default App;