$( document ).ready(function() {
    console.log("ready!" );
    $('#login').hide();
    $('#register').hide();

    $('#loginBtn').click(function(event) {
      /* Act on the event */
      $(this).fadeOut( "fast", ()=>{});
      $('#login').fadeIn( "slow", ()=>{});
    });

    $('#registerBtn').click(function(event) {
      /* Act on the event */
      $(this).fadeOut( "fast", ()=>{});
      $('#register').fadeIn( "slow", ()=>{});
    });
});
