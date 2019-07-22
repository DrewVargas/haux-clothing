import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from './../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

const ShopPage = ({ match }) => {
  return (
    <div>
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    </div>
  );
};

export default ShopPage;
