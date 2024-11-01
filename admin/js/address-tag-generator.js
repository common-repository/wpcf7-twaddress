( function ( $ ) {
	'use strict';
	// eslint-disable-next-line no-undef
	if ( typeof wpcf7 === 'undefined' || wpcf7 === null ) {
		return;
	}
	/**
	 * Extend the original composer in order not to mess up
	 * with the original taggen.
	 * Referred Contact Form 7 Conditional Fields by pwkip.
	 *
	 * {@link} https://github.com/pwkip/contact-form-7-conditional-fields/blob/master/js/scripts_admin.js
	 *
	 */
	// eslint-disable-next-line no-undef
	wpcf7.taggen = wpcf7.taggen || {};
	// eslint-disable-next-line no-undef
	const oldCompose = wpcf7.taggen.compose;
	// eslint-disable-next-line no-undef, no-unused-vars
	wpcf7.taggen.compose = function ( tagType, $form ) {
		// original behavior - use function.apply to preserve context
		let ret = oldCompose.apply( this, arguments );
		if ( 'address' === tagType ) {
			const range = $( '#tag-generator-panel-address-range' ).val(),
				exclusion = $( '#tag-generator-panel-address-exclusion' ).val();
			ret = range.length
				? [
						ret.slice( 0, -1 ),
						' "data-only:',
						range.replace( /[\n\r]/gi, ',' ),
						'"]',
				  ].join( '' )
				: ret;
			ret = exclusion.length
				? [
						ret.slice( 0, -1 ),
						' "data-except:',
						exclusion.replace( /[\n\r]/gi, ',' ),
						'"]',
				  ].join( '' )
				: ret;
		}
		return ret;
	};
	// eslint-disable-next-line no-undef
} )( jQuery );
