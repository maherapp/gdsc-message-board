import { Injectable } from '@nestjs/common';

type Post = {
  id: number;
  title: string;
  body: string;
};

let Posts: Post[] = [];

@Injectable()
export class PostsService {
  findAll() {
    return Posts;
  }

  findOne(id: number) {
    return Posts.find((p) => p.id === id);
  }

  create(post: any) {
    const id = Posts.length;
    const createdPost = {
      id,
      ...post,
    };
    Posts.push(createdPost);
    return createdPost;
  }

  update(id: number, post: any) {
    const index = Posts.findIndex((p) => p.id === id);
    if (index >= 0) {
      const updatedPost = {
        ...Posts[index],
        ...post,
      };
      Posts[index] = updatedPost;
      return Posts[index];
    }
    return null;
  }

  delete(id: number) {
    const index = Posts.findIndex((p) => p.id === id);
    if (index >= 0) {
      const deletedPost = Posts[index];
      Posts = [...Posts.slice(0, index), ...Posts.slice(index + 1)];
      return deletedPost;
    }
    return null;
  }
}
