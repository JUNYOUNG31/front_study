interface LocalStorageAPI<T> {
    [key:string]:T
}
interface GeolocationAPI<T> {
    //어려움...
    [key:string]:T
}

class LocalStorage<T> {
    private storage : LocalStorageAPI<T> = {}
    setItem(key:string, value:T){
        this.storage[key] = value;
    }

    getItem(key:string):T {
        return this.storage[key]
    }

    clearItem(key:string){
        delete this.storage[key]
    }

    clear(){
        this.storage = {}
    }
}

const Store = new LocalStorage<string>()
Store.setItem("banana", "fruit")
console.log(Store.getItem("banana"))
