let changeColor = document.getElementById("changeColor");

// Get stored colour, change button bg colour to that value
chrome.storage.sync.get("color", data => {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute("value", data.color);
});

// Change page bg colour to the value of the element
changeColor.onclick = element => {
  let color = element.target.value;
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    chrome.tabs.executeScript(tabs[0].id, {
      code: 'document.body.style.backgroundColor = "' + color + '";'
    });
  });
};
