import React, {useState, useEffect} from 'react';
import store from './store'
import { Provider } from 'react-redux'


import Header from './presentation/commons/header/Header';
import ContentHeader from './presentation/components/contentHeader/ContentHeader';
import DiscoverContainer from './container/DiscoverContainer';

import "@styles/global.scss";

const Root = () => {
  return (
    <Provider store={store}>
<div>
      <main>
        <Header />
        <section className="contents">
          <div className="container">
            <ContentHeader
              title="Discover" 
              description="기술을 발견하고 발전해보세요."
            />
            <DiscoverContainer />
          </div>
        </section>
      </main>
    </div>
    </Provider>
    
    
  );
};

export default Root;