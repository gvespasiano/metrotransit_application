//gets from metro transit API - information pulled from 5 digit stop code
window.onload=function(){
var baseURL = "https://svc.metrotransit.org";
var vm = new Vue({
    el: "#app",
    data: {
        eP1: [],
		eP2: [],
		wP1: [],
		wP2: [],
		eastSide: true,
		westSide: true
    },
    methods: {
        getEP1: function() {
            axios.get(baseURL + "/NexTrip/56335").then(function(response){
                vm.eP1 = response.data;
            })
        },
        getEP2: function() {
            axios.get(baseURL + "/NexTrip/56334").then(function(response){
                vm.eP2 = response.data;
            })
        },
        getWP1: function() {
            axios.get(baseURL + "/NexTrip/56333").then(function(response){
                vm.wP1 = response.data;
            })
        },
        getWP2: function() {
            axios.get(baseURL + "/NexTrip/56339").then(function(response){
                vm.wP2 = response.data;
            })
        },
    },
    created: function() {
        this.getEP1();
		this.getEP2();
		this.getWP1();
		this.getWP2();
    }
});

//auto refresh every 4.5 mins
setTimeout(function() {
  location.reload();
}, 270000);

//filters for table display - hidden by applying class "hidden" to div
//Variables - doc elements
var eastButton = document.getElementById('east');
var eastDivs = document.getElementById('eastDiv');
var westButton = document.getElementById('west');
var westDivs = document.getElementById('westDiv');

//on-clicks for filters - hides either west or east side platforms
eastButton.addEventListener('click', function() {
        eastDivs.classList.toggle("hidden");
		console.log("strongSide");
	});
westButton.addEventListener('click', function() {
		westDivs.classList.toggle("hidden");
		console.log("leftSide");		
	});
}