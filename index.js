/* jslint node: true */

function relativePaths( plugin ) {
	plugin.onHTML = function( $, cb ) {
		var path     = plugin.document.path();
		var relative = /^\/(?!\/)/i;

		$( '[src], [href]' ).each( function() {
			var $this = $(this);
			var attr  = ( this.attribs.src !== undefined ? 'src' : 'href' );
			var url   = $this.attr( attr );

			if( url.match( relative ) ) {
				$this.attr( attr, path + url );
			}
		} );

		cb();
	};
}

module.exports = relativePaths;
