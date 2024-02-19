function search() {
    var searchInput = document.getElementById('searchInput').value;
    
  
    if (searchInput.trim() !== '') {
        window.location.href = 'search-results.html?q=' + encodeURIComponent(searchInput);
    }
}
document.addEventListener("DOMContentLoaded", function () {
    var movableBox = document.getElementById("movableBox");

    movableBox.addEventListener("click", function () {
        
        window.location.href = 'result.html';
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var movableBox = document.getElementById("movableBox1");

    movableBox.addEventListener("click", function () {
        
        window.location.href = 'result.html';
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var movableBox = document.getElementById("movableBox2");

  
    movableBox.addEventListener("click", function () {
        
        window.location.href = 'https://www.cnn.com/business/markets';
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var movableBox = document.getElementById("movableBox3");

    movableBox.addEventListener("click", function () {
        
        window.location.href = 'https://www.investopedia.com/';
    });
});