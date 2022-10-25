<template>
  <nav className="nav">
    <div style="position:absolute" v-bind:class="{ back: darkMode }"></div>
    <span>logo</span>

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
    background-color: #373737;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -2;
  }

input[type="checkbox"]{
 background: url(../assets/switchTheme.jpg) no-repeat;
}
</style>