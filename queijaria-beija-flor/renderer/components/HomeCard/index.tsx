import React from "react";
import { Card, CardIcon, CardText } from "./styles";
import { useNavigate } from "react-router-dom";

interface HomeCardProps {
  title: string;
  icon: React.ReactElement;
  route: string;
}

const HomeCard: React.FC<HomeCardProps> = ({ icon: Icon, title, route }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/products");
  };

  return (
    <Card onClick={handleNavigation}>
      <CardIcon>{Icon}</CardIcon>
      <CardText>{title}</CardText>
    </Card>
  );
};

export default HomeCard;
