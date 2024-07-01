import sql from 'better-sqlite3';

const db = sql('posts.db');

export async function GetPosts() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return db.prepare('SELECT * FROM posts').all();
}