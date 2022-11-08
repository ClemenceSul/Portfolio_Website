function reveal() {
    var Treveals = document.querySelectorAll(".part_text.reveal");
    for (var i = 0; i < Treveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTopT = Treveals[i].getBoundingClientRect().top;
        var textVisible = 100;

        if (elementTopT < windowHeight - textVisible && elementTopT > textVisible) {
            Treveals[i].classList.add("active");
        } else {
            Treveals[i].classList.remove("active");
        }
    }
    var Vreveals = document.querySelectorAll(".video.reveal");
    for (var i = 0; i < Vreveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTopV = Vreveals[i].getBoundingClientRect().top;
        var videoVisible = 500;
        let height = Vreveals[i].offsetHeight;
        if (elementTopV < windowHeight - height + 500) {
            Vreveals[i].classList.add("active");
        } else {
            Vreveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);