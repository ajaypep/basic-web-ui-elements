import './style.css';
import LeftArrowSrc from './images/left-arrow.svg';
import RightArrowSrc from './images/right-arrow.svg';

const ArrowFlankedImage = (imgSrcs, fillDotAtIndex, updateArrow) => {
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
    updateArrow(currentImageIndex);
  });

  const rightArrowImg = document.createElement('img');
  rightArrowImg.src = RightArrowSrc;
  rightArrowImg.addEventListener('click', () => {
    if (currentImageIndex >= imgSrcs.length - 1) return;
    currentImageIndex += 1;
    img.src = imgSrcs[currentImageIndex];
    fillDotAtIndex(currentImageIndex);
    updateArrow(currentImageIndex);
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

const NavigationDots = (numOfDots, changeImageSrcToIndex, updateArrow) => {
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
    changeImageSrcToIndex(newImageIndex);
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

  let arrowFlankedImage = null;

  const changeImageSrcToIndex = (index) => {
    arrowFlankedImage.setCurrentImageIndex(index);
    arrowFlankedImage.img.src = imgSrcs[index];
  };

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
    changeImageSrcToIndex,
    updateArrow
  );

  arrowFlankedImage = ArrowFlankedImage(
    imgSrcs,
    navigationDots.fillDotAtIndex,
    updateArrow
  );

  imageSliderEle.append(arrowFlankedImage.component, navigationDots.component);
  return imageSliderEle;
};

export default ImageSlider;
