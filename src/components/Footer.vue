<template>
  <footer>
    <div class="copy">
        <span>Copyright © 2023 Project by Sui. All rights reserved ❤️ with love Sui Ecosystem</span>
    </div>

    <div class="social">
        <img id="f" src="../assets/twitter-social-media-network-svgrepo-com.png" alt="">
        <img id="t" src="../assets/line-discord.png" alt="">
        <img id="tr" src="../assets/wp.png" alt="">
    </div>
  </footer>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>
footer{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    font-size: medium;
    color: white;
    box-shadow: rgba(39, 40, 40, 0.5) 0px 8px 24px;
    backdrop-filter: blur(10px);
}

footer *{
    margin: .5em 1vw;
}


.copy{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.social{
    display: flex;
    align-items: center;   
}

.social img{
    width: 25px;
    filter: invert(1);
    cursor: pointer;
}

#f{width: 25px;}
#t{width: 40px;}
#tr{width: 20px;}
</style>