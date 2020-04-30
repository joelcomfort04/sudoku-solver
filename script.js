document.body.onload = myJavaScript;


//currently have an issue at 353

function myJavaScript() {


                //change these into 2dArrays
                var easyBoard = ["0","8","0","0","0","0","2","0","0","0","0","0","0","8","4","0","9","0","0","0","6","3","2","0","0","1","0","0","9","7","0","0","0","0","8","0","8","0","0","9","0","3","0","0","2","0","1","0","0","0","0","9","5","0","0","7","0","0","4","5","8","0","0","0","3","0","7","1","0","0","0","0","0","0","8","0","0","0","0","4","0"];
                var mediumBoard = ["0","0","0","0","1","0","0","4","9","0","0","0","8","2","0","0","5","0","3","6","7","0","0","0","0","0","0","0","0","6","3","0","4","0","0","2","0","0","5","0","0","0","8","0","0","9","0","0","1","0","8","7","0","0","0","0","0","0","0","0","5","1","3","0","1","0","0","9","6","0","0","0","8","2","0","0","3","0","0","0","0"];
                var hardBoard = ["0","0","0","0","0","0","0","0","0","0","0","0","0","0","3","0","8","5","0","0","1","0","2","0","0","0","0","0","0","0","5","0","7","0","0","0","0","0","4","0","0","0","1","0","0","0","9","0","0","0","0","0","0","0","5","0","0","0","0","0","0","7","3","0","0","2","0","1","0","0","0","0","0","0","0","0","4","0","0","0","9"];


                //get rid of these for sure
                //can assign quad row and col classes upon dynamically creating them rather than looking up the values in these arrays
                //this will be changed!
                var col1Vals = ["sudoku-square-1", "sudoku-square-10","sudoku-square-19","sudoku-square-28", "sudoku-square-37", "sudoku-square-46", "sudoku-square-55", "sudoku-square-64","sudoku-square-73"];
                var col2Vals = ["sudoku-square-2", "sudoku-square-11","sudoku-square-20","sudoku-square-29", "sudoku-square-38", "sudoku-square-47", "sudoku-square-56", "sudoku-square-65","sudoku-square-74"];
                var col3Vals = ["sudoku-square-3", "sudoku-square-12","sudoku-square-21","sudoku-square-30", "sudoku-square-39", "sudoku-square-48", "sudoku-square-57", "sudoku-square-66","sudoku-square-75"];
                var col4Vals = ["sudoku-square-4", "sudoku-square-13","sudoku-square-22","sudoku-square-31", "sudoku-square-40", "sudoku-square-49", "sudoku-square-58", "sudoku-square-67","sudoku-square-76"];
                var col5Vals = ["sudoku-square-5", "sudoku-square-14","sudoku-square-23","sudoku-square-32", "sudoku-square-41", "sudoku-square-50", "sudoku-square-59", "sudoku-square-68","sudoku-square-77"];
                var col6Vals = ["sudoku-square-6", "sudoku-square-15","sudoku-square-24","sudoku-square-33", "sudoku-square-42", "sudoku-square-51", "sudoku-square-60", "sudoku-square-69","sudoku-square-78"];
                var col7Vals = ["sudoku-square-7", "sudoku-square-16","sudoku-square-25","sudoku-square-34", "sudoku-square-43", "sudoku-square-52", "sudoku-square-61", "sudoku-square-70","sudoku-square-79"];
                var col8Vals = ["sudoku-square-8", "sudoku-square-17","sudoku-square-26","sudoku-square-35", "sudoku-square-44", "sudoku-square-53", "sudoku-square-62", "sudoku-square-71","sudoku-square-80"];
                var col9Vals = ["sudoku-square-9", "sudoku-square-18","sudoku-square-27","sudoku-square-36", "sudoku-square-45", "sudoku-square-54", "sudoku-square-63", "sudoku-square-72","sudoku-square-81"];
                
                var quad1Vals = ["sudoku-square-1", "sudoku-square-10","sudoku-square-19","sudoku-square-2", "sudoku-square-11","sudoku-square-20","sudoku-square-3", "sudoku-square-12","sudoku-square-21"];
                var quad2Vals = ["sudoku-square-28", "sudoku-square-37", "sudoku-square-46","sudoku-square-29", "sudoku-square-38", "sudoku-square-47","sudoku-square-31", "sudoku-square-40", "sudoku-square-49"];
                var quad3Vals = ["sudoku-square-55", "sudoku-square-64","sudoku-square-73","sudoku-square-56", "sudoku-square-65","sudoku-square-74","sudoku-square-57", "sudoku-square-66","sudoku-square-75"];
                var quad4Vals = ["sudoku-square-4", "sudoku-square-13","sudoku-square-22","sudoku-square-5", "sudoku-square-14","sudoku-square-23","sudoku-square-6", "sudoku-square-15","sudoku-square-24"];
                var quad5Vals = ["sudoku-square-31", "sudoku-square-40", "sudoku-square-49","sudoku-square-32", "sudoku-square-41", "sudoku-square-50","sudoku-square-33", "sudoku-square-42", "sudoku-square-51"];
                var quad6Vals = ["sudoku-square-58", "sudoku-square-67","sudoku-square-76", "sudoku-square-59", "sudoku-square-68","sudoku-square-77","sudoku-square-60", "sudoku-square-69","sudoku-square-78"];
                var quad7Vals = ["sudoku-square-7", "sudoku-square-16","sudoku-square-25","sudoku-square-8", "sudoku-square-17","sudoku-square-26","sudoku-square-9", "sudoku-square-18","sudoku-square-27"];
                var quad8Vals = ["sudoku-square-34", "sudoku-square-43", "sudoku-square-52","sudoku-square-35", "sudoku-square-44", "sudoku-square-53","sudoku-square-36", "sudoku-square-45", "sudoku-square-54"];
                var quad9Vals = ["sudoku-square-61", "sudoku-square-70","sudoku-square-79","sudoku-square-62", "sudoku-square-71","sudoku-square-80","sudoku-square-63", "sudoku-square-72","sudoku-square-81"];
        
        
        function createBoard() {  //creates Sudoku board using input buttons
                
                
                var curButton = 1;

                

                var divCol1 = document.getElementById("col-1"); //getting the divs for each col
                var divCol2 = document.getElementById("col-2");
                var divCol3 = document.getElementById("col-3");
                var divCol4 = document.getElementById("col-4");
                var divCol5 = document.getElementById("col-5");
                var divCol6 = document.getElementById("col-6");
                var divCol7 = document.getElementById("col-7");
                var divCol8 = document.getElementById("col-8");
                var divCol9 = document.getElementById("col-9");

                
                

                for(var i=0; i<=80;i++){ //generating all 81 buttons

                        
                        var newButton = document.createElement("BUTTON");       
                        
                        newButton.setAttribute("id", "sudoku-square-" + curButton);     //setting square attributes
                        newButton.setAttribute("class", "square");


                        var isInCol1 = inTheCol(col1Vals, newButton.id);        //will change how it determines rows/cols here. Temp fix for this section
                        var isInCol2 = inTheCol(col2Vals, newButton.id);
                        var isInCol3 = inTheCol(col3Vals, newButton.id);
                        var isInCol4 = inTheCol(col4Vals, newButton.id);
                        var isInCol5 = inTheCol(col5Vals, newButton.id);
                        var isInCol6 = inTheCol(col6Vals, newButton.id);
                        var isInCol7 = inTheCol(col7Vals, newButton.id);
                        var isInCol8 = inTheCol(col8Vals, newButton.id);
                        var isInCol9 = inTheCol(col9Vals, newButton.id);

                        if(isInCol1){                                           //this will be changed too by assigning classes to the DOM elements
                                divCol1.appendChild(newButton);    
                        }if(isInCol2){
                                divCol2.appendChild(newButton);  
                        }if(isInCol3){
                                divCol3.appendChild(newButton);  
                        }if(isInCol4){
                                divCol4.appendChild(newButton);   
                        }if(isInCol5){
                                divCol5.appendChild(newButton);  
                        }if(isInCol6){
                                divCol6.appendChild(newButton);  
                        }if(isInCol7){
                                divCol7.appendChild(newButton);  
                        }if(isInCol8){
                                divCol8.appendChild(newButton);   
                        }if(isInCol9){
                                divCol9.appendChild(newButton);  
                        }

                        
                        newButton.style.height= "50px";         //setting the CSS for each square
                        newButton.style.width= "50px";
                        newButton.style.borderRadius = "6px";
                        newButton.style.fontSize = "17px";
                        newButton.innerHTML = 0;
                        setSquareColors(newButton);
                        curButton++;

                        
                
                }
        }


        //start event listeners

        function eventListeners(){              //all CTA event listeners are here (radio click and button clicks)     
                                                       

                document.querySelector("#easy-radio").addEventListener('click', radioClick);
                document.querySelector("#medium-radio").addEventListener('click', radioClick);
                document.querySelector("#hard-radio").addEventListener('click', radioClick);

                document.querySelector("#btn-clear").addEventListener('click', clearBoard); 
                document.querySelector("#btn-solve").addEventListener('click', solveBoard); // solver logic here!
                

                        
                
        }


        function addSquareClickListeners(){             //adds eventListener for every square that is generated
                var curSquare = 1;                      // this is called after the page has been loaded to ensure that all buttons have been created
                for(var i = 1; i<=81; i++){
                        var element = getSquare(curSquare);
                        element.addEventListener('click', squareClick);
                        curSquare++;
                }
        }


        function squareClick(){                 //when square is clicked brings up input prompt and checks for valid input
                id = this.id;
                var inputValid = false;

                while(!inputValid){
                        var squareInput = prompt("Enter a whole number between 1 and 9. Enter 0's for blank squares");
                        
                        if(squareInput > 0 && squareInput < 10 && (squareInput % 1 == 0)){
                                this.innerHTML = squareInput;
                                inputValid = true;
                                makeStarterSquareHybrid(this);
                                getGameValues();
                        }
                        if(squareInput == ""){
                                this.innerHTML = "0";
                                removeStarterSquareClass(this);
                                inputValid = true;
                        }
                        if(squareInput == "0"){
                                this.innerHTML = "0";
                                removeStarterSquareClass(this);
                                inputValid = true;
                        }
                } 

                getGameValues();        //after each input game values are read into the array
        }

        //end event listeners

        //CTA and general helper functions start

        function fill2dArray(arrayGetting, arraySetting){ //takes a 1d array and fills its contents into 2d array

                var row = 0;
                var col = 0;
                for(var i = 0; i < 81; i ++){
                        arraySetting[row][col] = arrayGetting[i];         
                      col++;
                      if(col > 8){
                              col = 0;
                              row++;
                      }

                }
                return arraySetting;
        }

        function sameArrays(array1, array2){    //checks to see if two arrays are the same in value
                for(var i = 0; i < array1.length; i++){
                        if(array1[i] != array2[i]){
                                return false
                        }
                }
                return true;
        }


        function make2dArray (rows, cols){ //creates a 2d array given number of rows and cols
                var arr = new Array(rows);
                for(var i = 0; i < arr.length; i++){
                        arr[i] = new Array(cols);
                }
                return arr;
        }

        function clearBoard(){  //clears board on clear button press clears array (sets all values to 0) and unchecks radio buttons
                var value = "0";

                for(i = 1;i<=81;i++){
                        var element = document.getElementById("sudoku-square-"+i);
                        element.innerHTML = value;
                        removeStarterSquareClass(element);
                        setSquareColors(element);
                }
                unCheckRadios();
                getGameValues();

        }

        

        function unCheckRadios(){       //unchecks all radio buttons
                document.getElementById('easy-radio').checked = false;
                document.getElementById('medium-radio').checked = false;
                document.getElementById('hard-radio').checked = false;
        }

        //NOTE this function will eventually be reworked to just check if the target DOM element has a COL class
        function inTheCol(array, id){                           //checks to see via element ID where the new button should be placed
                for(var i = 0; i < array.length; i++){          //does so by comparing ID to array
                        if(id == array[i]){
                                
                                return true;                    
                        }  
                }
                return false;
        }

        //NOTE this function will eventually be reworked to just check if the target DOM element has a QUAD class
        function inTheQuad(array, id){                          //checks element id to see if its in a quadrant
                for(var i = 0; i < array.length; i++){          //does so by comparing ID to array
                        if(id == array[i]){
                                
                                return true;                   
                        }  
                }
                return false;
        }

        function setSquareColors(newButton){    //sets colors of squares in a checker pattern based on which quadrant the button is in is in
                
                var isInQuad1 = inTheQuad(quad1Vals, newButton.id);
                var isInQuad3 = inTheQuad(quad3Vals, newButton.id);
                var isInQuad5 = inTheQuad(quad5Vals, newButton.id);
                var isInQuad7 = inTheQuad(quad7Vals, newButton.id);
                var isInQuad9 = inTheQuad(quad9Vals, newButton.id);

                newButton.style.cursor = "pointer";     //mouse = pointer on hover
                
                if(isInQuad1 || isInQuad3 || isInQuad5 || isInQuad7 || isInQuad9){
                        newButton.style.backgroundColor = "#383F4D";
                        newButton.style.color = "#D4D4DC";
                        
                }else{
                        newButton.style.backgroundColor = "#d4d4dc";
                        newButton.style.color = "#383F4D";  
                }
        }


        function radioClick(){                  //linked to event listener on radio buttons fills board based on sample board selected
        
                fillBoard(this.value);
                getGameValues();


        }

        function fillBoard(mode){                       //fills the board based on the selected mode.
                var curSquare = 0;
                var curSudokuSquare = 1;
                var fillValue = 0;
                if(mode == "easy"){
                        for(var i = 0; i < 81; i++){
                                fillValue = easyBoard[curSquare];
                                setAllSquareValues(curSudokuSquare, fillValue);
                                curSudokuSquare++;
                                curSquare++;
                        }
                }
                if(mode == "medium"){
        
                        for(var i = 1; i <= 81; i++){
                                fillValue = mediumBoard[curSquare];
                                setAllSquareValues(curSudokuSquare, fillValue);
                                curSudokuSquare++
                                curSquare++;
                        }
                }
                if(mode == "hard"){
                        for(var i = 1; i <= 81; i++){
                                fillValue = hardBoard[curSquare];
                                setAllSquareValues(curSudokuSquare, fillValue);
                                curSudokuSquare++
                                curSquare++;
                        }
                }
        }

        function setInnerHtmlValues(array){     //sets the innerHTML values of the button elements given a 2D array

                var row = 0;
                var col = 0;
                for(var i = 1; i < 82; i ++){
                        var element = document.getElementById("sudoku-square-"+i);
                        var value = array[row][col];
                        element.innerHTML = value;       
                      col++;
                      if(col > 8){
                              col = 0;
                              row++;
                      }

                }
        
        }

        function setAllSquareValues(square, value){                                  //sets all square values and adds the starter-square class to the starter squares
                var element = document.getElementById("sudoku-square-"+square);         //removes the starter class if it is not a starter value
                element.innerHTML = value;
                removeStarterSquareClass(element);
                element.disabled = true;
                element.style.cursor = "default";
                if(isStarterNumber(value)) {
                        makeStarterSquare(element);
                }
                
        }

        function makeStarterSquare(element){    //makes the element a starter square disables clicking no cursor pointer and adds starter-square class
                 element.disabled = true;
                 element.style.cursor = "default";
                 element.classList.add("starter-square");
        }
        function makeStarterSquareHybrid(element){    //makes the element a starter square disables clicking no cursor pointer and adds starter-square class
                element.classList.add("starter-square");
       }
        
        function getSquare(square){                     //gets desired square
                var element = document.getElementById("sudoku-square-"+square);
                return element;
                
        }
        function isStarterNumber(value){        //gets to see if the square is a starting number
                var isStarterNumber = false;
                if(value != "0"){
                        isStarterNumber = true;
                        return isStarterNumber;
                }
                return isStarterNumber;
        }

        function removeStarterSquareClass(element){             //removes the starter-square class from an element
                element.classList.remove("starter-square");
                element.style.cursor = "pointer";
                element.disabled = false;
        }

        //cta and quality of life functions end

        

        //start game logic functions


        function solveBoard(){ //this is called when the solve button is clicked
                var boardBeingSolved = getGameValues();
                if(!isValidStarter(boardBeingSolved)){
                        window.alert("Please enter in a valid board!");
                        return null;
                }else{
                        solve(boardBeingSolved);
                 }
                
        }
        function getGameValues(){       //gets all sudoku square values and places them into an array
        
                var newGameBoard = [];
                var squareCount = 1;
                

                for(i = 0; i<81; i++){
                        var square = document.getElementById("sudoku-square-" + squareCount);
                        squareCount++;
                        var value = square.innerHTML;
                        value = parseInt(value);
                        newGameBoard[i] = value     //gets square value
                                

                }

                var solverGameBoard = make2dArray(9,9);
                solverGameBoard = fill2dArray(newGameBoard, solverGameBoard);


                return solverGameBoard;

        }

        function findEmpty(bo){ //finds an empty slot in the array (a value of 0)
                for(var i =0; i < bo.length; i ++){
                        for(var j = 0; j < 9; j++){
                                if(bo[i][j] == 0){
                                        var pos = [i,j];
                                        return pos;
                                }
                        }
                        
                }

                return false;
                
        }

        function findValue(bo){ //finds a value in the starter values that is not zero
                for(var i =0; i < bo.length; i ++){
                        for(var j = 0; j < 9; j++){
                                if(bo[i][j] != 0){
                                        var pos = [i,j];
                                        return pos;
                                }
                        }
                        
                }

                return false;
                
        }

        function isValidStarter(bo){    //called to check if the starter values are correct
                var find = findValue(bo);
                if(!find){
                        return true;
                }else{
                        for(var i =0; i < bo.length; i ++){
                                for(var j = 0; j < 9; j++){
                                        if(bo[i][j] != 0){
                                                var pos = [i,j];
                                                var num = bo[pos[0]][pos[1]];
                                                var isValid = validStarterValues(bo, num, pos);
                                                if(!isValid){
                                                        return false;
                                                }
                                                
                                        }
                                }
                                
                        }
                }
                return true;
                
        }

        function valid(bo, num, pos){   //checks to see if the value being placed into the pos is a valid value (none of the same number in the quad row col)

                //checking row
                for(var i = 0; i < 9; i ++){
                        if(bo[pos[0]][i] == num && pos[1] != i){
                                return false;
                        }
                }
                //checking col
                for(var i = 0; i < bo.length; i ++){
                        if(bo[i][pos[1]] == num && pos[0] != i){
                                return false;
                        }
                }
                //checking quad
                var boxX = parseInt(pos[1]/3);
              
                var boxY = parseInt(pos[0]/3);
                

                for(var i = boxY*3; i < boxY*3+3; i++){
                        for(var j = boxX*3; j < boxX*3+3; j++){
                                var newPos = [i,j];
                                if(bo[i][j] == num && !sameArrays(newPos, pos)){
                                        return false;
                                }
                        }
                }

                return true;

        }

        function validStarterValues(bo, num, pos){      //checks to see if the values that are given upon hitting solve are actually solveable
                if(num == 0){
                        return true;
                }
                //checking row
                for(var i = 0; i < 9; i ++){
                        if(bo[pos[0]][i] == num && pos[1] != i && bo[pos[0]][i] != 0){
                                return false;
                        }
                }
                //checking col
                for(var i = 0; i < bo.length; i ++){
                        if(bo[i][pos[1]] == num && pos[0] != i && bo[i][pos[1]] != 0){
                                return false;
                        }
                }
                //checking quad
                var boxX = parseInt(pos[1]/3);
              
                var boxY = parseInt(pos[0]/3);
                

                for(var i = boxY*3; i < boxY*3+3; i++){
                        for(var j = boxX*3; j < boxX*3+3; j++){
                                var newPos = [i,j];
                                if(bo[i][j] == num && !sameArrays(newPos, pos) && bo[i][j] != 0){
                                        return false;
                                }
                        }
                }

                return true;

        }

        function solve(bo){     //solves the give 2D array board
              
                var find = findEmpty(bo);
                if(!find){
                        return true;
                }else{
                        var pos = find;
                        var row = pos[0];
                        var col = pos[1];


                }
                for(var i = 1; i < 10; i++){
                       if(valid(bo, i, pos)){
                                bo[row][col] = i;

                                if(solve(bo)){
                                        
                                        setInnerHtmlValues(bo);
                                        return true;
                                }
                                bo[row][col] = 0;
                       } 
                }
                return false;

        }


        
        //end game logic functions

    
        createBoard();
        eventListeners();
        addSquareClickListeners();
       
        

}
