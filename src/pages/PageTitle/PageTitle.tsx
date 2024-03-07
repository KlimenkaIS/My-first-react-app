import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Title from '../../components/Title/Title';
import './PageTitle.css'

export default function PageTitle() {
    return (
        <>
            <Header isHeaderWithBanner = {false}></Header>
            <div className="page-title-container dark">
                <div className="page-title-wrapper">

                    <Button buttonStyle='button-back-home'>Back to home</Button>

                    <Title withAltMargins = {true}>Title</Title>

                    <button className="page-title-main-button">Template body</button>

                    <Footer></Footer>
                </div>
            </div>
        </>
    );
}

