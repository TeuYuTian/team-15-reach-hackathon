<template>
  <div class="hello">

          <!--Your Cart-->
      <div class="container" style="background-color: #fff5e1">
        <div style="background-color: #fff5e1">
          <H1 style="color: #4961cb; padding-top: 5%; font-weight: bold"
            >Your Cart</H1
          >
          <!--wallet box-->
          <div
            class="container"
            style="background-color: white; margin-top: 3%"
          >
            <div
              class="row text-align-center"
              style="background-color: #4961cb"
            >
              <div class="col-sm-2">
                <a
                  style="
                    color: white;
                    padding-top: 1.5%;
                    padding-bottom: 1.5%;
                    font-size: 15px;
                  "
                  >Selection</a
                >
              </div>
              <div class="col-sm-2">
                <a
                  style="
                    color: white;
                    padding-top: 1.5%;
                    padding-bottom: 1.5%;
                    font-size: 15px;
                  "
                  >Product</a
                >
              </div>
              <div class="col-sm-5">
                <a
                  style="
                    color: white;
                    padding-top: 1.5%;
                    padding-bottom: 1.5%;
                    font-size: 15px;
                  "
                  >Amount</a
                >
              </div>
              <div class="col-sm-1">
                <a
                  style="
                    color: white;
                    padding-top: 1.5%;
                    padding-bottom: 1.5%;
                    font-size: 15px;
                  "
                  >Price</a
                >
              </div>
              <div class="col-sm-2">
                <a
                  style="
                    color: white;
                    padding-top: 1.5%;
                    padding-bottom: 1.5%;
                    font-size: 15px;
                  "
                  >Item Subtotal</a
                >
              </div>
            </div>

            <!--content first row-->
            <div class="row">
              <div class="col-sm-2">
                <input
                  type="checkbox"
                  id="ItemA"
                  name="ItemA"
                  value="knitwear2.5bal"
                /><i style="font-size: 24px; padding-left: 10%" class="fa"
                  >&#xf014;</i
                >
              </div>
              <div class="col-sm-2"><p class="text-align-left">Item A</p></div>
              <div class="col-sm-5"><p class="text-align-left">1</p></div>
              <div class="col-sm-1"><p class="text-align-left">2.5</p></div>
              <div class="col-sm-2"><p class="text-align-left">2.5</p></div>
            </div>
            <!--content second row-->
            <div class="row" style="padding-bottom: 10%">
              <div class="col-sm-2">
                <input
                  type="checkbox"
                  id="ItemB"
                  name="ItemB"
                  value="knitwear3bal"
                /><i style="font-size: 24px; padding-left: 10%" class="fa"
                  >&#xf014;</i
                >
              </div>
              <div class="col-sm-2"><p class="text-align-left">Item C</p></div>
              <div class="col-sm-5"><p class="text-align-left">1</p></div>
              <div class="col-sm-1"><p class="text-align-left">3</p></div>
              <div class="col-sm-2"><p class="text-align-left">3</p></div>
            </div>
            <hr />
            <!--content delivery change and total-->
            <div class="row" style="padding-bottom: 5%">
              <div class="col-sm-12">
                <p class="text-align-right">Delivery Charge: 0.5</p>
              </div>
              <div class="col-sm-12">
                <h3
                  class="text-align-right"
                  style="color: #4961cb; font-weight: bold"
                >
                  Total: 6
                </h3>
              </div>
            </div>
          </div>
          <!--place order button-->
          <button
            class="custom-btn btn-2"
            style="color: #4961cb; margin-top: 5%; margin-bottom: 5%"
          >
            <span>Place Order</span>
          </button>
          <hr />
        </div>


      </div>



  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
