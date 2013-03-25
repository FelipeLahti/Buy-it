angular.module('products', ['ui.bootstrap']);

function ProductsCtrl($scope){
  $scope.myInterval = 4000;
  $scope.products = [
    { 
      name: "Keyboard Apple Wireless", 
      price: 160, 
      description: "New. Warranty until December 2013",
      link: "http://store.apple.com/br/product/MC184BZ/B/teclado-sem-fio-da-apple?fnode=3e",
      imgs: [
        {img:"img/products/keyboard_apple_1.jpg"}, 
        {img:"img/products/keyboard_apple_2.jpg"}
      ]
    }
    ,
    { 
      name: "Mouse Razer Boom Slang", 
      price: 210, 
      description: "New",
      link: "http://www.desktopreview.com/default.asp?newsID=402",
      imgs: [
        {img:"img/products/razer_boom_slang_1.jpg"}, 
        {img:"img/products/razer_boom_slang_2.jpg"}, 
        {img:"img/products/razer_boom_slang_3.jpg"},
        {img:"img/products/razer_boom_slang_4.jpg"}, 
        {img:"img/products/razer_boom_slang_5.jpg"}, 
        {img:"img/products/razer_boom_slang_6.jpg"},
        {img:"img/products/razer_boom_slang_7.jpg"}, 
        {img:"img/products/razer_boom_slang_8.jpg"}
      ]
    },
    { 
      name: "Mouse Razer Copperhead", 
      price: 170, 
      description: "New. With box.",
      imgs: [
        {img:"img/products/razer_copperhead_1.jpg"}, 
        {img:"img/products/razer_copperhead_2.jpg"},
        {img:"img/products/razer_copperhead_3.jpg"},
        {img:"img/products/razer_copperhead_4.jpg"}
      ]
    },
    { 
      name: "Headset Razer Piranha", 
      price: 160, 
      description: "New. With box.",
      link: "http://www.techpowerup.com/reviews/Razer/Piranha/",
      imgs: [
        {img:"img/products/razer_piranha.jpg"}
      ]
    }
  ];
}
