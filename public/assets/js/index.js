console.log("Alive");
document.addEventListener("ready", function() {
    document.querySelectorAll('.eaten').forEach(item => {
        item.addEventListener('submit', event => {
            //handle click
        })
    })
});