import React from "react";
import {
  AboutContainer,
  IconContainer,
  InfoContainer,
  ProfileImg,
} from "./About.style";
import profile from "../../assets/IMG_3306.PNG";
import Icon from "../../components/icon/Icon";
import { iconData } from "../../helper/iconData";

const About = () => {
  return (
    <AboutContainer>
      <ProfileImg src={profile} alt="mehmet" />
      <InfoContainer>
        <h2>Hi, I'm Mehmet</h2>
        <h3>
          I'm currently learning different full-stack development languages.
        </h3>
        <h4>
          I already know JavaScript, ReactJS,Bootstrap,Tailwind CSS, Node.js,
          Python(Basic).
        </h4>
        <h4>💬 You can ask me anything you want to know</h4>
        <IconContainer>
          {iconData.map((item) => (
            <a href={item.href}>
              <Icon key={item.icon} {...item} />
            </a>
          ))}
        </IconContainer>
      </InfoContainer>
    </AboutContainer>
  );
};

export default About;
