# JQuery.AuthAnimator
Animate your authorization form


![Image of AuthAnimator]()

1) Connect JQuery and JQuery.AuthAnimator:
```
<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
<script src="/path/to/jquery.authanimator.js"></script>
```

2) Add input fields (for example login & password) and div (for image)
```
...
<body>
    <div id="myimage" style="width:100px; height:100px; background-size: contain; background-repeat: no-repeat; background-position: center center;"></div>
    <input type="text" id="login" placeholder="Your email"><br>
    <input type="password" id="password" placeholder="Password"><br>
</body>
...
```

3) Add AuthAnimator for any fields:

```
<script type="text/javascript">
    
    $(function(){
        $("#login").AuthAnimator({image_block: "#monster", images: {
            0:"/images/lisa/0.png",
            2:"/images/lisa/2.png",
            4:"/images/lisa/4.png",
            6:"/images/lisa/6.png",
            8:"/images/lisa/8.png",
        }});
        $("#password").AuthAnimator({image_block: "#monster", images: {
            0:"/images/lisa/hidden.png"
        }});
    });
</script>
```