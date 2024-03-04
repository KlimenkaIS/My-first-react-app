import './PageAllPosts.css'
import Header from "../../Header/Header";
import Title from "../../Title/Title";
import Tabs from '../../Tabs/Tabs';
import ListOfPosts from '../../ListOfPosts/ListOfPosts';
import DownNavigationBar from '../../DownNavigationBar/DownNavigationBar';
import Footer from '../../Footer/Footer';

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

