/*
 * Copyright 2025 Tushar Kumar Sahu
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
