<template>
  <div className="card">

    <div class="firstLine">
      <div>{{ data.index }}</div>
      <div class="logo_card">
        <img :src="data.logo" alt="" />
      </div>
      <div class="title">{{ data.project_name }}</div>
    </div>

    <div class="links">
      <a target="_blank" :href="data.discord">Discord</a>
      <a target="_blank" :href="data.twitter">Twitter</a>
      <div class="member">
        <span>{{ data.followers_count }}</span>
        <img src="../assets/twitter-64.png" alt="" />
      </div>
    </div>
    <!-- :max="this.max_hype" -->
    <div class="hype">
      <span>Hype</span><progress :value="this.data.hype"></progress>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["index", "data", "max_hype"],
};
</script>

<style scoped>
.card {
  /* display: flex; */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  align-items: center;
  /* gap: 1rem; */

  width: 60vw;
  margin: 1em auto;
  padding: 1.2rem;

  border-radius: 15px;

  transition: all 0.2s ease-in-out;
  background-color: #65cbfa7f;
  box-shadow: rgba(39, 40, 40, 0.2) 0px 8px 24px;

  z-index: 2;
}
.card:hover {
  transform: scale(1.02);
  background-color: #65cbfa9c;
  box-shadow: rgba(78, 80, 81, 0.4) 0px 8px 24px;
}

.logo_card img {
  height: 4rem;
  width: 4rem;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: rgba(39, 40, 40, 0.2) 0px 8px 24px;
}

.title {
  width: 50%;
  float: left;
  text-align: left;
  /* margin-right: 1.8vw; */
}

.member {
  display: flex;
  align-items: flex-end;
  gap: 5px;
  margin-left: 3.5rem;
}
.member img {
  width: 15px;
}

a {
  color: rgb(243, 231, 255);
  padding: 5px 10px;
  transition: all 0.2s ease-in-out;
  border-radius: 6px;
}
a:hover,
li:hover {
  background: #1f1d1d7d;
  transform: scale(1.01);
}

.firstLine {
  width: 18rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3rem;
}

.links{
  display: flex;
  flex-direction: row;
  align-items: center;
}

.hype *{
  margin: 0 20px;
}

@media screen and (max-width: 500px) {
  .card {
    display: flex;
    flex-direction: column;
  }
  .firstLine {
    justify-content: center;
    gap: 1rem;
  }
  .links{
    position: relative;
    bottom: 3rem;
    margin-bottom: -3rem;
  }
  .member {
  margin-left: 1rem;
}
  .hype {
    display: none;
  }
}
</style>
