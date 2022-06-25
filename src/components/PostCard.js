
const PostCard = ({post}) => {
    return (
        <article className="card">
            <div className="card-container">
                <div className="img-container"><img src={post.imageUrl}/>
                </div>
                <div className="content-container">
                    <h3> {post.title}</h3>
                    <p className="excerpt">{post.excerpt}</p>
                </div>
            </div>
            <p className="category"><span>I</span>{post.category}</p>
        </article>
    )

}

export default PostCard