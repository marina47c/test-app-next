import PostsGrid from "@/components/posts/posts-grid";
import classes from "./page.module.css";

const PostPage = () => {
    return (
        <>
            <header className={classes.header}>
                <h1>Objave</h1>
            </header>
            <main className={classes.main}>
               <PostsGrid posts={[]}/>
            </main>
        </>
    );
}

export default PostPage;