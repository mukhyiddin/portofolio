export <template>
    <div id="aboutme" class="pt-12 pl-2 pr-2 max-lg:pl-10 max-lg:pr-10 max-sm:mb-10">
                <div class="stats border shadow mt-10 mb-10 pl-10 pr-10 pt-5 pb-5 " style="background-color: #2A303C;">
                  <div class="stat max-sm:mr-16">
                      <div class="stat-figure text-lime-400">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                      </div>
                      <div class="stat-value text-secondary max-lg:text-2xl max-md:text-lg">About Me</div>
                      <div class="mt-2 text-left text-lime-300 text-lg max-lg:text-xs">Hellow, Im from indonesia <br />
                          S1 graduate with GPA 3.01 from STIKI Malang in the major<br />
                          informatics in 2021, have the ability to develop<br />
                          such as designing an android application, website, software, etc<br />
                          games. From various programming languages.<br />
                      </div>
                  </div>
  
                  <div class="stat">
                      <div class="stat-figure text-secondary">
                          <div class="avatar">
                              <div class="w-32 ml-10 rounded-full ring ring-secondry ring-offset-base-100 ring-offset-2">
                                  <img class="profile" :src="profile" />
                              </div>
                          </div>
                      </div>
                      <div class="stat-value text-secondary max-lg:text-2xl">Mukhyiddin</div>
                      <div class="text-lg text-secondary max-lg:text-xl">Back End Developer</div>
                      <a href="https://www.linkedin.com/in/yudi-mukhyiddin-19591a133/" target="_blank" rel="noreferrer" class="font-bold text-lime-400 max-lg:text-lg">My Linkedin</a>
  
                  </div>
  
              </div>
          </div>
  </template>
  
  <script setup>
  import profile from '../assets/profile.jpg'

  </script>
  
  <style>
    .profile {
        height:200px;
        width:200px;
        position: relative;
    }

    .profile {
    transition: transform 0.5s ease;
    }

    .profile:hover {
    transform: scale(1.6);
    }
  </style>