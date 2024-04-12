import BlockInfo from '../components/blockInfo';
import MainCatalog from '../components/main-page-catalog';
import MoreInfo from '../components/more-info';
import TemporarilyBuy from '../components/temporarilyBuy';
import UpcomingEvents from '../components/upcomingEvents';

const MainPage = () => {
  return (
    <>
      <div className="main_page">
        <div className="">
          <div className="content_page">
            <MainCatalog />
            <TemporarilyBuy title="Успей купить" />
            <TemporarilyBuy title="Специальные предложения" isSale />
            <UpcomingEvents />
            <MoreInfo />
            <BlockInfo />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
