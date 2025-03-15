class Post {
  title: string;
  content: string;

  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
  }

  createPost(data: string) {
    console.log(`This is data to create the post: ${data}`);
    // Implementation here
  }

  updatePost() {
    // Implementation here
  }

  deletePost() {
    // Implementation here
  }
}

class PostHTML {
  private post: Post;

  constructor(post: Post) {
    this.post = post;
  }

  createPostHTML() {
    const html = `<h1>${this.post.title}</h1><p>${this.post.content}</p>`;
    this.post.createPost(html);
  }
}

class PostJSON {
  private post: Post;

  constructor(post: Post) {
    this.post = post;
  }

  createPostJSON() {
    const json = {
      name: 'test',
      status: 1,
    };
    this.post.createPost(JSON.stringify(json));
  }
}
