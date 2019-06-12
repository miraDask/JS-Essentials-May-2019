function solve() {

    let addProductButtonCollection = Array.from(document.querySelectorAll('.add-product'));
    let checkoutButton = document.querySelector('.checkout');
    let outPutTextAreaElement = document.querySelector('textarea');
    let totalSum = 0;
    let purchasedProducts = [];
    let outputText = '';

    let handlePurchaseEvent = (event) => {
        let currentButtonElement = event.currentTarget;
        let productElement = currentButtonElement.parentNode.parentNode;
        let productData = Array.from(productElement.children);
        let productTitle = productData[1].children[0].textContent;

        if (!purchasedProducts.includes(productTitle)){
            purchasedProducts.push(productTitle);
        }

        let productPrice = Number(productData[3].textContent);
        totalSum += productPrice;
        outputText += `Added ${productTitle} for ${productPrice.toFixed(2)} to the cart.${'\n'}`;
        outPutTextAreaElement.value = outputText;
    };

    addProductButtonCollection.forEach(b => b.addEventListener('click', handlePurchaseEvent));

    let checkoutEvent = () =>{
        outputText += `You bought ${purchasedProducts.join(', ')} for ${totalSum.toFixed(2)}.`;
        outPutTextAreaElement.value = outputText;
        addProductButtonCollection.forEach(b => b.removeEventListener('click', handlePurchaseEvent));
        checkoutButton.removeEventListener('click', checkoutEvent);
    };

    checkoutButton.addEventListener('click', checkoutEvent);
}