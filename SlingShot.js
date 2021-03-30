class SlingShot {
    constructor (bodyA ,bodyB){
    this.bodyA=bodyA
    this.bodyB=bodyB
    
        var option= {

            bodyA:this.bodyA,
            bodyB:this.bodyB,
            length:10,
            stiffness:2,
        } 

        this.body=Constraint.create(option)
        World.add(world,this.body)

    }
   display(){
    var pointA=this.body.bodyA.position
    var pointB=this.body.bodyB.position
    
line(pointA.x,pointA.y,pointB.x,pointB.y)  

   }


}