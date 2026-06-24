const uiContainer = document.getElementById('ui');

// Số lượng chữ tạo thành dải lụa
const numberOfLayers = 67; 
const textContent = "🥲 i miss yu";

for (let i = 0; i < numberOfLayers; i++) {
    // 1. Tạo thẻ chạy ngang
    const horizontalDiv = document.createElement('div');
    horizontalDiv.classList.add('love_horizontal');
    horizontalDiv.style.setProperty('--i', i);

    // 2. Tạo thẻ chạy dọc (lồng bên trong thẻ ngang)
    const verticalDiv = document.createElement('div');
    verticalDiv.classList.add('love_vertical');
    verticalDiv.style.setProperty('--i', i);

    // 3. Tạo thẻ chứa chữ (lồng bên trong thẻ dọc)
    const wordDiv = document.createElement('div');
    wordDiv.classList.add('love_word');
    wordDiv.innerText = textContent;

    // Lắp ráp chúng lại với nhau
    verticalDiv.appendChild(wordDiv);
    horizontalDiv.appendChild(verticalDiv);
    uiContainer.appendChild(horizontalDiv);
}