import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Cards from './cards.json';
import {ReactComponent as ShopCart} from './img/common/shopCart.svg';
import style from'./MainAside.module.css';

const MainAside = () => {
  
  return (
      <aside className={style.aside}>
        {Cards.map((card) =>(
          <Card className={style.card}>
            <Card.Img className={style.brand_Img} variant="top" src={require(`${card.imgSRC}`)} />
            <Card.Body>
              <Card.Title>
                <img className={style.brand_logo} src={require(`${card.logoSRC}`)}  alt="logo" />
              </Card.Title>
              <Card.Text>
                {card.ShortInfo}
              </Card.Text>
              <Button className={style.brand_button} variant="primary" href={card.website}>About Brand</Button>
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
