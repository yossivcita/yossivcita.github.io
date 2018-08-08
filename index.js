var vm = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar'
  },
  computed: {
    fullName() {
      console.log(this)
      return this.firstName + ' ' + this.lastName
    }
  }
})

$( "#myframe" ).load( "ajax/test.html", function() {
  alert( "Load was performed." );
});