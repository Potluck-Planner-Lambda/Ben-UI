const teamGitHubHandles = [
    'BenHall-7',
    'calebredd',
    'cnlien',
    'elijahdaniel',
    'LeTanque',
    'Tereamarie'
];

function element(name) {
    return document.createElement(name);
}

function textNode(data) {
    return document.createTextNode(data);
}

function addUserData(user) {
    let template = document.getElementById("member-template")
        .content
        .cloneNode(true);
    let root = template.querySelector(".member");
    root.querySelector(".profile-icon").setAttribute("src", user.avatar_url);
    root.querySelector(".profile-name").appendChild(textNode(user.name));
    root.querySelector(".github-link").setAttribute("href", user.html_url);
    
    document.getElementById("members").appendChild(root);
}

function load() {
    teamGitHubHandles.forEach(async (handle) => {
        try {
            let response = await fetch(`https://api.github.com/users/${handle}`, {
                credentials: "omit"
            });
            let json = await response.json();
            addUserData(json);
        }
        catch (error) {
            console.log(error);
        }
    })
}