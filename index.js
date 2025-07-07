
 const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".btn");
    const clearBtn = document.getElementById("clear");
    const equalsBtn = document.getElementById("equals");

    let expression = "";

    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        const value = btn.textContent;
        if (display.textContent === "0" || display.textContent === "Error") {
          expression = value;
        } else {
          expression += value;
        }
        display.textContent = expression;
      });
    });

    clearBtn.addEventListener("click", () => {
      expression = "";
      display.textContent = "0";
    });

    equalsBtn.addEventListener("click", () => {
      try {
        const result = eval(expression);
        display.textContent = result;
        expression = result.toString();
      } catch {
        display.textContent = "Error";
        expression = "";
      }
    });
