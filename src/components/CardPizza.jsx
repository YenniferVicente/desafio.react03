import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

const CardPizza = ({ name, ingredients, price,img }) => {
  return (
    <div className="card card-pizza">
      <img src={img} alt={name} className="card-img-top" />
      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title mb-3">Pizza{name}</h5>
        <div>
        <p className="mb-0">Ingredientes:</p>
        <ul className="ingredients-list">
          {ingredients.map((ingredient, index) => (
            <li key={index} className="ingredients-list-item">{ingredient}</li>
          ))}
        </ul>
        </div>

      <h4 className="text-center">
        Precio: ${price.toLocaleString()}
      </h4>
        <div className="card-footer d-flex justify-content-between">
        <button className="btn btn-outline-dark btn-ver-mas">Ver más 👀</button>
        <button className="btn btn-dark btn-añadir">Añadir 🛒</button>
        </div>
      </div>
    </div>
  );
};

// Validaciones de PropTypes
CardPizza.propTypes = {
  name: PropTypes.string.isRequired, 
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired, 
  price: PropTypes.number.isRequired, 
  img: PropTypes.string.isRequired, 
};


export default CardPizza;
