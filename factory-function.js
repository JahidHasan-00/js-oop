// Factory Function:
// A factory function is a function that returns an object.

function makeBox(name, id){
    return {
        name: name,
        id: id,
        open: function(){
            // console.log(`Open the box ${this.id} of ${this.name}`);
        }
    };
}

const box = makeBox('Laptop', 1);
box.open();