import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

import Navbar from '../Navbar';
import Footer from '../Footer';

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
      imageURL="media/images/kite.png"
      productName="kite"
      productDesription="Enjoy the kite experience samelessly on your Android and ios devices."
      tryDemo=""
      learnMore=""
      googleplay=""
      appStore="" 
      />
      <RightSection 
      imageURL="media/images/console.png"
        productName="Console"
        productDesription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore=""
        />
       
       <RightSection 
      imageURL="media/images/kiteconnect.png"
        productName="kite connect API"
        productDesription="The powerful trading platforms and experiences with our super simple HTTP/JSON APIS. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore=""
        />

      <LeftSection
      imageURL="media/images/varsity.png"
        productName="varsity mobile"
        productDesription="An easy to grasp,collection of stock market lessons with in-depth coverage and illustrations.Content is broke down into bite-size cards to help you learn on the go."
        learnMore=""
        tryDemo=""
        googleplay=""
        appStore=""
      />
      <p className="text-center">
        Want to know more about our technology stack? Check out the Zerodha.tech blog.
      </p>
      <Universe />
    </>
  );
}

export default ProductPage;