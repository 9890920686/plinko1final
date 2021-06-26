class Particles {

    constructor() {

        var options = {'restitution': 0.4 }

        var px = Math.round(random(20, 980))
        var py = 100


        this.body = Bodies.circle(px, py, 10, options)
        this.color = color(random(0, 255), random(0, 255), random(0, 255))

        World.add(world, this.body)

    }
    display() {

        
        var posx = this.body.position.x
        var posy = this.body.position.y
        push();

        translate(posx,posy)
        rotate(this.body.angle)

        fill(this.color)
        ellipseMode(RADIUS)
        ellipse(0,0,10,10)

        pop();

        
        }

    }

