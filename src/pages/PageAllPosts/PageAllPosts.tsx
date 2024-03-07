import './PageAllPosts.css'
import Header from "../../components/Header/Header";
import Title from "../../components/Title/Title";
import Tabs from '../../components/Tabs/Tabs';
import ListOfPosts from '../../components/ListOfPosts/ListOfPosts';
import DownNavigationBar from '../../components/DownNavigationBar/DownNavigationBar';
import Footer from '../../components/Footer/Footer';

export default function PageAllPosts() {
    return ( 
        <>
            <Header isHeaderWithBanner={true}></Header>
            <div className="all-posts-container">
                <div className="all-posts-wrapper">

                    <Title withAltMargins = {false}>Blog</Title>

                    <Tabs></Tabs>

                    <ListOfPosts></ListOfPosts>

                    <DownNavigationBar withPagination = {true}></DownNavigationBar>

                    <Footer></Footer>
                </div>
            </div>
        </>
    );
}

