import Slider from '../reusable-components/slider';
import cls from './test-page.module.css';

export const TestPage = () => {
  return (
    <div className={cls.page}>
      <div className={cls.container}>
        <Slider />
      </div>
    </div>
  );
};
