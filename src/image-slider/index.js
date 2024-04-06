import './style.css';
import LeftArrowSrc from './images/left-arrow.svg';
import RightArrowSrc from './images/right-arrow.svg';

const currentImage = document.createElement('img');
let currentImageIndex = 0;
const ArrowFlankedImage = (imgSrcs, navigationDots) => {
  const arrowFlankedImageEle = document.createElement('div');
  arrowFlankedImageEle.classList.add('arrow-flanked-image');

  currentImage.src = imgSrcs[currentImageIndex];

  const leftArrowImg = document.createElement('img');
  leftArrowImg.src = LeftArrowSrc;
  leftArrowImg.addEventListener('click', () => {
    if (currentImageIndex <= 0) return;
    currentImageIndex -= 1;
    currentImage.src = imgSrcs[currentImageIndex];
    navigationDots.fillDotAtIndex(currentImageIndex);
  });

  const rightArrowImg = document.createElement('img');
  rightArrowImg.src = RightArrowSrc;
  rightArrowImg.addEventListener('click', () => {
    if (currentImageIndex >= imgSrcs.length - 1) return;
    currentImageIndex += 1;
    currentImage.src = imgSrcs[currentImageIndex];
    navigationDots.fillDotAtIndex(currentImageIndex);
  });

  arrowFlankedImageEle.append(leftArrowImg, currentImage, rightArrowImg);
  return arrowFlankedImageEle;
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

const NavigationDots = (imgSrcs) => {
  const component = document.createElement('div');
  component.classList.add('navigation-dots');
  const dots = [];
  for (let i = 0; i < imgSrcs.length; i += 1) {
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
    currentImageIndex = event.target.dataset.index;
    fillDotAtIndex(currentImageIndex);
    currentImage.src = imgSrcs[currentImageIndex];
  });
  const getDots = () => dots;
  return { component, getDots, fillDotAtIndex };
};

const ImageSlider = (imgSrcs) => {
  const imageSliderEle = document.createElement('div');
  imageSliderEle.classList.add('image-slider');

  const navigationDots = NavigationDots(imgSrcs);
  imageSliderEle.append(
    ArrowFlankedImage(imgSrcs, navigationDots),
    navigationDots.component
  );
  return imageSliderEle;
};

export default ImageSlider;
