var baseURL = "http://svc.metrotransit.org";
var vm = new Vue({
    el: "#app",
    data: {
        train: []
    },
    methods: {
        getTrain: function() {
            axios.get(baseURL + "/NexTrip/1000,0,1").then(function(response){
                console.log(response);
                vm.train = response.data;
            })
        }
    },
    created: function() {
        this.getTrain();
    }
});