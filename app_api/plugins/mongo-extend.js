const mongoose = require('mongoose');
const {Schema} = mongoose;

Schema.prototype.extend = function(options){
    let self = this;

    self.add(options);

    return self;
}