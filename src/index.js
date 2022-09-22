import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {storyblokInit, apiPlugin} from '@storyblok/react'

import Page from './components/Page'
import Grid from './components/Grid'
import Teaser from './components/Teaser'
import Feature from './components/Feature'
import Hero from './components/Hero'
import Article from './components/Article'
import AllArticles from './components/AllArticles'
import PopularArtices from './components/PopularArticles';


const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  hero: Hero,
  article: Article,
  'all-articles': AllArticles,
  'popular-articles': PopularArtices
}

storyblokInit({
  accessToken: 'ySDUSsVhJA5aSsrkHNJMswtt',
  use: [apiPlugin],
  components
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

