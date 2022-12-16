<div class="hamburger-container">
    <div class="one"></div>
    <div class="two"></div>
    <div class="three"></div>
</div>



<style lang="scss">
    .hamburger-container {
        div {
            transition: all .3s;
            // transition: background-color 1s;
            // display: block;
            width: 35px;
            height: 5px;
            opacity: 1;
            background-color: rgb(0, 0, 0, 1);
            margin: 6px 0;
        }
    }
    
    .one {
        transform-origin: left top;
        transform: rotate(45deg);
    }
    
    .two {
        // display: none;
        
        visibility: hidden;
        background-color: rgb(0, 0, 0, 0);
    }
    
    .three {
        transform-origin: left bottom;
        transform: rotate(-45deg);
    }
    </style>