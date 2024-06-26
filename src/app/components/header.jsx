import ModalCatalog from '../reusable-components/modal-catalog';
import HeaderBottom from './header-bottom';
import HeaderTop from './header-top';
import AuthorizationForm from '../modules/authorization-module/authorization-form/authorization-form';

const Header = () => {
  return (
    <>
      <div className="header">
        <HeaderTop />
        <HeaderBottom />
      </div>
      <ModalCatalog />
      <AuthorizationForm />
    </>
  );
};
export default Header;
