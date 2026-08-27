const filterButtons = document.querySelectorAll('.filter-btn');
const favoriteCards = document.querySelectorAll('.favorite-card');

filterButtons.forEach(function(button) {

  button.addEventListener('click', function() {

    const filter = button.dataset.filter;

    // 버튼 active 변경
    filterButtons.forEach(function(btn) {
      btn.classList.remove('active');
    });

    button.classList.add('active');

    // 카드 필터링
    favoriteCards.forEach(function(card) {

      if (
        filter === 'all' ||
        card.dataset.category === filter
      ) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }

    });

  });

});
const cardImages = document.querySelectorAll('.card-image');
const imageModal = document.querySelector('.image-modal');
const modalImage = document.querySelector('.modal-image');

cardImages.forEach(function(image) {

  // 카드 이미지 클릭 → 크게 보기
  image.addEventListener('click', function() {
    modalImage.src = image.src;
    modalImage.alt = image.alt;

    imageModal.classList.add('active');
  });

});

// 확대된 이미지 다시 클릭 → 닫기
modalImage.addEventListener('click', function() {
  imageModal.classList.remove('active');
});