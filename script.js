document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll("ul li").forEach(item => {
        item.addEventListener("click", function() {
            item.classList.toggle("checked");
        });
    });
});
