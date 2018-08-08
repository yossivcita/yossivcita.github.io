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


var request = new XMLHttpRequest();
request.open('GET', 'https://www.meet2know.com/login?sso=true', true);
request.onreadystatechange = () => {
  if (request.readyState==4) {
    alert("It worked!")
    //If the expected response is text/plain
    document.querySelector('iframe')[0]
    .contentDocument.write(data)
  }

};
request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
request.setRequestHeader("Connection", "close");
request.send();

  
