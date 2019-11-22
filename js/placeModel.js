AFRAME.registerComponent('tap-place', {
    init: function () {
        var ground = document.getElementById('ground');
        console.log(this.el)
        ground.addEventListener('click', function (e) {
            console.log(e);
        });
    }
});
