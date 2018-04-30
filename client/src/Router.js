import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeScreen from './HomeScreen';
import AccountScreen from './AccountScreen';
import CategoryScreen from './CategoryScreen';
import IngredientsScreen from './IngredientsScreen';
import RecipesList from './RecipesList';
import RecipeScreen from './RecipeScreen';
import PrimaryNav from './components/PrimaryNav';

// import Category from './Category';

let Router = () =>
    <div>
      <SecondaryNav />
        <Switch>
            <Route path="/" component={HomeScreen} />
            <Route path="/account" component={AccountScreen} />
            <Route path="/categories" component={CategoryScreen} />
            <Route path="/ingredients" component={IngredientsScreen} />
            <Route path="/recipes" component={RecipesList} />
            <Route path="/#/recipes/:recipe" component={RecipeScreen} />
        </Switch>
        <PrimaryNav />
  </div>;

  export default Router;
