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
    
} ) ( jQuery );
