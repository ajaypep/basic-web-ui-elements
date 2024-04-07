import './style.css';
import LeftArrowSrc from './images/left-arrow.svg';
import RightArrowSrc from './images/right-arrow.svg';

const ArrowFlankedImage = (imgSrcs, fillDotAtIndex) => {
  const component = document.createElement('div');
  component.classList.add('arrow-flanked-image');
  let currentImageIndex = 0;
  const setCurrentImageIndex = (value) => {
    currentImageIndex = value;
  };
  const img = document.createElement('img');
  img.src = imgSrcs[currentImageIndex];

  const leftArrowImg = document.createElement('img');
  leftArrowImg.src = LeftArrowSrc;
  leftArrowImg.addEventListener('click', () => {
    if (currentImageIndex <= 0) return;
    currentImageIndex -= 1;
    img.src = imgSrcs[currentImageIndex];
    fillDotAtIndex(currentImageIndex);
  });

  const rightArrowImg = document.createElement('img');
  rightArrowImg.src = RightArrowSrc;
  rightArrowImg.addEventListener('click', () => {
    if (currentImageIndex >= imgSrcs.length - 1) return;
    currentImageIndex += 1;
    img.src = imgSrcs[currentImageIndex];
    fillDotAtIndex(currentImageIndex);
  });
  component.append(leftArrowImg, img, rightArrowImg);
  return { component, img, setCurrentImageIndex };
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

const NavigationDots = (imgSrcs, changeImageSrcToIndex) => {
  const component = document.createElement('div');
  component.classList.add('navigation-dots');
  component.classList.add('first');
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
    const newImageIndex = Number(event.target.dataset.index);
    fillDotAtIndex(newImageIndex);
    changeImageSrcToIndex(newImageIndex);
    if (newImageIndex === 0) {
      component.classList.add('first');
      component.classList.remove('last');
    } else if (newImageIndex === imgSrcs.length - 1) {
      component.classList.add('last');
      component.classList.remove('first');
    }
  });
  const getDots = () => dots;
  return { component, getDots, fillDotAtIndex };
};

const ImageSlider = (imgSrcs) => {
  const imageSliderEle = document.createElement('div');
  imageSliderEle.classList.add('image-slider');

  let arrowFlankedImage = null;

  const changeImageSrcToIndex = (index) => {
    arrowFlankedImage.setCurrentImageIndex(Number(index));
    arrowFlankedImage.img.src = imgSrcs[index];
  };

  const navigationDots = NavigationDots(imgSrcs, changeImageSrcToIndex);

  arrowFlankedImage = ArrowFlankedImage(imgSrcs, navigationDots.fillDotAtIndex);

  imageSliderEle.append(arrowFlankedImage.component, navigationDots.component);
  return imageSliderEle;
};

export default ImageSlider;
