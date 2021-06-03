import React from "react";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

const SunBox = styled.View`
  width: 100%;
  position: absolute;
  top: 50px;
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Sunrise = styled.View`
  display: flex;
  align-items: center;
  width: 10%;
`;

const Sunset = styled.View`
  display: flex;
  align-items: center;
  width: 10%;
`;

const SunText = styled.Text`
  margin-top: 2px;
  font-size: 12px;
  color: #2c2c2c;
`;

const RegionBox = styled.View`
  display: flex;
  align-items: center;
`;

const NameBox = styled.Text`
  color: #2c2c2c;
`;

const TempBox = styled.Text`
  color: #2c2c2c;
  font-size: 18px;
`;

const Header = ({ sunrise, sunset, temperature, name }) => {
  return (
    <SunBox>
      <Sunrise>
        <Feather name="sunrise" color="#2c2c2c" size={21} />
        <SunText>{sunrise}</SunText>
      </Sunrise>
      <RegionBox>
        <NameBox>{name}</NameBox>
        <TempBox>{temperature}℃</TempBox>
      </RegionBox>
      <Sunset>
        <Feather name="sunset" color="#2c2c2c" size={21} />
        <SunText>{sunset}</SunText>
      </Sunset>
    </SunBox>
  );
};

export default Header;
