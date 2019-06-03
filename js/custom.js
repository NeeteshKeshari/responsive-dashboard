// Toggle sidebar menu item on btn click
$('.bartoggle-btn').click(function(){
  $('.nd-body').toggleClass('nd-body-menu-toggle');
});

// Toggle sidebar menu item on menu hover
$('.nd-left-sidebar').mouseover(function(){
  $('.nd-body').removeClass('nd-body-menu-toggle');
})

// toggle search & user info section on btn click
$('.nd-mobile-toggle').click(function(){
  $('.nd-body').toggleClass('nd-body-search-toggle');
  $('.nd-mobile-toggle').toggleClass('nd-mobile-toggle-active');
  $('.nd-header-right').toggleClass('nd-header-right-toggle');
});
