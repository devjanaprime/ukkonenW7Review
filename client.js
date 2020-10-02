$( document ).ready( onReady );

let inventory = [];

function onReady(){
    $( '#addItemButton' ).on( 'click', addItem );
    $( '#searchButton' ).on( 'click', search );
    displayIventory();
} // end onReady

function addItem(){
    console.log( 'in addItem' );
    // get user input and place it into an object
    let newItem = {
        size: $( '#sizeIn' ).val(),
        color: $( '#colorIn' ).val(),
        description: $( '#descriptionIn' ).val(),
    }
    console.log( 'newItem:', newItem );
    // push this new item into our inventory array
    inventory.push( newItem );
    displayIventory();
} // end addItem

function displayIventory(){
    console.log( 'in displayIventory' );
    // target the output element by id
    let el = $( '#inventoryOut' );
    // empty el
    el.empty();
    // loop through inventory
    for( let i=0; i< inventory.length; i ++ ){
        // display each item on the DOM
        el.append( `<li>${ inventory[ i ].size }, ${ inventory[ i ].color }:
        ${ inventory[ i ].description }</li>`)
    } //end for
} // end displayIventory

function search(){
    console.log( 'in search' );
    // our matches array
    let matches = [];
    // get search input
    console.log( 'searching for:', $( '#sizeSearchIn' ).val(), $( '#colorSearchIn' ).val() );
    // loop through inventory
    for( let i=0; i<inventory.length; i++ ){
        // search for matches
        if( inventory[ i ].size === $( '#sizeSearchIn' ).val() && inventory[ i ].color === $( '#colorSearchIn' ).val() ){
            console.log( 'match found:', inventory[ i ] );
            // push match into matches
            matches.push( inventory[ i ] );
        } // end match
    } // end for
    console.log( 'matches:', matches );
    // display matches on the DOM
    let el = $( '#matchesOut' );
    el.empty();
    // loop through matches and display on DOM
    for( let i=0; i< matches.length; i++ ){
        el.append( `<li>${ matches[i].description }</li>`);
    }

} // end search