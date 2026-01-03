document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Terima kasih! Pesan Anda berhasil dikirim.");
    this.reset();
});
