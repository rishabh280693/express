(function(){
	var localName = "employeeData",
		storedData;
	var getDataFromLocalStorage = function() {
		if(localStorage && localStorage.getItem(localName)){
			console.log("Getting data from localStorage");
			storedData = JSON.parse(localStorage.getItem(localName));
		} else {
			$.ajax({
		        url: "/data/employeeData.json",
		        success: function(data){
		        	var localData = JSON.stringify(data);
		        	localStorage.setItem("employeeData", localData);
		        }
		    });
		}
	};
    
    getDataFromLocalStorage();

})();