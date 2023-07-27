<script setup>
    import CardsPorto from '../components/CardsPorto.vue'
</script>

export <template>
    <div>
        <div id="skill" className="underline underline-offset-8 text-center text-2xl text-black font-bold mb-5 mt-10"></div>
        <div className="flex justify-center mb-10">
            <kbd class="kbd text-black font-bold text-xl border-black bg-blue-300">PORTOFOLIO</kbd>
        </div>
        <div class="grid lg:grid-cols-3 md:grid-cols-2 justify-items-center">
            <CardsPorto/>
            <CardsPorto/>
            <CardsPorto/>
            <CardsPorto/>
            <CardsPorto/>
            <CardsPorto/>
        </div>
    </div>
    
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style>
  
  </style>