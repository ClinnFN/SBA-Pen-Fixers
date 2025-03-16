const users = {
    "clinnfn": "Hillside4.",
    "logan": "loganissmart"
};

function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    
    if (users[username] && users[username] === password) {
        window.location.href = "_dashboard/index.html";
    } else {
        document.getElementById("error-message").innerText = "Interaction failed, you do not have access to the dashboard.";
    }
}
