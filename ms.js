//class to create a matrix for operations 
class Matrix {
    //receives as a parameter the number of rows and columns of the matrix
    constructor(lines, columns) {
        this.lines = lines;
        this.columns = columns;
        this.matrix = [];
        this.copy = [lines];
    }

    //method to create the matrix
    async createMatrix(elements) {
        var index = 0;
        //go through the lines of the matrix
        for (var l = 0; l < this.lines; l++) {
            let line = [];
            //go through the columns of the matrix
            for (var c = 0; c < this.columns; c++) {
                line.push(elements[index]);
                index++;
            }
            //add the row to the matrix
            this.matrix.push(line);
        }
    }
    
    async showMatrix() {
        console.log('\nMatriz:');
       
        for (let l = 0; l < this.lines; l++) {
            let numerator = this.matrix[l][0];
            let denominator = this.matrix[l][1];
            if ( denominator === 0 || denominator === 1) {
                console.log(numerator.join('\t'));
            } else {
                console.log(numerator.join('\t') + '/' + denominator.join('\t'));
            }
        }
        console.log('\n');
    }
    
    
    
    
    

    //method to multiply two values
    async multiplicationTwoElements(n1, n2) {
        let number = n2 * n1;
        return number;
    }



    //method to divide an entire now of the matrix and simplify the values
    async fractionDivision(number_line, division_number_top, division_number_bottom) {
        //dividing the values
        for (let i = 0; i < this.lines; i++) {
            let element = this.matrix[number_line][i];
            element[0] = await this.multiplicationTwoElements(element[0], division_number_bottom);
            element[1] = await this.multiplicationTwoElements(element[1], division_number_top);

            //sets the top and bottom values to 1 if they are equal
            if(element[0]===element[1]){
                element[0]=1;
                element[1]=1;
            }

            //obtains the largest value of the fraction being the denominator or numerator
            var bigger;
            if(element[0]> element[1]){
                    bigger = element[0];
            }else{
                    bigger = element[1];
            }

            //divide if they are divisible by the same value
            for(let i=0;i<bigger;i++){
                if(element[0]%i===0 && element[1]%i===0){
                    element[0] = element[0]/i;
                    element[1] = element[1]/i;
                }
            }
            }
    }

    //sum of two fractions
    async fractionSum(number_line, sum_number_top, sum_number_bottom) {
        //cycles through the element of the lines
        for (let i = 0; i < this.lines; i++) {
            //get each element
            let element = this.matrix[number_line][i];
            //sum
            element[0]= await this.multiplicationTwoElements(element[0],sum_number_bottom)+ await this.multiplicationTwoElements(element[1],sum_number_top);
            element[1]= await this.multiplicationTwoElements(element[1],sum_number_bottom);
        }
    }

    async fractionMutiplication(number_line, multiplication_number_top, multiplication_number_bottom) {
        //cycles through the element of the lines
        for (let i = 0; i < this.lines; i++) {
            //get each element
            let element = this.matrix[number_line][i];
            element[0] = await this.multiplicationTwoElements(element[0],multiplication_number_top);
            element[1] = await this.multiplicationTwoElements(element[1],multiplication_number_bottom);
        }
    }

    async firstBasicOperation(multiplication_number_line, multiplication_number_top, multiplication_number_bottom,sum_number_line) {
        // Create a deep copy of the row
        this.copy = Array.from(this.matrix[multiplication_number_line], arr => [...arr]);
        
        for (let i = 0; i < this.lines; i++) {
             let element = this.copy[i];
             element[0] = await this.multiplicationTwoElements(element[0],multiplication_number_top);
             element[1] = await this.multiplicationTwoElements(element[1],multiplication_number_bottom);
        }

         //cycles through the element of the lines
         for (let i = 0; i < this.lines; i++) {
            //get each element
            let element = this.matrix[sum_number_line][i];
            //sum
            element[0]= await this.multiplicationTwoElements(element[0],this.copy[i][1])+ await this.multiplicationTwoElements(element[1],this.copy[i][0]);
            element[1]= await this.multiplicationTwoElements(element[1],this.copy[i][1]);
        }



         //changes to 1 if the numerator equals the denominator
         for(let lines = 0; lines < this.lines; lines++){
            for (let i = 0; i < this.lines; i++) {
                //get each element
                let element = this.matrix[lines][i];
                if(element[0] === element[1]){
                    element[0] = 1
                    element[1] = 1;
                }
            }
         }
        
            
    }

}

//main method
async function main() {
    /*
    the number of rows and columns must be changed along with the elements
    vector for the algorithm to work
    */
    //elements that will be added to the matrix from left to right
    var elements = [[1,1],[2,1],[3,1],[4,1],[5,1],[6,1],[7,1],[8,1],[9,1]];
    //matrix class object
    const matrix = new Matrix(3, 3); 
    //create
    await matrix.createMatrix(elements);

    console.log('Antes das operações elementares');
    await matrix.showMatrix();

    
    //firstBasicOperation(multiplication_number_line, multiplication_number_top, multiplication_number_bottom,sum_number_line)
    await matrix.firstBasicOperation(0, -4, 1,1);

    //firstBasicOperation(multiplication_number_line, multiplication_number_top, multiplication_number_bottom,sum_number_line)
    await matrix.firstBasicOperation(0, -7, 1,2);

    await matrix.fractionDivision(1, -3, 1);

     //firstBasicOperation(multiplication_number_line, multiplication_number_top, multiplication_number_bottom,sum_number_line)
     await matrix.firstBasicOperation(1, -2, 1,0);

     //firstBasicOperation(multiplication_number_line, multiplication_number_top, multiplication_number_bottom,sum_number_line)
     await matrix.firstBasicOperation(1, 6, 1,2);
    
    console.log('Depois das operações elementares');
    
    //print
    await matrix.showMatrix();
}

//calls the main method
main();
