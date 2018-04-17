function Emitter(){
    this.events = {};
}

Emitter.prototype.on = function(type, emitter){
    this.events[type] = this.events[type] || [];
    this.events[type].push(emitter);
};

Emitter.prototype.emit = function(type){
    if(this.events[type]){
        this.events[type].forEach(function(listener){
            listener();
        });
    }
};

module.exports = Emitter;