import * as BasicWebUIElements from '../dist/main';
import Pfp from './images/pfp.png';
import SampleImage1Src from './images/Sample1.jpg';
import SampleImage2Src from './images/Sample2.jpg';
import SampleImage3Src from './images/Sample3.jpg';
import SampleImage4Src from './images/Sample4.jpg';
import SampleImage5Src from './images/Sample5.jpg';
import OverviewIcon from './images/overview.svg';

const testMobileMenu = () => {
  const workspaceData = ['Workspace1', 'Workspace2', 'Workspace3'];
  const listItems = [
    {
      iconSrc: OverviewIcon,
      name: 'Overview',
    },
    {
      iconSrc: OverviewIcon,
      name: 'Overview',
    },
    {
      iconSrc: OverviewIcon,
      name: 'Overview',
    },
    {
      iconSrc: OverviewIcon,
      name: 'Overview',
    },
    {
      iconSrc: OverviewIcon,
      name: 'Overview',
    },
  ];
  document.body.appendChild(
    BasicWebUIElements.MobileMenu(Pfp, workspaceData, listItems)
  );
};

const testImageSlider = () => {
  document.body.appendChild(
    BasicWebUIElements.ImageSlider([
      SampleImage1Src,
      SampleImage2Src,
      SampleImage3Src,
      SampleImage4Src,
      SampleImage5Src,
    ])
  );
};

testImageSlider();
