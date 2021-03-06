import React, { useState } from 'react';
import DetailsBanner from './DetailsBanner.jsx';
import PhotoCounter from './PhotoCounter.jsx';

const ImageBox = (props) => {

  const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="hero-container">
      <div className="tile-container">
        <DetailsBanner listing={props.listing} saveListing={props.saveListing} />
        <div className="tile-background">
          <div className="box img-hover-zoom">
            <div className="column mainimage">
              <img className="primary" src={props.listing.image[0]} onClick={props.toggleModal}  />
            </div>
            <div className="column secondaryimage">
              <img className="secondary" src={props.listing.image[1]} onClick={props.toggleModal} />
            </div>
            <div className="tertiaryimage">
              <img className="tertiary" src={props.listing.image[2]} onClick={props.toggleModal} />
            </div>
          </div>
        </div>
        <PhotoCounter count={props.listing.image.length} toggleModal={props.toggleModal} />
      </div>
    </div>
  )
}

export default ImageBox;