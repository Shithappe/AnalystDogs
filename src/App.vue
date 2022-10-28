<template>
  <div>
    <Nav/>
    <router-view/>
  </div>
</template>

<script>
import Nav from './components/Nav.vue';

export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@600&display=swap');
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 100px;
  color: aliceblue;
}

body{
  background: no-repeat center center fixed url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1920' height='1080' preserveAspectRatio='none' viewBox='0 0 1920 1080'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1047%26quot%3b)' fill='none'%3e%3crect width='1920' height='1080' x='0' y='0' fill='rgba(23%2c 112%2c 203%2c 1)'%3e%3c/rect%3e%3cpath d='M0%2c880.356C161.371%2c897.012%2c277.268%2c731.403%2c415.971%2c647.263C559.117%2c560.428%2c761.061%2c531.595%2c827.943%2c378.109C894.848%2c224.571%2c766.42%2c58.996%2c744.674%2c-107.068C722.552%2c-276.005%2c804.179%2c-471.656%2c699.103%2c-605.776C594.052%2c-739.865%2c394.769%2c-747.103%2c225.877%2c-769.267C77.089%2c-788.793%2c-78.011%2c-790.988%2c-213.019%2c-725.475C-338.177%2c-664.742%2c-404.273%2c-533.953%2c-488.002%2c-422.856C-565.753%2c-319.691%2c-643.267%2c-220.645%2c-685.497%2c-98.56C-735.293%2c45.397%2c-819.505%2c206.835%2c-753.264%2c344.004C-686.939%2c481.348%2c-488.461%2c478.27%2c-364.218%2c566.735C-231.011%2c661.583%2c-162.661%2c863.567%2c0%2c880.356' fill='%231463b3'%3e%3c/path%3e%3cpath d='M1920 1560.153C2016.145 1569.564 2115.931 1563.1399999999999 2200.5860000000002 1516.6 2288.246 1468.408 2346.948 1384.441 2397.079 1297.875 2451.507 1203.889 2523.535 1102.765 2501.873 996.3389999999999 2480.3 890.35 2364.645 837.425 2287.8559999999998 761.251 2217.598 691.5550000000001 2160.505 608.8530000000001 2070.279 568.197 1971.742 523.796 1861.975 500.17999999999995 1756.0430000000001 521.615 1645.291 544.025 1540.09 601.413 1469.614 689.739 1400.393 776.492 1390.393 891.737 1373.2269999999999 1001.386 1355.851 1112.38 1308.179 1237.2 1369.134 1331.5720000000001 1430.326 1426.311 1568.455 1421.696 1672.626 1464.922 1755.923 1499.4859999999999 1830.245 1551.367 1920 1560.153' fill='%231a7de3'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1047'%3e%3crect width='1920' height='1080' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

</style>
