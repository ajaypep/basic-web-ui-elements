import './style.css';
import LeftArrowSrc from './images/left-arrow.svg';
import RightArrowSrc from './images/right-arrow.svg';

const ImageWindow = (imgSrcs) => {
  const imageWindow = document.createElement('div');
  imageWindow.classList.add('image-window');
  for (let i = 0; i < imgSrcs.length; i += 1) {
    const img = document.createElement('img');
    img.src = imgSrcs[i];
    imageWindow.appendChild(img);
  }
  const component = document.createElement('div');
  component.classList.add('image-window-wrapper');
  component.appendChild(imageWindow);
  const getComponent = () => component;

  let currentImageIndex = 0;
  const getCurrentImageIndex = () => currentImageIndex;
  const setCurrentImageIndex = (value) => {
    currentImageIndex = value;
  };

  const changeImageTo = (index) => {
    // const shift = currentImageIndex - index;
    setCurrentImageIndex(index);
    imageWindow.style.transform = `translate(${-1010 * index}px, 0)`;
    imageWindow.classList.add('shift-left');
    setTimeout(() => {
      imageWindow.classList.remove('shift-left');
    }, 2000);
  };

  return {
    getComponent,
    changeImageTo,
    getCurrentImageIndex,
  };
};

const ArrowFlankedImage = (imageWindow, fillDotAtIndex, updateArrow) => {
  const component = document.createElement('div');
  component.classList.add('arrow-flanked-image');

  const leftArrowImg = document.createElement('img');
  leftArrowImg.src = LeftArrowSrc;
  leftArrowImg.addEventListener('click', () => {
    const currentImageIndex = imageWindow.getCurrentImageIndex();
    if (currentImageIndex <= 0) return;
    imageWindow.changeImageTo(currentImageIndex - 1);
    fillDotAtIndex(currentImageIndex);
    updateArrow(currentImageIndex);
  });

  const rightArrowImg = document.createElement('img');
  rightArrowImg.src = RightArrowSrc;
  rightArrowImg.addEventListener('click', () => {
    const currentImageIndex = imageWindow.getCurrentImageIndex();
    if (currentImageIndex <= 0) return;
    imageWindow.changeImageTo(currentImageIndex + 1);
    fillDotAtIndex(currentImageIndex);
    updateArrow(currentImageIndex);
  });
  component.append(leftArrowImg, imageWindow.getComponent(), rightArrowImg);
  return { component };
};

const Dot = (index) => {
  const component = document.createElement('div');
  component.classList.add('dot');
  component.setAttribute('data-index', index);
  const toggleFill = () => {
    component.classList.toggle('selected');
  };

  return { component, toggleFill };
};

const NavigationDots = (numOfDots, changeImageTo, updateArrow) => {
  const component = document.createElement('div');
  component.classList.add('navigation-dots');
  component.classList.add('first');
  const dots = [];
  for (let i = 0; i < numOfDots; i += 1) {
    const dot = Dot(i);
    component.appendChild(dot.component);
    dots.push(dot);
  }
  let lastFilledDotIndex = 0;
  dots[lastFilledDotIndex].toggleFill();

  const fillDotAtIndex = (index) => {
    dots[lastFilledDotIndex].toggleFill();
    lastFilledDotIndex = index;
    dots[lastFilledDotIndex].toggleFill();
  };

  component.addEventListener('click', (event) => {
    if (!event.target.dataset.index) return;
    const newImageIndex = Number(event.target.dataset.index);
    fillDotAtIndex(newImageIndex);
    changeImageTo(newImageIndex);
    updateArrow(newImageIndex);
  });
  const getDots = () => dots;
  return { component, getDots, fillDotAtIndex };
};

const ImageSlider = (imgSrcs) => {
  if (
    imgSrcs === undefined ||
    !Array.isArray(imgSrcs) ||
    imgSrcs.length === 0
  ) {
    throw Error('Invalid image sources');
  }

  const imageSliderEle = document.createElement('div');
  imageSliderEle.classList.add('image-slider');

  const imageWindow = ImageWindow(imgSrcs);

  let arrowFlankedImage = null;

  const updateArrow = (index) => {
    if (index === 0) {
      imageSliderEle.classList.add('first');
      imageSliderEle.classList.remove('last');
    } else if (index === imgSrcs.length - 1) {
      imageSliderEle.classList.add('last');
      imageSliderEle.classList.remove('first');
    } else {
      imageSliderEle.classList.remove('first');
      imageSliderEle.classList.remove('last');
    }
  };
  updateArrow(0);

  const navigationDots = NavigationDots(
    imgSrcs.length,
    imageWindow.changeImageTo,
    updateArrow
  );

  arrowFlankedImage = ArrowFlankedImage(
    imageWindow,
    navigationDots.fillDotAtIndex,
    updateArrow
  );
  // const changeToImageAndUpdateUI = (index) => {
  //   imageWindow.changeImageTo(index);
  //   updateArrow(index);
  //   navigationDots.fillDotAtIndex(index);
  // };
  // const loopImageAfterInterval = (seconds) => {
  //   setInterval(() => {
  //     let index = arrowFlankedImage.getCurrentImageIndex();
  //     index += 1;
  //     if (index === imgSrcs.length) {
  //       index = 0;
  //     }
  //     changeToImageAndUpdateUI(index);
  //   }, seconds);
  // };

  // loopImageAfterInterval(5000);
  imageSliderEle.append(arrowFlankedImage.component, navigationDots.component);
  return imageSliderEle;
};

export default ImageSlider;
