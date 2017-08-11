/* global $ _ opspark */
$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
        $('#section-quotes')
          .css('background-color', 'grey')
          .css('border-radius', '15px');
          
        $('.heading-quotes')
          .css('color', 'black')
          .css('padding-left', '10px');
          
        $('.quote')
         .css('color', 'black')
         .css('font-style', 'italic');
         
        $('#quotes')
        .css('padding-right', '10px')
        .css('padding-left', '10px');
        
        $('#quotes:last-child')
        .css('padding-bottom', '4px');
        
        $('#section-quotes')
        .prependTo('#sections');
        
        $('#list-top-rated')
            .css('background-color', '#eecbad' )
            .css('padding-top', '10px')
            .css('border-radius', '15px');
    
  _.each(data.discography.topRated, function(e,i,a){
         $('<li>')
                .addClass('topRated')
                .attr('id', i)
                .text(e.title)
                .appendTo($('#list-top-rated'));
        });

        $('<section>')
            .attr('id', 'section-recordings')
            .appendTo($('#list-top-rated').parent());
            
        $('<ul>')
            .attr('id', 'list-recordings')
            .css('background-color', '#eecbad')
            .css('border-radius', '15px')
            .css('padding-top', '10px')
            .appendTo($('#section-recordings'));
            
        
        _.forEach(data.discography.recordings, function(e,index,a){
            $('<li>')
                .addClass('recording')
                .attr('id', `record${index}`)
                .css('padding-bottom', '10px')
                .appendTo($('#list-recordings'));
            
            _.forEach(data.discography.recordings[index], function(e,key,a){
                if (key !== 'art'){
           $('<div>')
                .addClass(key)
                .text(`${key[0].toUpperCase() + key.slice(1,key.length)}: ${e}`)
                .appendTo($('#record' + index));
                }
            });
        });
        
        $(`#0`).css('font-weight', 'bold');
        $(`#record0`).css('font-weight', 'bold');
           
            $('<div>')
                .addClass('image-container')
                .attr('id', 'topRatedArt')
                .prependTo($('#list-top-rated'));
                
            $('<img>')
                .attr('id', 'topImage')
                .attr('src', data.discography.topRated[0].art)
                .appendTo($('#topRatedArt'));
                
            var $topArt = $('#topImage');
        //     var topCounter = 0;
            
        //   $topArt.on('click', function(event){
        //         $(`#${topCounter}`)
        //                 .css('font-weight', '')
        //                 .appendTo($('#list-top-rated'));
        //         topCounter++;
        //         if (topCounter === data.discography.topRated.length){
        //             topCounter = 0;
        //         }
        //         $(`#${topCounter}`).css('font-weight', 'bold');
        //         $topArt.attr('src', data.discography.topRated[topCounter].art);
        //     });
        
            var $prevTarget = $('#0');
                $('.topRated').on('click', function(event){
                    $prevTarget
                        .css('font-weight', '');
                    $topArt.attr('src', data.discography.topRated[event.currentTarget.id].art);
                   $(`#${event.currentTarget.id}`)
                            .css('font-weight', 'bold')
                            .insertAfter($('#topImage'));
                    $prevTarget = $(`#${event.currentTarget.id}`);
                });
                
                
            $('<div>')
                .addClass('image-container')
                .attr('id', 'recordingArt')
                .prependTo($('#list-recordings'));
                
            $('<img>')
                .attr('id', 'recordImage')
                .attr('src', data.discography.recordings[0].art)
                .css('padding-bottom', '10px')
                .appendTo($('#recordingArt'));
                
            var $recordArt = $('#recordImage');
            // var recordCounter = 0;
            
            // $recordArt.on('click', function(event){
            //     $(`#record${recordCounter}`)
            //             .css('font-weight', '')
            //             .appendTo($('#list-recordings'));
            //     recordCounter++;
            //     if (recordCounter === data.discography.recordings.length){
            //         recordCounter = 0;
            //     }
            //     $(`#record${recordCounter}`).css('font-weight', 'bold');
            //     $recordArt.attr('src', data.discography.recordings[recordCounter].art);
            // });
            
                             var $prevRecordTarget = $('#record0');
                $('.recording').on('click', function(event){
                    $prevRecordTarget
                        .css('font-weight', '');
                var number = event.currentTarget.id.replace(/[a-z]/g, '');
                    $recordArt.attr('src', data.discography.recordings[number].art);
                   $(`#${event.currentTarget.id}`)
                            .css('font-weight', 'bold')
                            .insertAfter($recordArt);
                    $prevRecordTarget = $(`#${event.currentTarget.id}`);
                });
                
    
        
            var $bigImage = $('#image-billy');
            var imgCount = 0;
              $bigImage.on('click', function(event){
                  imgCount++;
                  if (imgCount === data.images.billy.length){
                      imgCount = 0;
                  } 
                  $bigImage.attr('src', data.images.billy[imgCount]);
              });
              
              $('<section>')
                    .attr('id', 'section-rider')
                    .appendTo($('#sections'));
              $('<h3>')
                    .css('margin', 'auto')
                    .text("Billy's Rider")
                    .appendTo($('#section-rider'));
            var createTable = function(peepArr){
                var createRow = function(newItem){
                  var $row =  $('<tr>')
                        .append($('<td>')
                                    .text(newItem.type),
                                ($('<td>')
                                     .text(newItem.desc)));
                        return $row;
                };
               var $newTable = $('<table>')
                    .append($('<tr>')
                            .append($('<th>')
                                .text('Type'),
                                    $('<th>')
                                .text('Description')))
                    .append(data.rider.map(createRow));
                return $newTable;
            };
 createTable(data.rider).appendTo($('#section-rider'));
        // uncomment this to inspect all available data; delete when done //
        // console.log(data)
        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});

