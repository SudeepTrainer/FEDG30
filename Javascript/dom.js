const head = document.head;
console.log(head);
const body = document.body;
console.log(body);

const para = document.createElement("p");
para.innerText = "Hello DOM!";
body.append(para);

const header = document.getElementById("header");
console.log(header);
header.style.backgroundColor = "orange";

let post = document.querySelector("div");
console.log(post);
post.className = "feature-post"

// let posts = document.querySelectorAll("div");
// console.log(posts);

let posts = document.querySelectorAll(".post");
posts.forEach((post) => {
    // for each post in the posts
    // addEventClickListener has 2 parameters
    // 1st is the event
    // 2nd is the listener function called when the event is triggered
    post.addEventListener("click", (event) => {
        console.log(event.target);
    })
})
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// numbers.forEach((number) => console.log(number));

