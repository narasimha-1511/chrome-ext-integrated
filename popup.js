document.getElementById('open').addEventListener('click', function() {
    chrome.tabs.create({ url: 'https://chat.openai.com/' });
  });