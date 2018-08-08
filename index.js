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

// axios.get('https://www.vcita.com/v/liwna9ofpyzzn2l0/online_scheduling?email=fucs%40gmail.com&amp;s=aHR0cHM6Ly9saXZlLnZjaXRhLmNvbS9zaXRlL2xpd25hOW9mcHl6em4ybDA%3D&amp;o=cHJvZmlsZV9wYWdl&amp;vitrage_iframe=true')
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log('error');
//     console.log(error);
//   });
 
