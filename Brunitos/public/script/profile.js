  document.addEventListener("DOMContentLoaded", function () {
    const ordersTable = document.querySelector(".order_listing tbody");
    const orders = Array.from(ordersTable.querySelectorAll("tr"));
    const ordersPerPage = 20;
    let currentPage = 1;
    const totalPages = Math.ceil(orders.length / ordersPerPage);

    function updatePagination() {
      document.querySelector(".current-page").textContent = `Page ${currentPage}`;
      document.querySelector(".total-pages").textContent = `${totalPages}`;
    }

    function showPage(page) {
      orders.forEach((order, index) => {
        order.style.display = (index >= (page - 1) * ordersPerPage && index < page * ordersPerPage) ? "table-row" : "none";
      });
      updatePagination();
    }

    function createPaginationControls() {
      const paginationDiv = document.querySelector(".pagination");
      const prevButton = document.createElement("button");
      prevButton.textContent = "Précédent";
      prevButton.addEventListener("click", () => {
        if (currentPage > 1) {
          currentPage--;
          showPage(currentPage);
        }
      });

      const nextButton = document.createElement("button");
      nextButton.textContent = "Suivant";
      nextButton.addEventListener("click", () => {
        if (currentPage < totalPages) {
          currentPage++;
          showPage(currentPage);
        }
      });

      paginationDiv.appendChild(prevButton);
      paginationDiv.appendChild(nextButton);
    }

    if (totalPages > 1) {
      createPaginationControls();
    }
    
    showPage(currentPage);
  });
