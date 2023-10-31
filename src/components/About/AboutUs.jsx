import styled from "styled-components";
import  LocationMap from "./Map/LocationMap";

const ABOUT_US = styled.main`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding: 24px 20px;
  background-color: #18202a;
  color: #ffffff;
  .who-we {
    display: flex;
    flex-wrap: wrap;
    @media screen and (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
    h2 {
      font-size: 18px;
      width: 25%;
      @media screen and (max-width: 768px) {
        width: auto;
        font-size: 16px;
    }
    }
    span {
      width: 75%;
      font-size: 21px;
      font-weight: 300;
      @media screen and (max-width: 768px) {
        width: auto;
        font-size: 18px;
    }
    }
  }
`;

const ABOUT_DIVIDER = styled.div`
  width: 100%;
  height: 1px;
  background-color: #c9c9c9;
  margin-block: 18px;
`;

const AboutUs = () => {
  document.cookie = "OTZ=7173396_40_40__40_; domain=www.google.com SameSite=None; secure";
  document.cookie = "1P_JAR=2023-9-13-18; domain=google.com SameSite=None; secure";
  
  return (
    <ABOUT_US>
      <div className="who-we">
        <h2>Who we are</h2>
        <span>
          Amazon is guided by four principles: customer obsession rather than
          competitor focus, passion for invention, commitment to operational
          excellence, and long-term thinking. Amazon strives to be Earth’s most
          customer-centric company, Earth’s best employer, and Earth’s safest
          place to work. Customer reviews, 1-Click shopping, personalized
          recommendations, Prime, Fulfillment by Amazon, AWS, Kindle Direct
          Publishing, Kindle, Career Choice, Fire tablets, Fire TV, Amazon Echo,
          Alexa, Just Walk Out technology, Amazon Studios, and The Climate
          Pledge are some of the things pioneered by Amazon.
        </span>
      </div>
      <ABOUT_DIVIDER />
      <div className="who-we">
        <h2>What we do</h2>
        <span>
          Although our business has evolved over the years, one constant is
          customers’ desire for lower prices, better selection, and convenient
          services. Today, Amazon shoppers can find what they’re looking for
          online and in person. From delivering fresh produce to their doorstep
          to creating and distributing movies, music, and more, we are always
          finding new ways to delight our customers.
        </span>
      </div>
      <ABOUT_DIVIDER />
      <div className="who-we">
        <h2>Our Workplace</h2>
        <span>
          The customer is at the heart of everything we do. Amazon is a place
          where smart, passionate people obsess over customers and innovate on
          their behalf. Amazon has created more U.S. jobs in the last decade
          than any other company. These are jobs that pay an average of $19 per
          hour, more than double the federal minimum wage. We also invest in
          employees’ success. Amazon will spend over $1.2 billion to provide
          free skills training to employees—helping them further their careers
          in tech and in-demand roles such as cloud computing.
        </span>
      </div>
      <ABOUT_DIVIDER />
      <div className="who-we">
        <h2>Our Impact </h2>
        <span>
          Amazon has created more jobs in the past decade than any U.S. company,
          and we have invested more than $530 billion in the U.S. over the last
          decade. Beyond our own workforce, Amazon’s investments have supported
          nearly 1.6 million indirect jobs in fields like construction and
          hospitality. We also actively work to help communities by responding
          to the urgent needs of reducing hunger and homelessness and investing
          in education for children and young adults.
        </span>
      </div>
      <ABOUT_DIVIDER />
      {/* Imported Map */}
        <LocationMap />
    </ABOUT_US>
  );
};

export default AboutUs;
