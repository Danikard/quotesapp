export class Quotes {  
    showDescription:boolean;
    constructor(public id:number, public author:string,public publisher:string,public name:string,public dDate:Date){ 
        this.showDescription=false;     
}

}