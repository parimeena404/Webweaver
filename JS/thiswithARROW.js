const student = {
    name: "Shradha",
    marks: 90,
    prop: this,//global scope
    getName : function(){
        console.log(this);
        return this.name;
    },
    getMarks : ()=>{
        console.log(this);
        return this.name;//parent's scope window
    },
};