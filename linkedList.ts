export class LinkedList {
    private dataValue: string;
    private nextNode: LinkedList | null;

    constructor(data: string){
        this.dataValue = data;
        this.nextNode = null;
    }

    public get data() {
        return this.dataValue;
    }
    
    public set data(val: string) {
        this.dataValue = val;
    }

    public get next(){
        return this.nextNode;
    }

    public set next(llist: LinkedList | null){
        this.nextNode = llist;
    }

}