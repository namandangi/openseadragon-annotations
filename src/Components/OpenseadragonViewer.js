import React, { useEffect } from 'react';
import OpenSeadragon from 'openseadragon';

const OpenSeadragonViewer = ({imageSrc}) => {
  useEffect(() => {
    // Initialize OpenSeadragon
    const viewer = OpenSeadragon({
      id: 'openseadragon-viewer',
      prefixUrl: '//openseadragon.github.io/openseadragon/images/', // Update with your image path
    });

    // Add your Deep Zoom image
    viewer.open(imageSrc); // Update with your Deep Zoom image URL


    // when the div is empty its own width and height dont make it appear
    // to just have an empty div display set its width and height from inside .addOverlay
    // or else append some element to the width so that it takes some shape and then it will display

    var rect = document.createElement("div");
    rect.id = 'rectangle';
    rect.width = '0.2';
    rect.style.backgroundColor = 'rgba(0, 0, 255, 0.5)'; // Blue with 50% opacity
    var image = document.createElement("img")
    image.id = 'right-arrow-overlay';
    image.src = 'http://upload.wikimedia.org/wikipedia/commons/7/7a/Red_Arrow_Right.svg';
    image.width = '20';
    // rect.appendChild(image);

    // // Create and add a rectangle
    viewer.addOverlay({
      element: rect,
      px: 0.5,
      py: 0.5,
      width: 0.05,
      height: 0.05,
      checkResize: false,
      placement: OpenSeadragon.OverlayPlacement.RIGHT
    });

  }, []);

  return (
    <div>
      <div id="openseadragon-viewer" style={{ width: '800px', height: '600px' }}></div>
    </div>
  );
};

export default OpenSeadragonViewer;
