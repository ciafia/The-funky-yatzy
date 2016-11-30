$(hej);
 function hej(){
  // whenever a user clicks on a p tag
  // regular click
  $('p').click(function() {

    // makes all tags red
    // $('p').addClass('redBg');
    console.log("you clicked", this);
    // only make this p-tag (the one clicked) red
    $(this).addClass('redBg');
  });
  
  }