jQuery(document).ready(function() {
      let url = 'https://testezarbo.myshopify.com/cart.json';
      let response = fetch(url)
      .then((resp) => resp.json())
      .then(function(data) {	
        console.log(data.total_price);
        var totalPrice = data.total_price/100;
        $('body').prepend('<div class="header" id="myHeader"><h1> Hello World from Lucas' + totalPrice + 'Modificando</h1></div>');
        $('head').prepend('<style>.header { padding: 10px 16px; background: #555; color: #f1f1f1; } .content { padding: 16px; } .sticky { position: fixed; top: 0; width: 100%} .sticky + .content { padding-top: 102px; }</style>');

        var header = document.getElementById("myHeader");
        var sticky = header.offsetTop;

        window.onscroll = function() { 
          if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
          } else {
            header.classList.remove("sticky");
          }
        };
      });

    });
