self.addEventListener("fetch", function(event) {
    event.respondWitch(fetch(event.request));

})