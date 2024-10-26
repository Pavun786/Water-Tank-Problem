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

    // console.log(arr, columns, rows);
    // console.log(findQuty(arr));
   
    inp.innerText = `Input: ${[inputValue.value]}`; 

    let obj = findQuty(arr)

    console.log(obj)

    if(obj == 0){
        out.innerText = "Output : 0 - Units"
        return 0
    }
    else{

        table.innerHTML = ""; 
   
        table2.innerHTML="";

         out.innerText = `Output : ${obj[1]} - Units`
    
        for (let i = rows - 1; i >= 0; i--) {
            const row = document.createElement("tr");
            const row2 = document.createElement("tr")
           
            table.appendChild(row); 
            table2.appendChild(row2); 
    
            for (let j = 0; j < columns; j++) {
            
                let idValue = Object.keys(obj[0]).filter((ele)=> ele.includes(j))[0]
                let keyName = idValue.split("-")[0]
                let keyValue = obj[0][idValue]
        
                console.log(keyName,keyValue)
                
               const cell = document.createElement("td");
               const cell2 = document.createElement("td");
                    
                if(i<keyValue){
        
                    cell.setAttribute("id", keyName == "wall" ? "wall" : "water")
                    cell2.setAttribute("id", keyName == "water" ? "water" : null);
                 }
                   
                row.appendChild(cell);
                row2.appendChild(cell2);
                
            }
        }
        
    
            // document.body.appendChild(table);
            // document.body.appendChild(table2);


    }

    

   
});

function findQuty(arr) {
    let units = {};
    let temp = 0;
    let count = 0;

    if (arr.length <= 2) {
        return 0;
    }

    for (let i = 0; i < arr.length; i++) {
        if (i === arr.length - 1) {
            if (arr[i] === 0) {
                units[`water-${i}`] = arr[i];
            } else {
                units[`wall-${i}`] = arr[i];
            }
            break;
        }
        if (arr[i] !== 0) {
            temp = arr[i];
            units[`wall-${i}`] = arr[i];
            continue;
        }
        if (arr[i] === 0) {
            count += temp;
            units[`water-${i}`] = temp;
        }
    }

    return [units,count];
   // return count;
}










