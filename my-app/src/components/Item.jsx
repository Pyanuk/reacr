import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppContext } from '../App';

function Item(props) {
  const context = React.useContext(AppContext);

  const onClickAdd = () => {
    const { id, myId, name, description, price, url } = props;
    props.onPlus({ id, myId, name, description, price, url });
  };

  const onClickFavorites = () => {
    const { id, myId, name, description, price, url } = props;
    props.onClickFavorites({ id, myId, name, description, price, url });
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.url} alt={props.name} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          {props.description}
          <br />
          Price: {props.price}
        </Card.Text>
        <Button onClick={onClickAdd}>
          {context.isAdded(props.myId) ? 'Добавленно в корзину' : 'Добавить в корзину'}
        </Button>

        <Button onClick={onClickFavorites}>
          {context.isAddedFavorites(props.myId) ? 'Добавленно в избранное' : 'Добавить в избранное'}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Item;
