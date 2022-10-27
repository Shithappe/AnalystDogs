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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 100px;

  color: aliceblue;
  /* font-weight: 600; */

}

body{
  /* background-color: #6bcefcbe; */
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1920' height='1080' preserveAspectRatio='none' viewBox='0 0 1920 1080'%3e%3cg mask='url(%26quot%3b%23SvgjsMask3337%26quot%3b)' fill='none'%3e%3crect width='1920' height='1080' x='0' y='0' fill='url(%23SvgjsRadialGradient3338)'%3e%3c/rect%3e%3cpath d='M446.19162542186854 147.4131790482106L307.06178204910725 281.51329796266407 468.59907057594677 330.9002032649589z' fill='rgba(0%2c 0%2c 0%2c 0.28)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M971.0414033822916 930.2421626264841L1118.9394704787326 912.0825633996593 1017.751038090275 699.3152623684102z' fill='rgba(0%2c 0%2c 0%2c 0.28)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M578.739%2c990.122C667.071%2c989.681%2c726.909%2c910.902%2c770.538%2c834.095C813.462%2c758.528%2c849.661%2c667.259%2c804.213%2c593.183C760.008%2c521.134%2c663.266%2c522.01%2c578.739%2c521.484C492.833%2c520.949%2c393.641%2c517.346%2c348.351%2c590.346C301.604%2c665.695%2c339.316%2c759.202%2c383.591%2c836.029C427.947%2c912.997%2c489.906%2c990.566%2c578.739%2c990.122' fill='rgba(0%2c 0%2c 0%2c 0.28)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M81.68474223168701 367.26523930647727L184.56721227752251 214.7357048723403 32.03767784338555 111.8532348265048-70.84479220244995 264.3827692606418z' fill='rgba(0%2c 0%2c 0%2c 0.28)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M-37.14247742682752 797.067593622001L147.51691549311985 857.0670674761031 207.516389347222 672.4076745561558 22.85699642727463 612.4082007020536z' fill='rgba(0%2c 0%2c 0%2c 0.28)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M232.67959120020407 738.0592339182763L214.6250218872538 944.4239054691277 533.1993138700061 868.3234236631274z' fill='rgba(0%2c 0%2c 0%2c 0.28)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1176.2579745747514 1085.1099428579325L1149.7040339025064 781.5970121297509 846.1911031743246 808.150952801996 872.7450438465697 1111.6638835301776z' fill='rgba(0%2c 0%2c 0%2c 0.28)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1358.1429475334432 754.7313672949688L1286.2606344663257 485.4366099588208 1110.9948678983287 654.6887933414924z' fill='rgba(0%2c 0%2c 0%2c 0.28)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1607.868%2c142.814C1658.713%2c144.189%2c1709.615%2c124.35%2c1736.075%2c80.91C1763.536%2c35.828%2c1761.913%2c-21.096%2c1735.575%2c-66.843C1709.181%2c-112.688%2c1660.687%2c-144.695%2c1607.868%2c-141.777C1558.93%2c-139.074%2c1525.763%2c-97.088%2c1502.465%2c-53.966C1480.6%2c-13.497%2c1469.416%2c33.736%2c1491.135%2c74.284C1513.969%2c116.914%2c1559.526%2c141.506%2c1607.868%2c142.814' fill='rgba(0%2c 0%2c 0%2c 0.28)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1482.263%2c1346.241C1559.563%2c1348.079%2c1633.934%2c1307.155%2c1670.166%2c1238.847C1704.495%2c1174.128%2c1685.32%2c1097.7%2c1647.318%2c1035.067C1610.973%2c975.167%2c1552.297%2c931.201%2c1482.263%2c929.161C1408.628%2c927.016%2c1336.37%2c961.067%2c1299.665%2c1024.938C1263.075%2c1088.608%2c1272.943%2c1166.419%2c1309.227%2c1230.264C1345.998%2c1294.966%2c1407.863%2c1344.472%2c1482.263%2c1346.241' fill='rgba(0%2c 0%2c 0%2c 0.28)' class='triangle-float2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask3337'%3e%3crect width='1920' height='1080' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cradialGradient cx='100%25' cy='50%25' r='1994.49' gradientUnits='userSpaceOnUse' id='SvgjsRadialGradient3338'%3e%3cstop stop-color='rgba(0%2c 255%2c 240%2c 1)' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(13%2c 64%2c 130%2c 1)' offset='1'%3e%3c/stop%3e%3c/radialGradient%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e");
}

</style>
