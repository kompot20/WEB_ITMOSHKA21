var btn = document.getElementById("btn")
var con = 0;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function getPost() {
    let gif = document.getElementById("gif");
    let err = document.getElementById("error");
    gif.style.visibility = "visible";
    err.textContent = "";
    let id = getRandomInt(1, 5001)
    console.log(id)
    fetch('https://jsonplaceholder.typicode.com/photos/' + id)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(response.status);
            }
        })
        .then((post) => {
            let tbody = document.querySelector("#cardDiv");
            let template = document.querySelector("#temp");
            let clone = template.content.cloneNode(true);
            console.log(clone)
            let title = clone.querySelector(".title");
            let text = clone.querySelector(".text");
            let pic = clone.querySelector(".img");
            title.textContent = post.id;
            text.textContent = post.title;
            pic.setAttribute("src", post.url)
            console.log(clone)
            tbody.appendChild(clone)
            gif.style.visibility = "hidden";
        })
        .catch((error) => {
            err.textContent = error;
            gif.style.visibility = "hidden";
        });
}

btn.addEventListener("click", getPost);
