function showSignup() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("signup-form").style.display = "block";
}

function showLogin() {
    document.getElementById("signup-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
}

function signup() {
    let username = document.getElementById("new-username").value;
    let password = document.getElementById("new-password").value;

    if (username && password) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        alert("Signup successful! Please log in.");
        showLogin();
    } else {
        alert("Please enter a username and password.");
    }
}

function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let storedUser = localStorage.getItem("username");
    let storedPass = localStorage.getItem("password");

    if (username === storedUser && password === storedPass) {
        localStorage.setItem("loggedIn", "true");
        loadDashboard();
    } else {
        alert("Incorrect username or password.");
    }
}

function loadDashboard() {
    if (localStorage.getItem("loggedIn") === "true") {
        document.getElementById("login-form").style.display = "none";
        document.getElementById("signup-form").style.display = "none";
        document.getElementById("dashboard").style.display = "block";
        document.getElementById("user-name").innerText = localStorage.getItem("username");
    }
}

function logout() {
    localStorage.removeItem("loggedIn");
    showLogin();
}

window.onload = loadDashboard;