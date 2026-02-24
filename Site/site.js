// ================= TOGGLE PANELS =================

function toggleElement(id) {
    const element = document.getElementById(id);

    if (getComputedStyle(element).display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

function settings() {
    toggleElement("settings");
}

function updates() {
    toggleElement("updates");
}


// ================= LOAD SAVED TITLE =================

const savedTitle = localStorage.getItem("title");

if (savedTitle && savedTitle !== "") {
    document.title = savedTitle;
}


// ================= SET TAB TITLE =================

function titleSet(text) {
    if (text.trim() !== "") {
        document.title = text;
        localStorage.setItem("title", text);
    } else {
        localStorage.removeItem("title");
        document.title = "NovaClient";
    }
}


// ================= SET TAB ICON =================

function iconSet(url) {
    if (url.trim() !== "") {
        let favicon = document.querySelector("link[rel='icon']");
        if (!favicon) {
            favicon = document.createElement("link");
            favicon.rel = "icon";
            document.head.appendChild(favicon);
        }
        favicon.href = url;
        localStorage.setItem("icon", url);
    }
}


// ================= LOAD SAVED ICON =================

const savedIcon = localStorage.getItem("icon");

if (savedIcon) {
    let favicon = document.querySelector("link[rel='icon']");
    if (favicon) {
        favicon.href = savedIcon;
    }
}


// ================= RESET =================

function reset() {
    localStorage.removeItem("title");
    localStorage.removeItem("icon");
    location.reload();
}
