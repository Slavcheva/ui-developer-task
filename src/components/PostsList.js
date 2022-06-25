import PostCard from "./PostCard";

const PostsList = ({posts}) =>{
    return(
        <section className="postsList">
            {posts.map((post)=>(
                <PostCard key={post.id} post={post}/>
            ))}
        </section>
    )
}
export default PostsList