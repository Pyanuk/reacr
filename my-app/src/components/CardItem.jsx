import React from 'react';
import Item from './Item';
import axios from 'axios';
import { motion } from 'framer-motion';
import './CardItem.css'; 

const CardItem = (props) => {
  const onAddBasket = async (obj) => {
    try {
      if (props.basketItems.find(item => Number(item.id) === Number(obj.id))) {
        await axios.delete(`http://localhost:3001/basket/${obj.id}`);
        props.setBasketItems((over) => over.filter(item => Number(item.id) !== Number(obj.id)));
      } else {
        await axios.post('http://localhost:3001/basket', obj);
        props.setBasketItems([...props.basketItems, obj]);
      }
    } catch (error) {
      alert('Error');
    }
  };

  const onAddFavorites = async (obj) => {
    try {
      if (props.favoritesItems.find(item => Number(item.id) === Number(obj.id))) {
        await axios.delete(`http://localhost:3001/favorites/${obj.id}`);
        props.setFavoritesItems((over) => over.filter(item => Number(item.id) !== Number(obj.id)));
      } else {
        await axios.post('http://localhost:3001/favorites', obj);
        props.setFavoritesItems([...props.favoritesItems, obj]);
      }
    } catch (error) {
      alert('Error');
    }
  };

  return (
    <div>
      <div>
        <h2>Продукты</h2>
      </div>
      <div className="card-container">
        {props.item.map(obj => (
          <motion.div
            key={obj.id}
            className="card-item"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <Item 
              id={obj.id}
              myId={obj.myId}
              name={obj.name}
              description={obj.description}
              price={obj.price}
              url={obj.url}
              onPlus={onAddBasket}
              onClickFavorites={onAddFavorites}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default CardItem;
