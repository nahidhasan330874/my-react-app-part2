import { use } from 'react';
import Post from './post'; 
export default function Posts({postsPromise}) {
    const posts = use(postsPromise);
    console.log(posts);
    return(
        <div className="card">
            <h3>All posts are here; {posts.length}</h3>
              {
                posts.map(post => <Post key={post.id} post={post}> </Post>)
              }
        </div>
     );
}