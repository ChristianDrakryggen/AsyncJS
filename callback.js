const posts = [
  { title: "Post ett", body: "Hejsan hoppsan" },
  { title: "Post två", body: "Hejsan hoppsan 2" },
];

const getPosts = () => {
  setTimeout(() => {
    let output = "";
    posts.map((post) => (output += `<p>${post.title}</p>`));
    document.body.innerHTML = output;
  }, 1000);
};

const createPost = (post, callback) => {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
};

//getPosts();

createPost({ title: "Post tre", body: "Hejsan hoppsan 3" }, getPosts);
