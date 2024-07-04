import ModalCatalog from '../../reusable-components/modal-catalog';
import AuthorizationForm from '../../modules/authorization-module/authorization-form/authorization-form';
import HeaderTop from '../header-top/header-top';
import HeaderBottom from '../header-bottom/header-bottom';

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
