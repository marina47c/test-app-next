import classes from './post-item.module.css';

const PostItem = ({ title, slug, image, summary }) => {
    return (
        <article className={classes.post}>
          <header>
            <div className={classes.image}>
              <Image src={image} alt={title} fill />
            </div>
            <div className={classes.headerText}>
              <h2>{title}</h2>
            </div>
          </header>
          <div className={classes.content}>
            <p className={classes.summary}>{summary}</p>
            <div className={classes.actions}>
              <Link href={`/posts/${slug}`}>View Details</Link>
            </div>
          </div>
        </article>
      );
};

export default PostItem;