# Simple Parallax Script #
by CreativeOne


## 1. Add the Styles to the ``<head>`` ##
```
<link href="https://cdn.jsdelivr.net/gh/creative-one/parallax-image@latest/styles.css" rel="stylesheet">
```


## 2. Insert the script at the end of the ``<body>`` ##
The script searches for all image tags with the ``.parallax-image`` class. 
So it has to be at the end of the code,
```
<script src="https://cdn.jsdelivr.net/gh/creative-one/parallax-image@latest/parallax-image.js"></script>
```

## 3. Add the ``.parallax-image`` class on your image tag ##
```
<img
    class="parallax-image"
    src="https://images.unsplash.com/photo-1646491235517-cbf731b07591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
    alt="Alt Text"
/>
```

### To customize the speed and height of the parallax image you can add data-props ###

#### Speed example ####

```data-speed="0"``` - no parallax effect

```data-speed="1"``` - image is fixed in the viewport

you can set all values between 0 and 1. if you set larger values the image will scroll faster than the viewport.

#### Height example: ####

```data-height="100vh"``` - fullscreen image

You can set any height value. For example px, vh, % ...
