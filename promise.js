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

const createPost = (post) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = true;
      if (!error) {
        resolve();
      } else {
        reject("Something went wrong!");
      }
    }, 2000);
  });
};

//----------------------THEN/CATCH-----------------------------------//

/*createPost({ title: "Post tre", body: "Hejsan hoppsan 3" })
  .then(getPosts)
  .catch((err) => alert(err));*/

//-----------------------------------ASYNC/AWAIT-------------------------------//

/*const fn = async () => {
  try {
    await createPost({ title: "Post tre", body: "Hejsan hoppsan 3" });
    getPosts();
  } catch (error) {
    alert(error);
  }
};

fn();*/

const fetchData = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

fetchData();

//------------------------promise.all---------------------------//

/*let arr = [];

const promiseOne = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Hejsan");
  }, 1000);
});

const promiseTwo = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Hoppsan");
  }, 2000);
});

const promiseThree = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Lillebror");
  }, 3000);
});

const promiseFour = fetch("https://jsonplaceholder.typicode.com/posts").then(
  (res) => res.json()
);

Promise.all([promiseOne, promiseTwo, promiseThree, promiseFour]).then(
  (values) => {
    arr.push(values);
    console.log(arr);
  }
);*/
