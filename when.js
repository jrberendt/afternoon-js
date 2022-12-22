class _when{
    #val;
    #setFuncList = [];
    #getFuncList = [];
    constructor(v, setFuncs, getFuncs){
      	if(setFuncs){
	    for(let i=0; i<setFuncs.length; i++){
		this.addSetFunction(setFuncs[i])
	    }
	}
	if(getFuncs){
	    for(let i=0; i<getFuncs.length; i++){
		this.addGetFunction(getFuncs[i])
	    }
	}
	this.val = v
    }
    get val(){
	for(let i=0; i<this.#getFuncList.length; i++){
	    (this.#getFuncList[i])()
	}
	return this.#val
    }
    set val(x){
	this.#val = x
	for(let i=0; i<this.#setFuncList.length; i++){
	    if(this.#setFuncList[i].length === 1){
		(this.#setFuncList[i])(x)
	    }
	    else{
		(this.#setFuncList[i])()
	    }
	}
    }
    addGetFunction = function(x){
	this.#getFuncList.push(x)
    }
    addSetFunction = function(x){
	this.#setFuncList.push(x)
    }
}
function when(val, setFuncs){
    return new _when(val, setFuncs)
}
