export <template>
<div class="card mycard mb-4 w-96 bg-gray-700">
  <figure><img src="../assets/as.jpg" alt="car!"/></figure>
  <div class="card-body">
    <h2 class="card-title">Life hack</h2>
    <p>How to park your car at your garage?</p>
    <div class="card-actions justify-center">
      <button class="btn btn-primary">Learn now!</button>
    </div>
  </div>
</div>
</template>

<style>
.mycard{
    transition: transform 0.3s;
}

.mycard:hover{
    transform: scale(1.04);
}
</style>