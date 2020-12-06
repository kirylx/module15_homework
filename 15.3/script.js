const buttonSend = document.querySelector("#button-send");
const buttonLocation = document.querySelector("#button-location");
const inputSend = document.querySelector("input");
const messages = document.querySelector("#messages");
const addMessage = (message, me) => {
    const newDiv = document.createElement("div");
    let newMessage = "";
    if (me) {
        newMessage = `<div class="message me">
                <img
                    src="https://media-exp1.licdn.com/dms/image/C5603AQHsAhJKheFYCg/profile-displayphoto-shrink_200_200/0?e=1613001600&v=beta&t=irJjnv13fHEzlmWzdFWG8CobrGpqP1R0CY5dnsmvE60" />
                <div>
                    <p>
                        ${message}
                    </p>
                </div>
            </div>`;
    } else {
        newMessage = `<div class="message">
                <img src="https://image.flaticon.com/icons/png/512/1033/1033795.png" />
                <div>
                    <p>${message}</p>
                </div>
            </div>`;
    }
    newDiv.innerHTML = newMessage;
    messages.appendChild(newDiv);
};

document.addEventListener("DOMContentLoaded", function () {
    const websocket = new WebSocket("wss://echo.websocket.org/");

    buttonSend.addEventListener("click", () => {
        websocket.send(inputSend.value);
        addMessage(inputSend.value, true);
    });

    websocket.addEventListener("message", () => {
        addMessage(inputSend.value);
    });
});

if (!navigator.geolocation) {
    buttonLocation.classList.add("disabled");
}

buttonLocation.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const href = `<a href="https://www.openstreetmap.org/#map=18/${position.coords.latitude}/${position.coords.longitude}" target="_blank" class="badge badge-light"> Click to see where you are </a>`;
            addMessage(href);
        },
        () => {
            addMessage("Cannot find your location");
        }
    );
});
