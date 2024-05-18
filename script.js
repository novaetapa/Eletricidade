document.addEventListener('DOMContentLoaded', () => {
    let currentPage = 1;
    const totalPages = 5;
    const nextPageButton = document.querySelector('.next-page');
    
    function showPage(pageNumber) {
        document.querySelectorAll('.quiz-page').forEach((page, index) => {
            if (index + 1 === pageNumber) {
                page.classList.add('active');
            } else {
                page.classList.remove('active');
            }
        });
    }
    
    nextPageButton.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            showPage(currentPage);
        }
    });
    
    showPage(currentPage);
});
