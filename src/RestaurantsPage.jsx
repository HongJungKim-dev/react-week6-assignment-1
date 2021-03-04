import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';
import RegionsContainer from './RegionsContainer';
import CategoriesContainer from './CategoriesContainer';
import RestaurantsContainer from './RestaurantsContainer';

import {
  loadInitialData,
} from './actions';

export default function RestaurantsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadInitialData());
  });

  return (
    <div>
      <RegionsContainer />
      <CategoriesContainer />
      <BrowserRouter>
        <RestaurantsContainer />
      </BrowserRouter>
    </div>
  );
}
