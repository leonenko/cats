$(document).ready(function(){

  var toggleLink = $('.toggle-link'),
      productItem = $('.product__item');

  function productSelect(){
      toggleLink.click(
        function(e){
          e.preventDefault();

          if (!$(this).parents(productItem).hasClass('disabled')){
            $(this).parents(productItem).toggleClass('selected');
          }
        }
      );
  }

  function hoverProduct(){
    productItem.hover(
      function(){
        $(this).removeClass('unhover')
      },
      function(){
        if ($(this).hasClass('selected') && !$(this).hasClass('disabled') && !$(this).hasClass('unhover')){
          $(this).addClass('unhover')
        }
      })
  }

  productSelect();
  hoverProduct();

});
