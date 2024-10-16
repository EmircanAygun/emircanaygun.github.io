// sosyal medya ikonlarının fade efektleri
const icons = document.querySelectorAll('.profile-links a');

icons.forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icons.forEach(i => {
            if (i !== icon) {
                i.classList.add('fade');
            }
        });
    });

    icon.addEventListener('mouseout', () => {
        icons.forEach(i => {
            i.classList.remove('fade');
        });
    });
});
    

// Ekran genişliğini kontrol eden işlev
function isNarrowScreen() {
    return window.innerWidth < 769; // 768 pikselden daha dar ekran
}

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.getElementById("closeModal");
const prevImage = document.getElementById("prevImage");
const nextImage = document.getElementById("nextImage");
const centerImage = document.getElementById("centerImage"); // Ortasına tıklama alanı
const images = document.querySelectorAll(".your-image-class");
const imageInfo = document.getElementById("imageInfo");
const imageInfo_h2 = document.querySelector('#imageInfo strong');
const imageInfo_p = document.querySelector('#imageInfo p');

let currentIndex = -1;

// Yinelemeli bir sıraya sokmak için boş bir dizi oluştur
const sortedImages = [];
const columns = document.querySelectorAll('.art-column');

// Sütunlarda en fazla kaç resim olduğunu bul
const maxImages = Math.max(...Array.from(columns).map(col => col.querySelectorAll('img').length));

// Sıralama işlemi: Her bir sütundaki resimleri sırayla kaydet
for (let i = 0; i < maxImages; i++) {
    columns.forEach(col => {
        const img = col.querySelectorAll('img')[i]; // Yalnızca img elementlerini seç
        // Eğer sütunda o sıradaki resim varsa, dizimize ekleyelim
        if (img) {
            sortedImages.push(img);
        }
    });
}
// Resimlerin alt (veya src) özelliklerini konsolda göster
sortedImages.forEach(img => {
    console.log(img.alt); // veya img.src
});

const imageDescriptions = [
    "Mini Watercolor Portrait",
    "A Butterfly Up On The Dog's Nose",
    "Starry Earrings",

    "Snow",
    "Robin Williams",
    "Angora Cat",

    "Koi Fish With Ceramic Vibes",
    "Ghost Dog",
    "Monk and Carved Sword",
    
    "Appa",
    "Mini Watercolor Portrait",
    "Mini Watercolor Portrait",

    "Morpheus",
    "Neo",
    "Wild Space",

    "Mini Watercolor Portrait",
    "Jake Gyllanhaal / Nightcrawler",
    "Falling Down / William Foster",

    "Vito Corleone",
    "Natalie Portman",
    "Watercolor Batman Comic Style",

    "Fight Club",
    "Dunkirk",
    "Pulp Fiction",

    "Spiderman / Tobey Maguire",
    "Daenerys Targaryen",
    "Se7en",
    
    "Interstellar",
    "Ceasar",
    "Pistachios",

    "Batman",
    "J.R.R. Tolkien",
    "Gandalf",

    "Sauron's Eye",
    "Three Headed Lion",
    "Samurai",

    "Knight & Grizzly Bear",
    "Scarlett Johansson",
    "Direwolf & The Old Tree",

    "Night King",
    "Deer",
    "Samurai Jack & Aku",

    "Anakin / Vader",
    "Darth Maul",
    "The Man In Black / Westworld",

    "Doctor Strange",
    "Cable",
    "John Wick",
    
    "Martin Freemann",
    "Benedict Cumberbatch",
    "Gandalf",

    "Mountain & Lake",
    "Duke / Isle of Dogs",
    "Inception Totem",

    "Carved Wolf Head / GoT",
    "Mountains",
    "Eyes",

    "Jim Moriarty",
    "Horse",
    "Hugh Jackman",

    "Batman",

];
const imageDescriptions2 = [
    "2024, watercolor, 5.9 x 4.9 cm",
    "2023, sculpture",
    '2023, charcoal, 9 x 12 cm',

    "2022, ink, 11.8 x 7.8 cm",
    "2022, watercolor, 3.1 x 3.6 cm",
    "2022, sculpture",

    "2021, charcoal, 13 x 9.2 cm",
    "2021, charcoal, 5.9 x 9 cm",
    "2021, ink, 13 x 9.2 cm",

    "2021, sculpture",
    "2020, watercolor, 3.7 x 3 cm",
    "2020, watercolor, 3.5 x 3 cm",

    "2020, sculpture",
    "2020, watercolor, 11.2 x 12.2 cm",
    "2020, ink",

    "2020, monochrome watercolor, 3.8 x 3 cm",
    "2020, monochrome watercolor, 9.2 x 10.7 cm",
    "2020, monochrome watercolor, 13 x 9.2 cm",

    "2019, monochrome watercolor, 11.2 x 9.2 cm",
    "2019, monochrome watercolor, 11 x 9.2 cm",
    "2019, watercolor, 7.3 x 7.3 cm",

    "2019, watercolor, 12.1 x 9.2 cm",
    "2019, watercolor, 12 x 9.2 cm",
    "2019, ink",

    "2019, ink",
    "2019, ink / dotwork",
    "2019, ink",

    "2019, ink",
    "2019, white ink",
    "2019, marker",

    "2019, white ink",
    "2019, ink",
    "2019, ink",

    "2019, ink",
    "2019, ink",
    "2019, ink",

    "2018, ink, 29.7 x 21 cm",
    "2018, ink / dotwork",
    "2018, ink, 29.7 x 21 cm",

    "2018, ink / dotwork",
    "2018, ink / dotwork",
    "2018, ink",

    "2018, ink / dotwork",
    "2018, ink / dotwork",
    "2018, ink / dotwork",

    "2018, ink / dotwork",
    "2018, charcoal",
    "2018, ink",

    "2018, charcoal",
    "2018, charcoal",
    "2018, sculpture",

    "2018, watercolor",
    "2018, sculpture",
    "2018, sculpture",

    "2018, wood carving",
    "2017, watercolor",
    "2017, charcoal",

    "2017, charcoal",
    "2017, charcoal",
    "2017, charcoal",
    
    "2017, charcoal",
];

// Resim bilgilerini göstermek için bir işlev 
function showImageInfo(index) {
    imageInfo.style.display="block";
    
    imageInfo_h2.textContent = imageDescriptions[index];
    imageInfo_h2.style.display = "block";

    imageInfo_p.innerHTML = imageDescriptions2[index];
    imageInfo_p.style.display = "block";
}

// Resimlere tıklanıldığında modal'i aç
sortedImages.forEach((image, index) => {
    image.onclick = function () {
        if (isNarrowScreen()) return; // Dar ekranda modal açılmasın
        modal.style.display = "flex"; 
        modalImg.src = this.src;
        closeBtn.style.display = "block";
        currentIndex = index;
        showImageInfo(index); // Resim bilgilerini göster
        sortedImages.forEach(img => img.style.display = 'none'); // Diğer resimleri gizle
    }
});

function prevImageFunction(){
    // Önce geçerli resmi fade-out yap
    modalImg.classList.add('fade-out');
    
    // 0.5 saniye bekleyip resmi değiştir ve fade-out'u kaldır
    setTimeout(function() {
        currentIndex = (currentIndex - 1 + sortedImages.length) % sortedImages.length;
        modalImg.src = sortedImages[currentIndex].src;
        showImageInfo(currentIndex); // Resim bilgilerini güncelle

        // Yeni resmi fade-in yapmak için fade-out sınıfını kaldır
        modalImg.classList.remove('fade-out');
    }, 200); // CSS'teki geçiş süresiyle aynı olmalı (0.5s)
}

function nextImageFunction(){
    // Önce geçerli resmi fade-out yap
    modalImg.classList.add('fade-out');

    // 0.5 saniye bekleyip resmi değiştir ve fade-out'u kaldır
    setTimeout(function() {
        currentIndex = (currentIndex + 1) % sortedImages.length;
        modalImg.src = sortedImages[currentIndex].src;
        showImageInfo(currentIndex); // Resim bilgilerini güncelle

        // Yeni resmi fade-in yapmak için fade-out sınıfını kaldır
        modalImg.classList.remove('fade-out');
    }, 200); // CSS'teki geçiş süresiyle aynı olmalı (0.5s)
}

// Önceki resime geçmek için resmin soluna tıklama
prevImage.onclick = function() {
    prevImageFunction();
}

// Sonraki resime geçmek için resmin sağına tıklama
nextImage.onclick = function() {
    nextImageFunction();
}

// Modalı kapatma - (Resim ortasına tıklayarak)
centerImage.onclick = function() {
    closeModal();
}

// Modalı kapatma - (Close buttonuna basarak)
closeBtn.onclick = function () {
    closeModal();
}

// Modalı kapatma fonksiyonu
function closeModal() {
    modal.style.display = "none";
    sortedImages.forEach(img => img.style.display = 'block'); // Diğer resimleri göster
    imageInfo_h2.style.display = "none"; // Resim bilgilerini gizle
    imageInfo_p.style.display = "none"; // Resim bilgilerini gizle
    modalImg.src = "";
}

// Modal dışında bir yere tıklanıldığında kapatma
window.onclick = function (event) {
    if (event.target == modal) {
        closeModal();
    }
}

// Klavye yön tuşları ile navigasyon
document.addEventListener('keydown', function(event) {
    if (modal.style.display === "flex") {
        if (event.key === 'ArrowRight') {
            nextImageFunction();
        } else if (event.key === 'ArrowLeft') {
            prevImageFunction();
        }
    }
});

const aboutMeLink = document.querySelector('.about-me-link');
const worksLink = document.querySelector('.works-link');
const cvLink = document.querySelector('.cv-link');

document.getElementById('profileName').addEventListener('click', function() {
    document.querySelector('.art-gallery').style.display = 'flex';

    modal.style.display = "none";
    imageInfo_h2.style.display = "none"; // Resim bilgilerini gizle
    imageInfo_p.style.display = "none"; // Resim bilgilerini gizle
    sortedImages.forEach(img => img.style.display = 'block'); // Diğer resimleri gizle
    document.querySelector('.about-me-content').style.display = 'none';
    document.getElementById('aboutMeLink').style.color = '#000000'; // About Me bağlantısının rengini değiştir
    document.getElementById('worksLink').style.color = '#666666'; 

});

// Başlangıçta "Works" gri, "About Me" siyah
worksLink.style.color = '#666666';
aboutMeLink.style.color = '#000000';
cvLink.style.color = '#000000';

// Aktif bağlantıyı takip etmek için bir değişken oluşturuyoruz
let activeLink = worksLink; // Başlangıçta About Me aktif

// Works linkine mouseover ve mouseout
worksLink.addEventListener('mouseover', function() {
    if (activeLink == worksLink) {
        worksLink.style.color = '#000000'; // Siyah yap
    }
});

worksLink.addEventListener('mouseout', function() {
    if (activeLink == worksLink) {
        worksLink.style.color = '#666666'; // Geri gri yap
    }
});

// About Me linkine mouseover ve mouseout
aboutMeLink.addEventListener('mouseover', function() {
    if (activeLink == aboutMeLink) {
        aboutMeLink.style.color = '#000000'; // Siyah yap
    }
});

aboutMeLink.addEventListener('mouseout', function() {
    if (activeLink == aboutMeLink) {
        aboutMeLink.style.color = '#666666'; // Geri gri yap
    }
});

// About Me linkine tıklama
aboutMeLink.addEventListener('click', function(event) {
    event.preventDefault();
    modal.style.display = "none";
    imageInfo_h2.style.display = "none"; // Resim bilgilerini gizle
    imageInfo_p.style.display = "none"; // Resim bilgilerini gizle
    sortedImages.forEach(img => img.style.display = 'none'); // Diğer resimleri gizle
    document.querySelector('.about-me-content').style.display = 'block';
    modalImg.src = "";
    document.querySelector('.art-gallery').style.display = 'none';

    if (aboutMeLink !== activeLink){
    // "About Me" aktif hale gelir, "Works" pasif olur
    activeLink = aboutMeLink;

    // "About Me" gri, "Works" siyah olacak
    aboutMeLink.style.color = '#666666';
    worksLink.style.color = '#000000';
    cvLink.style.color = '#000000';
    }
});

// Works linkine tıklama
worksLink.addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.art-gallery').style.display = 'flex';
    modal.style.display = "none";
    imageInfo_h2.style.display = "none"; // Resim bilgilerini gizle
    imageInfo_p.style.display = "none"; // Resim bilgilerini gizle
    sortedImages.forEach(img => img.style.display = 'block'); // Diğer resimleri gizle
    document.querySelector('.about-me-content').style.display = 'none';
    
    if (worksLink !== activeLink){
    // "Works" aktif hale gelir, "About Me" pasif olur
    activeLink = worksLink;

    // "Works" siyah, "About Me" gri olacak
    worksLink.style.color = '#666666';
    aboutMeLink.style.color = '#000000';
    cvLink.style.color = '#000000';
    }
});

// cv linkine tıklama
cvLink.addEventListener('click', function(event) {
    event.preventDefault(); // Varsayılan link davranışını engelle
    
    // PDF dosyasının yolunu belirtiyoruz
    const pdfUrl = 'resume.pdf'; // Buraya CV PDF dosyanın yolunu yaz
    
    // Yeni sekmede PDF'i açıyoruz
    window.open(pdfUrl, '_blank');
});

// Ekran yeniden boyutlandırıldığında modal'ı kontrol eden işlev(modalın işlevini kapatır.)
window.onresize = function () {
    if (isNarrowScreen() && modal.style.display === "flex") {
        closeModal();
    }
};
