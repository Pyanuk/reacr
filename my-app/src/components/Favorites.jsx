import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const Favorites = (props) => {
  return (
    <div>
      <div>
        <h2>Избранное</h2>
      </div>
      <div className="card-container">
        {props.favoritesItems.length > 0 ? (
          props.favoritesItems.map((obj) => (
            <div key={obj.id} className="card-item">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={obj.url} alt={obj.name} />
                <Card.Body>
                  <Card.Title>{obj.name}</Card.Title>
                  <Card.Text>
                    {obj.description}
                    <br />
                  </Card.Text>
                  <Button onClick={() => props.deleteFavoritesItem(obj.id)}>Удалить избранное</Button>
                </Card.Body>
              </Card>
            </div>
          ))
        ) : (
          <p>Избранное пусто</p>
        )}
      </div>
    </div>
  );
}

export default Favorites;
