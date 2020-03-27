const app = new Vue({
  el: ".app",
  data: {
    message: "Hello new Vue!",
  }
})

const app2 = new Vue({
  el: ".app2",
  data: {
    message: '이 페이지는 ' + new Date() + ' 에 로드 되었습니다.'
  }
})

const app3 = new Vue({
  el: ".app3",
  data:{
    seen: true,
  }
})

const app4 = new Vue({
  el: ".app4",
  data: {
    todos: [
      { text: "Rick and Morty" },
      { text: "Rick and Morty2" },
      { text: "Rick and Morty3" },
      { text: "Rick and Morty4" },
      { text: "Rick and Morty5" },
    ],
    images: [
      "url('https://res.cloudinary.com/du25cd0bj/image/upload/v1579741611/netflixImages/rickAndMorty_ftt3ir.jpg')",
      'url("https://res.cloudinary.com/du25cd0bj/image/upload/v1579741612/netflixImages/blackmirror2_rq1mjp.png")',
      'url("https://res.cloudinary.com/du25cd0bj/image/upload/v1579741611/netflixImages/disenchantment_bzsswt.jpg")',
      'url("https://res.cloudinary.com/du25cd0bj/image/upload/v1579741612/netflixImages/strangerThings_u6vunm.jpg")',
      'url("https://res.cloudinary.com/du25cd0bj/image/upload/v1579741612/netflixImages/the_OA_unahb8.jpg")',
    ]
  },
  // methods: {
  //   viewImg: function(e){
  //     document.querySelector('.projectPreview').style.backgroundImage = this.images[i];
  //   }
  // }

})

app4.todos.push({ text: "Disenchantment" });

const app5 = new Vue({
  el: '.app5',
  data: {
    message: '나를 뒤집어 보세요.',
  },
  methods:{
    reverseMessage: function() {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

const app6 = new Vue({
  el: '.app6',
  data: {
    message: "Hello world",
  }
})