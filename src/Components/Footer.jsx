import React from "react";

const Footer = () => {
  return (
    <section>
      <div className="paddings innerWidth flexCenter justify-between mx:flex-col">
        {/* left side */}
        <div className="f-left flexColStart gap-8 mx:items-center">
          <img src="/logo2.png" alt="" width={120} />
          <span className="secondaryText">
            Our vision is to make all people <br /> the best place to live for
            them.
          </span>
        </div>
        {/* right side */}
        <div className="flexColStart mx:items-center">
          <span className="primaryText">Information</span>
          <span className="secondaryText">15 Harringay Gardens, N8 0SE</span>
          <div className="flexCenter gap-6 mt-6 font-medium">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
