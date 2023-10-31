import React from "react";
import PersonalizedRecommendations from "../../components/PersonalRecs/PersRecs";
import HomeSectionOrganizer from "../../components/HomeMainSection/HomeSectionOrganizer";
import { useSelector } from "react-redux";

function Home() {
  const user = useSelector((state) => state.user);
  const isLoggedIn = user.isLoggedIn;

  if (!isLoggedIn) {
    return (
      <>
        <HomeSectionOrganizer />
        <PersonalizedRecommendations />
      </>
    );
  } else {
    return (
      <>
        <HomeSectionOrganizer />
      </>
    );
  }
}

export default Home;
