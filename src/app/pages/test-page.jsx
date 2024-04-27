import Slider from '../reusable-components/slider';
import VerticalSlider from '../reusable-components/vertical-slider';
import cls from './test-page.module.css';

export const TestPage = () => {
  return (
    <div className={cls.page}>
      <VerticalSlider />
    </div>
  );
};
