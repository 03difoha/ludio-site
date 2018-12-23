<template>
  <div>
    <b-btn v-b-modal.modalPrevent>Launch demo modal</b-btn>
    <!-- Main UI -->
    <div class="mt-3 mb-3">
      Submitted Names:
      <ul>
        <li v-for="n in names">{{n}}</li>
      </ul>
    </div>
    <!-- Modal Component -->
    <b-modal id="modalPrevent"
             ref="modal"
             @ok="handleOk"
             :title="title"
             @shown="clearName">
      <form @submit.stop.prevent="handleSubmit" method="POST">
        <b-form-input hidden name="u" value="fb66abc77bce32858a9bdf813"></b-form-input>
        <b-form-input hidden name="id" value="67afc8c3d2"></b-form-input>
        <b-form-input name="MERGE1" id="MERGE1" size="25" value="" type="text" placeholder="Enter your name" v-model="name"></b-form-input>
        <b-form-input type="email" autocapitalize="off" autocorrect="off" name="MERGE0" id="MERGE0" size="25" value="" placeholder="Enter your email" v-model="email"></b-form-input>
      </form>
      <!-- <form action="https://xyz.us7.list-manage.com/subscribe/post" method="POST">
      <input type="hidden" name="u" value="fb66abc77bce32858a9bdf813">
      <input type="hidden" name="id" value="67afc8c3d2">
      <input type="text" name="MERGE1" id="MERGE1" size="25" value="">
      <input type="email" autocapitalize="off" autocorrect="off" name="MERGE0" id="MERGE0" size="25" value="">
      </form> -->
    </b-modal>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      email: '',
      names: [],
      title: 'Like to follow updates with Ludio?'
    }
  },
  
  methods: {
    handleOk (evt) {
      // Prevent modal from closing
      evt.preventDefault()
      if (!this.name) {
        alert('Please enter your email')
      } else {
        this.handleSubmit()
      }
    },
    clearName(){},
    handleSubmit () {
      this.names.push(this.name)
      // POST /someUrl
  this.$http.post('https://xyz.us7.list-manage.com/subscribe/post', {foo: 'bar'}).then(response => {

    // get status
    response.status;

    // get status text
    response.statusText;

    // get 'Expires' header
    response.headers.get('Expires');

    // get body data
    this.someData = response.body;

  }, response => {
    // error callback
  });
    }
  }
}
</script>

<!-- modal-prevent-1.vue -->



    
