const rowCount = 20;
const columnCount = 10;
const container = document.querySelector(".container");
let activeElementnum1  = null;
let activeElementnum2  = null;
let activeElementnum3  = null;
let activeElementnum4  = null;
let item = 1;
let num = 1;
let result = "item " + `${item}` + "num " + `${num}`;
let obj = {};
const arr = [];
let checker = true;
let checkingnum = 90;
let index = Math.round(Math.random() * 4);
for(let i = 0; i < rowCount;i++) {
    for(let j = 0;j < columnCount;j++) {
        let element = document.createElement("div");
        element.classList.add("kubik");
        container.append(element);
        element.dataset.number = i * columnCount + j;
        if(index === 0) {
            activeElementnum1 = 4;
            activeElementnum2 = activeElementnum1 + 8;
            activeElementnum3 = activeElementnum1 + 9;
            activeElementnum4 = activeElementnum1 + 10;
            if(element.dataset.number === `${activeElementnum1}` || element.dataset.number === `${activeElementnum2}` || element.dataset.number === `${activeElementnum3}` || element.dataset.number === `${activeElementnum4}`) {
                element.classList.add("type1");       
            } 
            
        } else if(index === 1) {
            activeElementnum1 = 5;
            activeElementnum2 = activeElementnum1 + 9;
            activeElementnum3 = activeElementnum1 + 10;
            activeElementnum4 = activeElementnum1 + 11;
            if(element.dataset.number === `${activeElementnum1}` || element.dataset.number === `${activeElementnum2}` || element.dataset.number === `${activeElementnum3}` || element.dataset.number === `${activeElementnum4}`) {
                element.classList.add("type2");       
            } 
            
        } else if(index === 2) {
            activeElementnum1 = 4;
            activeElementnum2 = activeElementnum1 + 10;
            activeElementnum3 = activeElementnum1 + 11;
            activeElementnum4 = activeElementnum1 + 12;
            if(element.dataset.number === `${activeElementnum1}` || element.dataset.number === `${activeElementnum2}` || element.dataset.number === `${activeElementnum3}` || element.dataset.number === `${activeElementnum4}`) {
                element.classList.add("type3");       
            } 
            
        } else if(index === 3) {
            activeElementnum1 = 4;
            activeElementnum2 = activeElementnum1 + 10;
            activeElementnum3 = activeElementnum1 + 1;
            activeElementnum4 = activeElementnum1 + 11;
            if(element.dataset.number === `${activeElementnum1}` || element.dataset.number === `${activeElementnum2}` || element.dataset.number === `${activeElementnum3}` || element.dataset.number === `${activeElementnum4}`) {
                element.classList.add("type4");       
            } 
            
        } else if(index === 4) {
            activeElementnum1 = 5;
            activeElementnum2 = activeElementnum1 - 1;
            activeElementnum3 = activeElementnum1 + 1;
            activeElementnum4 = activeElementnum1 + 2;
            if(element.dataset.number === `${activeElementnum1}` || element.dataset.number === `${activeElementnum2}` || element.dataset.number === `${activeElementnum3}` || element.dataset.number === `${activeElementnum4}`) {
                element.classList.add("type5");       
            }  
        }       
          
        
    }
}


document.body.addEventListener("keydown", (event) => {
    
    
    let activElement1 = document.querySelector(`div[data-number ="${activeElementnum1}"]`)
    let activElement2 = document.querySelector(`div[data-number ="${activeElementnum2}"]`)
    let activElement3 = document.querySelector(`div[data-number ="${activeElementnum3}"]`)
    let activElement4 = document.querySelector(`div[data-number ="${activeElementnum4}"]`)
    
    if(event.key === "ArrowDown" && activeElementnum2 < 190 && !arr.includes(activeElementnum2 + columnCount)  && !arr.includes(activeElementnum4 + columnCount)) {
        const nextElement1 = document.querySelector(`div[data-number ="${activeElementnum1 + columnCount}"]`)
        const nextElement2 = document.querySelector(`div[data-number ="${activeElementnum2 + columnCount}"]`)
        const nextElement3 = document.querySelector(`div[data-number ="${activeElementnum3 + columnCount}"]`)
        const nextElement4 = document.querySelector(`div[data-number ="${activeElementnum4 + columnCount}"]`)
        if(index === 0) {
            activElement1.classList.remove("type1");
            activElement2.classList.remove("type1");
            activElement3.classList.remove("type1");
            activElement4.classList.remove("type1");
            nextElement1.classList.add("type1");
            nextElement2.classList.add("type1");
            nextElement3.classList.add("type1");
            nextElement4.classList.add("type1");
        } else if(index === 1) {
            activElement1.classList.remove("type2");
            activElement2.classList.remove("type2");
            activElement3.classList.remove("type2");
            activElement4.classList.remove("type2");
            nextElement1.classList.add("type2");
            nextElement2.classList.add("type2");
            nextElement3.classList.add("type2");
            nextElement4.classList.add("type2");
        } else if(index === 2) {
            activElement1.classList.remove("type3");
            activElement2.classList.remove("type3");
            activElement3.classList.remove("type3");
            activElement4.classList.remove("type3");
            nextElement1.classList.add("type3");
            nextElement2.classList.add("type3");
            nextElement3.classList.add("type3");
            nextElement4.classList.add("type3");
        } else if(index === 3) {
            activElement1.classList.remove("type4");
            activElement2.classList.remove("type4");
            activElement3.classList.remove("type4");
            activElement4.classList.remove("type4");
            nextElement1.classList.add("type4");
            nextElement2.classList.add("type4");
            nextElement3.classList.add("type4");
            nextElement4.classList.add("type4");
        } else if(index === 4) {
            activElement1.classList.remove("type5");
            activElement2.classList.remove("type5");
            activElement3.classList.remove("type5");
            activElement4.classList.remove("type5");
            nextElement1.classList.add("type5");
            nextElement2.classList.add("type5");
            nextElement3.classList.add("type5");
            nextElement4.classList.add("type5");
        } 
        
        activeElementnum1 = activeElementnum1 + columnCount;
        activeElementnum2 = activeElementnum2 + columnCount;
        activeElementnum3 = activeElementnum3 + columnCount;
        activeElementnum4 = activeElementnum4 + columnCount;
        
    }
    if(activeElementnum2 >= 190 || arr.includes(activeElementnum2 + columnCount) || arr.includes(activeElementnum3 + columnCount) || arr.includes(activeElementnum4 + columnCount)) {
        obj[result] = activeElementnum1;
        num += 1;
        result = "item " + `${item}` + "num " + `${num}`
        obj[result] = activeElementnum2;
        num += 1;
        result = "item " + `${item}` + "num " + `${num}`
        obj[result] = activeElementnum3;
        num += 1;
        result = "item " + `${item}` + "num " + `${num}`
        obj[result] = activeElementnum4;
        for(let i = 0; i < Object.values(obj).length;i++) {
            arr.push(Object.values(obj)[i]);
        }
        console.log(arr);
        num = 1;
        result = "item " + `${item}` + "num " + `${num}`
        obj = {};
        index = Math.round(Math.random() * 4);
        console.log(index);
        if(index === 0) {
            activeElementnum1 = 4;
            activeElementnum2 = activeElementnum1 + 8;
            activeElementnum3 = activeElementnum1 + 9;
            activeElementnum4 = activeElementnum1 + 10;
        } else if(index === 1) {
            activeElementnum1 = 5;
            activeElementnum2 = activeElementnum1 + 9;
            activeElementnum3 = activeElementnum1 + 10;
            activeElementnum4 = activeElementnum1 + 11;
        } else if(index === 2) {
            activeElementnum1 = 4;
            activeElementnum2 = activeElementnum1 + 10;
            activeElementnum3 = activeElementnum1 + 11;
            activeElementnum4 = activeElementnum1 + 12; 
        } else if(index === 3) {
            activeElementnum1 = 4;
            activeElementnum2 = activeElementnum1 + 10;
            activeElementnum3 = activeElementnum1 + 1;
            activeElementnum4 = activeElementnum1 + 11; 
        } else if(index === 4) {
            activeElementnum1 = 5;
            activeElementnum2 = activeElementnum1 - 1;
            activeElementnum3 = activeElementnum1 + 1;
            activeElementnum4 = activeElementnum1 + 2; 
        }     
        activElement1 = document.querySelector(`div[data-number ="${activeElementnum1}"]`)
        activElement2 = document.querySelector(`div[data-number ="${activeElementnum2}"]`)
        activElement3 = document.querySelector(`div[data-number ="${activeElementnum3}"]`)
        activElement4 = document.querySelector(`div[data-number ="${activeElementnum4}"]`)
    }
    if(event.key === "ArrowLeft" && activeElementnum2 % 10 !== 0 && !arr.includes(activeElementnum2 - 1)) {
        const nextElement1 = document.querySelector(`div[data-number ="${activeElementnum1 - 1}"]`)
        const nextElement2 = document.querySelector(`div[data-number ="${activeElementnum2 - 1}"]`)
        const nextElement3 = document.querySelector(`div[data-number ="${activeElementnum3 - 1}"]`)
        const nextElement4 = document.querySelector(`div[data-number ="${activeElementnum4 - 1}"]`)
        if(index === 0) {
            activElement1.classList.remove("type1");
            activElement2.classList.remove("type1");
            activElement3.classList.remove("type1");
            activElement4.classList.remove("type1");
            nextElement1.classList.add("type1");
            nextElement2.classList.add("type1");
            nextElement3.classList.add("type1");
            nextElement4.classList.add("type1");
        } else if(index === 1) {
            activElement1.classList.remove("type2");
            activElement2.classList.remove("type2");
            activElement3.classList.remove("type2");
            activElement4.classList.remove("type2");
            nextElement1.classList.add("type2");
            nextElement2.classList.add("type2");
            nextElement3.classList.add("type2");
            nextElement4.classList.add("type2");
        } else if(index === 2) {
            activElement1.classList.remove("type3");
            activElement2.classList.remove("type3");
            activElement3.classList.remove("type3");
            activElement4.classList.remove("type3");
            nextElement1.classList.add("type3");
            nextElement2.classList.add("type3");
            nextElement3.classList.add("type3");
            nextElement4.classList.add("type3");
        } else if(index === 3) {
            activElement1.classList.remove("type4");
            activElement2.classList.remove("type4");
            activElement3.classList.remove("type4");
            activElement4.classList.remove("type4");
            nextElement1.classList.add("type4");
            nextElement2.classList.add("type4");
            nextElement3.classList.add("type4");
            nextElement4.classList.add("type4");
        } else if(index === 4) {
            activElement1.classList.remove("type5");
            activElement2.classList.remove("type5");
            activElement3.classList.remove("type5");
            activElement4.classList.remove("type5");
            nextElement1.classList.add("type5");
            nextElement2.classList.add("type5");
            nextElement3.classList.add("type5");
            nextElement4.classList.add("type5");
        } 
        activeElementnum1 = activeElementnum1 - 1;
        activeElementnum2 = activeElementnum2 - 1;
        activeElementnum3 = activeElementnum3 - 1;
        activeElementnum4 = activeElementnum4 - 1;
    }
    if(event.key === "ArrowRight" && (activeElementnum4 - 9) % 10 !== 0 && !arr.includes(activeElementnum4 + 1)) {
        const nextElement1 = document.querySelector(`div[data-number ="${activeElementnum1 + 1}"]`)
        const nextElement2 = document.querySelector(`div[data-number ="${activeElementnum2 + 1}"]`)
        const nextElement3 = document.querySelector(`div[data-number ="${activeElementnum3 + 1}"]`)
        const nextElement4 = document.querySelector(`div[data-number ="${activeElementnum4 + 1}"]`)
        if(index === 0) {
            activElement1.classList.remove("type1");
            activElement2.classList.remove("type1");
            activElement3.classList.remove("type1");
            activElement4.classList.remove("type1");
            nextElement1.classList.add("type1");
            nextElement2.classList.add("type1");
            nextElement3.classList.add("type1");
            nextElement4.classList.add("type1");
        } else if(index === 1) {
            activElement1.classList.remove("type2");
            activElement2.classList.remove("type2");
            activElement3.classList.remove("type2");
            activElement4.classList.remove("type2");
            nextElement1.classList.add("type2");
            nextElement2.classList.add("type2");
            nextElement3.classList.add("type2");
            nextElement4.classList.add("type2");
        } else if(index === 2) {
            activElement1.classList.remove("type3");
            activElement2.classList.remove("type3");
            activElement3.classList.remove("type3");
            activElement4.classList.remove("type3");
            nextElement1.classList.add("type3");
            nextElement2.classList.add("type3");
            nextElement3.classList.add("type3");
            nextElement4.classList.add("type3");
        } else if(index === 3) {
            activElement1.classList.remove("type4");
            activElement2.classList.remove("type4");
            activElement3.classList.remove("type4");
            activElement4.classList.remove("type4");
            nextElement1.classList.add("type4");
            nextElement2.classList.add("type4");
            nextElement3.classList.add("type4");
            nextElement4.classList.add("type4");
        } else if(index === 4) {
            activElement1.classList.remove("type5");
            activElement2.classList.remove("type5");
            activElement3.classList.remove("type5");
            activElement4.classList.remove("type5");
            nextElement1.classList.add("type5");
            nextElement2.classList.add("type5");
            nextElement3.classList.add("type5");
            nextElement4.classList.add("type5");
        } 
        activeElementnum1 = activeElementnum1 + 1;
        activeElementnum2 = activeElementnum2 + 1;
        activeElementnum3 = activeElementnum3 + 1;
        activeElementnum4 = activeElementnum4 + 1;
    }
});