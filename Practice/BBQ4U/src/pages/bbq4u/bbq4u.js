import React from "react";
import { browserHistory } from 'react-router';

var Slider = require('react-slick');

var Header = React.createClass({
  render: function() {
    return (
      <header>
        <img src='../img/light.png' alt='Light' className='header__icon'/>
        <p className='header__title'>The best grill light for barbecue</p>
        <Menu />
        <img src='../img/logo.png' alt='BBQ4U' className='header__logo'/>
        <Carousel />
      </header>
    )
  }
});

var Menu = React.createClass({
  render: function() {
    return (
      <menu className='header__menu'>
        <ul className='header__menu_list'>
          <li className='header__menu_item'><a href='http://www.amazon.com/Barbecue-Grill-Light-BBQ4U-Accessories/dp/B01ET99KOE/' target='_blank' className='menu_link'><span className='accent_strong accent_orange accent_capitalized'>Buy now</span></a></li>
          <li className='header__menu_item'><a href='#_specifications' className='menu_link'>Specifications</a></li>
          <li className='header__menu_item'><a href='#_contacts' className='menu_link'>Contact us</a></li>
        </ul>
      </menu>
    )
  }
});

var Carousel = React.createClass({
  render: function() {
  	var settings = {
    	dots: true,
      infinite: true,
      arrows: true,
      fade: true,
      swipe: false,
      autoplay: true,
      autoplaySpeed: 14000,
      speed: 700
    }
    return (
    	<div className='slider__container'>
      	<Slider {...settings}>
        	<img src='../img/Light-1.jpg' className='slider__image'/>
          <img src='../img/Light-2.jpg' className='slider__image'/>
          <img src='../img/Light-3.jpg' className='slider__image'/>
          <img src='../img/Light-4.jpg' className='slider__image'/>
        </Slider>
      </div>
    );
  }
});

var Main = React.createClass({
  render: function() {
    return (
      <main className='main__block' id='_specifications'>
        <ArticleBlock_1 />
        <ArticleBlock_2 />
      </main>
    )
  }
});

var ArticleBlock_1 = React.createClass({
  render: function() {
    return (
      <article className='main__article'>
        <Article_1 />
        <Figure_1 />
      </article>
    )
  }
});

var ArticleBlock_2 = React.createClass({
  render: function() {
    return (
      <article className='main__article'>
        <Figure_2 />
        <Article_2 />
      </article>
    )
  }
});

var Article_1 = React.createClass({
  render: function() {
    return (
      <article className='article__text'>
        <ul className='article__list'>
          <li className='article__list_item'><span className='accent_strong accent_capitalized accent_orange'>Super bright</span>: 10 LEDs with 100 lumens provide ultra-bright lighting. You can choose one of three brightness modes by touch sensor on/off switch</li>
          <li className='article__list_item'><span className='accent_strong accent_capitalized accent_orange'>Adjustable mount</span>: Improved screw clamp makes it easy to install this 360° rotating light on most charcoal, gas or electric grills and smokers so it suits Weber, Big Green Egg and others</li>
          <li className='article__list_item'><span className='accent_strong accent_capitalized accent_orange'>Durability</span>: The BBQ4U grill light made from durable heat- and weather-resistant ABS plastic. Besides outdoor, ideal for indoor use</li>
          <li className='article__list_item'><span className='accent_strong accent_capitalized accent_orange'>All-inclusive set</span>: batteries, screwdriver and bamboo cleaning cloth as bonuses</li>
          <li className='article__list_item'><span className='accent_strong accent_capitalized accent_orange'>Warranty</span>: We will <span className='accent_capitalized accent_red'>always</span> replace a faulty product or refund your purchase</li>
        </ul>
      </article>
    )
  }
});

var Article_2 = React.createClass({
  render: function() {
    return (
      <article  className='article__text'>
        <p className='article__subheader accent_strong accent_capitalized accent_orange'>Specifications:</p>
        <ul className='article__list'>
          <li className='article__list_item'><span className='accent_strong'>Dimentions</span>: 7.7 x 2.4 x 3.5 inches</li>
          <li className='article__list_item'><span className='accent_strong'>Weight</span>: 9.6 ounces</li>
          <li className='article__list_item'><span className='accent_strong'>Shipping weight</span>: 0.6 pounds</li>
          <li className='article__list_item'><span className='accent_strong'>Power supplie</span>: 3xAA batteries (included)</li>
          <li className='article__list_item'><span className='accent_strong'>Material</span>: high quality heat-resistant ABS plastic</li>
          <li className='article__list_item'><span className='accent_strong'>Color</span>: black</li>
          <li className='article__list_item'><span className='accent_strong'>3 mode brightness regulation</span>: 10% - 75% - 100%</li>
          <li className='article__list_item'><span className='accent_strong'>Luminous</span>:  100 lumen</li>
        </ul>
      </article>
    )
  }
});

var Figure_1 = React.createClass({
  render: function() {
    return (
      <img src='../img/Main-1.jpg' className='article__image'/>
    )
  }
});

var Figure_2 = React.createClass({
  render: function() {
    return (
      <img src='../img/Main-2.jpg' className='article__image'/>
    )
  }
});

var Form = React.createClass({
  render: function() {
    return (
      <div className='contacts' id='_contacts'>
        <form className='contacts__subscribe-form'>
          <div className='form__promo'>Send me a <span className='accent_strong accent_red'>25%</span> discount coupon and keep me informed about new offers and products</div>
          <input className='form__email-input' type='email' placeholder="enter your e-mail here"></input>
          <button className='form__confirm' type='button'>Confirm</button>
        </form>
        <div className='contacts__links'>
          <div className='contacts__links_item'>
            <img src='../img/mail.png' className='contacts__image'/>
            <div><a className='contacts__links_url' href='mailto:service@bbq4u.top'>service@bbq4u.top</a></div>
          </div>
          <div className='contacts__links_item'>
            <img src='../img/FB.png' className='contacts__image'/>
            <div><a className='contacts__links_url' href='http://www.facebook.com/bbq4u' target='_blank' >http://www.facebook.com/bbq4u</a></div>
          </div>
        </div>
      </div>
    )
  }
});

var Footer = React.createClass({
  render: function() {
    return (
      <footer className='footer__content'>
        Copyright, 2016, BBQ4U
      </footer>
    )
  }
});

var MainPage = React.createClass({
  render: function() {
    return (
      <div className='content'>
        <Header />
        <Main />
        <Form />
        <Footer />
      </div>
    );
  }
});

export default class HomePage extends React.Component {
  render() {
    return (
      <MainPage />
    );
  }
}
