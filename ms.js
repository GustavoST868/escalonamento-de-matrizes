//class to create a matrix for operations 
class Matrix {
    //receives as a parameter the number of rows and columns of the matrix
    constructor(lines, columns) {
        this.lines = lines;
        this.columns = columns;
        this.matrix = [];
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
    
    //method to show the matrix
    async showMatrix() {
        console.log('\nMatriz:');
        //loop to traverse the lines
        for (let l = 0; l < this.lines; l++) {
            console.log(this.matrix[l].join('\t'));
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
}

//main method
async function main() {
    //elements that will be added to the matrix from left to right
    var elements = [[1,1],[2,1],[3,1],[4,1],[5,1],[6,1],[7,1],[8,1],[9,1]];
    //matrix class object
    const matrix = new Matrix(3, 3); 
    //create
    await matrix.createMatrix(elements);
    
    //divide by value
    await matrix.fractionDivision(1, 3, 1);

    //print
    await matrix.showMatrix();
}

//calls the main method
main();
