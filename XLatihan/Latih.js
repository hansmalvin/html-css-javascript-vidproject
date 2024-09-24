$(document).ready(function () {
  // Handle accordion functionality
  $('.accordion-btn').click(function () {
    $(this).toggleClass('active');
    
    const content = $(this).next();
    if (content.css('display') === 'block') {
      content.css('display', 'none');
    } else {
      content.css('display', 'block');
    }
  });
});