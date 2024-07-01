import sql from 'better-sqlite3';

const db = sql('posts.db');

export async function GetPosts() {
  return db.prepare('SELECT * FROM posts').all();
}