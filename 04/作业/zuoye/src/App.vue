<template>
  <div>
      <Icon name="glyphicon glyphicon-heart"></Icon>
      <Button color="info" size="lg" disabled="" icon="">
        你好
      </Button>
      <Fenye>
        <ul class="pagination">
        <li>
          <a href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li>
          <a href="#">1</a>
        </li>
        <li>
          <a href="#">2</a>
        </li>
        <li>
          <a href="#">3</a>
        </li>
        <li>
          <a href="#">4</a>
        </li>
        <li>
          <a href="#">5</a>
        </li>
        <li>
          <a href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
      </Fenye>
  </div>
</template>

<script>
import Icon from "./components/Icon"
import Button from "./components/Button"
import Fenye from "./components/Fenye"
export default {
  name:'App',
  components:{
    Icon,
    Button,
    Fenye
  }
}
</script>

<style>

</style>
