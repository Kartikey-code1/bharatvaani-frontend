import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import SubNavbar from "./components/SubNavbar.jsx"; // 🔥 Yahan import add kiya
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Article from "./pages/Article.jsx";
import Category from "./pages/Category.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import Terms from "./pages/Terms.jsx";
import AdminLogin from "./admin/AdminLogin.jsx";
import Dashboard from "./admin/Dashboard.jsx";
import AddArticle from "./admin/AddArticle.jsx";
import EditArticle from "./admin/EditArticle.jsx";
import ArticlesList from "./admin/ArticlesList.jsx";
import ContactMessages from "./admin/ContactMessages.jsx";
import Subscribers from "./admin/Subscribers.jsx";
import SocialStatus from "./admin/SocialStatus.jsx";
import ManageNews from "./pages/Managenews.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <SubNavbar /> {/* 🔥 Sub-navigation yahan render hoga */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:name" element={<Category />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/add" element={<AddArticle />} />
        <Route path="/admin/edit/:id" element={<EditArticle />} />
        <Route path="/admin/articles" element={<ArticlesList />} />
        <Route path="/admin/messages" element={<ContactMessages />} />
        <Route path="/admin/subscribers" element={<Subscribers />} />
        <Route path="/admin/social" element={<SocialStatus />} />
        <Route path="/admin/manage" element={<ManageNews />} />
      </Routes>
      <Footer />
    </>
  );
}