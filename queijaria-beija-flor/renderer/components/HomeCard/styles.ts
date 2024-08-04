import { colors } from "@constants/colors";
import styled from "styled-components";

export const Card = styled.div`
  width: 250px;
  height: 150px;
  background-color: ${colors.gray_7};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  cursor: pointer;
`;

export const CardIcon = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 75px;
    height: 75px;
    fill: ${colors.primary};
  }
`;

export const CardText = styled.div`
  width: 250px;
  height: 40px;

  font-size: 14px;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${colors.gray_9};
`;
