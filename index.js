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

$( "#myframe" ).load( "https://www.meet2know.com/login?sso=true", function() {
  alert( "Load was performed." );
});