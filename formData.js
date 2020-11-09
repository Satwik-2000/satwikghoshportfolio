// Another

function store() {
    var inputName = document.getElementById("name");
    var inputEmail = document.getElementById("email");
    var inputMobile = document.getElementById("mobile");
    var inputComment = document.getElementById("comment");
    localStorage.setItem("name", inputName.value);
    localStorage.setItem("email", inputEmail.value);
    localStorage.setItem("mobile", inputMobile.value);
    localStorage.setItem("comment", inputComment.value);
}