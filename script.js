
// Donor interest registration

document.getElementById("donorForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const age = Number(document.getElementById("age").value);
    const city = document.getElementById("city").value.trim();
    const organ = document.getElementById("organ").value;
    const consent = document.getElementById("consent").checked;

    const message = document.getElementById("message");

    if (!name || !city || !organ || !consent) {
        message.style.color = "red";
        message.textContent = "Please complete all required fields.";
        return;
    }

    if (!Number.isInteger(age) || age < 18 || age > 120) {
        message.style.color = "red";
        message.textContent = "Please enter a valid age of 18 or above.";
        return;
    }

    message.style.color = "green";
    message.textContent =
        "Thank you, " + name +
        "! Your demo registration has been received.";

    document.getElementById("donorForm").reset();
});


// Organ information search

function searchOrgan() {

    let input = document.getElementById("search")
        .value.toLowerCase();

    let cards = document.getElementsByClassName("organ-card");

    for (let i = 0; i < cards.length; i++) {

        let text = cards[i].innerText.toLowerCase();

        if (text.includes(input)) {
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";
        }
    }
}
