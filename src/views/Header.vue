<template>

<header class="header">
    <div class="container">
    <div class="row header-hol">
     <div class="col-12">	
        <nav class="navbar navbar-expand-xl navbar-light">
            <a href="/" class="logo"><img alt="Site logo" src="../assets/images/logo-light.png"></a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto mb-0">
                    <li class="nav-item"><router-link to="/" class="nav-link">Home</router-link></li>
                    <li class="nav-item"><router-link to="/About" class="nav-link">About</router-link></li>
                    <!-- <li class="nav-item"><router-link to="/dashboard" class="nav-link">Dashboard</router-link></li> -->
                    <li class="nav-item"><router-link to="/login" class="nav-link loginbtn">Login</router-link></li>
                </ul>
              </div>
          </nav> 
        </div>
        </div>
    </div>
    </header>
     
</template>

<script>
    export default {
        name: 'Header',
    }


</script>


<style scoped>
    header {
        box-shadow: 0px 4px 8px rgb(75 75 75 / 12%);
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
    background: #edf5ff;
        z-index: 999;
    }
    
    header .header-hol {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: -moz-box;
        display: -moz-flex;
        display: flex;
        -webkit-box-align: justify;
        -moz-box-align: justify;
        -webkit-box-pack: justify;
        -moz-box-pack: justify;
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        -moz-justify-content: space-between;
        -ms-justify-content: space-between;
        justify-content: space-between;
        -webkit-box-align: center;
        -moz-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        -moz-flex-align: center;
        -ms-flex-align: center;
        align-items: center;
        padding: 15px;
        -webkit-transition: all .3s ease-out;
        transition: all .3s ease-out;
    }
    
    header.header .header-hol {
        padding: 10px;
        -webkit-transition: all .3s ease-out;
        transition: all .3s ease-out;
    }
    
    header.header .header-hol .logo img {
        width: 50px !important;
    }
    
    .navbar-nav {
        list-style: none;
        transition: all .7s cubic-bezier(.325, 1, .22, 1);
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: -moz-box;
        display: -moz-flex;
        display: flex;
        -webkit-box-align: center;
        -moz-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        -moz-flex-align: center;
        -ms-flex-align: center;
        align-items: center;
    }
    
    .navbar-nav .nav-item .nav-link {
        font-weight: bold;
        color:var(--theme-nav-link-color);
        font-size: 14px;
        text-decoration: none;
        padding: 7px 15px;
        white-space: nowrap;
    }
    
    .dropdown-toggle::after {
        display: none;
    }
    
    .dropdown-toggle::before {
        display: inline-block;
        vertical-align: middle;
        content: "";
        border-style: solid;
        border-width: 1px 1px 0px 0px !important;
        width: 8px;
        height: 8px;
        transform: rotate( 135deg);
        right: -2px;
        position: absolute;
        top: 13px;
    }
    
    .navbar-nav .nav-item .nav-link.loginbtn {
    color: var(--theme-btn-color) !important;
        background: var(--theme-btn-bg);
        border-radius: var(--theme-btn-radius-1);
        font-size: var(--theme-nav-btn-font-size);
    padding: var(--theme-nav-btn-padding);
        text-align: center;
        margin-left: 10px;
    }
    
    .navbar-nav .nav-item .nav-link.loginbtn:hover {
      background: var( --theme-btn-bg-hover);
          color: var(--theme-btn-color) !important;
    }
    
    .navbar-nav .nav-item .nav-link:hover,
    .navbar-nav .nav-item .nav-link.dropdown-toggle.show,
    .navbar-nav .nav-item .nav-link.router-link-active:not(.loginbtn) {
        color: var(--theme-nav-link-hover);
    }
    /* croos icon for toggler icon */
    
    .navbar-light .navbar-toggler-icon {
        width: 24px;
        height: 17px;
        background-image: none;
        position: relative;
        border-bottom: 2px solid #000;
        transition: all 300ms linear;
    }
    
    .dropdown-toggle:focus {
        text-decoration: none!important;
        outline: 0!important;
        box-shadow: none !important;
    }
    
    .navbar-toggler {
        border-color: transparent !important;
        padding: 0 !important;
    }
    
    .navbar-light .navbar-toggler-icon:after,
    .navbar-light .navbar-toggler-icon:before {
        width: 24px;
        position: absolute;
        height: 2px;
        background-color:var(--theme-btn-bg);
        top: 0;
        left: 0;
        content: '';
        z-index: 2;
        transition: all 300ms linear;
    }
    
    .navbar-light .navbar-toggler-icon:after {
        top: 8px;
    }
    
    .navbar-toggler[aria-expanded="true"] .navbar-toggler-icon:after {
        transform: rotate(45deg);
    }
    
    .navbar-toggler[aria-expanded="true"] .navbar-toggler-icon:before {
        transform: translateY(8px) rotate(-45deg);
    }
    
    .navbar-toggler[aria-expanded="true"] .navbar-toggler-icon {
        border-color: transparent;
    }
    
    .dropdown-menu[data-bs-popper] {
        top: 100%;
        left: -20px !important;
        margin-top: .9rem !important;
    }
    
    .dropdown-item:hover {
        color: #3544ee;
    }
    
    .navbar-toggler:focus {
        text-decoration: none;
        outline: 0 !important;
        box-shadow: none !important;
    }
    
    .dropdown-item {
        display: block;
        width: 100%;
        padding: 10px 12px!important;
        clear: both;
        font-weight: 400;
        color: #212529;
        text-align: inherit;
        text-decoration: none;
        white-space: nowrap;
        background-color: transparent;
        border: 0;
    }
    
    .dropdown-item.active,
    .dropdown-item:active {
        color: #0d6efd;
        text-decoration: none;
        background-color: #e9ecef !important;
    }
    
    .navbar-nav .dropdown-menu {
        border: 0;
        box-shadow: 0px 4px 8px rgb(75 75 75 / 12%);
        position: absolute;
        padding: 0;
        background: #fff;
    }
    
    @media (min-width: 992px) {
        .navbar-expand-xl .navbar-collapse {
            display: flex!important;
            flex-basis: auto;
            justify-content: flex-end;
        }
    }
    
    @media only screen and (max-width: 991px) {
        .dropdown-menu[data-bs-popper] {
            top: 100%;
            left: 0px !important;
            margin-top: 0 !important;
        }
        .navbar-nav .nav-item {
            width: 100%;
            display: block;
        }
        .navbar-nav .nav-item .nav-link {
            text-align: left;
            width: 100%;
        }
    }
    
    @media only screen and (max-width: 576px) {
        .logo img {
            width: 120px !important;
        }
    }
</style>