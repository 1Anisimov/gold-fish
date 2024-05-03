import HeaderBottom from './header-bottom';
import HeaderTop from './header-top';

const Header = ({ onChange, changeForm }) => {
  return (
    <>
      <div className="header">
        <HeaderTop changeForm={changeForm} />
        <HeaderBottom onChange={onChange} />
      </div>
    </>
  );
};
export default Header;
