<template>
  <div class="main">
    <img src="../assets/45.png" alt="" />
    <div class="adding">
      <h1>
        #{{
          this.category == "nft"
            ? this.category.toUpperCase()
            : this.category[0].toUpperCase() + this.category.slice(1)
        }}
      </h1>

      <!-- <div className="sort_tool">
        <input
          className="inpSeach"
          v-model="seach"
          v-on:change="seching"
          type="text"
          placeholder="Seaching of projects..."
        />
        <button v-on:click="sort_of_members">Members</button>
        <button>Hype</button>
      </div> -->
      <button class="button-27" @click="switchViewDiagram">View Diagram</button>
    </div>


    <div v-if="!this.viewDiagram">
      <Card
        v-for="(item, index) in this.sort_data"
        :key="index"
        :index="index"
        :data="item"
        :max_hype="max_hype"
      />
    </div>

    <div class="diagram" v-else>
      <Chart :labelsDiagram="this.labelsDiagram" :dataDiagram="this.dataDiagram"/>

      <div class="imagesDiagram">
        <div v-for="(image, index) in this.imagesDiagram" :key="index">
          <img :src="image" alt="">
          <div>{{ this.labelsDiagram[index] }}</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import axios from "axios";
import Card from "./Card.vue";
import Chart from "./Chart.vue";

export default {
  name: "Top",
  components: {
    Card,
    Chart
  },
  data() {
    return {
      viewDiagram: false,
      labelsDiagram: [],
      dataDiagram: [],
      imagesDiagram: [],
      category: this.$route.params.category,
      seach: "",
      sort_data: [],
      data_api: {},
      max_hype: 0,
    };
  },
  methods: {
    seching() {
      this.sort_data = this.data_api.filter((el) =>
        el.title.includes(this.seach)
      );
    },
    sort_of_members() {
      this.sort_data = this.data_api.sort((a, b) =>
        Number(a.followers_count) < Number(b.followers_count) ? 1 : -1
      );
    },
    arrayMax() {
      let hypes = [];
      this.sort_data.forEach((element) => {
        hypes.push(Number(element.hype));
      });
      this.max_hype = Math.max.apply(Math, hypes);
    },
    switchViewDiagram() {
      this.labelsDiagram = [];
      this.dataDiagram = [];

      for (let index = 0; index < 10; index++) {
        this.labelsDiagram.push(this.sort_data[index].project_name);
        this.dataDiagram.push(this.sort_data[index].followers_count);
        this.imagesDiagram.push(this.sort_data[index].logo);
      }

      this.viewDiagram = !this.viewDiagram;
      console.log(this.imagesDiagram);
    }
  },
  mounted() {
    axios
      .get(
        `https://analytics.movedogs.club/api/get_projects_by_cat/${this.category.toLowerCase().replace(/ /g, "-")}`
      )
      .then((response) => {
        // console.log(response.data);

        const data = response.data;
        this.data_api = data;
        this.sort_data = data;
        this.arrayMax();
      })
      .catch(console.log);

    this.sort_data = this.data_api;
  },
};
</script>

<style>
.imagesDiagram{
  margin: 0 auto;
  padding-left: 5vw;
  width: 93vw;
  /* display: flex;
  justify-content: space-between;
  align-content: center; */
  display: grid;
grid-template-columns: repeat(10, 1fr);
grid-template-rows: 1fr;
}
.imagesDiagram img {
  height: 5vw;
  width: 5vw;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: rgba(39, 40, 40, 0.2) 0px 8px 24px;
}
.imagesDiagram span{
  font-size: small;
  color: rgb(213, 213, 213)
}

.diagram{
  height: 85vh;
  margin-top: -5vh;
}
.main {
  min-height: 78vh;
}
.main > img {
  height: 400px;
  position: fixed;
  top: 50vh;
  left: 80vw;
  opacity: 0.5;
  z-index: -2;
}
.inpSeach {
  width: 15vw;
  border: none;
  outline: none;

  padding: 12px;
  border-radius: 10px;

  color: white;
  background-color: rgb(18, 93, 178, 0.2);
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
.inpSeach::placeholder {
  color: rgb(227, 227, 227);
}

.sort_tool {
  display: flex;
  justify-content: center;

  gap: 0.5em;
}
.sort_tool button {
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 5px;
  padding: 5px 10px;
  color: rgb(232, 239, 255);
  background-color: rgba(255, 255, 255, 0);
  font-size: 16px;
  font-weight: 500;
  font-family: "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol";
}
.sort_tool button:hover {
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 8px;
  transition: 0.5s ease-in-out;
  background-color: rgba(54, 19, 128, 0.19);
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.adding {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 62.5vw;
  margin: 0 auto;
}
.adding h1 {
  margin: auto 0;
}


@media screen and (max-width: 500px) {
  .sort_tool{
    display: none;
  }
}


.button-27 {
  background-color: #007bff;
  border: 2px solid #1a1a1a00;
  border-radius: 8px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 14px;
  font-weight: 500;
  outline: none;
  padding: 10px 20px;
  text-decoration: none;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
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

</style>
