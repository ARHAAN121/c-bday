var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.Image.fromURL ('BirthdayImage.jpg', function(Img)
        {
            block_image_object = Img ;

            block_image_object.scaleToWidth(700);
            block_image_obejct.scaleToHeight(510);
            top:0,
            left :0,
        });
        canvasadd(block_image_object);
    

	
}

function playSound(){
	x.play();
}
