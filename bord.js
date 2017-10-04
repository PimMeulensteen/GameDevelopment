//De javascript voor het genereren van het bord.
class Bord {
    constructor(size) {
        this.size = size;
        this.twee_size = size * 2;

    }

    maak_array() {
        this.array = []

        for (var i = 0; i < this.twee_size + 1; i++) {
            this.array[i] = []
            for (var j = 0; j < this.twee_size + 1; j++) {
                this.array[i][j] = '-';
            }
        }
        for (var x = 0; x < this.twee_size + 1; x++) {
            for (var y = 0; y < this.twee_size + 1; y++) {
                if (x % 2 === 1 && y % 2 === 1) {
                    this.array[x][y] = 'x';
                } else if ((x % 2 === 1 || y % 2 === 1)) {
                    this.array[x][y] = '*';
                }
            }

        }
        console.log(this.array);
        return this.array
    }
    
    
    maak_html() {
        var a = this.maak_array();
        var table = document.createElement("TABLE");
        for (var i = 0; i < this.twee_size + 1; i++) {
            var row = document.createElement("TR");
            for (var j = 0; j < this.twee_size + 1; j++) {
                var t = document.createTextNode(this.array[i][j]);
                var data = document.createElement("TD");
                data.appendChild(t);
                row.appendChild(data);
    
            }
            table.appendChild(row);
        }
        console.log(table);
        return table;



    }
}


b = new Bord(10);
document.getElementById("game_div").appendChild(b.maak_html());
