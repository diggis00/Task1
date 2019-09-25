import React, { Component } from 'react';
import img1 from './car.jpg';
import img2 from './joker.jpg';
import img3 from './see.jpg';
import img4 from './terminator.jpg';
import img5 from './tiger.jpg';
import img6 from './willsmith.jpg';
import tiger from './tiger.jpg';

const photos = [
  { photo: img1, text: 'img1' },
  { photo: img2, text: 'img2' },
  { photo: img3, text: 'img3' },
  { photo: img4, text: 'img4' },
  { photo: img5, text: 'img5' },
  { photo: img6, text: 'img6' }
];

class GalleryLayout extends Component {
  handleClick(image) {
    document.body.style.backgroundImage = `url(${image.photo})`;
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';

    console.log(tiger);
    console.log(image.photo);
  }
  render() {
    return (
      <>
        {photos.map(image => (
          <img
            style={{ height: 100, width: 150, margin: 3, cursor: 'pointer' }}
            src={image.photo}
            alt={image.text}
            onClick={() => this.handleClick(image)}
            key={image.text}
          />
        ))}
      </>
    );
  }
}
export default GalleryLayout;
