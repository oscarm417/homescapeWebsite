import { useEffect } from "react";
import Home from "./views/Home";
import Faq from "./views/Faq";
import ReactGA from 'react-ga4';

const measurementId = process.env.REACT_APP_GA_MEASUREMENT_ID;

function App() {
  const pathname = window.location.pathname.replace(/\/+$/, "") || "/";
  const isFaqPage = pathname === "/faq";

  useEffect(()=>{
    const descriptionTag = document.querySelector('meta[name="description"]');
    const canonicalTag = document.querySelector('link[rel="canonical"]');

    if (isFaqPage) {
      document.title = "Landscaping FAQ El Paso, TX | Home Scape";
      if (descriptionTag) {
        descriptionTag.setAttribute(
          "content",
          "Read common questions about landscaping, irrigation, hardscaping, and lawn care in El Paso, Texas from Home Scape."
        );
      }
      if (canonicalTag) {
        canonicalTag.setAttribute("href", "https://www.homescape915.com/faq");
      }
    } else {
      document.title = "Home Scape | Landscaping and Lawn Care in El Paso, TX";
      if (descriptionTag) {
        descriptionTag.setAttribute(
          "content",
          "Home Scape provides landscape design, irrigation, hardscaping, and lawn maintenance in El Paso, Texas."
        );
      }
      if (canonicalTag) {
        canonicalTag.setAttribute("href", "https://www.homescape915.com/");
      }
    }

    if (!measurementId) {
      return;
    }

    ReactGA.initialize(measurementId);
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname + window.location.search,
      title: document.title,
    });
  },[isFaqPage]);
  return (
    <div>
      {isFaqPage ? <Faq /> : <Home/>}
    </div>
  );
}

export default App;
