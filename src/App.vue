<!--
 * @Description: weather-appp
 * @Author: Lewis
 * @Date: 2020-11-11 22:00:53
 * @LastEditTime: 2020-11-12 00:12:09
 * @LastEditors: Lewis
-->
<template>
  <div id="app" :class="setWeatherBg()">
    <main>
      <div class="search-box">
          <input 
          type="text" 
          class="search-bar" 
          placeholder="Search..."
          v-model="query"
          @keypress="fetchWeather"
          />
      </div>
      <div class="weather-wrap" v-if="weather.main">
        <div class="location-box">
          <div class="location">{{weather.name}}, {{weather.sys.country}}</div>
          <div class="date">{{setDate()}}</div>
        </div> 
        <div class="weather-box">
          <div class="temp">{{Math.round(weather.main.temp)}}°C</div>
          <div class="weather">{{weather.weather[0].main}}</div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      apiKey:'3589efa00780fc09bfbc1385e5deb084',
      urlBase:"https://api.openweathermap.org/data/2.5/",
      query:'',
      weather:{}
    }
  },
  methods:{
    fetchWeather(e){
      if(e.key==='Enter'){
        this.axios.get(`${this.urlBase}weather?q=${this.query}&unit=metric&APPID=${this.apiKey}`).then(res=>{
          return res.data
        }).then(this.setResults)
      }
    },
    setResults(data){
      this.weather=data
    },
    setDate(){
      let d=new Date()
      let day=d.getDay()
      let month=d.getMonth()
      let year=d.getFullYear()
      return `${day}-${month}-${year}`

    },
    setWeatherBg(){
      if(this.weather.main){
        if(this.weather.main.temp>300){
        return 'warm'
      }
      }
     
      return ''
    }
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  font-family:'montserrat',sans-serif;
}
#app{
  background-image: url('./assets/cold.jpg');
  background-size: cover;
  background-position: bottom;
  transition:0.4s; 

}
#app.warm{
  background-image: url('./assets/warm.jpg');
}
main{
  min-height: 100vh;
  padding: 25px;
  background-image: linear-gradient(to bottom,rgba(0,0,0,0.25),rgba(0,0,0,0.75));
}
.search-box{
  width: 100%;
  margin-bottom:30px;
}
.search-box .search-bar{
  display:block;
  width:100%;
  padding:15px;
  color: #313131;
  font-size:20px;
  appearance: none;
  border: none;
  outline: none;
  background: none;
  box-shadow:0px 0px 8px rgba(0,0,0,0.25);
  background-color: rgba(255,255,255,0.5);
  border-radius:0px 16px;
  transition:0.4s;
 
}
.search-box .search-bar:focus{
  box-shadow:0px 0px 16px rgba(0,0,0,0.25);
  background-color:rgba(255,255,255,0.75);
  border-radius: 16px 0px;
}
.location-box .location{
  color:#FFF;
  font-size:32px;
  font-weight:500;
  text-align:center;
  text-shadow:1px 3px rgba(0,0,0,0.25)
}
.location-box .date{
  color:#FFF;
  font-size:20px;
  font-weight:300;
  text-align:center;

}
.weather-box{
  text-align:center;
}
.weather-box .temp{
  display:inline-block;
  padding:10px 25px;
  color:#fff;
  font-size:102px;
  font-weight:900;
  text-shadow:3px 6px rgba(0,0,0,0.25);
  background-color:rgba(255,255,255,0.25);
  border-radius:16px;
  margin:30px 0px;
  box-shadow:3px 6px rgba(0,0,0,0.25);
}
.weather-box .weather{
  color:#fff;
  font-size:48px;
  font-style:italic;
  font-weight:700;
  text-shadow: 3px 6px rgba(0,0,0,0.25);
}

</style>
