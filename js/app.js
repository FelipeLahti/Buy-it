angular.module('products', ['ui.bootstrap']);

function ProductsCtrl($scope){
  $scope.myInterval = 4000;
  $scope.products = [
    { 
      name: "Keyboard Apple Wireless", 
      price: 160, 
      description: { pt: "Novo. Na garantia até dezembro de 2013", en: "New. Warranty until December 2013"},
      imgs: [
        {img:"img/products/keyboard_apple_1.jpg"}, 
        {img:"img/products/keyboard_apple_2.jpg"}
      ]
    }
    ,
    { 
      name: "Mouse Razer Boom Slang", 
      price: 150, 
      description: { pt: "Novo", en: "New"},
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
      price: 140, 
      description: { pt: "Novo. Na caixa.", en: "New. With box."},
      imgs: [
        {img:"img/products/razer_copperhead_1.jpg"}, 
        {img:"img/products/razer_copperhead_2.jpg"},
        {img:"img/products/razer_copperhead_3.jpg"},
        {img:"img/products/razer_copperhead_4.jpg"}
      ]
    },
    { 
      name: "Headset Razer Piranha", 
      price: 140, 
      description: { pt: "Novo. Na caixa.", en: "New. With box."},
      imgs: [
        {img:"img/products/razer_piranha.jpg"}
      ]
    }
  ];
}
