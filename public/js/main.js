$.ajax({
  method:"GET",
  url:"https://api.myjson.com/bins/tls49",
  dataType:"json",
  success:function(response){
    //console.log("data for success",response);
  var data = formobject(response);
  constructDOM(data);
  },
  error:function(err){
    console.log("error in get method",err);

  }
});

function formobject(response){
  var flags=[], categoryobject=[];
  for(var i=0;i<response.length;i++){
    var movie=response[i];

var index=flags.indexOf(movie.language);
    if(index >= 0){
      categoryobject[index].movies.push(movie);
      continue;

    } else {
      flags.push(movie.language);
    }
    var objectSchema={
      "category":movie.language,
      "movies":[]
    }
    objectSchema.movies.push(movie);
    categoryobject.push(objectSchema);
    console.log("categoryobject",categoryobject);
    }
  console.log(flags);
  return categoryobject
}
function constructDOM(data){
  var categoryContent=[];
  for(var i=0;i<data.length;i++){
    var objectSchema=data[i];
    console.log("constructDOM",objectSchema);
    var categoryTitle=$('<h3 class="categoryName">'+objectSchema.category+'</h3>');
categoryContent.push(categoryTitle);
  }
  $('section.content').html(categoryContent);
}
