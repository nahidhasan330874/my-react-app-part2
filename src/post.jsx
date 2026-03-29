export default function post({ post }) {
    console.log(post);
    return(
        <div className="card">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
     );
}