// Exercise 1 - Make a Phrase From Three Words
// write a function to print the following paragraph
function phrase3words(value1, value2, value3) {
    var answer = (`${value1} ${value2} ${value3}`)
    return answer;
}

var result1 = phrase3words("smile","at","everyone");
print(result1);
var result2 = phrase3words("everyone","wave", "back");
print(result2);
var result3 = phrase3words("coding","is", "fun");
print(result3);

// Exercise 2 - Format a name
// Write a function to reorder the first and last name as Last Name, First Name
function reformatName(first, last) {
    var answer = (`${last}, ${first}`)
    return answer;
}

var result = reformatName("Susan", "Rodger");
print(result);
result = reformatName("Robert", "Duvall");
print(result);

// Exercise 3 - Number of pixels in an image
//Create a function that calculates the total number of pixels in two images provided
//in the duke learning library (chapel.png[231x308],dinos.png [1920x1080])

function numberPixels(namefile) {
    var someImg = new SimpleImage(namefile);
    var height = someImg.getHeight();
    var width = someImg.getWidth();
    var totalPixels = (height * width)

   return (totalPixels);
}

var result = numberPixels("chapel.png");
print(result);
result = numberPixels("dinos.png");
print(result);

// Exercise 4 - Perimeter of an image rodger.png [315x424]

function perimeter(imageName) {
    var someImg = new SimpleImage(imageName);
    var rightheight = someImg.getHeight();
    var leftheight = someImg.getHeight();
    var rightwidth = someImg.getWidth();
    var leftwidth = someImg.getWidth();

    var answer = (rightheight +leftheight +rightwidth + leftwidth);
    return answer;
}

print(perimeter("rodger.png"));

//Exercise 5 - Print the RGB values of a pixel

function printPixel(nameImage, xpos, ypos) {
    var someImage = new SimpleImage(nameImage) ;
    print("red is " + someImage.getRed(xpos,ypos));
    print("green is " + someImage.getGreen(xpos,ypos));
    print("blue is " + someImage.getBlue(xpos,ypos));
}

printPixel("drewgreen.png",10, 10);
printPixel("drewgreen.png",250, 500);

//Exercise 6 - Sum of the RGB values for a Pixel

function sumPixel(nameOfImage, xpos, ypos) ;
    var image = new SimpleImage(nameOfImage);
    var colourred = nameOfImage.getRed(xpos,ypos);
    var colourgreen = nameOfImage.getGreen(xpos,ypos);
    var colourblue = nameOfImage.getBlue(xpos,ypos);

    var sum = colourred + colourgreen + colourblue

    return(sum)

}

var answer = sumPixel("drewgreen.png", 250, 500);
print(answer);
answer = sumPixel("drewgreen.png",10, 10);
print(answer);

//
// write your code here

var pixel = new SimpleImage(200,200);
 for (var colourChange of pixel.values()){
     var Green = 255 - colourChange.getGreen();
     var Red = 255 - colourChange.getRed();
     colourChange.setGreen(Green)
     colourChange.setRed(Red)
 }


// Create a 200 x 200 pixel and make it yellow

var pixel = new SimpleImage(200,200);
 for (var colourChange of pixel.values()){
     var Green = 255 - colourChange.getGreen();
     var Red = 255 - colourChange.getRed();
     colourChange.setGreen(Green)
     colourChange.setRed(Red)
 }


print(pixel);

//Looping

// Exercise 1 - Turn the chapel red

var pixel = new SimpleImage("chapel.png");
 for (var colourChange of pixel.values()){
     var red = 255 + colourChange.getRed();
     colourChange.setRed(red)
 }


print(pixel);

// Exercise 2 - Remove all the red

var pixel = new SimpleImage("chapel.png");
 for (var colourChange of pixel.values()){
     var green = 0 + colourChange.getGreen();
     var blue = 0 + colourChange.getBlue();
     var red = 0 - colourChange.getRed();
     colourChange.setGreen(green)
     colourChange.setBlue(blue)
     colourChange.setRed(red)
 }


print(pixel);

// Exercise 3 - Turn the eggs less red
