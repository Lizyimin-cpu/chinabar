import React from "react";
import springRollsImage from '../images/1517390913347858432_cover.jpg';  
import StirFriedGreenseImage from "../images/1517391783372337152_cover.jpg";  
import StirFriedShrimpImage from "../images/1517392087367102464_cover.jpg";  


const MenuCard = () => {
  return (
    <div className="menu-card">
      <h1>View Menu Card</h1>

      <div className="menu-item">
        <img
          src={springRollsImage}
          alt="Spring Rolls"
          style={{ width: "300px" }}
        />
        <h2>Spring Rolls – 12.5$</h2>
        <p>
          A crispy and light appetizer, our spring rolls are filled with a
          flavorful mix of shredded cabbage, carrots, mushrooms, and glass
          noodles.
        </p>
      </div>

      <div className="menu-item">
        <img
          src={StirFriedGreenseImage}
          alt="Stir-Fried Greens"
          style={{ width: "300px" }}
        />
        <h2>Stir-Fried Greens – 18$</h2>
        <p>
          A simple and healthy dish, our stir-fried greens feature fresh
          seasonal vegetables such as bok choy, Chinese broccoli (gai lan), or
          spinach.
        </p>
      </div>

      <div className="menu-item">
        <img
          src={StirFriedShrimpImage}
          alt="Stir-Fried Shrimp"
          style={{ width: "300px" }}
        />
        <h2>Stir-Fried Shrimp – 28$</h2>
        <p>
          A delicate and flavorful dish, our stir-fried shrimp features tender,
          juicy shrimp cooked to perfection with aromatic ingredients such as
          garlic, ginger, and green onions.
        </p>
      </div>
    </div>
  );
};

export default MenuCard;
