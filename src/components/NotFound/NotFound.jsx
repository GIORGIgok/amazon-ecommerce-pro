import React, { useEffect, useState } from "react";
import styled from "styled-components";
import not_found_text from '../../assets/imgs/not-found-text.png';
import { Link } from 'react-router-dom';

const NOT_FOUND_CONTAINER = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-block: 1.563rem; 
  // 25px
  @media screen and (max-width: 768px) {
    img {
      width: 50%;
    }
  }
`;

const notFoundImages = [
    "https://images-na.ssl-images-amazon.com/images/G/01/error/89._TTD_.jpg",
    "https://images-na.ssl-images-amazon.com/images/G/01/error/25._TTD_.jpg",
    "https://images-na.ssl-images-amazon.com/images/G/01/error/159._TTD_.jpg",
    "https://images-na.ssl-images-amazon.com/images/G/01/error/75._TTD_.jpg",
    "https://images-na.ssl-images-amazon.com/images/G/01/error/162._TTD_.jpg",
  ];

const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * notFoundImages.length);
  return notFoundImages[randomIndex];
};

const NotFoundComponent = () => {
  const [randomImage, setRandomImage] = useState("");

  useEffect(() => {
    const randomImg = getRandomImage();
    setRandomImage(randomImg);
  }, []);

  return (
    <NOT_FOUND_CONTAINER>
      <Link to="/" >
        <img src={not_found_text} alt="Not found text" />
      </Link>
      <img src={randomImage} alt="Random image" />
    </NOT_FOUND_CONTAINER>
  );
};

export default NotFoundComponent;
