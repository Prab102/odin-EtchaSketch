
//V1

//add clear
//fix box size when lower than 16px //CSS issue
//add change color ability
//add limit check


//div Container for button
const buttonCont = document.createElement('div');
buttonCont.style.display ="flex";
buttonCont.style.justifyContent ="center";
// buttonCont.style.border =" 2px solid red";
document.body.appendChild(buttonCont);

// let pixelsize = 16;
//resize button
const button = document.createElement('button');
button.textContent ="RESIZE";
buttonCont.appendChild(button);
const textfield = document.createElement('input')
textfield.setAttribute('id','user-number');
textfield.setAttribute('class','user-number');
textfield.style.border = "1px solid black";
buttonCont.appendChild(textfield);


let userVal = document.getElementById('user-number');
// button.addEventListener('click', () => {
//     var test = document.getElementsByClassName("gridContainer");
//     newsize = prompt('Enter a new value');
//     pixelsize = newsize;
//     test.innerHTML = pixelsize;
//     // document.getElementById()
//     // console.log(pixelsize);

// });
//Grid container
    // console.log(pixelsize);
    var container1 = document.createElement('div');
    container1.classList.add('gridContainer');
    // container1.style.border ="2px solid orange";
    container1.style.display ="flex";
    container1.style.flexDirection ="column";
    container1.style.marginTop ="100px";
    container1.style.height ="640px";
    container1.style.alignItems ="center";
    document.body.appendChild(container1);

// let containerdiv = document.querySelector('gridContainer')
// makegrid();
function makegrid(){
    //creates grid using flexboxes
    let pixelsize = userVal.value ;
    userVal.value ="";
    container1.innerHTML ="";
    if(pixelsize == 0 || pixelsize > 99 || pixelsize == ""){

        for(let i = 0; i<16 ; i++){
            //creates element row
            const row = document.createElement('div');
            row.classList.add("row");
            //  container.style.border ="2px solid red";
            row.style.display ="flex"; 
            row.style.width =" 700px";
            row.style.height =" 40px";
            row.style.justifyContent ="center";
            container1.appendChild(row);

            //grid squares
            for(let i =0; i< 16; i++){
                
                var grid = document.createElement('div');
                grid.classList.add('grid');
                grid.style.flex ="1";
                // grid.style.height ="40px";    //square sizes
                // grid.style.width ="40px";
                grid.style.border = '.5px solid black';
                row.appendChild(grid);

            }

        }
    }
    else{
        
        for(let i = 0; i<pixelsize ; i++){
            //creates element row
            const row = document.createElement('div');
            row.classList.add("row");
            //  container.style.border ="2px solid red";
            row.style.display ="flex"; 
            row.style.width =" 700px";
            row.style.height =" 40px";
            row.style.justifyContent ="center";
            container1.appendChild(row);

            //grid squares
            for(let i =0; i< pixelsize; i++){
                
                var grid = document.createElement('div');
                grid.classList.add('grid');
                grid.style.flex ="1";
                // grid.style.height ="40px";    //square sizes
                // grid.style.width ="40px";
                grid.style.border = '.5px solid black';
                row.appendChild(grid);

            }

        }

    }

//change background color using hover event

    const square = document.querySelectorAll('.grid');

    square.forEach((block) => {
        block.addEventListener('mouseover', () => {
            block.style.backgroundColor = "red";

        });

    });

}
makegrid();
button.addEventListener('click', () => {
    // var test = document.getElementsByClassName("gridContainer");
    // newsize = prompt('Enter a new value');
    // pixelsize = newsize;
    makegrid();

});

