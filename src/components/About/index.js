import React from "react";
import personalPhoto from "../../assets/selfie/IMG_0340.jpeg";

function About() {
  return (
    <section className="my-5">
      <h1 id="about">About me</h1>
      <img
        src={personalPhoto}
        className="my-2"
        style={{ width: "25%" }}
        alt="selfie"
      />
      <p>
          Welcome to my portfolio! My name is Ahmed Alkhatib and the bulk of my work experience has been
          in construction and warehousing. I've always had an interest in technology and in 2021 I decided
          to enroll in a coding program offered by University of Toronto. The program I enrolled in focused
          on website and mobile app development, teaching me to become a full-stack developer! I look 
          forward to learning more and exploring new opportunities. In my personal time I enjoy working out in the gym,
          driving my car while listening to music, playing video games, and hanging out with friends and family.
      </p>
    </section>
  );
}

export default About;
