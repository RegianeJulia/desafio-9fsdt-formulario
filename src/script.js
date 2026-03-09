const form = document.getElementById("groupForm");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const nameInputs = document.querySelectorAll(".name");
    let names = [];
    nameInputs.forEach(input => {
        if (input.value.trim() !== "") {
            names.push(input.value);
        }
    });

    const message = document.getElementById("message").value;


    fetch("https://69ab4e43e051e9456fa3c226.mockapi.io/group-story", {
        method: "POST",

        headers: {
            "content-Type": "application/json"
        },

        body: JSON.stringify({
            names,
            message
        })
    })

        .then(res => {
            console.log(res);
            res.json();
        })
        .then(data => {
            alert("Enviado com sucesso!");
            form.reset();
        })
        .catch(err => console.log(err));

});
