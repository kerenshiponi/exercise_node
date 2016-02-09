var _ = require('underscore');


function html (content) {
	var tpl = _.template("<html><%= content %></html>");
	return tpl({content: content});	
}

function h1 (content) {
	var tpl = _.template("<h1><%= content %></h1>");
	return tpl({content: content});	
}

function p (content) {
	var tpl = _.template("<p><%= content %></p>");
	return tpl({content: content});	
}

function ul(arr) {
	var tpl = _.template(`
<ul>
<% for(var i = 0; i < arr.length; i++) { %>
<li> <%= arr[i] %> </li>
<% } %>
</ul>
`);

	return tpl({arr: arr});
}



module.exports = {
	html: html,
	h1: h1,
	p: p,
	ul: ul
};

 
