const numBtn = document.querySelectorAll(".btn");
const resultAra = document.getElementById("answer");


for (let i = 0; i < numBtn.length; i++) {
    numBtn[i].addEventListener("click", function () {
        if (resultAra.value == "0" || resultAra.value == "undefined") {
            if (this.value == "AC" || this.value == "=") {
                resultAra.value = "";
            } else {
                resultAra.value = this.value;
            }
        } else {
            switch (this.value) {
                case "AC":
                    resultAra.value = "";
                    break;

                case "=":
                    resultAra.value = eval(resultAra.value);
                    break;

                default:
                    resultAra.value += this.value;
            }
        }
    });
};
