const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const questionPrompt = document.querySelector(".question-prompt");

// Khi click vào nút "Được"
yesBtn.addEventListener("click", () => {
  question.innerHTML = "Cảm ơn, cảm ơn ông nhiều lắm 🥺";
  gif.src = "https://media.giphy.com/media/vvc1dJPLEU2QOw9cXy/giphy.gif"; // Hoặc thay ảnh khác nếu muốn

  yesBtn.style.display = "none";
  noBtn.style.display = "none";
  questionPrompt.style.display = "none";
});

// Khi rê chuột vào nút "Không", nó chạy lung tung
noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.position = "absolute";
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});

// Nếu bạn ấy click được vào nút "Không"
noBtn.addEventListener("click", () => {
  question.innerHTML =
    "Cảm ơn đã trả lời câu hỏi của tui. Xin lỗi vì đã làm tốn thời gian của ông. Quên chuyện này đi nhé.";
  gif.src = "https://media.giphy.com/media/5GoVLqeAOo6PK/giphy.gif"; // Ảnh buồn buồn

  yesBtn.style.display = "none";
  noBtn.style.display = "none";
  questionPrompt.style.display = "none";
});
