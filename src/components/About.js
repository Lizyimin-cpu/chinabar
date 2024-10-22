// import React from "react";
// import AboutImage from "../images/7f578ebcb427b01fdfcd13f.jpg_1080_0_43_ac4e.webp";  

// const About = () => {
//   return (
//     <div className="about">
//       <h1>About Us</h1>
//       <p>
//         We are a high-end restaurant integrating Sichuan cuisine, Guangdong
//         cuisine and Shandong cuisine. We are committed to bringing the essence
//         and innovation of the three classic Chinese cuisines to diners. Each
//         dish of the restaurant has been carefully crafted by the chef team,
//         which perfectly shows the diversity and deep heritage of Chinese food
//         culture. Whether it is spicy Sichuan cuisine, light Cantonese cuisine,
//         or the taste of Shandong cuisine, the restaurant strives to present the
//         most authentic taste experience for each customer.
//       </p>
//       <img
//         src={AboutImage}
//         alt="About"
//         style={{ width: "600px" }}
//       />
//     </div>
//   );
// };

// export default About;
import React from "react";
import AboutImage from "../images/7f578ebcb427b01fdfcd13f.jpg_1080_0_43_ac4e.webp";  


const About = () => {
  return (
    <div className="container">
      <h1>About Us</h1>
      <p>
        We are a high-end restaurant integrating Sichuan cuisine, Guangdong
        cuisine, and Shandong cuisine. We are committed to bringing the essence
        and innovation of these three classic Chinese cuisines to diners. Each
        dish of the restaurant has been carefully crafted by the chef team,
        which perfectly shows the diversity and deep heritage of Chinese food
        culture.
      </p>
      <p>
        Whether it is spicy Sichuan cuisine, light Cantonese cuisine, or the
        taste of Shandong cuisine, the restaurant strives to present the most
        authentic taste experience for each customer.
      </p>
      <img
        src={AboutImage}
        alt="About"
        style={{ width: "600px" }}
      />
    </div>
  );
};

export default About;
