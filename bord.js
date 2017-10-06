//De javascript voor het genereren en laten zien van het bord.
//Parameter = groote, parent
class Bord {
    constructor(size,parent) {
        this.size = size;
        this.twee_size = size * 2;
        this.parent = parent;
    }

    maak_array() {
        this.array = []

        for (var i = 0; i < this.twee_size + 1; i++) {
            this.array[i] = []
            for (var j = 0; j < this.twee_size + 1; j++) {
                this.array[i][j] = '●';
            }
        }
        for (var x = 0; x < this.twee_size + 1; x++) {
            for (var y = 0; y < this.twee_size + 1; y++) {
                if (x % 2 === 1 && y % 2 === 1) {
                    this.array[x][y] = ' ';
                } else if ((x % 2 === 1 || y % 2 === 1)) {
                    if (x % 2 == 0) {
                        this.array[x][y] = '_';
                    } else {
                        this.array[x][y] = '|';
                    }
                }
            }

        }
        console.log(this.array);
        return true
    }

    maak_html() {
        this.maak_array();
        var a = this.array;
        var table = document.createElement("TABLE");
        for (var i = 0; i < this.twee_size + 1; i++) {
            var row = document.createElement("TR");
            for (var j = 0; j < this.twee_size + 1; j++) {
                var text = this.array[i][j]
                var t = document.createTextNode(text);
                var data = document.createElement("TD");
                if (text == "|") {
                    data.classList = 'horizontal lijn';
                } else if (text == "_") {
                    data.classList = 'vertical lijn';
                } else if (text == "●") {
                    data.classList = 'stip';
                } else {
                    data.classList = 'leeg';
                }
                data.dataset.co = [i, j];
                data.appendChild(t);
                row.appendChild(data);

            }
            table.appendChild(row);
        }
        console.log(table);
        this.table = table;
    }

    handle_klik_event(lijn) {
        console.log('Oops')
        lijn.style.backgroundColor = 'red';
        var coords = lijn.dataset.co.split(',');
        var x = coords[0];
        var y = coords[1];
        this.array[x][y] = 'K';
        this.update_bord();
        console.log(x, y);
        this.controleer_vakje(x, y)
    }
    controleer_vakje(x, y) {

    }

    maak_klik_event() {
        var that = this;
        var lijnen = document.getElementsByClassName('lijn');
        console.log(lijnen);
        for (var i = 0; i < lijnen.length; i++) {
            var lijn = lijnen[i];
            lijn.onclick = function() {
                that.handle_klik_event(this)
            };
        }
        console.log('KLikevent klaar')
    }

    update_bord() {
        console.log('update');
        this.parent.innerHTML = '';
        this.maak_html()
        this.maak_klik_event();
        this.parent.appendChild(this.table);
    }
}


b = new Bord(10,document.getElementById("game_div"));
b.update_bord();
