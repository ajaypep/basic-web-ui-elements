import * as BasicWebUIElements from '../dist/main';
import Pfp from './images/pfp.png';
import SampleImage1Src from './images/Desert1.jpg';
import SampleImage2Src from './images/Desert2.jpg';
import SampleImage3Src from './images/Desert3.jpg';
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
    ])
  );
};
//testMobileMenu();
testImageSlider();
