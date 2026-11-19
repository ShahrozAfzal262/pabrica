
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Home2 from "./pages/Home2/Home2";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import SingleService from "./pages/singleService/SingleService";
import Careers from "./pages/Careers/Careers";
import Contact from "./pages/Contact/Contact";
import Blog from "./pages/Blog/Blog";
import Team from "./pages/Team/Team";
import Archive from "./pages/Archive/Archive";
import SingleBlog from "./pages/SingleBlog/SingleBlog";
import NotFound from "./pages/NotFound/NotFound";
import Checkout from "./pages/Checkout/Checkout";
import Auth from "./pages/Auth/Auth";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
         <Route path="/auth" element={<Auth />} />
          <Route path="/" element={<Home />} />
          <Route path="/home-2" element={<Home2 />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/single-service" element={<SingleService />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/team" element={<Team />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/blog/:slug" element={<SingleBlog />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
