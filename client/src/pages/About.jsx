import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout
      title={"About us - Timora"}
      description={"Discover Timora’s mission, values, and our commitment to delivering an exceptional online shopping experience."}
      keywords={"About Timora, ecommerce company, online store vision, shopping goals, mission statement"}
      author={"Shakti Priya"}
    >
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="about us"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Welcome to <strong>Timora</strong> !
            <br /> — your trusted partner in smart shopping. At Timora, we believe shopping should be joyful, effortless, and tailored to your lifestyle. From everyday essentials to premium picks, our curated collections bring you the best of quality, value, and variety — all in one place. With a commitment to secure payments, fast delivery, and responsive support, we ensure every shopping experience is smooth and satisfying. Join the growing family of happy customers and let Timora make your everyday shopping smarter and simpler.
          </p>

        </div>
      </div>
    </Layout>
  );
};

export default About;
