class Plinko {

    constructor(y) {

        options={'isStatic':true}

        for (var i = 50; i <= 750; i = i + 50) {
            this.body = Bodies.circle(i, y, 10,options)
            World.add(world, this.body)
        }


    }
    display() {

        for (var i = 50; i <= 750; i = i + 50) {
            ellipse(i, this.body.position.y, 10, 10)
        }

    }



}