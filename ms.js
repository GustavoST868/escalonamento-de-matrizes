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
    async print() {
        console.log('\n\nMatriz:');
        //loop to traverse the lines
        for (let l = 0; l < this.lines; l++) {
            console.log(this.matrix[l].join('\t'));
        }
        console.log('\n\n');
    }

    async multiplication_operation_basic(n1, n2) {
        let number = n2 * n1;
        return number;
    }

    async main_division(number_line, division_number_top, division_number_down) {
        for (let i = 0; i < this.lines; i++) {
            let element = this.matrix[number_line][i];
            console.log(element);
            element[0] = await this.multiplication_operation_basic(element[0], division_number_down);
            element[1] = await this.multiplication_operation_basic(element[1], division_number_top);
            if(element[0]===element[1]){
                element[0]=1;
                element[1]=1;
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

    
    await matrix.main_division(0, 4, 1);

    //print
    await matrix.print();
}

//calls the main method
main();
