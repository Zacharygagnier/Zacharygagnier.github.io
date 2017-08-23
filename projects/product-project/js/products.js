/* global $*/

$(document).ready(function() {
	// ALL YOUR CODE GOES BELOW HERE //
$.getJSON('data/product.json', function(data){
    
   
    $('<section>')
        .attr('id', 'list-section')
        .css('background-color', 'lightblue')
        .appendTo('main');
        
    $('<div>')
        .attr('id', 'prompt-area')
        .css('background-color', 'red')
        // .addClass('flex-row')
        .css('align-items', 'center')
        .css('margin', 'auto')
        .css('height', '40px')
        .prependTo($('#list-section'));
   
    $('<ul>')
        .addClass('productList')
        .attr('id', 'itemList')
        .addClass('flex-row')
        .css('width', '70%')
        .css('list-style-type', 'none')
        .appendTo('#list-section');
        // Creating model template
    $('<div>')
        .attr('id', `modaltest`)
        .addClass('modal')
        .appendTo('body');
    $('<div>')
        .addClass('insideModal')
        .attr('id', `modalBox`)
        .appendTo($(`#modaltest`));

    $('<div>')
        .attr('id', 'modalbody')
        .addClass('flex-row')
        .appendTo($('#modalBox'));
    $('<img>')
        .attr('id', 'modalpic')
        .css('width', '251px')
        .css('height', '500px')
        .appendTo($('#modalbody'));
    $('<button>')
        .attr('id', 'addToCart')
        .text('Add to Cart')
        .appendTo($('#modalBox'));
    $('<button>')
        .attr('id', 'closeModal')
        .text('Close')
        .appendTo('#modalBox');
    $('<select>')
        .attr('id', 'filterSort')
        .css('text-align', 'center')
        .appendTo($('#prompt-area'));
    $('<div>') //creates a new description div and appends to modalbody
        .css('width', '70%')
        .css('height', '90%')
        .attr('id', 'modaldescription')
        .appendTo($('#modalbody'));
    $('<option>')
        .text('All')
        .appendTo($('#filterSort'));
    $('<input>')
        .attr('type', 'text')
        .attr('name', 'searchProducts')
        .attr('id', 'searchBox')
        .attr('placeholder', 'Search')
        .appendTo($('#prompt-area'));
    $('<button>')
        .attr('type', 'submit')
        .attr('id', 'search')
        .css('text-align', 'center')
        .css('margin', 'auto')
        .text('Search')
        .appendTo($('#prompt-area'));
    $('<button>')
        .attr('type', 'button')
        .attr('id', 'cartButton')
        .css('height', '100%')
        .css('float', 'right')
        .text('View Cart')
        .appendTo($('#prompt-area'));
    $('<div>')
        .addClass('modal')
        .attr('id', 'cartModal')
        .appendTo($('body'));
    $('<div>')
        .addClass('insideModal')
        .attr('id', 'cartModalInside')
        .appendTo($('#cartModal'));
    $('<ul>')
        .attr('id', 'cartList')
        .html('<b> Items in your cart: </b>')
        .appendTo($('#cartModalInside'));
        
    // var totalCost = 0;
    // $('<div>')
    //     .attr('id', 'totalCostDiv')
    //     .html(`<b>Cart Total:</b> $${totalCost}`)
    //     .appendTo($('#cartModalInside'));
        
    data.reduce(function(prev,current,i){ //search for types and make dropdown
      return !prev.includes(current.type) ? prev.concat(current.type) : prev;
    }, []).forEach(function(e,i,a){
        $('<option>')
            .text(e[0].toUpperCase() + e.slice(1))
            .appendTo($('#filterSort'));
    });

 
    $('body')
        .css('background-color', 'rgb(255,160,122)');

 var populatePage = function(arr){
        arr.forEach(function(e,i,a){
        $('<li>')
            .attr('id', e.id)
            .addClass('product')
            .appendTo($('#itemList'));
        $('<div>')
            .html(`<b>Stock:</b> <strong>${e.stock < 10 ? 'ONLY ' + e.stock + ' LEFT!!': e.stock}</strong>`)
            .addClass('item_stock')
            .appendTo($(`#${e.id}`));
        $('<div>')
            .html(`<b>Price:</b> $${e.price}`)
            .addClass('item_price')
            .appendTo($(`#${e.id}`));
        $('<div>')
            .html(`<b>Description:</b> ${e.desc.length > 110 ? e.desc.slice(0,107) + '...' : e.desc}`)
            .addClass('item_desc')
            .appendTo(`#${e.id}`);
        $('<img>')
              .attr('src', 'img/product/thumbs/' + e.image)
              .addClass('productImage')
              .prependTo($(`#${e.id}`));
    });
 };
 
 
 

   var modalCss = function(){
    $('.modal')
        .css({
    'display': 'none', 
    'position': 'fixed', 
    'z-index': '1', 
    'left': '0',
    'top': '0',
    'width': '100%',
    'height': '100%',
    'overflow': 'auto',
    'background-color': 'rgb(0,0,0)',
    'background-color': 'rgba(0,0,0,0.4)'
});

    $('.insideModal')
        .css({
    'background-color': '#fefefe',
    'margin': '15% auto', /* 15% from the top and centered */
    'padding': '20px',
    'border': '1px solid #888',
    'width': '80%' /* Could be more or less, depending on screen size */
});
};
   var refreshFunctions = function(){
    var currentModal;
    $('.product').on("click", function(event){
        data.forEach(function(e,i,a){  //When a product is clicked this looks up it's position by ID
            if (e.id.toString() === event.currentTarget.id.toString()){
                currentModal = data[i];
                return;
            }
        });
        var approvedKeys = ['desc', 'price', 'color', 'availableColors', 'specs', 'stock'];
        for (var key in currentModal){
        if (approvedKeys.includes(key)){ //This creates a <p> for everything in object and appends
            $('<p>')
                .html(`<b>${key[0].toUpperCase()+key.slice(1)}:</b> ${currentModal[key]}`)
                .appendTo($('#modaldescription'));
        }
        }
        $('#modalpic').attr('src', `img/product/${currentModal.image}`);
        modalCss();
      $('#modaltest').css('display', 'inline');
    });
    
    $('#addToCart').on('click', function(event){
        // totalCost += currentModal.price;
        // $('#totalCostDiv')
        //     .html(`<b>Cart Total:</b> $${totalCost}`);
        $('<li>')
            .addClass('flex-row')
            .css('height', '10%')
            .css('width', '90%')
            .attr('cost', `${currentModal.price}`)
        .append($('<img>')
            .attr('src', `img/product/thumbs/${currentModal.image}`)
            .css('width', '20%')
            .css('height', '20%'))
        .append($('<p>')
            .text(currentModal.desc))
        .append($('<div>')
            .text(`$${currentModal.price}`))
        .append($('<button>')
            .addClass('removeButton')
            .text('Remove from Cart'))
        .appendTo('#cartList');
        
        $('.removeButton').on('click', function(event){
            var costRemove = $(event.target).parent().attr('cost');
            console.log(costRemove);
              // totalCost -= $(event.target).parent().getAttribute('cost');
            $(event.target).parent().remove();
    });
        
        
    });
    
    
    
    $('#cartButton').on('click', function(event){
        $('#cartModal').css('display', 'inline');
    });
    
    $('#closeModal').on('click', function(event){
        $('#modaldescription').empty();
        $('#modaltest').css('display', 'none');
    });
    
    window.onclick = function(event) {
    if (event.target.id === 'modaltest') {
        $('#modaldescription').empty();
        $('#modaltest').css('display', 'none');
    } else if (event.target.id === 'cartModal'){
        $('#cartModal').css('display', 'none');
    }
    };
};
    
var productCss = function(){
    $('.productImage')
        .css('height', '160px')
        .css('width', '160px')
        .css('border-radius', '25px')
        .css('display', 'block')
        .css('margin', 'auto');
        
    $('.product')
        .css('background-color', 'rgb(255,248,220)')
        .css('padding-top', '10px')
        .css('padding-left', '10px')
        .css('padding-right', '10px')
        .css('padding-bottom', '10px')
        .css('word-wrap', 'break-word')
        .css('border-radius', '10px')
        .css('height', '300px')
        .css('margin', '5px')
        .css('width', '250px')
        .css('cursor', 'pointer')
       // .css('width', '25%')
    //    .css('height', '25%')
        ;
};
    $('.flex-row') 
        .css({
            'display': 'flex',
            'flex-direction': 'row',
            'flex-wrap': 'wrap',
            'justify-content': 'space-around',
            'margin': 'auto',
            'padding': '5px',
            'align-items': 'center',
});

   $( document ).ready(function(event){
        
        populatePage(data);
        refreshFunctions();
        productCss();
        modalCss();
    });
    

    
    
    //$('#searchBox').change(function(event){
    $('#search').on('click', function(event){
        console.log('clicked');
        $('#itemList').empty();
        var fillType = $('#filterSort')[0].value.toLowerCase();
        var filtered = data.filter(function(e,i,a){
       return fillType !== 'all' ? e.type === fillType : true;
     });
        
        var searchWord = $('#searchBox')[0].value.toString().toLowerCase();
        
       var result = filtered.filter(function(prodObj,i,a){
           var hasFound = false;
           var searchFor = function(val, string){
            if (typeof val === 'object'){
                _.forEach(val, function(e,i,a){
                  searchFor(e, string);
                });
            } else {
                if (val.toString().toLowerCase().includes(string)){
                    hasFound = true;
                    return;
                }
            }
        };
        searchFor(prodObj, searchWord);
        return hasFound;
        });
        if (/*event.currentTarget.value === ''*/$('#searchBox')[0].value === ''){
            populatePage(filtered);
        } else {
            populatePage(result);
        }
        refreshFunctions();
        productCss();
    });
    
    $('#filterSort').change(function(event){
    $('#itemList').empty();
        var fillType = event.currentTarget.value.toLowerCase();
        var filtered = data.filter(function(e,i,a){
       return fillType !== 'all' ? e.type === fillType : true;
     });
        populatePage(filtered);
        refreshFunctions();
        productCss();
    });
    
 
    
    
});
	// ALL YOUR CODE GOES ABOVE HERE //
});