// Override the Backbone.sync method with the following
module.exports.sync = function(method, model, options) {};

// Perform some actions before creating the Model class
module.exports.beforeModelCreate = function(config, name) {
	return config;
};

// Perform some actions after creating the Model class
module.exports.afterModelCreate = function(Model, name) {
	return Model;
};