// eslint-disable-next-line no-undef
new TwCitySelector();
( function ( $ ) {
	$( 'document' ).ready( function () {
		$( '.street' ).change( function () {
			const addr = $( this ).parent().prev();
			$( this )
				.parent()
				.children( '[name*=address]' )
				.val(
					addr.children( '.zipcode' ).val() +
						addr.children( '.county' ).val() +
						addr.children( '.district' ).val() +
						$( this ).val()
				);
		} );
		const selectors = $( '[role="tw-city-selector"]' );
		selectors.each( function () {
			const that = $( this );
			that.children( '.county, .district' ).on( 'change', function () {
				const street =
						that.children( '.street' ).length !== 0
							? that.children( '.street' ).val()
							: '',
					district = that.attr( 'data-hidden-district' )
						? ''
						: that.children( '.district' ).val();
				that.next( '[class*=address]' )
					.children( '[name*=address]' )
					.val(
						that.children( '.zipcode' ).val() +
							that.children( '.county' ).val() +
							district +
							street
					);
			} );
			if ( $( this ).attr( 'data-hidden-district' ) ) {
				$( this ).children( '.district' ).attr( 'hidden', 'hidden' );
			}
		} );
	} );
	// eslint-disable-next-line no-undef
} )( jQuery );
