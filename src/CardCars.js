import "./style.css";
import { gsap } from "gsap";
import React, { useEffect } from "react";

function CardCars(props) {
  useEffect(() => {
   gsap.from('.cardcars',{
    y:-70
   });
   gsap.to(".cardcars", {
      stagger: 0.4,
      yoyo:true,
      duration: 2,
      delay: 1,
      y:0,
      ease: "elastic",
    });
    
  });
   
  return (
    <div className="cardcars">
      <div className="cardcars-images">
        <img className="cardcars-images-body" src={props.url}></img>
      </div>
      <div className="cardcars-description">
        <p className="cardcars-description-text">Modelo: {props.modelo}</p>
        <p className="cardcars-description-text">Año: {props.year}</p>
        <p className="cardcars-description-text">Motor: {props.motor}</p>
        <p className="cardcars-description-text">Velocidad: {props.km}</p>
        {/* <p className="cardcars-description-text-price">
          Precio: {props.price} $
        </p> */}
      </div>
    </div>
  );
}

export default CardCars;
