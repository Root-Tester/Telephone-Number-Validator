onload = () => {
    const input = document.getElementById("user-input")
    const result = document.getElementById("results-div");
    const check = document.getElementById("check-btn");
    const clear = document.getElementById("clear-btn");

    const checkValidateUserInput = (input) => {
        if (input === "") {
            alert("Please provide a phone number");
            return
        }

        //RegExp to validate input  
        const countryCode = `^(1\\s?)?`;
        const areaCode = `(\\([0-9]{3}\\)|[0-9]{3})`;
        const spacesDashes = `[\\s\\-]?`;
        const Number = `[0-9]{3}[\\s\\-]?[0-9]{4}$`;
        const phoneRegExp = new RegExp(`${countryCode}${areaCode}${spacesDashes}${Number}`);

        if (phoneRegExp.test(input)) {
            result.innerHTML += `<p class="valid"> Valid US number: ${input} <p>`
        } else {
            result.innerHTML += `<p class="invalid"> Invalid US number: ${input} <p>`;
        }

    }

    check.addEventListener("click",()=>{
        checkValidateUserInput(input.value);
        input.value = "";
    })

    input.addEventListener("keydown", event => {
        if (event.key === "Enter") {
            checkValidateUserInput(input.value);
            input.value = "";
        }
    })

    clear.addEventListener("click", event => {
        result.innerHTML = "";
    });

}