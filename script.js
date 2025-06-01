const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const questionPrompt = document.querySelector(".question-prompt");
function handleAccept() {
    document.body.style.backgroundColor = "#fff0f5";
    document.getElementById("main-content").innerHTML = `
        <img class="gif" src="https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif" alt="gif vui mừng">
        <div style="font-size: 22px; color: #e75480; margin-top: 30px;">
            Cảm ơn ông nhiều lắm, bạn trai của tui 💕🥹💥
        </div>
    `;
}

function handleDecline() {
    document.body.style.backgroundColor = "#f8f8f8";
    document.getElementById("main-content").innerHTML = `
        <img class="gif" src="https://media.giphy.com/media/9Y5BbDSkSTiY8/giphy.gif" alt="gif buồn">
        <div style="font-size: 20px; color: #444; margin-top: 30px; white-space: pre-line;">
            Cảm ơn ông vì đã chơi trò chơi này.\n
            Xin lỗi vì đã làm mất thời gian của ông.\n
            Quên chuyện này đi nhé 😢
        </div>
    `;
}

