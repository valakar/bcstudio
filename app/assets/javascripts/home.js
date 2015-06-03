function dimmingImage(img, imgSource, fadeTime, intervalTime, images, timeoutTime ) {
    var images2 = [];
    if (img[0] == '.') {
        for (var j = 0; j < images.length; j++) {
            images2.push((new Image()).src = imgSource + images[j]);
        };
    } else {
        for (var j = 0; j < images.length; j++) {
            images2.push((new Image()).src = images[j]);
        };
    }

    // image.css('background-image','url(/assets/main/header.png)');
    var i = 0;
    setTimeout(function() {
        setInterval(function dimming() {
            $(img).fadeOut(+fadeTime, function() {
                if (img[0] == '.') {
                    $(img).css('background-image', 'url(' + images2[i] + ')');
                } else {
                    $(img).attr('src', images2[i]);
                };
                
                
                console.log(i + ' img ' + images2[i]);
                $(img).fadeIn(+fadeTime);
            });
            i++;
            if (i === images2.length) {
                i = 0;
            };
            return dimming;
        }(), intervalTime);
    }, timeoutTime);
};

$(document).ready(dimmingImage('.homepage_background', 'http://localhost:3000', 2400, 5000,
    ['/assets/main/header6.jpg','/assets/main/header5.jpg','/assets/main/header4.jpg',
        '/assets/main/header3.jpg','/assets/main/header2.jpg','/assets/main/header1.jpg',
        '/assets/main/header.jpg'], 0));
$(document).ready(dimmingImage('#productBannerDim1', 'http://localhost:3000', 2400, 21000,
    ['/assets/products/a3.jpg','/assets/products/a31.jpg'],1000));
$(document).ready(dimmingImage('#productBannerDim2', 'http://localhost:3000', 2400, 21000,
    ['/assets/products/a4.jpg','/assets/products/a41.jpg'],5000));
$(document).ready(dimmingImage('#productBannerDim3', 'http://localhost:3000', 2400, 21000,
    ['/assets/products/a7.jpg','/assets/products/a71.jpg'],9000));
$(document).ready(dimmingImage('#productBannerDim4', 'http://localhost:3000', 2400, 21000,
    ['/assets/products/a8.jpg','/assets/products/a81.jpg'],13000));

$(document).ready(dimmingImage('#productBannerDim5', 'http://localhost:3000', 800, 7000,
    ['/assets/products/l2.jpg','/assets/products/l21.jpg'],17000));

$(document).ready(dimmingImage('.websiteDim1', 'http://localhost:3000', 800, 4000,
	['/assets/website/website01.jpg','/assets/website/website01b.jpg'],1000));
$(document).ready(dimmingImage('.websiteDim2', 'http://localhost:3000', 800, 4000,
	['/assets/website/website02.jpg','/assets/website/website02b.jpg',
		'/assets/website/website02c.jpg','/assets/website/website02d.jpg'],2000));
$(document).ready(dimmingImage('.websiteDim3', 'http://localhost:3000', 800, 4000,
	['/assets/website/website03.jpg','/assets/website/website03b.jpg',
		'/assets/website/website03c.jpg','/assets/website/website03d.jpg',
		'/assets/website/website03e.jpg','/assets/website/website03f.jpg'],3000));

//Show full image on click
var ready;
ready = function() {
	$(document).on("click", ".show-full-image", function() {
		$('.modal-body').empty();
	  	var title = $(this).parent('a').attr("title");
	  	var bg = $(this).css('background-image');
        bg = bg.replace('url(','').replace(')','');
	  	var width = getImgSize(bg);
      if (width > ($(window).width() * 0.9)) {
        width = $(window).width() * 0.9;
      };
	  	$('.modal-dialog').css('width', width + 40);
	  	var img = $("<img src = " + bg + " style=\"width:"+width+"px\" data-dismiss=\"modal\"/>")
	  	$(img).appendTo('.modal-body');
	  	$('#myModal').modal({show:true});
	});
};
$(document).ready(ready);
$(document).on('page:load', ready);

function getImgSize(imgSrc) {
    var newImg = new Image();
    newImg.src = imgSrc;
    var width = newImg.width;
    return width;
}

// var ready;
// ready = function() {
// 	$(".item").each(function(i, elem) {
//           var img = $(elem);
//           var div = $("<div />").css({
//             background: "url(" + img.attr("src") + ") center no-repeat",
//             width: img.width() + "px",
//             height: img.height() + "px",
// 			"background-size": "cover"
//           });
              
//           div.addClass("item");
//           div.addClass("show-full-image");
            
//           img.replaceWith(div);
//         });
// 	$(".item").fadeIn();
// };
// $(document).ready(ready);
// $(document).on('page:load', ready);