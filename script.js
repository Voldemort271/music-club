$('.count').each(function () {
  $(this).prop('Counter', 0).animate({
    Counter: $(this).text()
  }, {
    duration: (Math.random() * 2000) + 4500,
    easing: 'swing',
    step: function (now) {
      $(this).text(Math.ceil(now));
    }
  });
});

(function () {
  const scrollElements = document.querySelectorAll(
    ".scroll-animate");

  function elementIsInView(el, divisor = 1) {
    const elementTop = el.getBoundingClientRect().top;

    return elementTop <= window.innerHeight / divisor;
  }

  function handleScrollAnimation() {
    scrollElements.forEach((el) => {
      if (elementIsInView(el, 1)) {
        el.classList.add("scrolled");
      } else if (!elementIsInView(el)) {
        el.classList.remove("scrolled");
      }
    });
  }

  window.addEventListener("scroll", handleScrollAnimation);
})();

members_container = document.getElementById('members-container');

class member {
  constructor(name, pic, designation, phone) {
    this.name = name;
    this.pic = pic;
    this.designation = designation;
    this.phone = phone;
  }
}

var members = [
  new member("Sadhanna Ramesh", "assets\\members\\sadhanna.jpg", "PR & Media Head", "+91 63662 04732"),
  new member("Shivam Agarwal", "assets\\members\\shivam.jpeg", "Co-ordinator", "+91 83066 95749"),
  new member("Tejinder Sethi", "assets\\members\\tejinder.jpeg", "Logistics Head", "+91 96253 55458"),
  new member("Satvik Mishra", "assets\\members\\satvik.jpeg", "Operational Head", "+91 63060 06854"),
  new member("Yadidya Suhas", "assets\\members\\suhas.jpg", "Operational Head", "+91 94419 69069"),
  new member("Akshat Kabra", "assets\\members\\akshat.jpeg", "Operational Head", "+91 70736 63544"),
]

for (let i = 0; i < members.length; i++) {
  members_container.innerHTML += 
                  '<div class="member-card">' + 
                    '<div class="content">' + 
                      '<div class="member-pic"><img src="' + members[i].pic + '" loading="lazy"></div>' + 
                      '<div class="member-card-content">' + 
                        '<h3>' + members[i].name + '<br><span>' + members[i].designation + '</span></h3>' + 
                      '</div>' +
                    '</div>' +
                    '<div class="member-contact gold-gradient">' +
                      '<i class="fa-solid fa-phone"></i> ' + members[i].phone +
                    '</div>' +
                  '</div>'
}

performances_container = document.getElementById('performances-container')

class performance {
  constructor(name, desc, img, link) {
    this.name = name;
    this.desc = desc;
    this.img = img;
    this.link = link;
  }
}

var performances = [
  new performance('Jethro Tull', 'Cult Meet 5.0', 'assets\\thumbnails\\jethro-tull.jpg', 'https://www.youtube.com/watch?v=QcCNegRMGbk'),
  new performance('Comfortably Numb', 'EXODIA 2023', 'assets\\thumbnails\\comf-numb.jpg', 'https://www.youtube.com/watch?v=Ckm068OUNHo'),
  new performance('Choo Lo', 'Induction 2023', 'assets\\thumbnails\\choo-lo.jpg', 'https://drive.google.com/file/d/1vG9VcxV_9tFzLXo9dxys7-nMu7sdqSNo/view'),
  new performance('Jiyein Kyun', 'Induction 2023', 'assets\\thumbnails\\jiyein-kyun.jpg', 'https://drive.google.com/file/d/1oqoVTCPP63hnNlFFNwo_gD3kCxcfWY9r/view'),
  new performance('Luka Chhuppi', 'Independence Day 2023', 'assets\\thumbnails\\luka-chuppi.jpg', 'https://drive.google.com/file/d/10CBra02T3GniQ2tQHkQhP7K8-PO8f2nK/view'),
  new performance('Ae Watan', 'Independence Day 2023', 'assets\\thumbnails\\ae-watan.jpg', 'https://drive.google.com/file/d/1T2q0vWVno0w1a3aUqmLpc8DHjhtGah0B/view'),
]

for (let i = 0; i < performances.length; i++) {
  performances_container.innerHTML +=
    '<div class="card">' +
      '<img src="' + performances[i].img + '" class="card-img" loading="lazy">' +
      '<span class="card-footer">' + 
        '<span>' + performances[i].name + '</span>' + 
        '<span>' + performances[i].desc + '</span>' + 
      '</span>' +
      '<span class="card-play">' + 
        '<a href="' + performances[i].link + '" target="_blank"><i class="fa-solid fa-play silver-gradient"></i></a>' +
      '</span>' +
    '</div>'
}

events_container = document.getElementById('events-container')

class comp {
  constructor(name, date, img) {
    this.name = name;
    this.date = date;
    this.img = img;
  }
}

var imgNo = 1;
img(imgNo);

function img(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let images = document.getElementsByClassName("thumbnail");
  let caption = document.getElementById("caption");
  
  if (n > slides.length) { imgNo = 1; }
  if (n < 1) { imgNo = slides.length }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < images.length; i++) {
    images[i].className = images[i].className.replace(" active", "");
  }

  images[imgNo - 1].className += " active";
  slides[imgNo - 1].style.display = "block";
  caption.innerHTML = images[imgNo - 1].alt;
}

function changeImg(n) {
  img(imgNo = n);
}
