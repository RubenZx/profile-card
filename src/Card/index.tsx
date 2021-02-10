import React from "react";
import CardBg from "../assets/bg-pattern-card.svg";
import ProfileImg from "../assets/image-victor.jpg";
import BottomElement from "../BottomElement";
import RoundImage from "../RoundImage";
import "./index.css";

interface CardProps {
  age: number;
  name: string;
  location: string;
  followers: string;
  likes: string;
  photos: string;
}

const Card = ({ name, age, location, followers, likes, photos }: CardProps) => {
  return (
    <div className="card">
      <div style={{ position: "relative" }}>
        <img src={CardBg} alt="card-bg" className="card-bg" />
        <div className="card-profile">
          <RoundImage imageSrc={ProfileImg} imageAlt="Victor" />
        </div>
      </div>
      <div className="card-body">
        <div className="text-primary">{name}</div>
        <div className="text-secondary">{age}</div>
      </div>
      <div className="text-secondary text-location">{location}</div>
      <div className="bottom-container">
        <BottomElement element={followers} name="Followers" />
        <BottomElement element={likes} name="Likes" />
        <BottomElement element={photos} name="Photos" />
      </div>
    </div>
  );
};

export default Card;
