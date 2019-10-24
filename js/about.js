

function load() {
    document.getElementsByClassName("about")[0].appendChild(
        document.createElement("p").appendChild(
            document.createTextNode("test")
        )
    );
}