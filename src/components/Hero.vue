export <template>
    <div class="hero min-h-screen h-96" style="background-image: url(https://www.addictivetips.com/app/uploads/2020/04/HmgQJDl.jpg);">
        <div className="hero-overlay bg-opacity-50  backdrop-blur-sm"></div>
        <div class="hero-content  text-center text-neutral-content">
    <div class="max-w-xl">
      <h1 class="mb-5 text-5xl font-bold text-lime-300">Welcome To My Website</h1>
      <p class="mb-5 text-1xl font-bold text-lime-300">let's get to know me closer</p>
      <a href="#aboutme"><button href="#aboutme" class="btnhov rounded-xl text-bold"><span>Get In Touch</span></button></a>
    </div>
  </div>
</div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Amatic+SC');

body {
  margin: 0;
  height: 100%;
  background-image: linear-gradient(to top, #d9afd9 0%, #97d9e1 100%);
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}

.description, .link {
  font-family: 'Amatic SC', cursive;
  text-align: center;
}

.description {
  font-size: 35px;
}

.btnhov {
  border: none;
  text-align: center;
  cursor: pointer;
  text-transform: capitalize;
  outline: none;
  overflow: hidden;
  position: relative;
  color: rgb(0, 0, 0);
  font-weight: 700;
  font-size: 16px;
  background-color: rgba(255, 255, 255, 0.274);
  padding: 17px 50px;
  margin: 0 auto;
  box-shadow: 0 5px 15px rgba(0,0,0,0.20);
}

.btnhov span {
  position: relative; 
  z-index: 1;
}

.btnhov:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  height: 490%;
  width: 140%;
  background: #a2ff00;
  -webkit-transition: all .5s ease-in-out;
  transition: all .5s ease-in-out;
  -webkit-transform: translateX(-98%) translateY(-25%) rotate(45deg);
  transform: translateX(-98%) translateY(-25%) rotate(45deg);
}

.btnhov:hover:after {
  -webkit-transform: translateX(-9%) translateY(-25%) rotate(45deg);
  transform: translateX(-9%) translateY(-25%) rotate(45deg);
}

.link {
  font-size: 20px;
  margin-top: 30px;
}

.link a {
  color: white;
  font-size: 25px; 
}
</style>