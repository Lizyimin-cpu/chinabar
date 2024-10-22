import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact</h1>
      <p>Phone: 1234567</p>
      <p>Email: chinabar123@gmail.com</p>
      {/* 嵌入Google地图 */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.778402388182!2d145.12098007565214!3d-37.81865917197426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad640b0f68e6efd%3A0x691d9b82f6cd9915!2z5LiN5aSc5aSp!5e0!3m2!1szh-CN!2sau!4v1729510038396!5m2!1szh-CN!2sau"
        width="700"
        height="350"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="Google Maps"
      ></iframe>
    </div>
  );
};

export default Contact;
