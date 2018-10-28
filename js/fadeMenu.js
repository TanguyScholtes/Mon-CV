( function () {
    "use strict";

    $( ".menu-bar" ).hide();
    $( window ).scroll( function() {
        if ( $( window ).scrollTop() >= 300 ) {
            $( ".menu-bar" ).fadeIn( "fast" );
        } else {
            $( ".menu-bar" ).fadeOut( "fast" );
        }
    } );

    $( "#back-to-top" ).hide();
    $( window ).scroll( function() {
        if ( $( window ).scrollTop() >= 300 ) {
            $( "#back-to-top" ).fadeIn( "fast" );
        } else {
            $( "#back-to-top" ).fadeOut( "fast" );
        }
    } );

} ) ( jQuery );
