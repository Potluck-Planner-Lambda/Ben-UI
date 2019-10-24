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
    let listItem = element("li");

    let imgNode = element("img");
    imgNode.setAttribute("src", user.avatar_url);
    
    let name = element("p");
    let name_text = textNode(user.name);
    name.appendChild(name_text);

    let anchor = element("a");
    anchor.setAttribute("href", user.html_url);
    let anchor_text = textNode("Profile");
    anchor.appendChild(anchor_text);

    listItem.appendChild(imgNode);
    listItem.appendChild(name);
    listItem.appendChild(anchor);
    
    document.getElementById("members").appendChild(listItem);
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