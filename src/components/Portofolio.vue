<script setup>
import CardsPorto from '../components/CardsPorto.vue'
import weDream from '../assets/portofolio/wedding-dream.png'
import loveCat from '../assets/portofolio/love-cat.png'
import idea from '../assets/portofolio/soon.png'
// import mts from '../assets/mts.png'
</script>

export <template>
    <div>
        <div id="skill" className="underline underline-offset-8 text-center text-2xl text-black font-bold mb-5 mt-10"></div>
        <div className="flex justify-center mb-10">
            <kbd class="kbd text-black font-bold text-xl max-md:text-lg border-black bg-blue-300">PORTOFOLIO</kbd>
        </div>
        <div class="grid lg:grid-cols-3 md:grid-cols-2 justify-items-center">
            <CardsPorto :imgurl="weDream" LinkTo="https://mukhyiddin.github.io/Wedding-Dreaming-Mataram/" title="Wedding Dream Mataram" desc="I developed this website using HTML, JS, and CSS."/>
            <CardsPorto :imgurl="loveCat" LinkTo="https://lovely-cat.vercel.app/" title="Lovely Cat" desc="I developed this website using REACT JS Framework, Tailwind CSS,Mock Api as API."/>
            <CardsPorto :imgurl="idea" LinkTo="/resume/coomingsoon" title="Cooming Soon" desc="Cooming Soon"/>
        </div>
    </div>
    
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style>
  
  </style>