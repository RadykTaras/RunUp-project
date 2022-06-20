import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {ReactComponent as ShopCart} from './img/common/shopCart.svg';
import './MainAside.css';

const MainAside = (props) => {
    
  return (
      <aside className={`aside${props.asideStatus}`}>
        {props.brandsInfo.map((card) =>(
          <Card className={`card${props.asideStatus}`}>
            <Card.Img className="brand_Img" variant="top" src={require(`${card.imgSRC}`)} />
            <Card.Body>
              <Card.Title>
                <img className="brand_logo" src={require(`${card.logoSRC}`)}  alt="logo" />
              </Card.Title>
              <Card.Text>
                {card.ShortInfo}
              </Card.Text>
              <Button className="brand_button" variant="primary" href={card.website}>About Brand</Button>
              <a href="http://localhost:3000/#store">
                <ShopCart />
              </a>
            </Card.Body>
          </Card>
          )
        )}
      </aside>
  );
}

export default MainAside;
