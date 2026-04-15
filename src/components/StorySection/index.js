import React, { Fragment } from 'react';

import StoryItem from './StoryItem';
import { stories } from './stories-data';

function StorySection() {
  const renderStories = () => {
    return stories.map((s, index) => <StoryItem key={index} {...s} index={index} isInverted={index % 2 === 1} />);
  };

  return (
    <Fragment>
      <div id="fh5co-couple-story">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
              <h2 className="main-font">Nuestra Historia</h2>
              <p className="sub-title">El camino que Dios trazó para unirnos</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-md-offset-0">
              <ul className="timeline animate-box">{renderStories()}</ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default StorySection;
