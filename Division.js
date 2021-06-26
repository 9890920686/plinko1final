class Division {

    constructor() {

        var options = {'isStatic': true}

        for (var i = 0; i <= width; i = i + 80) {
            this.body = Bodies.rectangle(i, 700, 10, 200, options)
            World.add(world, this.body)
        }

        

    }

    display() {





        for (var i = 0; i <= width; i = i + 80){
            rectMode(CENTER)
            rect(i, this.body.position.y, 10, 300)
        }

           

    }
}