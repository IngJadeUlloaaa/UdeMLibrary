const chatBody = document.querySelector(".chat-body");
const txtInput = document.querySelector("#txtInput");
const send = document.querySelector(".send");

send.addEventListener("click", () => renderUserMessage());

txtInput.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
        renderUserMessage();
    }
});

const renderUserMessage = () => {
    const userInput = txtInput.value;
    renderMessageEle(userInput, "user");
    txtInput.value = "";
    setTimeout(() => {
        renderChatbotResponse(userInput);
        setScrollPosition();
    }, 600);
};

const renderChatbotResponse = (userInput) => {
    const res = getChatbotResponse(userInput);
    renderMessageEle(res, "chatbot");
};

const renderMessageEle = (txt, type) => {
    const messageEle = document.createElement("div");
    const txtNode = document.createTextNode(txt);

    if (type === "user") {
        messageEle.classList.add("user-message");
    } else {
        const imgEle = document.createElement("img");
        imgEle.src = "/images/logo_chatSupport.png"; // Ruta de la imagen de tu chatbot
        imgEle.style.width = "65px"; // Ajusta el tamaño de la imagen aquí 65px
        //imgEle.style.height = "65px"; // Ajusta el tamaño de la imagen aquí 65px
        imgEle.style.marginRight = "12px";
        //imgEle.style.borderRadius = "50%"
        messageEle.appendChild(imgEle);
        messageEle.classList.add("chatbot-message");
    }

    messageEle.append(txtNode);
    chatBody.append(messageEle);
};

const getChatbotResponse = (userInput) => {
    return responseObj[userInput] == undefined
        ? "Please try something else"
        : responseObj[userInput];
};

const setScrollPosition = () => {
    if (chatBody.scrollHeight > 0) {
        chatBody.scrollTop = chatBody.scrollHeight;
    }
};