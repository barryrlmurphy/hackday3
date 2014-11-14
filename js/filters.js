var filtersImage = function(image_target) {
    
    init = function() {
        
        $('.filters').on('click', magic);
        
        console.log("Filters Image");
    };
    
    magic = function() {
        console.log("Sharpen the image");
    };
};

filtersImage($('.resize-image'));
