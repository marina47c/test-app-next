import PostsGrid from "@/components/posts/posts-grid";
import classes from "./page.module.css";
import { GetPosts } from "@/lib/posts";

const  PostPage = async () => {
    
    const posts = await GetPosts();

    return (
        <>
            <header className={classes.header}>
                <h1>Objave</h1>
            </header>
            <main className={classes.main}>
               <PostsGrid posts={posts}/>
            </main>
        </>
    );
}

export default PostPage;