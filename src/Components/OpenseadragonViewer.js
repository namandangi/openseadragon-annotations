import React, { useEffect, useRef } from 'react';
import OpenSeadragon from 'openseadragon';

const OpenSeadragonViewer = ({imageSrc}) => {
  
  const viewerRef = useRef(null);
  
  useEffect(() => {
    // Initialize OpenSeadragon
    
    const viewer = OpenSeadragon({
      id: 'openseadragon-viewer',
      prefixUrl: '//openseadragon.github.io/openseadragon/images/', // Update with your image path
    });

    // Add your Deep Zoom image
    viewer.open(imageSrc); // Update with your Deep Zoom image URL    
    viewerRef.current = viewer;
    

    // when the div is empty its own width and height dont make it appear
    // to just have an empty div display set its width and height from inside .addOverlay
    // or else append some element to the width so that it takes some shape and then it will display

    // var rect = document.createElement("div");
    // rect.id = 'rectangle';
    // rect.width = '0.2';
    // rect.style.backgroundColor = 'rgba(0, 0, 255, 0.5)'; // Blue with 50% opacity
    // var image = document.createElement("img")
    // image.id = 'right-arrow-overlay';
    // image.src = 'http://upload.wikimedia.org/wikipedia/commons/7/7a/Red_Arrow_Right.svg';
    // image.width = '20';
    // // rect.appendChild(image);

    // // // Create and add a rectangle
    // viewer.addOverlay({
    //   element: rect,
    //   px: 0.5,
    //   py: 0.5,
    //   width: 0.05,
    //   height: 0.05,
    //   checkResize: false,
    //   placement: OpenSeadragon.OverlayPlacement.RIGHT
    // });

  }, []);
  
  const addRect = () => {
    const viewer = viewerRef.current;
    
    var rect = document.createElement("div");
    rect.id = 'rectangle';
    // rect.width = '20%';
    rect.style.backgroundColor = 'rgba(0, 0, 255, 0.5)'; // Blue with 50% opacity
    var image = document.createElement("img")
    image.id = 'right-arrow-overlay';
    image.src = 'http://upload.wikimedia.org/wikipedia/commons/7/7a/Red_Arrow_Right.svg';
    image.width = '20';
    // rect.appendChild(image);

    // // Create and add a rectangle
    // inside a function the width and height | px and py work at a different scale altogether
    viewer.addOverlay({
      element: rect,
      px: 5500,
      py: 5500,
      width: 3500,
      height: 1500,
      checkResize: false,
      placement: OpenSeadragon.OverlayPlacement.RIGHT
    });
  }

  const addCircle = () => {
    const viewer = viewerRef.current;
    
    var circle = document.createElement("div");
    circle.id = 'circle';
    circle.style.backgroundColor = 'rgba(255, 0, 0, 0.5)'; // Blue with 50% opacity
    circle.style.borderRadius = '50%';
    var image = document.createElement("img")
    image.id = 'right-arrow-overlay';
    image.src = 'http://upload.wikimedia.org/wikipedia/commons/7/7a/Red_Arrow_Right.svg';
    image.width = '20';
    // rect.appendChild(image);

    // // Create and add a rcircle
    // inside a function the width and height | px and py work at a different scale altogether
    viewer.addOverlay({
      element: circle,
      px: 7500,
      py: 7500,
      width: 3500,
      height: 3500,
      checkResize: false,
      placement: OpenSeadragon.OverlayPlacement.RIGHT
    });
  }

  const addTriangle = () => {
    const viewer = viewerRef.current;
    
    var triangle = document.createElement("div");
    triangle.id = 'triangle';
    triangle.style.width = '0';
    triangle.style.height = '0';
    // triangle.style.backgroundColor = 'rgba(0, 255, 0, 0.5)'; // Blue with 50% opacity
    triangle.style.borderLeft = '25px solid transparent';
    triangle.style.borderRight = '25px solid transparent';
    triangle.style.borderBottom = '50px solid rgba(0, 255, 0, 0.5)'
    var image = document.createElement("img")
    image.id = 'right-arrow-overlay';
    image.src = 'http://upload.wikimedia.org/wikipedia/commons/7/7a/Red_Arrow_Right.svg';
    image.width = '20';
    // rect.appendChild(image);

    // // Create and add a rcircle
    // inside a function the width and height | px and py work at a different scale altogether
    viewer.addOverlay({
      element: triangle,
      px: 7500,
      py: 7500,
      width: 3500,
      height: 3500,
      checkResize: false,
      placement: OpenSeadragon.OverlayPlacement.RIGHT
    });
  }

  useEffect(() => {
    const RectangleButton = document.getElementById('Rectangle');
    const CircleButton = document.getElementById('Circle');
    const TriangleButton = document.getElementById('Triangle');
    
    RectangleButton.addEventListener('click', () => {
      console.log('clicked');
      addRect();
    });

    CircleButton.addEventListener('click', () => {
      addCircle();
    });

    TriangleButton.addEventListener('click', () => {
      addTriangle();
    });
  }, [])
  

  return (
    <div>
      <div id="openseadragon-viewer" style={{ width: '800px', height: '600px' }}></div>
      <button id="Rectangle">Rectangle</button>
      <button id="Circle">Circle</button>
      <button id="Triangle">Triangle</button>
    </div>
  );
};

export default OpenSeadragonViewer;
