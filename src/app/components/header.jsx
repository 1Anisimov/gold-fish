import HeaderBottom from './header-bottom';
import HeaderTop from './header-top';

const Header = ({ onChange }) => {
  return (
    <>
      <div className="header">
        <HeaderTop />
        <HeaderBottom onChange={onChange} />
      </div>
    </>
  );
};
export default Header;
