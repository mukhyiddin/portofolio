export <template>    
<div class="navbar active fixed w-full bg-purple-600 z-20 font-bold bg-opacity-40 backdrop-blur-sm"
:class="{'navbar bg-opacity-40 bg-purple-600 font-bold fixed full z-20' : !showBackground}">
  <div class="flex-1">
    <a href="#ahay" class="normal-case text-xl ml-2">Yudi</a>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1">
                    <li><a href="#aboutme">About Me</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#skill">Skill</a></li>
                    <li><a href="#contact">Contact</a></li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
 
}
// setup(){
//     showBackground : ref(false)

//     document.addEventListener("scroll", function (){
//         let bodyTopPosition = document.body.getBoundingClientRect().top

//     if (bodyTopPosition < -100){
//             showBackground.value = true
//         }else{
//             showBackground.value = false
//     }
//     });

// return {
//     showHideBackground
// };
// }

</script>

<style>

</style>