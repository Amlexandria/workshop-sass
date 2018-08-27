document.addEventListener('DOMContentLoaded', function() {
    var dropdown = document.querySelectorAll('.dropdown-trigger');
    var instancesDropdown = M.Dropdown.init(dropdown, {alignment:"down",hover:true,coverTrigger:false});
    var sideNav = document.querySelectorAll('.sidenav');
    var instancesSideNav = M.Sidenav.init(sideNav, {draggable:true,edge:"left"});
});