document.addEventListener('DOMContentLoaded', function() {
    // Get all product cards and filter buttons
    const productCards = document.querySelectorAll('.product-card');
    const filterButtons = document.querySelectorAll('.filter-btn');

    // Add click event listener to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');

            const category = this.getAttribute('data-category');

            // Filter products
            productCards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // Add click event listener to view details buttons
    const viewDetailsButtons = document.querySelectorAll('.view-details');
    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const card = this.closest('.product-card');
            const productName = card.querySelector('h2').textContent;
            const productPrice = card.querySelector('.price').textContent;
            const productMaterial = card.querySelector('.material').textContent;
            const productWeight = card.querySelector('.weight').textContent;
            const productImage = card.querySelector('img').src;

            // Create modal for detailed view
            const modal = document.createElement('div');
            modal.className = 'product-modal';
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close-modal">&times;</span>
                    <div class="modal-body">
                        <img src="${productImage}" alt="${productName}">
                        <div class="modal-info">
                            <h2>${productName}</h2>
                            <p>${productMaterial}</p>
                            <p class="modal-price">${productPrice}</p>
                            <p>${productWeight}</p>
                            <button class="add-to-cart">Add to Cart</button>
                        </div>
                    </div>
                </div>
            `;

            // Add modal to body
            document.body.appendChild(modal);

            // Add styles for modal
            const style = document.createElement('style');
            style.textContent = `
                .product-modal {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.8);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 1000;
                }
                .modal-content {
                    background: white;
                    padding: 20px;
                    border-radius: 15px;
                    max-width: 800px;
                    width: 90%;
                    position: relative;
                }
                .close-modal {
                    position: absolute;
                    right: 20px;
                    top: 20px;
                    font-size: 24px;
                    cursor: pointer;
                    color: #666;
                }
                .modal-body {
                    display: flex;
                    gap: 30px;
                    margin-top: 20px;
                }
                .modal-body img {
                    width: 300px;
                    height: 300px;
                    object-fit: cover;
                    border-radius: 10px;
                }
                .modal-info {
                    flex: 1;
                }
                .modal-info h2 {
                    color: #2c3e50;
                    margin-bottom: 15px;
                }
                .modal-price {
                    color: #2ecc71;
                    font-size: 1.5rem;
                    font-weight: bold;
                    margin: 15px 0;
                }
                .add-to-cart {
                    background: linear-gradient(to right, #e74c3c, #f1c40f);
                    color: white;
                    border: none;
                    padding: 12px 25px;
                    border-radius: 25px;
                    font-weight: bold;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                .add-to-cart:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 5px 15px rgba(231, 76, 60, 0.3);
                }
                @media (max-width: 768px) {
                    .modal-body {
                        flex-direction: column;
                    }
                    .modal-body img {
                        width: 100%;
                        height: 250px;
                    }
                }
            `;
            document.head.appendChild(style);

            // Close modal functionality
            const closeModal = modal.querySelector('.close-modal');
            closeModal.addEventListener('click', () => {
                modal.remove();
                style.remove();
            });

            // Close modal when clicking outside
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.remove();
                    style.remove();
                }
            });

            // Add to cart functionality
            const addToCartBtn = modal.querySelector('.add-to-cart');
            addToCartBtn.addEventListener('click', () => {
                alert(`${productName} added to cart!`);
                modal.remove();
                style.remove();
            });
        });
    });
}); 