import MainContainer from '../common/components/main-container/main-container';
import BlockInfo from '../components/blockInfo';
import MainCatalog from '../components/main-page-catalog';
import MoreInfo from '../components/more-info';
import TemporarilyBuy from '../components/temporarilyBuy';
import UpcomingEvents from '../components/upcomingEvents';
import MainContainerBg from '../containers/main-container-bg';

const MainPage = () => {
  return (
    <>
      <MainContainerBg>
        <MainContainer>
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
        </MainContainer>
      </MainContainerBg>
    </>
  );
};

export default MainPage;
