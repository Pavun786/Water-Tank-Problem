let inputValue = document.getElementById("fieldInput");
let submitBtn = document.getElementById("submit-btn");
let table = document.getElementById("table");
let table2 = document.getElementById("table2");

const inp = document.getElementById("input");
const out = document.getElementById("output");


submitBtn.addEventListener("click", () => {
    let arr = inputValue.value.split(",").map((ele) => +ele);
    let columns = arr.length;
    let rows = Math.max(...arr);

    inp.innerText = `Input: ${inputValue.value}`; 

    let [units, totalWaterUnits] = findQuty(arr);

    console.log(units);

    if (totalWaterUnits === 0) {
        out.innerText = "Output : 0 - Units";
        return;
    } else {
        table.innerHTML = ""; 
        table2.innerHTML = "";

        out.innerText = `Output : ${totalWaterUnits} - Units`;

        for (let i = rows - 1; i >= 0; i--) {
            const row1 = document.createElement("tr");
            const row2 = document.createElement("tr");

            table.appendChild(row1); 
            table2.appendChild(row2); 

            for (let j = 0; j < columns; j++) {
                const cell1 = document.createElement("td");
                const cell2 = document.createElement("td");

                if (i < arr[j]) {
                    cell1.setAttribute("id", "wall");
                    // cell2.setAttribute("id", "wall");
                } else if (i < units[j]) {
                    cell1.setAttribute("id", "water");
                    cell2.setAttribute("id", "water");
                }

                row1.appendChild(cell1);
                row2.appendChild(cell2);
            }
        }
    }
});

function findQuty(blocks) {
    const n = blocks.length;
    const leftMax = Array(n).fill(0);
    const rightMax = Array(n).fill(0);
    const units = Array(n).fill(0);
    let totalWaterUnits = 0;

    leftMax[0] = blocks[0];
    for (let i = 1; i < n; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], blocks[i]);
    }

    rightMax[n - 1] = blocks[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], blocks[i]);
    }

    for (let i = 0; i < n; i++) {
        units[i] = Math.min(leftMax[i], rightMax[i]);
        totalWaterUnits += Math.max(units[i] - blocks[i], 0);
    }

    return [units, totalWaterUnits];
}











