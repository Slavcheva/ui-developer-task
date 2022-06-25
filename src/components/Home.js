import React from "react";
import service from "../service";
import PostsList from "./PostsList";

const Home = () => {
    const [posts, setPosts] = React.useState([])

    React.useEffect(() => {
        service.load().then((posts) => {
            setPosts(posts)
        })
    }, []);

    return (
        <main className="home">
            <PostsList posts={posts}/>
        </main>
    )
}

export default Home