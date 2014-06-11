/* jslint node: true */

function relativePaths( document ) {
	document.on( 'plugin:html', function( plugins ) {
		var basePath = document.getPath();

		plugins.push( function( data, cb ) {
			data = data.replace( /(<[^>]+[src|href]=['"])\/(?!\/)(.*?)(['"][^>]*>)/gi, '$1' + basePath + '/$2$3' );
			cb( null, data );
		} );
	} );
}

module.exports = relativePaths;