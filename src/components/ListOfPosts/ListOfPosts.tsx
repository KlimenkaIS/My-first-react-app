import './ListOfPosts.css'
import { posts } from '../../data';
import BigCard from '../BigCard/BigCard';
import MediumCard from '../MediumCard/MediumCard';
import LittleCard from '../LittleCard/LittleCard';

export default function ListOfPosts() {
    return ( 
        <div className="list-of-posts-grid-container">
            <div className="list-of-posts-elem list-of-posts-elem_big"> 
                <BigCard
                date={posts[0].date}
                title={posts[0].title}
                description={posts[0].description}
                source={posts[0].image}
                ></BigCard>
            </div>

            <div className="list-of-posts-elem list-of-posts-elem_medium-1">
                <MediumCard
                source={posts[1].image}
                date={posts[1].date}
                title={posts[1].title}
                ></MediumCard>
            </div>
            <div className="list-of-posts-elem list-of-posts-elem_medium-2">
                <MediumCard
                source={posts[2].image}
                date={posts[2].date}
                title={posts[2].title}
                ></MediumCard>
            </div>
            <div className="list-of-posts-elem list-of-posts-elem_medium-3">
                <MediumCard
                source={posts[3].image}
                date={posts[3].date}
                title={posts[3].title}
                ></MediumCard>
            </div>
            <div className="list-of-posts-elem list-of-posts-elem_medium-4">
                <MediumCard
                source={posts[4].image}
                date={posts[4].date}
                title={posts[4].title}
                ></MediumCard>
            </div>

            <div className="list-of-posts-elem list-of-posts-elem_little-1">
                <LittleCard    
                source={posts[5].image}
                date={posts[5].date}
                title={posts[5].title}
                ></LittleCard></div>
            <div className="list-of-posts-elem list-of-posts-elem_little-2">
                <LittleCard    
                source={posts[6].image}
                date={posts[6].date}
                title={posts[6].title}
                ></LittleCard>
            </div>
            <div className="list-of-posts-elem list-of-posts-elem_little-3">
                <LittleCard    
                source={posts[7].image}
                date={posts[7].date}
                title={posts[7].title}
                ></LittleCard>
            </div>
            <div className="list-of-posts-elem list-of-posts-elem_little-4">
                <LittleCard    
                source={posts[8].image}
                date={posts[8].date}
                title={posts[8].title}
                ></LittleCard>
            </div>
            <div className="list-of-posts-elem list-of-posts-elem_little-5">
                <LittleCard    
                source={posts[9].image}
                date={posts[9].date}
                title={posts[9].title}
                ></LittleCard>
            </div>
            <div className="list-of-posts-elem list-of-posts-elem_little-6">
                <LittleCard    
                source={posts[10].image}
                date={posts[10].date}
                title={posts[10].title}
                ></LittleCard>
            </div>
        </div>
    );
}