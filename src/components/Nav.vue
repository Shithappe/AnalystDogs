<template>
  <nav className="nav">
    <div style="position:absolute" v-bind:class="{ back: darkMode }"></div>
    <span>TopStry</span>

    <div>
        <label for="switch">dark mode</label>
        <input v-model="darkMode" type="checkbox" name="switch" id="">
        <button class="button-27" onclick="location.href = `https://www.aptos.systems/submit_project_aptos/`">Submit project</button>
    </div>
  </nav>
</template>

<script>
export default {
    name: 'Nav',
    data() { 
        return {
            darkMode: 0
        }
    }

}
</script>

<style>
    .nav{
        display: flex;
        justify-content: space-around;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 5em;
        background-color: rgba(4, 148, 209, 0);
    }


.button-27 {
  background-color: #000000;
  border: 2px solid #1A1A1A;
  border-radius: 8px;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: "Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size: 16px;
  font-weight: 500;
  margin: 5px;
  outline: none;
  padding: 15px 20px;
  text-decoration: none;
  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
}

.button-27:disabled {
  pointer-events: none;
}

.button-27:hover {
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  transform: translateY(-2px);
}

.button-27:active {
  box-shadow: none;
  transform: translateY(0);
}

.back{
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1920' height='1080' preserveAspectRatio='none' viewBox='0 0 1920 1080'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1341%26quot%3b)' fill='none'%3e%3crect width='1920' height='1080' x='0' y='0' fill='url(%23SvgjsLinearGradient1342)'%3e%3c/rect%3e%3cpath d='M1085.821%2c782.307C1188.324%2c786.117%2c1291.657%2c742.243%2c1342.138%2c652.951C1391.959%2c564.826%2c1372.958%2c455.97%2c1318.591%2c370.575C1268.324%2c291.619%2c1179.291%2c255.253%2c1085.821%2c250.345C980.741%2c244.827%2c859.651%2c252.885%2c806.473%2c343.684C752.969%2c435.039%2c803.639%2c545.75%2c860.511%2c635.048C912.168%2c716.158%2c989.724%2c778.735%2c1085.821%2c782.307' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M-55.98 1066.96 a288.48 288.48 0 1 0 576.96 0 a288.48 288.48 0 1 0 -576.96 0z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1568.86 511.77 a201.18 201.18 0 1 0 402.36 0 a201.18 201.18 0 1 0 -402.36 0z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1469.7852032162484 809.5452374568318L1729.8365464995595 837.1283324753774 1640.5150394123255 626.700048684974z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M562.7483910347661 576.7140687582013L556.7386320574832 748.811049000951 728.8356123002329 754.820807978234 734.8453712775158 582.7238277354842z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M641.9995509361959 959.0227220112604L805.980050533332 1092.0704677893157 838.0342479498543 910.282080738556z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M892.532%2c548.62C962.063%2c550.652%2c1033.309%2c519.105%2c1064.22%2c456.79C1092.801%2c399.172%2c1060.303%2c334.968%2c1025.269%2c281.03C994.215%2c233.221%2c949.469%2c195.328%2c892.532%2c192.464C830.264%2c189.332%2c766.883%2c213.15%2c734.456%2c266.401C700.849%2c321.59%2c705.809%2c390.864%2c737.386%2c447.239C769.743%2c505.007%2c826.347%2c546.686%2c892.532%2c548.62' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M331.9078778763949 756.5994654537818L124.7721509224744 823.6837650905456 263.96966020081675 953.487542445387z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M-126.06 228.59 a241.05 241.05 0 1 0 482.1 0 a241.05 241.05 0 1 0 -482.1 0z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M918.92 511.65 a304.62 304.62 0 1 0 609.24 0 a304.62 304.62 0 1 0 -609.24 0z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1341'%3e%3crect width='1920' height='1080' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='10.94%25' y1='-19.44%25' x2='89.06%25' y2='119.44%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1342'%3e%3cstop stop-color='rgba(14%2c 42%2c 71%2c 1)' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(1%2c 74%2c 167%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e");
}
</style>