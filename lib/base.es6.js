class Base {
	constructor(){
		this.events = {}
	}
	on(event,fn){
		(this.events[event] = this.events[event] || []) //判断events里面有没有event,如果没有就新建并赋值为数组，然后对数组进行push
		.push(fn)
	}
	trigger(event,value){
		(this.events[event] || []) //events里面有没有event,如果没有就新建并赋值为数组
		.forEach((fn)=>{   //然后遍历里面的函数，然后执行函数
			fn.call(this,value)
		})
	}
}

module.exports = Base