$("document").ready(() =>{

  // IMDB ID search data 
  $("#list").hide();
  $("#id-button").click(()=>{

  	let IDinput = $("#IMDBid").val()
  	if (IDinput =="" ||IDinput==undefined){

  		alert("Enter movie title")
  	}
       else{
       	getDataID(IDinput);
       }
})

  let getDataID=(IDinput)=>{
  console.log("Sending request")

   $.ajax({

            type : "GET" ,
			dataType : "json" ,
			async : true,
			url : "https://www.omdbapi.com/?apikey=538aef0d&s="+"&i="+IDinput, //database


			success : (response)=>{
				let data = response;
				if(response.Response == "False"){
				alert("No movie found with these details");
				}
				else
					{	
						if(data.Poster != "" && data.Poster != undefined && data.Poster != "N/A" )
						{
				          $('#poster').attr('src', data.Poster );
					    }
				   else{ //poster unavailable
					$("#poster").attr('src' , "back.jpg")
				}
				{
				//movie details
				 $("#title").text(data.Title); 
				 $("#generation").text(data.Genre); 
				 $("#type").text(data.Type); 
				 $("#language").text(data.Language); 
				 $("#actors").text(data.Actors); 
				 $("#plot").text(data.Plot); 
				 $("#writer").text(data.Writer);
				 $("#director").text(data.Director); 
				 $("#awards").text(data.Awards); 
				 $("#rated").text(data.Rated); 
				 $("#country").text(data.Country);
				 $("#imdbID").text(data.imdbID);
				 $("#imdbrate").text(data.imdbRating);
				 $("#list").show();
			
					
				 
			}
				}
			
		},
		error : (error)=> {
			alert("Something Went Wrong");
		}
	})
	}
	
	
})



 


