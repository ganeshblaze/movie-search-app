$("document").ready(()=>{
// search by title and year 
 $('#list').hide();
 $('#title-button').click(()=>{

 	let titleInput = $("#TitleEntered").val();
 	let yearInput = $("#YearEntered").val();

 	 if(titleInput =="" || titleInput ==undefined){
 	 	alert("Enter movie title")

 	 }

   else{
   	getDataTitle(titleInput,yearInput);
   }
 })

 let getDataTitle=(titleInput,yearInput) =>{
 	console.log("Sending request")

     $.ajax({

            type : "GET" ,
			dataType : "json" ,
			async : true,
			url : "https://www.omdbapi.com/?apikey=538aef0d&s="+"&t="+titleInput +"&y=" +yearInput,


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
				   else{ //poster unavailable //try for gravity with year 2001
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






