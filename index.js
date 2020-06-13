var i=1;
var array_images= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
//C:/Users/bansa/OneDrive/Desktop/my/Devansh1
var firstString= "C:/Users/bansa/OneDrive/Desktop/my/Devansh1/images/image";
var secondString= ".jpg";
var len=array_images.length;
//var next = firstString + array_images[i+1] + secondString;
//var previous = firstString + array_images[i-1] + secondString;

function next(){

  //Server call (node express
  i=i+1;
  var urlString='http://localhost:3000/about/'+i;
  $.ajax({
        url: urlString,
        type: 'GET',
        success: function (data) {
            console.log('Success: ')
            console.log(data)
            document.querySelector(".current_image").setAttribute("src",data);
        },
        error: function (xhr, status, error) {
            console.log('Error: ' + error.message);

        },
    });

  //control goes t
  // var next="";
  // if(i=== len-1){
  //    next = firstString + array_images[0] + secondString;
  //    i=0;
  // }else{
  //   next = firstString + array_images[i+1] + secondString;
  //   i=i+1;
  // }

  // document.querySelector(".current_image").setAttribute("src",next);
  //
  // console.log("value of next" + next);
}

function previous(){
  var previous="";
  if(i===0){
    previous= firstString + array_images[len-1] + secondString;
    i=len-1;
  }
  else{
    previous = firstString + array_images[i-1] + secondString;
    i=i-1;
  }
  document.querySelector(".current_image").setAttribute("src",previous);
  console.log("value of previous" + previous);
}
