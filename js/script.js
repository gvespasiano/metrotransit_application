var baseURL = "https://svc.metrotransit.org";
var vm = new Vue({
    el: "#app",
    data: {
        train: [],
    },
    methods: {
        getTrain: function() {
            axios.get(baseURL + "/NexTrip/56335").then(function(response){
                vm.train = response.data;
            })
        }
    },
    created: function() {
        this.getTrain();
    }
});

