#janimate
一个纯js轻量级动画库
##说明
写janimate是因为我看到jsMorph——1个优秀的animate frmawork，觉得它里面的一些想法和jquery的动画不太一样，所以想学习借鉴下。
jquery所有动画都存在一个队列里，只用一个计时器控制动画，这个应该是比较适合页面动画比较多的情况。
而janimte每一个动画对应一个实例对象，操作比较简单
##如何使用
    var obj=document.getElementsByTagName('div');
    var anim=new janimate(obj,{width:'500px',height:'500px'});
    anim.start();
