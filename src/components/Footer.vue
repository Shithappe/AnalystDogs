<template>
  <footer>
    <div class="copy">
        <span>Copyright © 2023 Project by Sui.</span>
        <span>All rights reserved ❤️ with love Sui Ecosystem</span>
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
    /* position: absolute; */
    /* bottom: 0; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em 0;
    margin: 0;
    font-size: medium;
    color: white;
    background-color: black;
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
}

#f{width: 35px;}
#t{width: 50px;}
#tr{width: 30px;}
</style>