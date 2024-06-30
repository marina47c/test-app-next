import PostItem from './post-item';
import classes from './posts-grid.module.css';

const PostsGrid = ({posts}) => {
    return (
        <ul className={classes.posts}>
            {posts.map(post => (
                <li key={post.id}>
                    <PostItem {...post} />
                </li>
            ))}
        </ul>
    );
};

export default PostsGrid;